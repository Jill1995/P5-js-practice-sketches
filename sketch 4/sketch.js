let c;
let d;

function setup(){
  createCanvas(1200,600);
  background(180,90,100);
 
}

function draw(){
  
  
  
  for(let i = 50; i< width - 50; i+=30){
    for(let j = 50; j <height/2 - 50; j+=30){
      // fill (c);
      triangle(i,j,i,j+30,i+30,j+15);
      fill (180);
     triangle(i,j,i,j+30,i-30,j+15);
    }
}
for(let i = 25; i< width - 50; i+=30){
  for(let j = height/2; j <height - 50; j+=30){
    c = color(random(255),random(50),random(255));
    fill (c);
    triangle(i,j,i+30,j,i+15,j+30);
    d = color(random(255),random(50),random(255));
    fill (d);
   triangle(i,j,i+30,j,i+15,j-30);
  }
}

}

  


