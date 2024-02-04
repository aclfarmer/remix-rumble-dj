import React, {useState, useContext, useEffect} from 'react'
import { SwitchContext } from '../context';
import './InformationBar.css'

const InformationBar = ({ handleSwitch, currentTime, selectedMusics, timeValue, handleTimeUpdate}) => {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState('Early');
  const { switchTriggered, setSwitchTriggered } = useContext(SwitchContext);

  useEffect(() => { 
    setTimeout(() => {
      setText(switchTriggered ? 'Late' : 'Early');
    }, 150);
  } , [switchTriggered]);

  const handleClick = () => {
    setClicked(!clicked);
    handleSwitch();
  }

  const handleSwitchTriggeredChange = () => {
    setSwitchTriggered(!switchTriggered);
  };

  const handleBarClick = (e) => {
    const barWidth = e.currentTarget.offsetWidth;
    const clickPosition = e.nativeEvent.offsetX;
    const newTime = (clickPosition / barWidth) * timeValue;
    handleTimeUpdate(newTime);
  };

  return (
    <div className={`informationBar_container ${switchTriggered ? 'late' : 'early'}`}>
      <div className='informationBar'>
        <div className='informationBar_switch'>
          <span style={{fontWeight: 'bold'}}>Game: </span>
          <label className="switch-button">
          <input type="checkbox" checked={switchTriggered} onChange={handleSwitchTriggeredChange} onClick={handleClick} />
            <span className={`switch-button-slider round ${!switchTriggered ? 'switch-button-slider-late' : ''}`}>
              <span className={`switch-button-slider-text ${switchTriggered ? 'left' : 'right'}`}>
                {text}
              </span>
            </span>
          </label>
        </div>
        <div>
            <span style={{fontWeight: 'bold'}}>Time:</span> {Math.floor(currentTime / 60)}:{('0' + Math.floor(currentTime % 60)).slice(-2)} / {Math.floor(timeValue / 60)}:{('0' + Math.floor(timeValue % 60)).slice(-2)}
        </div>
        <div>
            <span style={{fontWeight: 'bold'}}>Music:</span> <span style={{ color: selectedMusics.length === 5 ? 'red' : 'white' }}>{selectedMusics.length}/5</span>
        </div>
      </div>
      <div className='informationBar_fullBar' onClick={handleBarClick}>
        <div className='informationBar_timeBar' style={{ '--progress': `${(currentTime / timeValue) * 100}%` }}></div>
        {currentTime > 0 && <div className='informationBar_circle' style={{ '--progress': `${(currentTime / timeValue) * 100}%` }}></div>}
      </div>
    </div>
  );
}

export default InformationBar

