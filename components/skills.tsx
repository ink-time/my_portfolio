"use client"

interface SkillCategory {
  category: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Responsive Design", "UI/UX"],
  },
  {
    category: "Backend",
    skills: ["Java", "SQL", "Database Design", "System Architecture"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "Oracle", "SQL Optimization"],
  },
  {
    category: "Game Development",
    skills: ["Game Mechanics", "Interactive Design", "Performance"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Linux", "Eclipse", "VS Code", "IntelliJ IDEA"],
  },
]

function getSkillColor(skill: string, category: string): string {
  if (category === "Soft Skills" || skill.includes("Eclipse") || skill.includes("VS") || skill.includes("IDEA")) {
    return "bg-pink-200 text-pink-900 dark:bg-pink-200 dark:text-pink-900"
  }
  if (category === "Databases" || skill.includes("Database") || skill.includes("SQL")) {
    return "bg-pink-200 text-pink-900 dark:bg-pink-200 dark:text-pink-900"
  }
  if (category === "Game Development") {
    return "bg-purple-200 text-purple-900 dark:bg-purple-200 dark:text-purple-900"
  }
  if (category === "Frontend" || skill.includes("React") || skill.includes("Design")) {
    return "bg-blue-200 text-blue-900 dark:bg-blue-200 dark:text-blue-900"
  }
  return "bg-purple-200 text-purple-900 dark:bg-purple-200 dark:text-purple-900"
}

export default function Skills() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
      <div className="max-w-4xl w-full space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((skillGroup, idx) => (
            <div
              key={idx}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className={`text-sm px-3 py-1.5 font-semibold rounded-full ${getSkillColor(skill, skillGroup.category)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
