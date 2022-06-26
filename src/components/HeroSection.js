import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src=''autoPlay loop muted /> */}
      <h1>Is Beauty Lash Salon</h1>
      <p>Eyelash Service</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CONTACT US
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          MORE INFO
        </Button>
      </div>
    </div>
  )
}

export default HeroSection