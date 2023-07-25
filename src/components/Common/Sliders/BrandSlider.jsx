'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

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
function BrandSlider() {
  return (
    <>
        {/* Hero Brand List */}
        <div className="flex px-6 md:px-12 lg:px-20 xl:px-40 py-10 md:py-12 justify-between">
        <Swiper
            spaceBetween={0}
            slidesPerView={2}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false, // Allows autoplay to continue even when user interacts with the carousel
            }}
            stopOnLastSlide={false}
            modules={[Autoplay]}
            //   navigation={true}
            //   pagination={{ clickable: true }}
            breakpoints={{
                // Breakpoint for screens smaller than 390px
                390: {
                slidesPerView: 3,
                spaceBetween: 2,
                },
                // Breakpoint for screens smaller than 480px
                480: {
                slidesPerView: 3,
                spaceBetween: 5,
                },
                // Breakpoint for screens smaller than 640px
                640: {
                slidesPerView: 4,
                spaceBetween: 5,
                },
                // Breakpoint for screens smaller than 768px
                768: {
                slidesPerView: 6,
                spaceBetween: 20,
                },
                // Breakpoint for screens smaller than 1024px
                1024: {
                slidesPerView: 7,
                spaceBetween: 30,
                },
            }}
            className="mySwiper"
        >
            {
                brandImages?.map((brand, idx)=>{
                let   {src, width, height, alt, id} = brand;
                    return(
                        <React.Fragment key={id}>
                            <SwiperSlide>
                                <div className={`flex w-[100px] items-center justify-center h-full`}>
                                <Image
                                        src={src}
                                        width={width}
                                        height={height}
                                        alt={alt}
                                    />
                                </div>
                            </SwiperSlide>
                        </React.Fragment>
                    )
                })
            }
        </Swiper>
        </div>
  </>
)
}

export default BrandSlider