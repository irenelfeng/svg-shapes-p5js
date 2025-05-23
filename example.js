let svg;
async function setup() {
  createCanvas(800, 800);
  background(120);

  svg = await loadSVG("p5js.svg");
  
  svg.disableStyle();
  fill(122, 222, 200);
  strokeWeight(3);
  stroke(1, 111, 222)
  svg.display();

  // choose different colors for each node
  svg.getAllNodes().forEach((node) => {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    push();
    node.disableStyle();
    scale(0.5);
    fill(r, g, b);

    node.display();
    pop();
  });
}