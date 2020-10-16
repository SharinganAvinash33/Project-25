
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, binSide1, binSide2, binSide3, ground;

function preload(){
	
}
function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	

	ground=new Ground();
	binSide1=new binSide(950,310,150,15);
	binSide2=new binSide(888,310,15,18);
	fill("purple");
   binSide3=new binSide(1013,310,15,23);
	ball=new Paperball(100,100);

	console.log(ball);

	Engine.run(engine);


  
}

function throwIntoBin(){
	if(keyCode === UP_ARROW){
		
		Body.applyForce(ball.body,ball.body.position,{x:4,y:-8})
		
	}
}

function suspend(){
	if(ball.body.position.x>840){
		
		Body.applyForce(ball.body,ball.body.position,{x:-6,y:85})
		
	}
}

function draw() {
  
  background("purple");
  Engine.update(engine);

  ground.display();
  
  ball.display();
  binSide2.display();
  binSide3.display();
  binSide1.display();
  

 

  throwIntoBin();
  suspend();
}



