import React, { useEffect, useRef, useState } from 'react';
import './Spotlight.css'; // Import your CSS file

const Spotlight: React.FC = () => {
    const spotlightRef = useRef<HTMLDivElement | null>(null);
    const [spotlightPosition, setSpotlightPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (spotlightRef.current) {
                setSpotlightPosition({
                    x: e.pageX - (spotlightRef.current?.offsetWidth ?? 0) / 2,
                    y: e.pageY - (spotlightRef.current?.offsetHeight ?? 0) / 2,
                });
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="spotlight"
            ref={spotlightRef}
            style={{ left: spotlightPosition.x, top: spotlightPosition.y }}
        />
    );
};

export default Spotlight;
