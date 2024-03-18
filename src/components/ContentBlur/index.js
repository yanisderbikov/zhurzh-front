import React from 'react';
import './style.css'; // Убедитесь, что путь к CSS-файлу правильный


const ContentBlur = ({ children }) => {
    return (
        <div className="blur">{children}</div>
    );
};


export default ContentBlur;
