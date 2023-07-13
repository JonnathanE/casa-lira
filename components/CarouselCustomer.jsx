'use client'
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselCustomer = ({images_galary}) => {
    return (
        <Carousel showArrows={true} autoPlay infiniteLoop swipeable={true} showStatus={false} showThumbs={false} useKeyboardArrows={true} stopOnHover={true} dynamicHeight={true} emulateTouch={true}>
            {images_galary?.map((image, index) => (
                <div key={index}>
                    <img src={image.url_image} alt={image.title_image}/>
                </div>
            ))}
        </Carousel>
    );
}

export default CarouselCustomer;
