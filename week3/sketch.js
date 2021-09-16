let eyeHeight = 235;
let topOfEye = 225;
let bottomOfEye = 245;
let moveEyesUp = true;

function setup() {
  createCanvas(510,520);

}

function draw() {
  background(150, 250, 2);
  noStroke();
  fill(249, 250, 50); //yellow
  rect(125, 50, 250, 350, 200);//head(1st layer)

  stroke(0); //black
  strokeWeight(3);
  noFill();
  ellipse(200, 75, 150, 80); //left hair
  ellipse(245, 75, 150, 80); //right hair

  noStroke();
  fill(249, 250, 50); //yellow
  rect(115, 55, 255, 400, 210);//head(2nd layer)
  rect(100, 170, 100, 50, 50); //eyelid
  rect(343,300,70,70,50); //ear

  stroke(0); //black
  strokeWeight(3);
  fill(255); //white
  circle(140,eyeHeight,110); //left eye
  circle(140,240,6); //left eyeball
  noFill();
  ellipse(380,340,10,25); //inner ear

  noStroke();
  fill(250, 199, 81); //orange
  rect(83, 275, 180, 155, 100); //mouth area
  ellipse(195,385, 120, 120); //chin
  fill(249, 250, 50); //yellow
  rect(88, 250, 195, 50, 50); //nose

  stroke(0); //black
  strokeWeight(3);
  fill(250); //white
  circle(225,eyeHeight,110); //right eye
  circle(225,240,6); //right eyeball
  ellipse(225,375,25,10); //mouth

  //M hair
  line(325,285,350,210); //1st strand
  line(375,285,350,210); //2nd strand
  line(375,285,400,210); //3rd strand
  line(425,285,400,210); //4th strand

  if (eyeHeight == bottomOfEye) {
    moveEyesUp = true
  }
  if (eyeHeight == topOfEye) {
    moveEyesUp = false
  }
  if (moveEyesUp) {
    eyeHeight--
  } else {
    eyeHeight++
  }

}
