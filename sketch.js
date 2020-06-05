var ground, engine, world, body, d1, d2, d3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var paper, paperImage, paperSprite;
var dustbinSprite, dustbinImage;

function preload() {
	paperImage = loadImage("paper.png");
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 400);
	paperSprite = createSprite(100, 150, 10, 10);
	paperSprite.addImage(paperImage);
	paperSprite.scale = 0.2;

	dustbinSprite = createSprite(475, 300, 1, 1);
	dustbinSprite.addImage(dustbinImage);
	dustbinSprite.scale = 0.55;

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 200, 15);

	sling = new Slingshot(paper.body, {x:100, y:150});

	ground = new Ground(400, 400, 1000, 20);

	d1 = Bodies.rectangle(400, 300, 10, 180, {isStatic : true});
	World.add(world, d1);
	d2 = Bodies.rectangle(475, 390 , 140, 10, {isStatic : true})
	World.add(world, d2);
	d3 = Bodies.rectangle(550, 300, 10, 180, {isStatic : true});
	World.add(world, d3);

	
	Engine.run(engine);
  
}


function draw() {
	background("yellow");
	paper.display();
	ground.display();
	sling.display();

	paperSprite.x = paper.body.position.x 
	paperSprite.y = paper.body.position.y

	Engine.update(engine);

	rect(d1.position.x, d1.position.y, 10, 180);
	rect(d2.position.x, d2.position.y, 140, 10);
	rect(d3.position.x, d3.position.y, 10, 180);
	drawSprites();

	//keyPressed();
}

/*function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:10,y:-40});
	}
}*/

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling.fly();
}


/*var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}





*/