import React from 'react'
import BagIcon from '@/../public/svg icons/bagIcon.svg'

function JobSilderCard({item}) {
  return (
    <div className="bg-white p-5 pb-8 gap-5 min-w-[352px] rounded-xl mr-8 snap-start">
        <div className='mb-5'>
            <div className="flex flex-col p-2 border rounded-md shadow-bs-1 w-max mb-5">
            <BagIcon/>
            </div> 
            <h3 className='text-black text-xl font-semibold'>{item.title}</h3>
        </div>
        <p className='text-black text-xl font-light'>{item.desc}</p>
    </div>
  )
}

export default JobSilderCard