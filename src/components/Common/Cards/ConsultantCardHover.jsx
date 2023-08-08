'use client'
import Image from "next/image"
import VerifiedIcon from '@/../public/svg icons/green-tick.svg'
import PlayIcon from '@/../public/svg icons/playIcon.svg'

const ConsultantCardHover = ({data}) => {
  return (
    <>
        <div className="relative overflow-hidden w-[220px] md:w-[310px] h-[310px] md:h-[418px] bg-center border border-b1 rounded-2xl shadow-bs-2 ">
            <Image  className="rounded-lg bg- w-auto tablet:h-[160px] h-[230px]"
                src={data?.bgImg}
                fill
                alt={data.alt}
            />
            <div className="flex h-full absolute top-0 bg-gradient-to-b from-transparent to to-black w-full"></div>
            <div className="flex flex-col gap-8 justify-end h-full">
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