import React from 'react';
import './Footer.css';

interface FooterProos {
  custom1: string;
  custom2: string;
  custom3: string;
  custom4: string;
  custom5: string;
  custom6: string;
}

export const Footer = ({
  custom1 = 'Home',
  custom2 = 'Our Story',
  custom3 = 'Counter',
  custom4 = 'Hotels',
  custom5 = 'RSVP',
  custom6 = 'Presents',
}: FooterProos) => {
  return (
    <section className="footer-section">
      <div className="footer-content-container">
        <span className="footer-label">{custom1}</span>
        <span className="footer-label">{custom2}</span>
        <span className="footer-label">{custom3}</span>
        <span className="footer-label">{custom4}</span>
        <span className="footer-label">{custom5}</span>
        <span className="footer-label">{custom6}</span>
      </div>
      <p className="footer-brand">Powered by Touch of Tech| Licensing</p>
    </section>
  );
};
