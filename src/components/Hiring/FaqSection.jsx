import React from 'react'
import Faqs from '../Common/FAQs/Faqs'

const FaqSection = () => {
  return (
    <section className="flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col items-center pb-10 pd:pb-20 lg:pb-32">
            <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase text-center">FAQS</p>
            <p className="text-black font-semibold text-2xl md:text-[40px] text-center mb-14 md:mb-20">Frequently asked Questions</p>
            <Faqs />
    </section>
  )
}

export default FaqSection