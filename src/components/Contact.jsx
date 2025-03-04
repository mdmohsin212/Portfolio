import React from "react";
import "../styles/style.css";
import { HandelContact } from './app';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <div className="pt-5 p-3">
      <ToastContainer position="top-center" />
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-4 col-md-4 col-12">
          <form className="p-4 rounded bg contact">
            <h1 className="text-center text-black">Get in Touch</h1>
            <div className="form-group my-3">
              <label className="mb-2 text-dark">Name</label>
              <input
                type="text"
                className="form-control bg-white"
                id="Name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group my-3">
              <label className="mb-2 text-dark">Email</label>
              <input
                type="email"
                className="form-control bg-white"
                id="Email"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group my-3">
              <label className="mb-2 text-dark">Message</label>
              <textarea
                rows={5}
                className="form-control bg-white"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <div className="text-center">
              <button
                className="my-2 px-4 w-75 btn btn-dark"
                onClick={HandelContact}
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <div className="col-lg-2 col-md-2 col-sm-10 text-center mt-4 mt-md-0">
          <div className="cnt">
            <div className="justify-content-center align-center text-start">
              <h5>Md Mohsin</h5>
              <h5>
                <i class="fa fa-envelope">
                  <span className="ms-2">siam.mohsin2005@gmail.com</span>
                </i>
              </h5>
              <h5>
                <i class="fa fa-phone">
                  <span className="ms-2">01627568419</span>
                </i>
              </h5>
              <div className="pt-2">
                <a
                  href="https://github.com/mdmohsin212/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github fs-3 me-4"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohsin416/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin fs-3 me-4"></i>
                </a>
                <a
                  href="https://www.facebook.com/mohsin.siam6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook fs-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
