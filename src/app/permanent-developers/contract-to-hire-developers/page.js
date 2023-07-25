import Hiring from "@/components/Hiring";
import Packages from "@/components/Hiring/Packages";
import HiringBanner from "@/components/Hiring/HiringBanner";
import HiringProcess from "@/components/Hiring/HiringProcess";
import Services from "@/components/Hiring/Services";
import Testimonials from "@/components/Hiring/Testimonials";
import { Footer } from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import StickyTopBar from "@/components/header/StickyTopBar";
import Consultants from "@/components/Hiring/Consultant";
import EmailForm from "@/components/Common/Forms/EmailForm";
import { HiringBannerCHD, sliderJobsData, hiringWorkData2 } from "@/app/data";
import BrandSlider from "@/components/Common/Sliders/BrandSlider";
import Image from "next/image";
import Faqs from "@/components/Common/FAQs/Faqs";
import StorySlider from "@/components/Common/Sliders/StorySlider";
import HeroBanner from "@/components/Common/Banners/HeroBanner";
import Link from "next/link";

export default function Home() {
  const getData = (e) => {
    const data = e;
    if (data) {
      return data;
    }
    return notFound();
  };
  const hero1 = getData(HiringBannerCHD);
  const sliderJobs = getData(sliderJobsData);
  const hiringWork = getData(hiringWorkData2);
  return (
    <main className="">
      <Header />
      <StickyTopBar/>
      <section aria-describedby='hero-section'>
        <div className="flex flex-col relative z-20 bg-white pt-16 md:pt-24 lg:pt-32 xl:pt-36">
          <HeroBanner form={EmailForm} data={hero1}/>
        </div>
        <BrandSlider/>
      </section>
      <Consultants />
      <Services />

      <section className="px-6 md:px-12 lg:px-20 xl:px-40">
        <div
          className="relative overflow-hidden flex py-6 md:py-10 items-center w-full rounded-lg px-3 md:px-12"
          style={{
            backgroundImage: "url(images/hiring-page/requirement-banner.png)",
            backgroundSize: "cover",
          }}
        >
          <Image
            className="absolute -z-10"
            src="/images/hiring-page/requirement-banner.png"
            fill
            alt="back ground image"
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
              <input
                type="email"
                placeholder="Enter Your Email ID"
                className="rounded border-2 px-2 py-3 text-black placeholder:text-white font-normal text-base w-full md:max-w-[450px] border-white bg-blue"
              />
              <button className="rounded self-end px-2 w-full md:w-fit md:px-4 py-2 md:py-3 whitespace-nowrap text-blue h-fit bg-white shadow-bs-1 font-normal text-base">
                Tell Us What You Need
              </button>
            </div>
          </div>
        </div>
      </section>

      <HiringProcess />

      <section className="relative flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center bg-gradient-to-b from-[#262DD2] to-[#2F53E8] pt-10 pb-32">
        <p className="text-white font-medium mb-3 tracking-[3.2px] uppercase text-center">
          HOW TO HIRE
        </p>
        <p className="text-white font-semibold text-2xl md:text-[40px] leading-snug text-center mb-2">
          A contract to hire developer from us ?
        </p>
        <p className="text-white font-medium  text-lg text-center mb-14 md:pb-20">
          We take care of everything in advance - sourcing, vetting, matching
          with job description and management of developers
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center md:items-start gap-16 md:gap-5 md:justify-between w-full">
          {hiringWork.map((item, idx) => {
            return (
              <div key={idx} className="flex justify-center">
                <div className=" max-w-[350px] md:max-w-[250px]">
                  <div className="flex justify-between">
                    <Image
                      src={item.icon}
                      width={88}
                      height={88}
                      alt={item.altText}
                    />
                    <span className="text-[#8B89FF] font-thin text-6xl mr-10">
                      {idx + 1}
                    </span>
                  </div>
                  <p className="text-white font-semibold text-2xl -tracking-[0.02em] mb-4 mt-7">
                    {item.title}
                  </p>
                  <p className="text-white font-normal text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-[10px] flex-col">
          <div className="flex -bottom-0 left-0 absolute h-[350px] w-screen -z-1">
            <Image
              src="/bg-dots.png"
              className="dr"
              fill
              quality={100}
              alt="background image with polcadots"
              draggable={false}
            />
          </div>
          <button className="text-base font-semibold text-black bg-white rounded-[4px] shadow-bs-1 hover:shadow-none py-3 px-5 mb-7 md:my-14">
            Hire Team Now
          </button>
          <div className="relative w-[50px] md:w-[100px] h-[50px] md:h-[100px] rounded-full overflow-hidden">
            <Image
              className="absolute"
              src="/images/hiring-page/client-testimonial-profile-3.png"
              fill
              quality={100}
              alt="economical tech talent from emerging markets"
            />
          </div>
          <div className="">
            <h3 className="text-center font-bold  text-sm md:text-xl text-[#FFBB03] md:mb-1">
              Will Braboni
            </h3>
            <p className="text-center font-normal text-xs md:text-base text-white ">
              The Walmart, Marketing Manager
            </p>
          </div>
          <p className="text-white font-semibold text-sm md:text-base text-center lg:text-lg md:max-w-[80%] 2xl:max-w-[70%]">
            Innowrap is a professional, dedicated team furnishing top quality
            talent and domain expertise. They have demonstrated real
            understanding of our issues and time and again have come up with
            their own innovative solutions that has helped us a great
            deal.&quot;
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 xl:px-40  mt-10 md:mt-20 xl:mt-28">
        <div
          className="relative overflow-hidden flex py-6 md:py-10 items-center w-full rounded-lg px-3 md:px-12"
          style={{
            backgroundImage: "url(images/hiring-page/requirement-banner.png)",
            backgroundSize: "cover",
          }}
        >
          <Image
            className="absolute -z-10"
            src="/images/hiring-page/requirement-banner.png"
            fill
            alt="back ground image"
            quality={100}
          />
          <div className="flex flex-col lg:flex-row md:justify-between items-start gap-4 md:gap-0 md:items-center w-full">
            <div className="flex flex-col gap-3 desktop:max-w-[350px] w-full">
              <p className="text-white capitalize leading-snug font-semibold text-[24px] md:text-[32px]">
                Are you looking for software development services instead ?
              </p>
              <Link
                href="/"
                className="text-white capitalize font-semibold text-xs md:text-[16px] w-max"
              >
                Explore Web Development
              </Link>
            </div>
            <div className="flex md:mt-12 gap-4 w-full flex-col md:flex-row justify-end">
              <input
                type="email"
                placeholder="Enter Your Email ID"
                className="rounded border-2 px-2 py-3 text-black placeholder:text-white font-normal text-base w-full md:max-w-[450px] border-white bg-blue"
              />
              <button className="rounded self-end px-2 w-full md:w-fit md:px-4 py-2 md:py-3 whitespace-nowrap text-blue h-fit bg-white shadow-bs-1 font-normal text-base">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 md:py-20 lg:py-32 relative">
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
      <Testimonials />
      <section className="flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center pb-10 pd:pb-20 lg:pb-32">
        <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase text-center">
          FAQS
        </p>
        <p className="text-black font-semibold text-2xl md:text-[40px] text-center mb-14 md:mb-20">
          Frequently asked Questions
        </p>

        <Faqs />
      </section>
      <Footer />
    </main>
  );
}
