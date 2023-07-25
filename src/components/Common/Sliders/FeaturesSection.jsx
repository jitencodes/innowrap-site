'use client'
import { useState } from 'react';
import SwipeableButtonList from './SwipableButtonList';

const FeaturesSection = ({buttons}) => {
    return (
    <>
            <SwipeableButtonList buttons={buttons}/>
            <div className="flex w-full flex-wrap gap-2 md:gap-5 justify-center mt-7">
                <p className='text-black text-base lg:text-xl text-center'>App user-friendly job search feature allows job seekers to search for jobs based on their interests, skills and previous work experience. The search feature has filters for location, job role, experience level, salary and job type. Job seekers can search for jobs based on distance, category, and even view job postings on a map. Additionally, users can save relevant job postings and follow companies they are interested in to stay up-to-date on new job opportunities.</p>
            </div>
    </>
  )
}

export default FeaturesSection