/* Navbar #2 - Sticky Functioning */
const navbar = document.querySelector(".airpods-navbar");
const originalY = navbar.offsetTop; // 44
const imageContainer = document.querySelector(".image")

console.log(document.querySelector(".section-01").offsetTop);

window.addEventListener("scroll", () => {
  if (window.scrollY >= originalY) {
    navbar.classList.add("sticky");
    imageContainer.classList.add("wave");
  } else {
    navbar.classList.remove("sticky");
    imageContainer.classList.remove("wave");
  }
});

/* ScrollMagic Controller */
let controller = new ScrollMagic.Controller();
