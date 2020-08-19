import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import styled from "styled-components";
import resume from "../../assets/resume.pdf";
import about from "../../assets/about.svg";
import skill from "../../assets/skills.svg";
import project from "../../assets/projects.svg";
import contact from "../../assets/contact.svg";
import resumesvg from "../../assets/cv.svg";

const Items = styled.ul`
    list-style: none;
    display: none;
    flex-flow: row nowrap;
    z-index:5;
    
    @media (min-height: 623px){
        padding-top: 40px;
    }

    li {
        padding: 20px 10px;
        display: flex;
        justify-content:center;

        @media (max-height: 568px){
            padding: 10px 5px;
        }
        @media (max-width: 519px){
            padding: 6px 5px;
        }

    }

    @media (max-width: 45rem) {
        flex-flow: column nowrap;
        background-color: black;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: -30px;
        right: 0;
        height: 100vh;
        width: 22vw;
        padding-top: 10rem;
        padding-right: 3rem;
        transition: transform 0.3s ease-in-out;
        display: ${({open}) => open ? 'flex' : 'none'};

        @media (max-width: 320px){
            padding-top: 6.5rem;
        }
 
 

    li {
        color: #fff;
    }

    @media (max-width: 401px){
        width: 8vw;
        
    }

}
`;

const RightNav = ({open, handleClose}) =>{
    return(
        <Items open={open} className="side-items" >
            <li>
                <Link smooth to="/_#about" className="header-link-right" onClick={handleClose}>
                    <img src={about} alt="" className="item-pic right"/>
                    <p className="side-item">About</p>
                </Link>
            </li>
            <li>
                <Link smooth to="/_#skills" className="header-link-right" onClick={handleClose}>
                    <img src={skill} alt="" className="item-pic right"/>
                    <p className="side-item">Skills</p>
                </Link>
            </li>
            <li>
                <Link smooth to="/_#projects" className="header-link-right" onClick={handleClose}>
                    <img src={project} alt="" className="item-pic right"/>
                    <p className="side-item">Projects</p>
                </Link>
            </li>
            <li>
                <Link smooth to="/_#contact" className="header-link-right" onClick={handleClose}>
                    <img src={contact} alt="" className="item-pic right"/>
                    <p className="side-item">Contact</p>
                </Link>
            </li>
            <li>
                <a href={resume} className="header-link-right">
                    <img src={resumesvg} alt="" className="item-pic right"/>
                    <p className="side-item">Resume</p>
                </a>
            </li>
        </Items>
    
    );
}

export default RightNav;