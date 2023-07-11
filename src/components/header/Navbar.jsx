import React from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { navlinks } from "@/app/data";



function Navbar() {
    const getData = (e)=>{
        const data = e;
        if(data){
          return data
        }
        return notFound()
      }
      const navmenu = getData(navlinks)
    //   const subMenuData = getData(subMenu)

  return (
    <nav>
        <ul className="laptop:hidden flex mt-4 gap-8">
                {
                    navmenu?.map((item,idx)=>{
                        return (
                            <React.Fragment key={idx}>
                                {
                                    !item.subMenu?(
                                        <Link href={`${item.url}`}>
                                        <li className='relative group flex pb-4 cursor-pointer  items-center justify-center'>
                                            <p className="font-medium text-base">{item.name} </p>
                                            <div className="absolute rounded -bottom-[2px] left-0 w-full h-[2px] transform transition-transform duration-300 group-hover:bg-blue"></div>
                                        </li>
                                        </Link>
                                    ):
                                    (
                                        <li>
                                            <button className='relative group flex pb-4 cursor-pointer  items-center justify-center'>
                                            <p className="font-medium text-base">{item.name} </p> 
                                                <span className="inline-block align-center">
                                                   <BiChevronDown className="text-black font-medium text-xl"/>
                                                </span>
                                            <div className="absolute rounded -bottom-[2px] left-0 w-full h-[2px] transform transition-transform duration-300 group-hover:bg-blue"></div>
                                                
                                            <div className={`absolute z-10 top-full -translate-x-[${idx*100}px] left-0 hidden group-hover:flex flex-wrap w-max translate-y-[2px] bg-white rounded-lg shadow-bs-3 py-4 md:py-6 lg:py-10`}>
                                                {item.subMenu.map((ul, idx2)=>{
                                                    return <ul key={idx2} className="px-4 md:px-6 lg:px-10 border-r border-light-gray text-left">
                                                            {
                                                                ul.title?<li className="text-base text-black font-semibold">{ul.title}</li>:<></>
                                                            }
                                                            {
                                                                ul.list.map((li, idx3)=>{
                                                                    return<Link key={idx3} href={li.url} className="text-base block text-black hover:text-blue font-normal">{li.name}</Link>
                                                                })
                                                            }

                                                    </ul>
                                                })}
                                            </div>
                                            </button>
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