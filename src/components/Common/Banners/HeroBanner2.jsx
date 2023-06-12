import Image from 'next/image'
import React from 'react'

function HeroBanner2({data, form:EmailForm}) {
    const {text,desc, image} = data
    console.log('data',data)
  return (
    <>
         {/* Hero banner  */}
         <div className="px-6 md:px-12 lg:px-20 xl:px-40 flex flex-col md:flex-row justify-between items-center mt-6 md:mt-12">
            <div className="w-full md:w-7/12 lg:w-8/12">
                <p className="font-semibold text-3xl sm:text-4xl md:text-5xl text-black -tracking-[0.05em] md:mb-10">
                {text}
                </p>
                <div className="flex md:hidden justify-center mb-3">
                    <div className="relative w-[90%] max-w-[300px] h-[350px]">
                        <Image  style={{
                            // position: 'absolute',
                            // clip: 'rect(0px,600px,190px,0px)'
                        }}
                                src={image}
                                fill={true}
                                alt='Certified Full stack developer image | Innowrap'
                            /> 
                    </div>
                </div>
                <p className="font-normal max-w-[550px] text-md sm:text-lg md:text-xl text-black -tracking-[0.05em] md:mb-10">
                {desc}
                </p>
                <EmailForm/>
            </div>
            <div className="hidden md:block relative w-[40%] max-w-[370px] h-[400px]">
            <Image
                    src={image}
                    fill={true}
                    alt='Certified Full stack developer image | Innowrap'
                /> 
            </div>
        </div>

    </>
  )
}

export default HeroBanner2