import React from 'react'
import "./Intro.scss";

function Intro() {
  return (
    <div className='introContainer'>
      <div className="discript">
        <p id='p1'>Hello, I am Shufaat Ali Toori!</p>
        <p>I’m a self-taught front-end developer
            based in Kyiv, Ukraine. I can develop 
            responsive websites from scratch and 
            raise them into modern user-friendly web 
            experiences. 
        </p>
        <p>
        Transforming my creativity and knowledge into 
        a websites has been my passion for over a year. 
        I have been helping various clients to establish 
        their presence online. I always strive to learn 
        about the newest technologies and frameworks.
        </p>
      </div>
      <div className="pic">
      <img src={require("../../../assists/aboutme.png")} alt="Pic" />
      </div>
    </div>
  )
}

export default Intro;
