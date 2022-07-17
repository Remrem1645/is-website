import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='bg'>
      <div className='hero-container'>
        <img src='/images/logoMainPage.png' alt='' width="486.4" height="431.36" className='logoHeroSection' />
        <h1 className='hero-company-name'>IS Beauty Lash Salon</h1>
        <p>Eyelash Service</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            redirect='/gallery'
          >
            GALLERY
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
    </div>
  )
}

export default HeroSection