var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var paper,dustbin,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1920,1080);
	//Text("x"+mouseY+mouseX,50,100);


	engine = Engine.create();
	world = engine.world;

	
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//World.add(world, ground);

	ground = new Ground(200,650,20000,10);
	paper =  new Paper(200,450,45);
	dustbin = new Dustbin(878,638,10,200);
	 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  bin.display();

  text(mouseX+","+mouseY,400,300);

  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}




