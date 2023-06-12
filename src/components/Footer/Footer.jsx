import Image from "next/image"
import IgIcon from "../../../public/svg icons/instagram-icon.svg"
import FbIcon from "../../../public/svg icons/facebook-icon.svg"
import LinkedInIcon from "../../../public/svg icons/linkedIn-Icon.svg"

export const Footer = () => {
  return (
    <>  
        <div className="flex rounded-t-[30px] md:rounded-t-[80px] bg-footer-border pt-2 md:pt-4">
          <div className="w-full bg-[#212137] rounded-t-[24px] md:rounded-t-[64px]  px-6 md:px-12 lg:px-20 xl:px-[120px] py-8 md:py-[85px]">
              <div className="mb-[24px] w-[157px]">
                  <Image
                    src="/Innowrap-logo-with-headline.png"
                    width={157}
                    height={40}
                    alt='Innowrap icon with headline'
                    />
              </div>
              <div className="relative flex flex-col md:flex-row">
                  <div className="flex w-full md:w-2/5 flex-col justify-between md:border-r pr-0 md:pr-5 lg:pr-7 xl:pr-10 border-dashed border-[#4F4E75]">
                    <div className="flex flex-col">
                      <p className="text-white mb-6 font-semibold text-base md:text-lg lg:text-xl">
                        Innowrap is a leading IT company empowering businesses to scale their technical teams remotely with top-performing Indian talent.
                      </p>
                      <p className="text-white mb-6 font-semibold text-base md:text-lg lg:text-xl">
                      We are not your traditional recruiters, we&#39;re a new-age company with an AI driven tech platform that helps make hiring more effective, flexible and on-demand. We make it easy for global businesses to hire Top Tech talent remotely.
                      </p>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="flex w-[20px] h-[20px]">
                          <Image
                            src="/indian-flag.png"
                            width={20}
                            height={20}
                            alt='indian-flag'
                            />
                        </div>
                          <span className="text-white font-normal text-base tracking-[0.01em]">(+1)-28158 43385</span>
                      </div>
                      <div className="flex items-center gap-2 mb-6">
                      <div className="flex w-[20px] h-[20px]">
                          <Image
                            src="/us-flag.png"
                            width={20}
                            height={20}
                            alt='us-flag'
                            />
                        </div>
                          <span className="text-white font-normal text-base tracking-[0.01em]">(+1)-28158 43385</span>
                      </div>
                    </div>
                    <div className="">
                      <h3 className="text-gray font-normal text-xs mb-[10px]">Follow Us</h3>
                      <div className="flex gap-[18px] mb-8">
                        <IgIcon/>
                        <FbIcon/>
                        <LinkedInIcon/>
                      </div>
                      <div className="block  absolute md:relative bottom-0 w-full">
                        <p className="text-light-gray text-center md:text-left">
                        Copyright ©2023 Innowrap
                        </p>
                        <p className="text-light-gray text-center md:text-left">
                        Terms & Conditions  |  Cookie Policy  |  Privacy Policy
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full md:w-3/5 flex-col pl-0 md:pl-5 lg:pl-7 xl:pl-10">
                    <div className="flex justify-between flex-wrap">
                      <div className="flex flex-col gap-10 max-w-[200px]">
                        <ul className="flex flex-col gap-3">
                          <li>
                            <h3 className="text-white font-medium text-[13px] uppercase tracking-[0.01em]">Hire Developers</h3>
                          </li>
                          <li>
                            <h3 className="text-white font-normal text-[13px] uppercase tracking-[0.01em]">Contract Developers - Hourly Developers</h3>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                              Contract / Dedicated Developers
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Offshore Managed Team
                            </h4>
                          </li>
                        </ul>
                        <ul className="flex flex-col gap-3">
                          <li>
                            <h3 className="text-white font-normal text-[13px] uppercase tracking-[0.01em]">Permanent Developers </h3>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Permanent / Full-Time Equivalent Developers
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Contract to Hire Developers
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Executives
                            </h4>
                          </li>
                        </ul>
                        <ul className="flex flex-col gap-3">
                          <li>
                            <h3 className="text-white font-medium text-[13px] uppercase tracking-[0.01em]">IT Services</h3>
                          </li>
                          <li>
                            <h3 className="text-white font-normal text-[13px] uppercase tracking-[0.01em]"> IT Staffing</h3>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Permanent / Full-Time Equivalent Staffing
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Contract Staffing 
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Contract to Hire Staffing 
                            </h4>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-10 max-w-[200px]">
                        <ul className="flex flex-col gap-3">
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Recruiting Process Outsourcing (RPO)
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Payroll Outsourcing
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Executive Search
                            </h4>
                          </li>
                        </ul>
                        <ul className="flex flex-col gap-3">
                          <li>
                            <h3 className="text-white font-medium text-[13px] uppercase tracking-[0.01em]">Mobile App Development</h3>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            IOS App Development
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Android App Development
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Hybrid App Development
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            React Native App Development
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Flutter App Development
                            </h4>
                          </li>
                        </ul>
                        <ul className="flex flex-col gap-3">
                          <li>
                            <h3 className="text-white font-medium text-[13px] uppercase tracking-[0.01em]">Web Development</h3>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Website Development
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            CMS Development
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            E-commerce Development 
                            </h4>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-10 max-w-[200px]">
                        <ul className="flex flex-col gap-3">
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            ERP / CRM Development
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Business Intelligence Development
                            </h4>
                          </li>
                        </ul>
                        <ul className="flex flex-col gap-3">
                          <li>
                            <h3 className="text-white font-medium text-[13px] uppercase tracking-[0.01em]">Designing</h3>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            UI / UX Designing
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Product / Prototype Designing
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Interaction Designing
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Game Designing and Development
                            </h4>
                          </li>
                        </ul>
                        <ul className="flex flex-col gap-3">
                          <li>
                            <h3 className="text-white font-medium text-[13px] uppercase tracking-[0.01em]">Emerging Technologies</h3>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Big Data Development
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            AI / ML Development, AR / VR / MR Development
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Blockchain Development 
                            </h4>
                          </li>
                          <li>
                            <h4 className="text-light-gray font-light text-[13px] tracking-[0.01em]">
                            Internet of Things Development 
                            </h4>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex mt-12 justify-between flex-wrap mb-14 md:mb-0">
                      <div className="mb-[24px] w-[304px]">
                        <Image
                          src="/images/hiring-page/brand-reviews.png"
                          width={304}
                          height={116}
                          alt='Innowrap icon with headline'
                          />
                      </div>
                      <div className="mb-[24px] w-[304px]">
                        <Image
                          src="/images/hiring-page/award-reviews.png"
                          width={304}
                          height={116}
                          alt='Innowrap icon with headline'
                          />
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}
