import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src=''autoPlay loop muted /> */}
      <h1 className='hero-company-name'>IS Beauty Lash Salon</h1>
      <p>Eyelash Service</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          redirect='/services'
        >
          SERVICES
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          redirect='/locations'
        >
          LOCATION
        </Button>
      </div>
    </div>
  )
}

export default HeroSection