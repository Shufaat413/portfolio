import React from "react";
import "./Card.scss";

const Card = ({
    url = '',
    stack = [],
    title = 'No Title',
    description = 'HELLO DESCRIPTION',
    live = {
      link: 'https://www.google.com/',
      status: true,
    },
    cached = {
      link: 'https://www.google.com/',
      status: true,
    },
    ...props
  }) => {
    return (
      <div className='projectCardContainer'>
        <img src={url} alt='Project' />
        <div className='stack'>
          {stack.map((value, idx) => (
            <span key={idx}>{value}</span>
          ))}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='buttonContainer'>
          {live?.status && <a href={live.link}>Live {' <~~>'}</a>}
          {cached?.status && <a href={cached.link}>Cached</a>}
        </div>
      </div>
    );
  };
export default Card;