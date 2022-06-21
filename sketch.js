
var thief
var thiefAnimation
var cityBG
var bg
var ground;

function preload(){
  thiefAnimation=loadAnimation("assets/theif1.png","assets/theif2.png")
  cityBG=loadImage("assets/citybg.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 
 bg=createSprite(windowWidth/2,windowHeight/7,windowWidth,windowHeight)
 bg.addImage(cityBG)
 bg.velocityX=-3
bg.scale=1.6

thief=createSprite(380,600,50,30)
 thief.addAnimation("running",thiefAnimation)
 thief.scale=0.6

 ground=createSprite(0,windowHeight-10,windowWidth*2,5);
 ground.visible=false;
}

function draw() {
  background(0);
  if(bg.x<0){
    bg.x=bg.width/4
  }

  if(keyDown("space")){
    thief.velocityY=-15;
  }

  thief.velocityY=thief.velocityY+0.8

  thief.collide(ground)
  drawSprites()
}
