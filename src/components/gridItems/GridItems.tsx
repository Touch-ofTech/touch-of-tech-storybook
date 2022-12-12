import React from 'react';
import './gridItems.css';
import { Button } from '../button/Button';

interface IGridItemProps {
  GridItemsValues: {
    title: string;
    description: string;
    buttonLabel?: string;
    linkUrl?: string;
  }[];
}

export const GridItems = ({ GridItemsValues }: IGridItemProps) => {
  return (
    <div className="grid-items-container-wrapper">
      {GridItemsValues.map((GridItem) => (
        <div key={GridItem.title} className="grid-item-container">
          <div className="grid-item-title">{GridItem.title}</div>
          <div className="grid-item-description">{GridItem.description}</div>
          {GridItem.buttonLabel ? (
            <a href={GridItem.linkUrl} className="grid-item-button">
              <Button
                label={GridItem.buttonLabel}
                className="outline"
                backgroundColor="#C6754D"
                fontFamily="Montaga"
                fontWeigth="400"
                size="large"
              />{' '}
            </a>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  );
};
