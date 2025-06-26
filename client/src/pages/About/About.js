import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="/amiit.mehta-20240202-0001.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I'm a Computer Science graduate from IIIT Una with a strong foundation in backend development, full-stack web apps. I've interned Full Stack Web Developer at Techrupt Innovations, Nodejs Developer at Smarden and Research Intern at IIT Mandi, working on real-time backend systems, scalable APIs, and machine learning pipelines.

                With 700+ DSA problems solved on leetcode & GFG and several MERN-based projects like ShopSense, CreatiVortex, and a custom version control system, I combine problem-solving with hands-on product building. I'm passionate about writing clean, efficient code and currently looking for full-time roles as a Software Engineer, Backend Developer or Full Stack Web Developer.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;