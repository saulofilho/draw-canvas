const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.width = window.innerWidth + 'px';
canvas.style.height = window.innerHeight + 'px';

const context = canvas.getContext('2d');

context.strokeStyle = '#ff00ff';
context.lineWidth = 0.08;
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

window.onresize = function() {
  let canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  context.strokeStyle = 'wheat';
  context.lineWidth = Math.floor(Math.random() * 101);
  context.lineCap = 'round';
};

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
