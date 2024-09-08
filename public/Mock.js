let mediaRecorder;
let recordedChunks = [];
let questionAsked = false;

// Set up video streaming
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        const video = document.getElementById('cameraView');
        video.srcObject = stream;

        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = event => {
            if (event.data.size > 0) {
                recordedChunks.push(event.data);
            }
        };
    })
    .catch(error => console.error('Error accessing media devices.', error));

// Handle buttons
document.getElementById('startBtn').addEventListener('click', () => {
    mediaRecorder.start();
    document.getElementById('pauseBtn').disabled = false;
    document.getElementById('resumeBtn').disabled = false;
    document.getElementById('stopBtn').disabled = false;
    document.getElementById('generateQuestionBtn').disabled = true;
    document.getElementById('nextQuestionBtn').disabled = false;

    if (!questionAsked) {
        generateQuestion();
    }
});

document.getElementById('pauseBtn').addEventListener('click', () => {
    mediaRecorder.pause();
});

document.getElementById('resumeBtn').addEventListener('click', () => {
    mediaRecorder.resume();
});

document.getElementById('muteBtn').addEventListener('click', () => {
    const video = document.getElementById('cameraView');
    video.muted = !video.muted;
});

document.getElementById('stopBtn').addEventListener('click', () => {
    mediaRecorder.stop();
    mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'mock-interview.webm';
        a.click();
        URL.revokeObjectURL(url);
    };
    document.getElementById('pauseBtn').disabled = true;
    document.getElementById('resumeBtn').disabled = true;
    document.getElementById('stopBtn').disabled = true;
    document.getElementById('generateQuestionBtn').disabled = false;
    document.getElementById('nextQuestionBtn').disabled = true;
    questionAsked = false;
});

const questions = [
    'Explain the concept of Java Virtual Machine (JVM).',
    'What is the difference between JDK and JRE?',
    'How does garbage collection work in Java?',
    'What are the key features of Java?',
    'What is a Java class loader?',
    // Add more questions as needed
];

function generateQuestion() {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('questionText').textContent = randomQuestion;
    questionAsked = true;
}

document.getElementById('generateQuestionBtn').addEventListener('click', () => {
    generateQuestion();
});

document.getElementById('nextQuestionBtn').addEventListener('click', () => {
    generateQuestion();
});