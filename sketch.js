const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball;
var groundUP, groundDOWN;
var slingShot;

var blueBox1, blueBox2, blueBox3, blueBox4, blueBox5, blueBox6, blueBox7;
var pinkBox1, pinkBox2, pinkBox3, pinkBox4, pinkBox5;
var greenBox1, greenBox2, greenBox3;
var greyBox1;

var orangeBox1, orangeBox2, orangeBox3, orangeBox4, orangeBox5;
var blackBox1, blackBox2, blackBox3;
var redBox1;

var backgroundImg;

function preload(){
  getTime();
}

function setup() {
  createCanvas(1200,450);
  
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(0,0,50,50);
  slingShot = new SlingShot(ball.body, {x:150, y:225});
  groundUp = new Ground(960, 200,  210, 15);
  groundDOWN = new Ground(700, 370,  250, 15);

  blueBox1 = new Blue(609, 350);
  blueBox2 = new Blue(630, 350);
  blueBox3 = new Blue(660, 350);
  blueBox4 = new Blue(690, 350);
  blueBox5 = new Blue(720, 350);
  blueBox6 = new Blue(750, 350);
  blueBox7 = new Blue(780, 350);

  pinkBox1 = new Pink(630, 320);
  pinkBox2 = new Pink(660, 320);
  pinkBox3 = new Pink(690, 320);
  pinkBox4 = new Pink(720, 320);
  pinkBox5 = new Pink(750, 320);

  greenBox1 = new Green(660, 290);
  greenBox2 = new Green(690, 290);
  greenBox3 = new Green(720, 290);

  greyBox1 = new Grey(690, 260);

  orangeBox1 = new Orange(900, 180);
  orangeBox2 = new Orange(930, 180);
  orangeBox3 = new Orange(960, 180);
  orangeBox4 = new Orange(980,180);
  orangeBox5 = new Orange(1000, 180);

  blackBox1 = new Black(920, 150);
  blackBox2 = new Black(950, 150);
  blackBox3 = new Black(970, 150);

  redBox1 = new Red(950, 120);

}


function draw() {
  if(backgroundImg)
  background(backgroundImg);  

  Engine.update(engine);
  stroke(10);
  fill("white");
  textSize(20);
  text("Drag the ball and release it, to launch it towards the block", 290, 50);
  text("After releasing it press the space bar to reset the ball", 300, 80);

  slingShot.display();
  ball.display();
  groundUp.display();
  groundDOWN.display();

  blueBox1.display();
  blueBox2.display();
  blueBox3.display();
  blueBox4.display();
  blueBox5.display();
  blueBox6.display();
  blueBox7.display();
 
  pinkBox1.display();
  pinkBox2.display();
  pinkBox3.display();
  pinkBox4.display();
  pinkBox5.display();

  greenBox1.display();
  greenBox2.display();
  greenBox3.display();
  
  greyBox1.display();

  orangeBox1.display();
  orangeBox2.display();
  orangeBox3.display();
  orangeBox4.display();
  orangeBox5.display();

  blackBox1.display();
  blackBox2.display();
  blackBox3.display();

  redBox1.display();


}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    
  
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(ball.body);
  }
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseType = await response.json();
 //console.log(responseType);
  var datetime = responseType.datetime;
 //console.log(datetime);
  var hour = datetime.slice(11,13);
  console.log(hour);

  if(hour>=6 && hour<=18){
    bg = "bgD.jpg";
  }
  else{
    bg = "bgN.jpg";
  }
  backgroundImg = loadImage(bg);
}