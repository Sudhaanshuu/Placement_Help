const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();

// Set up body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Session configuration
app.use(session({
    secret: 'secret-key',
    resave: true,
    saveUninitialized: true
}));

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '418667',
    database: 'mywebsite_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Middleware to check authentication
const checkAuth = (req, res, next) => {
    if (req.session.token) {
        next();
    } else {
        res.redirect('/login.html');
    }
};

// Register User
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;

        // Insert user into database
        db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hash], (err, result) => {
            if (err) throw err;
            res.send('User registered');
        });
    });
});

// Login User
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Fetch user from database
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            // Compare hashed password
            bcrypt.compare(password, result[0].password, (err, isMatch) => {
                if (isMatch) {
                    // Create JWT token or set session
                    const token = jwt.sign({ id: result[0].id }, 'secret-key', { expiresIn: '1h' });
                    req.session.token = token; // Save token to session

                    // Respond with success
                    res.json({ success: true });
                } else {
                    // Wrong password
                    res.json({ success: false, message: 'Incorrect password' });
                }
            });
        } else {
            // Email not found
            res.json({ success: false, message: 'Email not found' });
        }
    });
});

// Serve HTML files from public directory
app.get('/', checkAuth, (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/signup.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/signup.html'));
});

// Protected route example
app.get('/dashboard', checkAuth, (req, res) => {
    res.send('Welcome to your dashboard');
});
app.get('/job', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'job.html'));
});


// API to post a job/internship
app.post('/post-job', (req, res) => {
    const { postType, companyName, description, applyLink } = req.body;

    const sql = `INSERT INTO jobs (postType, companyName, description, applyLink) VALUES (?, ?, ?, ?)`;
    db.query(sql, [postType, companyName, description, applyLink], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Database Error');
        } else {
            res.status(200).send('Job/Internship posted successfully');
        }
    });
});

// API to fetch jobs/internships
app.get('/fetch-jobs', (req, res) => {
    const sql = `SELECT * FROM jobs`;
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send('Database Error');
        } else {
            res.status(200).json(results);
        }
    });
});