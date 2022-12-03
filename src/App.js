import React, { useState } from "react";

const skills = ["HTML", "CSS", "JAVASCRIPT", "REACT", "REDUX", "NODEJS", "EXPRESS", "GITHUB", "VSC",  "ADWORDS", "ANALYTICS", "OFFICE", "PHOTOSHOP", "LIGHTROOM", "FINALCUT"];

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

function App() {
  return (
    <main>
      <section id="home">
        <h1>Hi, I'm <span>Aurele</span></h1>
        <h2 className="hidden visible">
            I am a <span>manager</span>, problem <span>solver</span> and full-stack <span>developper</span>
        </h2>
        <button>
          <a href="#sections">
            <p>Let's dive in!</p>
          </a>
        </button>
      </section>
      
      <div id="sections">
        <nav id="navbar">
          <div className="logo"><a href="#home"><img src={require("./resources/img/logo2.png")} /></a></div>
          <ul>
            <li><p><a href="#about">ABOUT</a></p></li>
            <li><p><a href="#skills">SKILLS</a></p></li>
            <li><p><a href="#projects">PROJECTS</a></p></li>
            <li><p><a href="#contact">CONTACT</a></p></li>
          </ul>
        </nav>

        <section id="about">
          <h3>About me...</h3>
          <div className="content">
            <div className="text-container">
              <p>Hello! My name is Aurèle and  I am a french junior full-stack web developer. I have more than 3 years experience working in tech start-ups which includes managing a company and overseeing the release of 1 website and 2 apps (e-commerce and booking).</p>
              <p>I first discovered the buzzing world of a game development company working at Ubisoft. Then at Camboticket, I had various missions to increase sales volume. Finally as general manager of Delishop, an e-commerce start-up of more than 30 employees, I oversaw the release of the new website and app.</p>
              <p>My specialities include fullstack developement, general management, project management, business development and partnership acquisition.</p>
              <p>Outside of work I am interested in finance, technology, water-sports, nature and climbing.</p>
            </div>
            <img src={require('./resources/img/Profil2Small.jpg')} 
              onMouseOver={e => (e.currentTarget.src = require('./resources/img/ProfilSmall.jpg'))}
              onMouseOut={e => (e.currentTarget.src = require('./resources/img/Profil2Small.jpg'))}
            />
          </div>
        </section>

        <section id="skills">
          <h3>My skills include</h3>
          <div className="grid" >
            {
              skills.map((skill => {
                return (
                  <div className="grid_el">
                    <img src={require(`./resources/img/${skill}.png`)} />
                    <h5>{skill}</h5>
                  </div>
                )
              }))
            }
          </div>
        </section>

        <section id="projects">
          <h3>Some stuffs I built</h3>
          <div className="projects-container">
            <div className="project-box">
              <img alt="Reddit lite preview" src={require("./resources/img/MyRedditLite.gif")} />
              <div className="project-info">
                <h4>My Reddit Light</h4>
                <p>A light version of the Reddit website made to fit my needs and interests</p>
                <p>HTML, CSS, JS & REACT</p>
                <a className="link" href="https://my-reddit-l.web.app/">Check Website</a>
                <a className="link" href="https://github.com/jisokoo/My-Reddit-Lite">Check Code on Github</a>
              </div>
            </div>
            <div className="project-box tenzies">
              <div className="project-info">
                <h4>Tenzies</h4>
                <p>A little dice game</p>
                <p>HTML, CSS, JS & REACT</p>
                <a className="link" href="https://tenzies-79b6c.web.app/">Check Website</a>
                <a className="link" href="https://github.com/jisokoo/Tenzies">Check Code on Github</a>
              </div>
              <img alt="tenzie preview" src={require("./resources/img/Tenzie.gif")} />
            </div>
            <div className="project-box">
              <img alt="Choquel marketing preview" src={require("./resources/img/ChoquelMarketing.gif")} />
              <div className="project-info">
                <h4>Choquel Marketing</h4>
                <p>This is the website for Choquel Marketing, a Digital Marketing company based in France.</p>
                <p>HTML & CSS</p>
                <a className="link" href="https://choquel-marketing.com/">Check Website</a>
                <a className="link" href="https://github.com/jisokoo/choquel-marketing">Check Code on Github</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <h3>Let's get in touch: </h3>
          <div className="contact-options">
            <a href="mailto:aurele.barbancon@ieseg.fr" ><img src={require("./resources/img/GMAIL.png")}/></a>
            <a href="https://t.me/Oribar29"><img src={require("./resources/img/TELEGRAM.png")}/></a>
            <a href="https://github.com/jisokoo"><img src={require("./resources/img/GITHUBwhite.png")}/></a>
            <a href="https://www.linkedin.com/in/aur%C3%A8le-barban%C3%A7on-782b6a94/"><img src={require("./resources/img/LI.png")}/></a>
          </div>
        </section>

      </div>
      <footer className="footer"></footer>
    </main>
  );
}

export default App;
