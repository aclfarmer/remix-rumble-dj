import React, { useRef, useState, useEffect, useContext } from 'react';

import { MusicList } from '../assets/base64/MusicList';
import * as teamSVGList from './svg/teamSVGList';
import * as switchSVGList from './svg/switchSVGList';

import FlameColorContext from './FlameColorContext';

    // Define the number of small cards for each TEAMSVG card
    const teamSVGCardCounts_early = {
      heartsteel: ['early_main', 'early_secondary', 'early_drums'],
      kda: ['early_main', 'early_secondary', 'early_drums'],
      penta: ['early_main', 'early_secondary', 'early_drums'],
      truedmg: ['early_main', 'early_secondary', 'early_drums'],
      eightbit: ['early_main', 'early_drums'],
      country: ['early_main', 'early_drums'],
      disco: ['early_main', 'early_drums'],
      edm: ['early_main', 'early_drums'],
      emo: ['early_main', 'early_drums'],
      punk: ['early_main', 'early_secondary'],
      hyper: ['early_main'],
      illbeats: ['early_main'],
      jazz: ['early_main'],
      maestro: ['early_main'],
      mix: ['early_main'],
    };

    const teamSVGCardCounts_late = {
      heartsteel: ['late_main', 'late_secondary', 'late_drums'],
      kda: ['late_main', 'late_secondary', 'late_drums'],
      penta: ['late_main', 'late_secondary', 'late_drums'],
      truedmg: ['late_main', 'late_secondary', 'late_drums'], 
      eightbit: ['late_main', 'late_drums'],
      country: ['late_main', 'late_drums'],
      disco: ['late_main', 'late_drums'],
      edm: ['late_main', 'late_drums'],
      emo: ['late_main', 'late_drums'],
      punk: ['late_main', 'late_secondary'],
      hyper: ['late_main'],
      illbeats: ['late_main'],
      jazz: ['late_main'],
      maestro: ['late_main'],
      mix: ['late_main'],
    };

    const teamOrder = ['heartsteel', 'kda', 'penta', 'truedmg', 'eightbit', 'country', 'disco', 'edm', 'emo', 'punk', 'hyper', 'illbeats', 'jazz', 'maestro', 'mix'];

    function renderCards(currentArray, clicked, handleClick, selectedMusics, setSelectedMusics, setPlay) {
      return teamOrder.map(key => {
        const TeamSVGComponent = teamSVGList[key];
    
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
    
        const smallCards = [];
        
        //console.log('teamSVGCardCounts_early keys:', Object.keys(teamSVGCardCounts_early));
        //console.log('switchSVGList keys:', Object.keys(switchSVGList));
    
        const cardTypes = currentArray[key] || [];
        cardTypes.forEach((cardType, index) => {
          const SwitchSVGComponent = switchSVGList[cardType];
          if (!SwitchSVGComponent) {
            console.warn(`Missing component for key: ${cardType}`);
            return;
          }
    
          
          const buttonKey = `${key}_${cardType}`;
          smallCards.push(
            <div className='card small' key={buttonKey} onClick={() =>{ 
              handleClick(buttonKey);
              if (clicked[buttonKey]) {
                setSelectedMusics(selectedMusics.filter(music => music !== MusicList[buttonKey]));
                setPlay(false);
              } else {
                if (selectedMusics.length === 4) {
                  setSelectedMusics([...selectedMusics.slice(1), MusicList[buttonKey]]);
                } else {
                  setSelectedMusics([...selectedMusics, MusicList[buttonKey]]);
                }
                setPlay(true);
              }
            }}>
              <div className='card-border'/>
              <div className={`card-content ${clicked[buttonKey] ? cardType : ''}`}>
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

const MusicBar = ({setSelectedMusics, selectedMusics, setPlay}) => {
    const cardsRef = useRef(null);
    const [currentArray, setCurrentArray] = useState('teamSVGCardCounts_early');
    const [clicked, setClicked] = useState(false);
    //css handling
    const { switchFlameColors } = useContext(FlameColorContext);
    const [isRushActive, setIsRushActive] = useState(false);


    const handleClick = (buttonKey) => {
      console.log('Card clicked:', clicked[buttonKey] ? clicked[buttonKey] : 'false', 'Button:', buttonKey);
      setClicked(prevState => ({ ...prevState, [buttonKey]: !prevState[buttonKey] }));
    };

     // In your render method, use the current array to render the cards
  const currentTeamSVGCardCounts = currentArray === 'teamSVGCardCounts_early' ? teamSVGCardCounts_early : teamSVGCardCounts_late;

    //card effect-----------------------------------
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
      <button onClick={() => {
        const newArray = currentArray === 'teamSVGCardCounts_early' ? 'teamSVGCardCounts_late' : 'teamSVGCardCounts_early';
        console.log('Switching to:', newArray);
        setCurrentArray(newArray);
        setClicked({});
        switchFlameColors();
        setIsRushActive(true);
        setTimeout(() => setIsRushActive(false), 1000);
        setSelectedMusics([]);
        setPlay(false);
      }}>
        Switch
      </button>
      {renderCards(currentArray === 'teamSVGCardCounts_early' ? teamSVGCardCounts_early : teamSVGCardCounts_late, clicked, handleClick, selectedMusics, setSelectedMusics, setPlay)}
    </div>
  );
}

export default MusicBar