import "./global.css";

const MAIN = document.querySelector("main");
const NAVLINKS = document.querySelectorAll(".navlink");
const DEFAULT_PAGE = `<h2>Projects</h2>`;

document.querySelectorAll("nav ul li button").forEach((button) => {
  button.addEventListener("click", () => {
    NAVLINKS.forEach((link) => {
      link.classList.remove("active");
    });
    if (!button.classList.contains("active")) {
      button.parentNode.classList.add("active");
      if (button.innerText === "projects") {
        MAIN.innerHTML = `<h2>Projects</h2>`;
      }
      if (button.innerText === "about") {
        MAIN.innerHTML = `<h2>About</h2>`;
      }
      if (button.innerText === "contact") {
        MAIN.innerHTML = `<h2>Contact</h2>`;
      }
    }
  });
});

MAIN.innerHTML = DEFAULT_PAGE;
