import React from "react";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/Hero/HeroSection";
import NavBar from "@/components/NavBar/NavBar";
import Project from "@/components/Projects/Project";
import Skills from "@/components/Skills/Skills";
import BackToTop from "@/components/others/BackToTop";

export default function Home() {
  return (
    <main className="bg-c1 text-white relative">
      <NavBar />
      <BackToTop />
      <HeroSection />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />

      {/* Fixed "Under Construction" button */}
      <div className="z-10 fixed bottom-0 left-0 right-0 flex justify-center mb-4">
        <button className="bg-red-500 text-lg md:text-xl text-white px-4 py-2 rounded">
          Site Under Construction !!!
        </button>
      </div>
    </main>
  );
}
