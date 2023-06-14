'use client'
import React, { useState } from 'react'
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import { BiChevronDown, BiChevronUp, BiFilterAlt, BiSearch } from "react-icons/bi";
import Check from './Buttons/Check';
import Radio from './Buttons/Radio';

const filters = [
    {
        title:'Skills',
        items:['Developer','Graphic Designer','UI Developer','Illustrator','MERN Stack' ]
    },
    {
        title:'Roles',
        items:['Full Stack Developer','Social Media Manager','Seo Expert','Content Writer','Frontend Developer' ]
    },
    {
        title:'Location',
        items:['Delhi', 'Mumbai', 'Pune', 'Banglore', 'Noida', 'Hydrabad', ]
    },
    {
        title:'Job Type',
        items:['Permanent','Part Time','Contract','Remote' ]
    },
    {
        title:'Sort By',
        items:['Date','Relevancy' ]
    },
]
function Filters() {
    const [open, setOpen] = useState(true)
  return (
    <>
        <BiFilterAlt onClick={()=>{setOpen(!open)}} size={24} className='absolute right-0 z-10 -top-14 lg:hidden'/>
        <div className={`laptop:absolute lg:hidden ${open?'-right-full':'right-0'} transition-all duration-300 border h-max w-full max-w-[290px] bg-white py-6 px-5 rounded-[8px]`}>
        <p className="text-black font-bold text-lg pb-4">Filters</p>
        
        {
            filters.map((filter, idx)=>{
              return <Accordion key={idx} className='border-t border-[#e5e7eb]' transition={{duration: "300ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)"}}>
                        <AccordionItem  isActive={true}>
                            {({open}) => (
                                <>
                                    <AccordionHeader className="w-full flex justify-between items-center text-black py-4">
                                        <span className="font-bold text-base">{filter.title}</span>
                                        {open?
                                        <BiChevronUp className="text-slate-500 font-bold text-xl"/>
                                        :<BiChevronDown className="text-slate-500 font-bold text-xl"/>
                                        }
                                    </AccordionHeader>

                                    <AccordionBody>
                                        {
                                            filter.title=='Location'?
                                            <div className="relative mb-4"> 
                                                <input type="text" className="py-3 px-6 w-full font-medium text-sm rounded-[100px] z-0 focus:shadow focus:outline-none bg-[#F5F5F5]" placeholder="Search Location" />
                                                <div className="absolute top-1/2 right-1 -translate-y-1/2">
                                                    <button className="mr-4 h-full"><BiSearch/></button>
                                                </div>
                                            </div>
                                            :
                                            <></>
                                        }
                                        {
                                            filter.title=='Sort By'?
                                            <ul className='mb-4 grid gap-4'>
                                            {
                                                filter.items.map((item,idx2)=>{
                                                    return <Radio item={item} key={idx2}/>
                                                })
                                            }
                                            </ul>
                                            :
                                            <ul className='mb-4 grid gap-4'>
                                            {
                                                filter.items.map((item,idx2)=>{
                                                    return <Check key={idx2} item={item}/>
                                                })
                                            }
                                            </ul>
                                        }
                                        
                                        
                                    </AccordionBody>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>

            })
        }
        </div>
        <div className={`laptop:hidden border h-max w-full max-w-[290px] bg-white py-6 px-5 rounded-[8px]`}>
        <p className="text-black font-bold text-lg pb-4">Filters</p>
        
        {
            filters.map((filter, idx)=>{
              return <Accordion key={idx} className='border-t border-[#e5e7eb]' transition={{duration: "300ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)"}}>
                        <AccordionItem  isActive={true}>
                            {({open}) => (
                                <>
                                    <AccordionHeader className="w-full flex justify-between items-center text-black py-4">
                                        <span className="font-bold text-base">{filter.title}</span>
                                        {open?
                                        <BiChevronUp className="text-slate-500 font-bold text-xl"/>
                                        :<BiChevronDown className="text-slate-500 font-bold text-xl"/>
                                        }
                                    </AccordionHeader>

                                    <AccordionBody>
                                        {
                                            filter.title=='Location'?
                                            <div className="relative mb-4"> 
                                                <input type="text" className="py-3 px-6 w-full font-medium text-sm rounded-[100px] z-0 focus:shadow focus:outline-none bg-[#F5F5F5]" placeholder="Search Location" />
                                                <div className="absolute top-1/2 right-1 -translate-y-1/2">
                                                    <button className="mr-4 h-full"><BiSearch/></button>
                                                </div>
                                            </div>
                                            :
                                            <></>
                                        }
                                        {
                                            filter.title=='Sort By'?
                                            <ul className='mb-4 grid gap-4'>
                                            {
                                                filter.items.map((item,idx2)=>{
                                                    return <Radio item={item} key={idx2}/>
                                                })
                                            }
                                            </ul>
                                            :
                                            <ul className='mb-4 grid gap-4'>
                                            {
                                                filter.items.map((item,idx2)=>{
                                                    return <Check key={idx2} item={item}/>
                                                })
                                            }
                                            </ul>
                                        }
                                        
                                        
                                    </AccordionBody>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>

            })
        }
        </div>
    </>
  )
}

export default Filters