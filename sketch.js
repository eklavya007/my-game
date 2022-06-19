
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
newBackground= loadImage("back.png")	
newSpaceship= loadImage("spaceship.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
newBkg= createSprite(windowWidth/2,windowHeight/2)
newEdge=createEdgeSprites()
newBkg.addImage(newBackground)
newBkg.scale=9
newspc= createSprite(windowWidth/2-50,windowHeight-150) 
	Engine.run(engine);
  newBkg.velocityY=1
  newspc.addImage(newSpaceship)
}


function draw() {
  rectMode(CENTER);
  background(0);
  if (newBkg.y>windowHeight){
newBkg.y=windowHeight/2
  }
  if(keyCode === UP_ARROW){
newspc.y=newspc.y-5
  }
  if (keyCode === DOWN_ARROW){
	  newspc.y=newspc.y+5
  }
  if (keyCode === RIGHT_ARROW){
	newspc.x=newspc.x+5
}
if (keyCode === LEFT_ARROW){
	newspc.x=newspc.x-5
}
newspc.collide(newEdge[0])
newspc.collide(newEdge[1])
newspc.collide(newEdge[3])

  drawSprites();
 
}



