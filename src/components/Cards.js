import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return(
        <div className='cards'>
            <h1 className='title'>Check out these pictures</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul>
                        <CardItem 
                        src = 'images/1.jpg'
                        text = 'Our Location'
                        label ='Location'
                        path='/locations'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards