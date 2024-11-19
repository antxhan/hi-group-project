import "./global.css";
import Projects from "./projects.js";

const MAIN = document.querySelector("main");

document.querySelectorAll("nav ul li button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".navlink").forEach((link) => {
      link.classList.remove("active");
    });
    if (!button.classList.contains("active")) {
      button.parentNode.classList.add("active");
      if (button.innerText === "projects") {
        MAIN.innerHTML = Projects();
      }
      if (button.innerText === "about") {
        MAIN.innerHTML = "<h2>About</h2>";
      }
      if (button.innerText === "contact") {
        MAIN.innerHTML = `<h2>Contact</h2>`;
      }
    }
  });
});

MAIN.innerHTML = Projects();
