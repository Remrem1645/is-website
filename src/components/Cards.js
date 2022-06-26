import React from 'react'
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return(
        <div className='cards'>
            <h1>Check out these pictures</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul>
                        <CardItem />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards