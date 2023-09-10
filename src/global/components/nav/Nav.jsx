import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import {FaCodepen} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaFigma} from "react-icons/fa";


const Nav = () => {
    return (
        <nav className="nav">
            <FaCodepen size={'50px'} color='#fff' />
            <div className="navs">
                <Link to={'/'}>Home</Link>
                <Link to={'/project'}>Works</Link>
                <Link to={'/About'}>About</Link>
                <Link to={'/Contact'}>Contact</Link>

                <select name="Languages" id="Lang">
                    <option value="English">En</option>
                    <option value="Urdu">Ur</option>
                </select>
            </div>

            <div className="icons">
                <div className="line"></div>
                <a href=""><FaGithub size= {"25px"} color="gray" /></a>
                <a href=""><FaLinkedinIn size={'25px'} color='gray' /></a>
                <a href=""><FaFigma size={'25px'} color='gray' /></a>
            </div>
        </nav>
    )
}
export default Nav;