const shows = document.querySelectorAll(".shows");
const gridPos = document.querySelector(".grid_pos");
const hides = document.querySelectorAll(".hide");
const navBox = document.querySelector(".nav-box");
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");
const ul = document.querySelector(".nav-header ul");
const h1 = document.querySelector("h1");

shows.forEach((show) => {
   show.addEventListener("click", () => {
      hides.forEach((hide) => {
         hide.classList.toggle("show");
      });

      if (hides[0].classList.contains("show")) {
         shows.forEach((show) => (show.textContent = "See less"));
      } else {
         shows.forEach((show) => (show.textContent = "See all"));
      }
   });
});

// Menu mobile
iconHamburger.addEventListener("click", () => {
   navBox.classList.add("active");
   iconHamburger.classList.add("disable");
   iconClose.classList.add("active");
   ul.classList.add("active");
   h1.classList.add("disable");
});

iconClose.addEventListener("click", () => {
   navBox.classList.remove("active");
   iconHamburger.classList.remove("disable");
   iconClose.classList.remove("active");
   ul.classList.remove("active");
   h1.classList.remove("disable");
});
