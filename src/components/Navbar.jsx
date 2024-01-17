import React, { useState, useEffect, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css'

import RRLogo from './svg/RRLogo'
import DJ from './svg/DJ'
import LogoUnderline from './svg/LogoUnderline';
import { Sharesvg, Helpsvg, Kofi } from './svg/miscSVG';

const Navbar = ({musicButtonId}) => {
  const [showHelp, setShowHelp] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showKofi, setShowKofi] = useState(false);
  
  const modalRef = useRef();
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowHelp(false); 
        setShowShare(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Clean event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleShare = () => {
    if (musicButtonId.length === 0) {
      setShareUrl(window.location.origin);
    } else {
      const queryParams = new URLSearchParams();
      musicButtonId.forEach((music) => queryParams.append('music', music));
      const shareUrl = `${window.location.origin}/share?${queryParams.toString()}`;
      setShareUrl(shareUrl);
    }
  };
  
  return (
    <nav className='navigation-top'>
        <AnimatePresence mode='wait'>
              <motion.div
                key="dashboard"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <RRLogo style={{width:'100%', height: '90px'}} />
                <div className='dj-container'>
                  <DJ style={{width:'100%', height: '50px', position:'relative', top:'0px'}} />
                  <LogoUnderline style={{width:'100%', height:'20px', position:'relative'}} pathVariants={{
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
          <div key="navbarSettings" className='navbar-settings'>
            <div className='navbar-button-icon-container' onClick={() => {setShowShare(true); handleShare();}} >
              <Sharesvg style={{width:'32px', height: '32px', padding:'5px'}} />
              <span className="tooltip-text">Share</span>
            </div>
            <div className='navbar-button-icon-container' onClick={() => setShowHelp(true)} >
              <Helpsvg style={{width:'32px', height: '32px', padding:'5px'}} />
              <span className="tooltip-text">Help</span>
            </div>
            <div className='navbar-button-icon-container'>
              <Kofi style={{width:'32px', height: '32px'}} />
              <span className="tooltip-text">Kofi</span>
            </div>
          </div>
        <AnimatePresence>
          {showShare && (
            <motion.div
              ref={modalRef}
              key="shareModal"
              className='share-modal'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
          >
            <LogoUnderline style={{width:'100%', height:'20px', position:'relative'}} />
              <div className='share-modal-header'>
                <h2>Share your Mix</h2>
              </div>
              <div className='share-modal-section-row'>
                <div className='share-modal-section'>
                  <input type="text" value={shareUrl} readOnly />
                </div>
              </div>
              <div className='modal-footer'>
                  <button onClick={() => setShowShare(false)}>Close</button>
              </div>
            <LogoUnderline style={{width:'100%', height:'20px', position:'relative'}} />
          </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showHelp && (
            <motion.div
              ref={modalRef}
              key="helpModal"
              className='instructions-modal'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
          >
            <LogoUnderline style={{width:'100%', height:'20px', position:'relative'}} />
              <div className='instructions-modal-header'>
                <h2>Remix your Rumble!</h2>
              </div>
              <div className='instructions-modal-section-row'>
                <div className='instructions-modal-section'>
                  <img src='https://via.placeholder.com/370' alt='placeholder' />
                  <p>Pick and choose any music track from the team compositions of Teamfight Tactics Set 10.</p>
                  <p>To start playing the music, click any main, secondary or percussion button.</p>
                </div>
                <div className='instructions-modal-section'>
                  <img src='https://via.placeholder.com/370' alt='placeholder' /> 
                  <p>Mix up to 5 tracks from the early game or late game. </p>
                  <p>Use the game switch to change between early and late game music.</p>
                </div>
                <div className='instructions-modal-section'>
                <img src='https://via.placeholder.com/370' alt='placeholder' />
                  <p>To restart the time, remove all tracks from your selection.</p>
                  <p>Add or remove tracks at any time. Share your creation with friends.</p>
                </div>
              </div>
                  <div className='modal-footer'>
                  <button onClick={() => setShowHelp(false)}>Close</button>
                </div>
            <LogoUnderline style={{width:'100%', height:'20px', position:'relative'}} />
          </motion.div>
          )}
        </AnimatePresence>
    </nav>
  );
};

export default Navbar;
