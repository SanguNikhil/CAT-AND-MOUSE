
var tom,tomImg;
var jerry,jerryImg;
var gardenImg;


function preload() {
    //load the images here
    tomImg = loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.pmg");
    jerryImg = loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png");
    gardenImg = loadAnimation("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(350,50,20,30);
    tom.addAnimation("tom",tomImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
