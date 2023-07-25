'use client'
import React, { useEffect, useRef, useState } from 'react'
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ConsultantCardHover from '../Cards/ConsultantCardHover';
import ConsultantCard from '../Cards/ConsultantCard';
import Image from 'next/image';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
const consultantsdata = [{
    bgImg:'images/hiring-page/consultant-2.png',
    src:'/../public/images/hiring-page/consultant-1.png',
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
    department:'Administration'
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
},
{   src:'/../public/images/hiring-page/consultant-1.png',
    bgImg:'images/hiring-page/consultant-2.png',
    alt:'image',
    name:'Siddharth Taurani',
    title:'Front End Developer, Exp 15 Years,',
    department:'IT Department'
},]


function ConsultantsSlider() {
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
          <div className="flex w-full mt-10 md:mt-24 justify-between mb-3 overflow-x-scroll hidden-scrollbar snap-x" ref={sliderRef}>
              {
                      consultantsdata?.map((data, idx)=>{
                          return(
                              <React.Fragment key={idx}>
                                      <div className="block md:min-w-[300px] mr-6 snap-start" 
                                      key={idx}
                                      onMouseEnter={() => handleMouseEnter(idx)}
                                      onMouseLeave={handleMouseLeave}
                                      >
                                      {
                                      isHovered===idx ? 
                                      <ConsultantCardHover data={data}/>
                                      :
                                      <ConsultantCard data={data}/>
                                      }
                                  </div>
                              </React.Fragment>
                          )
                        })
                  }

          </div>
            <div className={`absolute top-0 left-0 flex md:w-[10%] h-full justify-center items-center ${isScrollable.left?'opacity-100':'opacity-0'}`}
                 style={{backgroundImage: `linear-gradient(90deg, #0d1472ad 0%, #2534dfa8 41.32%, #ffffff0d 100%)`}}
                 onClick={handleSlideLeft} 
            >
              <BiChevronLeft className={`text-white font-thin text-[40px] cursor-pointer`} size={40}/>
            </div>
            <div className={`absolute top-0 right-0 flex md:w-[10%] h-full justify-center items-center ${isScrollable.right?'opacity-100':'opacity-0'}`} 
                 style={{backgroundImage: `linear-gradient(-90deg, #0d1472ad 0%, #2534dfa8 41.32%, #ffffff0d 100%)`}}
                 onClick={handleSlideRight}
            >
              <BiChevronRight className={`text-white font-thin text-[40px] cursor-pointer`} size={40}/> 
            </div>
        </div>

  </>
  )
}

export default ConsultantsSlider