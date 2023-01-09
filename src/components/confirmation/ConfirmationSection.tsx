import React from 'react';
import { Button } from '../button/Button';
import './confirmationSection.css';

interface IConfirmProps {
  title?: string;
  text?: string;
  label?: string;
}

export const ConfirmationSection = ({ title, text, label }: IConfirmProps) => {
  return (
    <section className="confirm-container">
      <div className="confirm-title">{title || 'Confirm'}</div>
      <div className="confirm-text">
        {text || 'Please confirm your attendance.'}
      </div>
      <div className="confirm-button">
        <Button
          label={label || 'Confirm'}
          backgroundColor="#C6754D"
          borderColor="#C6754D"
          fontFamily="Montaga"
          fontWeigth="400"
          size="large"
        />
      </div>
    </section>
  );
};
