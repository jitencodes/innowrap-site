'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import Link from "next/link";
import UserIcon from "@/../public/svg icons/user-icon.svg"
import PhoneIcon from "@/../public/svg icons/phone-icon.svg"
import MailIcon from "@/../public/svg icons/mail.svg"
import SuitcaseIcon from "@/../public/svg icons/suitcase.svg"
import ButtonPrimary from "../Common/Buttons/ButtonPrimary";
import ButtonSecondary from "../Common/Buttons/ButtonSecondary";
import Navbar from "./Navbar";
import SidebarMenuMobile from "./SidebarMenuMobile";
import { BiSearch } from "react-icons/bi";


function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    
    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > 200) {
                if (window.scrollY > lastScrollY && !mobileMenu) {
                    setShow("-translate-y-[80px]");
                } else {
                    setShow("shadow-sm");
                }
            } else {
                setShow("translate-y-0");
            }
            setLastScrollY(window.scrollY);
        };
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY,mobileMenu]);


  return (
    <header className="relative mt-3 md:mt-10 px-6 md:px-10 flex justify-between border-b-2 border-gray">
        <div className="block">
            <div className="flex laptop:pb-2">
                <Image
                    src="/innowrap-hiring-logo.png"
                    width={135}
                    height={56}
                    alt='innowrap logo'
                />    
                <div className="hidden lg:flex justify-center items-center ml-8">
                    <div className="relative "> 
                        <div className="absolute top-4 left-6">
                            <SuitcaseIcon/>
                        </div>
                        <input type="text" className="h-12 w-[600px] desktop:max-w-[480px] pl-12 font-normal text-base rounded-[100px] z-0 focus:shadow focus:outline-none bg-[#F5F5F5]" placeholder="Job Title, Skills or Keyword" />
                        <div className="absolute top-1 right-1">
                            <button className="h-10 text-white rounded-r-100 bg-gradient-1 hover:opacity-95 px-5">Find Jobs</button>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar/>
        </div>
        <div className="laptop:hidden">
            <div className="flex justify-end">
                <ul className="flex mb-4 gap-9">
                    <li className='flex group cursor-pointer  items-center justify-center'>
                        {/* Get In Touch Button */}
                        <div className="flex items-center group-hover:hidden">
                            <span className="inline-block align-center">
                                <PhoneIcon/>
                            </span>
                            <p className="ml-2 font-medium text-base">Get In Touch</p> 
                        </div>
                        {/* Get In Touch On Hover */}
                        <div className="hidden flex-col bg-[#FDFDFD] group-hover:flex shadow-bs-3 p-4 absolute w-[240px] z-10 -top-4 right-10  rounded-lg">
                            <div className="flex items-center mb-[10px]">
                                <span className="inline-block align-center">
                                    <PhoneIcon/>
                                </span>
                                <p className="ml-2 font-medium text-base">Get In Touch</p> 
                            </div>
                            <div className="flex items-center gap-2 mb-[10px]">
                                <div className="flex w-[20px] h-[20px]">
                                <Image
                                    src="/us-flag.png"
                                    width={20}
                                    height={20}
                                    alt='us-flag'
                                    />
                                </div>
                                <span className="text-black font-normal text-base tracking-[0.01em]">(+1)-28158 43385</span>
                            </div>
                            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#E6E6F0]">
                                <div className="flex w-[20px] h-[20px]">
                                <Image
                                    src="/indian-flag.png"
                                    width={20}
                                    height={20}
                                    alt='indian-flag'
                                    />
                                </div>
                                <span className="text-black font-normal text-base tracking-[0.01em]">+91-95133 69909</span>
                            </div>
                            
                            <div className="flex items-center gap-2 mb-[10px]">
                                <div className="flex w-[20px] h-[20px]">
                                    <MailIcon/>
                                </div>
                                <span className="text-black font-normal text-base tracking-[0.01em]">+91-95133 69909</span>
                            </div>
                            <button rel="noopener noreferrer"
                                className='rounded px-3 py-3 bg-gradient-1 text-white hover:shadow-bs-1 transition duration-100'
                            >
                                Contact Us
                            </button>
                        </div>
                        
                    </li>
                    <li className='flex cursor-pointer  items-center justify-center'>
                        <span className="inline-block align-center">
                           <UserIcon/>
                        </span>
                        <p className="ml-2 font-medium text-base">Login</p> 
                    </li>
                </ul>
            </div>
            <div className="flex gap-7">
                <ButtonSecondary text={'Apply for jobs'} url={'/'} />
                <ButtonPrimary text={'Start Hiring'} url={'/'} />
            </div>
        </div>
        <div className="hidden laptop:flex justify-center items-center gap-4">
        <BiSearch className="text-[24px]"/>
        <SidebarMenuMobile mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        </div>
    </header>
  )
}

export default Header