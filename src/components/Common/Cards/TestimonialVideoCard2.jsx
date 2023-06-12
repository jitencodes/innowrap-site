import PlayIcon from '@/../public/svg icons/play-icon-white.svg'
const TestimonialVideoCard2 = () => {
  return (
    <>
        <div className="p-3 md:p-5 min-w-full h-full snap-start">
          <div className="relative flex gap-8 h-[330px] md:h-[412px] mb-4 w-full">
            <div style={{backgroundImage:'url(images/jobs/testimonial-bg.png)', backgroundSize:'cover', backgroundPosition:'center',width:'-webkit-fill-available'}} className="w-[320px]  border border-b1 rounded-2xl shadow-bs-2 flex flex-col justify-end">
              <div className="absolute bg-blend-img mix-blend-multiply bg-opacity-25 rounded-xl w-full h-full"></div>
                  <div className="flex absolute bottom-[30px] right-[30px] justify-center items-center">
                      <PlayIcon/>    
                  </div>    
                <div className="absolute p-6">
                  <h3 className="font-bold mt-4 text-sm md:text-xl text-white ">Siddharth Taurani</h3>
                  <p className="font-normal mt-2 text-xs md:text-base text-white ">Front End Developer, Exp 15 Years,</p>
                  <p className="font-normal text-xs md:text-base text-white ">IT Department</p>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default TestimonialVideoCard2