import React from 'react'
import '../../App.css'
import './Contact.css'
import {
    Animator,
    batch,
    Fade,
    ScrollPage,
    ScrollContainer,
    Sticky,
    Move
} from 'react-scroll-motion';

function Contact() {
    return (
        <div className='contact-page'>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <h1 className='contact-page-title'><b>Contact Us</b></h1>
                        <p className='contact-page-phonenum'>(626) 866-3402</p>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1}>
                    <Animator animation={batch(Move(), Sticky(), Fade())}>
                        <h1 className='contact-page-title'><b>Hours Of Operation</b></h1>
                        <p className='contact-page-hours'>
                            Mon: 10:00 AM - 6:00 PM <br></br>
                            Tue: 10:00 AM - 6:00 PM <br></br>
                            Wed: 10:00 AM - 6:00 PM <br></br>
                            Thu: 10:00 AM - 6:00 PM <br></br>
                            Fri: 10:00 AM - 6:00 PM <br></br>
                            Sat: 10:00 AM - 6:00 PM <br></br>
                            Sun: 10:00 AM - 6:00 PM <br></br>
                        </p>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
        </div>
    )
}


export default Contact;