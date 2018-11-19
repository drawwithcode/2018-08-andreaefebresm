var myColor;
var colori = ['#32021F', '#4B2E39', '#6C596E', '#6F7D8C', '#77A0A9', '#DDA77B', '#D6E3F8'];
var value = 0;
// var myImage;

function preload() {
  merriweather = loadFont('assets/Merriweather-Bold.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  background(colori[4]);
  angleMode(RADIANS);
  frameRate(50);

  // text('blabla', 100,100);

  setShakeThreshold(10);
  frameRate(20);

  textFont(merriweather);
  textSize(80);
  textAlign(CENTER, CENTER);
 // myImage= loadImage('./assets/Risorsa 1.png');
 // image(myImage, 200,200);


}

function draw() {

  background(colori[4]);

  text('Shake your device', 0, -100);
  text('- find the figures -', 0, 0);
  value += -1;


  if (value <= 10) {

    stroke('white');
    strokeWeight(0.5);
    fill(colori[6]);
    translate(-300, -600, 0);
    push();
    rotateX(radians(4 * frameCount));
    rotateY(radians(4 * frameCount));
    rotateZ(radians(4 * frameCount));
    box(50, 50);
    pop();

    translate(200, 0, 0);
    push();
    rotateX(radians(4.5 * frameCount));
    rotateY(radians(4.5 * frameCount));
    rotateZ(radians(4.5 * frameCount));
    sphere(50);
    pop();

    translate(200, 0, 0);
    push();
    rotateX(radians(4.2 * frameCount));
    rotateY(radians(4.2 * frameCount));
    rotateZ(radians(4.2 * frameCount));
    cylinder(50,50);
    pop();

    translate(200, 0, 0);
    push();
    rotateX(radians(3 * frameCount));
    rotateY(radians(3 * frameCount));
    rotateZ(radians(3 * frameCount));
    cone(50,50);
    pop();

    
  }

  rotateX(radians(rotationX));
  rotateY(radians(rotationY));
  rotateZ(radians(rotationZ));






  push();
  if (value >= 10) {
    stroke(colori[4]);
    fill(colori[0]);
    box(200)
  }
  pop();

  push();
  if (value >= 25) {
    stroke(colori[4]);
    fill(colori[2]);
    sphere(175)
  }
  pop();

  push();
  if (value >= 50) {
    stroke(colori[4]);
    fill(colori[1]);
    cylinder(200, 400);
  }
  pop();

  push();
  if (value >= 90) {
    stroke(colori[4]);
    fill(colori[3]);
    cone(700, 1000)

  }
  pop();
}

function deviceShaken() {
  value++;
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
