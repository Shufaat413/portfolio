import React from "react";
import "./Banner.css"
//rafce 
const Banner = () => {
    return (
        <div className="banner">
            <div className="left">
                <h1>Shufaat is a <span>Web Developer</span> and <span>Front-End Developer</span> </h1>
                <p>He crafts responsive website where technologies meet  creativity</p>
                <a href="">Contact me!!</a>
            </div>
            <div className="right">
                <div className="top">
                    <img src={require("../../../assists/banner.png")} alt="Pic" />
                </div>
                <div className="bottom">
                    <p>Currently working on <span>Profile</span></p>
                </div>
            </div>
        </div>
    )
}
export default Banner;