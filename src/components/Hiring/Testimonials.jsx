import React from 'react'
import TestimonialTextCard from '../Common/Cards/TestimonialTextCard'
import TestimonialVideoCard from '../Common/Cards/TestimonialVideoCard'
import ConsultantsSlider from '../Common/Sliders/ConsultantsSlider'
import TestimonialSlidedr from '../Common/Sliders/TestimonialSlidedr'

const Testimonials = () => {
  return (
    <>
        <div className="flex pl-6 md:pl-12 lg:pl-20 xl:pl-40 flex-col items-center pt-10 mb-10 md:mb-32">
          <div className="pr-6 md:pr-12 lg:pr-20 xl:pr-40">
            <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase text-center">How it works</p>
            <p className="text-black font-semibold text-2xl md:text-[40px] text-center mb-14">How to hire a temp developer from us ?</p>
          </div>
            
            <TestimonialSlidedr/>
        </div>
    </>
  )
}

export default Testimonials