'use client'
import Image from "next/image"
import VerifiedIcon from '@/../public/svg icons/green-tick.svg'
import PlayIcon from '@/../public/svg icons/playIcon.svg'

const ConsultantCardHover = ({data}) => {
  return (
    <>
        <div className="relative h-[310px] md:h-[418px] flex gap-8">
            <div style={{backgroundImage:`url(${data?.bgImg})`, backgroundSize:'cover'}} className=" w-[220px] md:w-[310px] bg-center relative border border-b1 rounded-2xl shadow-bs-2 flex flex-col justify-end">
                <div className="absolute bg-blend-img mix-blend-multiply bg-opacity-25 rounded-xl w-full h-full"></div>
                <div className="flex absolute top-[28px] left-[20px]">
                    <VerifiedIcon className='h-5 w-5 translate-x-2' />
                    <div className="bg-white text-green text-xs font-semibold pl-3 rounded-[4px] flex items-center pr-1">Top Rated</div>
                </div>
                <div className="flex absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] justify-center items-center">
                    <PlayIcon className="tablet:scale-50"/>    
                </div>    
                <div className="block p-4 pb-6 absolute">
                    <h3 className="font-bold mt-4 text-xl text-white ">{data?.name}</h3>
                    <p className="font-normal mt-2 text-base text-white ">{data?.title}</p>
                    <p className="font-normal text-base text-white ">{data?.department}</p>
                    <button href="" className="text-white text-base font-normal rounded-lg border border-white w-fit mt-3 px-3 py-2">Book an appointment</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ConsultantCardHover