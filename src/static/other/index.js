// nav
const nav = document.querySelector("nav");
let scrollPos = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY > scrollPos) nav.classList.add("nav--shadow");
  else nav.classList.remove("nav--shadow");
  scrollPos = window.scrollY;
});
const mobileToggle = document.querySelector(".nav__mobile-toggle");
const navList = document.querySelector(".nav__list");
mobileToggle.addEventListener("click", () => {
  navList.classList.toggle("nav__list--mobile");
});
