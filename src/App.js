import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDBcieDb9h9S5kq8LcC2AwH6HovSSeXmcs",
  authDomain: "my-portfolio-ee94b.firebaseapp.com",
  projectId: "my-portfolio-ee94b",
  storageBucket: "my-portfolio-ee94b.appspot.com",
  messagingSenderId: "1936602066",
  appId: "1:1936602066:web:bbe347c033cf02e088ce0b",
  measurementId: "G-N4CRMNC15R",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const skills = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT",
  "REDUX",
  "NODEJS",
  "EXPRESS",
  "POSTGRESQL",
  "BOOTSTRAP",
  "GITHUB",
  "ADWORDS",
  "ANALYTICS",
  "PHOTOSHOP",
  "FINALCUT",
];

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};

function App() {
  const [display, setDisplay] = useState(false);

  return (
    <main>
      <section id="home">
        <h1>
          Hi, I'm <span>Aurele</span>
        </h1>
        <h2 className="hidden visible">
          I am a <span>manager</span>, problem <span>solver</span> and
          full-stack <span>developer</span>
        </h2>
        <button>
          <a href="#sections">
            <p>Let's dive in!</p>
          </a>
        </button>
      </section>

      <div id="sections">
        <nav id="navbar">
          <div className="logo">
            <a href="#home">
              <img
                src={require("./resources/img/logo2.png")}
                alt="Website Logo"
              />
            </a>
          </div>
          <ul>
            <li>
              <p>
                <a href="#about">ABOUT</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#skills">SKILLS</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#projects">PROJECTS</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#contact">CONTACT</a>
              </p>
            </li>
          </ul>
        </nav>

        <section id="about">
          <h3>About me...</h3>
          <div className="content">
            <div className="text-container">
              <p>
                Hello! My name is Aurèle and I love building things, managing
                projects and learning new skills. I am a self-taught full-stack
                web developer looking for his first work experience in this
                area. Before learning to code, I have had more than 3 years
                experience working in small tech businesses. I had the
                opportunity to manage a company and overseeing the release of 1
                website and 2 apps (e-commerce and booking).
              </p>
              {!display && (
                <button
                  className="link button"
                  onClick={() => setDisplay(!display)}
                >
                  Show More
                </button>
              )}
              {display && (
                <div>
                  <p>
                    I had my first taste of the tech industry when I spent six
                    months as a project manager intern at Ubisoft Shanghai
                    Studio. There I discovered the buzzing world of a game
                    development company and the challenges of project
                    management.
                  </p>
                  <p>
                    Then, I had the opportunity to work as a business developer
                    at Camboticket, where I was mainly responsible for finding
                    ways to increase sales volume. This included developing
                    partnerships, improving user experience, and manage SEM/SEO.
                    In this role, I worked closely with developers to improve
                    the website and implement new features. I also had the lead
                    on the new app, working closely with developers to ensure
                    that it was released on time with all needed
                    functionalities.
                  </p>
                  <p>
                    Most recently, I took on the role of general manager at
                    Delishop, where I was responsible for recruiting developers
                    and managing the release of the new website and two apps
                    under tight time and budget constraints. All of these
                    projects were successful and are still live today.
                  </p>
                  <p>
                    Throughout previous experiences, I have found great pleasure
                    in working in tech environments filled with challenges and
                    innovation. I have always been interested in learning
                    programming in more depth, and recently took the opportunity
                    to do so through Codecademy's Fullstack course, as well as
                    various online resources and books. I have a particular
                    interest in Javascript and React, and enjoy the
                    problem-solving aspect of programming in addition to the
                    opportunity to build something new.
                  </p>
                  <button
                    className="link button"
                    onClick={() => setDisplay(!display)}
                  >
                    Show Less
                  </button>
                </div>
              )}
              <p>
                Today, I am looking for an opportunity to use my previous
                experience along with the new skills I learned, working as a
                developer in dynamic company. I hope to keep learning, building
                and managing several projects with great teams a challenging
                environment.
              </p>
            </div>
            <img
              src={require("./resources/img/Profil2Small.jpg")}
              alt="Profil"
              onMouseOver={(e) =>
                (e.currentTarget.src = require("./resources/img/ProfilSmall.jpg"))
              }
              onMouseOut={(e) =>
                (e.currentTarget.src = require("./resources/img/Profil2Small.jpg"))
              }
            />
          </div>
        </section>

        <section id="skills">
          <h3>My skills include</h3>
          <div className="grid">
            {skills.map((skill) => {
              return (
                <div className="grid_el">
                  <img
                    src={require(`./resources/img/${skill}.png`)}
                    alt={`${skill} logo`}
                  />
                  <h5>{skill}</h5>
                </div>
              );
            })}
          </div>
        </section>

        <section id="projects">
          <h3>Some things I built</h3>
          <div className="projects-container">
            <div className="project-box reverse">
              <div className="project-info">
                <h4>E-Commerce App</h4>
                <p>
                  Mock an online store where a customer can register/login, edit
                  its profile, browse products per categories or search, add
                  items to cart, checkout, pay and see previous orders.
                </p>
                <p>JS, REACT, RECOIL, EXPRESS, NODEJS, POSTGRESQL, BOOTSTRAP</p>
                <a
                  className="link"
                  href="https://ecommerce-eb562.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check Website
                </a>
                <a
                  className="link"
                  href="https://github.com/jisokoo/ecommerce"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check Code on Github
                </a>
              </div>
              <img
                alt="E-Commerce preview preview"
                src={require("./resources/img/Ecommerce.gif")}
              />
            </div>
            <div className="project-box">
              <img
                alt="Reddit lite preview"
                src={require("./resources/img/MyRedditLite.gif")}
              />
              <div className="project-info">
                <h4>My Reddit Light</h4>
                <p>
                  A light version of the Reddit website made to fit my needs and
                  interests
                </p>
                <p>HTML, CSS, JS & REACT</p>
                <a
                  className="link"
                  href="https://my-reddit-l.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check Website
                </a>
                <a
                  className="link"
                  href="https://github.com/jisokoo/My-Reddit-Lite"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check Code on Github
                </a>
              </div>
            </div>
            <div className="project-box reverse">
              <div className="project-info">
                <h4>Tenzies</h4>
                <p>A little dice game</p>
                <p>HTML, CSS, JS & REACT</p>
                <a
                  className="link"
                  href="https://tenzies-79b6c.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check Website
                </a>
                <a
                  className="link"
                  href="https://github.com/jisokoo/Tenzies"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check Code on Github
                </a>
              </div>
              <img
                alt="tenzie preview"
                src={require("./resources/img/Tenzie.gif")}
              />
            </div>
            <div className="project-box">
              <img
                alt="Choquel marketing preview"
                src={require("./resources/img/ChoquelMarketing.gif")}
              />
              <div className="project-info">
                <h4>Choquel Marketing</h4>
                <p>
                  This is the website for Choquel Marketing, a Digital Marketing
                  company based in France.
                </p>
                <p>HTML & CSS</p>
                <a className="link" href="https://choquel-marketing.com/">
                  Check Website
                </a>
                <a
                  className="link"
                  href="https://github.com/jisokoo/choquel-marketing"
                >
                  Check Code on Github
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <h3>Let's get in touch: </h3>
          <div className="contact-options">
            <a href="mailto:aurele.barbancon@ieseg.fr">
              <img src={require("./resources/img/GMAIL.png")} alt="email" />
            </a>
            <a href="https://t.me/Oribar29">
              <img
                src={require("./resources/img/TELEGRAM.png")}
                alt="telegram"
              />
            </a>
            <a href="https://github.com/jisokoo">
              <img
                src={require("./resources/img/GITHUBwhite.png")}
                alt="github"
              />
            </a>
            <a href="https://www.linkedin.com/in/aur%C3%A8le-barban%C3%A7on-782b6a94/">
              <img src={require("./resources/img/LI.png")} alt="linkedIn" />
            </a>
          </div>
        </section>
      </div>
      <footer className="footer"></footer>
    </main>
  );
}

export default App;
