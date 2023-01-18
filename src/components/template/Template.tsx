import React from 'react';
import { Navigation } from '../navigation/Navigation';
import { HeroSection } from '../heroSection/HeroSection';
import './Template.css';

export const TemplatePage = () => {
  const labelArray = [
    'Home',
    'Our Story',
    'Venue',
    'Itinierary',
    'Registry',
    'RSVP',
  ];
  return (
    <div className="template-container">
      <Navigation labels={labelArray} innitial1="M" innitial2="M" />
      <HeroSection
        names="Caleb & Amaya"
        date="July 15,2022"
        location="Colima, Mexico"
      />
    </div>
  );
};
