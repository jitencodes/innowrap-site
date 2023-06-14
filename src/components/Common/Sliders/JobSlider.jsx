'use client'
import React, { useEffect, useRef, useState } from 'react'
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ConsultantCardHover from '../Cards/ConsultantCardHover';
import ConsultantCard from '../Cards/ConsultantCard';
import Image from 'next/image';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import BagIcon from '@/../public/svg icons/bagIcon.svg'
import JobCard from '../Cards/JobCard';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
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


function JobSlider({items,arrowStyle}) {
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
            {/* slider arrows Above */}
            {arrowStyle==='above'?
                <div className="flex items-center justify-end gap-5 pr-6 md:pr-12 lg:pr-20 xl:pr-40">
                    <BsArrowLeft onClick={handleSlideLeft} className={`text-white fontbold text-4xl cursor-pointer ${isScrollable.left?'opacity-100':'opacity-50'}`} />
                    <BsArrowRight onClick={handleSlideRight} className={`text-white fontbold text-4xl cursor-pointer ${isScrollable.right?'opacity-100':'opacity-50'}`} /> 
                </div>
            :<></>}
            {/* Slider element */}
        <div className="relative h-full w-full">
          <div className="flex w-full mt-10 md:mt-24 justify-between mb-3 overflow-x-scroll custom-scrollbar snap-x" ref={sliderRef}>
            {
              items.map((item,idx)=>{
                  return<div key={idx} className="bg-white p-5 pb-8 gap-5 min-w-[352px] rounded-xl mr-8">
                    <div className='mb-5'>
                      <div className="flex flex-col p-2 border rounded-md shadow-bs-1 w-max mb-5">
                        <BagIcon/>
                      </div>
                      <h3 className='text-black text-xl font-semibold'>{item.title}</h3>
                    </div>
                      <p className='text-black text-xl font-light'>{item.desc}</p>
                  </div>
                
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
                <div className="flex items-center justify-end gap-5 pr-6 md:pr-12 lg:pr-20 xl:pr-40">
                    <BsArrowLeft onClick={handleSlideLeft} className={`text-white fontbold text-4xl cursor-pointer ${isScrollable.left?'opacity-100':'opacity-50'}`} />
                    <BsArrowRight onClick={handleSlideRight} className={`text-white fontbold text-4xl cursor-pointer ${isScrollable.right   ?'opacity-100':'opacity-50'}`} /> 
                </div>
            :<></>}
        </div>

  </>
  )
}

export default JobSlider