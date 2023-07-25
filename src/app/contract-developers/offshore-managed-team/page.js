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
import { HiringBannerOMT,sliderJobsData, hiringWorkData } from '@/app/data';
import BrandSlider from '@/components/Common/Sliders/BrandSlider'
import HeroBannerxForm from '@/components/Common/Banners/HeroBannerxForm'
import Image from 'next/image'
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
    const hero2 = getData(HiringBannerOMT)
    const sliderJobs = getData(sliderJobsData)
      
  return (
    <main className="">
      {/* <StickyTopBar/> */}
      <Header/> 
      <HeroBanner2 data={hero2} form={EmailForm}/>
      <BrandSlider/>
      <Consultants/>
      
      <section className="py-10 md:py-20 lg:py-32 px-6 md:px-12 lg:px-20 xl:px-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 lg:mb-12">
                <div className="flex flex-col">
                  <h3 className='text-lg lg:text-4xl text-black font-semibold'>Why Offshore Managed Team</h3><br/> 
                  <p className='text-base lg:text-xl font-light text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu nibh velit. Ut posuere, sapien non gravida tempus, urna magna auctor lacus, eu mollis ante turpis et sapien. Vivamus nibh leo, elementum a libero eget, laoreet feugiat erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean turpis justo, ultricies eu vestibulum in, sagittis ut magna. <br/> <br/>Vestibulum iaculis magna at auctor luctus. Ut vulputate, lorem vitae aliquam tincidunt, nunc lectus scelerisque nunc, id sollicitudin nisl erat sodales libero. Sed vel libero sed enim iaculis sodales. </p>
                </div>
                <div className="flex relative h-[378px] lg:h-auto">
                <Image  className='absolute'
                          src="/images/hiring-page/offshore-managed-team/team.png"
                          fill
                          alt='back ground image'
                          quality={100}
                      />
                </div>
            </div>
            {/* Features Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-4 md:p-6 relative bg-[#F1F4FB]">
                  <div className="flex items-center mb-5">
                    <div className="flex relative h-[35px] w-[35px] md:h-[98px] md:w-[98px] lg:h-[55px] lg:w-[55px] xl:h-[75px] xl:w-[75px] 2xl:h-[98px] 2xl:w-[98px] mr-3">
                        <Image  className='absolute'
                            src="/images/hiring-page/offshore-managed-team/dedicated-tailored-team-icon.png"
                            fill
                            alt='back ground image'
                            quality={100}
                        />
                    </div>
                    <h3 className='text-sm md:text-xl lg:text-base 2xl:text-xl text-black font-semibold max-w-[193px] md:max-w-[293px] lg:max-w-[193px] xl:max-w-[228px] 2xl:max-w-[276px]'><span className='text-blue'>Dedicated Team Tailored </span>For Unique Needs Of The Project</h3>
                    <div className="flex  absolute right-3 md:right-6  h-[67px] w-[67px] -top-3 md:h-[152px] md:w-[152px] lg:h-[98px] lg:w-[98px] 2xl:h-[150px] 2xl:w-[150px]">
                        <Image  className='absolute'
                            src="/images/hiring-page/offshore-managed-team/dedicated-tailored-team.png"
                            fill
                            alt='back ground image'
                            quality={100}
                        />
                    </div>
                  </div>
                  
                  <ul>
                      <li className="mb-3 text-sm md:text-base 2xl:text-lg">
                          <span className="mr-2"> 🡢</span> Phasellus id tincidunt nibh, vestibulum consectetur risus. Mauris eget metus vitae orci egestas vulputate.
                      </li>
                      <li className="mb-3 text-sm md:text-base">
                          <span className="mr-2">🡢</span> Vestibulum iaculis magna at auctor luctus. Ut vulputate, lorem vitae aliquam tincidunt, nunc lectus scelerisque nunc, id sollicitudin nisl erat sodales libero. Sed vel libero sed enim iaculis sodales.
                      </li>
                      <li className="mb-3 text-sm md:text-base">
                          <span className="mr-2">🡢</span> elementum a libero eget, laoreet feugiat erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                      </li>
                  </ul>
                </div>
                <div className="p-4 md:p-6 relative bg-[#F1F4FB]">
                  <div className="flex items-center mb-5">
                    <div className="flex relative h-[35px] w-[35px] md:h-[98px] md:w-[98px] lg:h-[55px] lg:w-[55px] xl:h-[75px] xl:w-[75px] 2xl:h-[98px] 2xl:w-[98px] mr-3">
                        <Image  className='absolute'
                            src="/images/hiring-page/offshore-managed-team/shared-project-icon.png"
                            fill
                            alt='back ground image'
                            quality={100}
                        />
                    </div>
                    <h3 className='text-sm md:text-xl lg:text-base 2xl:text-xl text-black font-semibold max-w-[193px] md:max-w-[293px] lg:max-w-[193px] xl:max-w-[228px] 2xl:max-w-[276px]'><span className='text-blue'>Shared Project  </span>Management</h3>
                    <div className="flex  absolute right-3 md:right-6  h-[67px] w-[67px] -top-3 md:h-[152px] md:w-[152px] lg:h-[98px] lg:w-[98px] 2xl:h-[150px] 2xl:w-[150px]">
                        <Image  className='absolute'
                            src="/images/hiring-page/offshore-managed-team/shared-project.png"
                            fill
                            alt='back ground image'
                            quality={100}
                        />
                    </div>
                  </div>
                  
                  <ul>
                      <li className="mb-3 text-sm md:text-base 2xl:text-lg">
                          <span className="mr-2"> 🡢</span> Phasellus id tincidunt nibh, vestibulum consectetur risus. Mauris eget metus vitae orci egestas vulputate.
                      </li>
                      <li className="mb-3 text-sm md:text-base">
                          <span className="mr-2">🡢</span> Vestibulum iaculis magna at auctor luctus. Ut vulputate, lorem vitae aliquam tincidunt, nunc lectus scelerisque nunc, id sollicitudin nisl erat sodales libero. Sed vel libero sed enim iaculis sodales.
                      </li>
                      <li className="mb-3 text-sm md:text-base">
                          <span className="mr-2">🡢</span> elementum a libero eget, laoreet feugiat erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                      </li>
                  </ul>
                </div>
                <div className="p-4 md:p-6 relative bg-[#F1F4FB]">
                  <div className="flex items-center mb-5">
                    <div className="flex relative h-[35px] w-[35px] md:h-[98px] md:w-[98px] lg:h-[55px] lg:w-[55px] xl:h-[75px] xl:w-[75px] 2xl:h-[98px] 2xl:w-[98px] mr-3">
                        <Image  className='absolute'
                            src="/images/hiring-page/offshore-managed-team/direct-access-icon.png"
                            fill
                            alt='back ground image'
                            quality={100}
                        />
                    </div>
                    <h3 className='text-sm md:text-xl lg:text-base 2xl:text-xl text-black font-semibold max-w-[193px] md:max-w-[293px] lg:max-w-[193px] xl:max-w-[228px] 2xl:max-w-[276px]'><span className='text-blue'>Direct Access  </span>To Every Team Member</h3>
                    <div className="flex  absolute right-3 md:right-6  h-[67px] w-[67px] -top-3 md:h-[152px] md:w-[152px] lg:h-[98px] lg:w-[98px] 2xl:h-[150px] 2xl:w-[150px]">
                        <Image  className='absolute'
                            src="/images/hiring-page/offshore-managed-team/direct-access.png"
                            fill
                            alt='back ground image'
                            quality={100}
                        />
                    </div>
                  </div>
                  
                  <ul>
                      <li className="mb-3 text-sm md:text-base 2xl:text-lg">
                          <span className="mr-2"> 🡢</span> Phasellus id tincidunt nibh, vestibulum consectetur risus. Mauris eget metus vitae orci egestas vulputate.
                      </li>
                      <li className="mb-3 text-sm md:text-base">
                          <span className="mr-2">🡢</span> Vestibulum iaculis magna at auctor luctus. Ut vulputate, lorem vitae aliquam tincidunt, nunc lectus scelerisque nunc, id sollicitudin nisl erat sodales libero. Sed vel libero sed enim iaculis sodales.
                      </li>
                      <li className="mb-3 text-sm md:text-base">
                          <span className="mr-2">🡢</span> elementum a libero eget, laoreet feugiat erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                      </li>
                  </ul>
                </div>
                <div className="p-4 md:p-6 relative bg-[#F1F4FB]">
                  <div className="flex items-center mb-5">
                    <div className="flex relative h-[35px] w-[35px] md:h-[98px] md:w-[98px] lg:h-[55px] lg:w-[55px] xl:h-[75px] xl:w-[75px] 2xl:h-[98px] 2xl:w-[98px] mr-3">
                        <Image  className='absolute'
                            src="/images/hiring-page/offshore-managed-team/drive-development-icon.png"
                            fill
                            alt='back ground image'
                            quality={100}
                        />
                    </div>
                    <h3 className='text-sm md:text-xl lg:text-base 2xl:text-xl text-black font-semibold max-w-[193px] md:max-w-[293px] lg:max-w-[193px] xl:max-w-[228px] 2xl:max-w-[276px]'><span className='text-blue'>Drive Development  </span>Based On Your Own SOPs</h3>
                    <div className="flex  absolute right-3 md:right-6  h-[67px] w-[67px] -top-3 md:h-[152px] md:w-[152px] lg:h-[98px] lg:w-[98px] 2xl:h-[150px] 2xl:w-[150px]">
                        <Image  className='absolute'
                            src="/images/hiring-page/offshore-managed-team/drive-development.png"
                            fill
                            alt='back ground image'
                            quality={100}
                        />
                    </div>
                  </div>
                  
                  <ul>
                      <li className="mb-3 text-sm md:text-base 2xl:text-lg">
                          <span className="mr-2"> 🡢</span> Phasellus id tincidunt nibh, vestibulum consectetur risus. Mauris eget metus vitae orci egestas vulputate.
                      </li>
                      <li className="mb-3 text-sm md:text-base">
                          <span className="mr-2">🡢</span> Vestibulum iaculis magna at auctor luctus. Ut vulputate, lorem vitae aliquam tincidunt, nunc lectus scelerisque nunc, id sollicitudin nisl erat sodales libero. Sed vel libero sed enim iaculis sodales.
                      </li>
                      <li className="mb-3 text-sm md:text-base">
                          <span className="mr-2">🡢</span> elementum a libero eget, laoreet feugiat erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                      </li>
                  </ul>
                </div>
            </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-1-reverse py-10 md:py-20 lg:py-32 px-6 md:px-12 lg:px-20 xl:px-40">
            
              <div className="flex w-[225px] h-[114px] md:w-[525px] md:h-[144px] absolute top-0 left-0 translate-x-1/4">
                      <Image className=''
                          src="/images/hiring-page/offshore-managed-team/dots-top.png"
                          fill
                          alt=''
                          quality={100}
                      />
              </div>
              <div className="flex w-[400px] h-[500px] md:w-[1000px] md:h-[1200px] absolute bottom-0 right-0 translate-x-1/4">
                      <Image className=''
                          src="/images/hiring-page/offshore-managed-team/dots-bottom.png"
                          fill
                          alt=''
                          quality={100}
                      />
              </div>
          <p className="text-white font-semibold mb-3 tracking-[0.2em] uppercase text-center">HOW TO BUILD</p>
          <p className="text-white font-semibold text-2xl md:text-[40px] leading-snug text-center mb-10 md:mb-12">An Offshore Managed Team ?</p>
          <div className="flex tablet:items-center flex-col md:flex-row gap-8 mb-6 lg:mb-12">
                <div className="relative flex w-fit md:flex-1 flex-col md:h-full md:justify-center">
                  <div className="flex mb-2">
                    <span className='text-[28px] leading-snug text-white font-extralight uppercase self-end'>step</span><span className='text-[#FFBB03] font-extralight text-[74px] leading-[74px]'>1</span>
                  </div>
                    <h3 className='text-lg lg:text-2xl text-white font-semibold xl:mb-2'>Discovery & Insights</h3><br/> 
                  
                  <ul className='text-white max-w-[425px]'>
                      <li className="mb-3 font-light text-sm md:text-[15px]">
                          <span className="mr-2"> 🡢</span> Phasellus id tincidunt nibh, vestibulum consectetur risus. Mauris eget metus vitae orci egestas vulputate.
                      </li>
                      <li className="mb-3 text-sm font-light md:text-[15px]">
                          <span className="mr-2">🡢</span> Vestibulum iaculis magna at auctor luctus. Ut vulputate, lorem vitae aliquam tincidunt, nunc lectus scelerisque nunc, id sollicitudin nisl erat sodales libero. Sed vel libero sed enim iaculis sodales.
                      </li>
                  </ul>
                </div>
                <div className="flex md:flex-1">       
                    <div className="flex relative w-[250px] md:w-[378px] h-[250px] md:h-auto lg:w-[465px] mx-5">
                    <Image  className='absolute'
                            src="/images/hiring-page/offshore-managed-team/discovery-insight.png"
                            fill
                            alt='back ground image'
                            quality={100}
                        />
                    </div>
                </div>
          </div>
          <div className="flex tablet:items-center flex-col md:flex-row-reverse gap-8 mb-6 lg:mb-12">
                <div className="flex relative w-fit md:flex-1 flex-col md:h-full md:justify-center">
                  
                   {/* <div className="flex absolute right-0 top-full h-[168px] lg:h-[95px] mx-5"> */}
                   <Image  className='absolute right-full bottom-full translate-y-12 -translate-x-1 hidden md:flex md:h-[98px] lg:h-[165px] 2xl:h-[175px] 2xl:-translate-x-6 2xl:w-[150px]'
                                src="/images/hiring-page/offshore-managed-team/spiral-arrow-1.png"
                                width={95}
                                height={165}
                                alt='back ground image'
                                quality={100}
                            />
                      {/* </div> */}
                   {/* <div className="flex absolute right-0 top-full h-[168px] lg:h-[95px] mx-5"> */}
                   <Image  className='absolute right-full top-full hidden md:flex md:h-[98px] lg:h-[165px] 2xl:h-[175px] 2xl:-translate-x-6 2xl:w-[150px]'
                                src="/images/hiring-page/offshore-managed-team/spiral-arrow-2.png"
                                width={95}
                                height={165}
                                alt='back ground image'
                                quality={100}
                            />
                      {/* </div> */}

                  <div className="flex mb-2">
                    <span className='text-[28px] leading-snug text-white font-extralight uppercase self-end'>step</span><span className='text-[#FFBB03] font-extralight text-[74px] leading-[74px]'>2</span>
                  </div>
                    <h3 className='text-lg lg:text-2xl text-white font-semibold xl:mb-2'>Project Scoping & Delivering Estimates</h3><br/> 
                  
                  <ul className='text-white max-w-[425px]'>
                      <li className="mb-3 font-light text-sm md:text-[15px]">
                          <span className="mr-2"> 🡢</span> Phasellus id tincidunt nibh, vestibulum consectetur risus. Mauris eget metus vitae orci egestas vulputate.
                      </li>
                      <li className="mb-3 text-sm font-light md:text-[15px]">
                          <span className="mr-2">🡢</span> Vestibulum iaculis magna at auctor luctus. Ut vulputate, lorem vitae aliquam tincidunt, nunc lectus scelerisque nunc, id sollicitudin nisl erat sodales libero. Sed vel libero sed enim iaculis sodales.
                      </li>
                  </ul>
                </div>
                <div className="flex md:flex-1">     
                    <div className="flex relative w-[250px] md:w-[378px] h-[250px] md:h-auto lg:w-[465px] mx-5">
                    <Image  className='absolute'
                            src="/images/hiring-page/offshore-managed-team/scoping.png"
                            fill
                            alt='back ground image'
                            quality={100}
                        />
                    </div>
                </div>
          </div>
          <div className="flex tablet:items-center flex-col md:flex-row gap-8 mb-6 lg:mb-12">
                <div className="flex w-fit md:flex-1 flex-col md:h-full md:justify-center">
                  <div className="flex mb-2">
                    <span className='text-[28px] leading-snug text-white font-extralight uppercase self-end'>step</span><span className='text-[#FFBB03] font-extralight text-[74px] leading-[74px]'>3</span>
                  </div>
                    <h3 className='text-lg lg:text-2xl text-white font-semibold xl:mb-2'>Building Dedicated Team</h3><br/> 
                  
                  <ul className='text-white max-w-[425px]'>
                      <li className="mb-3 font-light text-sm md:text-[15px]">
                          <span className="mr-2"> 🡢</span> Phasellus id tincidunt nibh, vestibulum consectetur risus. Mauris eget metus vitae orci egestas vulputate.
                      </li>
                      <li className="mb-3 text-sm font-light md:text-[15px]">
                          <span className="mr-2">🡢</span> Vestibulum iaculis magna at auctor luctus. Ut vulputate, lorem vitae aliquam tincidunt, nunc lectus scelerisque nunc, id sollicitudin nisl erat sodales libero. Sed vel libero sed enim iaculis sodales.
                      </li>
                  </ul>
                </div>
                <div className="flex md:flex-1">
                    <div className="flex relative w-[250px] md:w-[378px] h-[250px] md:h-auto lg:w-[465px] mx-5">
                    <Image  className='absolute'
                            src="/images/hiring-page/offshore-managed-team/building-team.png"
                            fill
                            alt='back ground image'
                            quality={100}
                        />
                    </div>
                </div>
          </div>
          
          <div className="flex items-center gap-[10px] flex-col">
            <button className='text-base font-semibold text-black bg-white rounded-[4px] shadow-bs-1 hover:shadow-none py-3 px-5 mb-7 md:mb-14'>Hire Team Now</button>
                <div className="relative w-[50px] md:w-[100px] h-[50px] md:h-[100px] rounded-full overflow-hidden">
                    <Image className='absolute'
                    src="/images/hiring-page/client-testimonial-profile-3.png"
                    fill
                    quality={100}
                    alt='economical tech talent from emerging markets'
                    />
                </div>
                <div className="">
                    <h3 className="text-center font-bold  text-sm md:text-xl text-[#FFBB03] md:mb-1">Will Braboni</h3>
                    <p className="text-center font-normal text-xs md:text-base text-white ">The Walmart, Marketing Manager</p>
                </div>
                <p className="text-white font-semibold text-sm md:text-base text-center lg:text-lg md:max-w-[80%] 2xl:max-w-[70%]">Innowrap is a professional, dedicated team furnishing top quality talent and domain expertise. They have demonstrated real understanding of our issues and time and again have come up with their own innovative solutions that has helped us a great deal.&quot;</p>
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
                        Want to develop web / mobile app instead ?
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
      <section className="relative bg-white py-10 md:py-20 lg:py-32">
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
