import HeroBanner2 from '@/components/Common/Banners/HeroBanner2'
import EmailForm from '@/components/Common/Forms/EmailForm'
import React from 'react'
import { serviecBanner } from '../data';
import BrandSlider from '@/components/Common/Sliders/BrandSlider';
import Image from 'next/image';
import SingleSlideSlider from '@/components/Common/Sliders/SingleSlideSlider';
import QouteIcon from '@/../public/svg icons/qoute-icon.svg'
import Faqs from '@/components/Common/FAQs/Faqs';
import Link from 'next/link';
import Testimonials from '@/components/Hiring/Testimonials';
import JobSlider from '@/components/Common/Sliders/JobSlider';
import JobSilderCard from '@/components/Common/Cards/JobSilderCard';
import StorySlider from '@/components/Common/Sliders/StorySlider';
import ServiceSllider from '@/components/Common/Sliders/ServiceSllider';

const sliderJobs= [
  {
    title:'Permanent / Full-Time Equivalent Jobs',
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vel massa vitae rhoncus."
  },
  {
    title:'Permanent / Full-Time Equivalent Jobs',
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vel massa vitae rhoncus."
  },
  {
    title:'Permanent / Full-Time Equivalent Jobs',
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vel massa vitae rhoncus."
  },
  {
    title:'Permanent / Full-Time Equivalent Jobs',
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vel massa vitae rhoncus."
  },
  {
    title:'Permanent / Full-Time Equivalent Jobs',
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vel massa vitae rhoncus."
  },
  {
    title:'Permanent / Full-Time Equivalent Jobs',
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vel massa vitae rhoncus."
  },
  {
    title:'Permanent / Full-Time Equivalent Jobs',
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vel massa vitae rhoncus."
  },
]

function page() {
  const getData = (e)=>{
    const data = e;
    if(data){
      return data
    }
    return notFound()
  }
  const hero1 = getData(serviecBanner)
  return (<>
    <section aria-describedby='hero-section'>
      <div className="flex flex-col relative z-20 bg-white pt-16 md:pt-24 lg:pt-32 xl:pt-36">
        <HeroBanner2 form={EmailForm} data={hero1}/>
      </div>
      <BrandSlider/>
    </section> 
    <section className="flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center py-10 pd:py-20 lg:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-2 md:mr-8">
                    <p className="text-black font-bold text-2xl md:text-[32px] mb-6">Services We Offer</p>
                    <p className='text-black text-lg font-medium mb-6'>At Innowrap, we stay ahead of the curve by embracing all the latest technological advancements and incorporating them into our wide range of services including consulting, design, engineering, and emerging technology. Our expertise is always evolving to provide cutting-edge solutions for our clients.</p>
                    <QouteIcon/>
                    <p className='text-black text-base font-medium mt-8'>
                    Innowrap is a professional, dedicated team furnishing top quality talent and domain expertise. They have demonstrated real understanding of our issues and time and again have come up with their own innovative solutions that has helped us a great deal.”
                    </p>
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
                                <p className="font-normal text-xs md:text-base text-black ">The Walmart, Marketing Manager</p>
                            </div>
                        </div>
                </div>
                <div className="block">
                    <ServiceSllider items={sliderJobs} arrowStyle={'above'} arrowColor={'black'} />
                </div>
            </div>

        </section>

      <section className="px-6 md:px-12 lg:px-20 xl:px-40 mb-10 md:mb-20 xl:mb-28">
          <div className="flex py-6 md:py-10 items-center w-full rounded-lg px-3 md:px-12" style={{backgroundImage:'url(images/hiring-page/requirement-banner.png)', backgroundSize:'cover'}}>
              <div className="flex flex-col lg:flex-row md:justify-between items-start gap-4 md:gap-0 md:items-center w-full">
                  <div className="flex flex-col gap-3 desktop:max-w-[350px] w-full">
                      <p className="text-white capitalize leading-snug font-semibold text-[24px] md:text-[32px]">
                      Want to hire software developers instead ?
                      </p>
                      <Link href='/' className="text-white capitalize font-semibold text-xs md:text-[16px] w-max">
                      Explore Contract / Dedicated / Temp Developers
                      </Link>
                  </div>
                  <div className="flex md:mt-12 gap-4 w-full flex-col md:flex-row justify-end">
                      <input type="email" placeholder='Enter Your Email ID' className='rounded border-2 px-2 py-3 text-black placeholder:text-white font-normal text-base w-full md:max-w-[450px] border-white bg-blue' />
                      <button className='rounded self-end px-2 w-full md:w-fit md:px-4 py-2 md:py-3 whitespace-nowrap text-blue h-fit bg-white shadow-bs-1 font-normal text-base'>Tell Us What You Need</button>
                  </div>
              </div>
          </div>
      </section>


    <section className="flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center bg-[#F1F4FB] py-10 pd:py-20 lg:py-32">
    <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase text-center">How it works</p>
    <p className="text-black font-semibold text-2xl md:text-[40px] text-center mb-14">How we hire ?</p>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center md:items-start gap-16 md:gap-5 md:justify-between w-full">
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

    <section className="px-6 md:px-12 lg:px-20 xl:px-40 mt-10 md:mt-20 xl:mt-28">
            <div className="flex py-6 md:py-10 items-center w-full rounded-lg px-3 md:px-12" style={{backgroundImage:'url(images/hiring-page/requirement-banner.png)', backgroundSize:'cover'}}>
                <div className="flex flex-col lg:flex-row md:justify-between items-start gap-4 md:gap-0 md:items-center w-full">
                    <div className="flex flex-col gap-3 desktop:max-w-[350px] w-full">
                        <p className="text-white capitalize leading-snug font-semibold text-[24px] md:text-[32px]">
                        Want to hire software developers instead ?
                        </p>
                        {/* <Link href='/' className="text-white capitalize font-semibold text-xs md:text-[16px] w-max">
                        Explore Contract / Dedicated / Temp Developers
                        </Link> */}
                    </div>
                    <div className="flex md:mt-12 gap-4 w-full flex-col md:flex-row justify-end">
                        <input type="email" placeholder='Enter Your Email ID' className='rounded border-2 px-2 py-3 text-black placeholder:text-white font-normal text-base w-full md:max-w-[450px] border-white bg-blue' />
                        <button className='rounded self-end px-2 w-full md:w-fit md:px-4 py-2 md:py-3 whitespace-nowrap text-blue h-fit bg-white shadow-bs-1 font-normal text-base'>Tell Us What You Need</button>
                    </div>
                </div>
            </div>
      </section>
    
      <section className="relative bg-white py-10 md:py-20 lg:py-32 relative">
        <p className="pl-6 md:pl-12 lg:pl-20 xl:pl-40 uppercase font-semibold text-base tracking-[0.2em] text-blue">
          OUR SUCCESS STORIES
        </p>
        <div className="pl-6 md:pl-12 lg:pl-20 xl:pl-40 flex flex-col md:flex-row justify-between gap-4 md:gap-0 pr-6 md:pr-12 lg:pr-20 xl:pr-40">
          <h2 className="font-semibold text-[32px] text-black leading-[44px]">
            Lorem ipsum dolor sit amet.
          </h2>
        </div>
        {/* slider  */}
        <StorySlider items={sliderJobs} arrowStyle={"above"} />
      </section>

    <Testimonials/>


    {/* <section className="flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center pb-10 pd:pb-20 lg:pb-32">
            <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase text-center">FAQS</p>
            <p className="text-black font-semibold text-2xl md:text-[40px] text-center mb-14 md:mb-20">Frequently asked Questions</p>

            <Faqs />
        </section> */}
    </>)
}

export default page