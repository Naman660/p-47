var spacecraft,spacecraftImage
var bg,bgImage
var aliens,aliensImage
var alien,alienImage
var lazer,lazerImage

function preload(){
spacecraftImage = loadImage("spacecraft.png");
bgImage = loadImage("bg.gif")
alienImage = loadImage("aliens.png")
alien2Image = loadImage("alien2.png")
lazerImage = loadImage("lazer.png")
}

function setup(){
createCanvas(600,600);

bg = createSprite(200,200);
bg.addImage(bgImage);
bg.scale = 2

spacecraft = createSprite(260,500);
spacecraft.addImage(spacecraftImage);
spacecraft.scale = 0.5

aliensGroup = new Group();
lazer = createSprite(spacecraft.x,spacecraft.y);
lazer.addImage(lazerImage);
lazer.scale = 0.05
}

function draw(){
background("black")
if(keyDown("right")){
spacecraft.x = spacecraft.x+2
}
if(keyDown("left")){
spacecraft.x = spacecraft.x-2
}


aliens()
aliens2()
if(keyDown("space")){
    lazer.velocityY = -3
}
drawSprites();
}

function aliens(){
if(frameCount%120===0){
alien = createSprite(200,50);
alien.x = Math.round(random(50,500))
alien.addImage(alienImage);
alien.scale = 0.3
alien.velocityY = 3;
aliensGroup.add(alien);
}
}
function aliens2(){
    if(frameCount%200===0){
    alien2 = createSprite(200,50);
    alien2.x = Math.round(random(80,450))
    alien2.addImage(alien2Image);
    alien2.scale = 0.2
    aliensGroup.add(alien2);
    alien2.velocityY = 3;
    }
    }
   //nead to add function for lazer