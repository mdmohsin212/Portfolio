import React from "react";
import { CheckCircle, Code, Github, ExternalLink } from "lucide-react";
  
const projects = [
  {
    id: "project1",
    name: "NextHire - A Job Finding Platform",
    description:
      "NextHire is a job-finding platform that helps people connect with the right job opportunities easily and quickly.",
    images: ["proj11.png"],
    features: [
      "User Authentication: Signup, confirm email, and log in.",
      "Job Management: Employers post, track, and manage jobs.",
      "Candidate Handling: View applicants, assign tasks, approve/reject.",
      "Job Applications: Seekers apply, track, and submit details.",
    ],

    backend: "https://github.com/mdmohsin212/NextHire-Backend",
    frontend: "https://github.com/mdmohsin212/NextHire-Frontend",
    live: "https://nexthire-frontend.vercel.app/",
    technologies: [
      "Django Rest API",
      "React",
      "PostgreSQL",
      "Bootstrap",
      "CSS",
      "JavaScript",
      "JWT",
    ],
  },
  {
    id: "project2",
    name: "SnapBuy - An Ecommerce Platform",
    description:
      "SnapBuy is a fast and user-friendly eCommerce platform designed for seamless online shopping and secure transactions.",
    images: ["proj21.png"],
    features: [
      "Account Access: Register, verify, and log in.",
      "Shopping Experience: Browse products, add to cart, and checkout securely.",
      "Orders: Track status and update shipping.",
      "Admin: Manage products, orders, and stats.",
    ],

    backend: "https://github.com/mdmohsin212/SnapBuy-Backend",
    frontend: "https://github.com/mdmohsin212/SnapBuy-Frontend",
    live: "https://snapbuy-frontend.vercel.app/",
    technologies: [
      "Django Rest API",
      "React",
      "SSLCommerz",
      "PostgreSQL",
      "Bootstrap",
      "CSS",
      "JavaScript",
      "JWT",
    ],
  },
];

const Project = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center fw-bold">Projects</h2>
      <p className="text-muted text-center">
        Showcasing my latest work and contributions.
      </p>
      <div className="border-top border-secondary w-25 mx-auto"></div>

      <div className="d-flex flex-wrap justify-content-center pt-4 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card col-md-5 px-md-0 px-2 col-12 shadow-lg border"
          >
            <div className="row g-0">
              <div className="col-lg-12">
                <img
                  src={`./images/${project.images[0]}`}
                  className="d-block w-100 rounded-top"
                  alt={project.name}
                  style={{ height: "280px" }}
                />
              </div>

              <div className="col-lg-12 p-4">
                <div className="card-body">
                  <h4 className="card-title fw-bold">{project.name}</h4>
                  <p className="text-muted">{project.description}</p>

                  <div>
                    {project.features && (
                      <div>
                        <h5>
                          <CheckCircle
                            className="me-2 text-primary"
                            size={20}
                          />
                          Key Features:
                        </h5>
                        <ul>
                          {project.features.map((feature, i) => (
                            <li key={i} className="text-muted">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-3">
                    <h4>
                      <Code className="me-2 text-success" size={20} />
                      Used Technologies:
                    </h4>
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <button
                          key={i}
                          className="badge bg-light text-dark px-3 py-2"
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="d-flex flex-column flex-md-row gap-2 gap-md-5 justify-content-md-center text-center text-md-start">
                    <div className="d-flex align-items-center pt-3">
                      <h6 className="m-0">Backend:</h6>
                      <a
                        href={project.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-2"
                      >
                        <i className="fa fa-github fs-3"></i>
                      </a>
                    </div>
                    <div className="d-flex align-items-center pt-2">
                      <h6 className="m-0">Frontend:</h6>
                      <a
                        href={project.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-2"
                      >
                        <i className="fa fa-github fs-3"></i>
                      </a>
                    </div>
                    <div className="d-flex align-items-center pt-2">
                      <h6 className="m-0">Live:</h6>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-2"
                      >
                        <img
                          src="./images/live.svg"
                          alt="Live Preview"
                          className="img-fluid"
                          width="24px"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
