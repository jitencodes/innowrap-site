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
import { HiringBannerIos } from '@/app/data';
import BrandSlider from '@/components/Common/Sliders/BrandSlider'
import HeroBannerxForm from '@/components/Common/Banners/HeroBannerxForm'
import Image from 'next/image'
import Faqs from '@/components/Common/FAQs/Faqs'
import StorySlider from '@/components/Common/Sliders/StorySlider'

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
      const hero2 = getData(HiringBannerIos)

  return (
    <main className="">
      {/* <StickyTopBar/> */}
      <Header/> 
      <HeroBannerxForm data={hero2} form={EmailForm}/>
      <BrandSlider/>
      <section className="overflow-hidden relative flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col bg-[#F1F4FB] py-10 md:py-20 lg:py-24">
      <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase">INNOWRAP EXCELS IN OFFERING TAILOR-MADE AND BUSINESS-SPECIFIC</p>
            <p className="text-black font-semibold text-xl md:text-[40px] leading-snug mb-3">iOS mobile app development services for your business.</p>
            <p className="text-black font-medium text-sm md:text-[18px] leading-snug">Consumers use their mobile phones to access business services quickly. If you don’t have a mobile app for iPhone users, your business will lose revenue because your competitors will offer mobile services for the same target audience. <br/><br/>
            Are you looking for an iOS mobile app development partner to make your business idea a reality? Innowrap is the one-stop-shop iOS mobile app development company that you need. Give us your idea, and we will deliver an iOS app that your customers will love.</p>
            
            <div className="flex w-full md:w-[690px]  h-[140px] sm:h-[180px] md:h-[240px] relative my-14">
                      <Image className='absolute'
                          src="/images/hiring-page/hihre-ios-dev/ios-devices.png"
                          fill
                          alt=''
                          quality={100}
                      />
              </div>
              <div className="flex w-[325px] h-[444px] md:w-[525px] md:h-[644px] absolute right-0 translate-x-1/4">
                      <Image className=''
                          src="/images/hiring-page/hihre-ios-dev/apple-logo.png"
                          fill
                          alt=''
                          quality={100}
                      />
              </div>
              <p className="text-black font-semibold text-xl md:text-[40px] leading-snug mb-3">End to End iOS App Development Services</p>
            <p className="text-black font-medium text-sm md:text-[18px] leading-snug">We can create a functional app with user-friendly features for your business idea to take your business services to iPhone users. We will work with you right from the ideation stage until deployment. Even after uploading your app to the iOS App Store, we will ensure that your app runs smoothly without any glitches. 
            <br/><br/>
            Innowrap is a leading app development company in the USA, enabling businesses in varied sectors to create their unique iOS apps. 
            <br/><br/>
            We have a dedicated team of highly-skilled, trained, and experienced iOS app developers who can create the perfect app for your business that your customers will love. As long as you know what you want your iOS app to do, we can deliver the iOS app customised to your requirements.</p>
           
      </section>
      <section className="overflow-hidden relative flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col bg-white py-10 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-20 xl:gap-24">
          <div className="flex flex-col justify-between md:h-[745px] lg:h-[655px]">
            <p className='text-black font-semibold text-2xl md:text-[26px] lg:text-[32px] xl:text-[40px] leading-snug mb-3'>Our iOS App Development Services</p>
            <div className="relative w-[80%] mx-auto flex justify-center h-[365px]">
                <Image
                    src="/images/hiring-page/hihre-ios-dev/hero-ios-image.png"
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
      <section className="flex text-white bg-gradient-blue px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center bg-[#F1F4FB] py-10 md:py-20 lg:py-24">
            <p className=" font-semibold text-2xl md:text-[40px] leading-snug text-center mb-3">Innowrap Technologies for iOS App Development Services?</p>
            <p className=" font-medium text-base md:text-lg leading-snug text-center mb-14 md:pb-20">Do you want to get ahead of your competitors in the huge wave of iOS apps? Innowrap is the best app development company in the USA, offering customised, cost-effective iOS mobile app solutions in a timely fashion.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center md:items-start gap-16 md:gap-14 md:justify-between w-full">
                <div className="place-items-center mx-auto w-fit">
                  <div className=" w-full gap-16 flex justify-center md:justify-start">
                      <Image
                          src="/images/hiring-page/hihre-ios-dev/requiremnet-analysis.png"
                          width={102}
                          height={102}
                          alt='requiremnet analysis'
                      />
                      <span className='text-[#8B89FF] text-[5rem] leading-[1] font-light flex items-end'>1</span>
                  </div>
                      <p className="font-semibold text-[22px] text-center md:text-left -tracking-[-0.48px] mb-4 mt-7">Requirement analysis</p>
                      <p className="font-light text-base -tracking-[0px] mb-4 mt-7">Our expert team will work with you to identify app requirements for your business needs.</p>
                      <ul className='ml-4 marker:text-yellow-300'>
                        <li className='list-disc text-base'>Understand requirements</li>
                        <li className='list-disc text-base'>Identify challenges</li>
                        <li className='list-disc text-base'>Propose feasible solutions</li>
                      </ul>
                </div>
                <div className="place-items-center mx-auto w-fit">
                  <div className=" w-full gap-16 flex justify-center md:justify-start">
                      <Image
                          src="/images/hiring-page/hihre-ios-dev/dev-planning.png"
                          width={102}
                          height={102}
                          alt='requiremnet analysis'
                      />
                      <span className='text-[#8B89FF] text-[5rem] leading-[1] font-light flex items-end'>2</span>
                  </div>
                      <p className="font-semibold text-[22px] text-center md:text-left -tracking-[-0.48px] mb-4 mt-7">App development planning</p>
                      <p className="font-light text-base -tracking-[0px] mb-4 mt-7">Once the requirements are clear, we start with the application development plan.</p>
                      <ul className='ml-4 marker:text-yellow-300'>
                        <li className='list-disc text-base'>Create an application plan based on business strategies</li>
                        <li className='list-disc text-base'>Need-based application development</li>
                        <li className='list-disc text-base'>Use your feedback to finalise the plan</li>
                      </ul>
                </div>
                <div className="place-items-center mx-auto w-fit">
                  <div className=" w-full gap-16 flex justify-center md:justify-start">
                      <Image
                          src="/images/hiring-page/hihre-ios-dev/wireFrame.png"
                          width={102}
                          height={102}
                          alt='requiremnet analysis'
                      />
                      <span className='text-[#8B89FF] text-[5rem] leading-[1] font-light flex items-end'>3</span>
                  </div>
                      <p className="font-semibold text-[22px] text-center md:text-left -tracking-[-0.48px] mb-4 mt-7">Wire Framing & Design</p>
                      <p className="font-light text-base -tracking-[0px] mb-4 mt-7"> After this application development plan is finalized we focus on building the skeleton for the app.</p>
                      <ul className='ml-4 marker:text-yellow-300'>
                        <li className='list-disc text-base'>Create blueprint</li>
                        <li className='list-disc text-base'>Wire frame ever screen</li>
                        <li className='list-disc text-base'>Fine tune application</li>
                      </ul>
                </div>
                <div className="place-items-center mx-auto w-fit">
                  <div className=" w-full gap-16 flex justify-center md:justify-start">
                      <Image
                          src="/images/hiring-page/hihre-ios-dev/app-deployment.png"
                          width={102}
                          height={102}
                          alt='requiremnet analysis'
                      />
                      <span className='text-[#8B89FF] text-[5rem] leading-[1] font-light flex items-end'>4</span>
                  </div>
                      <p className="font-semibold text-[22px] text-center md:text-left -tracking-[-0.48px] mb-4 mt-7">App deployment</p>
                      <p className="font-light text-base -tracking-[0px] mb-4 mt-7">Your app is ready for deployment at this stage when you are satisfied with the app features.</p>
                      <ul className='ml-4 marker:text-yellow-300'>
                        <li className='list-disc text-base'>Deploy the app to app stores</li>
                        <li className='list-disc text-base'>Deploy the app to your server</li>
                        <li className='list-disc text-base'>Make the app ready to use for end-users</li>
                      </ul>
                </div>
                <div className="place-items-center mx-auto w-fit">
                  <div className=" w-full gap-16 flex justify-center md:justify-start">
                      <Image
                          src="/images/hiring-page/hihre-ios-dev/testing.png"
                          width={102}
                          height={102}
                          alt='requiremnet analysis'
                      />
                      <span className='text-[#8B89FF] text-[5rem] leading-[1] font-light flex items-end'>5</span>
                  </div>
                      <p className="font-semibold text-[22px] text-center md:text-left -tracking-[-0.48px] mb-4 mt-7">Testing</p>
                      <p className="font-light text-base -tracking-[0px] mb-4 mt-7">The testing phase begins once the iOS developers complete the coding phase.</p>
                      <ul className='ml-4 marker:text-yellow-300'>
                        <li className='list-disc text-base'>Testing with multiple use cases</li>
                        <li className='list-disc text-base'>Ensure 100% error-free appyou</li>
                        <li className='list-disc text-base'>App delivery to you</li>
                      </ul>
                </div>
                <div className="place-items-center mx-auto w-fit">
                  <div className=" w-full gap-16 flex justify-center md:justify-start">
                      <Image
                          src="/images/hiring-page/hihre-ios-dev/development.png"
                          width={102}
                          height={102}
                          alt='requiremnet analysis'
                      />
                      <span className='text-[#8B89FF] text-[5rem] leading-[1] font-light flex items-end'>6</span>
                  </div>
                      <p className="font-semibold text-[22px] text-center md:text-left -tracking-[-0.48px] mb-4 mt-7">App Development</p>
                      <p className="font-light text-base -tracking-[0px] mb-4 mt-7">Our dedicated iOS developers will use the blueprint and wireframe to write codes for the application according to your requirement.</p>
                      <ul className='ml-4 marker:text-yellow-300'>
                        <li className='list-disc text-base'>We only employ In-house iOS developers to write application codes.</li>
                        <li className='list-disc text-base'>We incorporate Agile application development.</li>
                        <li className='list-disc text-base'>We deploy Clean & smart coding practices.</li>
                      </ul>
                </div>
            </div>
        </section>
      <Services/>
      <section className="flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center bg-[#F1F4FB] py-10 md:py-20 lg:py-24">
            <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase text-center">WHY CHOOSE</p>
            <p className="text-black font-semibold text-2xl md:text-[40px] leading-snug text-center mb-3">Innowrap Technologies for iOS App Development Services?</p>
            <p className="text-black font-medium text-2xl md:text-[18px] leading-snug text-center mb-14 md:pb-20">Do you want to get ahead of your competitors in the huge wave of iOS apps? Innowrap is the best app development company in the USA, offering customised, cost-effective iOS mobile app solutions in a timely fashion.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center md:items-start gap-16 md:gap-5 md:justify-between w-full">
                <div className="grid place-items-center">
                  <div className=" w-full flex justify-center">
                      <Image
                          src="/images/hiring-page/hihre-ios-dev/agile-dev-icon.png"
                          width={98}
                          height={98}
                          alt=''
                      />
                  </div>
                      <p className="text-black max-w-[200px] text-center font-semibold text-xl -tracking-[0.02em] mb-4 mt-7">Agile iOS mobile app developers in the USA</p>
                </div>
                <div className="grid place-items-center">
                  <div className=" w-full flex justify-center">
                      <Image
                          src="/images/hiring-page/hihre-ios-dev/dedicated-dev-icon.png"
                          width={98}
                          height={98}
                          alt=''
                      />
                  </div>
                      <p className="text-black max-w-[200px] text-center font-semibold text-xl -tracking-[0.02em] mb-4 mt-7">Dedicated and in-house iOS developers</p>
                </div>
                <div className="grid place-items-center">
                  <div className=" w-full flex justify-center">
                      <Image
                          src="/images/hiring-page/hihre-ios-dev/transparent-pay-icon.png"
                          width={98}
                          height={98}
                          alt=''
                      />
                  </div>
                      <p className="text-black max-w-[200px] text-center font-semibold text-xl -tracking-[0.02em] mb-4 mt-7">Transparent payment plans</p>
                </div>
                <div className="grid place-items-center">
                  <div className=" w-full flex justify-center">
                      <Image
                          src="/images/hiring-page/hihre-ios-dev/continuous-feedback-icon.png"
                          width={98}
                          height={98}
                          alt=''
                      />
                  </div>
                      <p className="text-black max-w-[200px] text-center font-semibold text-xl -tracking-[0.02em] mb-4 mt-7">Continuous customer feedback throughout the app development process</p>
                </div>
                <div className="grid place-items-center">
                  <div className=" w-full flex justify-center">
                      <Image
                          src="/images/hiring-page/hihre-ios-dev/customer-expectation-icon.png"
                          width={98}
                          height={98}
                          alt=''
                      />
                  </div>
                      <p className="text-black max-w-[200px] text-center font-semibold text-xl -tracking-[0.02em] mb-4 mt-7">Exceed customer expectations</p>
                </div>
            </div>

            <button className='w-fit rounded mt-16 px-2 py-3 text-white bg-gradient-1 shadow-bs-1 font-normal text-base'>Start Hiring</button>
        </section>
      <Testimonials/>
      <section className="bg-white py-10 md:py-20 lg:py-32">
        <p className='pl-6 md:pl-12 lg:pl-20 xl:pl-40 uppercase font-semibold text-base tracking-[0.2em] text-blue'>OUR SUCCESS STORIES</p>
        <div className="pl-6 md:pl-12 lg:pl-20 xl:pl-40 flex flex-col mb-8 md:mb-10 lg:mb-20 md:flex-row justify-between gap-4 md:gap-0 pr-6 md:pr-12 lg:pr-20 xl:pr-40">
            <h2 className='font-semibold text-[32px] text-black leading-[44px]'>
            Lorem ipsum dolor sit amet.
            </h2>
          </div>
          {/* slider  */}
          <StorySlider items={sliderJobs} arrowStyle={'above'} />
      </section>
      <section className="px-6 md:px-12 lg:px-20 xl:px-40 mb-10 md:mb-20 xl:mb-28">
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
      <section className="flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center pb-10 pd:pb-20 lg:pb-32">
            <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase text-center">FAQS</p>
            <p className="text-black font-semibold text-2xl md:text-[40px] text-center mb-14 md:mb-20">Frequently asked Questions</p>

            <Faqs />
        </section>
      <Footer/>
    </main>
  )
}
