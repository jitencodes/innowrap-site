import Hiring from '@/components/Hiring'
import Packages from '@/components/Hiring/Packages'
import HiringBanner from '@/components/Hiring/HiringBanner'
import HiringProcess from '@/components/Hiring/HiringProcess'
import Services from '@/components/Hiring/Services'
import Testimonials from '@/components/Hiring/Testimonials'
import { Footer } from '@/components/Footer/Footer'
import Header from '@/components/header/Header'
import StickyTopBar from '@/components/header/StickyTopBar'
import Consultants from '@/components/Hiring/Consultant'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <StickyTopBar/>
      <Header/> 
      <Hiring />
      <Consultants/>
      <Packages/>
      <Services/>
      <HiringBanner/>
      <HiringProcess/>
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
      <Testimonials/>
      <Footer/>
    </main>
  )
}
