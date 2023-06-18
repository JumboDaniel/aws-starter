import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/landing/hero/hero";
import Features from "@/components/landing/features";
import { Pricing } from "@/components/landing/pricing";
import Head from "next/head";
import Faq from "@/components/landing/faq";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={` ${inter.className}`}>
        <Head>
          <title>Caladium| Demo</title>
        </Head>
        <Hero />
        <Features />
        <Pricing />
        <Faq/>
        <Footer/>
      </main>
    </>
  );
}
