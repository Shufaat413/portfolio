import React from "react";
import Heading from "../heading/Heading";
import "./Contact.scss";

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
                        <p id="pp">Message me here</p>
                        <p>03075934897</p>
                        <a href="mailto:alishufaat@gmail.com">alishufaat@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;