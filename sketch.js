var paper,paperImg,dustbin,dustbinImg,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

function preload()
{
	
}

function setup() {
	createCanvas(1920,1080);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,650,20000,10);
	paper =  new Paper(200,450);
	dustbin1 = new Dustbin(886,590,20,110);
	dustbin2 = new Dustbin(1079,590,20,110);
	dustbin3 = new Dustbin(985,640,173,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display(); 

  text(mouseX+","+mouseY,92,30);

  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:42,y:-42});
  
	}
}




