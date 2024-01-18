import React, { useEffect, useRef, useState } from 'react';

import './Visualizer.css';

//import base64Audio from '../assets/base64/cityBase64';

//visualizer section. Everything here to do with the visualizer, including design.
function drawVisualizer(canvas, ctx, rotation, bufferLength, barWidth, dataArray) {
  //radius
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY) * 0.5;
  let barHeight;
  
  //center circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = '#69c4a7';
  ctx.stroke();

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * 0.4;
    let minBarHeight = 10;

    if (barHeight < minBarHeight) {
      barHeight = minBarHeight;
    }

    let angle;
    if (i > bufferLength * 0.5) {
      // For bars inside the circle, reverse the direction and center it
      angle = ((bufferLength - i) / bufferLength - 0.0) * Math.PI;
    } else {
      // For bars outside the circle
      angle = (i / bufferLength) * Math.PI;
    }

    // Save the current context
    ctx.save();

    // Move to the center of the canvas
    ctx.translate(centerX, centerY);

    // Rotate the canvas
    ctx.rotate(rotation);

    // Move back to the top left corner
    ctx.translate(-centerX, -centerY);
  
      // calculate the start and end points of the bar
      const startX = centerX + radius * Math.cos(angle);
      const startY = centerY + radius * Math.sin(angle);
      let endX, endY;

      if (i > bufferLength * 0.5) {
        // For bars inside the circle
        endX = centerX + (radius - barHeight) * Math.cos(angle);
        endY = centerY + (radius - barHeight) * Math.sin(angle);
      } else {
        // For bars outside the circle
        endX = centerX + (radius + barHeight) * Math.cos(angle);
        endY = centerY + (radius + barHeight) * Math.sin(angle);
      }
      minBarHeight = 0;
    // draw the bar
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    
    ctx.lineWidth = barWidth;
    ctx.strokeStyle = 'white';
    ctx.stroke();

    if (i > bufferLength * 0.8) {
      ctx.beginPath();
      ctx.lineWidth = 0.8;
      ctx.arc(centerX, centerY, barHeight, 0, Math.PI * 2)
      ctx.stroke();
    }
    ctx.restore();
    
  } //END FOR LOOP


  //center circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.minBarHeight = 1;
  ctx.strokeStyle = '#69c4a7';
  ctx.stroke();

  // Create a temporary canvas to draw the gradient
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  const tempCtx = tempCanvas.getContext('2d');

  // Draw the gradient on the temporary canvas
  const gradient = tempCtx.createLinearGradient(0, 0, tempCanvas.width, tempCanvas.height);
  gradient.addColorStop(0/8, '#69c4a7');
  gradient.addColorStop(1/8, '#56c4c6');
  gradient.addColorStop(2/8, '#3f78bd');
  gradient.addColorStop(3/8, '#50c5d0');
  gradient.addColorStop(4/8, '#74c69b');
  gradient.addColorStop(5/8, '#b1b172');
  gradient.addColorStop(6/8, '#e09654');
  gradient.addColorStop(7/8, '#e18579');
  gradient.addColorStop(8/8, '#e08187');
  tempCtx.fillStyle = gradient;
  tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

  // Set the globalCompositeOperation to 'source-in' to use the visualizer as a mask
  ctx.globalCompositeOperation = 'source-in';

  // Draw the gradient from the temporary canvas onto the main canvas
  ctx.drawImage(tempCanvas, 0, 0);

  // Reset the globalCompositeOperation to 'source-over' (the default value)
  ctx.globalCompositeOperation = 'source-over';
}


const Visualizer = ({selectedMusics, play, setPlay, timeValue, currentTime, setCurrentTime, musicButtonId }) => {
  const audioRef = useRef([]); // Create a ref for the audio element
  const canvasRef = useRef(null); //ref for canvas
  const rotation = useRef(0); //holds rotation of visualizer

  const [showPlayButton, setShowPlayButton] = useState(false); 
  const [isPaused, setIsPaused] = useState(false);

  const startHasRun = useRef(false);
  
  useEffect(() => {
    // New useEffect hook that runs on load and whenever musicButtonId changes
    if (!startHasRun.current && musicButtonId.length > 0 && selectedMusics.length == 0) {
      audioRef.current.forEach(audio => audio.pause());
      setShowPlayButton(true);
      startHasRun.current = true;
      setCurrentTime(0);
    } else {
      setShowPlayButton(false);
    }
  }, [musicButtonId]);

  const handlePlayButtonClick = () => {
    audioRef.current.forEach(audio => audio.play());
    setShowPlayButton(false);
  };

  const handleCanvasClick = () => {
    if (play) {
      audioRef.current.forEach(audio => audio.pause());
    } else {
      audioRef.current.forEach(audio => audio.play());
    }
    setPlay(!play);
  };


// Declare startTime outside of the useEffect hook
const startTime = useRef(null);
const intervalId = useRef(null);

useEffect(() => {
  if (selectedMusics.length > 0) {
    // Start the timer only if selectedMusics is not empty and the audio is not paused
    if (!isPaused && startTime.current === null) {
      // Set startTime only if it's not set yet
      startTime.current = Date.now();
    }
    intervalId.current = setInterval(() => {
      if (!isPaused) {
        const newTime = (Date.now() - startTime.current) / 1000;
        if (newTime >= timeValue) {
          // Stop the timer when it reaches timeValue
          clearInterval(intervalId.current);
          startTime.current = null;
        } else {
          setCurrentTime(newTime);
        }
      }
    }, 50);
  } else {
    // Reset the timer and startTime if selectedMusics is empty
    setCurrentTime(0);
    startTime.current = null;
    clearInterval(intervalId.current);
  }
}, [selectedMusics, timeValue, isPaused]); // Add isPaused to the dependency array

useEffect(() => {
  if (play) {
    startTime.current = Date.now() - currentTime * 1000;
    intervalId.current = setInterval(() => {
      const newTime = (Date.now() - startTime.current) / 1000;
      if (newTime >= timeValue) {
        clearInterval(intervalId.current);
        startTime.current = null;
      } else {
        setCurrentTime(newTime);
      }
    }, 50);
  } else {
    clearInterval(intervalId.current);
  }
}, [play, timeValue, currentTime]);

// Add a useEffect hook to pause and play the audio
useEffect(() => {
  if (isPaused) {
    audioRef.current.forEach(audio => audio.pause());
  } else {
    audioRef.current.forEach(audio => audio.play());
  }
}, [isPaused]);

  useEffect(() => {
    const audioContexts = [];   // Create an array to hold the audio contexts
    const audios = [];   // Create an array to hold the audio elements
    const audioSources = [];   // Create an array to hold the audio sources
    const analysers = [];   // Create an array to hold the analysers
    const dataArray = [];   // Create an array to hold the data arrays
    const bufferLength = [];  // Create an array to hold the buffer lengths

    let animationFrameId;  // Create a variable to hold the animation frame id



    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const container = canvas.parentElement;

      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;

      const barWidth = 5;
      
      // Initialize bufferLength and dataArray with some default values to cause the visualiser to render
       
      bufferLength[0] = 64;
      dataArray[0] = new Uint8Array(bufferLength[0]).fill(10);


      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate the rotation increment for each part
        const rotationIncrement = 2 * Math.PI / 4;  // Divide the circle into 4 parts
      
        for (let i = 0; i < 4; i++) {
          // Check if the number of selected musics is greater than the part's index
          if (i < selectedMusics.length && analysers[i] && dataArray[i]) {
            // Get the frequency data
            analysers[i].getByteFrequencyData(dataArray[i]);
        
            // Calculate the rotation for this part
            const partRotation = rotation.current + rotationIncrement * i;
        
            // Draw the visualizer for this music
            drawVisualizer(canvas, ctx, partRotation, bufferLength[i], barWidth, dataArray[i]);
          } else {
            // No music is selected for this part, draw the visualizer with the default values
            const partRotation = rotation.current + rotationIncrement * i;
            drawVisualizer(canvas, ctx, partRotation, bufferLength[0], barWidth, dataArray[0]);
          }
        }
  
    
        // Increment the rotation and request the next animation frame
        rotation.current += 0.001;
        animationFrameId = requestAnimationFrame(animate);
      } //END ANIMATE() FUNCTION

      // Start the animation
      animate();
      if (selectedMusics.length > 0) {  
          selectedMusics.forEach((music, index) => {
            if (audios[index]) {
              // Update the src and currentTime of the existing Audio object
              audios[index].src = music || undefined;
              audios[index].currentTime = currentTime;
            } else {
              // Create a new Audio object
              audios[index] = new Audio();
              audios[index].src = music || undefined;
              audios[index].currentTime = currentTime;
          
              // Create a new audio context for each music
              audioContexts[index] = new AudioContext();
          
              // Create a new audio source for each music
              audioSources[index] = audioContexts[index].createMediaElementSource(audios[index]);
          
              // Create a new analyser for each music
              analysers[index] = audioContexts[index].createAnalyser();
          
              // Connect the audio source to the analyser and the analyser to the destination
              audioSources[index].connect(analysers[index]);
              analysers[index].connect(audioContexts[index].destination);
          
              // Set the fftSize and get the frequency data
              analysers[index].fftSize = 128;
              bufferLength[index] = analysers[index].frequencyBinCount;
              dataArray[index] = new Uint8Array(bufferLength[index]);
            }

            audios[index].addEventListener('canplaythrough', function() {
              // The audio is now playable, call the play method
              this.play();
            }, false);
          });
        }
     }
     return () => {
      // Stop the audio playback and remove the audio elements
      audios.forEach((audio, index) => {
        audio.pause();
        audio.src = '';
        audios[index] = null;
      });
  
      // Cancel the animation frame
      cancelAnimationFrame(animationFrameId);
    };
        }, [selectedMusics, play, rotation]);

return (
    <div className='visualizer-container'>
      <div id='canvas-container' onClick={handleCanvasClick}>
        <canvas ref={canvasRef} id='canvas1'></canvas>
        {showPlayButton && (
          <div className='play-button-overlay' onClick={handlePlayButtonClick}>
            <button className='play-button'>Play</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Visualizer;