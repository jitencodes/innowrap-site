import Link from 'next/link'
import React from 'react'
import CustomBtn from '../Common/Buttons/CustomBtn'

function StickyTopBar() {
  return (
    <div className="flex py-3 bg-blue gap-4 text-white justify-between items-center px-6 md:px-10">
      <p className='text-lg font-bold tablet:font-semibold tablet:text-sm'>
      Deploy Top Indian Developers on your project within 24 hours
      </p>
     <form action="" className='flex gap-3 '>
          <input type="email" placeholder='Enter Your Email Id' className='bg-[#4a47e9] text-[#9c9af2] lg:w-[300px]   h-max rounded px-3 py-3 tablet:hidden' />
          <CustomBtn text={'Start Hiring'} url={'/'} bg={'bg-blue'} color={'white'} />
     </form>
    </div>
  )
}

export default StickyTopBar