import React from "react";
import lin_logo from "../assets/l-in.svg";
import git_logo from "../assets/git-logo.svg";
import Particles from "./Particles";

const Dashboard = () => (
    <div className="fill-page" id="home">
    <div className="text">
        <div className="animate block">
            <span className="letter">H</span>
            <span className="letter">i</span>
            <span className="letter">,</span>
            &nbsp;
            <span className="letter">m</span>
            <span className="letter">y</span>
            &nbsp;                
            <span className="letter">n</span>
            <span className="letter">a</span>
            <span className="letter">m</span>
            <span className="letter">e</span>
            &nbsp;                
            <span className="letter">i</span>
            <span className="letter">s</span>
            <br/>
            <span className="letter other-line">D</span>
            <span className="letter other-line">h</span>
            <span className="letter other-line">r</span>
            <span className="letter other-line">u</span>
            <span className="letter other-line">v</span>
            &nbsp;
            &nbsp;
            <span className="letter other-line">P</span>
            <span className="letter other-line">a</span>
            <span className="letter other-line">t</span>
            <span className="letter other-line">e</span>
            <span className="letter other-line">l</span>
            <span className="letter other-line">.</span>
            <h3 className="slogan h-animate">Testing the limits of UI/UX implementations in my quest for responsiveness and reliability.</h3>
        </div>

        <Particles className="particle-orb"/>

    </div>
    <div className="socials">
        <a href="https://linkedin.com/in/dhruv-patel-578a41176">
            <img src={lin_logo} alt="linked-in" className="l-in-img"/>
        </a>
        
        <a href="https://github.com/dhruv-patel1">
            <img src={git_logo} alt="github" className="git-img"/>
        </a>
    </div>
    </div>
);

export default Dashboard;