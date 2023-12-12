import * as React from "react"

import { motion } from 'framer-motion';
const RRLogo = ({style}) => {

return (
    <motion.svg
        style={style} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="-5 -5 137.29 82.21"
    >
        <defs>
            <linearGradient id="rainbow" spreadMethod="pad">
                <stop offset="0%" stopColor="#000" />
                <stop offset="11%" stopColor="#56c4c6" />
                <stop offset="22%" stopColor="#3f78bd" />
                <stop offset="33%" stopColor="#50c5d0" />
                <stop offset="44%" stopColor="#74c69b" />
                <stop offset="55%" stopColor="#b1b172" />
                <stop offset="66%" stopColor="#e09654" />
                <stop offset="77%" stopColor="#e3b85a" />
                <stop offset="88%" stopColor="#e18579" />
                <stop offset="99%" stopColor="#000" />
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
        <mask id="dj-mask">
        <path
            fill="none"
            stroke="white"
            strokeWidth="2"
            initial="hidden"
            animate="visible"
            filter="url(#glow)"
            d="M44.18.5H.5v71.21h42.35l19.59-19.59V18.76Zm2.14 42.09-8.11 8.12H19.85l-.35-29.47h18.18l8.64 8.64ZM72.97.59l.18 18.44h19.51v34.01H66.12v17.27h44.24V19.03h16.43V.59H72.97z"
        />
        </mask>
      </defs>
      <rect width="120%" height="120%" fill="url(#rainbow)" mask="url(#dj-mask)" y="-10%" x="-10%" />
    </motion.svg>
  );
};

export default RRLogo

