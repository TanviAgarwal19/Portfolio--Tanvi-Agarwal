var radius = 40;
var x = 110
var speed =2;
var direction=1;
let slider;


function setup(){
  createCanvas(500,150);
  ellipseMode(RADIUS);
  
   slider = createSlider(0, 255, 100);
  slider.position(10, 120);
  slider.style('700px', '80px');

}



function draw(){
  let val = slider.value();
  background(val)
 
x += speed * direction;
if ((x > width-radius) || (x < radius)) {
direction = -direction; // Flip direction
}
if (direction == 1) {
arc(x, 60, radius , val, 0.52, 5.76); // Face right
} else {
arc(x, 60, val, radius, 3.67, 8.9); // Face left
}
  

}