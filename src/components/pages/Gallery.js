import React from 'react'
import '../../App.css'
import '../pages/Gallery.css'
import ImageGallery from 'react-image-gallery'


const images = [
    {
        original: 'https://s3-media0.fl.yelpcdn.com/bphoto/-KzsSeqVLb7WCwY8jVsDDA/o.jpg',
    },
    {
        original: 'https://s3-media0.fl.yelpcdn.com/bphoto/fZqo8g0XGJc7n-4K76Ubig/o.jpg',
    },
    {
        original: 'https://s3-media0.fl.yelpcdn.com/bphoto/XVNHBMfnxnyOSjv3ojlgwg/o.jpg',
    },
    {
        original: 'https://s3-media0.fl.yelpcdn.com/bphoto/Bbm2CLyZ-y73sHhhPo09Lw/o.jpg',
    },
    {
        original: 'https://s3-media0.fl.yelpcdn.com/bphoto/X37uoSmVcYf8hsif8E80wA/o.jpg',
    },
    {
        original: 'https://s3-media0.fl.yelpcdn.com/bphoto/9Lms3cHOpn5Iotm8usEeNw/o.jpg',
    },
    {
        original: 'https://s3-media0.fl.yelpcdn.com/bphoto/4bA2HJ-FAKYv0OKfYP7ODw/o.jpg',
    },
    {
        original: 'https://s3-media0.fl.yelpcdn.com/bphoto/-KzsSeqVLb7WCwY8jVsDDA/o.jpg',
    },
    {
        original: 'https://s3-media0.fl.yelpcdn.com/bphoto/717A50Yb0pSB3mDrKZZT9A/o.jpg',
    },
    {
        original: 'https://s3-media0.fl.yelpcdn.com/bphoto/eDHdM2Fsq6uw_4iOgtMTkw/o.jpg',
    },
    {
        original: 'https://s3-media0.fl.yelpcdn.com/bphoto/VW08v_JV-9KV10lB3dky5Q/o.jpg',
    },
];



function Gallery() {
    return (
        <div className='Gallerybackground'>
            <ImageGallery items={images} className='galleryphotos' showThumbnails={false}/>;
        </div>
    )
}

export default Gallery