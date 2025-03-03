import React from 'react';
import "font-awesome/css/font-awesome.min.css";

const Main = () => {
    return (
      <div>
        <div className="p-2 mt-4">
          <h2 className="text-center my-5">preferred tech-stack</h2>
          <div class="gap-5 d-flex flex-wrap justify-content-center">
            <img src="./images/python.svg" />
            <img src="./images/django.svg" />
            <img src="./images/svg.svg" />
            <img src="./images/react.svg" />
          </div>
        </div>
        <div className="p-2">
          <h2 className="text-center my-5">Also I love</h2>
          <div class="gap-5 d-flex flex-wrap justify-content-center">
            <img src="./images/c.svg" />
            <img src="./images/cc.svg" />
            <img src="./images/html.svg" />
            <img src="./images/css.svg" />
            <img src="./images/js.svg" />
            <img src="./images/my.svg" />
          </div>
        </div>
        <div className="p-2">
          <h2 className="text-center my-5">Tools</h2>
          <div class="gap-5 d-flex flex-wrap justify-content-center">
            <img src="./images/vs.svg" />
            <img src="./images/charm.svg" />
            <img src="./images/chrome.svg" />
          </div>
        </div>
        <div className="p-2">
          <h2 className="text-center my-5">Version Control</h2>
          <div class="gap-5 d-flex flex-wrap justify-content-center">
            <img src="./images/git.svg" />
            <img src="./images/hub.svg" />
          </div>
        </div>

        {/* Projects */}

        <div className="px-5 mt-4">
          <h2 className="my-2">Projects</h2>
          <p className="text-muted">
            Showcasing my latest work and contributions.
          </p>
          <div className="w-25 border-top border"></div>

          <div className="d-flex flex-wrap justify-content-center pt-4 gap-5">
            <div className="card col-md-5 col-12 caros">
              <div className="row g-0">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div
                    id="carouselExample1"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="./images/proj11.png"
                          className="d-block img-fluid"
                          alt="Project 1"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="./images/proj12.png"
                          className="d-block img-fluid"
                          alt="Project 1"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="./images/proj14.png"
                          className="d-block w-100"
                          alt="Project 1"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="./images/proj15.png"
                          className="d-block w-100"
                          alt="Project 1"
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExample1"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExample1"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 p-3">
                  <div className="card-body">
                    <h5 class="card-title text-start">
                      <b>NextHore - A Job Finding Platform</b>
                    </h5>
                    <div className="caros-size px-4">
                      <div className="d-flex align-center pt-3">
                        <h6 className="text-start">Backend:</h6>{" "}
                        <a
                          href="https://github.com/mdmohsin212/NextHire-Backend"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            style={{ color: "black" }}
                            className="mx-2 fa fa-github fs-2"
                          ></i>
                        </a>
                      </div>
                      <div className="d-flex align-center pt-3">
                        <h6 className="text-start">Frontend:</h6>{" "}
                        <a
                          href="https://github.com/mdmohsin212/NextHire-Frontend"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            style={{ color: "black" }}
                            className="fa fa-github fs-2 mx-2"
                          ></i>
                        </a>
                      </div>
                      <div className="d-flex align-center pt-3">
                        <h6 className="text-start">Live:</h6>{" "}
                        <a
                          href="https://nexthire-frontend.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img className="mx-2" src="./images/live.svg" />
                        </a>
                      </div>
                    </div>
                    <p className="pt-2">
                      NextHore is a job-finding platform that helps people
                      connect with the right job opportunities easily and
                      quickly.
                    </p>

                    <div>
                      <button
                        type="button"
                        className="btn btn-dark text-white m-1"
                      >
                        Django Rest Api
                      </button>
                      <button
                        type="button"
                        className="btn btn-dark text-white m-1"
                      >
                        React
                      </button>
                      <button
                        type="button"
                        className="btn btn-dark text-white m-1"
                      >
                        PostgreSQL
                      </button>
                      <button
                        type="button"
                        className="btn btn-dark text-white m-1"
                      >
                        Bootstrap
                      </button>
                      <button
                        type="button"
                        className="btn btn-dark text-white m-1"
                      >
                        CSS
                      </button>
                      <button
                        type="button"
                        className="btn btn-dark text-white m-1"
                      >
                        JS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card col-md-5 col-12 caros">
              <div className="row g-0">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div
                    id="carouselExample2"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="./images/proj21.png"
                          className="d-block w-100"
                          alt="Project 2"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="./images/proj22.png"
                          className="d-block w-100"
                          alt="Project 2"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="./images/proj24.png"
                          className="d-block w-100"
                          alt="Project 2"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="./images/proj25.png"
                          className="d-block w-100"
                          alt="Project 2"
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExample2"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExample2"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 p-3">
                    <div className="card-body">
                      <h5 class="card-title text-start">
                        <b>SnapBuy - A Ecommerce Platform</b>
                      </h5>
                      <div className="caros-size px-4">
                        <div className="d-flex align-center pt-3">
                          <h6 className="text-start">Backend:</h6>{" "}
                          <a
                            href="https://github.com/mdmohsin212/SnapBuy-Backend"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i
                              style={{ color: "black" }}
                              className="mx-2 fa fa-github fs-2"
                            ></i>
                          </a>
                        </div>
                        <div className="d-flex align-center pt-3">
                          <h6 className="text-start">Frontend:</h6>{" "}
                          <a
                            href="https://github.com/mdmohsin212/SnapBuy-Frontend"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i
                              style={{ color: "black" }}
                              className="fa fa-github fs-2 mx-2"
                            ></i>
                          </a>
                        </div>
                        <div className="d-flex align-center pt-3">
                          <h6 className="text-start">Live:</h6>{" "}
                          <a
                            href="https://snapbuy-frontend.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img className="mx-2" src="./images/live.svg" />
                          </a>
                        </div>
                      </div>
                      <p className="pt-2">
                        SnapBuy is a fast and user-friendly eCommerce platform
                        designed for seamless online shopping and secure
                        transactions.
                      </p>

                      <div>
                        <button
                          type="button"
                          className="btn btn-dark text-white m-1"
                        >
                          Django Rest Api
                        </button>
                        <button
                          type="button"
                          className="btn btn-dark text-white m-1"
                        >
                          React
                        </button>
                        <button
                          type="button"
                          className="btn btn-dark text-white m-1"
                        >
                          PostgreSQL
                        </button>
                        <button
                          type="button"
                          className="btn btn-dark text-white m-1"
                        >
                          Bootstrap
                        </button>
                        <button
                          type="button"
                          className="btn btn-dark text-white m-1"
                        >
                          CSS
                        </button>
                        <button
                          type="button"
                          className="btn btn-dark text-white m-1"
                        >
                          JS
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    );
}

export default Main;
