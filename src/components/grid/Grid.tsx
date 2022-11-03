import React, { ReactNode } from 'react';
import './grid.css';

interface IGridProps {
  className?: string;
  template_rows: string;
  template_columns: string;
  gap: string;
  children?: ReactNode;
}

export const Grid = ({
  className,
  template_rows,
  template_columns,
  gap,
  children,
}: IGridProps) => {
  return (
    <div
      data-testid="grid-component"
      className={`display-grid ${className}`}
      style={{
        gridTemplateColumns: template_columns,
        gridTemplateRows: template_rows,
        gap,
      }}
    >
      {children}
    </div>
  );
};
