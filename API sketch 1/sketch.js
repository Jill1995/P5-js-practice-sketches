function setup() {
  createCanvas(900, 400);
  background(10, 230, 120);
  let url =
    "http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&APPID=bafa02637a549e3bb23f944c68266753";
  loadJSON(url, drawWeather);
}

// function draw() {
//   fill(r, g, b);
//   ellipse(450, 200, 40, 40);
// }

function drawWeather(values) {
  console.log(values);
  let myDay = String(values.weather[0].description);
  let r = Number(values.main.temp);
  let g = Number(values.main.temp_min);
  let b = Number(values.main.temp_max);
  let alpha = Number(values.main.humidity);

  fill(r, g, b);
  rect(12, 45, 60, 70);

  console.log(r, g, b, alpha);
  console.log(myDay);
  fill(0);

  textSize(70);
  text("today will be " + myDay, 30, 300);
}
