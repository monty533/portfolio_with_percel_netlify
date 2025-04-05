import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";

const About = () => {
    return (
        <>
            <Jump>
                <div className="about" id="about">
                    <div className="row">
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                            <Zoom>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                                    alt="profile_pic"
                                />
                            </Zoom>
                        </div>
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                            <h1>About me</h1>
                            <p>
                                I am a passionate and dedicated software developer with 2+ years of experience in building web applications and solutions. With a strong foundation in both frontend and backend technologies, I enjoy creating intuitive, responsive, and high-performance applications that provide excellent user experiences.
                                In the past two years, I have had the opportunity to work on a variety of projects ranging from small business websites to large-scale web applications. My roles have involved designing and implementing user interfaces, developing server-side logic, managing databases, and deploying applications to cloud platforms.
                            </p>
                        </div>
                    </div>
                </div>
            </Jump>
        </>
    );
};

export default About;