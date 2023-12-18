import React, { useEffect, useContext } from 'react';
import FlameColorContext from './FlameColorContext';

import './SwitchTransitions.css';

const Flames = () => {
    const { flameColors } = useContext(FlameColorContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const blob = document.createElement('div');
      blob.className = 'blob';
      blob.style.left = `${Math.random() * 100}vw`;
      blob.style.animationDuration = `${Math.random() * 3 + 2}s`;
      blob.style.animationDelay = `${Math.random() * 2}s`;
      blob.style.width = `${Math.random() * 150 + 50}px`;
      blob.style.height = blob.style.width;
      blob.style.background = flameColors[Math.floor(Math.random() * flameColors.length)];
      document.body.appendChild(blob);

      setTimeout(() => {
        blob.remove();
      }, 5000);
    }, 500); // New blob every 250ms

    // Clean up interval on component unmount
    return () => {
        clearInterval(intervalId);
      };
    }, [flameColors]); 

  return <div></div>;
};

export default Flames;