'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Cursor from '@/components/Cursor'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>© 2025 Brajendra Kumar. Crafted with precision.</p>
        <p>Available for opportunities — Noida, India</p>
      </footer>
    </>
  )
}
