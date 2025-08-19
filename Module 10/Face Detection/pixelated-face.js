const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');
const faceDetector = new window.FaceDetector();

console.log(video, canvas, faceCanvas, faceDetector);

// funcion que popula el video del usuario
async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({video: {width: 680, height: 420}});
  video.srcObject = stream;
  await video.play();

  //ajustar el tamaño del video al canvas
  console.log(video.videoWidth, video.videoHeight);
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  console.log(faces);
}

populateVideo().then(detect);