import React from "react";
import Nav from "../../global/components/nav/Nav";
import Banner from "./banner";
import Review from "./review";
import Project from "./projectF/Project";
import Skill from "./skill/Skill";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "../../global/components/footer/Footer";

const Home = () => {
    return (
        <div className="homeContainer">
            <Nav />
            <Banner />
            <Review />
            <Project />
            <Skill />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;