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
const mobileImages = ["img/snekM.jpg", "img/bonsaiM.jpg", "img/ptakM.jpg"];
const desktopImages = ["img/snekD.jpg", "img/bonsaiD.jpg", "img/ptakD.jpg"];

let images = window.innerWidth >= 800 ? desktopImages : mobileImages;

let currentIndex = 0;
const karusel = document.querySelector(".karusel");
const dotsContainer = document.querySelector(".dots");

// Funkce pro změnu obrázků podle šířky obrazovky
function updateImages() {
  images = window.innerWidth >= 800 ? desktopImages : mobileImages;
  changeImage(0); // Reset na první obrázek
}

// Event listener pro změnu při změně velikosti okna
window.addEventListener("resize", updateImages);

// Vytvoření teček
dotsContainer.innerHTML = ""; // Vyčistí předchozí tečky
images.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => changeImage(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function changeImage(index) {
  currentIndex = index;
  karusel.style.backgroundImage = `url(${images[currentIndex]})`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function autoChange() {
  currentIndex = (currentIndex + 1) % images.length;
  changeImage(currentIndex);
}

setInterval(autoChange, 5000);
changeImage(currentIndex);
/*const images = ["img/snek.jpg", "img/bonsai2.jpg", "img/ptak3.jpg"];

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
changeImage(currentIndex); // Nastavení prvního obrázku*/

//hover nadpisu na img odkazu mobilni verze
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-wrapper");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelector("h2").classList.add("show");
        } else {
          entry.target.querySelector("h2").classList.remove("show");
        }
      });
    },
    { threshold: 0.5 }
  ); // Spustí se, když je 50 % prvku viditelné

  images.forEach((image) => observer.observe(image));
});
