import React, { useState } from 'react'
import Filters from '../Common/Filters'
import JobCard from '../Common/Cards/JobCard'
import { jobCardsData } from '@/app/data';
import Pagination from '../Common/Pagination';

function JobsList() {
    const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(100);
    
    const getData = (e)=>{
        const data = e;
        if(data){
          return data
        }
        return notFound()
      }
      const jobList = getData(jobCardsData)

  return (
    <>
        <div className="flex gap-10 relative overflow-x-clip">
            <Filters/>
            <div className="grid gap-7 w-full grid-cols-1 tablet:place-items-center">
              {
                jobList.map((job,idx)=>{

                  return <JobCard props={job} key={idx}/>
                })
              }
            </div>
          </div>
          <div className="flex w-full justify-end mt-7">
            <Pagination
                currentPage={currentPage}
                totalCount={totalCount}
                pageSize={pageSize}
                onPageChange={page => setCurrentPage(page)}
            />
          </div>
    </>
  )
}

export default JobsList