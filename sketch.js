var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
    isStatic:false,
    restitution:0.3,
	friction:0,
	density:1.2

	}
ball = Bodies.circle(250, 90, 30, ball_options);
World.add(world, ball);

	Engine.run(engine);
  ground = new Ground(800, 680, 1600, 20);

  leftSide = new Ground(1000, 610, 20, 120);
  rightSide = new Ground(1200, 610, 20, 120);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 30);

  
ground.show();
leftSide.show();
rightSide.show();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball, ball.position, {x:85, y:-85});
  }
}




