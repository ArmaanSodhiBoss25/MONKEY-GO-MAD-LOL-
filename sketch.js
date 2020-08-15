var monkey, monkey_walking;
var stone, stoneGroup;
var banana;
var background;
var ground;
var score;

function preload(){
  monkey_walking = loadAnimation("Monkey_1.png",    "Monkey_2.png", "Monkey_3.png", "Monkey_4.png",  "Monkey_5.png", "Monkey_6.png", "Monkey_7.png",      "Monkey_8.png", "Monkey_10.png");
  
  background = loadImage("jungle.png");
  
  banana = loadImage("banana.png");
  
  stone = loadImage("stone.png");
}

function setup(){
  createCanvas(400, 400);
  
  monkey = createSprite(340, 70, 20, 20);
  monkey = addAnimation("walking", monkey_walking);
  monkey.scale = 0.5;
  
  ground = createSprite(340, 80, 20, 20);
  
  var score = 0;
}

function draw(){
  
  monkey.collide(ground);
  
  if(keyDown("space")){
    monkey.velocityY = -9;
  }
  
}

function Stone(){
   if(frameCount % 300 === 0){
     stone = createSprite(400, 340, 20, 20);
     stone = addAnimation("stone.png");
     stone.scale = 0.2;
     stone.velocityX = -4;
     stoneGroup.add(stone);
   }
 }

function Banana(){
   if(frameCount % 300 === 0){
     var banana = createSprite(400, 250, 20, 20);
     banana = addAnimation("banana.png");
     banana.scale = 0.1;
     banana.velocityX = -4;
     bananaGroup.add(banana);
   }
 }