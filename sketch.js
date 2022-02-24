var pac1
var fantasma1,fantasma2,fantasma3,fantasma4,fantasma5



function setup(){
createCanvas(800,800);
pac1=createSprite(400,400,50,50)
pac1.shapeColor='red'

fantasma1=createSprite(200,200,30,30);
fantasma1.shapeColor="green"
fantasma2=createSprite(150,150,30,30);
fantasma2.shapeColor="blue"
fantasma3=createSprite(301,301,30,30);
fantasma3.shapeColor="yellow"
fantasma4=createSprite(600,600,30,30);
fantasma4.shapeColor="pink"
fantasma5=createSprite(500,500,30,30);
fantasma5.shapeColor="orange"
}
function draw(){
background(0)
drawSprites()
if(keyIsDown(UP_ARROW)){
pac1.position.y=pac1.position.y-2;
}
if(keyIsDown(DOWN_ARROW)){
pac1.position.y=pac1.position.y+2;
}
if(keyIsDown (LEFT_ARROW)){
    pac1.position.x=pac1.position.x-100;
}
if(keyIsDown (RIGHT_ARROW)){
    pac1.position.x=pac1.position.x+100;
}


}