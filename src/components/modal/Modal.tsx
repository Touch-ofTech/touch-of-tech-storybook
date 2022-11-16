import React from 'react';
import { Button } from '../button/Button';
import { Typography } from '../typography/Typography';
import './Modal.css';

interface ModalProps {
  type: string;
  children: JSX.Element;
  isOpen: boolean;
  title: string;
  onClosed: any;
}

export const Modal = ({
  type,
  children,
  isOpen,
  onClosed,
  title,
}: ModalProps) => {
  return (
    <>
      <div
        className={`modal-overlay ${(isOpen && 'is-open') || ''}`}
        onClick={onClosed}
      />

      <div className={`modal-display ${(isOpen && 'is-open') || ''}`}>
        <div className={`modal-container ${(type && type) || 'default'}`}>
          <div className="header-container">
            <Typography label={title} type="h2" />
            <div className="close-action" onClick={onClosed}>
              <Typography label="X" type="span" />
            </div>
          </div>
          {children}
          <div className="buttons-container">
            <Button
              label="Cancel"
              backgroundColor="#E44B53"
              onClick={onClosed}
            />
            <Button label="Confirm" />
          </div>
        </div>
      </div>
    </>
  );
};
