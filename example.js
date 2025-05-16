// In your sketch:
let shape;

function preload() {
  shape = loadSVG('example.svg'); // Implement loadSVG using fetch/DOMParser
}

function draw() {
  background(255);
  shape.draw();
}