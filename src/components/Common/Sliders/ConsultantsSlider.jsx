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
},
{   src:'/../public/images/hiring-page/consultant-1.png',
    bgImg:'images/hiring-page/consultant-2.png',
    alt:'image',
    name:'Siddharth Taurani',
    title:'Front End Developer, Exp 15 Years,',
    department:'IT Department'
},]

const brandImages = [
    {
      id:1,
      src: '/images/hiring-page/brand1.png',
      width: 59,
      height: 64,
      alt: 'ITC Limited Company Logo',
    },
    {
      id:2,
      src: '/images/hiring-page/brand2.png',
      width: 64,
      height: 64,
      alt: 'Cello Company Logo',
    },
    {
      id:3,
      src: '/images/hiring-page/brand3.png',
      width: 108,
      height: 41,
      alt: 'Bajaj Allianz Company Logo',
    },
    {
      id:4,
      src: '/images/hiring-page/brand4.png',
      width: 73,
      height: 39,
      alt: 'Bharti AXA Company Logo',
    },
    {
      id:5,
      src: '/images/hiring-page/brand5.png',
      width: 90,
      height: 48,
      alt: 'Aditya Birla Group Company Logo',
    },
    {
      id:6,
      src: '/images/hiring-page/brand6.png',
      width: 63,
      height: 61,
      alt: 'HDFC Ergo Company Logo',
    },
    {
      id:7,
      src: '/images/hiring-page/brand7.png',
      width: 133,
      height: 42,
      alt: 'Big Bazar Company Logo',
    },
    {
      id:8,
      src: '/images/hiring-page/brand8.png',
      width: 78,
      height: 42,
      alt: 'Max Burpa Health Insurance Company Logo',
    },
  ];

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
          <div className="flex w-full mt-10 md:mt-24 justify-between mb-3 overflow-x-scroll custom-scrollbar snap-x" ref={sliderRef}>
              {
                      brandImages?.map((brand, idx)=>{
                      let   {src, width, height, alt, id} = brand;
                          return(
                              <React.Fragment key={id}>
                                      <div className="block md:min-w-[300px] mr-6 snap-start" 
                                      key={idx}
                                      onMouseEnter={() => handleMouseEnter(idx)}
                                      onMouseLeave={handleMouseLeave}
                                      >
                                      {isHovered===idx ? 
                                      <ConsultantCardHover data={consultantsdata[0]}/>
                                      :
                                      <ConsultantCard data={consultantsdata[0]}/>}
                                  </div>
                              </React.Fragment>
                          )
                        })
                  }

          </div>
            <div className={`absolute top-0 left-0 flex md:w-[10%] h-full bg-slider-btn mix-blend-multiply justify-center items-center ${isScrollable.left?'opacity-100':'opacity-0'}`}>
              <BiChevronLeft onClick={handleSlideLeft} className={`text-white font-thin text-[40px] cursor-pointer`} size={40}/>
            </div>
            <div className={`absolute top-0 right-0 flex md:w-[10%] h-full bg-slider-btn mix-blend-multiply justify-center items-center ${isScrollable.right?'opacity-100':'opacity-0'}`}>
              <BiChevronRight onClick={handleSlideRight} className={`text-white font-thin text-[40px] cursor-pointer`} size={40}/> 
            </div>
        </div>

  </>
  )
}

export default ConsultantsSlider