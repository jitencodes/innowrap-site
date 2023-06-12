'use client'
import React, { useState } from 'react'

function SelectedList({Buttons, Technologies}) {
    const [active, setActive] = useState(0);
    const hadleClick =(index)=>{
        setActive(index)
      }
  return (
    <div>
        <div className="flex w-full overflow-x-hidden custom-scrollbar justify-center">
              {Buttons?.map((button, index) => (
              <button key={index} onClick={()=>{hadleClick(index)}} className={`${index==active? 'bg-[#EAF0FF] px-4 md:px-7':'px-2 md:px-4'} rounded-r-100 py-2 whitespace-nowrap text-black font-semibold text-xs md:text-xl`}>
                {button}
              </button>
              ))}
            </div>
            <div className="flex w-full flex-wrap gap-2 md:gap-5 justify-center mt-7">
            {Technologies?.map((button, index) => (
                <button key={index} className={`border px-4 rounded-r-100 py-2 whitespace-nowrap text-black font-semibold text-xs md:text-xl`}>
                    {button}
                </button>
            ))}
            </div>
    </div>
  )
}

export default SelectedList