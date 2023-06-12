import Image from "next/image"
import VerifiedIcon from '@/../public/svg icons/green-tick.svg'
import PlayIcon from '@/../public/svg icons/playIcon.svg'
const data  = {
    src:'/../public/images/hiring-page/consultant-1.png',
    alt:'image',
    name:'Siddharth Taurani',
    title:'Front End Developer, Exp 15 Years,',
    department:'IT Department'
}
const ConsultantCard = ({data}) => {
  return (
    <>
        <div className="flex gap-8 mb-4 h-[310px] md:h-[418px]">
            <div className="bg-white w-[220px] md:w-[300px]  dark:border-bd-3 p-4 pb-3 md:pb-6 rounded-2xl shadow-bs-2 flex flex-col">
                <div className="flex relative">
                    <Image      className="rounded-lg bg-center w-auto tablet:h-[160px] h-[230px] bg-cover bg-blend-color"
                                src={data.src}
                                width={288}
                                height={240}
                                alt={data.alt}
                            />
                    <div className="flex absolute tablet:top-[10px] top-[14px] tablet:-left-[6px] left-[6px]">
                        <VerifiedIcon className='h-5 w-5 tablet:scale-75 tablet:-translate-y-[2px] translate-x-2' />
                        <div className="bg-white tablet:h-fit text-green tablet:text-[9px] text-xs font-semibold pl-3 rounded-[4px] flex items-center pr-1">Top Rated</div>
                    </div>
                    <div className="flex absolute w-full h-full justify-center items-center">
                        <PlayIcon/>    
                    </div>    
                </div>
                <h3 className="font-bold mt-4 text-sm md:text-xl text-black text-center">{data.name}</h3>
                <p className="font-normal mt-2 text-xs md:text-base text-black text-center">{data.title}</p>
                <p className="font-normal text-xs md:text-base text-black text-center">{data.department}</p>
                <button href="" className="text-blue text-sm md:text-base font-normal rounded-[4px] md:rounded-lg border border-blue text-center mx-auto mt-3 px-2 md:px-3 py-1 md:py-2">Book an appointment</button>
            </div>
        </div>
    </>
  )
}

export default ConsultantCard