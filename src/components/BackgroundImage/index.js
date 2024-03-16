// src/components/BackgroundImage/BackgroundImage.js
import React from 'react';
import './backgroundImage.css';

const BackgroundImage = ({ imageUrl }) => {
    return (
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
    );
};

export default BackgroundImage;
