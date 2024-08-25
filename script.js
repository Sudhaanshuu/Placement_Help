function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear();

document.getElementById('meeting-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const meeting = {
        name: document.getElementById('meetingName').value,
        id: document.getElementById('meetingId').value,
        date: document.getElementById('meetingDate').value,
        time: document.getElementById('meetingTime').value,
        duration: document.getElementById('duration').value,
        attendees: document.getElementById('attendees').value
    };

    let meetings = JSON.parse(localStorage.getItem('meetings')) || [];
    meetings.push(meeting);
    localStorage.setItem('meetings', JSON.stringify(meetings));

    loadMeetings();

    // Clear all input fields after booking the meeting
    document.getElementById('meeting-form').reset();
});

function loadMeetings() {
    const meetingsContainer = document.querySelector('.meetings-container');
    meetingsContainer.innerHTML = '';

    let meetings = JSON.parse(localStorage.getItem('meetings')) || [];

    meetings.forEach((meeting, index) => {
        const meetingDiv = document.createElement('div');
        meetingDiv.className = 'meeting-item';
        meetingDiv.innerHTML = `
            <strong>${meeting.name}</strong><br>
            ID: ${meeting.id}<br>
            Date: ${meeting.date} | Time: ${meeting.time}<br>
            Duration: ${meeting.duration} minutes<br>
            Attendees: ${meeting.attendees}
            <button class="delete-meeting" onclick="deleteMeeting(${index})">Delete</button>
        `;
        meetingsContainer.appendChild(meetingDiv);
    });

    document.getElementById('delete-meetings').style.display = meetings.length > 0 ? 'block' : 'none';
}

function deleteMeeting(index) {
    let meetings = JSON.parse(localStorage.getItem('meetings')) || [];
    meetings.splice(index, 1);
    localStorage.setItem('meetings', JSON.stringify(meetings));
    loadMeetings();
}

document.getElementById('delete-meetings').addEventListener('click', function() {
    localStorage.removeItem('meetings');
    loadMeetings();
});

document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const post = {
        email: document.getElementById('userEmail').value,
        description: document.getElementById('projectDescription').value,
        deliveryTime: document.getElementById('deliveryTime').value,
        budget: document.getElementById('budget').value
    };

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    loadPosts();

    // Clear all input fields after posting
    document.getElementById('post-form').reset();
});

function loadPosts() {
    const postsContainer = document.querySelector('.posts-container');
    postsContainer.innerHTML = '';

    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post-item';
        postDiv.innerHTML = `
            <strong>Email:</strong> ${post.email}<br>
            <strong>Project Description:</strong> ${post.description}<br>
            <strong>Delivery Time:</strong> ${post.deliveryTime}<br>
            <strong>Budget:</strong> $${post.budget}
            <button class="delete-post" onclick="deletePost(${index})">Delete</button>
        `;
        postsContainer.appendChild(postDiv);
    });
}

function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
    loadPosts();
}

window.onload = function() {
    loadMeetings();
    loadPosts();
};