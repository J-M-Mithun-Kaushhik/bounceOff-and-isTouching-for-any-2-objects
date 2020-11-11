var fixedRect, movingRect, newRect1, newRect2, a;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

 newRect1 = createSprite(1100,400,20,20);
 newRect2 = createSprite(100,400,20,20);
 newRect1.shapeColor = "red";
 newRect2.shapeColor = "green";
 newRect1.velocityX = -6;
 newRect2.velocityX = 6;
}

function draw() {
  background(0,0,0);  
  bounceOff(newRect1, newRect2);
  //a = isTouching(movingRect, fixedRect);
  if(isTouching(movingRect, fixedRect)){
    text(isTouching(movingRect, fixedRect), 600,400);
    console.log(isTouching(movingRect, fixedRect));
  }
  
  drawSprites();
}