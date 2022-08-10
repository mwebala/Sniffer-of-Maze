const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world
var bg_image
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8;
var wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17;
var mouse;
var cheese;
var pj;
var cheeseCount = 0;
var gameState = "story";
var win_image;
var sad_image;

function preload(){
bg_image = loadImage("house.jpg")
win_image = loadImage("WINNER.png")
sad_image = loadImage("loser.png")
}

function setup() {
  //create the canvas
  createCanvas(1000,600);
  
  //setup
  engine = Engine.create();
  world = engine.world;
 
  //create boxes
  wall1 = new Ground(85, 450,170,15)
  wall2 = new Ground(162, 370,15,150)
  wall3 = new Ground(175, 200,180,15)
  wall4 = new Ground(175, 132,15,120)
  wall5 = new Ground(350, 280,150,15)
  wall6 = new Ground(400, 450,250,15)
  wall7 = new Ground(275, 522,15,160)
  wall8 = new Ground(500, 250,15,215)
  wall9 = new Ground(558, 250,100,15)
  wall10 = new Ground(640, 450,15,150)
  wall11= new Ground(875, 150,250,15)
  wall12 = new Ground(780, 492,15,215)
  wall13= new Ground(850, 500,150,15)
  wall14 = new Ground(500, 8, 1000,15)
  wall15 = new Ground(500, 592, 1000,15)
  wall16 = new Ground(8, 300, 15,600)
  wall17 = new Ground(992, 300, 15,600)
  
  mouse = new Mouse(850,550,40,30)
  cheese = new Cheese(800,250,40,30)
  pj = new PAPAJOE(250,150,50,60)
  
  
  




  
  }


function draw() {
  //set the background
  background(bg_image);  
   if( gameState == "story"){
    background("yellow")
    fill("black")
    textSize(27)
    text("There was a storm outside. Bob had nowhere too go.", 200,150)
    text("Until he found a house. ", 200, 200)
    text("But old Papa Joe who lived there HATES mice.", 200, 250)
    text("Now Bob must escape from Papa Joe ", 200,300)
    text("And find the Golden Cheese to survive",200, 350 )
    text("PRESS SPCEBAR TO CONTINUE!", 200, 500)

    if(keyIsDown("32")){
      background("orange")
      gameState = 'rules'
    }
   }

if(gameState === 'rules'){
  background("orange")
    fill("black")
    textSize(27)
    text("Use arrow keys to move. ", 200,150)
    text("Collect 5 cheeses to win", 200, 200)
    text("Stay away from Papa Joe ", 200, 250)
    text("If Papa Joe catches you, you loose ", 200,300)
    text("PRESS SPACEBAR TO BEGIN !",200, 350 )


    if(keyIsDown("32")){
      background(bg_image)
      gameState = 'play'
    }
}

  //update the engine
  Engine.update(engine);
   
  if(gameState === 'play'){

  //display ground
  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()
  wall5.display()
  wall6.display()
  wall7.display()
  wall8.display()
  wall9.display()
  wall10.display()
  wall11.display()
  wall12.display()
  wall13.display()
  wall14.display()
  wall15.display()
  wall16.display()
  wall17.display()

  mouse.display()
  cheese.display()
  pj.display()
  pj.move()

  if(frameCount%100 == 0 ){
    cheese.move()
  }

  push()  
  fill("orange")
  textSize(25)
  text("Cheese Count:"+cheeseCount,50,50)
  pop()

  if(Matter.SAT.collides(mouse.body, cheese.body).collided){
    cheese.move()
    cheeseCount += 1
  }
  if(Matter.SAT.collides(mouse.body, pj.body).collided){
    gameState = "END"
  }

  if(cheeseCount == 1 ){
    gameState = "WIN"
  }
  }

  if(gameState === "WIN"){
     background("blue")
     textSize(30)
     text("YOU WON!!", 300, 300)
     push()
     imageMode(CENTER)
     image(win_image, 500, 300, 100, 150)
     pop()
    
  }
  if(gameState === "END"){
    background("red")
    textSize(30) 
    text("HA! YOU LOST!", 300, 300)
    push()
    imageMode(CENTER)
    image(sad_image, 500, 300, 100, 150)
    pop()
   
 }


}

function keyPressed(){
 if(keyCode === 39 ){
  mouse.flingRight()
 
 }
 if(keyCode === 38 ){
  mouse.flingForward()
 
 }
 if(keyCode === 37 ){
  mouse.flingLeft()
 
 }
 if(keyCode === 36 ){
  mouse.flingBack()
 
 }
}
