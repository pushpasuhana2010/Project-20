var car, car2, car3; 
var wall, wall2, wall3;
var speed, speed2, speed3; 
var weight, weight2, weight3;
var line1, line2;

function setup() {
  createCanvas(1200,400);
  car = createSprite(30, 200, 60, 30);
  car.shapeColor = "white";

  car2 = createSprite(30, 55, 60, 30);
  car2.shapeColor = "white";

  car3 = createSprite(30, 340, 60, 30);
  car3.shapeColor = "white";

  wall = createSprite(1150,200,40, 70);
  wall.shapeColor=color(80,80,80);

  wall2 = createSprite(1150,55,40, 70);
  wall2.shapeColor=color(80,80,80);

  wall3 = createSprite(1150,340,40, 70);
  wall3.shapeColor=color(80,80,80);

  speed = random(55,90);
  speed2 = random(55,90);
  speed3 = random(55,90);
  weight = random(400,1500);
  weight2 = random(400,1500);
  weight3 = random(400,1500);

  line1 = createSprite(600,125,1200,5);
  line1.shapeColor="white";

  line2 = createSprite(600,275,1200,5);
  line2.shapeColor="white";
}

function draw() {
  background(0,0,0); 
  
  car.velocityX = speed;
  car2.velocityX = speed2;
  car3.velocityX = speed3;

  if(wall.x - car.x < (car.width + wall.width)/2 ){
       car.velocityX = 0;

      var deformation = 0.5 * weight * speed * speed/22500;

      if(deformation < 100){
         car.shapeColor=color(0,255,0);
      }

      if(deformation > 100 && deformation < 180){
        car.shapeColor=color(230,230,0);
      }

     if(deformation > 180){
      car.shapeColor=color(255,0,0);
     }
  }

  if(wall2.x - car2.x < (car2.width + wall2.width)/2 ){
    car2.velocityX = 0;

   var deformation = 0.5 * weight * speed2 * speed2/22500;

   if(deformation < 100){
      car2.shapeColor=color(0,255,0);
   }

   if(deformation > 100 && deformation < 180){
     car2.shapeColor=color(230,230,0);
   }

  if(deformation > 180){
   car2.shapeColor=color(255,0,0);
  }
}
  
if(wall3.x - car3.x < (car3.width + wall3.width)/2 ){
  car3.velocityX = 0;

 var deformation = 0.5 * weight * speed3 * speed3/22500;

 if(deformation < 100){
    car3.shapeColor=color(0,255,0);
 }

 if(deformation > 100 && deformation < 180){
   car3.shapeColor=color(230,230,0);
 }

if(deformation > 180){
 car3.shapeColor=color(255,0,0);
}
}

  drawSprites();
}