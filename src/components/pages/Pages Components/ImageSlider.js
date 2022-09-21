import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              
                <div  alt="^_^" style={{backgroundImage: `url(${slide.image})`}} className="image"  >
                
                <div className="slider-text">{slide.text}</div>
                <Link to={slide.link}>
                <Button className="button-text">{slide.buttonText}</Button>
                </Link>
                </div>
                
            
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
