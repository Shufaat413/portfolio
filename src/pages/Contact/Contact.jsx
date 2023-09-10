import React from 'react'
import Nav from '../../global/components/nav/Nav'
import Title from './../../global/components/title'
import Stay from './stay/Stay'
import Footer from './../../global/components/footer'

const Contact = () => {
  return (
    <div className='contactContainer'>
        <Nav />
        <Title title="Contacts" discribe='Stay Connect with me!' />
        <Stay />
        <Footer />
    </div>
  )
}

export default Contact
