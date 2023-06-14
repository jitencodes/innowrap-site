import React from 'react'
import { GoLocation } from 'react-icons/go'
import { MdOutlinePayments } from 'react-icons/md'
import { SlBriefcase } from 'react-icons/sl'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import CustomBtn from '../Buttons/CustomBtn'

function JobCard({props}) {
    const {id,title,postedAt, location, salary, type} = props;
  return (
    <div className="border bg-white w-full sm:min-w-max rounded-2xl p-6 xl:p-10 2xl:p-12 hover:shadow-bs-1 transition-all duration-200">
                  <h3 className='font-bold text-lg'>{title}</h3>
                  <div className="flex gap-4 tab:flex-col tab:gap-2 tab:mt-4 text-[#838394] w-max">
                    <span className='flex'>
                      <GoLocation/> <span className='font-medium text-sm ml-2 inline-block'>{location}</span>
                    </span>
                    <span className='flex'>
                      <SlBriefcase/> <span className='font-medium text-sm ml-2 inline-block'>{type}</span>
                    </span>
                    <span className='flex'>
                      <MdOutlinePayments/> <span className='font-medium text-sm ml-2 inline-block'>{salary} per hour</span>
                    </span>
                  </div>
                  <div className="flex gap-4 tab:flex-wrap tab:gap-2 tab:mt-4">
                    <span className='text-blue bg-[#DFE7F7] py-1 px-5 rounded-2xl tab:w-max'>
                      Full Time
                    </span>
                    <span className='text-[#4D9F1B] bg-[#E5F2E7] py-1 px-5 rounded-2xl tab:w-max'>
                      Private
                    </span>
                    <span className='text-[#E08720] bg-[#FCF3E1] py-1 px-5 rounded-2xl tab:w-max'>
                      Urgent
                    </span>
                  </div>
                  <p className="mt-2 mb-7 text-black font-normal text-sm">
                  Posted {postedAt}
                  </p>
                  <div className="flex gap-5 flex-wrap">
                    <ButtonPrimary text={'Apply Now'} url={'/jobs/search'} shadowReverse={true}/>
                    <CustomBtn text={'See Job Decription'} url={`/jobs/${id}`} bg={'bg-white'} color={'#000'} shadow={true} />
                  </div>
              </div>
  )
}

export default JobCard