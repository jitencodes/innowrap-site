import Hiring from '@/components/Hiring'
import Packages from '@/components/Hiring/Packages'
import HiringBanner from '@/components/Hiring/HiringBanner'
import HiringProcess from '@/components/Hiring/HiringProcess'
import Services from '@/components/Hiring/Services'
import Testimonials from '@/components/Hiring/Testimonials'
import { Footer } from '@/components/Footer/Footer'
import Header from '@/components/header/Header'
import StickyTopBar from '@/components/header/StickyTopBar'
import Consultants from '@/components/Hiring/Consultant'

export default function Home() {
  return (
    <main className="">
      {/* <StickyTopBar/>
      <Header/>  */}
      <Hiring />
      <Consultants/>
      <Packages/>
      <Services/>
      <HiringBanner/>
      <HiringProcess/>
      <Testimonials/>
      {/* <Footer/> */}
    </main>
  )
}
