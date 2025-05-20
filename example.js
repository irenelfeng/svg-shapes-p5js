let ssss;
async function setup() {
  createCanvas(600, 600);
  background(120);

  ssss = await loadSVG("chicken-leg.svg");
  
  ssss.disableStyle();
  fill(122, 222, 200);
  strokeWeight(11);
  stroke(1, 111, 222)
  ssss.display();
  
}