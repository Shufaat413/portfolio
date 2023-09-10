import React from 'react'
import "./Myskill.scss";

function Myskill() {
  return (
    <>
    <div className="head"><h1><span>#</span>Skills</h1></div>
    <div className='skillContainer'>
      <div className="skill">
        <h6>Languages</h6>
        <p>Typescript lua Python Javascript</p>
      </div>
      <div className="skill">
        <h6>Other</h6>
        <p>Html CSS EJS SCSS REST Jinja</p>
      </div>
      <div className="skill">
        <h6>Tools</h6>
        <p>VS Code Neovim Linux figma XFCE Arch Git Font Awesom KDE Fish </p>
      </div>
      <div className="skill">
        <h6>Database</h6>
        <p>SQlite PostgreSQL Mongo </p>
      </div>
      <div className="skill">
        <h6>FrameWorks</h6>
        <p>React VUe Disnake Discord.js Flask Express.js</p>
      </div>
    </div>
    </>
  )
}

export default Myskill;
