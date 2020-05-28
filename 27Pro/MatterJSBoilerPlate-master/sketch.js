//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;
	bobObject1 = new Bob(260,360)
	bobObject2 = new Bob(280,360)
	bobObject3 = new Bob(300,360)
	bobObject4 = new Bob(320,360)
	bobObject5 = new Bob(340,360)
	ground = new roof(300,380,600,40)
	Roof = new roof(300,50,200,40)

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	rope1 = new Rope(bobObject1.body,Roof.body,-5,0)
	rope2 = new Rope(bobObject2.body,Roof.body,3,0)
	rope3 = new Rope(bobObject3.body,Roof.body,0,0)
	rope4 = new Rope(bobObject4.body,Roof.body,3,0)
	//rope5 = new Rope(bobObject5.body,Roof.body,0,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 keypress()
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  Roof.display();
  rope1.display();
 rope2.display();
 rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keypress(){
	if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-10,y:3})
	}
}

