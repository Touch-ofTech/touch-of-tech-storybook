import React from 'react';
import check from '../../assets/check.png';
import './banner.css';

interface BannerProps {
  label: string;
  theme?: 'success' | 'danger' | 'warning' | 'info';
  top?: string;
  left?: string;
}

export const Banner = ({
  label,
  theme,
  top = '20px',
  left = '20px',
}: BannerProps) => {
  return (
    <div
      className={['banner', `banner--${theme}`].join(' ')}
      style={{ top, left }}
    >
      <div
        className={['check-container', `check-container--${theme}`].join(' ')}
      >
        <img src={check} alt="checking" />
      </div>

      <p className={['banner-text', `banner-text--${theme}`].join(' ')}>
        {label}
      </p>
    </div>
  );
};
