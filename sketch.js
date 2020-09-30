
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var wood;
var floor;
var pebble;
var ball,ball2,ball3,ball4,ball5;
var ball6,ball7,ball8,ball9,ball10,ball11;
var boy1,boy1_image;
var boy2;

function preload(){
	boy1_image = loadImage("pics/boy.png");
}

function setup() {
	createCanvas(1350, 550);


	engine = Engine.create();
	world = engine.world;

	boy1 = createSprite(200,420,10,10);
	boy1.addImage("boy",boy1_image);
	boy1.scale = 0.14;

	wood = new Tree(800,250,400,550);

	floor = new Ground(675,510,1350,20);

	pebble = new Stone(120,330,70,70);

	ball = new Mango(650,170,70);
	ball2 = new Mango(700,240,70);
	ball3 = new Mango(730,150,70);
	ball4 = new Mango(780,250,70);
	ball5 = new Mango(800,170,70);
	ball6 = new Mango(850,230,70);
	ball7 = new Mango(880,140,70);
	ball8 = new Mango(930,200,70);
	ball9 = new Mango(840,80,70);
	ball10 = new Mango(770,70,70);
	ball11 = new Mango(970,130,70);

	chain = new Boy(pebble.body,{x: 120, y: 310});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

  wood.display();
  floor.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();
  ball11.display();
  
  detectCollision(pebble,ball);
  detectCollision(pebble,ball2);
  detectCollision(pebble,ball3);
  detectCollision(pebble,ball4);
  detectCollision(pebble,ball5);
  detectCollision(pebble,ball6);
  detectCollision(pebble,ball7);
  detectCollision(pebble,ball8);
  detectCollision(pebble,ball9);
  detectCollision(pebble,ball10);
  detectCollision(pebble,ball11);

  drawSprites();
  pebble.display();	
 
}


function mouseDragged (){
    Matter.Body.setPosition(pebble.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(pebble.body, {x: 120, y: 310});
		launcherObject.attach(pebble.body);
	}
}

function detectCollision(bodyA,bodyB) {
	mangoBodyPosition = bodyA.body.position
	stoneBodyPosition = bodyB.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance <= bodyA.r + bodyB.r) {
		Matter.Body.setStatic(bodyA.body,false);
	}
}


