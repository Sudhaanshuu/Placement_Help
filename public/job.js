document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const postData = {
        postType: document.getElementById('postType').value,
        companyName: document.getElementById('companyName').value,
        description: document.getElementById('description').value,
        applyLink: document.getElementById('applyLink').value
    };

    fetch('/post-job', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            loadPosts();
        })
        .catch(err => console.error('Error:', err));
});

// Function to load and display posted jobs/internships
function loadPosts() {
    fetch('/fetch-jobs')
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('postsContainer');
            postsContainer.innerHTML = '';

            posts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.innerHTML = `
                <h4>${post.postType === 'job' ? 'Job' : 'Internship'} at ${post.companyName}</h4>
                <p>${post.description}</p>
                <a href="${post.applyLink}" target="_blank">Apply Here</a>
                <hr>
            `;
                postsContainer.appendChild(postDiv);
            });
        })
        .catch(err => console.error('Error fetching posts:', err));
}

// Load posts on page load
window.onload = loadPosts;