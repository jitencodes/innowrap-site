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
import { HiringBannerExecutive,sliderJobsData } from '@/app/data';
import BrandSlider from '@/components/Common/Sliders/BrandSlider'
import HeroBannerxForm from '@/components/Common/Banners/HeroBannerxForm'
import Image from 'next/image'
import Accordian2 from '@/components/Common/FAQs/Accordian2'
import Faqs from '@/components/Common/FAQs/Faqs'
import StorySlider from '@/components/Common/Sliders/StorySlider'
import HeroBanner from '@/components/Common/Banners/HeroBanner'
import JobSlider from '@/components/Common/Sliders/JobSlider'
import HeroBanner2 from '@/components/Common/Banners/HeroBanner2'
import FaqSection from '@/components/Hiring/FaqSection'


export default function Home() {
    const getData = (e)=>{
        const data = e;
        if(data){
          return data
        }
        return notFound()
      }
      const hero1 = getData(HiringBannerExecutive)
      const Stories = getData(sliderJobsData  )

  return (
    <main className="">
      <Header/> 
      <StickyTopBar/>
      <section aria-describedby='hero-section'>
        <div className="flex flex-col relative z-20 bg-white pt-16 md:pt-24 lg:pt-32 xl:pt-36">
          <HeroBanner2 form={EmailForm} data={hero1}/>
        </div>
        <BrandSlider/>
      </section>
      <section className="relative flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center py-10 md:py-20 lg:py-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 ">
          <div className="block md:flex-1">
          <h2 className="text-black font-semibold text-2xl md:text-3xl lg:text-[40px] leading-snug mb-2 capitalize">what is our approach</h2>
          <p className='text-base lg:text-xl font-light text-black mb-5'>We take care of everything in advance</p>
          <Accordian2 />
          <div className="mt-5">
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
          <div className="block md:flex-1">
          <h2 className="text-black font-semibold text-2xl md:text-3xl lg:text-[40px] leading-snug mb-2 capitalize">How we verify our candidates</h2>
          <p className='text-base lg:text-xl font-light text-black'>We take care of everything in advance</p>
          <div className="flex relative w-full h-[170px] lg:h-[252px] my-2">
              <Image  className='absolute'
                  src="/images/hiring-page/hiring-candidates.png"
                  fill
                  alt='back ground image'
                  quality={100}
              />
          </div>
          <p className='text-base lg:text-xl font-light text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis porta massa. Nunc diam metus, volutpat in semper eget, elementum at lectus. Duis ultricies, orci eu feugiat suscipit, turpis massa suscipit leo, vitae ullamcorper nunc eros id odio. Quisque pulvinar quam et interdum luctus.<br/> <br/>  Aliquam at leo malesuada, dapibus dui ut, fermentum purus. Pellentesque porta fermentum felis, a finibus enim varius sollicitudin. Integer congue aliquet ornare. Ut a ante pulvinar, bibendum ante a, vulputate sem.<br/> <br/>  Duis ultricies, orci eu feugiat suscipit, turpis massa suscipit leo, vitae ullamcorper</p>
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
