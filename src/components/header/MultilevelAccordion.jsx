import Link from "next/link";
import React from "react";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const MultilevelAccordion = ({menu}) => {
    return (
       <>
            {
                menu.map((list,idx)=>{

                    return <React.Fragment  key={idx}>
                        {
                            list.subMenu?
                            <Accordion transition={{duration: "300ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)"}}>
                                <AccordionItem>
                                {({open}) => (
                                    <>
                                            <AccordionHeader className="w-full cursor-pointer flex justify-between items-center text-black border-b border-[#e5e7eb] p-4">
                                                <span className="font-bold text-base">{list.name}</span>
                                                <BiChevronDown className="text-slate-500 font-bold text-xl"/>
                                            </AccordionHeader>
                    
                                            <AccordionBody>
                                                <div className="w-full flex flex-col border-[#e5e7eb]">
                                                {
                                                    list.subMenu.map((subMenu,idx2)=>{
                                                       return <React.Fragment  key={idx2}>
                                                            {
                                                                subMenu.title==='More'?
                                                                <ul className="w-full flex flex-col gap-3 p-4 bg-[#f2f2f2] justify-between items-center text-black border-b border-[#e5e7eb]">
                                                                {
                                                                    subMenu.list.map((items,idx3)=>{
                                                                        return <li key={idx3} className="w-full pl-8 cursor-pointer hover:text-blue focus-visible:text-blue focus:text-blue justify-between items-center text-black border-b border-[#e5e7eb]">
                                                                                <Link href={items.url}>
                                                                                    <span className="font-bold text-base">{items.name}</span>
                                                                                </Link>
                                                                    </li>
                                                                    })
                                                                }
                                    
                                                                </ul>
                                                                :
                                                            <Accordion transition={{duration: "300ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)"}}>
                                                                <AccordionItem>
                                                                {({open}) => (
                                                                    <>
                                                                            <AccordionHeader className="w-full cursor-pointer pl-8 flex justify-between items-center text-black border-b border-[#e5e7eb] p-4">
                                                                                <span className="font-bold text-base">{subMenu.title}</span>
                                                                                <BiChevronDown className="text-slate-500 font-bold text-xl"/>
                                                                            </AccordionHeader>
                                                    
                                                                            <AccordionBody>
                                                                                <ul className="w-full flex flex-col gap-3 p-4 bg-[#f2f2f2] justify-between items-center text-black border-b border-[#e5e7eb]">
                                                                                {
                                                                                    subMenu.list.map((items,idx3)=>{
                                                                                        return <li key={idx3} className="w-full pl-8 cursor-pointer hover:text-blue focus-visible:text-blue focus:text-blue justify-between items-center text-black border-b border-[#e5e7eb]">
                                                                                                <Link href={items.url}>
                                                                                                    <span className="font-bold text-base">{items.name}</span>
                                                                                                </Link>
                                                                                    </li>
                                                                                    })
                                                                                }
                                                    
                                                                                </ul>
                                                                            </AccordionBody>
                                                                        </>
                                                                    )}
                                                                </AccordionItem>
                                                            </Accordion>
                                                            }
                                                        </React.Fragment>
                                                    })
                                                }
                    
                                                </div>
                                            </AccordionBody>
                                        </>
                                    )}
                                </AccordionItem>
                            </Accordion>
                            :
                            <div className="flex w-full justify-between items-center text-black border-b border-[#e5e7eb] p-4">
                                <Link href={list.url}>
                                    <span className="font-bold text-base">{list.name}</span>
                                </Link>
                            </div>

                        }

                    </React.Fragment>
                })
            }
       </>
            
    );
};

export default MultilevelAccordion;