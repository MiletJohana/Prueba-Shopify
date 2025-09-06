console.log("Gradiweb is online!!!");

// Sticky header scroll effect
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("header--scrolled");
      } else {
        header.classList.remove("header--scrolled");
      }
    });
  }
});
