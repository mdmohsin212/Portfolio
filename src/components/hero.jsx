import React, { useState, useEffect } from "react";
import Typed from "typed.js";
import "font-awesome/css/font-awesome.min.css";
import "../styles/style.css"
import Main from './main';
import Contact from './Contact';
import { scrollSkill, scrollProject } from './app';
import Project from './Project';

const Hero = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
      document.body.dataset.bsTheme = theme;
      localStorage.setItem("theme", theme);
    }, [theme]);
    
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const el = React.useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
          "Backend Developer | Django &amp; DRF",
          "Expert in MySQL &amp; Django Channels",
          "Building Scalable APIs",
        ],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1000,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }, []);


  return (
    <div>
      <nav className="navbar navbar-expand-lg py-3 px-4">
        <div className="container-fluid">
          <h2>Portfolio</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-around gap-4 fs-5 text-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={scrollSkill}>
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={scrollProject}>
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="./images/m.pdf"
                  className="btn btn-info p-2"
                  download
                >
                  Resume <i className="fa fa-download"></i>
                </a>
              </li>
              <li>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="mx-1">
                    {theme === "dark" ? (
                      <img
                        src="/images/moon.svg"
                        alt=""
                        onClick={toggleTheme}
                        style={{ width: "24px", cursor: "pointer" }}
                      />
                    ) : (
                      <img
                        src="/images/dark-moon.svg"
                        alt=""
                        onClick={toggleTheme}
                        style={{ width: "24px", cursor: "pointer" }}
                      />
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="px-4 text-start pt-5 mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-8 order-2 order-md-1 pe-5">
            <h1>
              HI, I'M MD <span className="text-info">MOHSIN</span> <br /> and I
              am a passionate
            </h1>
            <div style={{ minHeight: "40px" }}>
              <span ref={el} className="fs-4 text-info" />
            </div>

            <div className="mt-4">
              <p className="fs-5">
                I am currently pursuing a Diploma in Computer Science &
                Technology at Narayanganj Polytechnic Institute. With a strong
                foundation in problem-solving, I have tackled challenges on
                platforms like Codeforces, CodeChef and leetcode, primarily
                using C++. As a backend developer, I specialize in Django and
                DRF, focusing on building scalable and efficient REST APIs.
                While I primarily work on backend technologies, I also have
                experience developing responsive web interfaces to ensure
                seamless user experiences.
              </p>
            </div>

            <div className="d-flex gap-4 align-items-center fs-4">
              <a
                href="https://github.com/mdmohsin212/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-github fs-3"
                  style={{ color: "#74C0FC" }}
                ></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohsin416/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-linkedin fs-3"
                  style={{ color: "#74C0FC" }}
                ></i>
              </a>
              <a
                href="https://www.facebook.com/mohsin.siam6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-facebook fs-3"
                  style={{ color: "#74C0FC" }}
                ></i>
              </a>
              <a href="./images/m.pdf" className="btn btn-info p-2" download>
                Resume <i className="fa fa-download"></i>
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 order-1 order-md-2 text-center">
            <img className="mb-3 img" src="./images/siam.png" alt="Profile" />
          </div>
        </div>
      </div>

      <div id="main-target">
        <Main />
      </div>

      <div id="project-target">
        <Project />
      </div>

      <div id="contact-target">
        <Contact />
      </div>
    </div>
  );
};

export default Hero;
