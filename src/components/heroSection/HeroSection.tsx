import React from 'react';
import './heroSection.css';
import imageProfile from '../../assets/image.png';

interface HeroProps {
  names: string;
  date: string;
  location: string;
}

export const HeroSection = ({ names, date, location }: HeroProps) => {
  return (
    <div className="main-container">
      <div className="info-container">
        <p className="data-paragraph">Please join us to celebrate</p>
        <p className="names-paragraph">{names}</p>
        <p className="data-paragraph">
          {date} - {location}
        </p>
      </div>
      <img src={imageProfile} alt="main image" className="image-container" />
    </div>
  );
};
