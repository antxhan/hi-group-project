import "./global.css";
<<<<<<< HEAD
import About from "./about.js";
import "./about.css";
=======
import Projects from "./projects.js";

import "./contact.css";
import Contact from "./contact.js"
>>>>>>> main

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
<<<<<<< HEAD
        //MAIN.innerHTML = About();
        About();
=======
        MAIN.innerHTML = "<h2>About</h2>";
>>>>>>> main
      }
      if (button.innerText === "contact") {
        MAIN.innerHTML = Contact();
      }
    }
  });
});

MAIN.innerHTML = Projects();