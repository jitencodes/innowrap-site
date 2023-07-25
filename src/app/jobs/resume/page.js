import Image from 'next/image'
import React from 'react';
import ResumeUploadForm from '@/components/Jobs/ResumeUpload';


function page() {
  return (
    <div className=" flex justify-center text-center h-fit relative bg-[#F1F4FB] pt-16 md:pt-24 lg:pt-32 xl:pt-36">
      <div className="flex -top-4 left-0 absolute h-[400px] w-screen -z-1">
        <Image
              src="/svg icons/resumeBg1.svg"
              className='dr'
              fill
              quality={100}
              alt='background image with polcadots'
              draggable={false}
          />
      </div>
      <div className="flex -bottom-4 left-0 absolute h-[400px] w-screen -z-1">
        <Image
              src="/svg icons/resumeBg2.svg"
              className='dr'
              fill
              quality={100}
              alt='background image with polcadots'
              draggable={false}
          />
      </div>

        {/* Form for upload resume */}
        <div className="py-20 flex  flex-col relative z-2 w-full max-w-[620px]">
        <ResumeUploadForm/>
        </div>
        
    </div>
  )
}

export default page
