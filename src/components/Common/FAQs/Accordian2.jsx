'use client'
import React, { useState } from 'react'
import { BiMinus, BiPlug, BiPlus } from 'react-icons/bi'

const data = [
    {
        ques:'How long does it take to hire Developers?',
        ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vel massa vitae rhoncus.'
    },
    {
        ques:'How long does it take to hire Developers?',
        ans:'Innowrap is a professional, dedicated team furnishing top quality talent and domain expertise. They have demonstrated real understanding of our issues and time and again have come up with their own innovative solutions that has helped us a great deal'
    },
    {
        ques:'How long does it take to hire Developers?',
        ans:'How long does it take to hire Developers?'
    },
    {
        ques:'How long does it take to hire Developers?',
        ans:'Do you have a business idea but are unsure about converting it into an iOS app? Innowrap consultants will help you to convert your idea into iOS app features. Our experienced tech consultants will offer the right advice in choosing the branding and design of your iOS app'
    },
    {
        ques:'How long does it take to hire Developers?',
        ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vel massa vitae rhoncus.'
    },
]
function Faqs() {
    const [open, setOpen] = useState(null);

    const handleClick =(idx)=>{
        if (open ===idx){
            setOpen(null)
        }else{
            setOpen(idx)
        }
    }
  return (
            <div className="grid grid-cols-1 w-full gap-5" >
                {
                    data.map((items,idx)=>{
                        const {ques,ans} = items;
                        return <>
                                <div onClick={()=>{handleClick(idx)}} className={`transition-all  duration-300 flex flex-col ${open===idx?'border shadow-bs-1 py-2':' '} mb-3 px-8 rounded-xl cursor-pointer`}>
                                    <div className='flex justify-between font-bold text-lg'>
                                        <div className="flex">
                                            <div className="flex items-start pt-[6px]">
                                                <span className={`${open===idx?'text-white bg-gradient-to-b from-[#9747FF] to-[#2623D4]':'text-white bg-black'} h-[20px] w-[20px] rounded-full flex items-center justify-center text-xs`}>{idx+1}</span> 
                                            </div>
                                            <p className={`inline-block ml-5 ${open===idx?'text-blue':'text-black'}`}>{ques}</p>
                                        </div> 
                                        {open===idx? <BiMinus size={30}/>: <BiPlus size={30}/>} 
                                    </div>
                                    <p className={`transition-all duration-200 ${open===idx?'block pt-5 font-normal text-base text-[#7C7C7C]':'hidden'}`}>{ans}</p>
                                </div>
                        </>
                    })
                }
            </div>
  )
}

export default Faqs