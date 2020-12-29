
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var paper, roof;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 1400);

	engine = Engine.create();
	world = engine.world;
	
    paper1 = new Paper(575,500,35);
    shapeColor = color("0,0,0");
    paper2 = new Paper(660,500,35); 
    shapeColor = color("0,0,0");
    paper3 = new Paper(700,500,35);
    shapeColor = color("0,0,0");
    paper4 = new Paper(785,500,35);
    shapeColor = color("0,0,0");
    paper5 = new Paper(855,500,35);
    shapeColor = color("0,0,0");
    roof = new Roof(720,100,1900,80);
    rope1 = new Rope(paper1.body,roof.body);
    rope2 = new Rope(paper2.body,roof.body);
    rope3 = new Rope(paper3.body,roof.body);
    rope4 = new Rope(paper4.body,roof.body);
    rope5 = new Rope(paper5.body,roof.body);
  
}

function draw() {
  background("white");
  Engine.update(engine);

  if(keyDown("ArrowUp")) {
    paper1.velocityX = -5;
    paper.velocityX = paper1.velocityX + 0.8;
  }

  roof.display();
  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

