var bob1, bob2, bob3, bob4, bob5, roof1, chain1, chain2, chain3, chain4, chain5, bobDiameter;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(240, 500, 10);
	bob2 = new Bob(320, 500, 10);
	bob3 = new Bob(400, 500, 10);
	bob4 = new Bob(480, 500, 10);
	bob5 = new Bob(560, 500, 10);

	roof = new Roof(400, 200, 550, 20);

	chain1 = new Chain(bob1.body, roof.body, -160, 0);
	chain2 = new Chain(bob2.body, roof.body, -80, 0);
	chain3 = new Chain(bob3.body, roof.body, 0, 0);
	chain4 = new Chain(bob4.body, roof.body, 80, 0);
	chain5 = new Chain(bob5.body, roof.body, 160, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50, y:-50})
	}

}
