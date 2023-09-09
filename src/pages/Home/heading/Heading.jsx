import React from "react";
import "./Heading.scss"

const Heading = (props) => {
    return (
        <div className="contentHeading">
            <h3>{props.title}</h3>
        </div>
    )
}
export default Heading;