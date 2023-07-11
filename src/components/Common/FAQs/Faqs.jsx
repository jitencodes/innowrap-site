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
            <div className="grid grid-cols-1 w-full" >
                {
                    data.map((items,idx)=>{
                        const {ques,ans} = items;
                        return <>
                                <div onClick={()=>{handleClick(idx)}} className={`transition-all  duration-300 flex flex-col ${open===idx?'border rounded-xl shadow-bs-1 py-5 mb-3':'py-10 border-b border-[#E5E5E5]'} px-8`}>
                                    <div className='flex justify-between font-bold text-lg'> <p className={`inline-block ${open===idx?'text-blue':'text-black'}`}>{ques}</p> {open===idx? <BiMinus size={30}/>: <BiPlus size={30}/>} </div>
                                    <p className={`transition-all duration-200 ${open===idx?'block pt-5 font-normal text-base text-[#7C7C7C]':'hidden'}`}>{ans}</p>
                                </div>
                        </>
                    })
                }
            </div>
  )
}

export default Faqs