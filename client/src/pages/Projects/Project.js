import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Here is the list of my recent projects that includes
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://www.siteminder.com/wp-content/uploads/2022/04/1.1-hcp-distribution.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">NodeJs</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">JavaScript</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Wanderlust Hotel Booking WEB APP
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://wanderlust-ry50.onrender.com/listings"
                  >
                    View Live
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/AmitMehta0510/wanderlust"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR356D-1YtSagN4-_ZdjZ5H9o6PKUO4h12dvw&usqp=CAU"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">NodeJs</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Appointment Booking WEB APP
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://doctorapp-xk2x.onrender.com/"
                  >
                    View Live
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge"> Portfolio</span>
                  <img
                    src="..\assets\images\portfolio"
                    alt="portfolio"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">NodeJs</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">MERN PORTFOLIO</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    View Live
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/AmitMehta0510/wanderlust"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
