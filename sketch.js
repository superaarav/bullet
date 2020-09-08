var bullet,wall;
var weight,speed,thickness;


function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);  
  bullet = createSprite(50, 200, 20, 70);
  bullet.shapeColor = color(255);
  wall = createSprite(1200,200,150,thickness);
  wall.shapeColor = color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX = speed;
  
}

function draw() {
  background(0);

  
  if(hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10) {
      bullet.shapeColor = color(255,0,0);
    }
    
    //if(deformation<180 && deformation>100) {
    //  car.shapeColor = color(230,230,0);
    //}

    if(damage<10) {
      bullet.shapeColor = color(0,255,0);
    }

  }
  
  drawSprites();
}

function hasCollided(bullet,wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;
}