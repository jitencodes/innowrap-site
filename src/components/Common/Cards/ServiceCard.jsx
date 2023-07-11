import Image from 'next/image'
import React from 'react'

function ServiceCard() {
  return (
    <>
        <div className="p-3 md:p-5 min-w-full grid items-center snap-start">
          <div className="relative gap-8 mb-4 w-full">
            <div className="flex justify-between mb-4 items-center">
              <div className="flex items-center gap-3">
                  <Image
                    src="/images/services/mobileDev.png"
                    width={70}
                    height={100}
                    alt='economical tech talent from emerging markets'
                    />
                    <div className="block">
                      <h2 className='text-blue font-bold text-2xl'>Mobile App</h2>
                      <h2 className='text-black font-bold text-2xl'>Development</h2>
                    </div>
              </div>
                <span className='text-[#d3dce3] text-6xl font-normal'>1</span>
            </div>
            <p className='text-black text-base font-medium mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sit a suscipit quod distinctio temporibus autem aperiam. Nesciunt totam harum aspernatur perferendis, dolorum earum odit hic maxime sed fuga minus!</p>
            <div className="flex gap-3 justify-between">
            <ul className='grid gap-3 w-full justify-start'>
              <li className='text-sm text-blue font-bold'>&#10003;<p className='ml-4 inline-block text-blue font-medium underline text-base hover:scale-105 duration-200 transition-all capitalize'>ios app Development</p></li>

              <li className='text-sm text-blue font-bold'>&#10003;<p className='ml-4 inline-block text-blue font-medium underline text-base hover:scale-105 duration-200 transition-all capitalize'>ios app Development</p></li>

              <li className='text-sm text-blue font-bold'>&#10003;<p className='ml-4 inline-block text-blue font-medium underline text-base hover:scale-105 duration-200 transition-all capitalize'>ios app Development</p></li>
            </ul>
            <ul className='grid gap-3 w-full justify-end'>
              <li className='text-sm text-blue font-bold'>&#10003;<p className='ml-4 inline-block text-blue font-medium underline text-base hover:scale-105 duration-200 transition-all capitalize'>ios app Development</p></li>

              <li className='text-sm text-blue font-bold'>&#10003;<p className='ml-4 inline-block text-blue font-medium underline text-base hover:scale-105 duration-200 transition-all capitalize'>ios app Development</p></li>

              <li className='text-sm text-blue font-bold'>&#10003;<p className='ml-4 inline-block text-blue font-medium underline text-base hover:scale-105 duration-200 transition-all capitalize'>ios app Development</p></li>
            </ul>
            </div>
          </div>
        </div>
    </>
  )
}

export default ServiceCard