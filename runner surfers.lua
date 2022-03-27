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



laterale = createSprite(50,0,10,800)
laterald = createSprite(350,0,10,800)
laterale.visible = false 
laterald.visible = false 

//Criando menino que corre 
boy = createSprite(200,200,20,10);
boy.addAnimation(boyImg)
boy.scale = 1.15



// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,10,800);
leftBoundary.visible = false ;


//Crie Boundary direito 
rightBoundary=createSprite(400,400,10,800);
rightBoundary.visible = false ;

}

function draw() {
background(0);


// Menino se movendo no eixo X com o mouse

edges= createEdgeSprites();
boy.collide(edges[3]);
boy.collide(leftBoundary);
boy.collide(rightBoundary);
boy.x = World.mouseX;
 
   createEdgeSprites();
  
  


 //Reiniciar o fundo
 if(path.y > 400){
    path.y = path.height/4;
 }
 boy.collide(laterale)
  boy.collide(laterald)
 

 drawSprites();

 }