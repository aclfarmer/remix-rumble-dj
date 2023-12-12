import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const flickerAnimation = {
  hidden: { opacity: 0.3 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.05,
      yoyo: Infinity,
    }
  }
};

const RRLogo = ({style}) => {

  const [isFlickering, setFlickering] = useState(false);

  useEffect(() => {
    const toggleFlickering = () => {
      setFlickering(flickering => !flickering);
      const nextToggle = Math.random() * 1000;
      setTimeout(toggleFlickering, nextToggle);
    };
  
    const initialDelay = setTimeout(toggleFlickering, 2000);
  
    return () => {
      clearTimeout(initialDelay);
      clearTimeout(toggleFlickering);
    };
  }, []);


  return (
    <motion.svg
      style={style} 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5 -5 508.71 175.47"
    >
        <defs>
        <linearGradient id="rainbow" spreadMethod="pad">
          <stop offset="0%" stopColor="#69c4a7" />
          <stop offset="11%" stopColor="#56c4c6" />
          <stop offset="22%" stopColor="#3f78bd" />
          <stop offset="33%" stopColor="#50c5d0" />
          <stop offset="44%" stopColor="#74c69b" />
          <stop offset="55%" stopColor="#b1b172" />
          <stop offset="66%" stopColor="#e09654" />
          <stop offset="77%" stopColor="#e3b85a" />
          <stop offset="88%" stopColor="#e18579" />
          <stop offset="99%" stopColor="#e08187" />
        </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="20" result="turbulence" seed="5"/>
                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="blurred" in2="turbulence" result="glow"/>
                <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
                </feMerge>
          </filter>
        <mask id="logo-mask">
          <motion.path
            fill="none"
            stroke="white"
            strokeWidth="2"
            initial="hidden"
            animate={isFlickering ? "visible" : "hidden"}
            variants={flickerAnimation}
            filter="url(#glow)"
            d="M171.88 49.41v12.88h-6V51.18s-2.47-8.12-12.35-8.12H150v-2.12s15.88 1.77 17.82-11.12V16.94s-1.06-9.53-12.17-12.18-64.24-1.23-64.24-1.23v17.12h4.94s3.89.35 3.36 5.47 0 27.53 0 27.53a4.22 4.22 0 0 1-4.24 3.53h-3.18v17.29h42.53V57.88s-6.53 0-7.41-3.88v-8.65h5.83s4.94.53 4.94 4.94v15.53s.35 9.18 10.58 10.59H165s11.29-1.94 11.65-11.65V49.41Zm-31.67-18.26c0 4.85-5.39 5.38-5.39 5.38h-6.17V21.18l7.19.22c3.92 0 4.37 4.36 4.37 4.36ZM188.82 9v63h12.71V45.88a1.56 1.56 0 0 1 1.59-1.59h13.59V34.06h-14.12a1.3 1.3 0 0 1-1.33-1.32V8.82Z"
          />
          <path
            fill="none"
            stroke="white"
            strokeWidth="2"
            initial="hidden"
            animate="visible"
            filter="url(#glow)"
            d="M204.71 8.65v9.88h12.53V8.47l-12.53.18zM204.35 62.29V72h13.24v-9.88l-13.24.17zM227.82 9.18v67.06h12.89V34.41l24 40.06s4.58 5.65 10.23 0l22.94-40.59v42h13.59V11.35a8.18 8.18 0 0 0-3.24-6.67c-2.39-1.73-5.9-2.23-9.82 3.79-7.23 11.12-27.35 48.35-27.35 48.35s-1.24 1.94-3.18 0S240 8.29 240 8.29s-2.29-5.82-9-3.53a5.77 5.77 0 0 0-3.18 4.42ZM323.65 10.23v70.24h14.82V.18l-14.82 10.05zM351 0h11.12v22.59H351zM362.65 23.47h11.29v10.59h-11.29zM374.12 34.94h10.94v10.41h-10.94zM385.94 23.29h10.94v10.59h-10.94zM398.12.18h10.24v22.06h-10.24zM386.47 46.94h10.59V57h-10.59zM363.18 46.59h10.41v10.59h-10.41zM351.18 58.41h10.76v22.41h-10.76zM398.12 58.59h10.94v21.88h-10.94zM78 151.76l-2.47 2.3s-6.53 1.23-7.77-9.53a106.13 106.13 0 0 0-3.88-18.88s-2.64-6.89-10.23-7.24v-1.59s13.76-4.06 14.64-15.53-2.47-13.41-2.47-13.41a24.19 24.19 0 0 0-13.94-7.94L39 87.53 37.76 87l-.17-6.88-2.12-.36.53 9.89-4.59 2.64-17.47-12.53L0 92.47s5.29-3.35 8.82-.71 9.89 6.89 9.89 6.89l-.53 12.53s-1.24 2.82-3.71 2.11-9 7.42-9 7.42L4.24 129s5.11-3.53 8.64-4.06H18v16.77s1.24 5.11-17.29 21.35l.35 1.06s5.12-3.18 6.35-3.18 15.88-1.06 21.71 2.12 8.12 2.29 8.12 2.29l10.41-13.94-.89-1.41-3.35 3.88-5.65-1.76v-25.94s3.53-2.3 8.83 0 6.7 13.94 6.7 13.94-1.58 21 11.47 24.35c0 0 3.71.71 5.65.88l8.83-11.29Zm-42-.35c-.88.35-4.76-.53-4.76-.53a92.23 92.23 0 0 0-12.71-1.23c12.71-8.65 12.71-16.77 12.71-16.77V95.47L36 92.29s.88 58.77 0 59.12Zm7.94-30.35L39 123.53l-.88-.53V90.71l4.41-2.47s10.76 1.05 12.53 13.23-11.12 19.59-11.12 19.59ZM76.59 87.18v46.23s3.17 25.59 43.23 24.53 40.24-26.12 40.24-26.12V87.18h-20.82v39.17s-2.48 13.41-18.89 11.83S102.88 126 102.88 126V87.18Z"
          />
          <path
            fill="none"
            stroke="white"
            strokeWidth="2"
            initial="hidden"
            animate="visible"
            filter="url(#glow)"
            d="M174.18 83.12s9.17.53 9.35 4.06-18.71 66.53-18.71 66.53-2.64 8.47-9.17 8.29l-.36 1.76h23.47V162s-7.41 1.24-8.29-6.35l15.71-59.47 10.41 67.41a1.34 1.34 0 0 0 1.94 0c1-1 49.41-68.83 49.41-68.83l-17.47 63.36a15.23 15.23 0 0 1-10.59 4.41v1.23h34.24v-1s-9 .53-10.59-6l18.71-67.24s1.41-6.35 8.82-6.18v-1.63h-20.82l-44 61.05s-1.58 3-2.11-4.58l-7.94-56.3h-22.37ZM274.59 91.59v62.12h1.59v-45.53s.53-3 5.82-2.65 50.12 0 50.12 0 3.88 1.76 0 3h-43.24s-8 1.23-8 8v13.68s1 7.41 10.86 7.41h40.76s1.41 0 1.41 1.23a1.34 1.34 0 0 1-1.06 1.41h-52.44v13.59h48s7.59-1.06 8.65-8.64a38.16 38.16 0 0 0 0-12.36s.53-5.29-8.56-8.56h-44.21s-2.29-2 0-2.91 43.59 0 43.59 0 9.36-1.41 9.36-9.35v-12s.88-8.12-8.12-8.12-54.53-.32-54.53-.32ZM348.18 91.76c.7 0 5.64 2.83 5.64 2.83v55.59L349 155h49.15v-14.35l-25.77 11.11h-4.41v-57l5.65-3.35ZM490.24 127.94s-24.89 24.18-64.06 26.3c0 0-30.36 1.41-8.47-15.89s68.47-27.53 68.47-27.53a7.81 7.81 0 0 0-2.65-8.47c-4.41-3.53-37.94-3.17-37.94-3.17s-9.35-1.77 11.12-4.59 33.7-.71 33.7-.71-4.23 2.65-5.12 2.65 12.36 1.41 12.36 1.41l1.06-2.12-2.3-11.11s-.17-2.65-2.29-3.18-46.94 0-58.77 10.41a4.65 4.65 0 0 0-1.76 5.82c1.41 4.06 3.17 5.3 3.17 5.3s-.88 1.76 13.24 1.41l19.94.18s-38.65 8.82-56.12 27.35-3.53 32.82 16.59 31.94 40.06-14.82 40.06-14.82 16.77-11.47 19.59-17.12Z"
          />
        </mask>
      </defs>
        
      <rect width="120%" height="120%" fill="url(#rainbow)" mask="url(#logo-mask)" y="-10%" x="-10%" />
    </motion.svg>
    );
};

export default RRLogo
