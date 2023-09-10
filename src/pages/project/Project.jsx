import React from "react";
import Nav from "../../global/components/nav/Nav";
import "./Project.scss";
import Title from "../../global/components/title/Title";
import ProjectO from "./myprojects/ProjectO";
import Small_P from "./smallP/Small_P";
import Footer from "./../../global/components/footer"

const Project = () => {
    return (
    <>
    <Nav />
    <Title title="Projects" discribe="List of My Projects" />
    <ProjectO />
    <Small_P />
    <Footer />
    </>
    )
}
export default Project;