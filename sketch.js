var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("Images/star.png");
	fairyImg = loadAnimation("Images/fairyImage1.png");
	bgImg = loadImage("Images/starNight.png");
	fairyVoice = loadSound("Sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic : false});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x = starBody.position.x
  star.y = starBody.position.y

  drawSprites();

}

function keyPressed() 
{
    if (keyDown("left"))
  {
      fairy.velocityX = -5;
  }
    else if (keyDown("right"))
	{
		fairy.velocityX = 5;
	}
}
