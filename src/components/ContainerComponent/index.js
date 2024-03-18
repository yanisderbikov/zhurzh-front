import React from 'react';
import './style.css';

const ContainerComponent = ({imageCarousel1, imageCarousel2 = null, buttonsBlock}) => {
    return (
        <div className="container-component">
            {imageCarousel1}
            {imageCarousel2}
            <div className={"buttons-overlay"}>
                    {buttonsBlock}
            </div>
        </div>
    )
    ;
};

export default ContainerComponent;
