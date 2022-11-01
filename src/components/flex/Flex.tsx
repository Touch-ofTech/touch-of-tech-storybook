import React, { ReactNode } from 'react';
import { IFlex } from '../../interfaces/IFlexContainer';
import './flex.css';

interface IFlexProps {
  className?: string;
  justify?: IFlex['justify'];
  align?: IFlex['align'];
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
