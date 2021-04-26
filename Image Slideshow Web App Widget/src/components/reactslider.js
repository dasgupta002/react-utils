import React, { useState } from 'react'
import { sliderData } from './sliderdata'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

export const Reactslider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return (
        <section className = "slider">
            <FaArrowAltCircleLeft className = "left-arrow" onClick = { prevSlide } />
            {
                sliderData.map((slider, index) => {
                    return(
                      <div className = { index === current ? "slide-active" : "slide" } key = { index }> 
                        { index === current && (
                            <img src = { slider.image } className = "slider-image" alt = "" />
                        )}
                      </div> 
                    );
                })
            }
             <FaArrowAltCircleRight className = "right-arrow" onClick = { nextSlide } />
        </section>
    );
}
