/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import arrow from '../../assets/arrow.svg';
import './selectInput.css';

interface ISelectInputProps {
  label?: string;
  values: Array<string | number>;
}

export const SelectInput = (Props: ISelectInputProps) => {
  const { label, values } = Props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(values[0]);
  const toggling = () => setIsOpen(!isOpen);

  const selectOption = (value: string | number) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div
      data-testid="storybook-select-input-test_id"
      className="select-input-container"
    >
      {label ? <p className="select-input-label">{label}</p> : ''}
      <div
        className={`select-input-head ${!isOpen ? '' : 'open'}`}
        onClick={() => toggling()}
      >
        <div className="select-input-head-selection">
          {selectedOption || values[0]}
        </div>
        <div className="select-input-head-arrow">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      {isOpen && (
        <div className="select-input-list">
          {values.map(
            (
              option: string | number,
              index: number,
              array: Array<string | number>,
            ) => (
              <div
                key={option}
                className="select-input-list-item"
                onClick={() => selectOption(option)}
              >
                {option}
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
};

SelectInput.defaultProps = {
  label: undefined,
};
