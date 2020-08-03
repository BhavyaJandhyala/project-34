//Create variables here
var dog;
var happyDog;
var database;
var foodStock;
var foodS;

function preload()
{
  //load images here
  dog = loadImage("images/dogImg");
  happyDog = loadImage("images/dogImg1");
}

function setup() {
	createCanvas(500,500);
    dog = createSprite(250,250,10,10);
    dog.addImage(dog);

    database = firebase.database();
    var foodStock = database.ref('Food');
    foodStock.on("value", readStock);
  
}

function draw() {  
background (46, 139, 87);
if(KeyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)
}
  drawSprites();
  //add styles here
  FileList("blue");
  textSize(20);
  stroke(5);
  text("Press Up Arrow to feed Drago milk!", 100, 100);
  text("Food remaining: " + foodS, 100, 100);
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref('/').update({Food: x});
}



