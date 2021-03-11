const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, myWorld 

var crashSound
var trainSound
var box1, box2, box3, box4, box5, box6
var bg, ground
var chain1, chain2, chain3, chain4, chain5, chain6
var rock
function preload() {
bg = loadImage ("images/bg.jpg")
trainSound = loadSound ("sound/train.mp3")
crashSound = loadSound ("sound/train_crossing.mp3")
}

function setup(){
    
 createCanvas(1200,400);
    
    engine = Engine.create();
    myWorld = engine.world;
    
    ground = new Ground(600,height,1200,20);

    box1 = new Box (50, 170 ,50 ,50)
    box2 = new Box (150, 170 ,50 ,50)
    box3 - new Box (250, 170 ,50 ,50)
    box4 =  new Box (350, 170 ,50 ,50)
    box5 = new Box (450, 170 ,50 ,50)
    box6 = new Box (550, 170 ,50 ,50)

    rock = new Rock (1100,200,100,100)

    chain1 = new Chain (box1.body, box2.body)
    chain2 = new Chain (box2.body, box3.body)
    chain3 = new Chain (box3.body, box4.body)
    chain4 = new Chain (box4.body, box5.body)
    chain5 = new Chain (box5.body, box6.body)
}

function draw(){

        background(bg);
        Engine.update(engine)
 

        box1.show()
        box2.show()
        box3.show()
        box4.show()
        box5.show()
        box6.show()

        ground.show()
        
        Rock.show()

        chain1.show()
        chain2.show()
        chain3.show()
        chain4.show()
        chain5.show()
        var collision = Matter.SAT.collides(box6.body, rock.body)
        if(collision.collided)
        {
            flag = 1
        }
        if(flag === 1)
        {
            textSize(30)
            text("crash", 500, 200)
            crashSound.play()

        }
}


function keyPressed(){
    if(keyCode === RIGHT_ARROW ){
Matter.Body.applyForce(box6.body,({x:box6.body.position.x, y:box6.body.position.y},{x:0.5,y:0}))
      trainSound.play()
    }



}


