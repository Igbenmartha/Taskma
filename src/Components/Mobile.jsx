import React, { useEffect, useState } from 'react';

const MobileOnly = ({ children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile ? children : <h1>This site is only accessible on mobile devices.</h1>;
};

export default MobileOnly;
