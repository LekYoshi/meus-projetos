var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
path = createSprite(200,200);
path.addImage(pathImg)
path.velocityY = 4

//Criando menino que corre 
boy = createSprite(180,340,30,30);
boy.addAnimation("meninocorrendo",boyImg)
boy.scale = 0.5

 





// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,10,800);
leftBoundary.visible = false ;


//Crie Boundary direito 
rightBoundary=createSprite(400,400,10,800);
rightBoundary.visible = false ;

}

function draw() {
background(0);
boy.x = World.mouseX;

// Menino se movendo no eixo X com o mouse

boy.collide(leftBoundary);
boy.collide(rightBoundary);

 

  


 //Reiniciar o fundo
 if(path.y > 400){
    path.y = path.height/4;
 }

 

 drawSprites();

 }




