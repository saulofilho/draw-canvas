const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

context.strokeStyle = 'wheat';
context.lineWidth = 10;
context.lineCap = 'round';

let shouldPaint = false;

['mousedown', 'touchstart'].forEach(function(e) {
  document.addEventListener(e, function(event) {
    shouldPaint = true;
    context.moveTo(event.pageX, event.pageY);
    context.beginPath();
  });
});

['mouseup', 'touchend'].forEach(function(e) {
  document.addEventListener(e, function(event) {
    shouldPaint = false;
  });
});

['mousemove', 'touchmove'].forEach(function(e) {
  document.addEventListener(e, function(event) {
    if (shouldPaint) {
      context.lineTo(event.pageX, event.pageY);
      context.stroke();
    }
  });
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(event) {
    context.strokeStyle = this.style.background;
  });
});

// save canvas img
function dlCanvas() {
  var dt = canvas.toDataURL('image/png');
  dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');

  dt = dt.replace(
    /^data:application\/octet-stream/,
    'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png'
  );

  this.href = dt;
}
document.getElementById('dl').addEventListener('click', dlCanvas, false);
