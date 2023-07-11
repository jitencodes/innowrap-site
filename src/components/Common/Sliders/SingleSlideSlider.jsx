'use client'
import React, { useEffect, useRef, useState } from 'react'
import TestimonialVideoCard2 from '../Cards/TestimonialVideoCard2'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

function SingleSlideSlider() {
    
  const sliderRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState({left:false,right:true});

  useEffect(() => {
    const slider = sliderRef.current;
    const isScrollableLeft = slider.scrollLeft > 0;
    const isScrollableRight = slider.scrollLeft < (slider.scrollWidth - slider.clientWidth);
    setIsScrollable({ left: isScrollableLeft, right: isScrollableRight });
  
    const handleScroll = () => {
      const isScrollableLeft = slider.scrollLeft > 0;
      const isScrollableRight = slider.scrollLeft < (slider.scrollWidth - slider.clientWidth);
      setIsScrollable({ left: isScrollableLeft, right: isScrollableRight });
    };
  
    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);
  

  const handleSlideLeft = () => {
    const slider = sliderRef.current;
    slider.scrollBy({
      left: -slider.clientWidth,
      behavior: 'smooth',
    });
  };

  const handleSlideRight = () => {
    const slider = sliderRef.current;
    slider.scrollBy({
      left: slider.clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <>
        <div className="flex w-full overflow-x-scroll hidden-scrollbar snap-x" ref={sliderRef}>
            <TestimonialVideoCard2/>
            <TestimonialVideoCard2/>
            <TestimonialVideoCard2/>

        </div>

            <div className="flex items-center justify-end gap-5 mt-5">
            <BsArrowLeft onClick={handleSlideLeft} className={`text-black font-bold text-4xl cursor-pointer ${isScrollable.left?'':'text-opacity-25'}`} />
            <BsArrowRight onClick={handleSlideRight} className={`text-black font-bold text-4xl cursor-pointer ${isScrollable.right?'':'text-opacity-25'}`} /> 
            </div>
    </>
  )
}

export default SingleSlideSlider