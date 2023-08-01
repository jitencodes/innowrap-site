'use client'
import Image from "next/image";
import React, { useState } from "react";
import {
  BsArrowLeft,
  BsArrowRight,
  BsGoogle,
  BsLinkedin,
} from "react-icons/bs";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState('Employers');
  const [otp, setOtp] = useState();

  return (
    <>
      <div className="hidden lg:block h-screen hidden-scrollbar overflow-x-hidden overflow-y-auto relative bg-gradient-to-b bgfi  from-[#FFFFFF] to-[#F1F4FB] py-6 xl:py-12 px-10 lg:px-12">
        <div className="flex top-0 absolute h-[50%] w-full z-[0]">
          <Image
            src="/images/login/dots-top.png"
            className="absolute"
            fill
            quality={100}
            alt="polcadots background"
            draggable={false}
          />
        </div>
        <p className="uppercase text-blue text-center text-xs xl:text-sm font-normal tracking-[2.8px]">
          trusted By
        </p>
        <p className="capitalize text-black text-center font-bold lg:text-lg xl text-3xl">
          top global brands
        </p>
        <div className="flex relative my-4 xl:my-6 h-16 xl:h-20 w-[100%] mx-auto">
          <Image
            src="/images/login/brands.png"
            className="absolute"
            fill
            quality={100}
            alt="Trusted Brands list"
            draggable={false}
          />
        </div>
        <div className="relative h-[215px] xl:h-[300px] w-full">
          <Image
            src="/images/login/map.png"
            className="absolute"
            fill
            quality={100}
            alt="kaam.com logo"
            draggable={false}
          />
        </div>
        <p className="capitalize text-center mx-auto max-w-[500px] text-black font-bold lg:text-lg xl:text-2xl">
          We Match Top-Tier Companies And World-Class Tech Talent By Utilizing
          Our Extensive Global Network.
        </p>
        <div className="mt-5">
          <div className="relative flex justify-center w-[25px] h-[25px] xl:w-[35px] xl:h-[35px] ">
            <Image
              src="/images/hiring-page/hihre-ios-dev/quote.png"
              fill
              alt=""
              quality={100}
            />
          </div>
          <p className="text-black text-xs xl:text-base font-medium mt-1 pl-[14px]">
            Innowrap is a professional, dedicated team furnishing top quality
            talent and domain expertise. They have demonstrated real
            understanding of our issues and time and again have come up with
            their own innovative solutions that has helped us a great deal.”
          </p>
          <div className="flex items-center gap-[10px] pl-[14px] mt-2">
            <div className="flex relative w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] rounded-full border-[6px] border-[#F3F5F8] overflow-hidden">
              <Image
                src="/images/hiring-page/client-testimonial-profile-3.png"
                fill
                alt="economical tech talent from emerging markets"
                quality={100}
              />
            </div>
            <div className="">
              <h3 className="font-bold text-sm xl:text-xl text-black md:mb-1">
                Will Braboni
              </h3>
              <p className="font-normal text-xs xl:text-base text-black ">
                The Walmart, Marketing Manager
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex bottom-0 absolute h-[50%] w-full z-[-1]">
          <Image
            src="/images/login/dots-bottom.png"
            className="absolute"
            fill
            quality={100}
            alt="polcadots background"
            draggable={false}
          />
        </div>
        <div className="h-screen scrollBar overflow-x-hidden overflow-y-auto px-6 md:px-16 lg:px-12 xl:px-16 pt-12 md:pt-20 lg:pt-12 xl:pt-20 pb-5">
        <div className="flex items-center gap-3 md:gap-5 lg:gap-2 xl:gap-5">
            <BsArrowLeft className="text-2xl md:text-4xl lg:text-2xl xl:text-4xl font-bold" />
            <span className="text-[#330033] font-bold text-xl md:text-4xl lg:text-2xl xl:text-4xl">
              innowrap
            </span>
            {
                role && <span className="text-black text-base md:text-xl lg:text-lg xl:text-xl font-extrabold self-end">For {role}</span>
            }
          </div>

          {/* Choose your role options started */}
          { !role &&<div className="block mt-16 md:mt-20 lg:mt-12 xl:mt-20">
            <p className="uppercase text-blue text-sm lg:text-xs xl:text-sm font-normal tracking-[2.8px]">
              Choose
            </p>
            <p className="capitalize text-black font-bold md:text-2xl lg:text-xl xl:text-2xl">
              your role
            </p>

            <div className="flex flex-col gap-5 md:gap-9 lg:gap-6 xl:gap-9 mt-6 md:mt-12 lg:mt-10 xl:mt-12">
              <div onClick={()=>{setRole('IT Professionals')}} className="bg-white flex items-center px-4 md:px-8 lg:px-4 xl:px-8 py-6 md:py-10 lg:py-6 xl:py-10 border border-[#EEEEEE] rounded-[12px] hover:border-black hover:shadow-bs-1 transition-all duration-300">
                <div className=" flex-shrink-0 relative w-[52px] h-[52px]  md:w-[75px] md:h-[75px] lg:w-[45px] lg:h-[45px] xl:w-[52px] xl:h-[52px] mr-6 md:mr-8">
                  <Image
                    src="/images/login/job-description-icon.png"
                    className="absolute"
                    fill
                    quality={100}
                    alt="Job description icon"
                    draggable={false}
                  />
                </div>
                <div className="">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-black text-base md:text-xl lg:text-sm xl:text-lg font-bold">
                      I am an Employer
                    </p>
                    <span>
                      <BsArrowRight className="font-extrabold text-xl lg:text-base xl:text-lg " />
                    </span>
                  </div>
                  <p className="text-black text-xs md:text-base lg:text-xs xl:text-[13px] leading-snug font-medium">
                    Work on an as-needed basis with our top developers, whether
                    you require fulltime teams or hourly-based developers
                  </p>
                </div>
              </div>
              <div onClick={()=>{setRole('Employers')}} className="bg-white flex items-center px-4 md:px-8 lg:px-4 xl:px-8 py-6 md:py-10 lg:py-6 xl:py-10 border border-[#EEEEEE] rounded-[12px] hover:border-black hover:shadow-bs-1 transition-all duration-300">
                <div className=" flex-shrink-0 relative w-[52px] h-[52px]  md:w-[75px] md:h-[75px] lg:w-[45px] lg:h-[45px] xl:w-[52px] xl:h-[52px] mr-6 md:mr-8">
                  <Image
                    src="/images/login/it-employee-icon.png"
                    className="absolute"
                    fill
                    quality={100}
                    alt="Job description icon"
                    draggable={false}
                  />
                </div>
                <div className="">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-black text-base md:text-xl lg:text-sm xl:text-lg font-bold">
                      I am an IT Professional
                    </p>
                    <span>
                      <BsArrowRight className="font-extrabold text-xl lg:text-base xl:text-lg " />
                    </span>
                  </div>
                  <p className="text-black text-xs md:text-base lg:text-xs xl:text-[13px] leading-snug font-medium">
                    Get on-board Innowrap&apos;s Talent Network, a worldwide
                    community of top IT Professionals to get matched with
                    exciting global opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>}
          {/* Choose your role options ends */}

          {/* Login */}
          <div className="block mt-6">
            <h2 className="text-black font-extrabold md:text-2xl lg:text-xl xl:text-2xl mb-2">
              Sign in or Create your account and join us as an IT Professional
            </h2>
            <p className="text-black text-xs md:text-base lg:text-xs xl:text-[13px] leading-snug font-medium">
              Get the freedom to choose between 1000s of Hourly Jobs, Temp Jobs,
              Contract / Temp Jobs, Permanent / Full-Time Equivalent Jobs,
              Contract to Hire Jobs, Employment at Innowrap etc.
            </p>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 justify-center mt-5 xl:mt-8">
              <button className="border border-[#000000] rounded-lg py-2 md:py-3 px-[10px] flex items-center gap-6 text-sm md:text-base lg:gap-2 lg:text-sm xl:gap-6 xl:text-base justify-center">
                <BsGoogle />
                Continue with Google
              </button>
              <button className="border border-[#000000] rounded-lg py-2 md:py-3 px-[10px] flex items-center gap-6 text-sm md:text-base lg:gap-2 lg:text-sm xl:gap-6 xl:text-base justify-center">
                <BsLinkedin />
                Continue with LinkedIn
              </button>
            </div>
            <div className="flex items-center justify-center text-black uppercase font-medium gap-3 my-8">
              <hr className="w-20 border-[#afafaf]" /> or{" "}
              <hr className="w-20 border-[#afafaf]" />
            </div>
            <form action="submit" className="flex flex-col">
              <label htmlFor="email" className="text-black font-semibold mb-1">
                Email
              </label>
              <input
                className="border border-[#CFCFCF] rounded-md py-3 px-5 mb-5 text-sm md:text-base"
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your email id"
              />
              <button
                className={`whitespace-nowrap text-sm xl:text-base w-max h-max rounded p-2 md:px-7 md:py-3 bg-gradient-1 text-white shadow-bs-1 hover:shadow-none focus:border border-black transition duration-100`}
              >
                Next
              </button>
            </form>
          </div>

          {/* OTP */}
          <div className="block mt-6">
            <h2 className="text-black font-extrabold md:text-2xl lg:text-xl xl:text-2xl mb-2">
              We have sent a One Time Password (OTP) to your email
              maxdawson95@gmail.com
            </h2>
            <p className="text-black text-xs md:text-base lg:text-xs xl:text-[13px] leading-snug font-medium">
              Sign in to your account by entering OTP
            </p>

            <form action="submit" className="flex flex-col mt-5 xl:mt-8">
              <label
                htmlFor="password"
                className="text-black font-semibold mb-1"
              >
                OTP
              </label>
              <input
                className="border border-[#CFCFCF] rounded-md py-3 px-5 mb-5 text-sm md:text-base"
                type="password"
                name="password"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                placeholder="Enter Your OTP"
              />
              <p className="text-xs mb-2 font-bold leading-5">
                Signing in to the account implies that you agree accept our{" "}
                <span className="text-blue cursor-pointer underline">
                  Terms of Service and Privacy Policy
                </span>
              </p>
              <p className="text-xs mb-2 font-bold leading-5">
                Didn’t receive OTP?{" "}
                <span className="text-blue cursor-pointer underline">
                  Resend link
                </span>
              </p>
              <button
                className={`whitespace-nowrap text-sm xl:text-base w-max h-max rounded p-2 md:px-7 md:py-3 bg-gradient-1 text-white shadow-bs-1 hover:shadow-none focus:border border-black transition duration-100`}
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
