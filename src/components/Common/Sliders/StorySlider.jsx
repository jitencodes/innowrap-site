"use client";
import React, { useEffect, useRef, useState } from "react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import StoryCard from "../Cards/StoryCard";
import { storydata } from "@/app/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// function StorySlider  ({items,arrowStyle}) {
//   const getData = (e)=>{
//     const data = e;
//     if(data){
//       return data
//     }
//     return notFound()
//   }
//   const stories = getData(storydata)

//   const sliderRef = useRef(null);
//   const [isScrollable, setIsScrollable] = useState({left:false,right:true});

//   useEffect(() => {
//     const slider = sliderRef.current;
//     const isScrollableLeft = slider.scrollLeft > 0;
//     const isScrollableRight = slider.scrollLeft < (slider.scrollWidth - slider.clientWidth);
//     setIsScrollable({ left: isScrollableLeft, right: isScrollableRight });

//     const handleScroll = () => {
//       const isScrollableLeft = slider.scrollLeft > 0;
//       const isScrollableRight = slider.scrollLeft < (slider.scrollWidth - slider.clientWidth);
//       setIsScrollable({ left: isScrollableLeft, right: isScrollableRight });
//     };

//     slider.addEventListener('scroll', handleScroll);
//     return () => slider.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleSlideLeft = () => {
//     const slider = sliderRef.current;
//     slider.scrollBy({
//       left: -slider.clientWidth,
//       behavior: 'smooth',
//     });
//   };

//   const handleSlideRight = () => {
//     const slider = sliderRef.current;
//     slider.scrollBy({
//       left: slider.clientWidth,
//       behavior: 'smooth',
//     });
//   };
//   return (
//     <>
//             {/* Slider element */}
//         <div className="relative h-full w-full">

//             {/* slider arrows Above */}
//             {arrowStyle==='above'?
//                 <div className="flex items-center justify-end gap-5 pr-6 md:pr-12 lg:pr-20 xl:pr-40">
//                     <BsArrowLeft onClick={handleSlideLeft} className={`text-black fontbold text-4xl cursor-pointer ${isScrollable.left?'opacity-100':'opacity-50'}`} />
//                     <BsArrowRight onClick={handleSlideRight} className={`text-black fontbold text-4xl cursor-pointer ${isScrollable.right?'opacity-100':'opacity-50'}`} />
//                 </div>
//             :<></>}

//           <div className="flex w-full mt-10 md:mt-24 items-center h-full justify-between mb-3 overflow-x-scroll hidden-scrollbar snap-x" ref={sliderRef}>
//             {
//               stories.map((item,idx)=>{
//                   return <StoryCard key={idx} item={item} />

//               })
//             }
//           </div>

//           {/* Arrows inside */}
//             {
//                 !(arrowStyle === 'above' || arrowStyle === 'below')?
//                 <>
//                     <div onClick={handleSlideLeft} className={`cursor-pointer absolute top-0 left-0 flex md:w-[10%] h-full bg-slider-btn mix-blend-multiply justify-center items-center ${isScrollable.left?'opacity-100':''}`}>
//                     <BiChevronLeft  className={`text-white font-thin text-[40px] cursor-pointer`} size={40}/>
//                     </div>
//                     <div onClick={handleSlideRight} className={`cursor-pointer absolute top-0 right-0 flex md:w-[10%] h-full bg-slider-btn mix-blend-multiply justify-center items-center ${isScrollable.right?'opacity-100':''}`}>
//                     <BiChevronRight  className={`text-white font-thin text-[40px] cursor-pointer`} size={40}/>
//                     </div>
//                 </>:<></>
//             }

//             {/* slider arrows below */}
//             {arrowStyle==='below'?
//                 <div className="flex items-center justify-end gap-5 pr-6 md:pr-12 lg:pr-20 xl:pr-40">
//                     <BsArrowLeft onClick={handleSlideLeft} className={`text-white fontbold text-4xl cursor-pointer ${isScrollable.left?'opacity-100':'opacity-50'}`} />
//                     <BsArrowRight onClick={handleSlideRight} className={`text-white fontbold text-4xl cursor-pointer ${isScrollable.right   ?'opacity-100':'opacity-50'}`} />
//                 </div>
//             :<></>}
//         </div>

//   </>
//   )
// }

const StorySlider = ({ items, arrowStyle }) => {
  const sliderRef = useRef(null);

  const getData = (e) => {
    const data = e;
    if (data) {
      return data;
    }
    return notFound();
  };
  const stories = getData(storydata)
  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerPadding: "200px", // Adjust this value as per your requirement
    responsive:[
      {
        breakpoint: 1024, // For desktops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // For mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ]
  };
  var a=0;
  // var settings = {
  //   infinite: true,
  //   speed: 500,
  //   // centerMode: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   centerPadding: "200px", // Adjust this value as per your requirement  
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         dots: true
  //       }
  //     }
  //   ]
  // };
  return (
    <>
      <div className="flex absolute top-3 right-0 items-center justify-end gap-5 pr-6 md:pr-12 lg:pr-20 xl:pr-40">
        <BsArrowLeft
          onClick={handlePrevious}
          className={`text-black fontbold text-4xl cursor-pointer`}
        />
        <BsArrowRight
          onClick={handleNext}
          className={`text-black fontbold text-4xl cursor-pointer`}
        />
      </div>
      <div className="overflow-hidden">  
        <Slider  ref={sliderRef} {...settings}>
          {stories.map((item, idx) => {
            return <StoryCard key={idx} item={item} />;
          })}
        </Slider>
      </div>
    </>
  );
};

export default StorySlider;
