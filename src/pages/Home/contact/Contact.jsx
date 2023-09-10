import React from "react";
import Heading from "../heading/Heading";
import "./Contact.scss";
import {FaMessage} from "react-icons/fa6";
import {BiSolidPhoneCall} from "react-icons/bi";

const Contact = () => {
    return (
        <div className="contactContainer">
            <Heading title="Contacts" />
            <div className="sections">
                <p>I am intrusting in freelancing opportunitites. However, <br/> 
                    if you have other respect or question, don't <br/> hasitate to 
                    contact me.
                </p>
                <div className="right">
                    <div className="box">
                        <p id="pp"> Message me here</p>
                        <p>
                            <span><BiSolidPhoneCall size={'20px'} color='gray' /></span>
                            03075934897</p>
                        <a href="mailto:alishufaat@gmail.com">
                            <span><FaMessage size={'15px'} color='gray' /></span>
                            alishufaat@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;