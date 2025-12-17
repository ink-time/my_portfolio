"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import SoftSkills from "@/components/soft-skills"
import Education from "@/components/education"
import Experience from "@/components/experience"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }, // Trigger when 30% of section is visible
    )

    // Observe all section elements
    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="flex-1">
        <Hero />

        <div id="about" data-section className="scroll-mt-20">
          <About />
        </div>

        <div id="projects" data-section className="scroll-mt-20">
          <Projects />
        </div>

        <div id="skills" data-section className="scroll-mt-20">
          <Skills />
        </div>

        <div id="soft-skills" data-section className="scroll-mt-20">
          <SoftSkills />
        </div>

        <div id="education" data-section className="scroll-mt-20">
          <Education />
        </div>

        <div id="experience" data-section className="scroll-mt-20">
          <Experience />
        </div>

        <div id="contact" data-section className="scroll-mt-20">
          <Contact />
        </div>
      </main>
    </div>
  )
}
