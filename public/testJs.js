// Load face-api.js models
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("/models"),
])
  .then(startVideo)
  .catch((err) => console.error("Error loading models:", err));

// Function to start the laptop camera
function startVideo() {
  const video1 = document.getElementById("video1");
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      video1.srcObject = stream;
      video1.onloadedmetadata = () => {
        video1.play();
        startFaceDetection(video1, "ipcamCanvas");
      };
    })
    .catch((err) => {
      console.error("Error accessing the laptop webcam:", err);
      alert("Could not access the webcam. Please check your browser settings.");
    });

  setupIpCam(); // Setup the IP camera feed
}

// Function to start face detection on a video source
function startFaceDetection(video, canvasId) {
  video.addEventListener("play", () => {
    const canvas = faceapi.createCanvasFromMedia(video);
    canvas.id = canvasId;
    document.body.append(canvas);

    const displaySize = { width: video.videoWidth, height: video.videoHeight };
    faceapi.matchDimensions(canvas, displaySize);

    setInterval(async () => {
      if (video.videoWidth !== 0 && video.videoHeight !== 0) {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions();
        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
      }
    }, 100);
  });
}

// Function to setup and process IP camera feed
function setupIpCam() {
  const ipcamCanvas = document.getElementById("ipcamCanvas");
  const ipcamContext = ipcamCanvas.getContext("2d");
  const ipcam = new Image();
  ipcam.crossOrigin = "Anonymous"; // Handle CORS issues

  // Refresh the IP camera feed every second
  function refreshIpCam() {
    ipcam.src = `http://172.29.19.164:8080/video?${new Date().getTime()}`;
  }

  ipcam.onload = () => {
    ipcamCanvas.width = ipcam.naturalWidth;
    ipcamCanvas.height = ipcam.naturalHeight;
    ipcamContext.drawImage(ipcam, 0, 0, ipcamCanvas.width, ipcamCanvas.height);
    startFaceDetection(ipcamCanvas, "canvas2");
  };

  ipcam.onerror = () => {
    console.error("Error loading IP camera feed.");
  };

  refreshIpCam();
  setInterval(refreshIpCam, 1000); // Refresh every second
}
