const tlacitko = document.querySelector("#ham");

tlacitko.addEventListener("click", () => {
  const rozbal = document.querySelector("#menu");
  rozbal.classList.toggle("hidden");
  const cara2 = document.querySelector("#cara2");
  cara2.classList.toggle("caraB");

  const cara1 = document.querySelector("#cara1");
  cara1.classList.toggle("caraA");
  const cara3 = document.querySelector("#cara3");
  cara3.classList.toggle("caraC");
});

const images = ["img/snek.jpg", "img/bonsai2.jpg", "img/ptak3.jpg"];

let currentIndex = 0;
const karusel = document.querySelector(".karusel");
const dotsContainer = document.querySelector(".dots");

// Vytvoření teček
images.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active"); // První tečka aktivní
  dot.addEventListener("click", () => changeImage(index)); // Kliknutí na tečku
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function changeImage(index) {
  currentIndex = index;
  karusel.style.backgroundImage = `url(${images[currentIndex]})`;

  // Aktualizace aktivní tečky
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function autoChange() {
  currentIndex = (currentIndex + 1) % images.length;
  changeImage(currentIndex);
}

setInterval(autoChange, 5000); // Automatická změna každých 5 sekund
changeImage(currentIndex); // Nastavení prvního obrázku
