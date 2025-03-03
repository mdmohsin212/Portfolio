import React from "react";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <footer className="text-center mt-4">
      <hr />
      <p>Copyright © 2025 | Md Mohsin</p>
      <p>Narayanganj, Dhaka, Bangladesh</p>
      <div className="d-flex gap-4 justify-content-center align-items-center fs-4">
        <a
          href="https://github.com/mdmohsin212/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github fs-3" style={{ color: "#74C0FC" }}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mohsin416/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin fs-3" style={{ color: "#74C0FC" }}></i>
        </a>
        <a
          href="https://www.facebook.com/mohsin.siam6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-facebook fs-3" style={{ color: "#74C0FC" }}></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
