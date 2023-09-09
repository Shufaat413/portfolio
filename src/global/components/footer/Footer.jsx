import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <>
        <div className="footerContainer">
            <div className="left">
                <span>Shufaat Ali</span><a href="mailto:alishufaat@gmail.com">alishufaat@gmail.com</a>
                <p>We design it and develope Front-end and back-end it</p>
            </div>
            <div className="right">
                <p>Media</p>
            </div>
        </div>
        <p id="fot-p">&copy; Copyright 2023, Made by Shufaat Ali </p>
        </>
    )
}

export default Footer;