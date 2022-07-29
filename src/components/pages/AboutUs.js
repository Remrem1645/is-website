import React from 'react'
import './AboutUs.css'

function AboutUs() {
    return (
        <div className='about-us-page'>
            <div className='about-us-logo'>
                <img src='/images/logoMainPage.png' alt='' width="243.2" height="215.65"  />
            </div>
            <div className='about-us-para-box'>
                <p className='about-us-para'>
                    Nestled in the heart of Temple City, we at I.S Beauty Lash Salon pride ourselves in having a fantastic team that offers incredible
                    treatments and unbeatable customer service at rates we can stand behind. We’ve been a mainstay for those who value top-notch services
                    at affordable prices since 2022.
                    <br></br>
                    <br></br>
                    What started off as a small Salon has grown significantly in both size and reputation. Stop by today or book an appointment with one
                    of our fabulous crew members, and find out why our clients come back time and again.
                </p>
            </div>
        </div>
    )

}

export default AboutUs;