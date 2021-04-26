import React from 'react';
import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './timer.css';


const Timer = () => {
	
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [start, setStart] = useState(false);

  const startTimer = () => {
    setStart((state) => !state);

    const time = (+second + +minute * 60) * 1000;

    setTimeout(() => {
      setStart(false);
    }, time);
  };

  const resetTimer = () => {
    setStart(false);
    setMinute(0);
    setSecond(0);
  };

  return (
    <section>
      <div className = "control-buttons">
        <p>
          Minute
          <input
            type = "number"
            name = "minute"
            id = "minute"
            min = { 0 }
            value = { minute }
            onChange = {({ target }) => setMinute(target.value)}
          />
        </p>
        <p>
          Second
          <input
            type = "number"
            name = "second"
            id = "second"
            min = { 0 }
            max = { 60 }
            value = { second }
            onChange = {({ target }) => setSecond(target.value)}
          />
        </p>
        <button onClick = { startTimer }>{start ? "Pause" : "Start"}</button>
        <button onClick = { resetTimer }>Reset</button>
      </div>

      {start && (
        <div className = "display-graphic">
          <CountdownCircleTimer
            isPlaying = { start }
            duration = { +minute * 60 + +second }
            colors= {[
              ["#004777", 0.33],
              ["#F7B801", 0.33],
              ["#A30000", 0.33],
            ]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>
      )}
    </section>
  );
};

export default Timer;