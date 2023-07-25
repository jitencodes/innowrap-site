import Image from "next/image"
import Qoute from '@/../public/svg icons/qoute-icon.svg'

const TestimonialTextCard = () => {
  return (
    <>
            <div className="h-[330px] md:h-[412px] mb-2 relative">
                <div className="p-4 md:p-6 h-full w-[220px] md:w-[300px] rounded-2xl border border-b1 shadow-bs-2 flex flex-col justify-between">
                    <div className="flex relative w-[32px] h-[32px] md:w-[40px] md:h-[40px]">
                        <Image className="absolute"
                        fill
                        quality={100}
                        src="/svg icons/qoute-icon.png"
                        alt='economical tech talent from emerging markets'
                        />
                    </div>    
                    <div className="">
                        <p className="font-normal text-sm md:text-base text-black tablet:-translate-y-4"
                           style={{overflow: 'hidden',display: '-webkit-box',WebkitBoxOrient: 'vertical', WebkitLineClamp: 7}}
                        >
                            Innowrap is a professional, dedicated team furnishing top quality talent and domain expertise. They have demonstrated real understanding of our issues and time and again have come up with their own innovative solutions that has helped us a great deal.”
                        </p>
                        <div className="border-t border-[#C7D3DC] mt-2 md:mt-6 pt-2 md:pt-6">
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
            </div>
    </>
  )
}

export default TestimonialTextCard