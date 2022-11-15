import React from 'react';
import './linealProgressBar.css';

interface ProgressBarProps {
  value: number;
  color: string;
  label?: string;
}

export const LinealProgressBar = ({
  value = 0,
  color,
  label,
}: ProgressBarProps) => {
  return (
    <div className="main-container" data-testid="progress-bar-test">
      <p className="label-paragraph"> {label}</p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="background-container">
          <div
            className="progress-bar-container"
            style={{ backgroundColor: color, width: `${value}%` }}
          >
            {' '}
          </div>
        </div>
        <p className="value-paragraph">{value}%</p>
      </div>
    </div>
  );
};
