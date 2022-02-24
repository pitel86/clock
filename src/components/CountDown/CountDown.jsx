import React, { useState, useEffect } from "react";
import "./CountDown.scss";

export const CountDown = () => {
  const [countDown, setcountDown] = useState();
  let countDownDate = new Date("Mar 01, 2022 00:00:00").getTime();

  useEffect(() => {
    let interval = setInterval(() => {
        let now = new Date().getTime();
      let secsToCountDown = Math.floor(
        new Date(countDownDate - now).valueOf() / 1000
      );
      let days = Math.floor(secsToCountDown / (86400));
      let hours = Math.floor(
        (secsToCountDown % ( 86400)) / ( 3600)
      );
      let minutes = Math.floor((secsToCountDown % ( 3600)) / ( 60));
      let seconds = Math.floor((secsToCountDown % (60)) );

      setcountDown(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (secsToCountDown < 0) {
        clearInterval(interval);
        setcountDown("CUENTA ATRÁS TERMINADA");
      }
    }, 1000);
  }, []);
  return <div className="c-countdwon">
  <h3>Cuenta Atrás</h3>
  {countDown}</div>;
};
