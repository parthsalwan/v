//Create variables here
var dog,dogSprite

var dogHappy, database, foodS, foodStock

var lastFed,fedTime,foodObj

var changeGameState , readGameState
var bedroom,garden,washroom

function preload()

//washroom=loadImage("Images/Wash Room.png")
//garden=loadImage("Images/Garden.png")
{
  //load images here
  dog=loadImage("images/dogImg.png")
dogHappy=loadImage("images/dogImg1.png")
bedroom=loadImage("Images/BedRoom.png")

}

function setup() {
	createCanvas(800, 700);
  database=firebase.database()
dogSprite = createSprite(400,350,20, 20);

foodObj=new Food()

dogSprite.addImage(dog)


dogSprite.scale=0.1;

feed=createButton("Feed the Dog");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood=createButton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods);

foodStock=database.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  
background(100,20,50);

fill(255, 255, 254);
textSize(15);
if(lastFed>=12){
  text("Last Feed : "+lastFed%12 + "PM",350,30);
}else if(lastFed==0){
  text("Last Feed : 12 AM",350, 30);
}else{
  text("Last Feed :"+lastFed+ "AM",350,30);

}


text("Press up ARROW to FEED the Dog", 200, 100);
text("Food Left:"+foodS,100,100)
textSize()

fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
lastFed=data.val();

});
foodObj.display()

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
  foodObj.getFoodStock(foodS);
}

function writeStock(x){

if(x<=0){
  x=0
}else{
  x=x-1;
}

  database.ref('/').update({

Food:x
})
}

function feedDog(){
  dogSprite.addImage(dogHappy);
 //foodObj.updateFoodStock(foodObj.getFoodStock()-1);
 foodS=foodS-1;
  database.ref('/').update({
Food:foodS,
FeedTime:hour()
  })
  }

  function addFoods(){
    foodS++;
    database.ref('/').update({
      Food:foodS
    })
  }




