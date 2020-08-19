import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import Headroom from "react-headroom";
import BurgerMenu from "./Nav/Burger";
import logo from "../assets/scratchlogo.png";
import resume from "../assets/resume.pdf";
import about from "../assets/about.svg";
import skill from "../assets/skills.svg";
import project from "../assets/projects.svg";
import contact from "../assets/contact.svg";
import resumesvg from "../assets/cv.svg";

const Header = () =>(
    <Headroom className="h">
        <div className="header">
        <div className="content-container">
            <div className="logo-container">
                <div className="header-content">
                    <Link smooth to="/_#home" className="header-logo">
                        <img src={logo} alt="dp" className="logo"/>
                    </Link>
                    <nav>
                        <div className="nav-items">
                            <ul className="list-items">
                                <li className="header-item">
                                    <Link smooth to="/_#about" className="header-link">
                                        <img src={about} alt="" className="item-pic"/>
                                        About
                                    </Link>
                                </li>
                                <li className="header-item">
                                    <Link smooth to="/_#skills" className="header-link">
                                        <img src={skill} alt="" className="item-pic"/>
                                        Skills
                                    </Link>
                                </li>
                                <li className="header-item">
                                    <Link smooth to="/_#projects" className="header-link">
                                        <img src={project} alt="" className="item-pic"/>
                                       Projects
                                    </Link>
                                </li>
                                <li className="header-item">
                                    <Link smooth to="/_#contact" className="header-link">
                                        <img src={contact} alt="" className="item-pic"/>
                                        Contact
                                    </Link>
                                </li>
                                <li className="header-item">
                                    <a href={resume} className="header-link">
                                    <img src={resumesvg} alt="" className="item-pic"/>
                                    Resume
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <BurgerMenu/>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </div>
    </Headroom>
    
);

export default Header;