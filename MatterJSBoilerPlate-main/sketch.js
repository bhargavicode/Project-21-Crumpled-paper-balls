
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ball,ground,left,right,world
var radius=40
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ballOptions={
		restitution:0.3,density:1.2
	}

    Ball=Bodies.circle(260,100,radius/2,ballOptions)
	World.add(world,Ball)

	ground=new Ground(width/2,670,width,20)
	left=new Ground(1100,600,20,120)
	right=new Ground(1350,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(Ball.position.x,Ball.position.y,radius,radius)
  ground.display()
  left.display()
  right.display()

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(Ball,Ball.position,{x:85,y:-85})
	}
}
