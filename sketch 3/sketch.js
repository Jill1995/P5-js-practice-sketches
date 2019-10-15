let theta;

function setup() {
  createCanvas(910, 700);
}

function draw() {
  
  for(let x=0; x<width; x+=10){
      for(let y=0; y<height; y+=10){
          let r = map(x,0,width,0,255);
          let g = map(y,0,height,0,255);
          let b = map(mouseX,0,width,0,255);
          fill (r,g,b);
          noStroke();
          rect(x,y,10,10);
      }
  }

  frameRate(30);
  stroke(255);
  // Let's pick an angle 0 to 90 degrees based on the mouse position
  let a = ( mouseX / width) * 90;
  // Convert it to radians
  theta = radians(a);
//   // Start the tree from the bottom of the screen
  translate(width/2, height);

  // Start the recursive branching!
  branch(250);

 

}
function branch(h) {
    // Each branch will be 2/3rds the size of the previous one
    h *= 0.75;
  
    // All recursive functions must have an exit condition!!!!
    // Here, ours is when the length of the branch is 2 pixels or less
    if (h > 7) {
      push();    // Save the current state of transformation (i.e. where are we now)
      rotate(theta);
      stroke(0);   // Rotate by theta
      line(0, 0, 0, -h/1.2);  // Draw the branch
      translate(0, -h/1.2); // Move to the end of the branch
      branch(h);       // Ok, now call myself to draw two new branches!!
      pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state
  
      // Repeat the same thing, only branch off to the "left" this time!
      push();
      rotate(-theta);
      stroke(0);
      line(0, 0, 0, -h/1.2);
      translate(0, -h/1.2);
      branch(h);
      pop();
    }
  }