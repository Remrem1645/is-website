import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='contact-page'>
            <h2 className='contact-us-text'>Contact US</h2>
            <p className='contact-us-text'>
                (626) 866-3402
            </p>
            <div className='google-maps-wrap'>
                <div className='embed-responsive'>
                    <iframe title='map' className='embed-responsive-item' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d378.7412222618432!2d-118.04860109088295!3d34.09100093417931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2da695213a84d%3A0x32fd206d1f9248c5!2s4808%20Baldwin%20Ave%20%23103%2C%20Temple%20City%2C%20CA%2091780!5e0!3m2!1sen!2sus!4v1656307299620!5m2!1sen!2sus" />
                </div>
            </div>
            <div className='contact-page-blocks'>
                <span>
                    <a href="https://u.wechat.com/kHiukVMricQxDu36sAXeX9o" target="_blank" rel="noreferrer">
                        <img src='/images/wechat.png' alt='' width="200" height="350" className='blocks-1' />
                    </a>
                </span>
                <span>
                    <a href="https://www.instagram.com/isbeautylashsalon/" target="_blank" rel="noreferrer">
                        <img src='/images/insta.png' alt='' width="200" height="350" className='blocks-1' />
                    </a>
                </span>
            </div>
            <div className='contact-page-times'>
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
            </div>
            <div>
                <p className='location-link-para'>
                    <a href="https://www.google.com/maps/place/4808+Baldwin+Ave,+Temple+City,+CA+91780/@34.091079,-118.0508095,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2da6951f72fbb:0xae17365d6d18b47f!8m2!3d34.0910746!4d-118.0486155" className='location-link' target="_blank" rel="noreferrer">
                        4808 Baldwin Ave Ste 103 Temple City, CA 91780
                    </a>
                </p>
            </div>
        </div>
    )
}


export default Contact;
