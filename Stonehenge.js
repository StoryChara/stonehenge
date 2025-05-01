function setup() {
  createCanvas(560, 390, WEBGL);
}

function preload(){
  stone = loadImage("stone.jpg");
  dirt = loadImage("dirt.jpg");
}

function draw() {
  background(53, 108, 211);
  //fill(106, 146, 83);
  texture(dirt);
  
  push();
  translate(0, 0, -185);
  box(2500, 2500, 300);
  pop();
  
  //fill(154, 147, 126);
  texture(stone);
  
  push();
  translate(0,0, -5);
  border(300, 30, 30, 20, 60);
  pop();
  
  push();
  translate(0, 0, 35);
  rotate(TWO_PI/60);
  border(300, 30, 30, 65, 20);
  pop();
  
  push();
  translate(0, 0, -20);
  border(200, 57, 7, 10, 30);
  pop();
  
  push();
  translate(0, 0, -20);
  rotate(TWO_PI/10);
  border_in(100, 19, 5, 5, 30);
  pop();
  
  push();
  border_doble(150, 5, 20, 30, 60);
  pop();
  
  push();
  translate(0, 0, 40);
  rotate(PI/25);
  border_in(150, 5, 30, 65, 20);
  pop();
  
  orbitControl();
}

function border(radius, numBoxes, _width, _height, _depth){
  for (let i = 0; i < numBoxes; i++) {
    rotate(TWO_PI/numBoxes);
    push();
    translate(radius, 0, 0);
    box(_width, _height, _depth);
    pop();
  }
}

function border_in(radius, numBoxes, _width, _height, _depth) {
  let maxAngle = radians(315); 
  let step = maxAngle / numBoxes;

  for (let i = 0; i < numBoxes; i++) {
    rotate(step);
    push();
    translate(radius, 0, 0);
    box(_width, _height, _depth);
    pop();
  }
}

function border_doble(radius, numBoxes, _width, _height, _depth) {
    let maxAngle = radians(315); 
  let step = maxAngle / numBoxes;

  for (let i = 0; i < numBoxes; i++) {
    rotate(step);
    push();
    translate(radius, 0, 0);
    box(_width, _height, _depth);
    pop();
    push();
    translate(radius, _height + 3, 0); // Ajusta el "5" para modificar la separación
    box(_width, _height, _depth);
    pop();
  }
}
