'use client'
import React, { useState } from 'react'
import { notFound } from 'next/navigation'
import { HiringBanner1, HiringBanner2, heropagination } from '@/app/data';
import HeroBanner from '../Common/Banners/HeroBanner';
import HeroBanner2 from '../Common/Banners/HeroBanner2';
import BrandSlider from '../Common/Sliders/BrandSlider';
import Consultants from './Consultant';
import EmailForm from '../Common/Forms/EmailForm';

function Hiring() {
  const [heroslide, setHeroslide] = useState(1);
  const getData = (e)=>{
    const data = e;
    if(data){
      return data
    }
    return notFound()
  }
  const hero1 = getData(HiringBanner1)
  const hero2 = getData(HiringBanner2)
  const pagination = getData(heropagination)
  return (
    <>
    {heroslide===1?<HeroBanner data={hero1}/>:<HeroBanner2 data={hero2} form={EmailForm}/>}

      {/* Hero Banner Pagination */}
      <div className="flex mt-10 md:mt-16 px-6 md:px-12 lg:px-20 xl:px-40 gap-4">
            {
              pagination.map((page,idx)=>{
                const {id, title} = page;
                return(
                <div key={idx} 
                  onClick={()=>{setHeroslide(id)}}
                  className={`group transition-all duration-300 flex gap-2 ${heroslide===id? 'w-[320px] max-w-fit bg-[#EAF0FF]':''} cursor-pointer items-center h-7 py-1 px-2 rounded-r-100  w-12  overflow-hidden`}>
                  <div className={`${heroslide===id?'bg-white':'bg-black'} rounded-full flex justify-center items-center h-5 w-5 text-center`}>
                      <span className={`${heroslide===id?'text-blue':'text-white'}`}>
                          {id}
                      </span>
                  </div>
                    <p className={`whitespace-nowrap overflow-hidden overflow-ellipsis ${heroslide===id?'block text-blue':'hidden'}`}>
                    {title}
                    </p>
                </div>

                )
              })
            }
            
            {/* <div className="flex gap-2 bg-[#EAF0FF] cursor-pointer items-center py-1 px-2 rounded-r-100 pr-5">
                <div className="rounded-full flex justify-center items-center bg-white h-5 w-5 text-center">
                    <span className="text-blue"> 
                        2
                    </span>
                </div>
                <p className="text-blue">
                USA based start save 70%
                </p>
            </div> */}
        </div>

      <BrandSlider/>
    </>
  )
}

export default Hiring