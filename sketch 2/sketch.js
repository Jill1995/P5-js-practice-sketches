let incrementer = 2;
let ballSize = 20;
let arraySize = 100;
let xPos = []; //x position of ball
let yPos = []; //y position of ball
let xDir = []; //bouncedirection x
let yDir = []; //bouncediraction y
let c = [];


function setup() {
    createCanvas(800, 600);
    
    for (i = 0; i < arraySize; i++){
        xPos[i] = random(width);
        yPos[i] = random(height);
        yDir[i] = random(1,2);
        xDir[i] = random(1,2);
        c[i] =  color(random(255),random(255), random(255));
       
      
    }
}

function draw(){
    background(135, 232, 245);
   
    for ( i = 0; i<arraySize; i++){
        if(yPos[i]> height - ballSize/2 || yPos[i]< ballSize/2){
            yDir[i] = yDir[i] * -1;
        }
        if(xPos[i]> width - ballSize/2 || xPos[i]< ballSize/2){
            xDir[i] = xDir[i] * -1;
        }
        
        fill(c[i]);
        noStroke();
        ellipse(xPos[i],yPos[i],20,20);
        xPos[i] += incrementer * xDir[i];
        yPos[i] += incrementer * yDir[i];


    }
}
  
