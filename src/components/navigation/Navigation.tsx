import React from 'react';
import './navigation.css';

interface INavigationProps {
  labels: string[];
  links?: string[];
  logo: string;
}

export const Navigation = ({ labels, links, logo }: INavigationProps) => {
  return (
    <div className="navigation-container">
      <div className="navigation-half">
        {labels.map(
          (label, index, array) =>
            index < Math.ceil(array.length / 2) && (
              <div key={label} className="navigation-button">
                {label}
              </div>
            ),
        )}
      </div>

      <img src={logo} className="navigation-logo" alt="logo" />

      <div className="navigation-half">
        {labels.map(
          (label, index, array) =>
            index >= Math.ceil(array.length / 2) && (
              <div key={label} className="navigation-button">
                {label}
              </div>
            ),
        )}
      </div>
    </div>
  );
};
