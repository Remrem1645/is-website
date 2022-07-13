import React from 'react'
import Carousel from 'better-react-carousel'
import '../../App.css'
import '../pages/Gallery.css'


function Services() {
    return (
        <div className='Gallerybackground'>
            <h1 className='Gallery'>
                Gallery
            </h1>
            <Carousel cols={2} rows={1} gap={10} loop={true} autoplay={2000} className='galleryphotos'>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=1" alt=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=2" alt=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=3" alt=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=1" alt=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=2" alt=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=3" alt=''/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Services;