var iss , spacebg , spacecraft1 

function preload() {
  iss_image = loadImage('/Docking-undocking/iss.png');
  spacebg_image = loadImage('/Docking-undocking/spacebg.png');
  spacecraft1_image = loadImage('/Docking-undocking/spacecraft1.png');
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(200 ,200)
  iss.addImage(iss_image)
  iss.scale(1)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
}