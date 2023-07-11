import Image from 'next/image'
import React from 'react'
import VerifiedIcon from '@/../public/svg icons/green-tick.svg'
import CertificateIcon from '@/../public/svg icons/certificate.svg'
import NoMoneyIcon from '@/../public/svg icons/no-money.svg'
import ReplacementIcon from '@/../public/svg icons/replacement.svg'
import SalaryIcon from '@/../public/svg icons/salary.svg'
import TrialIcon from '@/../public/svg icons/trial.svg'
import EmailForm from '../Forms/EmailForm'

function HeroBanner({data}) {
    const {text, image} = data
    console.log('data',data)
  return (
    <>
         {/* Hero banner  */}
         <div className="px-6 md:px-12 lg:px-20 xl:px-40 flex flex-col md:flex-row justify-between items-center mt-6 md:mt-12">
            <div className="w-full md:w-7/12 lg:w-8/12">
                <p className="font-semibold text-3xl sm:text-4xl md:tcrypext-5xl text-black -tracking-[0.05em] md:mb-10">
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
                <div className="md:rounded-r-100 max-w-2xl flex flex-col md:flex-row gap-4 md:gap-0 justify-between bg-gradient-2 lg:px-6 mb-12">
                    <div className="flex gap-2 items-center">
                        <span>                        
                        <VerifiedIcon/> 
                        </span>
                        <p className="text">Innowrap Direct Employees</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span>                        
                        <VerifiedIcon/> 
                        </span>
                        <p className="text">100% in-house Devs</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span>                        
                        <VerifiedIcon/> 
                        </span>
                        <p className="text">100% control</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-10"
                >
                    <div className="flex gap-2">
                        <CertificateIcon/>
                        <p className='text-[12px] font-normal sm:text-base'>Certified <span className='block'>Developer</span></p>
                    </div>
                    <div className="flex gap-2">
                        <SalaryIcon/>
                        <p className='text-[12px] font-normal sm:text-base'>70% <span className='block'>Cost Saving</span></p>
                    </div>
                    <div className="flex gap-2">
                        <TrialIcon/>
                        <p className='text-[12px] font-normal sm:text-base'>Risk Free <span className='block'>Trial Period</span></p>
                    </div>
                    <div className="flex gap-2">
                        <NoMoneyIcon/>
                        <p className='text-[12px] font-normal sm:text-base'>No <span className='block'>Deposit</span></p>
                    </div>
                    <div className="flex gap-2">
                        <ReplacementIcon/>
                        <p className='text-[12px] font-normal sm:text-base'>Immediate <span className='block'>Replacement</span></p>
                    </div>
                </div>
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

export default HeroBanner