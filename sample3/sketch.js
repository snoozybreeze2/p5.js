let l, z, x, c, v;

function setup() {
  createCanvas(600, 400);
  l = 262;
  z = 338;
  x = 190;
  c = 312;
  v = 288;
}
function draw() {
  let r = map(mouseX, 0, width, 255, 0);
  let g = map(mouseX, 0, width, 0, 255);
  let b = map(mouseY, 0, height, 255, 0);
  background(r, g, b);
  noStroke();
  fill(255, 177, 0);
  ellipse(mouseX, mouseY, 50, 50);
  
  fill(243, 222, 196);
  stroke(0);
  strokeWeight(5);
  rect(260, 250, 80, 80);
  ellipse(300, 200, 160, 220);
  quad(235, 165, 260, 157, 280, 163, 260, 160);
  quad(365, 165, 340, 157, 320, 163, 340, 160);
  
  stroke(0);
  strokeWeight(2);
  quad(283, 185, 265, 178, 238, 182, 262, 190);
  quad(317, 185, 335, 178, 362, 182, 338, 190);
  
  fill(111, 79, 40);
  ellipse(262, 184, 10, 10);
  ellipse(338, 184, 10, 10);
  
  fill(255);
  ellipse(262, 184, 5, 5);
  ellipse(338, 184, 5, 5);
  
  beginShape();
  fill(0, 0, 0);
  strokeWeight(8);
  curveVertex(268, 145);
  curveVertex(238, 158);
  curveVertex(220, 159);
  curveVertex(210, 150);
  curveVertex(212, 130);
  curveVertex(220, 100);
  curveVertex(300, 70);
  curveVertex(370, 100);
  curveVertex(380, 150);
  curveVertex(350, 140);
  curveVertex(340, 110);
  curveVertex(335, 115);
  curveVertex(280, 114);
  endShape(CLOSE);
  
  strokeWeight(3);
  noFill();
  bezier(300, 200, 250, 250, 300, 210, 300, 235);
  
  fill(255, 10, 0);
  arc(300, 260, 50, 10, 0, 180, CHORD);
  fill(243, 222, 196);
  arc(214, 190, 10, 30, 0, 250, CHORD);
  arc(386, 190, 10, 30, 0, 250, CHORD);
  
  noFill();
  arc(300, 260, 22, 20, 210, 110, OPEN);
  fill(255, 100, 50);
  arc(300, 430, 400, 200, PI, TWO_PI, CHORD);
  fill(243, 222, 196);
  arc(300, 330, 80, 50, 0, PI, CHORD);
  
  stroke(243, 222, 196);
  strokeWeight(5);
  line(263, 330, 338, 330);

  noFill();
  stroke(0);
  strokeWeight(2);
  ellipse(l, x, 50, 45);
  ellipse(z, x, 50, 45);
  line(c, x, v, x);
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    l -= 10;
    z -= 10;
    c -= 10;
    v -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    l += 10;
    z += 10;
    c += 10;
    v += 10;
  } else if (keyCode === UP_ARROW) {
    x -= 10;
  } else if (keyCode === DOWN_ARROW) {
    x += 10;
  }
  if (key === 's') {
    saveGif('20210059_김민호', 8);
  }
}