import React from 'react'
import '../../App.css'
import '../pages/Gallery.css'
import ImageGallery from 'react-image-gallery'


const images = [
    {
      original: 'https://s3-media0.fl.yelpcdn.com/bphoto/-KzsSeqVLb7WCwY8jVsDDA/o.jpg',
      thumbnail: 'https://s3-media0.fl.yelpcdn.com/bphoto/-KzsSeqVLb7WCwY8jVsDDA/o.jpg',
    },
    {
      original: 'https://s3-media0.fl.yelpcdn.com/bphoto/fZqo8g0XGJc7n-4K76Ubig/o.jpg',
      thumbnail: 'https://s3-media0.fl.yelpcdn.com/bphoto/fZqo8g0XGJc7n-4K76Ubig/o.jpg',
    },
    {
      original: 'https://s3-media0.fl.yelpcdn.com/bphoto/XVNHBMfnxnyOSjv3ojlgwg/o.jpg',
      thumbnail: 'https://s3-media0.fl.yelpcdn.com/bphoto/XVNHBMfnxnyOSjv3ojlgwg/o.jpg',
    },
    {
        original: 'https://s3-media0.fl.yelpcdn.com/bphoto/Bbm2CLyZ-y73sHhhPo09Lw/o.jpg',
        thumbnail: 'https://s3-media0.fl.yelpcdn.com/bphoto/Bbm2CLyZ-y73sHhhPo09Lw/o.jpg',
    },
    {
        original: 'https://s3-media0.fl.yelpcdn.com/bphoto/X37uoSmVcYf8hsif8E80wA/o.jpg',
        thumbnail: 'https://s3-media0.fl.yelpcdn.com/bphoto/X37uoSmVcYf8hsif8E80wA/o.jpg',
    },
    {
        original: 'https://s3-media0.fl.yelpcdn.com/bphoto/9Lms3cHOpn5Iotm8usEeNw/o.jpg',
        thumbnail: 'https://s3-media0.fl.yelpcdn.com/bphoto/9Lms3cHOpn5Iotm8usEeNw/o.jpg',
    },
    {
        original: 'https://s3-media0.fl.yelpcdn.com/bphoto/0nePbwWzNI10UBgzgGxCNA/o.jpg',
        thumbnail: 'https://s3-media0.fl.yelpcdn.com/bphoto/0nePbwWzNI10UBgzgGxCNA/o.jpg',
    },
    {
        original: 'https://s3-media0.fl.yelpcdn.com/bphoto/TAf_3jJnQzNQkR0bnsMDBw/o.jpg',
        thumbnail: 'https://s3-media0.fl.yelpcdn.com/bphoto/TAf_3jJnQzNQkR0bnsMDBw/o.jpg',
    },
    {
        original: 'https://s3-media0.fl.yelpcdn.com/bphoto/4bA2HJ-FAKYv0OKfYP7ODw/o.jpg',
        thumbnail: 'https://s3-media0.fl.yelpcdn.com/bphoto/4bA2HJ-FAKYv0OKfYP7ODw/o.jpg',
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