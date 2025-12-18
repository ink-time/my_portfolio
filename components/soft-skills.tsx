"use client"

export default function SoftSkills() {
  const softSkills = [
    "Attention to Detail",
    "Emotional Intelligence",
    "Problem Solving",
    "Adaptability",
    "Communication",
    "Collaboration",
  ]

  const getSkillColor = (skill: string) => {
    const mindsetSkills = ["Emotional Intelligence", "Adaptability", "Communication", "Collaboration"]
    const detailSkills = ["Attention to Detail"]
    const problemSkills = ["Problem Solving"]

    if (mindsetSkills.includes(skill)) {
      return "bg-purple-200 dark:bg-purple-200 text-purple-900 dark:text-purple-900"
    } else if (detailSkills.includes(skill)) {
      return "bg-blue-200 dark:bg-blue-200 text-blue-900 dark:text-blue-900"
    } else if (problemSkills.includes(skill)) {
      return "bg-pink-200 dark:bg-pink-200 text-pink-900 dark:text-pink-900"
    }
    return "bg-primary/20 dark:bg-primary/30 text-foreground"
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Soft Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {softSkills.map((skill) => (
            <div
              key={skill}
              className={`px-6 py-3 rounded-full font-semibold text-center border border-transparent hover:border-pink-900 transition-all duration-300 cursor-default ${getSkillColor(skill)}`}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
