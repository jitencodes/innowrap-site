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
import { HiringBannerPO,sliderJobsData,hiringWorkData,payrollFeatures } from '@/app/data';
import BrandSlider from '@/components/Common/Sliders/BrandSlider'
import HeroBannerxForm from '@/components/Common/Banners/HeroBannerxForm'
import Image from 'next/image'
import Accordian2 from '@/components/Common/FAQs/Accordian2'
import Faqs from '@/components/Common/FAQs/Faqs'
import StorySlider from '@/components/Common/Sliders/StorySlider'
import HeroBanner from '@/components/Common/Banners/HeroBanner'
import JobSlider from '@/components/Common/Sliders/JobSlider'
import HeroBanner2 from '@/components/Common/Banners/HeroBanner2'
import Link from 'next/link'


export default function Home() {
    const getData = (e)=>{
        const data = e;
        if(data){
          return data
        }
        return notFound()
      }
      const hero = getData(HiringBannerPO)
      const hireType = getData(sliderJobsData)
      const Stories = getData(sliderJobsData  )
      const hiringWork = getData(hiringWorkData)
      const features = getData(payrollFeatures)

  return (
    <main className="">
      {/* <StickyTopBar/> */}
      <Header/> 
      <HeroBanner2 data={hero} form={EmailForm}/>
      <BrandSlider/>
      <section className="relative flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center py-10 md:py-20 2xl:py-24">
          <div className="flex tablet:items-center flex-col md:flex-row-reverse mb-6 lg:mb-12 bg-[#F1F4FB]">
                <div className="flex relative w-fit md:flex-1 flex-col md:h-full md:justify-center px-6 lg:px-8 xl:px-12 2xl:px-14 py-3 md:py-4 lg:py-6">
                  <h3 className='text-2xl lg:text-4xl text-blue font-semibold'>End-to-End Payroll</h3><br/> 
                  <p className='text-base lg:text-xl font-light text-black'>The payroll outsourcing services offered by Innowrap are designed to work for companies of any size and in any field. Our payroll is hosted on a cloud platform that can be scaled up or down based on the size of your business. We have a solution for you, whether you are a startup with fewer than 50 people or a manufacturing corporation with more than 1000.<br/> <br/> Our managed payroll services handle the whole payroll processing process for you, allowing your HR team to concentrate on your core operations and employee engagement.</p>
                
                </div>
                <div className="flex md:flex-1">     
                    <div className="flex relative w-[250px] md:w-full h-[250px] md:h-auto lg:w-full">
                    <Image  className='absolute'
                            src="/images/hiring-page/payroll-outsourcing/image-2.png"
                            fill
                            alt='back ground image'
                            quality={100}
                        />
                    </div>
                </div>
          </div>
      </section>

      <section className="overflow-hidden relative flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col bg-gradient-to-b from-[#262DD2] to-[#2F53E8] py-10 md:py-20 lg:py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-20 xl:gap-24">
          <div className="flex flex-col justify-between">
              <p className='text-white font-semibold text-2xl md:text-[26px] lg:text-[32px] xl:text-[40px] leading-snug mb-3'>Our Process</p>
              <div className="relative w-[80%] mx-auto flex justify-center h-[365px]">
                  <Image
                      src="/images/hiring-page/payroll-outsourcing/image-3.png"
                      fill
                      alt=''
                      quality={100}
                  />
              </div>
              <p className='text-base lg:text-xl font-light text-white'>Information about your employees, such as hire dates, job titles, and pay rates, is passed to Innowrap as your payroll outsourcing provider. Then, on your behalf, we accurately and promptly determine each employee’s salary. We also compute your payroll taxes and provide you with annual or monthly reports on all transactions, providing you with useful information that can help you increase productivity and advance your business.
              </p>
          </div>
          <div className="block">
            <p className='text-white font-semibold text-2xl md:text-[26px] lg:text-[32px] xl:text-[40px] leading-snug mb-3'>Why choose Innowrap ?</p>
            <p className='text-base lg:text-xl font-light text-white mb-6 md:mb-10'>We offer multiple benefits, which demonstrates why outsourcing payroll services to us is a good idea.</p>
            <div className="grid grid-cols-1 gap-10 custom-scrollbar md:overflow-auto md:h-[745px] lg:h-[655px]">
            {
              features.map((item,idx)=>{
                return <div key={idx} className="block">
                  <div className="flex mb-3 items-start">
                    <span className='text-white bg-[#FFBB03] rounded-full w-6 h-6 text-center'>{idx+1}</span>
                      <p className='text-white font-semibold text-lg md:text-2xl md:text-[22px] ml-6'>{item.title}</p>
                  </div>
                  <p className='text-white font-normal text-base'>{item.desc}</p>
                </div>
              })
            }
            </div>
          </div>
        </div>
      </section>
   
      <section className="px-6 md:px-12 lg:px-20 xl:px-40  pt-10 md:pt-20 lg:pt-32">
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
                        Want to hire software developers instead ?
                        </p>
                        <Link href='/' className="text-white capitalize font-semibold text-xs md:text-[16px] w-max">
                        Explore Contract / Dedicated / Temp Developers
                        </Link>
                    </div>
                    <div className="flex md:mt-12 gap-4 w-full flex-col md:flex-row justify-end">
                        <input type="email" placeholder='Enter Your Email ID' className='rounded border-2 px-2 py-3 text-black placeholder:text-white font-normal text-base w-full md:max-w-[450px] border-white bg-blue' />
                        <button className='rounded self-end px-2 w-full md:w-fit md:px-4 py-2 md:py-3 whitespace-nowrap text-blue h-fit bg-white shadow-bs-1 font-normal text-base'>Get Started</button>
                    </div>
                </div>
            </div>
      </section>
      
      <Testimonials/>
      <section className="flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center pb-10 pd:pb-20 lg:pb-32">
            <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase text-center">FAQS</p>
            <p className="text-black font-semibold text-2xl md:text-[40px] text-center mb-14 md:mb-20">Frequently asked Questions</p>
            <Faqs />
        </section>
      <Footer/>
    </main>
  )
}
