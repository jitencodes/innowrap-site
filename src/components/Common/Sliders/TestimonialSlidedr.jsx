'use client'
import React, { useEffect, useRef, useState } from 'react'
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import TestimonialVideoCard from '../Cards/TestimonialVideoCard';
import TestimonialTextCard from '../Cards/TestimonialTextCard';
const data = [{
    bgImg:'images/hiring-page/consultant-2.png',
    src:'/../public/images/hiring-page/consultant-1.png',
    alt:'image',
    name:'Siddharth Taurani',
    title:'Front End Developer, Exp 15 Years,',
    department:'IT Department'
},
{   src:'/../public/images/hiring-page/consultant-1.png',
    isVideo:true,
    bgImg:'images/hiring-page/consultant-2.png',
    alt:'image',
    name:'Siddharth Taurani',
    title:'Front End Developer, Exp 15 Years,',
    department:'IT Department'
},
{   src:'/../public/images/hiring-page/consultant-1.png',
    isVideo:true,
    bgImg:'images/hiring-page/consultant-2.png',
    alt:'image',
    name:'Siddharth Taurani',
    title:'Front End Developer, Exp 15 Years,',
    department:'IT Department'
},
{   src:'/../public/images/hiring-page/consultant-1.png',
    bgImg:'images/hiring-page/consultant-2.png',
    alt:'image',
    name:'Siddharth Taurani',
    title:'Front End Developer, Exp 15 Years,',
    department:'IT Department'
},
{   src:'/../public/images/hiring-page/consultant-1.png',
    bgImg:'images/hiring-page/consultant-2.png',
    alt:'image',
    name:'Siddharth Taurani',
    title:'Front End Developer, Exp 15 Years,',
    department:'IT Department'
},]



function TestimonialSlidedr() {
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

    const [isHovered, setIsHovered] = useState(null);
    const handleMouseEnter = (idx) => {
        setIsHovered(idx);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(null);
      };
  return (
    <>
        <div className="relative h-full w-full">
          <div className="flex w-full justify-between overflow-x-scroll hidden-scrollbar snap-x" ref={sliderRef}>
              {
                      data?.map((item, idx)=>{
                      let   {isVideo} = item;
                          return(
                                      <div className="block md:w-[300px] mr-6 snap-start" 
                                      key={idx}
                                      onMouseEnter={() => handleMouseEnter(idx)}
                                      onMouseLeave={handleMouseLeave}
                                      >
                                      {isVideo ? 
                                      <TestimonialVideoCard data={item}/>
                                      :
                                      <TestimonialTextCard data={item}/>}
                                  </div>
                          )
                        })
                  }

          </div>
            <div onClick={handleSlideLeft} className={`absolute cursor-pointer top-0 left-0 flex md:w-[10%] h-full justify-center items-center ${isScrollable.left?'opacity-100':'opacity-0'}`}
                 style={{backgroundImage: `linear-gradient(90deg, #0202028a  0%, #00000042 41.32%, #ffffff0d 100%)`}}

            >
              <BiChevronLeft className={`text-white font-thin text-[40px] cursor-pointer`} size={40}/>
            </div>
            <div onClick={handleSlideRight} className={`absolute cursor-pointer top-0 right-0 flex md:w-[10%] h-full justify-center items-center ${isScrollable.right?'opacity-100':'opacity-0'}`}
                 style={{backgroundImage: `linear-gradient(-90deg, #0202028a  0%, #00000042 41.32%, #ffffff0d 100%)`}}
            >
              <BiChevronRight className={`text-white font-thin text-[40px] cursor-pointer`} size={40}/> 
            </div>
        </div>

  </>
  )
}

export default TestimonialSlidedr