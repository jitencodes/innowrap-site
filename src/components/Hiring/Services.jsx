'use client'
import { useState } from 'react';
import SwipeableButtonList from '../Common/Sliders/SwipableButtonList';

const Services = () => {

    let services = ['Front End Developer','Back End Developer','Designers','App / PWA / Wearables / IOT Developers','Back End Developer','Designers','App / PWA / Wearables / IOT Developers']
    let Technologies = ['css', 'html', 'react', 'vue js', 'angularjs', 'javascript', 'dom manipulation', 'json', 'ajax', 'node js', 'mysql', 'java', 'problem solving', 'front end engineering', 'quality assurance engineer']
    return (
    <>
        <section className="flex flex-col my-10 md:my-20 lg:my-32 px-6 md:px-12 lg:px-20 xl:px-40">
            <p className="text-blue font-semibold uppercase text-center mb-3 tracking-[0.2em]">discover</p>
            <p className="text-black font-semibold text-2xl md:text-[40px] text-center mb-6 md:mb-14">What you are looking for?</p>
            <SwipeableButtonList buttons={services}/>
            <div className="flex w-full flex-wrap gap-2 md:gap-5 justify-center mt-7">

            {Technologies?.map((button, index) => (
                <button key={index} className={`border px-4 rounded-r-100 py-2 whitespace-nowrap text-black font-semibold text-xs md:text-xl`}>
                    {button}
                </button>
            ))}
            </div>
        </section>
    </>
  )
}

export default Services