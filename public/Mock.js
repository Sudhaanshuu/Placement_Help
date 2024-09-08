document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let mediaRecorder;
    let recordedChunks = [];
    let questionAsked = false;

    // Load face-api.js models
    Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models')
    ]).then(() => {
        console.log("Models loaded successfully");
    }).catch(err => {
        console.error("Error loading models:", err);
    });
    recordedChunks = []; // Clear recorded chunks after download

    function startVideo() {
        navigator.mediaDevices.getUserMedia({
                video: {},
                audio: true
            })
            .then(stream => {
                video.srcObject = stream;
                video.onloadedmetadata = () => {
                    video.play();
                    console.log("Webcam video stream started");
                    startFaceDetection();
                    setupMediaRecorder(stream);
                };
            })
            .catch(err => {
                console.error("Error accessing the webcam:", err);
                alert("Could not access the webcam. Please check your browser settings.");
            });
    }

    function setupMediaRecorder(stream) {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = event => {
            if (event.data.size > 0) {
                recordedChunks.push(event.data);
            }
        };
    }

    function startFaceDetection() {
        const displaySize = {
            width: video.width,
            height: video.height
        };
        faceapi.matchDimensions(canvas, displaySize);

        setInterval(async() => {
            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
                .withFaceLandmarks()
                .withFaceExpressions();

            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            faceapi.draw.drawDetections(canvas, resizedDetections);
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
            faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
        }, 100);
    }

    const questions = [
        'Explain the concept of Java Virtual Machine (JVM).',
        'What is the difference between JDK and JRE?',
        'How does garbage collection work in Java?',
        'What are the key features of Java?',
        'What is a Java class loader?',
    ];

    function generateQuestion() {
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        document.getElementById('questionText').textContent = randomQuestion;
        questionAsked = true;
    }

    document.getElementById('startBtn').addEventListener('click', () => {
        startVideo();
        mediaRecorder.start();
        document.getElementById('pauseBtn').disabled = false;
        document.getElementById('resumeBtn').disabled = true;
        document.getElementById('stopBtn').disabled = false;
        document.getElementById('startBtn').disabled = true;
        if (!questionAsked) {
            generateQuestion();
        }
    });

    document.getElementById('pauseBtn').addEventListener('click', () => {
        mediaRecorder.pause();
        document.getElementById('pauseBtn').disabled = true;
        document.getElementById('resumeBtn').disabled = false;
    });

    document.getElementById('resumeBtn').addEventListener('click', () => {
        mediaRecorder.resume();
        document.getElementById('pauseBtn').disabled = false;
        document.getElementById('resumeBtn').disabled = true;
    });

    document.getElementById('muteBtn').addEventListener('click', () => {
        video.muted = !video.muted;
        document.getElementById('muteBtn').textContent = video.muted ? 'Unmute' : 'Mute';
    });

    document.getElementById('stopBtn').addEventListener('click', () => {
        mediaRecorder.stop();
        video.srcObject.getTracks().forEach(track => track.stop());
        mediaRecorder.onstop = () => {
            const blob = new Blob(recordedChunks, {
                type: 'video/webm'
            });
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
        document.getElementById('startBtn').disabled = false;
        questionAsked = false;
    });

    document.getElementById('generateQuestionBtn').addEventListener('click', generateQuestion);
});