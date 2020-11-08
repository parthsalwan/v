class Food{
constructor(){
 
    this.food=loadImage("images/Milk.png")
    this.foodStock=0

    this.bedroom=loadImage("Images/BedRoom.png")
    this.washroom=loadImage("Images/WashRoom.png")
    this.garden=loadImage("Images/Garden.png")

}
getFoodStock(food){
    this.foodStock=food;
}


display(){
    
    var x=80, y=100;
   
    imageMode(CENTER);
    image(this.food,720, 220, 70, 70);
    if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
      if(i%10==0){
          x=80;
          y=y+50;
      }
      image(this.food,x,y,50,50);
      x=x+30;
        }
    }
   
}

}

