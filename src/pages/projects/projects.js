import "./projects.css";

import dylanImg1 from "./images/dylano-homepage-sc.png";
import dylanImg2 from "./images/dylano-restaurantpage-sc.png";
import antonImg1 from "./images/anton-calculator-sc.png";
import antonImg2 from "./images/anton-tictactoe-sc.png";
import anitaImg1 from "./images/anita-tictactoe-sc.png";
import anitaImg2 from "./images/anita-library-sc.png";
import chiruImg1 from "./images/chiru-calculator-sc.png";
import chiruImg2 from "./images/chiru-colorchanger-sc.png";

const projects = [
  {
    title: "iPhone Calculator",
    author: "Anton Hansson",
    url: "https://antxhan.github.io/odin-calculator/",
    image: antonImg1,
  },
  {
    title: "Homepage",
    author: "Dylan St. John",
    url: "https://dstjp.github.io/odin-homepage/",
    image: dylanImg1,
  },
  {
    title: "Etch a Sketch",
    author: "Chiranjeevi V",
    url: "https://chiru1985.github.io/Etch-a-Sketch/",
    image: chiruImg2,
  },
  {
    title: "Tic-Tac-Toe",
    author: "Anton Hansson",
    url: "https://antxhan.github.io/odin-tic-tac-toe/",
    image: antonImg2,
  },
  {
      title: "Tic-Tac-Toe",
      author: "Anita Kumari",
      url: "https://anita-kumari1987.github.io/Tic-Tac-Toe/",
      image: anitaImg1,
  },
  {
      title: "Calculator",
      author: "Chiranjeevi V",
      url: "https://chiru1985.github.io/Calculator/",
      image: chiruImg1,
  },
  {
    title: "Restaurant Page",
    author: "Dylan St. John",
    url: "https://dstjp.github.io/odin-restaurantpage/",
    image: dylanImg2,
  },
  {
    title: "Library",
    author: "Anita Kumari",
    url: "https://anita-kumari1987.github.io/My-Library/",
    image: anitaImg2,
},
];

export default function Projects() {
  const projectsString = projects.map((project) => {
    return `
      <a href="${project.url}" target="_blank" class="project-one-card card">
        <div class="lang-boxes">
          <div class="html-box">HTML</div>
          <div class="css-box">CSS</div>
          <div class="js-box">JS</div>
        </div>
        <div class="content-box">
          <img class="screenshot" src="${project.image}" alt="">
        </div>
        <div class="project-title">
          <h3>${project.title}</h3>
          <p class="name-text">${project.author}</p>
        </div>
      </a>`;
  });

  return `
    <div class="body-container">
      <div class="projects-container">
        ${projectsString.join("")}
      </div>
    </div>`;
}
