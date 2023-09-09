import React from "react";
import Heading from "../heading/Heading";
import "./Skill.scss";

const Skill = () => {
    return (
        <div className="mySkills">
            <Heading title="My Skills" />
            <div className="sectionContainer">
                <div className="left">
                    <img src={require("../../../assists/Dots.png")} id="img1" />
                    <img src={require("../../../assists/Logo.png")} id="img2" />
                    <img src={require("../../../assists/Dots.png")} id="img3" />
                    <div className="box1"></div>
                    <div className="box2"></div>
                </div>
                <div className="right">
                    <div className="skillName" id="one">
                        <h6>Languages</h6>
                        <p>TypeScript Lua Python Javascript</p>
                    </div>
                    <div className="skillName" id="two">
                        <h6>Database</h6>
                        <p>SQlite PostgreSQL Mongo</p>
                    </div>
                    <div className="skillName" id="three">
                        <h6>Tools</h6>
                        <p>VScode Neovim linux Figma XFCE Arch Git FontAuesom</p>
                    </div>
                    <div className="skillName" id="four">
                        <h6>Order</h6>
                        <p>HTML CSS EJS SCSS Rest Jinja</p>
                    </div>
                    <div className="skillName" id="five">
                        <h6>FrameWorks</h6>
                        <p>React Vue Disnake Discord.js Flask Express.js </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;