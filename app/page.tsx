import { Vazirmatn } from "next/font/google";

const vazir = Vazirmatn({
  subsets: ["arabic"],
});

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import SearchBanner from "@/components/home/SearchBanner";
import Specialties from "@/components/home/Specialties";
import TopDoctors from "@/components/home/TopDoctors";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import BlogSection from "@/components/home/BlogSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Features />
      <SearchBanner />
      <Specialties />
      <TopDoctors />
      <Testimonials />
      <FAQ />
      <BlogSection />

      <Footer />
    </>
  );
}