import React from 'react'
import "./Fun.scss";

function Fun() {
  return (
    <div className='funContainer'>
      <h1><span>#</span> My Fun-Facts</h1>
      <div className="fun">
        <div className="left">
            <p>I Like winter more than summer</p>
            <p>I often bike with my friends</p>
            <p>I Like <span>Pizza</span> and <span>Pasta</span></p>
            <p>I was in <span>Eygept, Poland</span>and <span>Turkey</span></p>
            <p>My favorite movies is the <span>The Avatar</span></p>
            <p>I am still in University</p>
            <p>I Don't have any siblings</p>
        </div>
        <div className="right">
            <img src={require("./../../../assists/Dots.png")} alt="" />
            <img src={require("./../../../assists/Logo.png")} id='im2'/>
        </div>
      </div>
    </div>
  )
}

export default Fun;
