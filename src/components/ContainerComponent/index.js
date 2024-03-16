import React from 'react';
import './style.css';

const ContainerComponent = ({ imageCarousel1, imageCarousel2 = null, buttonsBlock }) => {
    return (
        <div className="container-component">
            {imageCarousel1}
            {imageCarousel2}
            {buttonsBlock}
        </div>
    );
};

export default ContainerComponent;
