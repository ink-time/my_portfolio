"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20 bg-gradient-to-br from-background via-card to-background">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Profile Picture */}
          <div className="flex-shrink-0 w-full flex justify-center">
            <div className="relative w-48 h-64 md:w-56 md:h-72">
              <Image
                src="/profile.jpg"
                alt="Arturo Aguirre"
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
              />
              {/* Decorative accent border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-30 pointer-events-none"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-6 md:space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">Cross-Platform Developer</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Crafting elegant solutions with Java, JavaScript, and modern web technologies. Passionate about database
                engineering, game development, full-stack applications, and building scalable systems.
              </p>
            </div>

            <div className="flex gap-4 pt-4 justify-center">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                View Projects
              </a>
              <a
                href="https://github.com/ink-time"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                GitHub
              </a>
              <a
                href="https://blobs.vusercontent.net/blob/Spanish%20CV_Arturo-3nbtWGbiK39KMPRXmJnfGmkExmLs0v.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
