'use client'
import React, { useState } from 'react';
const buttons = ['Contract Developers','Permanent Developers','Recruiters']
const constract = [
    {
        title:'Hourly Developers',
        desc:'Innowrap Employee working on hourly basis for you',
        bullets:['Immediate onboarding','Certified Developer','Tracking Software','Pay only for measurable work','No Upfront Deposits','Access to in-house trainer'],
        btn:'Hire Developers',
    },
    {
        title:'Dedicated Developers',
        desc:'Innowrap Employee working dedicatedly for you for the entire contract duration',
        bullets:['Everything in Hourly Developer Package','Timezone Availability','1 Week Trial Period0','Maximum 45 hours per week','1 Month Notice to release developer','Immediate Replacement','Access to Senior Developer'],
        btn:'Hire Developers',
    },
    {
        title:'Offshore Managed Team',
        desc:'Innowrap Employee working on hourly basis for you',
        bullets:['Immediate onboarding','Certified Developer','Tracking Software','Pay only for measurable work','No Upfront Deposits','Access to in-house trainer'],
        btn:'Hire Developers',
    },
    {
        title:'Fixed Cost Projects',
        desc:'Innowrap Employee working dedicatedly for you for the entire contract duration',
        bullets:['Everything in Hourly Developer Package','Timezone Availability','1 Week Trial Period0','Maximum 45 hours per week','1 Month Notice to release developer','Immediate Replacement','Access to Senior Developer'],
        btn:'Hire Developers',
    },
]
const Permanent = [
    {
        title:'Contract to Hire Developers',
        desc:'Innowrap Employee working on hourly basis for you',
        bullets:['Immediate onboarding','Certified Developer','Tracking Software','Pay only for measurable work','No Upfront Deposits','Access to in-house trainer'],
        btn:'Hire Developers',
    },
    {
        title:'Permanent Developers',
        desc:'Innowrap Employee working dedicatedly for you for the entire contract duration',
        bullets:['Everything in Hourly Developer Package','Timezone Availability','1 Week Trial Period0','Maximum 45 hours per week','1 Month Notice to release developer','Immediate Replacement','Access to Senior Developer'],
        btn:'Hire Developers',
    },
    {
        title:'Executives',
        desc:'Innowrap Employee working on hourly basis for you',
        bullets:['Immediate onboarding','Certified Developer','Tracking Software','Pay only for measurable work','No Upfront Deposits','Access to in-house trainer'],
        btn:'Hire Developers',
    },
]
const Recruiters = [
    {
        title:'Recruitment Process Outsourcing',
        desc:'Innowrap Employee working on hourly basis for you',
        bullets:['Immediate onboarding','Certified Developer','Tracking Software','Pay only for measurable work','No Upfront Deposits','Access to in-house trainer'],
        btn:'Hire Developers',
    },
    {
        title:'Payroll Outsourcing',
        desc:'Innowrap Employee working dedicatedly for you for the entire contract duration',
        bullets:['Everything in Hourly Developer Package','Timezone Availability','1 Week Trial Period0','Maximum 45 hours per week','1 Month Notice to release developer','Immediate Replacement','Access to Senior Developer'],
        btn:'Hire Developers',
    },
]
const Packages = () => {
    
  const [active, setActive] = useState(0);
    const [packages, setpackages] = useState(constract)
    
  const hadleClick =(index)=>{
      setActive(index)
    if(index===0){
        setpackages(constract)
    }else if(index===1){
        setpackages(Permanent)
    }else{
        setpackages(Recruiters)
    }
  }
    return (
    <>
        <div className="px-6 md:px-12 lg:px-20 xl:px-40 pt-10 md:pt-20 flex flex-col justify-center items-center">
            <p className="text-center text-blue font-semibold uppercase mb-3 tracking-[0.2em]">we have got you covered</p>
            <h2 className="text-center text-black  font-semibold text-[40px] mb-3">Packages</h2>
            <p className="text-center text-balck font-normal text-base max-w-[800px]">We understand that every company&#39;s tech hiring needs are different. We have plans catering to everything from quick leasing of our employees to hiring fte employees into your payroll</p>
        
            <div className="flex flex-col md:flex-row mt-6 md:mt-16 md:gap-10">
                {buttons?.map((button, index) => (
                <button key={index} onClick={()=>{hadleClick(index)}} className={`${index==active? 'text-blue bg-[#EAF0FF] font-bold':'text-black  font-semibold'}  text-sm md:text-xl cursor-pointer py-2 px-2 md:px-8  rounded-r-100`}>
                    {button}
                </button>
                ))}
            </div>


            {/* <div className="flex flex-col md:flex-row gap-8 md:gap-0 mt-6 md:mt-12 md:shadow-bs-2 md:rounded-[16px] border-[#838394] md:border-bd-2 md:border md:overflow-hidden">

                    {
                        packages.map((data,idx)=>{
                            const {title, desc, bullets, btn} = data;
                            return<div key={idx} className="flex flex-col shadow-bs-2 md:shadow-none rounded-[16px] md:rounded-none overflow-hidden border-[#838394] border md:border-r border-bd-2 pb-11 max-w-[300px]">
                                <div className="text-center bg-[#EAF0FF] pt-8 px-4 h-[250px] border-b border-[#838394]">
                                    <p className="text-black text-center font-bold text-2xl mb-2">{title}</p>
                                    <p className="text-black text-center font-normal text-base">{desc}</p>
                                </div>

                                <div className="text-center flex flex-col justify-between h-full items-center">
                                    <ul className='flex flex-col gap-8 pt-6 mb-9'>
                                        {bullets.map((bullet,idx2)=>{
                                            return<li key={idx2}>
                                            <div className='inline-block text-center mr-[6px] w-4 h-4 bg-[#D9FEEB] rounded-full text-[#528996] text-xs'>
                                            &#10003;
                                            </div>
                                            <p className='inline-block text-balck font-normal text-base'>{bullet}</p>
                                        </li>
                                        })}
                                    </ul>

                                    <button className='rounded px-2 py-3 text-white bg-gradient-1 shadow-bs-1 font-normal text-base w-fit'>Start Hiring</button>

                                </div>
                        </div>
                        })
                    }
            </div> */}

            <div className="flex flex-col md:flex-row gap-8 md:gap-0 mt-6 md:mt-12 md:shadow-bs-2 md:rounded-[16px] border-[#838394] md:border-bd-2 md:border md:overflow-hidden">

                    {
                        packages.map((data,idx)=>{
                            const {title, desc, bullets, btn} = data;
                            return<div key={idx} className="flex flex-1 flex-col shadow-bs-2 md:shadow-none rounded-[16px] md:rounded-none overflow-hidden border-[#838394] border md:border-r border-bd-2 pb-11 max-w-[300px]">
                                <div className="text-center bg-[#EAF0FF] pt-8 px-4 md:h-[300px] lg:h-[250px] border-b border-[#838394]">
                                    <p className="text-black text-center font-bold text-2xl mb-2">{title}</p>
                                    <p className="text-black text-center font-normal text-base">{desc}</p>
                                </div>

                                <div className="text-center flex flex-col justify-between h-full items-center">
                                    <ul className='flex flex-col gap-8 pt-6 mb-9 px-4 lg:px-5'>
                                        {bullets.map((bullet,idx2)=>{
                                            return<li key={idx2} className='text-left'>
                                            <div className='inline-block text-center mr-[6px] w-4 h-4 bg-[#D9FEEB] rounded-full text-[#528996] text-xs'>
                                            &#10003;
                                            </div>{bullet}
                                        </li>
                                        })}
                                    </ul>

                                    <button className='rounded px-2 py-3 text-white bg-gradient-1 shadow-bs-1 font-normal text-base w-fit'>Start Hiring</button>

                                </div>
                        </div>
                        })
                    }
            </div>

        </div>
    </>
  )
}

export default Packages