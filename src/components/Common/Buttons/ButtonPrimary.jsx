import Link from 'next/link'
import React from 'react'

function ButtonPrimary(props) {
           const {text,url,shadowReverse} = props;
  return (
            <Link href={url} className={`whitespace-nowrap w-max h-max rounded px-3 py-3 bg-gradient-1 text-white ${shadowReverse?'shadow-bs-1 hover:shadow-none':'hover:shadow-bs-1'} focus:border border-black transition duration-100`}
                    >
                    {text}
            </Link>
  )
}

export default ButtonPrimary