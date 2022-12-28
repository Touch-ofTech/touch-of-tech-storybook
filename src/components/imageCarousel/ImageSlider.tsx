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
      className={`btn-slide ${direction}-arrow`}
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

  const moveDot = (index: number) => {
    if (slideIndex !== index) {
      if (slideIndex < index) {
        setSlideIndex(index - 1);
        nextslide();
      } else {
        setSlideIndex(index + 1);
        prevSlide();
      }
    }
  };

  const nextslide = () => {
    const slider: any = document.querySelector('.slider-container');
    if (slideIndex === data.length - 1) {
      slider.style.transform = 'translateX(0)';
      setSlideIndex(0);
    } else {
      slider.style.transform = `translateX(-${(slideIndex + 1) * 700}px)`;
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    const slider: any = document.querySelector('.slider-container');
    if (slideIndex === 0) {
      slider.style.transform = `translateX(-${(data.length - 1) * 700}px)`;
      setSlideIndex(data.length - 1);
    } else {
      slider.style.transform = `translateX(-${(slideIndex - 1) * 700}px)`;
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div className="container-slider">
      <div className="slider-container">
        {data.map((item) => (
          <div key={item.title} className="img-container">
            <img src={item.img} alt={item.title} />
            <div className="slide-text title">{item.title}</div>
            <div className="slide-text subtitle">{item.subtitle}</div>
          </div>
        ))}
      </div>
      <BtnSlider moveSlide={nextslide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />
      {dots && (
        <div className="container-dots">
          {data.map((slide, index) => (
            <div
              key={`dot${slide.title}`}
              onClick={() => moveDot(index)}
              className={slideIndex === index ? 'dot active' : 'dot'}
            />
          ))}
        </div>
      )}
    </div>
  );
};
