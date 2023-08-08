import React from 'react'

function EmailForm() {
  return (
    <div className="flex mt-12 gap-4 flex-col md:flex-row">
        <input type="email" placeholder='Enter Your Email ID' className='rounded border-2 px-2 py-3 text-black placeholder:text-black font-normal text-base w-auto md:w-[350px] border-black' />
        <button className='rounded px-2 py-3 text-white bg-gradient-1 shadow-bs-1 font-normal text-base min-w-fit'>Start Hiring</button>
    </div>
  )
}

export default EmailForm