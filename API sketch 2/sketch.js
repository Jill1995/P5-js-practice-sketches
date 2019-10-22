let json;
let x;
let y;

function preload() {
  let url =
    "http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=bafa02637a549e3bb23f944c68266753";
  json = loadJSON(url);
}

function setup() {
  createCanvas(900, 500);

  x = json.main.temp;
  y = json.main.temp_max;
  z = json.main.temp_min;
  background(x, y, z);
}

function draw() {
  fill(255);
  ellipse(100, 100, x * 2, x * 2);
  text("the average temperature is " + x + " deg C", 100, 150);
  ellipse(100, 200, y * 2, y * 2);
  text("the maximum temperature will be " + y + " deg C", 100, 250);
  ellipse(100, 300, z * 2, z * 2);
  text("the minimum temperature will be " + z + " deg C", 100, 350);
}

// function draw() {
//   fill(r, g, b);
//   ellipse(450, 200, 40, 40);
// }

// function drawWeather(values) {
//   console.log(values);
//   let myDay = String(values.weather[0].description);
//   let r = Number(values.main.temp);
//   let g = Number(values.main.temp_min);
//   let b = Number(values.main.temp_max);
//   let alpha = Number(values.main.humidity);

//   fill(r, g, b);
//   rect(12, 45, 60, 70);

//   console.log(r, g, b, alpha);
//   console.log(myDay);
//   fill(0);

//   textSize(70);
//   text("today will be " + myDay, 30, 300);
// }
