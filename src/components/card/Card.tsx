import React, { ReactNode } from 'react';
import './card.css';

interface CardProps {
  children?: ReactNode;
  widthSize: string;
  heightSize: string;
  className?: string;
}

export const Card = ({
  children,
  widthSize,
  heightSize,
  className,
}: CardProps) => {
  return (
    <div
      style={{
        width: widthSize,
        height: heightSize,
      }}
      className={`container ${className}`}
    >
      {children}
    </div>
  );
};
