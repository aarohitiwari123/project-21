var  bullet, checking;
var weight,speed, thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,310);
  weight = random(30,52);
  thickness = random(25,83);
   bullet = createSprite(50, 200, 120, 15);
   bullet.shapeColor = "white";
  checking = createSprite(1450,200,thickness,height/2);
  checking.shapeColor = color(155,55,26);
   bullet.velocityX = speed;
}

function draw() {
  background(24,115,255);  
  
if(collide(bullet, checking)){
bullet.velocityX = 0;
var damage=0.5 * weight* speed* speed/ (thickness *thickness *thickness); 
if(damage > 10)
{ 
checking.shapeColor= color(255,0,0); 
} 
if(damage<10){
 checking.shapeColor=color(0,255,0); 
}
}

  drawSprites();
}
function collide(lbullet,lchecking){ 
    bulletRightEdge = lbullet.x + lbullet.width;
     checkingLeftEdge= lchecking.x;
     if(bulletRightEdge >= checkingLeftEdge) {
    return true
    }
    return false 
    } 
  