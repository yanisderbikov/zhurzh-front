import React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './actionButton.css';

const ActionButton = ({ url, children }) => {
    const buttonRef = useRef();

    useEffect(() => {
        gsap.fromTo(buttonRef.current, { backgroundColor: '#007bff' }, { backgroundColor: '#0056b3', duration: 0.3, paused: true })
            .eventCallback("onEnter", () => window.location.href = url);
    }, [url]);

    return (
        <a href={url} className="action-button" ref={buttonRef}>
            {children}
        </a>
    );
};

export default ActionButton;
