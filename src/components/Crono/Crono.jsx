import React, { useState, useEffect } from "react";
import './Crono.scss';

export const Crono = () => {
  const [crono, setCrono] = useState(0);
  const [state, setState] = useState(false);

  useEffect(() => {
    let interval = null;

    if (state) {
      interval = setInterval(() => {
        setCrono((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [state]);
  return (
    <div className="c-crono">
      <h3>Crono</h3>
      <p>
        <span>{("0" + Math.floor((crono / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((crono / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((crono / 10) % 100)).slice(-2)}</span>
      </p>
      {!state && crono > 0 && (
          <>
            <button className="resume" onClick={() => setState(true)}>Resume</button>
            <button className="reset" onClick={() => setCrono(0)}>Reset</button> 
          </>     
      )}
      {!state && crono === 0 && (
        <button className="start" onClick={() => setState(true)}>Start</button>
      )}
      {state  && (
        <button className="stop" onClick={() => setState(false)}>Stop</button>
      )}
    </div>
  );
};
