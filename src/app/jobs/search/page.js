'use client'
import { jobsSerachBanner } from "@/app/data";
import JobsForm from "@/components/Common/Forms/JobsForm";
import HeroBanner2 from "@/components/Common/Banners/HeroBanner2";
import JobCard from "@/components/Common/Cards/JobCard";
import Filters from "@/components/Common/Filters";
import CustomBtn from "@/components/Common/Buttons/CustomBtn";
import Pagination from "@/components/Common/Pagination";
import JobsList from "@/components/Jobs/JobsList";

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
      <section className="pb-10 md:pb-12 ">
        <HeroBanner2 form={JobsForm} data={hero1}/> 
      </section>
      <section className="flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col  bg-[#F1F4FB] py-10 md:py-20 ">
          <h2 className="text-black text-xl md:text-4xl font-bold mb-8">9248 jobs found for you</h2>
          <JobsList/>            
        </section>
    </>
  )
}

export default page