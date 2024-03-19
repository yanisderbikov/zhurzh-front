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
//
// import React, { useEffect, useState } from 'react';
// import './contentBlock.css';
//
// const ContentBlock = ({ leftContent = null, rightContent = null }) => {
//     const [windowHeight, setWindowHeight] = useState(window.innerHeight);
//
//     useEffect(() => {
//         const handleResize = () => {
//             setWindowHeight(window.innerHeight);
//         };
//
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);
//
//     return (
//         <div className="content-block" style={{ height: `${windowHeight}px` }}>
//             <div className="left-column" style={{flex: 1}}>
//                 {leftContent}
//             </div>
//             <div className="right-column" style={{flex: 'none', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//                 {React.cloneElement(rightContent, { style: { width: `${windowHeight}px`, height: `${windowHeight}px` } })}
//             </div>
//         </div>
//     );
// };
//
// export default ContentBlock;