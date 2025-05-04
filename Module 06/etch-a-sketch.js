// select the elemente on the page - canvas, shake btn
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeBtn = document.querySelector('.shake');
const MOVE_AMOUNT = 20;

// setup our canvas for drawing
const { width, height } = canvas; // destructuring from canvas, make a variable for width and height from the properties of the canvas

// creat random x, y coordinates
let x = Math.floor(Math.random() * width); // random number between 0 and width
let y = Math.floor(Math.random() * height); // random number between 0 and height

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) {
  hue += 21;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// clear/shake function
function clearCanvas() {
  canvas.classList.add('shake');
  canvas.addEventListener(
    'animationend',
    function() {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
  ctx.clearRect(0, 0, width, height);
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeBtn.addEventListener('click', clearCanvas);