import Image from 'next/image'
import React from 'react'
import ContactForm from '../Forms/ContactForm'

function HeroBannerxForm({data, form:Form}) {
    const {text,desc, image,cta,serviceName} = data
    console.log('data',data)
  return (
    <>
         {/* Hero banner  */}
         <div className="px-6 md:px-12 lg:px-20 xl:px-40 pt-6 md:pt-12 min-h-[calc(100vh_-_285px)] flex h-fit flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-7/12 lg:w-1/2">
                <p className="font-semibold text-3xl sm:text-4xl md:text-5xl text-black -tracking-[0.05em] md:mb-10">
                {text}
                </p>
                <p className="font-light max-w-[550px] text-md sm:text-lg md:text-xl text-black -tracking-[0.05em] md:mb-10">
                {desc}
                </p>
                <div className="flex md:hidden justify-center mb-3">
                    <div className="absolute w-[90%] h-[550px] -z-10">
                        <Image  className='absolute '
                                src={image}
                                fill={true}
                                alt='Certified Full stack developer image | Innowrap'
                            /> 

                    </div>
                        <ContactForm serviceName={serviceName}/>    
                </div>
                <p className="font-medium max-w-[550px] text-md sm:text-lg md:text-xl text-black -tracking-[0.05em] mb-4">
                {cta}
                </p>
                <div className="flex gap-4">
                    <input type="email" placeholder='Enter Your Email ID' className='rounded border-[1.1px] px-2 py-3 text-black placeholder:text-black font-normal text-base w-[350px] border-black' />
                    <button className='rounded px-2 py-3 text-white bg-gradient-1 shadow-bs-1 font-normal text-base min-w-fit'>Start Hiring</button>
                </div>
            </div>
            <div className="hidden md:flex relative w-1/2 h-full justify-center  pt-0 md:p-10 lg:14">
                <Image  className='absolute -z-10'
                        src={image}
                        fill={true}
                        alt='Certified Full stack developer image | Innowrap'
                    /> 
                <ContactForm/>    
            </div>
        </div>

    </>
  )
}

export default HeroBannerxForm