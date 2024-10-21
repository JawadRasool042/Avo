const images = ["images/bg_1.jpg", "images/bg_2.jpg.webp"];
let currentImageIndex = 0;

function changeBackground() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById(
    "backgroundSection"
  ).style.backgroundImage = `url(${images[currentImageIndex]})`;
}

setInterval(changeBackground, 3000);

let counterElement = document.getElementById("counter");
let count = 0;
let target = 400;
let duration = 2000;
let interval = 5;

let increment = target / (duration / interval);

function updateCounter() {
  count += increment;

  if (count >= target) {
    counterElement.textContent = target;
    clearInterval(counterInterval);
  } else {
    counterElement.textContent = Math.floor(count);
  }
}

let counterInterval = setInterval(updateCounter, interval);
