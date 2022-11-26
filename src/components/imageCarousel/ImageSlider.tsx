/* eslint-disable no-console */
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

  const changeSlide = (index: number | 'next' | 'prev') => {
    setPrevSlideIndex(slideIndex);
    if (typeof index === 'number') {
      setSlideIndex(index);
    } else {
      setSlideIndex(
        index === 'next'
          ? slideIndex + 1
          : index === 'prev'
          ? slideIndex - 1
          : 0,
      );
      console.log(data.length);
      slideIndex > data.length - 1
        ? setSlideIndex(0)
        : slideIndex < 0
        ? setSlideIndex(data.length - 1)
        : '';
    }
    console.log(slideIndex);
  };

  const nextChangeSlide = () => {
    changeSlide('next');
  };
  const prevChangeSlide = () => {
    changeSlide('prev');
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
            <div className="slide-text title">{obj.title}</div>
            <div className="slide-text subtitle">{obj.subtitle}</div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextChangeSlide} direction="next" />
      <BtnSlider moveSlide={prevChangeSlide} direction="prev" />
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
