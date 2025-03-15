import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "font-awesome/css/font-awesome.min.css";
import "../styles/style.css";
import Contact from "./Contact";
import { scrollSkill, scrollProject } from "./app";
import Project from "./Project";
import Competitive from "./competive";
import Skills from "./Skills";

const Hero = () => {
  useEffect(() => {
    document.body.dataset.bsTheme = "dark";
  }, []);

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Software Engineer &amp; Python Developer",
        "Backend Developer | Django &amp; DRF",
        "Expert in MySQL",
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
    <div className="container">
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container-fluid">
          <h2 className="fw-bold">Mohsin</h2>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 fs-5 text-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">
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
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="./images/mohsin.pdf"
                  className="btn btn-info px-3 py-2"
                  target="_blank"
                >
                  <i className="fa fa-download me-2"></i> Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="text-start pt-5 mt-5">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-8 order-2 order-md-1 pe-md-5">
            <h1 className="fw-bold display-4 pt-4">
              Hi, I'm <span className="text-info">Md Mohsin</span>
            </h1>
            <h2 className="fs-2">
              <span ref={el} className="fs-4" />
            </h2>

            <div className="mt-4">
              <p className="fs-5">
                I am a Backend Developer specializing in scalable architectures,
                optimized databases, and high-performance web applications using
                Django and DRF.🔥
              </p>
            </div>

            <div className="d-flex gap-4 align-items-center fs-4 mt-4">
              <a
                href="https://github.com/mdmohsin212/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github fs-3"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohsin416/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin fs-3"></i>
              </a>
              <a
                href="https://www.facebook.com/mohsin.siam6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook fs-3"></i>
              </a>
              <a
                href="./images/mohsin.pdf"
                className="btn btn-info px-3 py-2"
                target="_blank"
              >
                <i className="fa fa-download me-2"></i> Resume
              </a>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 order-1 order-md-2 text-center">
            <img
              className="mb-3 img-fluid rounded-circle shadow-lg"
              src="./images/siam.png"
              alt="Profile"
              style={{ maxWidth: "340px", border: "4px solid #0DCAF0" }}
            />
          </div>
        </div>
      </div>

      <div className="container py-3">
        <h2 className="text-center mb-4">About Me</h2>
        <p className="fs-5">
          I am a results-driven Backend Developer with expertise in Django,
          Django REST Framework, and database optimization. My focus is on
          building scalable, high-performance applications with clean
          architecture and efficient API design. With strong problem-solving
          skills, I specialize in optimizing database queries, implementing
          secure authentication, and ensuring seamless backend performance.
        </p>
        <p className="fs-5">
          Passionate about innovation and efficiency, I continuously refine my
          skills to deliver robust and scalable solutions. Whether designing
          complex systems or solving challenging backend issues, I am committed
          to delivering excellence.
        </p>
      </div>

      <div id="main-target">
        <Skills />
      </div>
      <div>
        <Competitive />
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
