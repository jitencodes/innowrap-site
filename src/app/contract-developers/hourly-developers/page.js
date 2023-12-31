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
import EmailForm from '@/components/Common/Forms/EmailForm';
import { HiringBannerHD,sliderJobsData,hiringWorkData} from '@/app/data';
import BrandSlider from '@/components/Common/Sliders/BrandSlider'
import Image from 'next/image'
import Faqs from '@/components/Common/FAQs/Faqs'
import StorySlider from '@/components/Common/Sliders/StorySlider'
import HeroBanner from '@/components/Common/Banners/HeroBanner'
import Link from 'next/link'
import Stories from '@/components/Hiring/Stories'
import FaqSection from '@/components/Hiring/FaqSection'

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
export default function Home() {
    const getData = (e)=>{
        const data = e;
        if(data){
          return data
        }
        return notFound()
      }
      const hero2 = getData(HiringBannerHD)
      const sliderJobs = getData(sliderJobsData)
      const hiringWork = getData(hiringWorkData)
  return (
    <main className="">
      <StickyTopBar/>
      <Header/> 
      <section aria-describedby='hero-section'>
          <div className="flex flex-col relative z-20 bg-white pt-16 md:pt-24 lg:pt-32 xl:pt-36">
            <HeroBanner data={hero2} form={EmailForm}/>
          </div>
          <BrandSlider/>
      </section>
      <Consultants/>
      <Services/>
      
      <section className="px-6 md:px-12 lg:px-20 xl:px-40">
            <div className="relative overflow-hidden flex py-6 md:py-10 items-center w-full rounded-lg px-3 md:px-12" style={{backgroundImage:'url(images/hiring-page/requirement-banner.png)', backgroundSize:'cover'}}>
                  <Image  className='absolute -z-10'
                          src="/images/hiring-page/requirement-banner.png"
                          fill
                          alt='back ground image'
                          quality={100}
                      />
                <div className="flex flex-col lg:flex-row md:justify-between items-start gap-4 md:gap-0 md:items-center w-full">
                    <div className="flex flex-col gap-3 desktop:max-w-[350px] w-full">
                        <p className="text-white capitalize leading-snug font-semibold text-[24px] md:text-[32px]">
                        Couldn’t find what you’re looking for ?
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

      <HiringProcess/>
      
      <section className="relative flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center bg-[#F1F4FB] pt-10 pb-32">
          <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase text-center">How it works</p>
          <p className="text-black font-semibold text-2xl md:text-[40px] text-center mb-2">A developer on contract from us ?</p>
          <p className="text-black font-semibold text-lg md:text-2xl text-center mb-14 md:pb-20">We take care of everything in advance - sourcing, vetting, matching with job description and management of developers</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center md:items-start gap-16 md:gap-5 md:justify-between w-full">
            {
                hiringWork.map((item,idx)=>{
                    return <div key={idx} className="flex justify-center">
                    <div className=" max-w-[350px] md:max-w-[250px]">
                        <div className="flex justify-between">
                            <Image
                                src={item.icon}
                                width={88}
                                height={88}
                                alt={item.altText}
                            />
                            <span className='text-[#C7D3DC] font-thin text-6xl mr-10'>{idx+1}</span>
                        </div>
                        <p className="text-black font-semibold text-2xl -tracking-[0.02em] mb-4 mt-7">{item.title}</p>
                        <p className="text-black font-normal text-base">{item.desc}</p>
                    </div>
                  </div>
                })
            }
            
          </div>

          <div className="flex items-center gap-[10px] flex-col">
          <div className="flex -bottom-0 left-0 absolute h-[350px] w-screen -z-1">
                  <Image
                        src="/bg-dots.png"
                        className='dr'
                        fill
                        quality={100}
                        alt='background image with polcadots'
                        draggable={false}
                    />
                </div>
            <button className='text-base font-semibold text-white bg-gradient-1 rounded-[4px] shadow-bs-1 hover:shadow-none py-3 px-5 mb-7 md:my-14'>Start Hiring</button>
                <div className="relative w-[50px] md:w-[100px] h-[50px] md:h-[100px] rounded-full overflow-hidden">
                    <Image className='absolute'
                    src="/images/hiring-page/client-testimonial-profile-3.png"
                    fill
                    quality={100}
                    alt='economical tech talent from emerging markets'
                    />
                </div>
                <div className="">
                    <h3 className="text-center font-bold  text-sm md:text-xl text-black md:mb-1">Will Braboni</h3>
                    <p className="text-center font-normal text-xs md:text-base text-black ">The Walmart, Marketing Manager</p>
                </div>
                <p className="text-black font-semibold text-sm md:text-base text-center lg:text-lg md:max-w-[80%] 2xl:max-w-[70%]">Innowrap is a professional, dedicated team furnishing top quality talent and domain expertise. They have demonstrated real understanding of our issues and time and again have come up with their own innovative solutions that has helped us a great deal.&quot;</p>
            </div>

      </section>

      
      
      <section className="px-6 md:px-12 lg:px-20 xl:px-40  mt-10 md:mt-20 xl:mt-28">
            <div className="relative overflow-hidden flex py-6 md:py-10 items-center w-full rounded-lg px-3 md:px-12" style={{backgroundImage:'url(images/hiring-page/requirement-banner.png)', backgroundSize:'cover'}}>
                  <Image  className='absolute -z-10'
                          src="/images/hiring-page/requirement-banner.png"
                          fill
                          alt='back ground image'
                          quality={100}
                      />
                <div className="flex flex-col lg:flex-row md:justify-between items-start gap-4 md:gap-0 md:items-center w-full">
                    <div className="flex flex-col gap-3 desktop:max-w-[350px] w-full">
                        <p className="text-white capitalize leading-snug font-semibold text-[24px] md:text-[32px]">
                        Are you looking for software development services instead ?
                        </p>
                        <Link href='/' className="text-white capitalize font-semibold text-xs md:text-[16px] w-max">
                        Explore Web Development
                        </Link>
                    </div>
                    <div className="flex md:mt-12 gap-4 w-full flex-col md:flex-row justify-end">
                        <input type="email" placeholder='Enter Your Email ID' className='rounded border-2 px-2 py-3 text-black placeholder:text-white font-normal text-base w-full md:max-w-[450px] border-white bg-blue' />
                        <button className='rounded self-end px-2 w-full md:w-fit md:px-4 py-2 md:py-3 whitespace-nowrap text-blue h-fit bg-white shadow-bs-1 font-normal text-base'>Get Started</button>
                    </div>
                </div>
            </div>
      </section>
      <Stories />
      <Testimonials/>
      <FaqSection/>
      <Footer/>
    </main>
  )
}
