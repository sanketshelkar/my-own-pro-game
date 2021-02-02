var back
var joker
var jail
var alok
var drone
var drone2
var wall
var wall2
var lazer
var move
var help
var help1
var pi
var b
var b2
var b3
var la
var la2

function preload(){

  back = loadImage("back.png")
  joker1 = loadImage("joker.jpg")
  jail1 = loadImage("jail.png")
  alok1 = loadImage("Alok.png")
  drone1 = loadImage("drone.png")
  lazer1 = loadImage("fire.png")
  move = loadImage("alok2.png")
  move1 = loadImage("alok3.png")
  help1 = loadImage("help.gif")
  help2 = loadImage("help1.JPG")
  pi1 = loadImage("pi.png")
  drone3 = loadImage("drone.png")
  la1 = loadImage("space.png")
  la3 = loadImage("space.png")
}



function setup(){

  createCanvas(windowWidth,windowHeight)
  joker = createSprite(50,100)
  jail = createSprite(50,100)
  alok = createSprite(1200,500)
  drone = createSprite(200,100)
  wall = createSprite(200,400,500,10)
  wall2 = createSprite(600,5,1600,10)
  help = createSprite(1300,50,20,20)
  pi = createSprite(400,300)
  drone2 = createSprite(100,200)
  b = createSprite(1,350,10,1000)
  b2 = createSprite(650,620,1450,10)
  b3 = createSprite(1360,350,10,1000)

}

function draw(){
background("green")

  image(back,1,1,windowWidth,windowHeight)
  joker.addImage(joker1)
  jail.addImage(jail1)
  alok.addImage(alok1) 
  drone.addImage(drone1)
  help.addImage(help1)
  pi.addImage(pi1)
  drone2.addImage(drone3)

  //scale
  joker.scale = 0.3
  jail.scale = 0.3
  alok.scale = 0.2
  drone.scale = 0.2
  drone2.scale = 0.3
  help.scale = 0.2
  pi.scale = 0.5
 

  //bounce off
  alok.bounceOff(b)
  alok.bounceOff(b2)
  alok.bounceOff(b3)
  alok.bounceOff(wall2)



  if (keyDown("up")){

    lazer = createSprite(200,100,90,10)
    lazer.addImage(lazer1)
    lazer.setVelocity(10,0)

  }

  if (keyDown("down")){

    lazer = createSprite(drone.y,drone.x,90,10)
    lazer.addImage(lazer1)
    lazer.setVelocity(10,0)

  }

  if (keyDown("left")){

    lazer = createSprite(drone.y,drone.x,90,10)
    lazer.addImage(lazer1)
    lazer.setVelocity(10,0)

  }

  if (keyDown("right")){

    lazer = createSprite(drone.y,drone.x,90,10)
    lazer.addImage(lazer1)
    lazer.setVelocity(10,0)

  }

  //alok movement
  if (keyDown("down")){

    alok.y = alok.y +10
    alok.addImage(move)
    
  }

  if (keyDown("up")){

    alok.y = alok.y -10

  }

  if (keyDown("right")){

    alok.x = alok.x +10
    alok.addImage(move1)


  }

  if (keyDown("left")){

    alok.x = alok.x -10
    
  } 
  
  //pi
  if (keyDown("f")){

    la = createSprite(pi.x,pi.y,90,10)
    la.addImage(la1)
    la.setVelocity(10,0)
    la.scale = 0.2

  }
  
  //alok
  if (keyDown("f")){

    la2 = createSprite(alok.x,alok.y,90,10)
    la2.addImage(la3)
    la2.setVelocity(-10,0)
    la2.scale = 0.2

  }

  drawSprites();
  //mouse pressed
  if (mousePressedOver(help)) {

   image(help2,200,200,1000,200)
    
  }

}