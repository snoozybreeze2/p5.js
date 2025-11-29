function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  let t = millis() * 0.001;
  let s1 = sin(t);
  let c1 = cos(t);
  let s2 = sin(frameCount * 0.02);
  let c2 = cos(frameCount * 0.02);

  let cornerOffsetX = s1 * 10;
  let cornerOffsetY = c1 * 10;
  let cornerOffsetX2 = c1 * 8;
  let cornerOffsetY2 = s1 * 8;

  let scaleOuter = 1 + 0.08 * s2;
  let scaleInner = 1 + 0.06 * c2;

  let centerOffsetX = sin(t * 0.7) * 12;
  let centerOffsetY = cos(t * 0.7) * 12;

  colorMode(RGB, 255);
  let baseA = color(255, 255, 0);
  let baseB = color(0, 210, 210);
  let mixAmt = (s1 + 1) / 2;
  let mixAmt2 = (c1 + 1) / 2;
  let colMain = lerpColor(baseA, baseB, mixAmt);
  let colSub = lerpColor(baseB, baseA, mixAmt2);
  let randomMix = random(0.2, 0.8);
  let colRandom = lerpColor(baseA, baseB, randomMix);

  strokeWeight(0.5);
  fill(colMain);
  arc(0 + cornerOffsetX, 0 + cornerOffsetY, 400 * scaleOuter, 400 * scaleOuter, 0, HALF_PI);

  strokeWeight(0);
  fill(lerpColor(baseA, baseB, 0.2 * mixAmt));
  arc(0 + cornerOffsetX, 0 + cornerOffsetY, 350 * scaleOuter, 400 * scaleOuter, 0, HALF_PI);

  fill(lerpColor(baseA, baseB, 0.35 * mixAmt2));
  arc(0 + cornerOffsetX, 0 + cornerOffsetY, 300 * scaleOuter, 400 * scaleOuter, 0, HALF_PI);

  fill(lerpColor(baseA, baseB, 0.5 * mixAmt));
  arc(0 + cornerOffsetX, 0 + cornerOffsetY, 250 * scaleOuter, 400 * scaleOuter, 0, HALF_PI);

  fill(lerpColor(baseA, baseB, 0.65 * mixAmt2));
  arc(0 + cornerOffsetX, 0 + cornerOffsetY, 200 * scaleOuter, 400 * scaleOuter, 0, HALF_PI);

  fill(lerpColor(baseA, baseB, 0.8 * mixAmt));
  arc(0 + cornerOffsetX, 0 + cornerOffsetY, 150 * scaleOuter, 400 * scaleOuter, 0, HALF_PI);

  fill(lerpColor(baseA, baseB, 0.9 * mixAmt2));
  arc(0 + cornerOffsetX, 0 + cornerOffsetY, 100 * scaleOuter, 400 * scaleOuter, 0, HALF_PI);

  fill(colRandom);
  arc(0 + cornerOffsetX, 0 + cornerOffsetY, 50 * scaleOuter, 400 * scaleOuter, 0, HALF_PI);

  strokeWeight(0.5);
  fill(colSub);
  arc(400 + cornerOffsetX2, 400 + cornerOffsetY2, 400 * scaleOuter, 400 * scaleOuter, HALF_PI, 0);

  strokeWeight(0.0);
  fill(lerpColor(baseB, baseA, 0.2 * mixAmt2));
  arc(400 + cornerOffsetX2, 400 + cornerOffsetY2, 350 * scaleOuter, 400 * scaleOuter, HALF_PI, 0);

  fill(lerpColor(baseB, baseA, 0.35 * mixAmt));
  arc(400 + cornerOffsetX2, 400 + cornerOffsetY2, 300 * scaleOuter, 400 * scaleOuter, HALF_PI, 0);

  fill(lerpColor(baseB, baseA, 0.5 * mixAmt2));
  arc(400 + cornerOffsetX2, 400 + cornerOffsetY2, 250 * scaleOuter, 400 * scaleOuter, HALF_PI, 0);

  fill(lerpColor(baseB, baseA, 0.65 * mixAmt));
  arc(400 + cornerOffsetX2, 400 + cornerOffsetY2, 200 * scaleOuter, 400 * scaleOuter, HALF_PI, 0);

  fill(lerpColor(baseB, baseA, 0.8 * mixAmt2));
  arc(400 + cornerOffsetX2, 400 + cornerOffsetY2, 150 * scaleOuter, 400 * scaleOuter, HALF_PI, 0);

  fill(lerpColor(baseB, baseA, 0.9 * mixAmt));
  arc(400 + cornerOffsetX2, 400 + cornerOffsetY2, 100 * scaleOuter, 400 * scaleOuter, HALF_PI, 0);

  fill(colRandom);
  arc(400 + cornerOffsetX2, 400 + cornerOffsetY2, 50 * scaleOuter, 400 * scaleOuter, HALF_PI, 0);

  strokeWeight(0.5);
  fill(colMain);
  arc(0 - cornerOffsetX2, 400 + cornerOffsetY2, 400 * scaleInner, 400 * scaleInner, HALF_PI, 0);

  strokeWeight(0.0);
  fill(lerpColor(baseA, baseB, 0.25 * mixAmt2));
  arc(0 - cornerOffsetX2, 400 + cornerOffsetY2, 350 * scaleInner, 400 * scaleInner, HALF_PI, 0);

  fill(lerpColor(baseA, baseB, 0.4 * mixAmt));
  arc(0 - cornerOffsetX2, 400 + cornerOffsetY2, 300 * scaleInner, 400 * scaleInner, HALF_PI, 0);

  fill(lerpColor(baseA, baseB, 0.55 * mixAmt2));
  arc(0 - cornerOffsetX2, 400 + cornerOffsetY2, 250 * scaleInner, 400 * scaleInner, HALF_PI, 0);

  fill(lerpColor(baseA, baseB, 0.7 * mixAmt));
  arc(0 - cornerOffsetX2, 400 + cornerOffsetY2, 200 * scaleInner, 400 * scaleInner, HALF_PI, 0);

  fill(lerpColor(baseA, baseB, 0.85 * mixAmt2));
  arc(0 - cornerOffsetX2, 400 + cornerOffsetY2, 150 * scaleInner, 400 * scaleInner, HALF_PI, 0);

  fill(lerpColor(baseA, baseB, 0.95 * mixAmt));
  arc(0 - cornerOffsetX2, 400 + cornerOffsetY2, 100 * scaleInner, 400 * scaleInner, HALF_PI, 0);

  fill(colRandom);
  arc(0 - cornerOffsetX2, 400 + cornerOffsetY2, 50 * scaleInner, 400 * scaleInner, HALF_PI, 0);

  strokeWeight(0.5);
  fill(colSub);
  arc(400 + cornerOffsetX, 0 - cornerOffsetY, 400 * scaleInner, 400 * scaleInner, HALF_PI, 0);

  strokeWeight(0.0);
  fill(lerpColor(baseB, baseA, 0.25 * mixAmt));
  arc(400 + cornerOffsetX, 0 - cornerOffsetY, 350 * scaleInner, 400 * scaleInner, HALF_PI, 0);

  fill(lerpColor(baseB, baseA, 0.4 * mixAmt2));
  arc(400 + cornerOffsetX, 0 - cornerOffsetY, 300 * scaleInner, 400 * scaleInner, HALF_PI, 0);

  fill(lerpColor(baseB, baseA, 0.55 * mixAmt));
  arc(400 + cornerOffsetX, 0 - cornerOffsetY, 250 * scaleInner, 400 * scaleInner, HALF_PI, 0);

  fill(lerpColor(baseB, baseA, 0.7 * mixAmt2));
  arc(400 + cornerOffsetX, 0 - cornerOffsetY, 200 * scaleInner, 400 * scaleInner, HALF_PI, 0);

  fill(lerpColor(baseB, baseA, 0.85 * mixAmt));
  arc(400 + cornerOffsetX, 0 - cornerOffsetY, 150 * scaleInner, 400 * scaleInner, HALF_PI, 0);

  fill(lerpColor(baseB, baseA, 0.95 * mixAmt2));
  arc(400 + cornerOffsetX, 0 - cornerOffsetY, 100 * scaleInner, 400 * scaleInner, HALF_PI, 0);

  fill(colRandom);
  arc(400 + cornerOffsetX, 0 - cornerOffsetY, 50 * scaleInner, 400 * scaleInner, HALF_PI, 0);

  noFill();
  strokeWeight(1);

  let centerX = 200 + centerOffsetX;
  let centerY = 200 + centerOffsetY;

  quad(200 + centerOffsetX, 0 + centerOffsetY, 400 + centerOffsetX, 200 + centerOffsetY, 200 + centerOffsetX, 400 + centerOffsetY, 0 + centerOffsetX, 200 + centerOffsetY);

  let circleSize = 165 * (1 + 0.1 * s1);
  circle(centerX, centerY, circleSize);

  rectMode(CENTER);
  let rectSize = 200 * (1 + 0.07 * c1);
  rect(centerX, centerY, rectSize);

  let triScale = 1 + 0.1 * s2;
  triangle(
    centerX,
    100 * triScale,
    300 * triScale - 100,
    300,
    100 * triScale,
    300
  );

  quad(100 + centerOffsetX, 0 + centerOffsetY, 400 + centerOffsetX, 200 + centerOffsetY, 200 + centerOffsetX, 400 + centerOffsetY, 0 + centerOffsetX, 200 + centerOffsetY);
  quad(200 + centerOffsetX, 0 + centerOffsetY, 400 + centerOffsetX, 200 + centerOffsetY, 200 + centerOffsetX, 400 + centerOffsetY, 0 + centerOffsetX, 100 + centerOffsetY);
  quad(200 + centerOffsetX, 0 + centerOffsetY, 400 + centerOffsetX, 100 + centerOffsetY, 200 + centerOffsetX, 400 + centerOffsetY, 0 + centerOffsetX, 200 + centerOffsetY);
  quad(300 + centerOffsetX, 0 + centerOffsetY, 400 + centerOffsetX, 200 + centerOffsetY, 200 + centerOffsetX, 400 + centerOffsetY, 0 + centerOffsetX, 200 + centerOffsetY);
  quad(200 + centerOffsetX, 0 + centerOffsetY, 400 + centerOffsetX, 200 + centerOffsetY, 100 + centerOffsetX, 400 + centerOffsetY, 0 + centerOffsetX, 200 + centerOffsetY);
  quad(200 + centerOffsetX, 0 + centerOffsetY, 400 + centerOffsetX, 200 + centerOffsetY, 200 + centerOffsetX, 400 + centerOffsetY, 0 + centerOffsetX, 300 + centerOffsetY);
  quad(200 + centerOffsetX, 0 + centerOffsetY, 400 + centerOffsetX, 200 + centerOffsetY, 300 + centerOffsetX, 400 + centerOffsetY, 0 + centerOffsetX, 200 + centerOffsetY);
  quad(200 + centerOffsetX, 0 + centerOffsetY, 400 + centerOffsetX, 300 + centerOffsetY, 200 + centerOffsetX, 400 + centerOffsetY, 0 + centerOffsetX, 200 + centerOffsetY);

  stroke(255, 255, 255);
  strokeWeight(15);
  rect(centerX, centerY, 115 * (1 + 0.05 * s2));

  strokeWeight(115 * (1 + 0.05 * c1));
  stroke(0);
  point(centerX, centerY);
}

function keyPressed() {
  if (key === 's') {
    saveGif('20210059_김민호', 10);
  }
}
