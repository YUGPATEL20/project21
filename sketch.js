var bullet,wall;
var speed,weight;
var deform,thickness;


function setup(){
    createCanvas(1600,400);

    speed = random(223,321);
    weight = random(30,50);
    thickness = random(22,83);

    console.log(speed);
    console.log(weight);

    bullet = createSprite(50,200,50,50);

    wall = createSprite(1200,200,thickness,height/2);
    wall.shapeColor = color(80,80,80);
}

function draw(){
    background("balck");
    bullet.velocityX = speed;

    if(hasCollided(bullet,wall)){
        bullet.velocityX = 0;

        var damage = 0.5*weight*speed*speed / (thickness*thickness);
        console.log(damage);
        
        if(damage > 10){
            wall.shapeColor =color(255,0,0);
        }
        if(damage < 10){
            wall.shapeColor = color(0,255,0);
        }
    }

    drawSprites();
}

function hasCollided(ob1,ob2){


    bulletRightEdge = ob1.x + ob1.width;
    wallLeftEdge = ob2.x + ob2.width;

    if(bulletRightEdge >=wallLeftEdge){
        return true;
    }
    return false;
}