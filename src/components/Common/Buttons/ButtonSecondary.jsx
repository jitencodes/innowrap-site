import Link from 'next/link'
import React from 'react'

function ButtonSecondary({text,url}) {
  return (
        <Link href={url} className='whitespace-nowrap md:text-sm xl:text-base h-max rounded px-3 py-3 bg-white text-black hover:shadow-bs-1 focus: border border-black hover:text-white focus:text-white hover:border-white focus:border-white hover:bg-black focus:bg-black transition duration-100'
            >
            {text}
        </Link>
  )
}

export default ButtonSecondary