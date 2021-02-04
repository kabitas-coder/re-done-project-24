const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1,box2,box3,box4;
var ground;


function setup() {
	var canvas = createCanvas(400, 400);
    engine = Engine.create();
	world = engine.world;

	box1 = new Box(50,0,40,40);
  box2 = new Box(140,30,80,70);
  box3 = new Box(250,90,20,90);
  box4 = new Box(350,70,60,60);
	Engine.run(engine);
  ground = new Ground(200,390,400,20);
}


function draw() {
  rectMode(CENTER);
  background("pink");
 
 box1.display();
 box2.display();
 box3.display();
 box4.display();
ground.display();
}



