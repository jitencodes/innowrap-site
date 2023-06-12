import Image from "next/image"
import Qoute from '@/../public/svg icons/qoute-icon.svg'

const TestimonialTextCard = () => {
  return (
    <>
            <div className="h-[330px] md:h-[412px] mb-4 relative flex flex-col justify-between">
                <div className="p-4 md:p-6 w-[220px] md:w-[300px] rounded-2xl border border-b1 shadow-bs-2 ">
                    <div className="flex items-center">
                        <Qoute className={`qoute-icon-mobile tablet:scale-50 tablet:-translate-x-3 tablet:-translate-y-3`}/>    
                    </div>    
                    <p className="font-normal text-sm md:text-base text-black tablet:-translate-y-4 ">
                        Innowrap is a professional, dedicated team furnishing top quality talent and domain expertise. They have demonstrated real understanding of our issues and time and again have come up with their own innovative solutions that has helped us a great deal.”
                    </p>
                    <div className="border-t border-[#C7D3DC] pt-2 md:pt-6">
                        <div className="flex items-center gap-[10px]">
                            <div className="flex w-[42px] md:w-[72px] h-[42px] md:h-[72px] rounded-full border-[6px] border-[#F3F5F8] overflow-hidden">
                                <Image
                                src="/images/hiring-page/client-testimonial-profile-3.png"
                                width={194}
                                height={88}
                                alt='economical tech talent from emerging markets'
                                />
                            </div>
                            <div className="">
                                <h3 className="font-bold text-sm md:text-xl text-black md:mb-1">Will Braboni</h3>
                                <p className="font-normal text-xs md:text-base text-black ">The Walmart,</p>
                                <p className="font-normal text-xs md:text-base text-black ">Marketing Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default TestimonialTextCard