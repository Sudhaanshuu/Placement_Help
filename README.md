# Placement Help

Welcome to Placement Help! This repository is designed to assist you in preparing for placements and improving your coding skills.

Link: [Placement Help](https://placementhelp.netlify.app/)

## Features
- **Practice Problems**: Access a curated collection of coding problems from various platforms.
- **Interview Tips**: Tips and resources to help you ace technical interviews.
- **Contributions**: Contribute your own coding problems and solutions to help others.

## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MySQL
- Authentication: JSON Web Tokens (JWT)
- Contact: formspree
- Hosting: Netlify

## Getting Started

To get started with Placement Help locally, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/Sudhaanshuu/Placement_Help.git
   ```

2. Install dependencies:
   ```bash
   cd Placement_Help
   npm init -y
   npm install express mysql2 bcryptjs jsonwebtoken body-parser express-session
   ```

3. Set up MySQL:
   ```bash
   mysql -u root -p
   ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysqlpass';
   FLUSH PRIVILEGES;
   exit
   ```

4. Install additional MySQL dependencies:
   ```bash
   npm install mysql2@latest
   npm install mysql2
   ```

5. Set up the database:
   ```sql
   CREATE DATABASE mywebsite_db;
   USE mywebsite_db;

   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       password VARCHAR(255) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   CREATE TABLE jobs (
       id INT AUTO_INCREMENT PRIMARY KEY,
       postType VARCHAR(20),
       companyName VARCHAR(255),
       description TEXT,
       applyLink VARCHAR(255)
   );

   CREATE TABLE projects (
       id INT AUTO_INCREMENT PRIMARY KEY,
       userEmail VARCHAR(255),
       projectDescription TEXT,
       deliveryTime DATE,
       budget DECIMAL(10, 2)
   );
   ```

6. Start the application:
   ```bash
   node app.js
   ```

7. Open your browser and visit: `http://localhost:3000` (or the port specified in your app.js)

## Contributing
- Contributions are welcome! If you have any ideas or suggestions to improve this project, feel free to fork the repository and submit a pull request.
- Check CONTRIBUTING.md for details.

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
