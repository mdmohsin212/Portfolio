import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container py-5 px-3">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-5 col-md-6 col-sm-10 order-2 order-md-1">
          <form className="p-4 rounded shadow bg-light" onSubmit={handleSubmit}>
            <h2 className="text-center text-dark mb-4">Get in Touch</h2>
            <div className="form-group mb-3">
              <label className="mb-1 text-dark">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label className="mb-1 text-dark">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label className="mb-1 text-dark">Message</label>
              <textarea
                name="message"
                rows={5}
                className="form-control"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-dark w-100">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="col-lg-5 col-md-6 col-sm-10 text-center order-1 order-md-2 mb-4 mb-md-0">
          <div className="p-4 bg-dark text-white rounded shadow">
            <h4 className="mb-3">Contact Information</h4>
            <p>
              <i className="fa fa-user me-2"></i>Md Mohsin
            </p>
            <p>
              <i className="fa fa-envelope me-2"></i>siam.mohsin2005@gmail.com
            </p>
            <p>
              <i className="fa fa-phone me-2"></i>01627568419
            </p>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <a
                href="https://github.com/mdmohsin212/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohsin416/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/mohsin.siam6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
