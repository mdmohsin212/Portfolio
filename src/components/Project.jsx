import React from "react";

const projects = [
  {
    id: "carouselExample1",
    name: "NextHire - A Job Finding Platform",
    description:
      "NextHire is a job-finding platform that helps people connect with the right job opportunities easily and quickly.",
    images: ["proj11.png", "proj12.png", "proj14.png", "proj15.png"],
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
    ],
  },
  {
    id: "carouselExample2",
    name: "SnapBuy - An Ecommerce Platform",
    description:
      "SnapBuy is a fast and user-friendly eCommerce platform designed for seamless online shopping and secure transactions.",
    images: ["proj21.png", "proj22.png", "proj24.png", "proj25.png"],
    backend: "https://github.com/mdmohsin212/SnapBuy-Backend",
    frontend: "https://github.com/mdmohsin212/SnapBuy-Frontend",
    live: "https://snapbuy-frontend.vercel.app/",
    technologies: [
      "Django Rest API",
      "React",
      "PostgreSQL",
      "Bootstrap",
      "CSS",
      "JavaScript",
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
          <div key={index} className="card col-md-4 px-md-0 px-2 col-12 shadow-lg border">
            <div className="row g-0">
              <div className="col-lg-12">
                <div
                  id={project.id}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {project.images.map((img, idx) => (
                      <div
                        key={idx}
                        className={`carousel-item ${idx === 0 ? "active" : ""}`}
                      >
                        <img
                          src={`./images/${img}`}
                          className="d-block w-100 rounded-top"
                          alt={project.name}
                          style={{ height: "280px" }}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#${project.id}`}
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#${project.id}`}
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-12 p-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.name}</h5>
                  <p className="text-muted">{project.description}</p>

                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center pt-2">
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

                  <div className="mt-3">
                    {project.technologies.map((tech, i) => (
                      <button
                        key={i}
                        className="btn btn-dark text-white m-1 btn-sm"
                      >
                        {tech}
                      </button>
                    ))}
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
