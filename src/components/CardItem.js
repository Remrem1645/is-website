import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    return(
        <>
            <li className='cards__item'>
                <Link to className= 'cards__item__link'>
                    <figure className='cards__item__pic__pic-wrap'>
                        <img alt = "Images" className='cards__item__img' src='/images/1.jpg'/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text' />
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem