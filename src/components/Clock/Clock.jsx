import React, { useState,useEffect } from "react";
import './Clock.scss'

export const Clock = () => {
  const [clock, setClock] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return <div className="c-clock">
  <h3>Reloj</h3>
  {clock}</div>;
};
