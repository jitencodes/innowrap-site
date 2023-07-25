'use client'
import React, { useState, useEffect, useRef } from "react";
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
    const headerRef = useRef(null);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('down');
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(0);
    const scrollThreshold = 200; // Header will be hidden when scroll to this value


    useEffect(() => {
      // Get and set the header height on the first load
    setHeaderHeight(headerRef.current.clientHeight);
}, [])

useEffect(() => {
    const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          setScrollDirection(currentScrollPos > prevScrollPos ? 'up' : 'down');
          setPrevScrollPos(currentScrollPos);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Get and set the header height on the first load
        setHeaderHeight(headerRef.current.clientHeight);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevScrollPos]);

    const headerStyle = {
        transform: scrollDirection === 'down' || prevScrollPos <= scrollThreshold
        ? 'translateY(0)'
        : `translateY(-${headerHeight+5}px)`,
        transition: prevScrollPos <= scrollThreshold ? 'none' :'transform 0.3s ease-in-out',
        // Add other styles for your header here
      };

  return (
    <header ref={headerRef} style={headerStyle} className={`fixed w-screen z-30 top-0 transition-transform duration-300 bg-white pt-3 md:pt-6 lg:pt-8 px-6 md:px-10 flex justify-between border-b-2 border-gray`}>
        <div className="block">
            <div className="flex laptop:pb-2">
                <Link href={'/'} className="relative w-[117px] h-[48px] md:w-[135px] md:h-[56px] lg:w-[117px] lg:h-[48px] xl:w-[135px] xl:h-[56px]">
                    <Image className="absolute"
                        src="/innowrap-hiring-logo.png"
                        fill
                        quality={100}
                        alt='innowrap logo'
                    />    
                </Link>    
                <div className="hidden lg:flex justify-center items-center ml-8">
                    <div className="relative "> 
                        <div className="absolute top-[10px] left-4 xl:top-4 xl:left-6">
                            <SuitcaseIcon/>
                        </div>
                        <input type="text" className="h-9 xl:h-12 w-[600px] desktop:max-w-[480px] pl-10 xl:pl-12 font-normal text-sm xl:text-base rounded-[100px] z-0 focus:shadow focus:outline-none bg-[#F5F5F5]" placeholder="Job Title, Skills or Keyword" />
                        <div className="absolute top-1 xl:top-1 right-1">
                            <button className="h-7 xl:h-10 text-xs xl:text-base text-white rounded-r-100 bg-gradient-1 hover:opacity-95 px-4 xl:px-5">Find Jobs</button>
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
                        <button className="flex items-center group-hover:hidden">
                            <span className="inline-block align-center">
                                <PhoneIcon/>
                            </span>
                            <p className="ml-2 font-medium text-base">Get In Touch</p> 
                        </button>
                        {/* Get In Touch On Hover */}
                        <div className="hidden flex-col bg-[#FDFDFD] group-hover:flex shadow-bs-3 p-4 absolute w-[240px] z-10 top-4 right-10  rounded-lg">
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
                    <li>
                        <button className='flex cursor-pointer  items-center justify-center'>
                            <span className="inline-block align-center">
                            <UserIcon/>
                            </span>
                            <p className="ml-2 font-medium text-base">Login</p> 
                        </button>
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