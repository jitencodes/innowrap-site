import React from "react";
import { BiMenuAltRight, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { VscChromeClose, VscMenu } from "react-icons/vsc";
import MultilevelAccordion from "./MultilevelAccordion";
import { navlinks } from '@/app/data';

export default function SidebarMenuMobile({mobileMenu, setMobileMenu}) {
  const getData = (e)=>{
    const data = e;
    if(data){
      return data
    }
    return notFound()
  }
  const menu = getData(navlinks)

  

  return (
    <>
      <div
        className={`flex flex-col top-0  pt-10 right-0 fixed h-screen w-72 z-50 shadow-bs-3 bg-white transition-all duration-200 ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {mobileMenu ? (
          <VscChromeClose
          className="text-[16px] right-3 top-3 absolute"
          onClick={() => setMobileMenu(false)}
        />
        ) : ('')}
        <MultilevelAccordion menu={menu} />
        
      </div>

      {/* Mobile icon start */}
      <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
        {!mobileMenu ? (
          <VscMenu
          className="text-[24px]"
          onClick={() => setMobileMenu(true)}
        />
        ) : ('')}
      </div>
      {/* Mobile icon end */}
    </>
  );
}
