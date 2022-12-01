import React, { useState } from 'react';
import Arrow from '../../assets/arrow.svg';
import './imageSlider.css';

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
      let newSlideIndex;
      if (index === 'next') newSlideIndex = slideIndex + 1;
      else if (index === 'prev') newSlideIndex = slideIndex - 1;
      else newSlideIndex = 0;
      setSlideIndex(newSlideIndex);
      if (slideIndex > data.length - 1) setSlideIndex(0);
      else if (slideIndex < 0) setSlideIndex(data.length - 1);
    }
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
      {data.map((slide, index) => {
        let extraAttribute;
        if (index === slideIndex) {
          if (slideIndex > prevSlideIndex) extraAttribute = 'active-anim-rigth';
          else extraAttribute = 'active-anim-left';
        } else if (index === prevSlideIndex) {
          if (slideIndex > prevSlideIndex)
            extraAttribute = 'inactive-anim-rigth';
          else extraAttribute = 'inactive-anim-left';
        } else extraAttribute = 'hidden';
        return (
          <div
            key={`slide${slide.title}`}
            className={`slide ${extraAttribute}`}
          >
            <img src={slide.img} alt={slide.title} />
            <div className="slide-text title">{slide.title}</div>
            <div className="slide-text subtitle">{slide.subtitle}</div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextChangeSlide} direction="next" />
      <BtnSlider moveSlide={prevChangeSlide} direction="prev" />
      {dots ? (
        <div className="container-dots">
          {data.map((slide, index) => (
            <button
              type="button"
              key={`dot${slide.title}`}
              onClick={() => moveDot(index)}
              className={slideIndex === index ? 'dot active' : 'dot'}
            >
              {' '}
            </button>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
