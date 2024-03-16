import React, { useState, useEffect } from 'react';

const ParallaxComponent = ({ imageUrl, speed = 0.05 }) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(document.documentElement.scrollTop || document.body.scrollTop);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    // Здесь можно добавить дополнительную логику для "других объектов",
    // которые вы хотите включить в параллакс-эффект.

    return (
        <div style={{
            position: 'relative',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${offset * speed}px)`,
            height: '500px' // Здесь высота указана как строка
        }}>
            {/* Здесь можно разместить дополнительный контент, который будет двигаться вместе с картинкой */}
        </div>
    );
};

export default ParallaxComponent;
