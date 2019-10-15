function setup() {
    createCanvas(800, 600);
    background(0);

    for (let i = 1; i < 1000; i++) { 
      let sequence = [];
      let n = i;
      do {
        sequence.push(n);
        n = collatz(n);
      } while (n != 1);
      sequence.push(1);
      sequence.reverse(); 
  
      let len = 20;
      let angle = 0.15;
      resetMatrix();
      translate(width/4, height/2);
      for (let j = 0; j < sequence.length; j++) {
        let value = sequence[j];
        if (value % 2 == 0) {
          rotate(angle * 2);
        } else {
          rotate(-2*angle);
        }
        strokeWeight(2);
        stroke(255, 100, 50, 30);
        line(0, 0, 0, -len);
        translate(0, -len);
      }
  
      // Visualize the list
    }
  }
  
  //this s my code
  
  
  function collatz(n) {
    // even
    if (n % 2 == 0) {
      return n / 2;
      // odd
    } else {
      return (n * 3 + 1)/2;
    }
  }
  
