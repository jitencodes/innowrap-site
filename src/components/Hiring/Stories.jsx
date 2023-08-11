import StorySlider from '@/components/Common/Sliders/StorySlider'
import React from 'react'
import {  sliderJobsData } from "@/app/data";

const Stories = () => {
  const getData = (e) => {
    const data = e;
    if (data) {
      return data;
    }
    return notFound();
  };  
  const stories = getData(sliderJobsData);

  return (
    
    <section className="bg-white py-10 md:py-20 lg:py-32 relative">
      <p className="pl-6 md:pl-12 lg:pl-20 xl:pl-40 uppercase font-semibold text-base tracking-[0.2em] text-blue">
        OUR SUCCESS STORIES
      </p>
      <div className="pl-6 md:pl-12 lg:pl-20 xl:pl-40 flex flex-col md:flex-row justify-between gap-4 md:gap-0 pr-6 md:pr-12 lg:pr-20 xl:pr-40">
        <h2 className="font-semibold text-2xl md:text-[32px] text-black leading-[44px]">
          Lorem ipsum dolor sit amet.
        </h2>
      </div>
      {/* slider  */}
      <StorySlider items={stories} arrowStyle={"above"} />
  </section>
  )
}

export default Stories