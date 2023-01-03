import React from 'react';
import './SideBySide.css';

interface SideBySideProps {
  title: string;
  secondTitle: string;
  description: string;
  secondDescription?: string;
  images: string[];
  date?: string;
}

export const SideBySide = ({
  title,
  secondTitle,
  description,
  secondDescription,
  date,
  images,
}: SideBySideProps) => {
  return (
    <section className="sidebyside-section">
      {images?.length !== 0 ? (
        <div className="sidebyside-main_container">
          <div className="sidebyside-left_container">
            <div className="sidebyside-image_profile">
              <img
                src={images[0]}
                alt={images[0]}
                className="sidebyside-portrait"
              />
            </div>
            <p className="sidebyside-title">{title}</p>
            <p className="sidebyside-description">{description}</p>
          </div>

          <div className="sidebyside-right_container">
            <div className="sideyside-image_profile">
              <img
                src={images[1]}
                alt={images[1]}
                className="sidebyside-portrait"
              />
            </div>
            <p className="sidebyside-title">{secondTitle}</p>
            <p className="sidebyside-description">{secondDescription}</p>
          </div>
        </div>
      ) : (
        <div className="sidebyside-main_container">
          <div className="sidebyside-left_container">
            <p className="sidebyside-title">{title}</p>
            <p className="sidebyside-date">{date}</p>
          </div>
          <div className="sidebyside-right_container">
            <p className="sidebyside-description">{description}</p>
          </div>
        </div>
      )}
    </section>
  );
};
