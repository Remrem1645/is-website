import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);

    const handleClick = () => { setClick(!click) }
    const closeMobileMenu = () => { setClick(false) }

    const showButton = () => { 
        if(window.innerWidth <= 960) {
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
{/*                     <Link to='/' className='navbar-logo'>
                        <img src='/images/logo.png' alt='' width="70" height="60" />  
                    </Link> */}
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to = '/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to = '/locations' className='nav-links' onClick={closeMobileMenu}>
                                Location
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to = '/gallery' className='nav-links' onClick={closeMobileMenu}>
                                Gallery
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to = '/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to = '/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' redirect = '/contact'>CONTACT US</Button>}
                </div>
            </nav>
        </>
    )

}
export default Navbar