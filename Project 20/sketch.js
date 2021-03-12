var tom, cat_image1, cat_image2, cat_image3, cat_image4;
var jerry, mouse_image1, mouse_image2, mouse_image3, mouse_image4;
var background_image;

function preload() {
    //load the images here
    cat_image1 = loadAnimation("cat1.png");
    cat_image2 = loadAnimation("cat2.png");
    cat_image3 = loadAnimation("cat3.png");
    cat_image4 = loadAnimation("cat4.png");

    mouse_image1 = loadAnimation("mouse1.png");
    mouse_image2 = loadAnimation("mouse2.png");
    mouse_image3 = loadAnimation("mouse3.png");
    mouse_image4 = loadAnimation("mouse4.png");
    
    background_image = loadAnimation("garden1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
jerry = createSprite(20, 50);
tom = createSprite(40, 80);

jerry.loadAnimation(mouse_image1);
tom.loadAnimation(cat_image1);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
