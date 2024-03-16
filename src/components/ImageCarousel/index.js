// ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';

const ImageCarousel = ({ images }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        pauseOnHover: false,
    };

    return (
        <div className="image-carousel-container">
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div key={idx} className="image-carousel-slide">
                        <img src={img} alt={`Slide ${idx}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;