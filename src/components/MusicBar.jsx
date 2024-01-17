import React, { useRef, useState, useEffect } from 'react';

import { MusicList } from '../assets/base64/MusicList';
import * as teamSVGList from './svg/teamSVGList';
import * as switchSVGList from './svg/switchSVGList';

const teamSVGCardCounts_early = {
  heartsteel: ['early_main', 'early_secondary', 'early_drums'],
  kda: ['early_main', 'early_secondary', 'early_drums'],
  pentakill: ['early_main', 'early_secondary', 'early_drums'],
  truedmg: ['early_main', 'early_secondary', 'early_drums'],
  eightbit: ['early_main', 'early_drums'],
  country: ['early_main', 'early_drums'],
  disco: ['early_main', 'early_drums'],
  edm: ['early_main', 'early_drums'],
  emo: ['early_main', 'early_drums'],
  punk: ['early_main', 'early_drums'],
  hyper: ['early_main'],
  illbeats: ['early_main'],
  jazz: ['early_main'],
  maestro: ['early_main'],
  mixmaster: ['early_main'],
};

const teamSVGCardCounts_late = {
  heartsteel: ['late_main', 'late_secondary', 'late_drums'],
  kda: ['late_main', 'late_secondary', 'late_drums'],
  pentakill: ['late_main', 'late_secondary', 'late_drums'],
  truedmg: ['late_main', 'late_secondary', 'late_drums'],
  eightbit: ['late_main', 'late_drums'],
  country: ['late_main', 'late_drums'],
  disco: ['late_main', 'late_drums'],
  edm: ['late_main', 'late_drums'],
  emo: ['late_main', 'late_drums'],
  punk: ['late_main', 'late_drums'],
  hyper: ['late_main', 'late_drums'],
  illbeats: ['late_main'],
  jazz: ['late_main'],
  maestro: ['late_main'],
};

const teamOrder = [
  'heartsteel',
  'kda',
  'pentakill',
  'truedmg',
  'eightbit',
  'country',
  'disco',
  'edm',
  'emo',
  'punk',
  'hyper',
  'illbeats',
  'jazz',
  'maestro',
  'mixmaster',
];



function renderCards(
  currentArray,
  clicked,
  handleClick,
  selectedMusics,
  setSelectedMusics,
  setPlay,
  setClicked,
  musicButtonId,
  setMusicButtonId
) {


  return teamOrder.map((key) => {
    const TeamSVGComponent = teamSVGList[key];

    const isAnySmallCardSelected = Object.keys(clicked).some(
      (clickedKey) => clickedKey.startsWith(key) && clicked[clickedKey]
    );

    const mainCard = (
      <div
        className={`card big ${isAnySmallCardSelected ? 'clicked' : ''}`}
        key={key}
        onClick={() => handleClick(key)}
      >
        <div className='card-border' />
        <div className='card-content'>
          <div className='card-image'>
            <TeamSVGComponent
              color={isAnySmallCardSelected ? '#fff' : undefined}
              width='100%'
              height='40px'
            />
          </div>
        </div>
      </div>
    );

    

    const smallCards = [];
    const cardTypes = currentArray[key] || [];
    cardTypes.forEach((cardType, index) => {
      const SwitchSVGComponent = switchSVGList[cardType];
      if (!SwitchSVGComponent) {
        console.warn(`Missing component for key: ${cardType}`);
        return;
      }

      const buttonKey = `${key}_${cardType}`;
      smallCards.push(
        <div
          className='card small'
          key={buttonKey}
          onClick={() => {
            handleClick(buttonKey);
            if (musicButtonId.includes(buttonKey) || clicked[buttonKey]) {
              setSelectedMusics(selectedMusics.filter((music) => music !== MusicList[buttonKey]));
              setMusicButtonId(musicButtonId.filter((id) => id !== buttonKey));
              setPlay(false);
            } else {
              if (selectedMusics.length === 5) {
                const firstMusicKey = Object.keys(MusicList).find(
                  (key) => MusicList[key] === selectedMusics[0]
                );
                setSelectedMusics([...selectedMusics.slice(1), MusicList[buttonKey]]);
                setClicked((prevState) => ({ ...prevState, [firstMusicKey]: false }));
              } else {
                setSelectedMusics([...selectedMusics, MusicList[buttonKey]]);
              }
              setPlay(true);
            }
          }}
        >
          <div className='card-border' />
            <div className={`card-content ${musicButtonId.includes(buttonKey) || clicked[buttonKey] ? cardType : ''}`}>
              <div className='card-image'>
                <SwitchSVGComponent
                  color={musicButtonId.includes(buttonKey) || clicked[buttonKey] ? '#fff' : undefined}
                  width='100%'
                  height='22px'
                />
              </div>
            </div>
          </div>
      );
    });

    return (
      <div className='card-row' key={key}>
        {mainCard}
        {smallCards}
      </div>
    );
  });
}

const MusicBar = ({ setSelectedMusics, selectedMusics, setPlay, setTimeValue, switchTriggered, resetSwitch, musicButtonId, setMusicButtonId }) => {
  const cardsRef = useRef(null);
  const [currentArray, setCurrentArray] = useState('teamSVGCardCounts_early');
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (currentArray === 'teamSVGCardCounts_early') {
      setTimeValue(3 * 60 + 30); // 3 minutes 30 seconds in seconds
    } else if (currentArray === 'teamSVGCardCounts_late') {
      setTimeValue(2 * 60 + 53); // 2 minutes 53 seconds in seconds
    }
  }, [currentArray, setTimeValue]);

  const handleClick = (buttonKey) => {
    console.log('Card clicked:', clicked[buttonKey] ? clicked[buttonKey] : 'false', 'Button:', buttonKey);
    if (buttonKey.includes('_')) {
      setClicked((prevState) => ({ 
        ...prevState, 
        [buttonKey]: musicButtonId.includes(buttonKey) ? false : !prevState[buttonKey] 
      }));

      if (clicked[buttonKey]) {
        setMusicButtonId((prevState) => prevState.filter(id => id !== buttonKey));
      } else {
        setMusicButtonId((prevState) => {
          if (!prevState.includes(buttonKey)) {
            return [...prevState, buttonKey];
          }
          return prevState;
        });
      }
    }
  };

  useEffect(() => {
    if (musicButtonId.length > 0) {
      const initialSelectedMusics = musicButtonId.map(id => MusicList[id]);
      setSelectedMusics(initialSelectedMusics);
    }
  }, [musicButtonId]);

  const currentTeamSVGCardCounts = currentArray === 'teamSVGCardCounts_early' ? teamSVGCardCounts_early : teamSVGCardCounts_late;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = cardsRef.current.querySelectorAll('.card, .card.small');
      for (const card of cards) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    const cardsElement = cardsRef.current;
    if (cardsElement) {
      cardsElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (cardsElement) {
        cardsElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    if (switchTriggered) {
      const newArray = currentArray === 'teamSVGCardCounts_late' ? 'teamSVGCardCounts_early' : 'teamSVGCardCounts_late';
      console.log('Switching to:', newArray);
      setCurrentArray(newArray);
      setClicked({});
      setSelectedMusics([]);
      setMusicButtonId([]);
      setPlay(false);
      resetSwitch();
    }
  }, [switchTriggered]);

  return (
    <div id='cards' ref={cardsRef}>
      {renderCards(
        currentTeamSVGCardCounts,
        clicked,
        handleClick,
        selectedMusics,
        setSelectedMusics,
        setPlay,
        setClicked,
        musicButtonId,
        setMusicButtonId
      )}
    </div>
  );
};

export default MusicBar;
