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
        className={`flex flex-col top-0  pt-10 right-0 fixed h-screen w-screen max-w-[450px] z-50 shadow-bs-3 bg-white transition-all duration-200 ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="block">
            {mobileMenu ? (
              <VscChromeClose
              className="text-[16px] right-3 top-3 absolute"
              onClick={() => setMobileMenu(false)}
            />
            ) : ('')}
            <MultilevelAccordion menu={menu} />
        </div>
        
      </div>
    </>
  );
}
