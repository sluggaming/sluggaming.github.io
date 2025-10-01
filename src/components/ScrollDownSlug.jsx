import React, { useEffect, useRef, useState } from 'react';

const ScrollDownSlug = () => {
    const [visible, setVisible] = useState(true);
    const timeoutRef = useRef(null);
    const idleTimeoutRef = useRef(null);
    const lastScrollY = useRef(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY !== lastScrollY.current) {
                setVisible(false);
                clearTimeout(timeoutRef.current);
                timeoutRef.current = setTimeout(() => {
                    lastScrollY.current = window.scrollY;
                }, 500);
                clearTimeout(idleTimeoutRef.current);
                idleTimeoutRef.current = setTimeout(() => {
                    setVisible(true);
                }, 3000);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutRef.current);
            clearTimeout(idleTimeoutRef.current);
        };
    }, []);

    return visible ? (
        <div style={{position: 'fixed', left: '50%', bottom: '32px', transform: 'translateX(-50%)', zIndex: 50}} className="flex flex-col items-center pointer-events-none">
            <img src={require('../images/Navigation Component/Slug.png')} alt="Scroll Down Slug" className="w-16 h-16 animate-rotate-slug mb-2" />
            <span className="text-white font-barlow-condensed text-lg">Scroll Down!!</span>
        </div>
    ) : null;
};

export default ScrollDownSlug;
