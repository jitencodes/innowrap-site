"use client";
import React, { useEffect, useRef, useState } from "react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ConsultantCardHover from "../Cards/ConsultantCardHover";
import ConsultantCard from "../Cards/ConsultantCard";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
const consultantsdata = [
  { src: "/images/kaam.com/slider/image1.png" },
  { src: "/images/kaam.com/slider/image2.png" },
  { src: "/images/kaam.com/slider/image3.png" },
  { src: "/images/kaam.com/slider/image4.png" },
  { src: "/images/kaam.com/slider/image2.png" },
  { src: "/images/kaam.com/slider/image3.png" },
];

function ImageSlider() {
  const sliderRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState({
    left: false,
    right: true,
  });

  useEffect(() => {
    const slider = sliderRef.current;
    const isScrollableLeft = slider.scrollLeft > 0;
    const isScrollableRight =
      slider.scrollLeft < slider.scrollWidth - slider.clientWidth;
    setIsScrollable({ left: isScrollableLeft, right: isScrollableRight });

    const handleScroll = () => {
      const isScrollableLeft = slider.scrollLeft > 0;
      const isScrollableRight =
        slider.scrollLeft < slider.scrollWidth - slider.clientWidth;
      setIsScrollable({ left: isScrollableLeft, right: isScrollableRight });
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSlideLeft = () => {
    const slider = sliderRef.current;
    slider.scrollBy({
      left: -slider.clientWidth,
      behavior: "smooth",
    });
  };

  const handleSlideRight = () => {
    const slider = sliderRef.current;
    slider.scrollBy({
      left: slider.clientWidth,
      behavior: "smooth",
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
        <div
          className="flex w-full mt-10 md:mt-24 justify-between mb-3 overflow-x-scroll hidden-scrollbar snap-x"
          ref={sliderRef}
        >
          {consultantsdata?.map((data, idx) => {
            return (
              <React.Fragment key={idx}>
                <div
                  className="block md:min-w-[300px] mr-6 snap-start"
                  key={idx}
                >
                  <div className="flex relative w-[176px] h-[290px] md:h-[436px] md:w-[245px]">
                    <Image
                      src={data.src}
                      className="absolute"
                      fill
                      quality={100}
                      alt="kaam.com logo"
                      draggable={false}
                    />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div
          className={`absolute top-0 left-0 flex md:w-[10%] h-full justify-center items-center ${
            isScrollable.left ? "opacity-100" : "opacity-0"
          }`}
        >
          <BiChevronLeft
            onClick={handleSlideLeft}
            className={`text-black bg-white rounded-full shadow-xl font-thin text-[40px] cursor-pointer`}
            size={40}
          />
        </div>
        <div
          className={`absolute top-0 right-0 flex md:w-[10%] h-full justify-center items-center ${
            isScrollable.right ? "opacity-100" : "opacity-0"
          }`}
        >
          <BiChevronRight
            onClick={handleSlideRight}
            className={`text-black bg-white rounded-full shadow-xl font-thin text-[40px] cursor-pointer`}
            size={40}
          />
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
