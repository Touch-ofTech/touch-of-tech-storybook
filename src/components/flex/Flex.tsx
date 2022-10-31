import React, { ReactNode } from 'react';
import './flex.css';

interface IFlexProps {
  className?: string;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end'
    | 'left';
  align?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'first-baseline'
    | 'last baseline'
    | 'start'
    | 'end'
    | 'self-start'
    | 'self-end';
  gap?: string;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  children?: ReactNode;
}

export const Flex = ({
  className,
  justify,
  align,
  gap,
  direction,
  children,
}: IFlexProps) => {
  return (
    <div
      className={`display-flex ${className}`}
      style={{
        justifyContent: justify,
        alignItems: align,
        gap,
        flexDirection: direction,
      }}
    >
      {children}
    </div>
  );
};
