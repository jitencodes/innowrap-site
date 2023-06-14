import React, { useState } from 'react'

function Check({item}) {
    const [selected, setSetselected] = useState(false)
  return (
    <li onClick={()=>{setSetselected(!selected)}} className={`font-medium cursor-pointer text-black text-sm flex items-center`}><span className={`flex w-4 h-4 border mr-4 text-[8px] font-bold justify-center transition-all duration-300 items-center ${selected?'border-white bg-[#225df7]  text-white':'text-white border-black'}`}>&#10003;</span>{item}</li>
  )
}

export default Check