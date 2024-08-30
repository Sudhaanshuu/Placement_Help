document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const postType = document.getElementById('postType').value;
    const companyName = document.getElementById('companyName').value;
    const description = document.getElementById('description').value;
    const applyLink = document.getElementById('applyLink').value;

    const post = {
        type: postType,
        company: companyName,
        description: description,
        link: applyLink
    };

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    renderPosts();
    this.reset();
});

function renderPosts() {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';

    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';

        postDiv.innerHTML = `
            <h3>${post.type}: ${post.company}</h3>
            <p>${post.description}</p>
            <a href="${post.link}" target="_blank">Apply Here</a>
            <button onclick="removePost(${index})">Remove</button>
        `;

        postsContainer.appendChild(postDiv);
    });
}

function removePost(index) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
    renderPosts();
}

document.addEventListener('DOMContentLoaded', renderPosts);