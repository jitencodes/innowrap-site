import { Footer } from '@/components/Footer/Footer'
import '@/app/globals.css'
import { Manrope } from 'next/font/google'
import Header from '@/components/header/Header'

const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-manrope",

})

export const metadata = {
  title: 'Unlocking remote International opportunities for Tech Talent',
  description: 'Enjoy Long-term remote opportunities with Top Global Brands and get paid as per international pay scale all at the comfort of your home',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
