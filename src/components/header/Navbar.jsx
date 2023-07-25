import React, { useRef, useState } from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
const subMenuHire = [
    {section:[
    [
        {id: 1, name: "Contract Developers", isHeading:true,}, 
        {id: 2, name: "Contract / Dedicated / Temp Developer",url: "/contract-developers/contract-dedicated-temp-developers"}, 
        {id: 3, name: "Offshore Managed Team",url: "/contract-developers/offshore-managed-team"}, 
        {id: 4, name: "Hourly Developers",url: "/contract-developers/hourly-developers"}, 
    ]]},
    {section:[
    [
        {id: 1, name: "Permanent Developers", isHeading:true,}, 
        {id: 2, name: "Full-Time Equivalent Developers",url: "/permanent-developers/full-time-equivalent-developers"}, 
        {id: 3, name: "Contract to Hire Developers",url: "/permanent-developers/contract-to-hire-developers"}, 
        {id: 4, name: "Executives",url: "/permanent-developers/executives"}, 
        {id: 5, name: "Payroll Outsourcing",url: "/permanent-developers/payroll-outsourcing"}, 
        {id: 6, name: "Recruiting Process Outsourcing",url: "/permanent-developers/recruiting-process-outsourcing"}, 
    ]]}
] 
const subMenuServices = [
    {section:[
    [
    {id: 1, name: "Front-End Developers", isHeading:true,url: "/jobs"}, 
    {id: 2, name: "HTML",url: "/jobs"}, 
    {id: 3, name: "Angular js",url: "/jobs"}, 
    {id: 4, name: "React js",url: "/jobs"}, 
    {id: 5, name: "Vue"}, 
    ],
    [
    {id: 1, name: "Back-End Developers", isHeading:true}, 
    {id: 2, name: "Nodejs"}, 
    {id: 3, name: "Python"}, 
    {id: 4, name: "Java"}, 
    {id: 5, name: ".Net"}, 
    {id: 6, name: "Ruby on Rails"}, 
    {id: 7, name: "C/C++, SharePoint"}, 
    ],
    [
    {id: 1, name: "Designers", isHeading:true}, 
    {id: 2, name: "Nodejs"}, 
    {id: 3, name: "Python"}, 
    {id: 4, name: "Java"}, 
    {id: 5, name: ".Net"}, 
    {id: 6, name: "Ruby on Rails"}, 
    ],
    [
    {id: 1, name: "App / PWA / Wearables / IOT Developers", isHeading:true}, 
    {id: 2, name: "Nodejs"}, 
    {id: 3, name: "Python"}, 
    ],]

    },
    {section:[
    [
    {id: 1, name: "App /PWA /Wearables /IOT Developers", isHeading:true}, 
    {id: 2, name: "Nodejs"}, 
    {id: 3, name: "Python"}, 
    ],
    [
    {id: 1, name: "Front-End Developers", isHeading:true}, 
    {id: 2, name: "HTML"}, 
    {id: 3, name: "Angular js"}, 
    {id: 4, name: "React js"}, 
    {id: 5, name: "Vue js"}, 
    ],
    [
    {id: 1, name: "Back-End Developers", isHeading:true}, 
    {id: 2, name: "Nodejs"}, 
    {id: 3, name: "Python"}, 
    {id: 4, name: "Java"}, 
    {id: 5, name: ".Net"}, 
    {id: 6, name: "Ruby on Rails"}, 
    {id: 7, name: "C/C++, SharePoint"}, 
    ],
    [
    {id: 1, name: "Designers", isHeading:true}, 
    {id: 2, name: "Nodejs"}, 
    {id: 3, name: "Python"}, 
    {id: 4, name: "Java"}, 
    {id: 5, name: ".Net"}, 
    {id: 6, name: "Ruby on Rails"}, 
    ],]

    },
    {section:[
    [
    {id: 1, name: "Front-End Developers", isHeading:true}, 
    {id: 2, name: "HTML"}, 
    {id: 3, name: "Angular js"}, 
    {id: 4, name: "React js"}, 
    {id: 5, name: "Vue js"}, 
    ],
    [
    {id: 1, name: "Back-End Developers", isHeading:true}, 
    {id: 2, name: "Nodejs"}, 
    {id: 3, name: "Python"}, 
    {id: 4, name: "Java"}, 
    {id: 5, name: ".Net"}, 
    {id: 6, name: "Ruby on Rails"}, 
    {id: 7, name: "C/C++, SharePoint"}, 
    ],
    [
    {id: 1, name: "Designers", isHeading:true}, 
    {id: 2, name: "Nodejs"}, 
    {id: 3, name: "Python"}, 
    {id: 4, name: "Java"}, 
    {id: 5, name: ".Net"}, 
    {id: 6, name: "Ruby on Rails"}, 
    ],
    [
    {id: 1, name: "App / PWA / Wearables / IOT Developers", isHeading:true}, 
    {id: 2, name: "Nodejs"}, 
    {id: 3, name: "Python"}, 
    ],]

    },
    {section:[
    [
    {id: 1, name: "App /PWA /Wearables /IOT Developers", isHeading:true}, 
    {id: 2, name: "Nodejs"}, 
    {id: 3, name: "Python"}, 
    ],
    [
    {id: 1, name: "Front-End Developers", isHeading:true}, 
    {id: 2, name: "HTML"}, 
    {id: 3, name: "Angular js"}, 
    {id: 4, name: "React js"}, 
    {id: 5, name: "Vue js"}, 
    ],
    [
    {id: 1, name: "Back-End Developers", isHeading:true}, 
    {id: 2, name: "Nodejs"}, 
    {id: 3, name: "Python"}, 
    {id: 4, name: "Java"}, 
    {id: 5, name: ".Net"}, 
    {id: 6, name: "Ruby on Rails"}, 
    {id: 7, name: "C/C++, SharePoint"}, 
    ],
    [
    {id: 1, name: "Designers", isHeading:true}, 
    {id: 2, name: "Nodejs"}, 
    {id: 3, name: "Python"}, 
    {id: 4, name: "Java"}, 
    {id: 5, name: ".Net"}, 
    {id: 6, name: "Ruby on Rails"}, 
    ],]

    },
    {section:[
    [
    {id: 1, name: "Front-End Developers", isHeading:true}, 
    {id: 2, name: "HTML"}, 
    {id: 3, name: "Angular js"}, 
    {id: 4, name: "React js"}, 
    {id: 5, name: "Vue js"}, 
    ],
    [
    {id: 1, name: "Back-End Developers", isHeading:true}, 
    {id: 2, name: "Nodejs"}, 
    {id: 3, name: "Python"}, 
    {id: 4, name: "Java"}, 
    {id: 5, name: ".Net"}, 
    {id: 6, name: "Ruby on Rails"}, 
    {id: 7, name: "C/C++, SharePoint"}, 
    ],
    [
    {id: 1, name: "Designers", isHeading:true}, 
    {id: 2, name: "Nodejs"}, 
    {id: 3, name: "Python"}, 
    {id: 4, name: "Java"}, 
    {id: 5, name: ".Net"}, 
    {id: 6, name: "Ruby on Rails"}, 
    ],
    [
    {id: 1, name: "App / PWA / Wearables / IOT Developers", isHeading:true}, 
    {id: 2, name: "Nodejs"}, 
    {id: 3, name: "Python"}, 
    ],]

    },
] 
const subMenuMore = [
    {   offset:'more',
        section:[
    [
        {id: 1, name: "About us",url: "/services"}, 
        {id: 2, name: "Success Stories",url: "/success-stories"}, 
        {id: 3, name: "Blogs",url: "/blogs"}, 
        {id: 4, name: "Pricing",url: "/pricing"}, 
        {id: 5, name: "Security & Data Privacy",url: "/security-&-data-privacy"},
    ]]
},
] 
const navlinks = [
  { id: 1, name: "Hire Developers", subMenu: subMenuHire },
  { id: 2, name: "IT Services", subMenu: subMenuServices},
  { id: 3, name: "Jobs", url: "/jobs" },
  { id: 4, name: "Make an Enquiry", url: '/enquiry' },
  { id: 5, name: "More", subMenu: subMenuMore },
];

function Navbar() {
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [catMenuData, setCatMenuData] = useState([]);    
    

  return (
    <nav>
        <ul className="laptop:hidden flex mt-4 gap-8">
                {
                    navlinks?.map((item,idx)=>{
                        return (
                            <React.Fragment key={idx}>
                                {
                                    !item.subMenu?(
                                        <Link href={`${item.url}`}>
                                        <li className='relative group flex pb-4 cursor-pointer  items-center justify-center'>
                                            <p className="font-medium text-sm xl:text-base">{item.name} </p>
                                            <div className="absolute rounded -bottom-[2px] left-0 w-full h-[2px] transform transition-transform duration-300 group-hover:bg-blue"></div>
                                        </li>
                                        </Link>
                                    ):
                                    (
                                        <li>
                                            <button onMouseEnter={()=>{setShowCatMenu(true), setCatMenuData(item.subMenu)}} 
                                                    onMouseLeave={()=>{setShowCatMenu(false)}}  
                                                    className='relative group flex pb-4 cursor-pointer  items-center justify-center'>
                                                    <p className="font-medium text-sm xl:text-base">{item.name} </p> 
                                                        <span className="inline-block align-center">
                                                        <BiChevronDown className="text-black font-medium text-xl"/>
                                                        </span>
                                                    <div className="absolute rounded -bottom-[2px] left-0 w-full h-[2px] transform transition-transform duration-300 group-hover:bg-blue"></div>
                                            </button>
                                        </li>
                                    )
                                }
                            </React.Fragment>
                        )
                    })
                }
            </ul>
            
            <div className={`${catMenuData[0]?.offset==='more'?`left-[475px] xl:left-[521px]`:'left-0'} absolute laptop:hidden ${showCatMenu?'grid':'hidden'} hover:grid z-10 top-full grid-cols-${catMenuData?.length} flex-wrap w-fit max-w-[calc(100vw_-_100px)] mx-6 md:mx-10 translate-y-[2px] bg-white rounded-lg shadow-bs-3 py-2 xl:py-3 2xl:py-6`}
                 style={{gridTemplateColumns:`repeat(${catMenuData?.length}, minmax(0,1fr))`}}
            >
                {catMenuData?.map((col, idx2)=>{
                    return <div key={idx2} className="flex flex-col border-r border-light-gray">
                        {
                            col.section.map((cell,idx3)=>{
                                return <div key={idx3} className={`flex flex-col ${idx3===0?"":"border-t"} py-2 xl:py-3 2xl:py-4 mx-4 xl:mx-6 2xl:mx-10 border-light-gray`}>
                                    {
                                        cell.map((li,idx4)=>{
                                            return <ul key={idx4} className="text-left">
                                            {
                                                li.isHeading?<li className="text-sm 2xl:text-base text-black font-semibold">{li.name}</li>
                                                :<Link href={li?.url?li?.url:'/'} className="text-sm 2xl:text-base block text-black hover:text-blue font-normal">{li.name}</Link>
                                            }

                                            </ul>
                                        })
                                    }
                                </div>
                            })
                        }
                    </div>
                //    return <ul key={idx2} className="px-4 md:px-6 lg:px-10 border-r border-light-gray text-left">
                //             {
                //                 ul.title?<li className="text-base text-black font-semibold">{ul.title}</li>:<></>
                //             }
                //             {
                //                 ul.list.map((li, idx3)=>{
                //                     return<Link key={idx3} href={li.url} className="text-base block text-black hover:text-blue font-normal">{li.name}</Link>
                //                 })
                //             }

                //     </ul>
                })}
            </div>
            
    </nav>
  )
}

export default Navbar