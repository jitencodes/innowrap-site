import ConsultantsSlider from '@/components/Common/Sliders/ConsultantsSlider';


function Consultants() {
   
  return (
    <div className="bg-gradient-1-reverse py-10 md:py-20 pl-6 md:pl-12 lg:pl-20 xl:pl-40 ">
            <p className='uppercase font-semibold text-base tracking-[0.2em] text-white'>discover</p>
            <div className="flex flex-col md:flex-row justify-between pr-6 md:pr-12 lg:pr-20 xl:pr-40 gap-4 md:gap-0">
                <h2 className='font-semibold text-[32px] text-white leading-[44px]'>
                    Book an interview with our top in-house consultants
                </h2>
                <div className="flex items-center justify-end ml-3">
                <p className='font-semibold text-xl text-white whitespace-nowrap'>
                    See More 
                </p>
                <span className='text-white border-white ml-2 border-[1.5px] text-xs font-light cursor-pointer rounded-full h-6 w-6 flex justify-center items-center'>
                &#10132;
                    </span>
                </div>
            </div>


            <ConsultantsSlider/>
        </div>
  )
}

export default Consultants