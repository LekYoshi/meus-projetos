var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
 
   drawSprites();
} 

// var select_sprites = Math(random(1,3));
redL = Math.random(1,3);
orangeL = Math.random(1,3);
apple = Math.random(1,3);
// var select_sprites = Math.random(random(1,3));
redL = Math.random(1,3)
orangeL = Math.random(1,3)
apple = Math.random(1,3)
// var select_sprites = Math.round(1,3);
redL = Math.round(1,3)
apple = Math.round(1,3)
orangeL = Math.round(1,3)
// var select_sprites = Math.round(random(1,3));
redL = Math.round(1,3)
orangeL = Math.round(1,3)
apple = Math.round(1,3)
  
  // if (frameCount % 50 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  if (frameCount % 50 == 0) {
     if (apple == 1) {
      createApples();
     } else if (orangeL == 2) {
       createOrange();
     }else if(redL == 3 )  {
       createRed();
     }
   }
  
  // if (frameCount % 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }
  // }
 
   if (frameCount % 80 == 0) {
     if (apple == 1) {
      createApples();
    } else if (orangeL == 2) {
      createOrange();
    }
   }
  // if (frameCount / 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }
  if (frameCount / 80 == 0) {
    if(apple == 1 ){
      createApples();
    }else if (orangeL == 2){
  createOrange()
    }else if (redL == 3) {
      createRed()
    }
    
  }
  
  // if (frameCount % 80 = 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }
  if (frameCount % 80 == 0 ) {
    if(apple == 1 ){
      createApples();
    }else if (orangeL == 2){
  createOrange()
    }else if(redL == 3) {
      createRed()
    }
  }
  


function createApples() {
  if (frameCount % 60 == 0){}
    
  apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
  if (frameCount % 50 == 0){}
 
  orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
if(frameCount % 70 == 0){
}
  redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
  console.log(rabbit.depth);
  console.log(redL.depth)
}