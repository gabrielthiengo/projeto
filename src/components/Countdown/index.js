/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';

import './styles.css';

function Countdown() {
  const [time, setTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  let interval = useRef();

  const startTimer = () => {
    const countdown = new Date('Apr 16, 2022 00:00:00').getTime();

    interval = setInterval(() => {
      const currDate = new Date().getTime();
      const diference = countdown - currDate;

      const days = Math.floor(diference / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (diference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diference % (1000 * 60)) / 1000);

      if (diference < 0) {
        clearInterval(interval.current);
      } else {
        setTime({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div id="countdown" className="countdown-container">
      <h2>Contagem Regressiva</h2>
      <p>
        Aenean tristique eros eget facilisis pretium. Maecenas risus leo,
        maximus nec faucibus vitae, varius non elit. Nunc eget nibh eget felis
        tristique pretium. Duis sed condimentum neque.
      </p>

      <div className="countdown">
        <div className="countdown-section">
          <h3>{time.days}</h3>
          <p>Dia(s)</p>
        </div>
        <div className="dot">:</div>
        <div className="countdown-section">
          <h3>{time.hours}</h3>
          <p>Horas(s)</p>
        </div>
        <div className="dot">:</div>
        <div className="countdown-section">
          <h3>{time.minutes}</h3>
          <p>Minuto(s)</p>
        </div>
        <div className="dot">:</div>
        <div className="countdown-section">
          <h3>{time.seconds}</h3>
          <p>Segundos(s)</p>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
