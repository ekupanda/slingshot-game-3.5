const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ground2;
var ball;
var box1,box2,box3,box4,box5,box6,box7,box8,box10,box11,box12,box13,box14,box15,box16;
var slingshot1;
var score = 0;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(260,140,120,10);
    ground2 = new Ground(260,370,185,10);

    box1 = new box(180,200);
    box2 = new box(210,200);
    box3 = new box(240,200);
    box4 = new box(270,200);
    box6 = new box(195,170);
    box7 = new box(225,170);
    box8 = new box(255,170);

    box10 = new box(210,100);
    box11 = new box(240,100);
    box12 = new box(270,100);
    box13 = new box(300,100);
    box14 = new box(265,70);
    box15 = new box(240,70);
    box16 = new box(253,40);

    ball = new pig(90,200);

    slingshot1 =new Slingshot(ball.body,{x:90,y:200}); 

}
    

function draw(){
    background(0);
    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)

    Engine.update(engine);
    slingshot1.display();
    ball.display();
    ground.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box6.display();
    box7.display();
    box8.display();

    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

   }
   function mouseDragged(){
       Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
   }
   function mouseReleased(){
       slingshot1.fly();
   }
 function keyPressed(){
     if(keyCode===32){
         slingshot1.attach(ball.body);
     }
 }