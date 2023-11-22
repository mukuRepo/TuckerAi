import type { AppProps } from 'next/app'
import "@/styles/globals.css"
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Fotter'
export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
  <Navbar/>
{/* @ts-ignore */}
  <Component {...pageProps} />
  <Footer />
  </>
  )
}
