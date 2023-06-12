import Link from 'next/link'
import React from 'react'

function CustomBtn({url,text,...rest}) {
    console.log(rest)
  return (
    <Link href={url} className={`whitespace-nowrap h-max rounded px-3 py-3 ${rest.bg?rest.bg:'bg-white'} ${rest.color?`text-[${rest.color}] border border-[${rest.color}]`:' text-black'} ${rest.shadow?'shadow-bs-1 hover:shadow-none':''}`}
        >
        {text}
    </Link>
  )
}

export default CustomBtn