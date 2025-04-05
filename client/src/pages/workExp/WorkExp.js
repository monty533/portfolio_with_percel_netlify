import React from "react";
import { SiReact } from "react-icons/si";
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
                            date="2023 - present"
                            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Software Developer
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Mobisec Technologies, Pvt Ltd (IIT Delhi)
                            </h4>
                            <p>
                                Lead The Project From Requirement To Deployment. Implement Celery For Asynchronous Task Queue Implementation, Enhancing Application Performance. Integrate Google Maps API's and Android Management API's For Location Based And Mobile Device Management Functionalities. Competent In Redis For Caching And Improving Data Access Speed, Along With Scheduler And Cron Job Services For Task Scheduling. Implement AWS Lambda And S3 Bucket Management. Additionally, Adapt In Database Design, Firebase Messaging, and Google Pub/Sub For Efficient Data Management And Real-Time Communication. Develop the functionality of GEO Fencing and Time Fencing. Setup Gunicorn and Nginx Web Server.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "white", color: "#1e1e2c" }}
                            contentArrowStyle={{
                                borderRight: "7px solid  white",
                            }}
                            date="2021 - 2023"
                            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Junior Software Developer
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Infocom Network, pvt ltd (Noida)
                            </h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading , Database Handle And Improved Its Performance, Decrease Load Time, Api Developed In Django Framework, Implement Unit Test Plans, Migrate Project From Django To Fastapi, Investigate, Analyse And Document Reported Defects, Optimize Codebase, Build CI/CD integration.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
};

export default WorkExp;