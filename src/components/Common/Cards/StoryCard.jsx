import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import CustomBtn from '../Buttons/CustomBtn'
import Link from 'next/link'

function StoryCard({item}) {
  return (
    <div className="w-fit snap-start
    ">
        <div className="flex mb-7 min-w-[352px] h-[300px] rounded-xl overflow-hidden mr-8 bg-white relative">
        <Image
                  src={item.image}
                  fill
                  className="object-cover"
                  alt='economical tech talent from emerging markets'
                  />
        </div>
        <div className='bg-blue p-5 pb-8 gap-5 min-w-[352px] rounded-xl mr-8'>
            <div className=" mb-5 h-[95px] w-[200px] relative">
              <Image
                  src={item.brand}
                  fill
                  quality={100}
                  objectFit='contain'
                  objectPosition='left'
                  alt={item.alt}
                  />
            </div> 
            <p className='text-white text-xl font-light'>{item.desc}</p>
            <div href={'/'} className='bg-white flex w-fit px-3 py-2 items-center gap-2 border rounded-lg text-lg font-semibold shadow-bs-1 mt-8 text-black'>Know more <BsArrowRight/></div>
        </div>
    </div>
  )
}

export default StoryCard