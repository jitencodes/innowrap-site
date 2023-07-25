import PlayIcon from '@/../public/svg icons/play-icon-white.svg'
import Image from 'next/image'
const TestimonialVideoCard = ({item}) => {
  return (
    <>
        <div className="relative flex gap-8 h-[330px] md:h-[412px] mb-2 w-max">
          <div className="relative overflow-hidden w-[220px] md:w-[300px] border border-b1 rounded-2xl shadow-bs-2 flex flex-col justify-end">
              <Image  className='absolute -z-10'
                    src="/images/hiring-page/client-testimonial-profile-1.png"
                    fill
                    alt='back ground image'
                    quality={100}
                />
            <div className="absolute bg-blend-img mix-blend-multiply bg-opacity-25 rounded-xl w-full h-full"></div>
                <div className="flex absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] justify-center items-center">
                    <PlayIcon/>    
                </div>    
              <div className="absolute p-6">
                <h3 className="font-bold mt-4 text-sm md:text-xl text-white ">Siddharth Taurani</h3>
                <p className="font-normal mt-2 text-xs md:text-base text-white ">Front End Developer, Exp 15 Years,</p>
                <p className="font-normal text-xs md:text-base text-white ">IT Department</p>
              </div>
          </div>
        </div>
    </>
  )
}

export default TestimonialVideoCard