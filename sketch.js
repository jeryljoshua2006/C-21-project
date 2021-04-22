var fixSprite1, fixSprite2, fixSprite3, fixSprite4;
var movingbox;
var music;
var canvas;
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surface
  
    fixSprite1=createSprite(100,550,180,20);
    fixSprite1.shapeColor="red";

    fixSprite2=createSprite(300,550,180,20);
    fixSprite2.shapeColor="green";

    fixSprite3=createSprite(500,550,180,20);
    fixSprite3.shapeColor="blue";

    fixSprite4=createSprite(700,550,180,20);
    fixSprite4.shapeColor="yellow";



    //create box sprite and give velocity

    movingbox=createSprite(random(10,750),300,20,20);
    movingbox.shapeColor="white";
    movingbox.velocityX=4;
    movingbox.velocityY=4;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites;

    //add condition to check if box touching surface and make it box

    if(movingbox.x<0){
        music.stop()
          movingbox.velocityX=3
      }
      
      else if(movingbox.x>800){
        music.stop()
          movingbox.velocityX=-3
      }
     
    if(isTouching(movingbox,fixSprite4)){
      music.play()
      movingbox.shapeColor="yellow";
      bounceOff(movingbox,fixSprite4)
      
    }
    
    else if(isTouching(movingbox,fixSprite3)){
      music.stop()
      movingbox.shapeColor="blue";
      bounceOff(movingbox,fixSprite3)
     
    }
      
    else if(isTouching(movingbox,fixSprite2)){
      music.stop()
      movingbox.shapeColor="green";
      bounceOff(movingbox,fixSprite2)
      movingbox.velocityX=0;
      movingbox.velocityY=0;
    }
    
    else if(isTouching(movingbox,fixSprite1)){
      music.stop()
      movingbox.shapeColor="red";
      bounceOff(movingbox,fixSprite1)
    }
  
    if (movingbox.y<0){
      music.stop()
      movingbox.velocityY=3
    }
  
    
     
      drawSprites()



    
}
