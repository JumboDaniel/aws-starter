import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/landing/hero/hero'
import Features from '@/components/landing/features'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` ${inter.className}`}
    >

    <Hero/>
    <Features/>
    </main>
  )
}
