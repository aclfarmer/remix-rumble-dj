import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css'

import RRLogo from './svg/RRLogo'
import DJ from './svg/DJ'
import LogoUnderline from './svg/LogoUnderline';

const Navbar = () => {
  return (
    <nav className='navigation-top'>
        <AnimatePresence mode='wait'>
              <motion.div
                key="dashboard"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <RRLogo style={{width:'100%', height: '110px'}} />
                <div className='dj-container'>
                  <DJ style={{width:'100%', height: '60px', position:'relative', top:'0px'}} />
                  <LogoUnderline style={{width:'100%', height:'30px', position:'relative'}} pathVariants={{
                        hidden: {
                                opacity: 1,
                                pathLength: 0,
                            },
                            visible: {
                                opacity: 1,
                                pathLength: 1,
                                transition: {
                                    duration: 2,
                                    delay: 0.5,
                                    ease: "easeInOut",
                                },
                            }
                    }} /> 
                </div>
              </motion.div>
          </AnimatePresence>
        <div className='navbar-settings'>

        </div>
    </nav>
  );
};

export default Navbar;
