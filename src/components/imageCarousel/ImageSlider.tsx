/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-key */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import './imageSlider.css';
import Arrow from '../../assets/arrow.svg';

const BtnSlider = ({
  direction,
  moveSlide,
}: {
  direction: 'next' | 'prev';
  moveSlide: any;
}) => {
  return (
    <button
      type="button"
      onClick={moveSlide}
      className={`btn-slide ${direction}`}
    >
      <img src={Arrow} alt={direction} />
    </button>
  );
};

export const ImageSlider = ({
  dots = true,
  data,
}: {
  dots: boolean;
  data: any[];
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [prevSlideIndex, setPrevSlideIndex] = useState(1);

  const changeSlide = (
    index?: number | undefined,
    next?: boolean,
    prev?: boolean,
  ) => {
    setPrevSlideIndex(slideIndex);
    if (index) {
      setSlideIndex(index);
    } else {
      setSlideIndex(next ? slideIndex + 1 : prev ? slideIndex - 1 : 0);
      slideIndex > data.length - 1
        ? setSlideIndex(1)
        : slideIndex <= 0
        ? setSlideIndex(data.length - 1)
        : '';
    }
  };

  const moveDot = (index: number) => {
    changeSlide(index);
  };

  return (
    <div className="container-slider">
      {data.map((obj, index) => {
        return (
          <div
            key={`slide${index}`}
            className={`slide ${
              index === slideIndex
                ? slideIndex > prevSlideIndex
                  ? 'active-anim-rigth'
                  : 'active-anim-left'
                : index === prevSlideIndex
                ? slideIndex > prevSlideIndex
                  ? 'inactive-anim-rigth'
                  : 'inactive-anim-left'
                : ''
            }`}
          >
            <img src={obj.img} alt={obj.title} />
          </div>
        );
      })}
      <BtnSlider moveSlide={changeSlide} direction="next" />
      <BtnSlider moveSlide={changeSlide} direction="prev" />
      {dots ? (
        <div className="container-dots">
          {data.map((item, index) => (
            <div
              key={`dot${index}`}
              onClick={() => moveDot(index)}
              className={slideIndex === index ? 'dot active' : 'dot'}
            />
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
