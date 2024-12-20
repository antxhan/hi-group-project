import "./global.css";
import About from "./pages/about/about.js";
import Projects from "./pages/projects/projects.js";
import Contact from "./pages/contact/contact.js";

const MAIN = document.querySelector("main");

document.querySelectorAll("nav ul li button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".navlink").forEach((link) => {
      link.classList.remove("active");
    });
    if (!button.classList.contains("active")) {
      button.parentNode.classList.add("active");
      if (button.value === "projects") {
        MAIN.innerHTML = "";
        MAIN.innerHTML = Projects();
      }
      if (button.value === "about") {
        MAIN.innerHTML = "";
        About();
      }
      if (button.value === "contact") {
        MAIN.innerHTML = "";
        MAIN.innerHTML = Contact();
      }
    }
  });
});

MAIN.innerHTML = Projects();
