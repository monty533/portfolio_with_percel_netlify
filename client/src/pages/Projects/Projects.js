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
                    An e-commerce frontend application providing a seamless user experience with a modern and responsive design.
                    A robust backend system for a chatting application that supports multiple users and real-time communication.
                    A comprehensive full-stack application integrating front-end and back-end technologies to deliver a complete user solution.
                </p>
                {/* card design */}
                <div className="row" id="ads">
                    <Spin>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">SHOPPING WEBSITE</span>
                                    <img
                                        src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                                        alt="project1"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Python</span>
                                    <span className="card-detail-badge">JavaScript</span>
                                    <span className="card-detail-badge">PostgreSql</span>
                                    <span className="card-detail-badge">Html/Css</span>
                                    <span className="card-detail-badge">Git</span>
                                    <span className="card-detail-badge">Django</span>
                                    <span className="card-detail-badge">Github</span>
                                    <span className="card-detail-badge">VS Code</span>
                                    <span className="card-detail-badge">SQL</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h6 className="text-uppercase">
                                            Full Stack
                                        </h6>
                                    </div>
                                    <a
                                        className="ad-btn"
                                        href="https://monty533.pythonanywhere.com"
                                    >
                                        View
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">MDM SOLUTION APP</span>
                                    <img
                                        src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                                        alt="project1"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Python</span>
                                    <span className="card-detail-badge">JavaScript</span>
                                    <span className="card-detail-badge">Html/Css</span>
                                    <span className="card-detail-badge">Mysql</span>
                                    <span className="card-detail-badge">Git</span>
                                    <span className="card-detail-badge">Django</span>
                                    <span className="card-detail-badge">Github</span>
                                    <span className="card-detail-badge">VS Code</span>
                                    <span className="card-detail-badge">SQL</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h6 className="text-uppercase">Mobiheal</h6>
                                    </div>
                                    <a className="ad-btn" href="https://mobiheal.in/">
                                        View
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">ECOMMERCE APP</span>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR356D-1YtSagN4-_ZdjZ5H9o6PKUO4h12dvw&usqp=CAU"
                                        alt="project2"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">ReactJs</span>
                                    <span className="card-detail-badge">NodeJs</span>
                                    <span className="card-detail-badge">ExpressJs</span>
                                    <span className="card-detail-badge">MongoDb</span>
                                    <span className="card-detail-badge">Git</span>
                                    <span className="card-detail-badge">Github</span>
                                    <span className="card-detail-badge">VS Code</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h6 className="text-uppercase">Full Stack</h6>
                                    </div>
                                    <a
                                        className="ad-btn"
                                        href="https://github.com/monty533/node_react_ecommerce"
                                    >
                                        View
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