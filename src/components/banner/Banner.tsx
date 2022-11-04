import React from 'react';
import check from '../../assets/check.png';
import './banner.css';

interface BannerProps {
  label: string;
  theme: 'success' | 'danger' | 'warning' | 'info';
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
      className={`${(theme && `banner banner--${theme}`) || 'banner'}`}
      style={{ top, left }}
      data-testid="banner-container"
    >
      <div
        className={`${
          (theme && `check-container check-container--${theme}`) ||
          'check-container'
        }`}
      >
        <img src={check} alt="checking" />
      </div>

      <p
        className={`${
          (theme && `banner-text banner-text--${theme}`) || 'banner-text'
        }`}
      >
        {label}
      </p>
    </div>
  );
};
