import React from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";

const subMenuData = [
    {section:[
    [
    {id: 1, name: "Front-End Developers", isHeading:true,url: "/jobs"}, 
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
    {id: 1, name: "App /PWA /Wearables /IOT Developers", isHeading:true}, 
    {id: 2, name: "Nodejs"}, 
    {id: 3, name: "Python"}, 
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
const menuItems = [
    { id: 1, name: "IT Services", subMenu: subMenuData},
    { id: 2, name: "Hire Developers", subMenu: subMenuData },
    { id: 3, name: "Skills", subMenu: subMenuData },
    { id: 4, name: "Jobs", url: "/jobs" },
    { id: 4, name: "About Us", subMenu: subMenuData },
];

function Navbar() {

  return (
    <nav>
        <ul className="laptop:hidden flex mt-4 gap-8">
                {
                    menuItems?.map((item,idx)=>{
                        return (
                            <React.Fragment key={idx}>
                                {
                                    !item.subMenu?(
                                        <li className='relative group flex pb-4 cursor-pointer  items-center justify-center'>
                                            <p className="font-medium text-base">{item.name} </p>
                                            <div className="absolute rounded -bottom-[2px] left-0 w-full h-[2px] transform transition-transform duration-300 group-hover:bg-blue"></div>
                                        </li>
                                    ):
                                    (
                                        <li className='relative group flex pb-4 cursor-pointer  items-center justify-center'>
                                            <p className="font-medium text-base">{item.name} </p> 
                                                <span className="inline-block align-center">
                                                   <BiChevronDown className="text-black font-medium text-xl"/>
                                                </span>
                                            <div className="absolute rounded -bottom-[2px] left-0 w-full h-[2px] transform transition-transform duration-300 group-hover:bg-blue"></div>
                                        </li>
                                    )
                                }
                            </React.Fragment>
                        )
                    })
                }
            </ul>
    </nav>
  )
}

export default Navbar