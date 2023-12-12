import { motion } from 'framer-motion';


const LogoUnderline = ({style, pathVariants}) => {
    return (
    <motion.svg 
        style={style} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 525.12 29.12"
        >
            <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
                <mask id="logo-underline">
                    <motion.path 
                        d="M40.38 14.32h445.41" 
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        variants={pathVariants}
                        initial="hidden"
                        animate="visible"
                        filter="url(#glow)"
                    />
                    
                    <motion.circle 
                        id="circle-left"
                        filter="url(#glow)"
                        cx={14.56} 
                        cy={14.56} 
                        r={5.00} 
                        fill="white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ 
                            delay: 3.1, 
                            duration: 1 }}
                         />
                    <motion.circle 
                        id="circle-left-pulse" 
                        cx={14.56} 
                        cy={14.56} 
                        r={5.00} 
                        fill="none" 
                        stroke="white"
                        animate={{ 
                            r: [5, 10],
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            delay: 3.1,
                            duration: 2,
                            repeat: Infinity
                          }}
                        />

                    <motion.circle 
                        id="circle-right"
                        filter="url(#glow)"
                        cx={510.56} 
                        cy={14.56} 
                        r={5.00} 
                        fill="white" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ 
                            delay: 3.1, 
                            duration: 1 }}
                         />

                    <motion.circle
                        id="circle-right-pulse" 
                        cx={510.56} 
                        cy={14.56} 
                        r={5.00} 
                        fill="none" 
                        stroke="white"
                        animate={{ 
                            r: [5, 10],
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            delay: 3.1,
                            duration: 2,
                            repeat: Infinity
                          }}
                        />
                </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#rainbow)" mask="url(#logo-underline)" />
    </motion.svg>
    )
}
export default LogoUnderline
