import React from "react";
import useTimer from "./Hook/useTimer";

const Slider = () => {
  const [start, stop, reset] = useTimer();

  return (
    <div id="pomodoro">
      <div>
        <div id="pomodoro--title">Pomodoro Tracker</div>
        <div id="pomodoro--center">
          <div className="circular-progress">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              aria-labelledby="title"
              role="graphic"
            >
              <circle cx="50" cy="50" r="40"></circle>
              <circle cx="50" cy="50" r="40" id="pct-ind"></circle>
            </svg>
            <p id="pct">00:00</p>
          </div>
        </div>
        <div className="chronometer">
          <div className="buttons">
            <div>
              <button className="emerald" onClick={start}>
                <div>Start</div>
              </button>
              <button className="emerald" onClick={stop}>
                Pause
              </button>
              <button className="emerald" onClick={reset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
