/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import arrow from '../../assets/arrow.svg';
import './selectInput.css';

export const SelectInput = (Props: any) => {
  const { label, values } = Props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(values[0]);
  const toggling = () => setIsOpen(!isOpen);

  const selectOption = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div
      data-testid="storybook-select-input-test_id"
      className="slctInputContainer"
    >
      <p className="slctInputLabel">{label}</p>
      <div
        className={`slctInputHead ${!isOpen ? '' : 'open'}`}
        onClick={() => toggling()}
      >
        <div className="slctInputHeadSelection">
          {selectedOption || values[0]}
        </div>
        <div className="slctInputHeadArrow">
          <img src={arrow} />
        </div>
      </div>
      {isOpen && (
        <div className="slctInputList">
          {values.map((option: string, index: number, array: Array<string>) => (
            <div
              key={option}
              className={`slctInputListItem ${
                index !== array.length - 1 ? 'middle' : ''
              }`}
              onClick={() => selectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
