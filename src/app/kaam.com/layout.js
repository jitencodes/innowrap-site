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
  title: 'IT Services - Trusted Digital Partner for Web/Mobile App Development',
  description: 'At Innowrap, we stay ahead of the curve by embracing all the latest technological advancements and incorporating them into our wide range of services including consulting, design, engineering, and emerging technology. Our expertise is always evolving to provide cutting-edge solutions for our clients.',
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
