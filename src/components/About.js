import React from "react";
import me from "../assets/me.jpg";

const About = () =>(
    <div className="container contents" id="about">
    <div className="page-container">
        <p className="page-title">About Me</p>
        <div className="line"></div>
        <p className="about-me">
            My name is Dhruv Patel and I'm a rising senior studying Computer Science at Rutgers University in New Brunswick, NJ.
            Currently, I'm focused on front-end development and building various projects revolving around web and mobile development
            to practice what I know and continue learning. In the near future, I hope to develop reliable software that simplifies complex aspects
            of our lives for the better. At the moment, I'm actively seeking any internship or co-op opportunities
            to gain valuable work experience. 
        </p>

        <p className="interests-title">My Interests</p>
        <div className="linetwo"></div>

        <div className="interests-group">
            <div className="interest gaming">
                <p className="interests one">Gaming</p>
            </div>
            <div className="interest fitness">
                <p className="interests two">Fitness</p>
            </div>
            <div className="interest anime">
                <p className="interests three">Anime</p>
            </div>
        </div>

        <div className="interests-group-two">
            <div className="interest web-dev">
                <p className="interests four">Web Development</p>
            </div>
            <div className="interest movies">
                <p className="interests five">Movies</p>
            </div>
            <div className="interest hiking">
                <p className="interests six">Hiking</p>
            </div>
        </div>

        <div className="house">
            <div className="profile-pic-container">
                <img src={me} alt="Dhruv Patel" className="profile-pic"/>
            </div>
            <div className="profile-container">
                <div className="fill-inside"></div>
            </div>
        </div>

    </div>
    </div>
);

export default About;