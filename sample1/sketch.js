function setup() {
  createCanvas(400, 400);
  background(200);
  
  strokeWeight(0.5);
  fill(255, 255, 0);
  arc(0, 0, 400, 400, 0, HALF_PI);
  
  strokeWeight(0);
  fill(245, 0, 245);
  arc(0, 0, 350, 400, 0, HALF_PI);
  
  fill(0, 235, 235);
  arc(0, 0, 300, 400, 0, HALF_PI);
  
  fill(225, 225, 0);
  arc(0, 0, 250, 400, 0, HALF_PI);
  
  fill(215, 0, 215);
  arc(0, 0, 200, 400, 0, HALF_PI);
  
  fill(0, 210, 210);
  arc(0, 0, 150, 400, 0, HALF_PI);
  
  fill(205, 205, 0);
  arc(0, 0, 100, 400, 0, HALF_PI);
  
  fill(200, 0, 200);
  arc(0, 0, 50, 400, 0, HALF_PI);
  //첫번째 1/4구
  
  strokeWeight(0.5);
  fill(255, 255, 0);
  arc(400, 400, 400, 400, HALF_PI, 0);
  
  strokeWeight(0.0);
  fill(245, 0, 245);
  arc(400, 400, 350, 400, HALF_PI, 0);
  
  fill(0, 235, 235);
  arc(400, 400, 300, 400, HALF_PI, 0);
  
  fill(225, 225, 0);
  arc(400, 400, 250, 400, HALF_PI, 0);
  
  fill(215, 0, 215);
  arc(400, 400, 200, 400, HALF_PI, 0);
  
  fill(0, 210, 210);
  arc(400, 400, 150, 400, HALF_PI, 0);
  
  fill(205, 205, 0);
  arc(400, 400, 100, 400, HALF_PI, 0);
  
  fill(200, 0, 200);
  arc(400, 400, 50, 400, HALF_PI, 0);
  //두번째 1/4구
  
  strokeWeight(0.5);
  fill(255, 255, 0);
  arc(0, 400, 400, 400, HALF_PI, 0);
  
  strokeWeight(0.0);
  fill(245, 0, 245);
  arc(0, 400, 350, 400, HALF_PI, 0);
  
  fill(0, 235, 235);
  arc(0, 400, 300, 400, HALF_PI, 0);
  
  fill(225, 225, 0);
  arc(0, 400, 250, 400, HALF_PI, 0);
  
  fill(215, 0, 215);
  arc(0, 400, 200, 400, HALF_PI, 0);
  
  fill(0, 210, 210);
  arc(0, 400, 150, 400, HALF_PI, 0);
  
  fill(205, 205, 0);
  arc(0, 400, 100, 400, HALF_PI, 0);
  
  fill(200, 0, 200);
  arc(0, 400, 50, 400, HALF_PI, 0);
  //세번째 1/4구
  
  strokeWeight(0.5);
  fill(255, 255, 0);
  arc(400, 0, 400, 400, HALF_PI, 0);
  
  strokeWeight(0.0);
  fill(245, 0, 245);
  arc(400, 0, 350, 400, HALF_PI, 0);
  
  fill(0, 235, 235);
  arc(400, 0, 300, 400, HALF_PI, 0);
  
  fill(225, 225, 0);
  arc(400, 0, 250, 400, HALF_PI, 0);
  
  fill(215, 0, 215);
  arc(400, 0, 200, 400, HALF_PI, 0);
  
  fill(0, 210, 210);
  arc(400, 0, 150, 400, HALF_PI, 0);
  
  fill(205, 205, 0);
  arc(400, 0, 100, 400, HALF_PI, 0);
  
  fill(200, 0, 200);
  arc(400, 0, 50, 400, HALF_PI, 0);
  
  noFill()
  strokeWeight(1)
  quad(200, 0, 400, 200, 200, 400, 0, 200)
  circle(200, 200, 165)
  rectMode(CENTER)
  rect(200, 200, 200)
  triangle(200,100, 300, 300, 100, 300)
  quad(100, 0, 400, 200, 200, 400, 0, 200)
  quad(200, 0, 400, 200, 200, 400, 0, 100)
  quad(200, 0, 400, 100, 200, 400, 0, 200)
  quad(300, 0, 400, 200, 200, 400, 0, 200)
  quad(200, 0, 400, 200, 100, 400, 0, 200)
  quad(200, 0, 400, 200, 200, 400, 0, 300)
  quad(200, 0, 400, 200, 300, 400, 0, 200)
  quad(200, 0, 400, 300, 200, 400, 0, 200)
  stroke(255, 255, 255)
  strokeWeight(15)
  rect(200, 200, 115)
  
  strokeWeight(115)
  stroke(0)
  point(200, 200)
}