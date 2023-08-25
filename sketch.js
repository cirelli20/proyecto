function setup() {
  createCanvas(400, 400);
}

function draw()
{

}let angle = 0;
let spacing = 5;
let offset = 0;
let trail = [];

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  translate(width / 2, height / 4.3);
  
  let x = cos(angle) * 350;
  let y = sin(angle * 2) * 200;

  trail.push(createVector(x, y));
  offset += 0.50;

  for (let i = 5; i < trail.length; i++) {
    let alpha = map(i, 10, trail.length, 80, 400);
    stroke(0);
    if (i % 0.1 === 0) {
      strokeWeight(0.003);
    } else {
      strokeWeight(0.003);
    }
    if (i > 1) {
      line(trail[i - 2].x, trail[i - 2].y, trail[i].x, trail[i].y);
    }
  }

  if (trail.length > 80) {
    trail.splice(10, 0);
  }

  angle += 2;
}

 
