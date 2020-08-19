import React from "react";
import contact_button from "../assets/contact-svg.svg";

const Contact = () =>(
    <div className="contact-container" id="contact">
        <div className="contact-page">
            <p className="page-title">Contact</p>
            <div className="line"></div>

            <p className="contact-text">Please feel free to reach out to me</p>
            <a href="mailto: dhruv.patel1@yahoo.com" className="contact-me-button-link">
                <img src={contact_button} alt="contact me" className="contact-me-button" />
            </a>
            
        </div>
    </div>
);

export default Contact;