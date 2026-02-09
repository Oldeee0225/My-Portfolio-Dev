import Navbar from "../layout/NavBar"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Skills from "../components/sections/Skills"
import Projects from "../components/sections/Projects"
import Experience from "../components/sections/Experience"
import TechNest from "../components/sections/TechNestCompanySection"
import CTA from "../components/sections/CTA"
import Footer from "../components/sections/Footer"

export default function Home() {
  return (
    <>
      <Navbar/>
      
      <main className="relative">
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <TechNest/>
        <CTA/>
        <Footer/>
      </main>
    </>
  );
}