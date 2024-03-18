// src/components/TextBlock/TextBlock.js
import React from 'react';
import './textBlock.css';

const TextBlock = ({ text }) => {
    return (
        <div className="text-block">
            {text}
        </div>
    );
};
export default TextBlock;