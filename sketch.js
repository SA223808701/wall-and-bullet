var wall, thikness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(50,200,50,7);
  bullet.shapeColor="white";
 


  wall=createSprite(1400,200,60,height/2);
  wall.shapeColor=color(123,80,80);

  speed=random(223,321);
  weight=random(30,52);
  thikness=random(22,83);

  bullet.velocityX=speed;

 
  

}

function draw() {
  background("black");  
    
   if(hasCollided(bullet,wall)){
      bullet.velocityX=0;
      var damage=0.5 *weight *speed *speed /(thikness *thikness*thikness);

      if(damage>10){
        wall.shapeColor=color(225,0,0);
      }

      if(damage<10){

        wall.shapeColor=color(0,225,0)
      }

   }
  
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;

   if(bulletRightEdge>=wallLeftEdge){
     return true;
   }

   return false;

}