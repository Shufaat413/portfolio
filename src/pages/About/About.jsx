import React from 'react'
import Nav from '../../global/components/nav/Nav'
import Title from "./../../global/components/title"
import Intro from './introduction/Intro'
import Myskill from './skill/Myskill'
import Fun from './fun/Fun'
import Footer from "./../../global/components/footer"

function About() {
  return (
    <div className='aboutContainer'>
      <Nav />
      <Title title="about-me" discribe="Who am I ?" />
      <Intro />
      <Myskill />
      <Fun />
      <Footer />
    </div>
  )
}

export default About
