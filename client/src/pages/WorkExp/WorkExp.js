import React from "react";
import { SiReact } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa6";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Nov 2024 - Jan 2025"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">
                NodeJS Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Smarden, IN
              </h4>
              <p>Node.js, Express.js, MongoDB, Git&Github</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Feb 2023 - May 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">
                Research Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                IKSMHA Centre, IIT Mandi
              </h4>
              <p>Python, C#, NumPy, Pandas</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Dec 2022- Feb 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Techrupt Innovations Pvt. Ltd., IN
              </h4>
              <p>ReactJs, JavaScript, NodeJs, ExpressJs, MongoDB</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Aug 2023 - Nov 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">
                DSA Mentor Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Acciojob, IN
              </h4>
              <p>Data Structure and Algorithms mentor, Problem Solving</p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
