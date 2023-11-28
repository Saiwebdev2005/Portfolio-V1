import About from "@/components/About/About"
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/Footer/Footer"
import HeroSection from "@/components/Hero/HeroSection"
import NavBar from "@/components/NavBar/NavBar"
import Project from "@/components/Projects/Project"
import Skills from "@/components/Skills/Skills"
import BackToTop from "@/components/others/BackToTop"
//use Client
// color : A337B5
export default function Home() {
  return (
    <main className="bg-c1 text-white">
      <NavBar/>
      <BackToTop/>
      <HeroSection/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </main>
  )
}
