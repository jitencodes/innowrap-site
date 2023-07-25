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
import FeaturesSection from '@/components/Common/Sliders/FeaturesSection';
import ImageSlider from '@/components/Common/Sliders/ImageSlider';
let buttons = ['Job Search','Video Resume','Recommended Jobs','Apply For Jobs','Communication with Recruiters','Platform','Tech Stack','Services','Stakeholders']

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
  const Banner = getData(serviecBanner)
  return (<>
    <section className='px-6 bg-black md:px-12 lg:px-20 xl:px-40 py-8 md:py-10 lg:py-12 xl:py-14'>
      <div className="flex gap-8 md:gap-12 items-center justify-between">
        <div className="flex phone:gap-4 gap-8 md:gap-12 items-center">
          <div className="flex relative h-[75px] w-[75px] md:h-[85px]  md:w-[85px] lg:h-[100px]  lg:w-[100px] xl:h-[132px]  xl:w-[132px] ">
            <Image
                  src="/images/kaam.com/kaam-logo.png"
                  className='absolute'
                  fill
                  quality={100}
                  alt='kaam.com logo'
                  draggable={false}
              />
          </div>
          <div className="block">
            <h1 className="text-blue font-bold text-2xl md:text-4xl lg:text-[40px] leading-snug mb-2">Kaam.com</h1>
            <ul className='flex list-disc flex-col lg:flex-row gap-2 lg:gap-8 pl-5'>
              <li className='text-black font-bold text-base md:text-lg lg:text-xl leading-snug'>Industry: Recruitment</li>
              <li className='text-black font-bold text-base md:text-lg lg:text-xl leading-snug'>Platform: Android, Web</li>
            </ul>
          </div>


        </div>
        
        <div className="tab:hidden flex relative w-[140px] h-[42px] md:w-[154px]  md:h-[46px] lg:w-[168px]  lg:h-[50px] xl:w-[175px]  xl:h-[52px] ">
              <Image
                    src="/images/kaam.com/google-play.png"
                    className='absolute'
                    fill
                    quality={100}
                    alt='kaam.com logo'
                    draggable={false}
                />
            </div>
      </div>

      <div className="my-8 md:my10 lg:my-12 grid gap-4 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="block">
          <h2 className='text-blue font-bold text-lg lg:text-xl xl:text-2xl'>Services Provided</h2>
          <p className="text-[#848484] font-semibold text-sm md:text-base xl:text-lg">Design, Development, Testing, Deployment, Maintenance</p>
        </div>
        <div className="block">
          <h2 className='text-blue font-bold text-lg lg:text-xl xl:text-2xl'>Tech Stack</h2>
          <ul className='flex flex-wrap list-disc'>
            <li className="text-[#848484] font-semibold text-sm md:text-base xl:text-lg ml-8">IDE: Android Studio</li>
            <li className="text-[#848484] font-semibold text-sm md:text-base xl:text-lg ml-8">Database: mysql</li>
            <li className="text-[#848484] font-semibold text-sm md:text-base xl:text-lg ml-8">Programming Language: PHP CI, Kotlin</li>
          </ul>
        </div>
        <div className="block">
          <h2 className='text-blue font-bold text-lg lg:text-xl xl:text-2xl'>Stakeholders</h2>
          <ul className='flex flex-wrap list-disc'>
            <li className="text-[#848484] font-semibold text-sm md:text-base xl:text-lg ml-8">Job Seeker</li>
            <li className="text-[#848484] font-semibold text-sm md:text-base xl:text-lg ml-8">Recruiter</li>
            <li className="text-[#848484] font-semibold text-sm md:text-base xl:text-lg ml-8">Administrator</li>
          </ul>
        </div>
      </div>

      <div>
        <ImageSlider />
      </div>

    </section>
    <section className='px-6 bg-slate-700 md:px-12 lg:px-20 xl:px-40 py-8 md:py-10 lg:py-12 xl:py-14'>
      <p className="text-black font-semibold text-2xl md:text-[40px] text-center mb-6 md:mb-14">Job Seeker Features</p>
      <FeaturesSection buttons={buttons} />
    </section>
    <section className="relative bg-gradient-to-r from-light-blue to-blue bg-transparent py-10 md:py-20 lg:py-28 pl-6 md:pl-12 lg:pl-20 xl:pl-40">
        <div className="flex top-0 left-0 absolute h-[350px] w-screen -z-10">
          <Image
                src="/images/kaam.com/dots-top.png"
                className='dr'
                fill
                quality={100}
                alt='background image with polcadots'
                draggable={false}
            />
        </div>
        <div className="flex bottom-0 left-0 absolute h-[350px] w-screen -z-10">
          <Image
                src="/images/kaam.com/dots-bottom.png"
                className='dr'
                fill
                quality={100}
                alt='background image with polcadots'
                draggable={false}
            />
        </div>
        <h2 className='font-semibold text-[32px] text-white leading-[44px]'>Recruiter Features</h2>
          {/* slider  */}
          <JobSlider items={sliderJobs} arrowStyle={'above'} />
          <p className='pr-6 md:pr-12 lg:pr-20 xl:pr-40 mt-8 md:mt-10 lg:mt-12 text-white text-base lg:text-xl text-center'>Overall, the Android mobile app for recruiters in the hospitality industry includes a range of features designed to enhance the hiring process, streamline communication with candidates, and make it easier for recruiters to manage their job postings and applicant pool.</p>
    </section>

    <section className="relative bg-orange-400 bg-white py-10 md:py-20 lg:py-28 px-6 md:px-12 lg:px-20 xl:px-40">
    <h2 className='font-semibold text-[32px] text-black leading-[44px] text-center mb-4 md:mb-8'>Recruiter Features</h2>
    <p className='pr-6 md:pr-12 lg:pr-20 xl:pr-40  text-black text-base lg:text-xl text-center mb-6 md:mb-12'>The web-based admin console includes a variety of features designed to help administrators manage and optimize the job search platform. Some of the key features of the console include:</p>
    <div className="grid md:grid-cols-2 gap-10 md:gap-12">
      <div className="block">
          <div className='flex justify-start mb-2 md:mb- font-bold text-lg'>
            <div className="flex items-start pt-[6px]">
                <span className={`text-white bg-gradient-to-b from-[#9747FF] to-[#2623D4] h-[20px] w-[20px] rounded-full flex items-center justify-center text-xs`}>1</span> 
            </div>
            <p className={`inline-block ml-5 text-blue`}>User Management</p>  
          </div>
          <p className='text-black text-base'>The console allows administrators to create and manage multiple sub-admins, assigning them specific roles and permissions as needed.</p>
      </div>
      <div className="block">
          <div className='flex justify-start mb-2 md:mb- font-bold text-lg'>
            <div className="flex items-start pt-[6px]">
                <span className={`text-white bg-gradient-to-b from-[#9747FF] to-[#2623D4] h-[20px] w-[20px] rounded-full flex items-center justify-center text-xs`}>2</span> 
            </div>
            <p className={`inline-block ml-5 text-blue`}>Recruiter Management</p>  
          </div>
          <p className='text-black text-base'>Admins can enroll recruiters on the platform, verify their profiles, and assign subscription plans to them. This feature enables admins to ensure that all recruiters on the platform are properly vetted and authorized to post job openings.</p>
      </div>
      <div className="block">
          <div className='flex justify-start mb-2 md:mb- font-bold text-lg'>
            <div className="flex items-start pt-[6px]">
                <span className={`text-white bg-gradient-to-b from-[#9747FF] to-[#2623D4] h-[20px] w-[20px] rounded-full flex items-center justify-center text-xs`}>3</span> 
            </div>
            <p className={`inline-block ml-5 text-blue`}>Job Posting and Management</p>  
          </div>
          <p className='text-black text-base'>Admins can post and manage job openings on behalf of recruiters, ensuring that all job postings meet the platform&apos;s quality standards.</p>
      </div>
      <div className="block">
          <div className='flex justify-start mb-2 md:mb- font-bold text-lg'>
            <div className="flex items-start pt-[6px]">
                <span className={`text-white bg-gradient-to-b from-[#9747FF] to-[#2623D4] h-[20px] w-[20px] rounded-full flex items-center justify-center text-xs`}>4</span> 
            </div>
            <p className={`inline-block ml-5 text-blue`}>Jobseeker Management</p>  
          </div>
          <p className='text-black text-base'>Admins can manage jobseeker profiles on the platform, suggesting relevant changes to help them improve their profiles and increase their chances of finding relevant job opportunities.</p>
      </div>
      <div className="block">
          <div className='flex justify-start mb-2 md:mb- font-bold text-lg'>
            <div className="flex items-start pt-[6px]">
                <span className={`text-white bg-gradient-to-b from-[#9747FF] to-[#2623D4] h-[20px] w-[20px] rounded-full flex items-center justify-center text-xs`}>5</span> 
            </div>
            <p className={`inline-block ml-5 text-blue`}>Learning Content Management</p>  
          </div>
          <p className='text-black text-base'>Admins can manage the learning content available to jobseekers, ensuring that it is relevant, up-to-date, and effective.</p>
      </div>
      <div className="block">
          <div className='flex justify-start mb-2 md:mb- font-bold text-lg'>
            <div className="flex items-start pt-[6px]">
                <span className={`text-white bg-gradient-to-b from-[#9747FF] to-[#2623D4] h-[20px] w-[20px] rounded-full flex items-center justify-center text-xs`}>6</span> 
            </div>
            <p className={`inline-block ml-5 text-blue`}>ATS Management</p>  
          </div>
          <p className='text-black text-base'>Admins can manage the ATS (applicant tracking system) on behalf of recruiters, helping them to more efficiently screen, manage, and communicate with job seekers throughout the recruitment process.</p>
      </div>
      <div className="block">
          <div className='flex justify-start mb-2 md:mb- font-bold text-lg'>
            <div className="flex items-start pt-[6px]">
                <span className={`text-white bg-gradient-to-b from-[#9747FF] to-[#2623D4] h-[20px] w-[20px] rounded-full flex items-center justify-center text-xs`}>7</span> 
            </div>
            <p className={`inline-block ml-5 text-blue`}>Reporting and Analytics</p>  
          </div>
          <p className='text-black text-base'>The console generates reports and analytics to help administrators analyze various aspects of the platform, including job seeker and recruiter activity, job posting and application trends, and more. This feature enables admins to identify areas for improvement and optimize the platform&apos;s performance.</p>
      </div>
      <div className="block">
          <div className='flex justify-start mb-2 md:mb- font-bold text-lg'>
            <div className="flex items-start pt-[6px]">
                <span className={`text-white bg-gradient-to-b from-[#9747FF] to-[#2623D4] h-[20px] w-[20px] rounded-full flex items-center justify-center text-xs`}>8</span> 
            </div>
            <p className={`inline-block ml-5 text-blue`}>Communication Management</p>  
          </div>
          <p className='text-black text-base'>Admins can communicate with job seekers and recruiters through chat, video, and audio calls, providing support and guidance as needed.</p>
      </div>
    </div>
    </section>
    
    </>)
}

export default page