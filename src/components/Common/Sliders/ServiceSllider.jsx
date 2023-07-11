'use client'
import React, { useEffect, useRef, useState } from 'react'
import TestimonialVideoCard2 from '../Cards/TestimonialVideoCard2'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import ServiceCard from '../Cards/ServiceCard';
const serviceData =[
  {},
  {},
  {},
]
function ServiceSllider({items,arrowStyle,arrowColor}) {
    
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
            {/* Slider element */}
            <div className="relative h-full w-full">
            
              {/* slider arrows Above */}
              {arrowStyle==='above'?
                  <div className="flex items-center justify-end gap-5">
                      <BsArrowLeft onClick={handleSlideLeft} className={`${arrowColor==='black'?'text-black':'text-white'} fontbold text-4xl cursor-pointer ${isScrollable.left?'opacity-100':'opacity-50'}`} />
                      <BsArrowRight onClick={handleSlideRight} className={`${arrowColor==='black'?'text-black':'text-white'} fontbold text-4xl cursor-pointer ${isScrollable.right?'opacity-100':'opacity-50'}`} /> 
                  </div>
              :<></>}

              <div className="flex w-full mt-10 justify-between mb-3 overflow-x-scroll hidden-scrollbar snap-x" ref={sliderRef}>
                  {
                    serviceData.map((item,idx)=>{
                     return <ServiceCard key={idx} item={item} />
                    })
                  }

              </div>

              {/* Arrows inside */}
              {
                      !(arrowStyle === 'above' || arrowStyle === 'below')?
                      <>
                          <div onClick={handleSlideLeft} className={`cursor-pointer absolute top-0 left-0 flex md:w-[10%] h-full bg-slider-btn mix-blend-multiply justify-center items-center ${isScrollable.left?'opacity-100':''}`}>
                          <BiChevronLeft  className={`text-white font-thin text-[40px] cursor-pointer`} size={40}/>
                          </div>
                          <div onClick={handleSlideRight} className={`cursor-pointer absolute top-0 right-0 flex md:w-[10%] h-full bg-slider-btn mix-blend-multiply justify-center items-center ${isScrollable.right?'opacity-100':''}`}>
                          <BiChevronRight  className={`text-white font-thin text-[40px] cursor-pointer`} size={40}/> 
                          </div>
                      </>:<></>
                  }

                {/* slider arrows below */}
                {arrowStyle==='below'?
                    <div className="flex items-center justify-end gap-5">
                        <BsArrowLeft onClick={handleSlideLeft} className={`${arrowColor==='black'?'text-black':'text-white'} fontbold text-4xl cursor-pointer ${isScrollable.left?'opacity-100':'opacity-50'}`} />
                        <BsArrowRight onClick={handleSlideRight} className={`${arrowColor==='black'?'text-black':'text-white'} fontbold text-4xl cursor-pointer ${isScrollable.right   ?'opacity-100':'opacity-50'}`} /> 
                    </div>
                :<></>}
          </div>
    </>
  )
}

export default ServiceSllider