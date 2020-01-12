var h = 180;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
  colorMode(HSB);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(15);

  for (var x = 0; x < width; x += 10) {
    for (var y = 0; y < height; y += 10) {
      if ((x - width / 2) * (x - width / 2) + (y - height / 2) * (y - height / 2) < sq(min(width,height)/2.5)) {
      fill(random(h, h + 120), 150, random(150, 255));
      rect(x, y, abs(0.15 * random(0, mouseX - width / 2)) + 5, abs(0.15 * random(0, mouseY - height / 2)) + 5, 5);
      }
    }
  }
  textSize(12);
  fill(255);
  text('MoveAroundClickAndHaveFun:)', (sin(frameCount / 100)/1.25 + 1) * width / 2, height - 10);
}

function mouseClicked() {
  h = (h + int(random(30, 120))) % 360;
}
