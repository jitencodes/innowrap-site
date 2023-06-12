import { Footer } from '@/components/Footer/Footer'
import './globals.css'
import { Manrope } from 'next/font/google'
import Header from '@/components/header/Header'
import StickyTopBar from '@/components/header/StickyTopBar'

const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-manrope",

})

export const metadata = {
  title: 'Hire Top Software Developers on contract within 24 hours',
  description: 'Innowrap is a leading IT company empowering businesses to scale their technical teams remotely with top-performing Indian talent.  We are not your traditional recruiters, we are a new age company with an AI driven tech platform that helps make hiring more effective, flexible and on-demand. We make it easy for global businesses to hire Top Tech talent remotely.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  )
}
