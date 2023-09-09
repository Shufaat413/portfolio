import React from "react";
import "./Nav.css";

const Nav = () => {
    return (
        <nav className="nav">
            <img src="https://placehold.co/50x25" alt="" />
            <div className="navs">
                <a href="">Home</a>
                <a href="">Works</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <select name="Languages" id="Lang">
                    <option value="English">En</option>
                    <option value="Urdu">Ur</option>
                </select>
            </div>
        </nav>
    )
}
export default Nav;