function setup() {
  createCanvas(800, 600);
}
var k = 1;

function draw() {
  background(0);
  frameRate(10);

  if (k < 100) {
    pattern((k += 1), 1, 150, 200);
    pattern((k += 1), 0.7, 400, 200);
    pattern((k += 1), 0.15, 650, 200);
    pattern((k += 1), 0.25, 150, 500);
    pattern((k += 1), 0.05, 400, 500);
    pattern((k += 1), 0.4, 650, 500);
  } else if (k >= 100) {
    k = 1;
  }
}

function pattern(number, ang, X, Y) {
  for (let i = 1; i < number; i++) {
    let sequence = [];
    let n = i;
    do {
      sequence.push(n);
      n = collatz(n);
    } while (n != 1);
    sequence.push(1);
    // sequence.reverse();

    let len = 15;
    // let angle = 0.2;
    resetMatrix();
    translate(X, Y);
    for (let j = 0; j < sequence.length; j++) {
      let value = sequence[j];
      if (value % 2 == 0) {
        rotate(ang * 2);
      } else {
        rotate(-2 * ang);
      }
      strokeWeight(1);
      stroke(255, 100, 50, 30);
      line(0, 0, 0, -len);
      // noFill();
      // arc(0, 0, len, -len, 0, PI);
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
    return (n * 3 + 1) / 2;
  }
}
