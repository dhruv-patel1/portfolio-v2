import React from "react";
import dev from "../assets/skill_icons/development.svg";
import java_img from "../assets/skill_icons/java.svg";
import pyth_img from "../assets/skill_icons/python.svg";
import react_img from "../assets/skill_icons/react.svg";
import js_img from "../assets/skill_icons/js.svg";
import html_img from "../assets/skill_icons/html5.svg";
import css_img from "../assets/skill_icons/css3.svg";
import sass_img from "../assets/skill_icons/sass.svg";
import node_img from "../assets/skill_icons/node.svg";
import sql_img from "../assets/skill_icons/sql.svg";
import design from "../assets/skill_icons/design.svg";
import test from "../assets/skill_icons/test.svg";
import tools from "../assets/skill_icons/tools.svg";

const Skills = () =>(
    <div className="container" id="skills">
        <div className="skills-page">
            <p className="page-title">Skills</p>
            <div className="line"></div>

            <div className="all-skills">
            <div className="dev-skills">
                <div className="dev-skills-title">
                    <img src={dev} alt="" className="dev-icon"/>
                    <p className="dev-title">Development</p>
                </div>

                <div className="skills-icons">
                    <div className="icon-holder-row">
                        <img className="icon" src={java_img} alt=""/>
                        <img className="icon" src={pyth_img} alt=""/>
                        <img className="icon" src={react_img} alt=""/>
                    </div>
                    <div className="icon-holder-row-2">
                        <img className="icon" src={js_img} alt=""/>
                        <img className="icon" src={html_img} alt=""/>
                        <img className="icon" src={css_img} alt=""/>
                    </div>
                    <div className="icon-holder-row-3">
                        <img className="icon" src={sass_img} alt=""/>
                        <img className="icon" src={node_img} alt=""/>
                        <img className="icon" src={sql_img} alt=""/>
                    </div>
                </div>
            </div>

            <div>
                <div className="more-skills">
                    <div className="design-skills">
                        <div className="design-title">
                            <img className="design-icon" src={design} alt=""/>
                            <p className="dev-title">Design</p>

                            <div className="design-items">
                                <p className="d-item">- Figma</p>
                                <p className="d-item">- UML</p>
                            </div>
                        </div>
                    </div>

                    <div className="testing-skills">
                        <div className="design-title">
                            <img className="design-icon" src={test} alt=""/>
                            <p className="dev-title">Testing</p>

                            <div className="design-items">
                                <p className="d-item">- JUnit</p>
                                <p className="d-item">- Jest</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tools">
                    <div className="dev-skills-title">
                        <img src={tools} alt="" className="dev-icon"/>
                        <p className="dev-title">Toolkit</p>

                        <div className="tool-items">
                                <p className="t-item">- Git/Github</p>
                                <p className="t-item">- Chrome DevTools</p>
                                <p className="t-item">- React DevTools</p>
                            </div>
                    </div>
                </div>
            </div>

            </div>

            
            
        </div>
    </div>
);

export default Skills;