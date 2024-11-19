import "./projects.css";
import screenshot from "./images/dylano-homepage-sc.png";
import screenshotTwo from "./images/dylano-restaurantpage-sc.png";

export default function Projects() {
  return `<div class="body-container">

    <div class="projects-container">
      <div class="project-one-card card">
        <div class="lang-boxes">
          <div class="html-box">HTML</div>
          <div class="css-box">CSS</div>
          <div class="js-box">JavaScript</div>
        </div>
        <div class="content-box">
          <img class="screenshot" src="${screenshot}" alt="">
        </div>
        <div class="project-title">
          <h2>Homepage</h2>
          <p class="name-text">Dylan St. John</p>
        </div>
      </div>
      <div class="project-two-card card">
        <div class="lang-boxes">
          <div class="html-box">HTML</div>
          <div class="css-box">CSS</div>
          <div class="js-box">JavaScript</div>
        </div>
        <div class="content-box">
          
        </div>
        <div class="project-title">
          <h3>Project Title</h3>
          <p class="name-text">Firstname Lastname</p>
        </div>
      </div>
      <div class="project-three-card card">
        <div class="lang-boxes">
          <div class="html-box">HTML</div>
          <div class="css-box">CSS</div>
          <div class="js-box">JavaScript</div>
        </div>
        <div class="content-box">
          
        </div>
        <div class="project-title">
          <h3>Project Title</h3>
          <p class="name-text">Firstname Lastname</p>
        </div>
      </div>
      <div class="project-four-card card">
        <div class="lang-boxes">
          <div class="html-box">HTML</div>
          <div class="css-box">CSS</div>
          <div class="js-box">JavaScript</div>
        </div>
        <div class="content-box">
          
        </div>
        <div class="project-title">
          <h3>Project Title</h3>
          <p class="name-text">Firstname Lastname</p>
        </div>
      </div>
      <div class="project-five-card card">
        <div class="lang-boxes">
          <div class="html-box">HTML</div>
          <div class="css-box">CSS</div>
          <div class="js-box">JavaScript</div>
        </div>
        <div class="content-box">
          <img class="screenshot" src=${screenshotTwo} alt="">
        </div>
        <div class="project-title">
          <h3>Restaurant Page</h3>
          <p class="name-text">Dylan St. John</p>
        </div>
      </div>
      <div class="project-six-card card">
        <div class="lang-boxes">
          <div class="html-box">HTML</div>
          <div class="css-box">CSS</div>
          <div class="js-box">JavaScript</div>
        </div>
        <div class="content-box">
          
        </div>
        <div class="project-title">
          <h3>Project Title</h3>
          <p class="name-text">Firstname Lastname</p>
        </div>
      </div>
    </div>

    </div>`;
}
