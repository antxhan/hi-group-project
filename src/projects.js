import "./projects.css";
import screenshot from "./images/dylano-homepage-sc.png";
import screenshotTwo from "./images/dylano-restaurantpage-sc.png";
import antonScreenshot from "./images/anton-calculator-sc.png";
import antonScreenshotTwo from "./images/anton-tictactoe-sc.png"


export default function Projects() {
  const projects = [
    {
      title: "Homepage",
      author: "Dylan St. John",
      url: "https://dstjp.github.io/odin-homepage/",
      image: screenshot
    },
  {
      title: "Restaurant Page",
      author: "Dylan St. John",
      url: "https://dstjp.github.io/restaurant-page/",
      image: screenshotTwo
    },
    {
      title: "iPhone Calculator",
      author: "Anton Hansson",
      url: "https://antxhan.github.io/odin-calculator/",
      image: antonScreenshot
    },
    {
      title: "Tic-Tac-Toe",
      author: "Anton Hansson",
      url: "https://antxhan.github.io/odin-tic-tac-toe/",
      image: antonScreenshotTwo
    },

  ]
  
  let projectsString = projects.map((project, index) => { 
    const template = `
          <a href="${project.url}" class="project-one-card card">
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
        </a>`
    return template;
  });
  
  const projectsHTML = projectsString.join("")
  
  const outputHTML = 
      `<div class="body-container">
        <div class="projects-container">
         ${projectsHTML}
        </div>
      </div>`;
  
  console.log(outputHTML)
  return outputHTML;
}
