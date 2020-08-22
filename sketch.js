
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball1 ;
var ground ;
var log1 ;
var log2 ;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	
	ground = new Ground(700,height,14000,50);
	log1 = new Log(810,180,100,PI/2);
	ball1 = new Ball(200,200);
    
    log2 = new Log(900,180,100,PI/2);

}


function draw() {
  rectMode(CENTER);
  background(0);
  


  ball1.display();
  ground.display();
  log1.display();
  log2.display();
  drawSprites();
 
}



