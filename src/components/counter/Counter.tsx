/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import './counter.css';

interface ICounterProps {
  date: string;
  place: string;
  image: any;
}

export const Counter = ({ date, place, image }: ICounterProps) => {
  const time = new Date(date);
  const [dia, setDia] = useState(0);
  const [hora, setHora] = useState(0);
  const [minuto, setMinuto] = useState(0);
  const [segundo, setSegundo] = useState(0);
  function TimeNow() {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = time.getTime() - now;
      setDia(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHora(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      setMinuto(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSegundo(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);
  }
  useEffect(() => {
    TimeNow();
  });
  return (
    <div className="counter-container">
      <div>
        <img src={image} alt="Location" className="counter-image" />
      </div>
      <div className="counter-location">
        {`${time.getDay()} / ${
          time.getMonth() + 1
        } / ${time.getFullYear()} - ${place}`}
      </div>
      <div className="counter-timer">
        <div className="counter-timer-text">{`${dia} \n Days`}</div>
        <div className="counter-timer-text">{`${hora} \n Hours`}</div>
        <div className="counter-timer-text">{`${minuto} \n Minutes`}</div>
        <div className="counter-timer-text">{`${segundo} \n Seconds`}</div>
      </div>
    </div>
  );
};
