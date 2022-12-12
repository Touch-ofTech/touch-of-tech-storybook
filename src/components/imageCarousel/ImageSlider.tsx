import './imageSlider.css';

export const ImageSlider = ({ data }: { data: any[] }) => {
  const nextslide = (index: number) => {
    const slider = document.querySelector('.slider-container');
    if (index === data.length - 1) {
      slider.style.transform = 'translateX(0)';
    } else {
      slider.style.transform = `translateX(-${(index + 1) * 800}px)`;
    }
  };

  const prevSlide = (index: number) => {
    const slider = document.querySelector('.slider-container');
    if (index === 0) {
      slider.style.transform = `translateX(-${(data.length - 1) * 800}px)`;
    } else {
      slider.style.transform = `translateX(-${(index - 1) * 800}px)`;
    }
  };

  return (
    <div className="container-slider">
      <div className="slider-container">
        {data.map((item, index) => (
          <div key={item.title} className="img-container">
            <div className="circle" onClick={() => prevSlide(index)} />
            <img src={item.img} alt={item.title} />
            <div className="circle2" onClick={() => nextslide(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};
