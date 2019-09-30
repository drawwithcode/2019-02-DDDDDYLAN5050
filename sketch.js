var h = 180;
function setup() {
  createCanvas(400, 400);
  frameRate(12);
  colorMode(HSB);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(15);
  if (frameCount < 300) {
    textSize(12);
    fill(255);
    text('MoveAroundClickAndHaveFun:)', frameCount, height - 10);
  }
  for (var x = 0; x < 500; x += 10) {
    for (var y = 0; y < 500; y += 10) {
      if ((x - width / 2) * (x - width / 2) + (y - height / 2) * (y - height / 2) < 22500) {
        fill(random(h, h + 120), 150, random(150, 255));
        rect(x, y, abs(0.15 * random(0, mouseX - width / 2)) + 5, abs(0.15 * random(0, mouseY - height / 2)) + 5, 5);
      }
    }
  }
}

function mouseClicked() {
  h = (h + int(random(30, 120))) % 360;
}
