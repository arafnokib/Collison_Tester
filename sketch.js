var deformation;

var car,wall;
var speed, weight;



function setup() {
  createCanvas(1600,400);
  speed = random(10,90)
  weight = random(400,1500)
    
  car = createSprite(50,200,50,50);
  wall = createSprite(750,200,5,100);

  
  
}

function draw() {
  background(0);  
  drawSprites();

  car.velocityX = speed;
  if (car.isTouching(wall)){


  var deformation = ((weight * speed * speed)/22500)
  car.velocityX = 0;

    if (deformation > 180)
    {
    car.shapeColor = color(255,0,0)

    }

    if (deformation<100)
    {
        car.shapeColor = color(230,230,0);

    }

    if (deformation<180 && deformation>100)
    {
      car.shapeColor = color(0,255,0)

    }
  }

  if (keyDown("r")){
    reset()
  }

  
}



