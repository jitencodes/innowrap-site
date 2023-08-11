'use client'
import Image from 'next/image';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BsArrowRight } from 'react-icons/bs';

const StoryCarousel = () => {
  return (
    <AliceCarousel
        mouseTracking
        paddingLeft={40}
        paddingRight={40}
        responsive={{
            0: { items: 1, stagePadding: { paddingLeft: 10, paddingRight: 10 } },
            1080: { items: 2, stagePadding: { paddingLeft: 50, paddingRight: 50 } },
            1280: { items: 3, stagePadding: { paddingLeft: 100, paddingRight: 100 } },
          }}
        infinite
    >
      {/* Add your slide content here */}
              
        {[1,1,1,1,1,1,1,1].map((item,idx)=>{
            return<div key={idx} className="w-fit snap-start mx-3">
            <div className="flex mb-3 md:mb-7 h-[150px] md:h-[300px] lg:h-[300px] xl:h-[300px]  rounded-xl overflow-hidden bg-white relative">
            <Image
                    src='/images/story/story-img-1.png'
                    fill
                    className="object-cover"
                    alt='economical tech talent from emerging markets'
                    />
            </div>
            <div className='bg-blue p-5 pb-8 gap-5 rounded-xl'>
                <div className=" mb-5 h-[40px] md:h-[56px] lg:h-[95px] relative">
                <Image
                    src='/images/brands/brand1.png'
                    fill
                    quality={100}
                    objectFit='contain'
                    objectPosition='left'
                    alt={`puppy`}
                    />
                </div> 
                <p className='text-white text-sm md:text-base lg:text-lg xl:text-xl  font-light'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
                <div href={'/'} className='bg-white flex w-fit px-3 py-2 items-center gap-2 border rounded-lg text-lg font-semibold shadow-bs-1 mt-8 text-black'>Know more <BsArrowRight/></div>
            </div>
        </div>
        }) }
    </AliceCarousel>
  );
};

export default StoryCarousel;
