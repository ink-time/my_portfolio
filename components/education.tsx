"use client"

interface EducationalTrajectory {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string[];
}

const educationData: EducationalTrajectory[] = [
  {
    degree: "Certificate of higher education in Cross-platform app Development",
    institution: "Prometeo by ThePower",
    location: "Madrid",
    period: "2024 - Present",
    details: ["Languages: Java, HTML5, CSS, JavaScript", 
              "Databases: mySQL & PL/SQL, PostgreSQL, DBeaver, XAMPP", 
              "Frameworks: React, Spring Boot"],
  },
  {
    degree: "Master's degree in Concept Art",
    institution: "Voxel School",
    location: "Madrid",
    period: "2022 - 2023",
    details: ["Mainly focused on Character, Environment, Creature & Prop design", 
              "3D Modeling and Texturing studied tangentially"],
  },
  {
    degree: "Master's degree in Illustration",
    institution: "Lightbox Academy",
    location: "Madrid",
    period: "2021 - 2022",
    details: ["Focused on illustration principles, mainly character focused illustrations"],
  },
  {
    degree: "Science Branch High School degree",
    institution: "IES Miguel de Cervantes",
    location: "Madrid, Daganzo de Arriba", 
    period: "2018 - 2020",
    details: ["High school degree specialized in sciences"],
  },
]

function getEducationColor(degree: string, details: string[]): string {
  if (degree.includes("Cross-platform")) {
    return "bg-pink-200 text-pink-900 dark:bg-pink-900 dark:text-pink-200"
  }
  if (degree.includes("Concept Art")) {
    return "bg-pink-200 text-pink-900 dark:bg-pink-900 dark:text-pink-200"
  }
  if (degree.includes("Illustration")) {
    return "bg-purple-200 text-purple-900 dark:bg-purple-900 dark:text-purple-200"
  }
  if (degree.includes("Science")) {
    return "bg-blue-200 text-blue-900 dark:bg-blue-900 dark:text-blue-200"
  }
  return "bg-purple-200 text-purple-900 dark:bg-purple-900 dark:text-purple-200"
}

export default function Education() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
      <div className="max-w-4xl w-full space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education Trajectory</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((educationGroup, idx) => (
           
            <div
              key={idx}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 flex flex-col h-full"
            >
              <h3 className="text-lg font-bold text-foreground mb-1">
                {educationGroup.degree}
              </h3>
              
              
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                <p className="font-semibold">{educationGroup.institution}</p>
                <p>{educationGroup.period} | {educationGroup.location}</p>
              </div>

              
              <div className="flex flex-wrap gap-2 mt-auto">
                {educationGroup.details.map((detail, detailIdx) => (
                  <span
                    key={detailIdx}
                    // FIXED: Correctly calling getEducationColor with the whole educationGroup
                    className={`text-sm px-3 py-1.5 font-semibold rounded-md ${getEducationColor(educationGroup.degree, educationGroup.details)}`}
                  >
                    {detail}
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
