
var cat,catImage,catImage2,catImage3;
var mouse,mouseImage;
var garden,gardenImage;


function preload() {
   gardenImage = loadImage("garden.png")
    catImage = loadImage("tomOne.png")
    catImage2 = loadImage("tomTwo.png","tomThree.png")
    catImage3 = loadImage("tomFour.png")
    mouseImage = loadImage("jerryOne.png","jerryTwo.png","jerryThree.png","jerryFour.png")
 }

function setup(){
    createCanvas(800,800);
    
    garden = createSprite(400,400)
    garden.addImage(gardenImage)
    garden.scale = 1;

    cat = createSprite(600,500)
    cat.addImage(catImage);
    cat.scale = 0.1;

    mouse = createSprite(200,500)
    mouse.addImage(mouseImage);
    mouse.scale = 0.07;
}

function draw() {
    background(255)
        
      if(cat.x < 280){
          cat.x = 275
          cat.addImage(catImage3)
      
          cat.velocityX = 0;
      }
        
      
   
    //Write condition here to evalute if tom and jerry collide
keyPressed();
    drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
    
        cat.velocityX = -3
       cat.addImage(catImage2)
       
    }
}