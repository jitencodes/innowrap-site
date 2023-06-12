import Image from "next/image";
const HiringProcess = () => {
    const style1 = {
        backgroundImage: 'linear-gradient(269.47deg, #2163FB 2.09%,  #2623D4 95.75%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
      };
      const style2 = {
          backgroundImage: 'linear-gradient(268.6deg, #2623D4 1.53%, #2163FB 86.9%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        };
  return (
        <>
        <div className="flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col my-10 md:my-20 xl:my-28">
            <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase text-center">our hiring process</p>
            <p className="text-black font-semibold text-2xl md:text-[40px] text-center mb-4 md:mb-14">How we curate top developers for you</p>
            <p className="text-black inline-block mb-6 whitespace-pre-line lg:px-32 font-normal leading-tight text-3xl md:text-[56px] -tracking-[0.05em]">
             We receive
                <span style={style1} className="font-bold ">
                1.5k CVs every week&nbsp;
                </span> 
                into our database which is vetted through a very&nbsp;
                <span style={style2} className="font-bold">
                thorough screening process&quot;
                </span>
            </p>
            <div className="flex w-full max-[600px]:w-full ">
                <Image
                src="/images/hiring-page/banner-4.png"
                width={370}
                height={500}
                layout="responsive"
                alt='economical tech talent from emerging markets'
                    />
            </div>
        </div>
        <section className="flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center bg-[#F1F4FB] pt-10 pb-32">
            <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase text-center">How it works</p>
            <p className="text-black font-semibold text-2xl md:text-[40px] text-center mb-14 md:pb-20">How we hire ?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center md:items-start gap-16 md:gap-5 md:justify-between w-full">
                <div className="flex justify-center">
                  <div className=" max-w-[350px] md:max-w-[250px]">
                      <Image
                          src="/images/hiring-page/step1-to-hire-Share-the-job-description.png"
                          width={194}
                          height={88}
                          alt=''
                      />
                      <p className="text-black font-semibold text-2xl -tracking-[0.02em] mb-4 mt-7">Share the job description</p>
                      <p className="text-black font-normal text-base">Share roles and responsibilities, technical skills needed, experience range and budget</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className=" max-w-[350px] md:max-w-[250px]">
                      <Image
                          src="/images/hiring-page/step2-to-hire-Review-&-shortlist-the-profiles.png"
                          width={194}
                          height={88}
                          alt=''
                      />
                      <p className="text-black font-semibold text-2xl -tracking-[0.02em] mb-4 mt-7">Review & shortlist the profiles</p>
                      <p className="text-black font-normal text-base">This is a placeholder text for Shortlist from our 10k+ talented engineers in the final pool.</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className=" max-w-[350px] md:max-w-[250px]">
                      <Image
                          src="/images/hiring-page/step3-to-hireInterview-and-hire-the-top-experts.png"
                          width={194}
                          height={88}
                          alt=''
                      />
                      <p className="text-black font-semibold text-2xl -tracking-[0.02em] mb-4 mt-7">Interview and hire the top experts</p>
                      <p className="text-black font-normal text-base">This is a placeholder text for the hiring the top experts from the shortlisted profiles.</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className=" max-w-[350px] md:max-w-[250px]">
                      <Image
                          src="/images/hiring-page/step4-to-hire-qualified-and-hired.png"
                          width={194}
                          height={88}
                          alt=''
                      />
                      <p className="text-black font-semibold text-2xl -tracking-[0.02em] mb-4 mt-7">Send Offer and Onboard</p>
                      <p className="text-black font-normal text-base">Share roles and responsibilities, technical skills needed, experience range and budget</p>
                  </div>
                </div>
            </div>

            <button className='w-fit rounded mt-16 px-2 py-3 text-white bg-gradient-1 shadow-bs-1 font-normal text-base'>Start Hiring</button>
        </section>
        
        </>
  )
}

export default HiringProcess