//Create variables here

var foodS,foodStock;
var dog, happyDog;




function preload()
{

dogimg = loadImage("images/dogImg.png")
dogimg1 = loadImage("images/dogImg1.png")

}


function setup() {

  database = firebase.database()
	createCanvas(500, 500);

  dog = createSprite(250,300,150,150)
  dog.addImage(dogimg)
  dog.scale = 0.15

  foodStock = database.ref("Food")
foodStock.on("value",readStock)


}


function draw() {  

background(46, 139, 87)

 
  //add styles here

if(keyDown(UP_ARROW)){

writeStock(foodS)
dog.addImage(dogimg1)


} 
drawSprites();
fill(255,255,254)
stroke("black")
text("foodRemaining:"+foodS,170,200)
textSize(13)
text("Note: Press Up Arrow to feed Drago Milk",130,10)

}



function readStock(data){

foodS = data.val()


}

function writeStock(x){

if(x<=0){

x = 0;


}else{

  x = x-1
}

database.ref("/").update({

  Food:x
})

}


