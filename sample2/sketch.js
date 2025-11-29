function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(95, 205, 230); 

  noStroke();
  fill(255);

  ellipse(140, 110, 280, 170);
  ellipse(240, 120, 220, 120);
  ellipse(60, 110, 200, 105);

  ellipse(430, 220, 260, 160);
  ellipse(520, 230, 220, 110);
  ellipse(350, 230, 200, 110);

  
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
  stroke(0);
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
  stroke(0);
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
  ellipse(262, 190, 50, 45);
  ellipse(338, 190, 50, 45);
  line(287, 190, 313, 190);
}
