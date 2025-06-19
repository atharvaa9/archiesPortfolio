import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Leadership from "@/components/leadership"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  )
}
