var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var side1 ,side2 ,side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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
	packageSprite.scale=0.3;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	side1 = createSprite(400,650,200,20);
	side1.shapeColor="red";
	side2 = createSprite(300,610,20,100);
	side2.shapeColor="red";
	side3 = createSprite(500,610,20,100);
	side3.shapeColor="red";
   
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
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter .Body .setStatic("flase")
	packageBody.y = packageBody.y-20
	
	//packageSprite.velocityY = -3;
  }
}



//ellipseMode(RADIUS)
//ellipse(packageSprite.position.x,packageSprite.position.y,20,20);