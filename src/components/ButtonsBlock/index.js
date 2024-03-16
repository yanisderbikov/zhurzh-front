import React from 'react';
import './buttonsBlock.css'; // Убедитесь, что путь к CSS-файлу правильный
import '../../styles/BlurMask.css';


const ButtonsBlock = ({ children }) => {
    return (
        // <div className="blur-mask">
            <div className="buttons-block">{children}</div>
        // </div>
    );
};


export default ButtonsBlock;
