import "./global.css";
import Test from "./test";

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
        MAIN.innerHTML = Test();
      }
      if (button.innerText === "contact") {
        MAIN.innerHTML = `<h2>Contact</h2>`;
      }
    }
  });
});

class View {
  constructor() {
    this.currentPage = DEFAULT_PAGE;
  }
  render() {
    return this.currentPage;
  }
}

class Controller {
  constructor(view) {
    this.view = view;
    this.view.render();
  }
}

const view = new View();
const controller = new Controller(view);
