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
import { HiringBannerRPO, sliderJobsData, hiringWorkData } from "@/app/data";
import BrandSlider from "@/components/Common/Sliders/BrandSlider";
import HeroBannerxForm from "@/components/Common/Banners/HeroBannerxForm";
import Image from "next/image";
import Accordian2 from "@/components/Common/FAQs/Accordian2";
import Faqs from "@/components/Common/FAQs/Faqs";
import StorySlider from "@/components/Common/Sliders/StorySlider";
import HeroBanner from "@/components/Common/Banners/HeroBanner";
import JobSlider from "@/components/Common/Sliders/JobSlider";
import HeroBanner2 from "@/components/Common/Banners/HeroBanner2";

export default function Home() {
  const getData = (e) => {
    const data = e;
    if (data) {
      return data;
    }
    return notFound();
  };
  const hero1 = getData(HiringBannerRPO);
  const hireType = getData(sliderJobsData);
  const Stories = getData(sliderJobsData);
  const hiringWork = getData(hiringWorkData);

  return (
    <main className="">
      <StickyTopBar/>
      <Header />
      <section aria-describedby='hero-section'>
        <div className="flex flex-col relative z-20 bg-white pt-16 md:pt-24 lg:pt-32 xl:pt-36">
          <HeroBanner2 form={EmailForm} data={hero1}/>
        </div>
        <BrandSlider/>
      </section> 
      <section className="relative flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center py-10 md:py-20 lg:py-24">
        <div className="flex tablet:items-center flex-col md:flex-row-reverse gap-8 mb-6 lg:mb-12">
          <div className="flex relative w-fit md:flex-1 flex-col md:h-full md:justify-center">
            <h3 className="text-2xl lg:text-4xl text-black font-semibold">
              End-to-End Recruiting
            </h3>
            <br />
            <p className="text-base lg:text-xl font-light text-black">
              Great companies are built on the talent of their workforce.
              Finding and keeping the top personnel is one of HR leaders’ major
              concerns. Innowrap manages the entire recruitment process of RPO
              Services from start to finish with the aid of an effective and
              efficient recruitment strategy, and the delivery of the best
              people for each open position. <br /> <br />
              If your company wants to improve the speed, agility,
              standardisation, and flexibility of its recruitment department,
              RPO is the ideal recruiting approach for you.{" "}
            </p>
          </div>
          <div className="flex md:flex-1">
            <div className="flex relative w-[250px] md:w-full h-[250px] md:h-auto lg:w-full">
              <Image
                className="absolute"
                src="/images/hiring-page/rpo/recruiting-image.png"
                fill
                alt="back ground image"
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center bg-[#F1F4FB] py-10 md:py-16">
        {/* <p className="text-white font-medium mb-3 tracking-[3.2px] uppercase text-center">HOW TO HIRE</p> */}
        <p className="text-black font-semibold text-2xl md:text-[40px] leading-snug text-center mb-8 md:mb-12">
          Our Process
        </p>
        {/* <p className="text-white font-medium  text-lg text-center mb-14 md:pb-20">We take care of everything in advance - sourcing, vetting, matching with job description and management of developers</p> */}
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
                    <span className="text-[#C7D3DC] font-thin text-6xl mr-10">
                      {idx + 1}
                    </span>
                  </div>
                  <p className="text-black font-semibold text-2xl -tracking-[0.02em] mb-4 mt-7">
                    {item.title}
                  </p>
                  <p className="text-black font-normal text-base">
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
          <button className="text-base font-semibold text-white transition-all duration-300 bg-gradient-1 rounded-[4px] shadow-bs-1 hover:shadow-none py-3 px-5 mb-7 md:my-14">
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
            <h3 className="text-center font-bold  text-sm md:text-xl text-black md:mb-1">
              Will Braboni
            </h3>
            <p className="text-center font-normal text-xs md:text-base text-black ">
              The Walmart, Marketing Manager
            </p>
          </div>
          <p className="text-black font-semibold text-sm md:text-base text-center lg:text-lg md:max-w-[80%] 2xl:max-w-[70%]">
            Innowrap is a professional, dedicated team furnishing top quality
            talent and domain expertise. They have demonstrated real
            understanding of our issues and time and again have come up with
            their own innovative solutions that has helped us a great
            deal.&quot;
          </p>
        </div>
      </section>

      <section className="overflow-hidden relative flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col bg-white py-10 md:py-20 lg:py-24">
        <div className="flex tablet:items-center flex-col md:flex-row-reverse gap-8 mb-6 lg:mb-12">
          <div className="flex relative w-fit md:flex-1 flex-col md:h-full md:justify-center">
            <h3 className="text-2xl lg:text-4xl text-black font-semibold">
              How we verify our candidates
            </h3>
            <br />
            <p className="text-base lg:text-xl font-light text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eu nibh velit. Ut posuere, sapien non gravida tempus, urna magna
              auctor lacus, eu mollis ante turpis et sapien. Vivamus nibh leo,
              elementum a libero eget, laoreet feugiat erat. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Aenean turpis justo, ultricies eu vestibulum in,
              sagittis ut magna. Vestibulum iaculis magna at auctor luctus.
              <br /> <br /> Ut vulputate, lorem vitae aliquam tincidunt, nunc
              lectus scelerisque nunc, id sollicitudin nisl erat sodales libero.
              Sed vel libero sed enim iaculis sodales.{" "}
            </p>
          </div>
          <div className="flex md:flex-1">
            <div className="flex relative w-[250px] md:w-full h-[250px] md:h-auto lg:w-full">
              <Image
                className="absolute"
                src="/images/hiring-page/rpo/hire-candidate.png"
                fill
                alt="back ground image"
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-20 xl:gap-24">
          <div className="flex flex-col justify-between md:h-[745px] lg:h-[655px]">
            <div className="">
              <p className="text-black font-semibold text-2xl md:text-[26px] lg:text-[32px] xl:text-[40px] leading-snug mb-3">
                Why choose Innowrap ?
              </p>
              <p className="text-base lg:text-xl font-light text-black">
                Innowrap is an affordable RPO provider for both small businesses
                and larger corporate firms. While offering recruitment
                processing outsourcing services, we deliver quality and value in
                the form of these features and benefits.
              </p>
            </div>
            <div className="relative w-[80%] mx-auto flex justify-center h-[365px]">
              <Image
                src="/images/hiring-page/rpo/image-2.png"
                fill
                alt=""
                quality={100}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 custom-scrollbar md:overflow-auto md:h-[745px] lg:h-[655px]">
            <div className="block">
              <div className="flex mb-3 items-center">
                <Image
                  src="/images/hiring-page/rpo/solution-icon.png"
                  width={48}
                  height={48}
                  alt=""
                  quality={100}
                />
                <p className="text-black font-semibold text-2xl md:text-[22px] ml-6">
                  Competitive Rpo Solutions With High Quality
                </p>
              </div>
              <p className="">
                The team members are well-versed in the recruitment process and
                screen candidates to ensure they have the necessary skills and
                qualities. Innowrap offers reasonably priced recruitment
                services without sacrificing service quality.
              </p>
            </div>
            <div className="block">
              <div className="flex mb-3 items-center">
                <Image
                  src="/images/hiring-page/hihre-ios-dev/support-icon.png"
                  width={48}
                  height={48}
                  alt=""
                  quality={100}
                />
                <p className="text-black font-semibold text-base md:text-[22px] leading-snug ml-6">
                  Scalability
                </p>
              </div>
              <p className="">
                Our customizable solutions enable you to scale your outsourcing
                up or down during high and low volume periods.
              </p>
            </div>
            <div className="block">
              <div className="flex mb-3 items-center">
                <Image
                  src="/images/hiring-page/hihre-ios-dev/support-icon.png"
                  width={48}
                  height={48}
                  alt=""
                  quality={100}
                />
                <p className="text-black font-semibold text-2xl md:text-[22px] ml-6">
                  iOS app consultation
                </p>
              </div>
              <p className="">
                Do you have a business idea but are unsure about converting it
                into an iOS app? Innowrap consultants will help you to convert
                your idea into iOS app features. Our experienced tech
                consultants will offer the right advice in choosing the branding
                and design of your iOS app.
              </p>
            </div>
            <div className="block">
              <div className="flex mb-3 items-center">
                <Image
                  src="/images/hiring-page/hihre-ios-dev/support-icon.png"
                  width={48}
                  height={48}
                  alt=""
                  quality={100}
                />
                <p className="text-black font-semibold text-2xl md:text-[22px] ml-6">
                  iOS app consultation
                </p>
              </div>
              <p className="">
                Do you have a business idea but are unsure about converting it
                into an iOS app? Innowrap consultants will help you to convert
                your idea into iOS app features. Our experienced tech
                consultants will offer the right advice in choosing the branding
                and design of your iOS app.
              </p>
            </div>
            <div className="block">
              <div className="flex mb-3 items-center">
                <Image
                  src="/images/hiring-page/hihre-ios-dev/support-icon.png"
                  width={48}
                  height={48}
                  alt=""
                  quality={100}
                />
                <p className="text-black font-semibold text-2xl md:text-[22px] ml-6">
                  iOS app consultation
                </p>
              </div>
              <p className="">
                Do you have a business idea but are unsure about converting it
                into an iOS app? Innowrap consultants will help you to convert
                your idea into iOS app features. Our experienced tech
                consultants will offer the right advice in choosing the branding
                and design of your iOS app.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                Want to hire software developers instead ?
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
      <section className="bg-white py-10 md:py-20 lg:py-32">
        <p className="pl-6 md:pl-12 lg:pl-20 xl:pl-40 uppercase font-semibold text-base tracking-[0.2em] text-blue">
          OUR SUCCESS STORIES
        </p>
        <div className="pl-6 md:pl-12 lg:pl-20 xl:pl-40 flex flex-col md:flex-row justify-between gap-4 md:gap-0 pr-6 md:pr-12 lg:pr-20 xl:pr-40">
          <h2 className="font-semibold text-[32px] text-black leading-[44px]">
            Lorem ipsum dolor sit amet.
          </h2>
        </div>
        {/* slider  */}
        <StorySlider items={Stories} arrowStyle={"above"} />
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
