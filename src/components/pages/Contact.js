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
    MoveOut
} from 'react-scroll-motion';

function Contact() {
    return (
        <div className='contact-page'>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
                        <h1 className='contact-page-title'><b>Contact Us</b></h1>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1}>
                    <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
                        <h1 className='contact-page-title'><b>Phone Number</b></h1>
                        <p className='contact-page-phonenum'>626-425-1150</p>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={2}>
                    <Animator animation={batch(Fade(), Sticky())}>
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