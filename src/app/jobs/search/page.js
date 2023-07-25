'use client'
import { jobsSerachBanner } from "@/app/data";
import JobsForm from "@/components/Common/Forms/JobsForm";
import HeroBanner2 from "@/components/Common/Banners/HeroBanner2";
import JobCard from "@/components/Common/Cards/JobCard";
import Filters from "@/components/Common/Filters";
import CustomBtn from "@/components/Common/Buttons/CustomBtn";
import Pagination from "@/components/Common/Pagination";
import JobsList from "@/components/Jobs/JobsList";
import StickyTopBar from "@/components/header/StickyTopBar";

function page() {
  const getData = (e)=>{
    const data = e;
    if(data){
      return data
    }
    return notFound()
  }
  const hero1 = getData(jobsSerachBanner)

  return (
    <>
      <StickyTopBar/>
      <section aria-describedby='hero-section'>
        <div className="flex flex-col relative z-20 bg-white pt-16 md:pt-24 lg:pt-32 xl:pt-36">
          <HeroBanner2 form={JobsForm} data={hero1}/>
        </div>
      </section>
      <section className="flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col  bg-[#F1F4FB] py-10 md:py-20 ">
          <h2 className="text-black text-xl md:text-4xl font-bold mb-8">9248 jobs found for you</h2>
          <JobsList/>            
        </section>
    </>
  )
}

export default page