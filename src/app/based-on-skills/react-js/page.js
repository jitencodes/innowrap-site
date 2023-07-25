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
import { HiringBannerReactjs } from '@/app/data';
import BrandSlider from '@/components/Common/Sliders/BrandSlider'
import HeroBannerxForm from '@/components/Common/Banners/HeroBannerxForm'
import Image from 'next/image'
import Faqs from '@/components/Common/FAQs/Faqs'
import StorySlider from '@/components/Common/Sliders/StorySlider'
import Link from 'next/link'

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
      const hero2 = getData(HiringBannerReactjs)

  return (
    <main className="">
      <StickyTopBar/>
      <Header/> 
      <section aria-describedby='hero-section'>
        <div className="flex flex-col relative z-20 bg-white pt-16 md:pt-24 lg:pt-32 xl:pt-36">
          <HeroBannerxForm data={hero2} form={EmailForm}/>
        </div>
        <BrandSlider/>
      </section>
      <section className="overflow-hidden relative flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col bg-gradient-1-reverse py-10 md:py-20 lg:py-24">
      {/* <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase">Why ReactJS?</p> */}
            <p className="text-white font-bold text-xl md:text-[30px] leading-snug mb-3">Why ReactJS?</p>
            <p className="text-white font-medium text-sm md:text-[18px] leading-snug mb-2 md:mb-6">The advantages of ReactJS are its simplicity, safety, robustness, and comprehensiveness. Companies are looking for reliable ReactJS development services in order to stay competitive. Since data can be changed without requiring a page reload, ReactJS is therefore suitable for creating large-scale, modern apps.</p>
            <p className="text-white font-bold text-lg md:text-[24px] leading-snug mb-3">A few other benefits include:</p>
            <div className="flex flex-wrap mb-8 md:mb-12 lg:mb-16 xl:mb-20">
              <div className="block max-w-[145px]">
                    <Image className=''
                          src="/images/hiring-page/react/development-tool-icon.png"
                          width={60}
                          height={60}
                          alt='development-tool-icon'
                          quality={100}
                      />
                      <p className="text-white font-medium text-sm md:text-[16px] leading-snug mb-2 md:mb-6">Hassle-Free Maintenance</p>
              </div>
              <div className="block max-w-[145px]">
                    <Image className=''
                          src="/images/hiring-page/react/development-tool-icon.png"
                          width={60}
                          height={60}
                          alt='development-tool-icon'
                          quality={100}
                      />
                      <p className="text-white font-medium text-sm md:text-[16px] leading-snug mb-2 md:mb-6">Increases The Productivity Of Enterprises</p>
              </div>
              <div className="block max-w-[145px]">
                    <Image className=''
                          src="/images/hiring-page/react/development-tool-icon.png"
                          width={60}
                          height={60}
                          alt='development-tool-icon'
                          quality={100}
                      />
                      <p className="text-white font-medium text-sm md:text-[16px] leading-snug mb-2 md:mb-6">Reliable Software Development Tools</p>
              </div>
              <div className="block max-w-[145px]">
                    <Image className=''
                          src="/images/hiring-page/react/development-tool-icon.png"
                          width={60}
                          height={60}
                          alt='development-tool-icon'
                          quality={100}
                      />
                      <p className="text-white font-medium text-sm md:text-[16px] leading-snug mb-2 md:mb-6">Faster Rendering</p>
              </div>
              <div className="block max-w-[145px]">
                    <Image className=''
                          src="/images/hiring-page/react/development-tool-icon.png"
                          width={60}
                          height={60}
                          alt='development-tool-icon'
                          quality={100}
                      />
                      <p className="text-white font-medium text-sm md:text-[16px] leading-snug mb-2 md:mb-6">Reusable Components</p>
              </div>
            </div>
            
            <p className="text-white font-semibold mb-3 tracking-[0.2em] uppercase">YOUR RELIABLE</p>
            <p className="text-white font-bold text-xl md:text-[40px] leading-snug mb-3">Team of ReactJS Developers</p>
            
            <div className="flex w-full md:w-[690px]  h-[140px] sm:h-[180px] md:h-[240px] relative my-14">
                      <Image className='absolute'
                          src="/images/hiring-page/react/responsive-design-icon.png"
                          fill
                          alt='responsive design image'
                          quality={100}
                      />
              </div>
              <div className="flex w-[300px] h-[300px] md:w-[525px] md:h-[525px] absolute right-0 translate-x-1/4 top-[400px] md:top-[180px]">
                      <Image className=''
                          src="/images/hiring-page/react/react-icon.png"
                          fill
                          alt=''
                          quality={100}
                      />
              </div>
              <div className="flex w-[225px] h-[114px] md:w-[525px] md:h-[144px] absolute top-0 left-0 translate-x-1/4">
                      <Image className=''
                          src="/images/hiring-page/react/dots-top.png"
                          fill
                          alt=''
                          quality={100}
                      />
              </div>
              <div className="flex w-[225px] h-[114px] md:w-[525px] md:h-[144px] absolute bottom-0 right-0 translate-x-1/4">
                      <Image className=''
                          src="/images/hiring-page/react/dots-bottom.png"
                          fill
                          alt=''
                          quality={100}
                      />
              </div>
              {/* <p className="text-black font-semibold text-xl md:text-[40px] leading-snug mb-3">End to End iOS App Development Services</p> */}
            <p className="text-white font-medium text-sm md:text-[18px] leading-snug">
            Innowrap offers a full suite of React JS development services to companies of all sizes and industries. Our React JS developers have extensive experience developing interactive, feature-rich front-end solutions that meet your business objectives. 
            <br/><br/>
            With the help of our talented ReactJS development team and web app development services, we have a ton of experience that can help your company create the best-in-class, visually rich, modern web app solution. Whether it&apos;s a dynamic content website, eCommerce front-store, streaming app, IoT-based management app development, or anything else, our ReactJS developers for hire ensure effective app solutions that offer higher company conversions.</p>
           
      </section>
      <section className="overflow-hidden relative flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col bg-white py-10 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-20 xl:gap-24">
          <div className="flex flex-col justify-between md:h-[745px] lg:h-[655px]">
            <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase">OUR REACTJS DEVELOPER SERVICES</p>
            <p className='text-black font-semibold text-2xl md:text-[26px] lg:text-[32px] xl:text-[40px] leading-snug mb-3'>Hire ReactJS Developers For Your Evolving Project Needs</p>
            <div className="relative w-[80%] mx-auto flex justify-center h-[365px]">
                <Image
                    src="/images/hiring-page/react/react-developer.png"
                    fill
                    alt=''
                    quality={100}
                />
            </div>
            <div className="">
              <div className="relative flex justify-center w-[35px] h-[35px] ">
                        <Image
                            src="/images/hiring-page/hihre-ios-dev/quote.png"
                            fill
                            alt=''
                            quality={100}
                        />
              </div>
              <p className='text-black text-base font-medium mt-1 pl-[14px]'>Innowrap is a professional, dedicated team furnishing top quality talent and domain expertise. They have demonstrated real understanding of our issues and time and again have come up with their own innovative solutions that has helped us a great deal.”</p>
              <div className="flex items-center gap-[10px] pl-[14px] mt-2">
                <div className="flex relative w-[42px] md:w-[72px] h-[42px] md:h-[72px] rounded-full border-[6px] border-[#F3F5F8] overflow-hidden">
                    <Image
                    src="/images/hiring-page/client-testimonial-profile-3.png"
                    fill
                    alt='economical tech talent from emerging markets'
                    quality={100}
                    />
                </div>
                <div className="">
                    <h3 className="font-bold text-sm md:text-xl text-black md:mb-1">Will Braboni</h3>
                    <p className="font-normal text-xs md:text-base text-black ">The Walmart, Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 custom-scrollbar md:overflow-auto md:h-[745px] lg:h-[655px]">
            <div className="block">
              <div className="flex mb-3 items-center">
                <Image
                      src="/images/hiring-page/hihre-ios-dev/support-icon.png"
                      width={48}
                      height={48}
                      alt=''
                      quality={100}
                  />
                  <p className='text-black font-semibold text-2xl md:text-[22px] ml-6'>iOS app consultation</p>
              </div>
              <p className=''>Do you have a business idea but are unsure about converting it into an iOS app? Innowrap consultants will help you to convert your idea into iOS app features. Our experienced tech consultants will offer the right advice in choosing the branding and design of your iOS app.</p>
            </div>
            <div className="block">
              <div className="flex mb-3 items-center">
                <Image
                      src="/images/hiring-page/hihre-ios-dev/support-icon.png"
                      width={48}
                      height={48}
                      alt=''
                      quality={100}
                  />
                  <p className='text-black font-semibold text-2xl md:text-[22px] ml-6'>iOS app consultation</p>
              </div>
              <p className=''>Do you have a business idea but are unsure about converting it into an iOS app? Innowrap consultants will help you to convert your idea into iOS app features. Our experienced tech consultants will offer the right advice in choosing the branding and design of your iOS app.</p>
            </div>
            <div className="block">
              <div className="flex mb-3 items-center">
                <Image
                      src="/images/hiring-page/hihre-ios-dev/support-icon.png"
                      width={48}
                      height={48}
                      alt=''
                      quality={100}
                  />
                  <p className='text-black font-semibold text-2xl md:text-[22px] ml-6'>iOS app consultation</p>
              </div>
              <p className=''>Do you have a business idea but are unsure about converting it into an iOS app? Innowrap consultants will help you to convert your idea into iOS app features. Our experienced tech consultants will offer the right advice in choosing the branding and design of your iOS app.</p>
            </div>
            <div className="block">
              <div className="flex mb-3 items-center">
                <Image
                      src="/images/hiring-page/hihre-ios-dev/support-icon.png"
                      width={48}
                      height={48}
                      alt=''
                      quality={100}
                  />
                  <p className='text-black font-semibold text-2xl md:text-[22px] ml-6'>iOS app consultation</p>
              </div>
              <p className=''>Do you have a business idea but are unsure about converting it into an iOS app? Innowrap consultants will help you to convert your idea into iOS app features. Our experienced tech consultants will offer the right advice in choosing the branding and design of your iOS app.</p>
            </div>
            <div className="block">
              <div className="flex mb-3 items-center">
                <Image
                      src="/images/hiring-page/hihre-ios-dev/support-icon.png"
                      width={48}
                      height={48}
                      alt=''
                      quality={100}
                  />
                  <p className='text-black font-semibold text-2xl md:text-[22px] ml-6'>iOS app consultation</p>
              </div>
              <p className=''>Do you have a business idea but are unsure about converting it into an iOS app? Innowrap consultants will help you to convert your idea into iOS app features. Our experienced tech consultants will offer the right advice in choosing the branding and design of your iOS app.</p>
            </div>
          </div>
        </div>
      </section>
      <Services/>
      <section className="flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col bg-[#F1F4FB] py-10 md:py-20 lg:py-24">
            <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase text-left">WHY HIRE</p>
            <p className="text-black font-semibold text-2xl md:text-[40px] leading-snug text-left mb-3">Hire React JS developers from innowrap</p>
            <p className="text-black font-medium text-2xl md:text-[18px] leading-snug text-left mb-14 md:mb-20">Work with experienced ReactJS developers from Innowrap to turn your company&apos;s concepts into reliable software. Let&apos;s take a look at some of the reasons why you should hire our developers for your project:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center md:items-start gap-16 md:gap-5 md:justify-between w-full">
                <div className="grid place-items-center">
                  <div className=" w-full flex justify-center">
                      <Image
                          src="/images/hiring-page/react/delivery-icon.png"
                          width={98}
                          height={98}
                          alt=''
                      />
                  </div>
                  <p className="text-black max-w-[200px] text-center font-semibold text-xl md:text[22px] leading-snug -tracking-[0.02em] mb-4 mt-7">On-time delivery</p>
                  <p className="text-black max-w-[200px] text-center font-normal text-sm md:text-base -tracking-[0.02em] mb-4">Our designers and developers use advanced technologies and agile methods for the projects, allowing us to complete 95% of them on schedule.</p>
                </div>
                <div className="grid place-items-center">
                  <div className=" w-full flex justify-center">
                      <Image
                          src="/images/hiring-page/react/team-icon.png"
                          width={98}
                          height={98}
                          alt=''
                      />
                  </div>
                  <p className="text-black max-w-[200px] text-center font-semibold text-xl md:text[22px] leading-snug -tracking-[0.02em] mb-4 mt-7">Dedicated Team</p>
                  <p className="text-black max-w-[200px] text-center font-normal text-sm md:text-base -tracking-[0.02em] mb-4">Our development team is skilled in producing high-end business solutions using a variety of frameworks and technologies.</p>
                </div>
                <div className="grid place-items-center">
                  <div className=" w-full flex justify-center">
                      <Image
                          src="/images/hiring-page/react/solution-icon.png"
                          width={98}
                          height={98}
                          alt=''
                      />
                  </div>
                  <p className="text-black max-w-[200px] text-center font-semibold text-xl md:text[22px] leading-snug -tracking-[0.02em] mb-4 mt-7">Cost-effective Solutions</p>
                  <p className="text-black max-w-[200px] text-center font-normal text-sm md:text-base -tracking-[0.02em] mb-4">We offer the ideal fusion of reasonable prices and exceptional quality to ensure the lowest prices in our segment.</p>
                </div>
                <div className="grid place-items-center">
                  <div className=" w-full flex justify-center">
                      <Image
                          src="/images/hiring-page/react/support-icon.png"
                          width={98}
                          height={98}
                          alt=''
                      />
                  </div>
                  <p className="text-black max-w-[200px] text-center font-semibold text-xl md:text[22px] leading-snug -tracking-[0.02em] mb-4 mt-7">Maintenance and Support</p>
                  <p className="text-black max-w-[200px] text-center font-normal text-sm md:text-base -tracking-[0.02em] mb-4">Get the help of our reliable maintenance and support teams at every level of development and delivery.</p>
                </div>
            </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 xl:px-40 mt-10 md:mt-20 xl:mt-28">
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
                        Are you looking for rect js/web development services instead ?
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

      <section className="bg-white py-10 md:py-20 lg:py-32">
        <p className='pl-6 md:pl-12 lg:pl-20 xl:pl-40 uppercase font-semibold text-base tracking-[0.2em] text-blue'>OUR SUCCESS STORIES</p>
        <div className="pl-6 md:pl-12 lg:pl-20 xl:pl-40 flex flex-col md:flex-row justify-between gap-4 md:gap-0 pr-6 md:pr-12 lg:pr-20 xl:pr-40">
            <h2 className='font-semibold text-[32px] text-black leading-[44px]'>
            Lorem ipsum dolor sit amet.
            </h2>
          </div>
          {/* slider  */}
          <StorySlider items={sliderJobs} arrowStyle={'above'} />
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
