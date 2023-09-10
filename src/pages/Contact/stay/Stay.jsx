import React from "react";
import "./Stay.scss";
import { FaFacebook } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import {FaGithub} from "react-icons/fa";

function Stay() {
  return (
    <>
      <div className="contactContainer">
        <div className="stay">
          <p>
            I'm intrusting in freelancing opportunitites. However, <br />
            if you have other respect or question, don't <br /> hasitate to
            contact me.
          </p>
          <div className="support">
            <p>Suppert Me on here </p>
            <p id="p2">123444548991203434534</p>
          </div>
          <div className="support">
            <p>Message Me on Here </p>
            <a href="">
              <span>
                <FaFacebook size={"25px"} color="gray" />
              </span>
              Facebook
            </a>
            <a href="mailto:alishufaat@gmail.com">
              <span>
                <FaMessage size={"15px"} color="gray" />
              </span>
              alishufaat@gmail.com
            </a>
          </div>
        </div>
        <div className="media1">
            <h1><span>#</span> Media</h1>
            <div className="medIcons">
                <a href=""><FaFacebook size={"25px"} color="gray" />Facebook</a>
                <a href=""><FaGithub size= {"25px"} color="gray" />Github</a>
            </div>
        </div>
      </div>
    </>
  );
}

export default Stay;
