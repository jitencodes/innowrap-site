import React from "react";
import { BiMenuAltRight, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { VscChromeClose, VscMenu } from "react-icons/vsc";
import MultilevelAccordion from "./MultilevelAccordion";
// import MultilevelAccordion from "./MultilevelAccordion";

export default function SidebarMenuMobile({mobileMenu, setMobileMenu}) {
  const data=
    [
    {
      id: 1,
      title: "Home",
      subMenuItems: [],
    },
    {
      id: 2,
      title: "Channels",
      subMenuItems: [
        { id: 3, title: "Channel 1" },
        { id: 4, title: "Channel 2" },
        { id: 5, title: "Channel 3" },
      ],
    },
    {
      id: 6,
      title: "Services",
      subMenuItems: [
        {
          id: 7,
          title: "Mobile Development",
          subMenuItems: [
            { id: 8, title: "Android" },
            { id: 9, title: "iOS" },
          ],
        },
        {
          id: 10,
          title: "Web Development",
          subMenuItems: [
            { id: 11, title: "WordPress" },
            { id: 12, title: "Shopify" },
            { id: 13, title: "No-Code" },
            { id: 14, title: "Custom" },
          ],
        },
      ],
    },
    {
      id: 15,
      title: "About Us",
      subMenuItems: [],
    },
    {
      id: 16,
      title: "Contact Us",
      subMenuItems: [],
    },
  ];

  

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
        <MultilevelAccordion menu={data} />
        
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
