import React from 'react';
import { Button } from '../button/Button';
import './gridItems.css';

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
    <section className="grid-items-container">
      {GridItemsValues.map((GridItem) => (
        <div key={GridItem.title} className="grid-item-container">
          <div className="grid-item-title">{GridItem.title}</div>
          <div className="grid-item-description">{GridItem.description}</div>
          {GridItem.buttonLabel && (
            <a href={GridItem.linkUrl} className="grid-item-button">
              <Button
                label={GridItem.buttonLabel}
                className="outline"
                borderColor="#C6754D"
                fontColor="#C6754D"
                fontFamily="Montaga"
                fontWeigth="400"
                size="large"
              />
            </a>
          )}
        </div>
      ))}
    </section>
  );
};
