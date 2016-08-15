// var bgColor;

// var frogger;
// var posX;
// var posY;

// var lilypad;
// var showLilyPad = false;

// var beep;

// var storyBox;

// var dog
// var baby
// var car
// var people
// var circles

// function preload(){

//   beep = loadSound('beep_01.mp3');
//   frogger = loadImage('frogger.gif');
//   lilypad = loadImage('lilypad.png');
//   dog = loadImage('dog.png');
//   baby = loadImage('baby.png');
//   car = loadImage('car.png');
//   people = loadImage('people.png');

// }



// function setup() {
// 	createCanvas(800, 400);

//   bgColor = color(50);

// 	background(bgColor);
  
//   posX = 30;
//   posY = height/2;

//   imageMode(CENTER);
//   image(frogger, posX, posY);

//   storyBox = select('#story-text');
// }

// function draw() {
//   background(bgColor);

//   //Move position
//   if (keyIsDown(LEFT_ARROW)){
//     posX-=5;
//   }
//   if (keyIsDown(RIGHT_ARROW)){
//     posX+=5;
//   }
//   if (keyIsDown(UP_ARROW)){
//     posY-=5;
//   }
//   if (keyIsDown(DOWN_ARROW)){
//     posY+=5;
//   }

//   //Update background
//   if(posX > (width * 0.65)){
//     bgColor = color(200,100,150);
//   }
//   else if (posX > (width * 0.4)){
//     bgColor = color(100,150,200);
//     storyBox.html("Almost there...");
//   }
//   else if (posX > (width * 0.2)){
//     showLilyPad = true;
//     bgColor = color(100, 200, 150);
//     storyBox.html("There it is!");
//   }
//   else{
//     bgColor = color(50);
//      showLilyPad = false;
//   }

//   if (showLilyPad){
//     image(lilypad, width - 100, height/2, width/10,height/10);
//   }

//   //Draw image
//   image(frogger, posX, posY);
// }


// function mousePressed(){
//   //Reset image position
//   posX = 30;
//   posY = height/2;
// }

// function keyPressed(e){
//   if(e.keyCode === 39){
//     beep.play();
//   }
// }

// // creat three canvas
// var p5_0 = new p5(function(sketch) {
 
//   // var x = 100, y = 100;
 
//   sketch.setup = function() {
//     var cnv = sketch.createCanvas(600, 1000);
//     cnv.parent('box2');
//   };
 
//   sketch.draw = function() {
//     sketch.background(255, 0, 0);
//   };
// });
 
// var p5_1 = new p5(function(sketch) {
 
//   // var x = 100, y = 100;
 
//   sketch.setup = function() {
//     var cnv = sketch.createCanvas(600, 1000);
//     cnv.parent('box3');
//   };
 
//   sketch.draw = function() {
//     sketch.background(255, 0, 0);
//     sketch.fill(255);
//     // sketch.rect(x, y, 250, 250);
//   };
// });
 
// var p5_2 = new p5(function(sketch) {
 
//   // var x = 100, y = 100;
 
//   sketch.setup = function() {
//     var cnv = sketch.createCanvas(600, 1000);
//     cnv.parent('box4');
//   };
 
//   sketch.draw = function() {
//     sketch.rect(x, y, 250, 250);
//   };
// });


