import React from 'react'
import "./Title.scss";

function Title(props) {
  return (
    <div className='titleContainer'>
      <h1><span>/</span> {props.title}</h1>
      <p>{props.discribe}</p>
    </div>
  )
}

export default Title;
