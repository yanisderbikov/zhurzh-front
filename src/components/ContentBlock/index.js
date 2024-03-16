// src/components/ContentBlock/ContentBlock.js
import React from 'react';
import './contentBlock.css';

const ContentBlock = ({ height, leftContent = null, rightContent = null }) => {
    return (
        <div className="content-block" style={{ height: `${height}px` }}>
            <div className="left-column">
                {leftContent}
            </div>
            <div className="right-column">
                {rightContent}
            </div>
        </div>
    );
};

export default ContentBlock;
