"use client"

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
      <div className="max-w-2xl w-full space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>

        <p className="text-lg text-muted-foreground leading-relaxed">
          I'm always interested in connecting with fellow developers, discussing interesting projects, or exploring
          opportunities. Feel free to reach out!
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-all">
            <span className="text-2xl">→</span>
            <a
              href="https://github.com/ink-time"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              github.com/ink-time
            </a>
          </div>

          <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-all">
            <span className="text-2xl">✉</span>
            <a href="mailto:a.aguirreponzano@gmail.es" className="text-foreground hover:text-primary transition-colors">
              a.aguirreponzano@gmail.es
            </a>
          </div>

          <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-all">
            <span className="text-2xl">📄</span>
            <a
              href="https://blobs.vusercontent.net/blob/Spanish%20CV_Arturo-3nbtWGbiK39KMPRXmJnfGmkExmLs0v.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">Built with Next.js, React, and Tailwind CSS</p>
        </div>
      </div>
    </section>
  )
}
