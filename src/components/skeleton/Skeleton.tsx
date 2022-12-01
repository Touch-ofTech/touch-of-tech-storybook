import React from 'react';
import './skeleton.css';

type Typo = 'circle' | 'container';

interface SkeletonProps {
  width: string;
  height: string;
  type: Typo;
}

export const Skeleton = ({
  width = '40px',
  height = '40px',
  type,
}: SkeletonProps) => {
  return (
    <div
      data-testid="container-test"
      className={`${type} ${'skeleton'}`}
      style={{ width, height }}
    />
  );
};
