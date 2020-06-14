var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper1,ground1,dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	paper1=new Paper(200,200)
ground1=new Ground()
	
	dustbin1=new dustbin(800,320,150,100)
	dustbin2=new dustbin(670,360,20,100)
	dustbin3=new dustbin(930,360,20,100)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display()
  ground1.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()

 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:10,y:-10});
  
	}
}



