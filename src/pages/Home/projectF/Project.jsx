import React from "react";
import "./Project.scss"
import Heading from "../heading/Heading";
import Card from "../../../global/components/cards/Card";

const Project = () => {
    return (
        <>
        <div className="projectContainer2">
            <div><Heading title="Projects" /></div>
            <a href="">View All ~~{">"}</a>
        </div>
        <div className="cardContainer">
        <Card 
        url={require('../../../assists/project1.jpg')}
        cached={{
          link: '',
          status: false,
        }}
        title='ChertNodes'
        description='Mine Craft Serving Hosting '
        live={{
          link: 'google.com',
          status: true,
        }}
        stack={['Html', 'Css', 'Python']}
         />
         <Card 
        url={require('../../../assists/project2.png')}
        cached={{
          link: '',
          status: false,
        }}
        title='ProtectX'
        description='Discord Anti-crash Bot '
        live={{
          link: 'google.com',
          status: true,
        }}
        stack={['React', 'Discard.js', 'Express.js', 'Node.js', "Html", "Flask", "Python",'Sass']}
         />
         <Card 
        url={require('../../../assists/project3.png')}
        cached={{
          link: '',
          status: false,
        }}
        title='Kahot Answer Viewer'
        description='Get Answer to your Kahot Quiz '
        live={{
          link: 'google.com',
          status: true,
        }}
        stack={['Css', 'Ecpress.js', 'Node.js']}
         />
        </div>
        </>
        
    )
}
export default Project;