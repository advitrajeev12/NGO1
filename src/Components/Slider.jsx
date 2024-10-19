import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';
import slide5 from '../assets/slide5.png';
import slide6 from '../assets/slide6.png';


import './Slider.css';

const Slider = () => {
   const sliderImages = [
      { url: slide1 },
      { url: slide2 },
      { url: slide3 },
      { url: slide4 },
      { url: slide5 },
      { url: slide6 },
   ];

   const [activeImageNum, setCurrent] = useState(0);
   const length = sliderImages.length;

   const nextSlide = () => {
      setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
   };

   const prevSlide = () => {
      setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
   };

   if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
      return null;
   }

   return (
      <div>
         <section className="image-slider">
            <div className="left">
               <ArrowBackIosIcon onClick={prevSlide} />
            </div>
            <div className="right">
               <ArrowForwardIosIcon onClick={nextSlide} />
            </div>
            {sliderImages.map((currentSlide, ind) => {
               return (
                  <div
                     className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
                     key={ind}
                  >
                     {ind === activeImageNum && (
                        <img src={currentSlide.url} alt={`Slide ${ind + 1}`} className="image" />
                     )}
                  </div>
               );
            })}
         </section>
      </div>
   );
};

export default Slider; // Make sure to export as Slider
