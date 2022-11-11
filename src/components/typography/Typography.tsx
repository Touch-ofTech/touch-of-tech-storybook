import React from 'react';
import './Typography.css';

type Typo = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'paragraph' | 'link';

interface TypoProps {
  type: Typo;
  label: string;
  className?: string;
}

export const Typography = ({ className, type, label }: TypoProps) => {
  return (
    <span data-testid="typography" className={`${className || type}`}>
      {label}
    </span>
  );
};
