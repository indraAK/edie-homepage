const menuToggler = document.querySelector(".nav-toggler");
const header = document.querySelector("header");
const mobileNav = document.querySelector(".mobile-nav");
const headerHeight = header.clientHeight;
const mediaQueryList = matchMedia("(min-width: 768px)");

menuToggler.addEventListener("click", () => {
  menuToggler.classList.toggle("active");
  mobileNav.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

window.addEventListener("resize", () => {
  const { matches } = mediaQueryList;
  if (matches) {
    menuToggler.classList.remove("active");
    mobileNav.classList.remove("open");
  }
});
