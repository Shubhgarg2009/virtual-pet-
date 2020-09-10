//Create variables here
var dog,dogIMG,dog2IMG,database, foodS, foodStock;

function preload()
{
  //load images here
  dogIMG=loadImage("Dog.png");
  dog2IMG=loadImage("happydog.png")
}

function setup() {
  createCanvas(500,500);
  
database = firebase.database();
console.log(database);

  dog=createSprite(250,250,10,20);
  dog.addImage(dogIMG );
  dog.scale=0.2;

  var foodStock=database.ref("Food");
  foodStock.on("value",readStock);
  
}


function draw() {  
background(rgb(46, 139, 87));

if (keyWentDown("UP_ARROW")){
  writeStock(foodS)
  dog.addImage(dog2IMG);
}
stroke('yellow')
text("Note:Press Up arrow key to feed the dog",150,150)
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val;
}


function writeStock(x){
  database.ref('/').update({
   Food:x
  }
  )
}

