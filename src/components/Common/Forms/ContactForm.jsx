'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { BiChevronDown, BiChevronsDown } from 'react-icons/bi';

const ContactForm = ({serviceName}) => {
    const [openCountryCode, setOpenCountryCode] = useState(false)
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: 'Johnlorem@gmail.com',
    mobileNumber: '9876544321',
    companyName: '',
    lookingFor: serviceName, 
    features: '', 
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formValues);
  };

  return (
      <form className="mx-auto w-full tab:mx-3 md:min-w-[290px] border border-black rounded-md shadow-bs-1 px-6 py-6 my-6 xl:px-14 xl:py-6 max-w-[390px] bg-white" onSubmit={handleSubmit}>
        <h3 className='text-blue text-base font-bold mb-6'>Get Started with iOS Development</h3>
        
        <div className="mb-3 w-full flex items-center">
          <label
            htmlFor="lookingFor"
            className={`text-sm ${
              formValues.lookingFor ? 'text-[#4D4D4D] -translate-y-5 text-[11px] font-medium mx-1' : 'font-light text-base '
            } transition-all duration-300 absolute pointer-events-none mx-3`}
          >
            LookingFor
          </label>
          <input
            type="lookingFor"
            id="lookingFor"
            name="lookingFor"
            className="input-field w-full border px-3 py-2 rounded-md border-[#CFCFCF] bg-[#F0F0F0]  outline-none"
            value={formValues.lookingFor}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="mb-3 w-full flex items-center">
          <label
            htmlFor="fullName"
            className={`text-sm ${
              formValues.fullName ? 'text-[#4D4D4D] bg-white leading-[9px] -translate-y-5 text-[11px] font-medium mx-1' : 'font-light text-base '
            } transition-all duration-300 absolute pointer-events-none mx-3`}
          >
            Full Name*
          </label>
          <input
            type="fullName"
            id="fullName"
            name="fullName"
            className="input-field w-full border px-3 py-2 rounded-md border-[#CFCFCF] bg-white outline-none"
            value={formValues.fullName}
            onChange={handleChange}
            
          />
        </div>
        <div className="mb-3 w-full flex items-center">
          <label
            htmlFor="email"
            className={`text-sm ${
              formValues.email ? 'text-[#4D4D4D] bg-white leading-[9px] -translate-y-5 text-[11px] font-medium mx-1' : 'font-light text-base '
            } transition-all duration-300 absolute pointer-events-none mx-3`}
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="input-field w-full border px-3 py-2 rounded-md border-[#CFCFCF] bg-white outline-none"
            value={formValues.email}
            onChange={handleChange}
            
          />
        </div>
        <div className="mb-3 w-full flex items-center border px-3 py-2 rounded-md border-[#CFCFCF] bg-white">
          <label
            htmlFor="mobileNumber"
            className={`text-sm ${
              formValues.mobileNumber ? 'text-[#4D4D4D] bg-white leading-[9px] -translate-y-5 text-[11px] font-medium mx-0' : 'font-light text-base mx-16'
            } transition-all duration-300 absolute pointer-events-none `}
          >
            Mobile Number*
          </label>
          <div className='relative '>
            <div onClick={()=>{setOpenCountryCode(!openCountryCode)}} className='flex gap-1 cursor-pointer border-r border-[#CFCFCF] mr-3 pr-2 font-normal text-xs max-w-[70px] md:max-w-[100px] lg:max-w-max sm:text-sm  lg:text-base tracking-normal text-black'>
                          <Image
                            className=''
                            src="/indian-flag.png"
                            width={20}
                            height={20}
                            alt='indian-flag'
                            quality={100}
                            />
                    <span>+91</span>
                    <BiChevronsDown />
            </div>
                <div class={`${openCountryCode?'block':'hidden'} absolute -left-2 top-8 z-10 w-fit origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <ul class="" role="none">
                        <li class="text-[#616161] flex gap-1 w- px-1 sm:px-2 py-2 text-sm hover:bg-[#f3f4f6] cursor-pointer" role="menuitem" tabindex="-1" id="menu-item-0"><Image
                            className=''
                            src="/indian-flag.png"
                            width={20}
                            height={20}
                            alt='indian-flag'
                            quality={100}
                            />
                            <span>+91</span>
                        </li>
                        <li class="text-[#616161] flex gap-1 w- px-1 sm:px-2 py-2 text-sm hover:bg-[#f3f4f6] cursor-pointer" role="menuitem" tabindex="-1" id="menu-item-0"><Image
                            className=''
                            src="/indian-flag.png"
                            width={20}
                            height={20}
                            alt='indian-flag'
                            quality={100}
                            />
                            <span>+91</span>
                        </li>
                        <li class="text-[#616161] flex gap-1 w- px-1 sm:px-2 py-2 text-sm hover:bg-[#f3f4f6] cursor-pointer" role="menuitem" tabindex="-1" id="menu-item-0"><Image
                            className=''
                            src="/indian-flag.png"
                            width={20}
                            height={20}
                            alt='indian-flag'
                            quality={100}
                            />
                            <span>+91</span>
                        </li>
                    </ul>
                </div>
            </div>
          <input
            type="number"
            id="mobileNumber"
            name="mobileNumber"
            className="input-field w-full  outline-none"
            value={formValues.mobileNumber}
            onChange={handleChange}
            
          />
        </div>
        <div className="mb-3 w-full flex items-center">
          <label
            htmlFor="companyName"
            className={`text-sm ${
              formValues.companyName ? 'text-[#4D4D4D] bg-white leading-[9px] -translate-y-5 text-[11px] font-medium mx-1' : 'font-light text-base '
            } transition-all duration-300 absolute pointer-events-none mx-3`}
          >
            Company Name
          </label>
          <input
            type="companyName"
            id="companyName"
            name="companyName"
            className="input-field w-full border px-3 py-2 rounded-md border-[#CFCFCF] bg-white outline-none"
            value={formValues.companyName}
            onChange={handleChange}
            
          />
        </div>
        <div className="mb-3 w-full flex items-center">
          <label
            htmlFor="features"
            className={`text-sm ${
              formValues.features ? 'text-[#4D4D4D] bg-white leading-[9px] -translate-y-5 text-[11px] font-medium mx-1' : 'font-light text-base '
            } transition-all duration-300 absolute pointer-events-none mx-3`}
          >
            What Features Are You Looking For ?
          </label>
          <input
            type="features"
            id="features"
            name="features"
            className="input-field w-full border px-3 py-2 rounded-md border-[#CFCFCF] bg-white outline-none"
            value={formValues.features}
            onChange={handleChange}
            
          />
        </div>
        <button className='py-2 px-3 cursor-pointer text-white bg-gradient-1 rounded-[4px] w-full shadow-bs-1 hover:shadow-none self-end'>Submit</button>

      </form>
  );
};

export default ContactForm;
