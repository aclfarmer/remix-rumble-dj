import React, {useState, useContext} from 'react'
import { SwitchContext } from '../context';
import './InformationBar.css'

const InformationBar = ({ handleSwitch, currentTime, selectedMusics, timeValue}) => {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState('Early');
  const { switchTriggered, setSwitchTriggered } = useContext(SwitchContext);

  const handleClick = () => {
    setClicked(!clicked);
    handleSwitch();
    setSwitchTriggered(!switchTriggered);
  
    setTimeout(() => {
      setText(!clicked ? 'Late' : 'Early');
    }, 150);
  }

  return (
    <div className={`informationBar_container ${clicked ? 'late' : 'early'}`}>
      <div className='informationBar'>
        <div className='informationBar_switch'>
          <span style={{fontWeight: 'bold'}}>Game: </span>
          <label className="switch-button">
          <input type="checkbox" onClick={handleClick} />
            <span className={`switch-button-slider round ${!clicked ? 'switch-button-slider-late' : ''}`}>
              <span className={`switch-button-slider-text ${clicked ? 'left' : 'right'}`}>
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
      <div className='informationBar_fullBar'>
        <div className='informationBar_timeBar' style={{ '--progress': `${(currentTime / timeValue) * 100}%` }}></div>
      </div>
    </div>
  );
}

export default InformationBar

