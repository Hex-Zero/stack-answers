var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.outerHeight;
var particleArray;
function Particle(x, y, directionX, directionY, size, color) {
  this.x = x;
  this.y = y;
  this.directionX = directionX;
  this.directionY = directionY;
  this.size = size;
  this.color = color;
}
Particle.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
  ctx.fillStyle = this.color;
  ctx.fill();
};
Particle.prototype.update = function () {
  if (this.x + this.size > canvas.width || this.x - this.size < 0) {
    this.directionX = -this.directionX;
  }
  if (this.y + this.size > canvas.width || this.y - this.size < 0) {
    this.directionY = -this.directionY;
  }
  this.x += this.directionX;
  this.y += this.directionY;
  this.draw();
};
function init() {
  particleArray = [];
  for (var i = 0; i < 200; i++) {
    var size = Math.random() * 10;
    var x = Math.random() * (innerWidth - size * 2);
    var y = Math.random() * (innerHeight - size * 2);
    var directionX = Math.random() * 2 - 0.4;
    var directionY = Math.random() * 1 - 0.4;
    var color = "white";
    particleArray.push(new Particle(x, y, directionX, directionY, size, color));
  }
}
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
  }
}
init();
animate();
window.addEventListener("resize", function () {
  canvas.width = this.innerWidth;
  canvas.height = this.innerHeight;
  init();
});
