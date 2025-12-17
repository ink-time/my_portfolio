"use client"

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
      <div className="max-w-3xl w-full space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">About</h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I'm Arturo Aguirre, a cross-platform application development student from Madrid with a passion for creating innovative
            digital experiences. My expertise spans multiple technologies, allowing me to approach problems from
            different angles and build robust solutions.
          </p>

          <p>
            With a strong foundation in both backend systems (Java, Oracle, MySQL) and frontend development (JavaScript,
            React, CSS3), I specialize in translating complex requirements into clean, maintainable code. I'm
            particularly interested in database engineering, game development, and building applications that users love.
          </p>

          <p>
            My recent projects showcase my ability to work across the full stack—from designing restaurant management
            systems and camping databases to building interactive games. I believe great software is the intersection of
            technical excellence and thoughtful design.
          </p>
        </div>
      </div>
    </section>
  )
}
