'use client'
import Dropzone from 'react-dropzone';
import Image from 'next/image';
import React, { useState } from 'react';
import Resume from '@/../public/svg icons/resumeIcon.svg'

const ResumeUploadForm = () => {
  const [resume, setResume] = useState(null)
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: 'Johnlorem@gmail.com',
    mobileNumber: '9876544321',
    zipCode: '',
    specialization: '', 
  });
  const handleResumeUpload = (acceptedFiles) =>{
    const file = acceptedFiles[0];
    setResume(file)
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formValues);
  };

  return (

    <>{!resume?

      <Dropzone onDrop={handleResumeUpload} accept=".pdf" multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            
              <div className="flex items-center flex-col">
                <h1 className="text-blue font-semibold text-4xl text-center mb-2">Upload your resume</h1>
                <p className="text-black font-medium text-lg text-center mb-20">and we will reach out with the best suited jobs for you</p>
                <div className="flex mb-8"><Resume /></div>
                <p className="text-black font-medium text-[22px]  mb-[88px]">Drag and Drop or Upload your resume</p>
                <button className='py-2 px-3 cursor-pointer text-white bg-gradient-1 rounded-[4px] w-fit shadow-bs-1 hover:shadow-none'>Upload Resume</button>
              </div>
          </div>
        )}
      
      </Dropzone>
      
      :

      <form className="mx-auto w-full" onSubmit={handleSubmit}>
        <div className="flex py-5 px-8 border border-dashed border-[#6C98FF] bg-[#f1f4fb] rounded-md justify-between w-full items-center mb-7">
            <div className="flex">
              <Image
                    src="/svg icons/green-tick.svg"
                    className='dr'
                    width={33}
                    height={33}
                    quality={100}
                    alt='background image with polcadots'
                    draggable={false}
                />
                <p className="text-black font-semibold text-2xl ml-3 text-left max-w-xs whitespace-nowrap truncate">
                  {resume.name}
                </p>
            </div>
              <button onClick={()=>{setResume(false)}} className='py-2 px-3 cursor-pointer text-white bg-gradient-1 rounded-[4px] w-fit shadow-bs-1 hover:shadow-none'>Replace</button>
            </div>
        <div className="mb-6 w-full flex items-center">
          <label
            htmlFor="firstName"
            className={`text-sm ${
              formValues.firstName ? 'text-[#4D4D4D] bg-label -translate-y-5 scale-75 mx-1' : 'font-light text-base '
            } transition-all duration-300 absolute pointer-events-none mx-3`}
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="input-field w-full border px-3 py-2 rounded-md border-[#CFCFCF] bg-white outline-none"
            value={formValues.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 w-full flex items-center">
          <label
            htmlFor="lastName"
            className={`text-sm ${
              formValues.lastName ? 'text-[#4D4D4D] bg-label -translate-y-5 scale-75 mx-1' : 'font-light text-base '
            } transition-all duration-300 absolute pointer-events-none mx-3`}
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="input-field w-full border px-3 py-2 rounded-md border-[#CFCFCF] bg-white outline-none"
            value={formValues.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 w-full flex items-center">
          <label
            htmlFor="email"
            className={`text-sm ${
              formValues.email ? 'text-[#4D4D4D] bg-label -translate-y-5 scale-75 mx-1' : 'font-light text-base '
            } transition-all duration-300 absolute pointer-events-none mx-3`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"className="input-field w-full border px-3 py-2 rounded-md border-[#CFCFCF] bg-white outline-none"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 w-full flex items-center relative">
          <label
            htmlFor="mobileNumber"
            className={`text-sm ${
              formValues.mobileNumber ? 'text-[#4D4D4D] bg-label -translate-y-5 scale-75 mx-1' : 'font-light text-base '
            } transition-all duration-300 absolute pointer-events-none mx-3`}
          >
            Mobile Number
          </label>
          
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            className="input-field w-full border px-3 py-2 rounded-md border-[#CFCFCF] bg-white outline-none pl-14"
            value={formValues.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 w-full flex items-center">
          <label
            htmlFor="zipCode"
            className={`text-sm ${
              formValues.zipCode ? 'text-[#4D4D4D] bg-label -translate-y-5 scale-75 mx-1' : 'font-light text-base '
            } transition-all duration-300 absolute pointer-events-none mx-3`}
          >
            Zip Code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            className="input-field w-full border px-3 py-2 rounded-md border-[#CFCFCF] bg-white outline-none"
            value={formValues.zipCode}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 w-full flex items-center">
          <label
            htmlFor="specialization"
            className={`text-sm ${
              formValues.specialization ? 'text-[#4D4D4D] bg-label -translate-y-5 scale-75 mx-1' : 'font-light text-base '
            } transition-all duration-300 absolute pointer-events-none mx-3`}
          >
            Specialization
          </label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            className="input-field w-full border px-3 py-2 rounded-md border-[#CFCFCF] bg-white outline-none"
            value={formValues.specialization}
            onChange={handleChange}
          />
        </div>
        <p className="text-sm text-gray-500 mb-6 text-left">
          By submitting this form, you are agreeing to our Terms of Use and to
          receive text alerts. Message and data rates may apply.
        </p>
        <button className='py-2 px-3 cursor-pointer text-white bg-gradient-1 rounded-[4px] w-fit shadow-bs-1 hover:shadow-none self-end'>Submit</button>

      </form>
      }
      </>
  );
};

export default ResumeUploadForm;
