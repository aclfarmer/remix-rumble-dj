import React, { useRef, useState, useEffect } from 'react';

import * as teamSVGList from './svg/teamSVGList';
import * as switchSVGList from './svg/switchSVGList';

function renderCards() {
  return Object.keys(teamSVGList).flatMap(key => {
    const TeamSVGComponent = teamSVGList[key];
    const [clicked, setClicked] = useState(false);

    const handleClick = (buttonKey) => {
      console.log('Card clicked:', clicked[buttonKey] ? clicked[buttonKey] : 'false', 'Button:', buttonKey);
      setClicked(prevState => ({ ...prevState, [buttonKey]: !prevState[buttonKey] }));
    };
    

    const mainCard = (
      <div className={`card ${clicked ? 'clicked' : ''}`} key={key} onClick={() => handleClick(key)}>
        <div className='card-border'/>
        <div className="card-content">
          <div className="card-image">
            <TeamSVGComponent color={clicked[key] ? '#fff' : undefined} width='100%' height='40px' />
          </div>
        </div>
      </div>
    );


    const order = ['trebble', 'bass', 'percussion'];

    const smallCards = order.map((switchKey) => {
      const SwitchSVGComponent = switchSVGList[switchKey];
      if (!SwitchSVGComponent) {
        console.warn(`Missing component for key: ${switchKey}`);
        return null;
      }
      const buttonKey = `${key}-${switchKey}`;
      return (
        <div className='card small' key={buttonKey} onClick={() => handleClick(buttonKey)}>
          <div className='card-border'/>
          <div className={`card-content ${clicked[buttonKey] ? switchKey : ''}`}>
            <div className="card-image">
            <SwitchSVGComponent color={clicked[buttonKey] ? '#fff' : undefined} width='100%' height='22px' />
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="card-row" key={key}>
        {mainCard}
        {smallCards}
      </div>
    );
  });
}

const MusicBar = () => {
    const cardsRef = useRef(null);

    //card effect
useEffect(() => {
  const handleMouseMove = (e) => {
    const cards = cardsRef.current.querySelectorAll('.card, .card.small');
    for (const card of cards) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
      
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  const cardsElement = cardsRef.current;
  if (cardsElement) {
    cardsElement.addEventListener('mousemove', handleMouseMove);
  }

  // Clean up function
  return () => {
    if (cardsElement) {
      cardsElement.removeEventListener('mousemove', handleMouseMove);
    }
  };
}, []);

//RETURN STATEMENT IS HERE ----------------
  return (
        <div id='cards' ref={cardsRef}>
          {renderCards()}
        </div>
  )
}

export default MusicBar