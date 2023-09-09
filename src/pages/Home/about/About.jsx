import React from "react";
import Heading from "../heading/Heading";
import "./About.scss";

const About = () => {
    return (
        <div className="aboutContainer">
            <Heading title="About-me" />
            <div className="discribe">
                <div className="left">
                    <p>Hello!. I am <span>Shufaat Ali</span></p>
                    <p>I'm a self-taught front-end Developer Based in Lahore, 
                        Pakistan. I can Develope Responsive Websites from 
                        scratch and rasie into modern user-friendly web experiences</p>
                    <p>Transforming my creativity and knowledge into a Websites has 
                        been my passion for over a year. Ihave been helping various 
                        clients to establish their presence online. I always strive 
                        to learne about the newest technologies and frameworks</p>
                    <a href="">Read More ~~{">"}</a>
                </div>
                <div className="right">
                    <img src={require("../../../assists/aboutme.png")} alt="" />
                    <img src={require("../../../assists/Dots.png")} id="img2" />
                    <img src={require("../../../assists/Dots.png")} id="img3" />
                </div>
            </div>
        </div>
    )
}

export default About;