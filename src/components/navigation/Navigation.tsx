import React from 'react';
import './navigation.css';

interface INavigationProps {
  labels: string[];
  links?: string[];
  innitial1: string;
  innitial2: string;
}

export const Navigation = ({
  labels,
  links,
  innitial1,
  innitial2,
}: INavigationProps) => {
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

      <div className="navigation-logo">{`${innitial1}&${innitial2}`}</div>

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
