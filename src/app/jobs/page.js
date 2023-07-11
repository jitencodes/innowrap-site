import Image from 'next/image';
import { jobsBanner1,sliderJobsData, jobCardsData } from '@/app/data';
// components
import JobsForm from '@/components/Common/Forms/JobsForm';
import BrandSlider from '@/components/Common/Sliders/BrandSlider';
import SelectedList from '@/components/Common/SelectedList';
import ButtonPrimary from '@/components/Common/Buttons/ButtonPrimary';
import Faqs from '@/components/Common/FAQs/Faqs';
import JobCard from '@/components/Common/Cards/JobCard';
import SingleSlideSlider from '@/components/Common/Sliders/SingleSlideSlider';
import JobSlider from '@/components/Common/Sliders/JobSlider';
import HeroBanner2 from '@/components/Common/Banners/HeroBanner2';
// Imported SVGS
import GlobalCommunity from '@/../public/svg icons/globalCommunity.svg'
import FireIcon from '@/../public/svg icons/fireIcon.svg'
import BagIcon from '@/../public/svg icons/bagIcon.svg'
import QouteIcon from '@/../public/svg icons/qoute-icon.svg'
// react icons
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go';
import { SlBriefcase } from 'react-icons/sl';
import { MdOutlinePayments } from 'react-icons/md'

function page() {
  const getData = (e)=>{
    const data = e;
    if(data){
      return data
    }
    return notFound()
  }
  const hero1 = getData(jobsBanner1)
  const jobCards = getData(jobCardsData)
  const sliderJobs = getData(sliderJobsData)

  let Buttons = ['Based on skills','Based on roles']
  let Technologies = ['css', 'html', 'react', 'vue js', 'angularjs', 'javascript', 'dom manipulation', 'json', 'ajax', 'node js', 'mysql', 'java', 'problem solving', 'front end engineering', 'quality assurance engineer']
    
  return (
    <>
      <HeroBanner2 form={JobsForm} data={hero1}/>
      <BrandSlider/>
      <section className="py-10 bg-[#F5F5F5] md:py-20 lg:py-32 px-6 md:px-12 lg:px-20 xl:px-40">
            <p className="text-black font-semibold text-2xl md:text-[40px] text-center mb-6 md:mb-14">Find your most coveted job role</p>
            <SelectedList Buttons={Buttons} Technologies={Technologies} />
      </section>
      <section className="grid gap-7 grid-cols-1 md:grid-cols-2 py-10 md:py-20 lg:py-32 px-6 md:px-12 lg:px-20 xl:px-40">
        
      <div className=" bg-light-bg p-4 md:p-7">
        <div className="flex items-center mb-5">
          <GlobalCommunity className='mr-3 min-w-[90px]'/>
          <h2 className=' font-normal text-black text-2xl'><span className='text-blue'>Taking Your</span> Profile Global</h2>
        </div>
        <ul>
            <li className="mb-3 text-sm md:text-base">
                <span className="mr-2"> 🡢</span> Have to shell out a fortune to hire local talent. 
            </li>
            <li className="mb-3 text-sm md:text-base">
                <span className="mr-2">🡢</span> Don&#39;t have the infrastructure to hire and manage         quality talent from emerging economies that         comes with significant cost advantages.&quot;
            </li>
        </ul>
      </div>
      <div className=" bg-light-bg p-4 md:p-7">
        <div className="flex items-center mb-5">
          <GlobalCommunity className='mr-3 min-w-[90px]'/>
          <h2 className=' font-normal text-black text-2xl'><span className='text-blue'>Taking Your</span> Profile Global</h2>
        </div>
        <ul>
            <li className="mb-3 text-sm md:text-base">
                <span className="mr-2"> 🡢</span> Have to shell out a fortune to hire local talent. 
            </li>
            <li className="mb-3 text-sm md:text-base">
                <span className="mr-2">🡢</span> Don&#39;t have the infrastructure to hire and manage         quality talent from emerging economies that         comes with significant cost advantages.&quot;
            </li>
        </ul>
      </div>
      <div className=" bg-light-bg p-4 md:p-7">
        <div className="flex items-center mb-5">
          <GlobalCommunity className='mr-3 min-w-[90px]'/>
          <h2 className=' font-normal text-black text-2xl'><span className='text-blue'>Taking Your</span> Profile Global</h2>
        </div>
        <ul>
            <li className="mb-3 text-sm md:text-base">
                <span className="mr-2"> 🡢</span> Have to shell out a fortune to hire local talent. 
            </li>
            <li className="mb-3 text-sm md:text-base">
                <span className="mr-2">🡢</span> Don&#39;t have the infrastructure to hire and manage         quality talent from emerging economies that         comes with significant cost advantages.&quot;
            </li>
        </ul>
      </div>
      <div className=" bg-light-bg p-4 md:p-7">
        <div className="flex items-center mb-5">
          <GlobalCommunity className='mr-3 min-w-[90px]'/>
          <h2 className=' font-normal text-black text-2xl'><span className='text-blue'>Taking Your</span> Profile Global</h2>
        </div>
        <ul>
            <li className="mb-3 text-sm md:text-base">
                <span className="mr-2"> 🡢</span> Have to shell out a fortune to hire local talent. 
            </li>
            <li className="mb-3 text-sm md:text-base">
                <span className="mr-2">🡢</span> Don&#39;t have the infrastructure to hire and manage         quality talent from emerging economies that         comes with significant cost advantages.&quot;
            </li>
        </ul>
      </div>
      <div className=" bg-light-bg p-4 md:p-7">
        <div className="flex items-center mb-5">
          <GlobalCommunity className='mr-3 min-w-[90px]'/>
          <h2 className=' font-normal text-black text-2xl'><span className='text-blue'>Taking Your</span> Profile Global</h2>
        </div>
        <ul>
            <li className="mb-3 text-sm md:text-base">
                <span className="mr-2"> 🡢</span> Have to shell out a fortune to hire local talent. 
            </li>
            <li className="mb-3 text-sm md:text-base">
                <span className="mr-2">🡢</span> Don&#39;t have the infrastructure to hire and manage         quality talent from emerging economies that         comes with significant cost advantages.&quot;
            </li>
        </ul>
      </div>
      <div className=" bg-light-bg p-4 md:p-7">
        <div className="flex items-center mb-5">
          <GlobalCommunity className='mr-3 min-w-[90px]'/>
          <h2 className=' font-normal text-black text-2xl'><span className='text-blue'>Taking Your</span> Profile Global</h2>
        </div>
        <ul>
            <li className="mb-3 text-sm md:text-base">
                <span className="mr-2"> 🡢</span> Have to shell out a fortune to hire local talent. 
            </li>
            <li className="mb-3 text-sm md:text-base">
                <span className="mr-2">🡢</span> Don&#39;t have the infrastructure to hire and manage         quality talent from emerging economies that         comes with significant cost advantages.&quot;
            </li>
        </ul>
      </div>
        
      </section>
      <section className="relative bg-transparent py-10 md:py-20 lg:py-32 pl-6 md:pl-12 lg:pl-20 xl:pl-40">
          <Image className='absolute -z-10'
              src="/images/hiring-page/job-slide-bg.png"
             fill
             quality={100}
              alt=''
          />
        <p className='uppercase font-semibold text-base tracking-[0.2em] text-white'>discover</p>
        <div className="flex flex-col mb-8 md:mb-10 lg:mb-20 md:flex-row justify-between gap-4 md:gap-0 pr-6 md:pr-12 lg:pr-20 xl:pr-40">
            <h2 className='font-semibold text-[32px] text-white leading-[44px]'>
            What are you looking for ?
            </h2>
          </div>
          {/* slider  */}
          <JobSlider items={sliderJobs} arrowStyle={'above'} />
      </section>
      <section className="py-10 md:py-20 lg:py-32 px-6 md:px-12 lg:px-20 xl:px-40">
          <div className="flex flex-col mb-8 md:mb-10 md:flex-row justify-between gap-4 md:gap-0">
            <div className="flex gap-2">
              <span className='inline-block my-auto'><FireIcon className='min-w-[34px]'/></span>
              <h2 className='font-semibold text-[32px] text-black leading-[44px]'>
                Here Are Some Of Our Hottest Jobs
              </h2>
            </div>
            <div className="flex items-center justify-end">
              <ButtonPrimary text={'see more'} url={'jobs/search'} shadowReverse={true} /> 
            </div>
          </div>

          <div className="grid gap-7 w-full grid-cols-1 tablet:place-items-center lg:grid-cols-2">
              {
                jobCardsData.map((job,idx)=>{

                  return <JobCard props={job} key={idx}/>
                })
              }
          </div>
      </section>
      <section className="px-6 md:px-12 lg:px-20 xl:px-40 mb-10 md:mb-20 xl:mb-28">
        <div >
            <div className="flex py-6 md:py-10 items-center w-full rounded-lg px-3 md:px-12" style={{backgroundImage:'url(images/hiring-page/requirement-banner.png)', backgroundSize:'cover'}}>
                <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 md:gap-0 md:items-center w-full">
                    <div className="flex flex-col gap-3">
                        <p className="text-white capitalize leading-snug font-semibold text-base md:text-[32px]">
                        Have Anything Specific requirement?
                        </p>
                        <p className="text-white capitalize font-semibold text-xs md:text-[16px]">
                        We&#39;re just one step away from helping you.
                        </p>
                    </div>
                    <button className='rounded self-end px-2 md:px-4 py-2 md:py-3 whitespace-nowrap text-blue h-fit bg-white shadow-bs-1 font-normal text-base'>Get in touch now</button>
                </div>
            </div>
        </div>
      </section>
      <section className="flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center bg-[#F1F4FB] py-10 pd:py-20 lg:py-32">
            <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase text-center">How it works</p>
            <p className="text-black font-semibold text-2xl md:text-[40px] text-center mb-14">How we hire ?</p>
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
        <section className="flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center py-10 pd:py-20 lg:py-32">
            <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase text-center">TESTIMONIALS</p>
            <p className="text-black font-semibold text-2xl md:text-[40px] text-center mb-14 md:mb-20">See what our people have to say</p>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-2 ">
                    <QouteIcon/>
                    <p className='text-black text-xl font-medium mt-8'>
                    Innowrap is a professional, dedicated team furnishing top quality talent and domain expertise. They have demonstrated real understanding of our issues and time and again have come up with their own innovative solutions that has helped us a great deal.”
                    </p>
                </div>
                <div className="block">
                    <SingleSlideSlider card/>
                </div>
            </div>

        </section>

        <section className="flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center pb-10 pd:pb-20 lg:pb-32">
            <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase text-center">FAQS</p>
            <p className="text-black font-semibold text-2xl md:text-[40px] text-center mb-14 md:mb-20">Frequently asked Questions</p>

            <Faqs />
        </section>
    </>
  )
}

export default page