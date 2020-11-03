var car, wall;
var weight,speed;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);

}

function draw() {
createCanvas(1600,400);
car=createSprites(50,200,50,50);
car.velocityx=speed;
wall=createSprites(1500,200,60,height/2);
  background("black");  

if(wall.x-car.x<(car.width+wall.width)/2){

car.velocityx=0;
var deformation=0.5*weight*speed* speed/22509;
if(deformation>180){
  car.shapcolor=color(255,0,0);
}
if(deformation<180 &&deformation>100){
car.shapecolor=color(230,230,0);  

}
if(deformation<100){

  car.shapecolor=color(0,225,0);
}


}









  drawSprites();
}