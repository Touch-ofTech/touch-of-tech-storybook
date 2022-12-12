import React from 'react';
import imageProfile from '../../assets/image.png';
import './HeroSection.css';

interface HeroProps {
  names: string;
  date: string;
  location: string;
}

export const HeroSection = ({ names, date, location }: HeroProps) => {
  return (
    <section className="hero-container">
      <div className="hero-content-container">
        <p className="hero-title">Please join us to celebrate</p>
        <p className="hero-subtitle">{names}</p>
        <p className="hero-title">
          {date} - {location}
        </p>
      </div>
      <img src={imageProfile} alt="main image" className="hero-img" />
    </section>
  );
};
