"use client";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import React, { useState } from "react";
import {
  BsArrowLeft,
} from "react-icons/bs";
import { BiAlarm, BiFlag, BiVideo } from "react-icons/bi";
import SlotPicker from "@/components/Common/SlotPicker";
const timeSlots = [
  '7:00 AM',
  '7:30 AM',
  '8:00 AM',
  '8:30 AM',
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
  '4:30 PM',
  '5:00 PM',
  '5:30 PM',
];

const StartHiring = () => {
  const [skills, setSkills] = useState([
    { name: "RoR", selected: true },
    { name: "Angular", selected: true },
    { name: "Python", selected: true },
    { name: "php", selected: true },
    { name: "JavaScript", selected: false },
    { name: "Kotlin", selected: false },
    { name: "Node.js", selected: false },
    { name: "Android", selected: false },
    { name: "react", selected: false },
    { name: "c#", selected: false },
    { name: "Swift", selected: false },
  ]);
  const [types, setTypes] = useState([
    { name: "contract", selected: true },
    { name: "dedicated", selected: true },
    { name: "temp developer", selected: true },
    { name: "Permanent / Full-Time Equivalent Developers", selected: false },
    { name: "contract to hire", selected: false },
    { name: "remote developer", selected: false },
    { name: "onsite developer", selected: false },
    { name: "Offshore Managed Team", selected: false },
    { name: "Hourly Developers", selected: false },
    { name: "Innowrap Direct", selected: false },
  ]);
  const [role, setRole] = useState("Employers");
  const [step, setStep] = useState(3);
  const [experience, setExperfirst] = useState("");
  const [yourOwnSkill, setYourOwnSkill] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [date, setDate] = useState();
  const [timezone, setTimezone] = useState();
  const [time, setTime] = useState();
  const handleAddYourOwnSkill = () => {
    if (yourOwnSkill.trim() !== "") {
      setSkills((prevState) => [
        ...prevState,
        { name: yourOwnSkill.trim(), selected: true },
      ]);
      setYourOwnSkill("");
    }
  };
  const highlightDates = [new Date("2023-08-08"), new Date("2023-08-09")];

  const Step1 = () => {
    return (
      <div className="block">
        <div className="flex flex-wrap gap-3 md:gap-5 lg:gap-3 xl:gap-5 py-6 md:py-8">
          {skills.map((skill, idx) => {
            return !skill.selected ? (
              <button
                key={idx}
                onClick={() => {
                  setSkills((prevState) => {
                    const updatedSkills = [...prevState];
                    updatedSkills[idx].selected = true;
                    return updatedSkills;
                  });
                }}
                className={`bg-white text-black text-sm md:text-base px-4 flex gap-1 md:gap-3 py-2 md:px-5 md:py-3 lg:px-3 lg:py-2 xl:px-5 xl:py-3 border rounded-[30px]`}
              >
                {skill.name}
              </button>
            ) : (
              <button
                key={idx}
                className={`bg-white text-black text-sm md:text-base px-4 flex gap-1 md:gap-3 shadow-bs-1 py-2 md:px-5 md:py-3 lg:px-3 lg:py-2 xl:px-5 xl:py-3 border rounded-[30px]`}
              >
                {skill.name}{" "}
                <div
                  onClick={() => {
                    setSkills((prevState) => {
                      const updatedSkills = [...prevState];
                      updatedSkills[idx].selected = false;
                      return updatedSkills;
                    });
                  }}
                  className="bg-[#DDDDDD] text-[#707070] w-5 h-5 flex items-center justify-center rounded-full"
                >
                  <span>x</span>
                </div>
              </button>
            );
          })}
        </div>
        <label
          htmlFor="addYourOwn"
          className="text-black font-semibold mb-1 block"
        >
          Add Your Own
        </label>
        <input
          className="block w-full border border-[#CFCFCF] rounded-md py-3 px-5 mb-5 text-sm md:text-base"
          type="text"
          name="addYourOwn"
          value={yourOwnSkill}
          onChange={(e) => {
            setYourOwnSkill(e.target.value);
          }}
          placeholder="Start typing to add your own"
        />
        <button
          onClick={handleAddYourOwnSkill}
          className={`whitespace-nowrap text-sm xl:text-base w-max h-max rounded px-5 xl:px-7 py-2 xl:py-3 bg-gradient-1 text-white shadow-bs-1 hover:shadow-none focus:border border-black transition duration-100`}
        >
          Add
        </button>

        <h2 className="text-black font-extrabold md:text-2xl lg:text-xl xl:text-2xl mb-2 mt-6">
          Your Selection
        </h2>

        <div className="flex flex-wrap gap-3 md:gap-5 lg:gap-3 xl:gap-5 py-3 ">
          {skills.map((skill, idx) => {
            if(skill.selected){
              return (
                <button
                  key={idx}
                  className={`bg-white text-black text-sm md:text-base px-4 flex gap-1 md:gap-3 shadow-bs-1 py-2 md:px-5 md:py-3 lg:px-3 lg:py-2 xl:px-5 xl:py-3 border rounded-[30px]`}
                >
                  {skill.name}{" "}
                  <div
                    onClick={() => {
                      setSkills((prevState) => {
                        const updatedSkills = [...prevState];
                        updatedSkills[idx].selected = false;
                        return updatedSkills;
                      });
                    }}
                    className="bg-[#DDDDDD] text-[#707070] w-5 h-5 flex items-center justify-center rounded-full"
                  >
                    <span>x</span>
                  </div>
                </button>
              );
            }
            })}
        </div>

        <form action="submit" className="flex flex-col mt-5 xl:mt-8">
          <label htmlFor="experience" className="text-black font-semibold mb-1">
            How Many Years Of Experience Are You Looking For In The Candidate?
          </label>
          <select
            onChange={(e) => {
              setExperience(e.target.value);
            }}
            value={experience}
            className="border bg-white border-[#CFCFCF] rounded-md py-3 px-5 mb-5 text-sm md:text-base"
          >
            <option value="">Select Years of Experience</option>
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
            <option value="4">4 years</option>
            <option value="5">5 years</option>
            <option value="5+">5+ years</option>
          </select>
          <label htmlFor="workEmail" className="text-black font-semibold mb-1">
            Work Email
          </label>
          <input
            className="border border-[#CFCFCF] rounded-md py-3 px-5 mb-5 text-sm md:text-base"
            type="email"
            name="workEmail"
            value={workEmail}
            onChange={(e) => {
              setWorkEmail(e.target.value);
            }}
            placeholder="Enter your Work Email"
          />
          <button onClick={()=>{setStep(2)}}
            className={`whitespace-nowrap text-sm xl:text-base w-max h-max rounded px-5 xl:px-7 py-2 xl:py-3 bg-gradient-1 text-white shadow-bs-1 hover:shadow-none focus:border border-black transition duration-100`}
          >
            Next
          </button>
        </form>
      </div>
    );
  };
  const Step2 = () => {
    return (
      <div className="block">
        <form action="submit" className="flex flex-col mt-5 xl:mt-8">
            <label htmlFor="name" className="text-black font-semibold mb-1">
            Name
            </label>
            <input
            className="border border-[#CFCFCF] rounded-md py-3 px-5 mb-5 text-sm md:text-base"
            type="text"
            name="name"
            value={Name}
            onChange={(e) => {
                setName(e.target.value);
            }}
            placeholder="Enter your name"
            />
            <label htmlFor="name" className="text-black font-semibold mb-1">
            Phone Number
            </label>
            <PhoneInput
            inputStyle={{
              width:'100%',
              border: '1px solid #CFCFCF',
              borderRadius: '0.375rem', // Equivalent to rounded-md
              height: '45px', // Equivalent to py-3 px-5
              marginBottom: '1rem', // Equivalent to mb-5
              fontSize: '0.875rem', // Equivalent to text-sm
              '@media (min-width: 768px)': {
                fontSize: '1rem', // Equivalent to md:text-base
              },
            }}
            country={'in'}
            preferredCountries={['us','ca']}
            value={Phone}
            onChange={value => setPhone(value)}
            />
            <label htmlFor="companyName" className="text-black font-semibold mb-1 mt-5">
            Company Name (Optional)
            </label>
            <input
            className="border border-[#CFCFCF] rounded-md py-3 px-5 text-sm md:text-base"
            type="text"
            name="companyName"
            value={companyName}
            onChange={(e) => {
                setCompanyName(e.target.value);
            }}
            placeholder="Enter your Company Name"
            />


        <h2 className="text-black font-extrabold md:text-2xl lg:text-xl xl:text-2xl mb-2 mt-6">
          Your Selection
        </h2>
            <div className="flex flex-wrap gap-3 md:gap-5 lg:gap-3 xl:gap-5 mt-3 mb-6 md:mb-8">
            {types.map((type, idx) => {
                return !type.selected ? (
                <button
                    key={idx}
                    onClick={() => {
                    setType((prevState) => {
                        const updatedType = [...prevState];
                        updatedType[idx].selected = true;
                        return updatedType;
                    });
                    }}
                    className={`bg-white text-black text-sm md:text-base px-4 flex gap-1 md:gap-3 py-2 md:px-5 md:py-3 lg:px-3 lg:py-2 xl:px-5 xl:py-3 border rounded-[30px]`}
                >
                    {type.name}
                </button>
                ) : (
                <button
                    key={idx}
                    className={`bg-white text-black text-sm md:text-base px-4 flex gap-1 md:gap-3 shadow-bs-1 py-2 md:px-5 md:py-3 lg:px-3 lg:py-2 xl:px-5 xl:py-3 border rounded-[30px]`}
                >
                    {type.name}{" "}
                    <div
                    onClick={() => {
                        setType((prevState) => {
                        const updatedType = [...prevState];
                        updatedType[idx].selected = false;
                        return updatedType;
                        });
                    }}
                    className="bg-[#DDDDDD] text-[#707070] w-5 h-5 flex items-center justify-center rounded-full"
                    >
                    <span>x</span>
                    </div>
                </button>
                );
            })}
            </div>
            <div className="flex gap-3 md:gap-5">    
                <button onClick={()=>{setStep(1)}}
                className={`whitespace-nowrap text-sm xl:text-base w-max h-max rounded px-5 xl:px-7 py-2 xl:py-3 bg-white border text-black shadow-bs-1 hover:shadow-none focus:border border-black transition duration-100`}
                >
                Back
                </button>
                
                <button onClick={()=>{setStep(3)}}
                className={`whitespace-nowrap text-sm xl:text-base w-max h-max rounded px-5 xl:px-7 py-2 xl:py-3 bg-gradient-1 text-white shadow-bs-1 hover:shadow-none focus:border border-black transition duration-100`}
                >
                Next
                </button>
            </div>
        </form>

      </div>
    );
  };
  const Step3 = () => {
    return (
      <div className="block">
        <p className="text-black text-xs md:text-sm lg:text-xs xl:text-sm font-medium">Please select your prefered slot to schedule a call with us</p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-2 bg-white">
          <div className="flex flex-col gap-5 my-3">
            <h2 className="text-black font-extrabold text-base md:text-lg lg:text-base xl:text-lg">
              Schedule A Call With Us
            </h2>
            <div className="flex items-center gap-3">
              <BiAlarm className="text-white flex-shrink-0 bg-black w-[30px] h-[30px] md:w-[36px] md:h-[36px] lg:w-[30px] lg:h-[30px] xl:w-[36px] xl:h-[36px] p-2 rounded-full"/><span className="font-medium text-[#3E3E3E] text-sm md:text-base lg:text-sm xl:text-base">30 Min</span>
            </div>
            <div className="flex items-start gap-3">
              <BiFlag className="text-white flex-shrink-0 bg-black w-[30px] h-[30px] md:w-[36px] md:h-[36px] lg:w-[30px] lg:h-[30px] xl:w-[36px] xl:h-[36px] p-2 rounded-full"/><span className="font-medium text-[#3E3E3E] text-sm md:text-base lg:text-sm xl:text-base">Share your hiring requirement specifics like roles and responsibilities, technical skills, experience range and budget. If it is a match with our developer pool, we shall proceed to the next steps and assign an account manager for you</span>
            </div>
            <div className="flex items-start gap-3">
              <BiVideo className="text-white flex-shrink-0 bg-black w-[30px] h-[30px] md:w-[36px] md:h-[36px] lg:w-[30px] lg:h-[30px] xl:w-[36px] xl:h-[36px] p-2 rounded-full"/><span className="font-medium text-[#3E3E3E] text-sm md:text-base lg:text-sm xl:text-base">Meeting link and web conferencing details provided upon confirmation.</span>
            </div>
          </div>
          <div className="flex flex-col bg-[#F7F9FD] p-3 md:p-6 lg:p-7 xl:p-7 md:-mr-16 lg:-mr-6 xl:-mr-16">
            <div className="mb-3 flex relative h-[65px] w-[65px] md:h-[85px]  md:w-[85px] lg:h-[85px]  lg:w-[85px] xl:h-[83px]  xl:w-[83px] ">
              <Image
                    src="/images/kaam.com/kaam-logo.png"
                    className='absolute'
                    fill
                    quality={100}
                    alt='kaam.com logo'
                    draggable={false}
                />
            </div>
            <p className="text-[#A7A7A7] text-sm md:text-base lg:text-sm xl:text-base font-bold capitalize">Meet</p>
            <p className="text-blue text-lg md:text-xl lg:text-lg xl:text-xl font-bold capitalize">Piyush Choudhary</p>
            <p className="text-black text-sm md:text-base lg:text-sm xl:text-base font-medium capitalize">Piyush is committed to ensuring that your experience with Innowrap is both valuable and enjoyable!</p>
            <p className="text-black text-sm md:text-base lg:text-sm xl:text-base font-bold capitalize mt-2">Reach Me On:</p>
            <p className="text-black text-sm md:text-base lg:text-sm xl:text-base font-medium capitalize">piyush@innowrap.com</p>
            <p className="text-black text-sm md:text-base lg:text-sm xl:text-base font-medium capitalize"> +91-9618196074</p>
          </div>
        </div>
        <h3 className="text-black font-extrabold text-base md:text-lg lg:text-base xl:text-lg mb-2 mt-6">
          Select A Day
        </h3>
        <div className="flex">
          {date ? <><BsArrowLeft className="inline text-lg mr-5"/> <h3>{date.toLocaleString('en-US', { day: 'numeric' })}{date.toLocaleString('en-US', { month: 'short' })}</h3><span>{date.toLocaleString('en-US', { year: 'numeric' })}</span></>:
          <SlotPicker startDate={date} setStartDate={setDate} />}
        </div>
        <div className="flex flex-col">
          <label htmlFor="timezone" className="text-black font-semibold mb-1">
            Time Zone
          </label>
          <select
            name="timezone"
            onChange={(e) => {
              setTimezone(e.target.value);
            }}
            value={timezone}
            className="border bg-white border-[#CFCFCF] rounded-md py-3 px-5 mb-5 text-sm md:text-base"
          >
            <option value="">India Standard Time (2:02am)</option>
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
            <option value="4">4 years</option>
            <option value="5">5 years</option>
            <option value="5+">5+ years</option>
          </select>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h3 className="text-black font-extrabold text-base md:text-lg lg:text-base xl:text-lg">
                Select A Time
              </h3>
              <span className="text-[#3E3E3E] font-medium text-sm md:text-base lg:text-sm xl:text-base">Duration: 30 Min</span>
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-2 xl:gap-3">
            {
              timeSlots.map((slot,idx)=>{
                return <button key={idx} className={`border p-2 bg-white rounded-md  `}>7:00 AM</button>
              })
            }
            </div>
          </div>
          <div className="flex gap-3 md:gap-5">    
              <button onClick={()=>{setStep(2)}}
              className={`whitespace-nowrap text-sm xl:text-base w-max h-max rounded px-5 xl:px-7 py-2 xl:py-3 bg-white border text-black shadow-bs-1 hover:shadow-none focus:border border-black transition duration-100`}
              >
              Back
              </button>
              
              {date && <button onClick={()=>{setStep(3)}}
              className={`whitespace-nowrap text-sm xl:text-base w-max h-max rounded px-5 xl:px-7 py-2 xl:py-3 bg-gradient-1 text-white shadow-bs-1 hover:shadow-none focus:border border-black transition duration-100`}
              >
              Next
              </button>}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="hidden lg:block h-screen hidden-scrollbar overflow-x-hidden overflow-y-auto relative bg-gradient-to-b bgfi  from-[#FFFFFF] to-[#F1F4FB] py-6 xl:py-12 px-10 lg:px-12 xl:px-16 2xl:px-20">
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
          Strengthen Your Software Development Capabilities By Bringing In Top
          People From One Of The World’s Leading Outsourcing Firms
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

      <div className="relative overflow-x-hidden">
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
        <div className="h-screen scrollBar overflow-x-hidden overflow-y-auto px-6 md:px-16 lg:px-6 xl:px-16 2xl:px-20 pt-12 md:pt-20 lg:pt-12 pb-5">
          {/* Header */}
          <div className="flex items-center gap-3 md:gap-5 lg:gap-2 xl:gap-5">
            <BsArrowLeft className="text-2xl md:text-4xl lg:text-2xl xl:text-4xl font-bold" />
            <span className="text-[#330033] font-bold text-xl md:text-4xl lg:text-2xl xl:text-4xl">
              innowrap
            </span>
            {role && (
              <span className="text-black text-base md:text-xl lg:text-lg xl:text-xl font-extrabold self-end">
                For {role}
              </span>
            )}
            <button
              className={`whitespace-nowrap text-sm xl:text-base w-max h-max rounded phone:px-2 px-3 xl:px-7 py-2 xl:py-3 bg-gradient-1 text-white shadow-bs-1 hover:shadow-none focus:border border-black transition duration-100`}
            >
              Sign In
            </button>
          </div>
          {/* Title with steps*/}
          <div className="flex flex-wrap gap-3 md:gap-5 lg:gap-3 xl:gap-5 mt-6">
            <span className="text-blue text-xs md:text-sm lg:text-sm xl:text-sm whitespace-nowrap h-fit font-bold capitalize bg-[#F2F5FC] px-3 py-1 md:px-5 md:py-2 rounded-2xl">
              {`step ${step}/3`}
            </span>
            <h2 className="text-black font-extrabold text-sm md:text-2xl lg:text-xl xl:text-2xl mb-2">
              {step===1?'What Role Are You Hiring For ?':step===2?'What Is The Best Way To Contact You ?':'Schedule A Quick Call With Us To Discuss Your Requirement'}
            </h2>
          </div>
          {/* step 1 */}
          {step===1 && <Step1 />}
          {/* step 2 */}
          {step===2 && <Step2 />}
          {/* step 3 */}
          {step===3 && <Step3 />}
        </div>
      </div>
    </>
  );
};

export default StartHiring;
