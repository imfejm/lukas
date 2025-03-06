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

//překlad do aj
document.addEventListener("DOMContentLoaded", function () {
  const englishButtons = document.querySelectorAll(".english, .english2");

  if (englishButtons.length === 0) {
    console.error("Tlačítko pro přepnutí jazyka nebylo nalezeno.");
    return;
  }

  const translations = {
    "contact": "Contact",
    "iam": "I am Lukáš Praus.",
    "info": "I specialize in ceramics, especially bonsai bowls and tempai: small figurines of animals, buildings or figures that complement bonsai compositions and underline their atmosphere. I make everything by hand, without using molds. Each piece is therefore original, made from high-quality clay and fired at high temperature. With an emphasis on detail, durability and unique character. To a lesser extent, I also still devote myself to bonsai and yamadori, trees found in nature that have the potential to become bonsai.",
    "info2": "If you are looking for a unique accessory, check out my e-shop or contact me. I will be happy to help you find the right piece.",
    "ceramic": "Ceramics",
    "intro": "Bonsai have been part of my journey since 2016. Working with them also led me to ceramics, which became a natural extension of my craft. I created my first bowl in 2019 and the result exceeded my expectations. Since then, I have fully immersed myself in working with clay and today I produce not only high-quality bonsai bowls, but also other ceramic products. Modeling often highlights the beauty of handwork and brings a satisfied smile to my face from a job well done. Which is further enhanced by the positive feedback from you!",
    "follow": "Follow me on Instagram or Facebook. You will find news from exhibitions, new products and you can also write to me. Or of course you can use the contact form here.",
    "name": "Name:",
    "email": "E-mail:",
    "message": "Message:",
    "send": "Send"
  };

  const originalTexts = {};
  document.querySelectorAll("[data-key]").forEach(element => {
    originalTexts[element.getAttribute("data-key")] = element.textContent;
  });

  let isEnglish = false;

  function toggleLanguage() {
    isEnglish = !isEnglish;

    document.querySelectorAll("[data-key]").forEach(element => {
      const key = element.getAttribute("data-key");
      element.textContent = isEnglish ? translations[key] || element.textContent : originalTexts[key];
    });

    englishButtons.forEach(button => button.classList.toggle("active", isEnglish));
  }

  englishButtons.forEach(button => button.addEventListener("click", toggleLanguage));
});
function toggleLanguage() {
  isEnglish = !isEnglish;

  document.querySelectorAll("[data-key]").forEach(element => {
    const key = element.getAttribute("data-key");
    element.textContent = isEnglish ? translations[key] || element.textContent : originalTexts[key];
  });

  englishButtons.forEach(button => button.classList.toggle("active", isEnglish));
}