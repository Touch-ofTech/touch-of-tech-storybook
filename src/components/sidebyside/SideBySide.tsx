import React from 'react';
import imageOne from '../../assets/image1_sidebyside.jpg';
import imageTwo from '../../assets/image2_sidebyside.jpg';
import './SideBySide.css';

interface SideBySideProps {
  title: string;
  anotherTitle: string;
  description: string;
  anotherDescription?: string;
  image?: boolean;
  date?: string;
}

export const SideBySide = ({
  title,
  anotherTitle,
  description,
  anotherDescription,
  date,
  image = true,
}: SideBySideProps) => {
  return (
    <section className="sidebyside-section">
      {image ? (
        <div className="sidebyside-main_container">
          <div className="sidebyside-left_container">
            <div className="sidebyside-image_profile">
              <img src={imageOne} className="sidebyside-portrait" />
            </div>
            <p className="sidebyside-title">{title}</p>
            <p className="sidebyside-description">{description}</p>
          </div>

          <div className="sidebyside-right_container">
            <div className="sideyside-image_profile">
              <img src={imageTwo} className="sidebyside-portrait" />
            </div>
            <p className="sidebyside-title">{anotherTitle}</p>
            <p className="sidebyside-description">{anotherDescription}</p>
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
