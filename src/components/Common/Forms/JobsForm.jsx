'use client'
import React, { useState } from 'react'
import { BiChevronDown, BiSearch } from 'react-icons/bi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import Suitecase from '@/../../public/svg icons/suitcase.svg'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import { SlBriefcase } from 'react-icons/sl'
function JobsForm() {
    const [openJobType, setOpenJobType] = useState(false);
    const [openLocation, setOpenLocation] = useState(false);
  return (
    <div className='flex flex-col gap-6 tablet:mt-6'>
        <div className="flex border border-black rounded-[4px] w-max py-1 sm:py-3 items-center">
            <div className="flex gap-1 md:gap-2 items-center border-r px-1 sm:px-2 border-[#a2a2af]">
                <BiSearch className='text-[#a2a2af] text-base'/>
                <input type="text" placeholder='Job Title, Skills or Keywords' className='placeholder:text-black outline-none font-normal text-xs max-w-[70px] md:max-w-[100px] lg:max-w-max sm:text-sm  lg:text-base tracking-normal text-black' />
            </div>
            <div className="flex gap-1 md:gap-2 items-center border-r px-1 sm:px-2 border-[#a2a2af]">
                <SlBriefcase className='text-[#a2a2af] text-base'/>
                    <div className='relative'>
                        <button type="button" onClick={()=>{setOpenJobType(!openJobType)}} class="flex items-center font-normal whitespace-nowrap text-xs max-w-[70px] md:max-w-[100px] lg:max-w-max sm:text-sm  lg:text-base tracking-normal text-black" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Job Type
                        <BiChevronDown className='text-2xl text-[#a2a2af] font-thin'/>
                        </button>
                        <div class={`${openJobType?'block':'hidden'} absolute -left-6 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <ul class="py-1" role="none">
                                <li class="text-[#616161] block px-1 sm:px-2 py-2 text-sm hover:bg-[#f3f4f6] cursor-pointer" role="menuitem" tabindex="-1" id="menu-item-0">Full Time</li>
                                <li class="text-[#616161] block px-1 sm:px-2 py-2 text-sm hover:bg-[#f3f4f6] cursor-pointer" role="menuitem" tabindex="-1" id="menu-item-1">Part Time</li>
                                <li class="text-[#616161] block px-1 sm:px-2 py-2 text-sm hover:bg-[#f3f4f6] cursor-pointer" role="menuitem" tabindex="-1" id="menu-item-2">Contract</li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="flex gap-1 md:gap-2 items-center px-1 sm:px-2">
                <HiOutlineLocationMarker className='text-[#a2a2af]'/>
                    <div className='relative'>
                    <input type="text" onClick={()=>{setOpenLocation(!openLocation)}} placeholder='City, State or Zipcode' className='placeholder:text-black outline-none  font-normal text-xs max-w-[70px] md:max-w-[100px] lg:max-w-max sm:text-sm  lg:text-base tracking-normal text-black' />
                        <div class={`${openLocation?'block':'hidden'} absolute -left-6 top-8 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <ul class="py-1" role="none">
                                <li class="text-[#616161] block px-1 sm:px-2 py-2 text-sm hover:bg-[#f3f4f6] cursor-pointer" role="menuitem" tabindex="-1" id="menu-item-0">Delhi</li>
                                <li class="text-[#616161] block px-1 sm:px-2 py-2 text-sm hover:bg-[#f3f4f6] cursor-pointer" role="menuitem" tabindex="-1" id="menu-item-1">Mumbai</li>
                                <li class="text-[#616161] block px-1 sm:px-2 py-2 text-sm hover:bg-[#f3f4f6] cursor-pointer" role="menuitem" tabindex="-1" id="menu-item-2">Kolkata</li>
                            </ul>
                        </div>
                    </div>
            </div>
            

        </div>
        <ButtonPrimary text={'find Jobs'} url={'/'} shadowReverse={true}/>
    </div>
  )
}

export default JobsForm