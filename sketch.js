// sketch.js



function setup() {
  createCanvas(600, 600);

  background(128);
}

function draw() {
  
  let star1 = new Star();
  star1.x = random(50,width-50);
  star1.y = random(50,height-50);
  star1.radius = random(25,150);
  star1.numberOfPoints = int(random(4,8));
  star1.startAngle = random(PI);
  star1.depth = random(0.3,0.5);
  star1.render();
  
}




class Star {

  constructor() {
    this.x = 300;
    this.y = 300;
    this.radius = 200;
    this.numberOfPoints = 5;
    this.startAngle = -PI / 2;
    this.depth = 0.4;
    this.clr = color(random(255),random(255),random(255));
  }
  render() {
    let count = 0;
    let a = this.startAngle;
    let delta = TWO_PI / this.numberOfPoints;
    fill(this.clr);
    beginShape();
    while (count < this.numberOfPoints) {
      let x1 = cos(a) * this.radius + this.x;
      let y1 = sin(a) * this.radius + this.y;
      vertex(x1, y1);
  
      let x2 = cos(a + delta/2) * this.radius * this.depth + this.x;
      let y2 = sin(a + delta/2) * this.radius * this.depth + this.y;
      vertex(x2,y2);
  
      a += delta;
      count += 1;
    }
    endShape(CLOSE);
  }
}
