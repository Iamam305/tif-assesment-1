import Image from "next/image";
import { Inter } from "next/font/google";

import MainLayout from "@/components/layout/main-layout";
import Hero from "@/components/home-page/hero";
import About from "@/components/home-page/about";
import LatestArticles from "@/components/home-page/latest-articles";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
     <Hero/>
     <About/>
     <LatestArticles/>
    </MainLayout>
  );
}
