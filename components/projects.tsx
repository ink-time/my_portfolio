"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Project {
  title: string
  description: string
  technologies: string[]
  link: string
  type: string
  detailedDescription: string
  keyFeatures: string[]
  technicalHighlights: string[]
  codeSnippet?: string
  category: "programming" | "illustration"
  images?: string[] // Changed to array to support multiple images
}

const projects: Project[] = [
  {
    title: "Space Game",
    description:
      "A personal project exploring simple game development with Java. A fun recreation of the classic Space Invaders game using basic Java libraries and custom-drawn sprites.",
    technologies: ["Java", "Game Development"],
    link: "https://github.com/ink-time/SpaceGame-Test",
    type: "Game",
    category: "programming",
    detailedDescription:
      "A complete recreation of the classic Space Invaders arcade game built from scratch in Java. This project showcases object-oriented programming principles, game loop implementation, and custom graphics rendering. All sprites and visual assets were hand-drawn, giving the game a unique artistic touch.",
    keyFeatures: [
      "Classic arcade gameplay with enemy waves",
      "Custom-drawn pixel art sprites and animations",
      "Collision detection and physics system",
      "Score tracking and game state management",
      "Smooth rendering with Java Graphics2D",
    ],
    technicalHighlights: [
      "Object-oriented design with entity inheritance",
      "Game loop with fixed timestep for consistent gameplay",
      "Event-driven input handling for responsive controls",
      "Custom sprite sheet management and animation system",
    ],
    codeSnippet: `// Game loop with entity management
public void update() {
    for (Entity entity : entities) {
        entity.update();
        checkCollisions(entity);
    }
    spawnEnemies();
    updateScore();
}`,
  },
  {
    title: "Restaurant App",
    description:
      "A collaborative app designed to help groups organize restaurant outings. Features bill splitting, restaurant discovery with filtering, user ratings, social recommendations, and achievement systems.",
    technologies: ["Java", "MySQL"],
    link: "https://github.com/ink-time/restaurant-app",
    type: "Web App",
    category: "programming",
    detailedDescription:
      "A comprehensive social dining application that transforms group dining experiences. The app combines practical features like bill splitting with social elements including user reviews, friend recommendations, and gamified achievements to make restaurant selection and dining more engaging.",
    keyFeatures: [
      "Smart bill splitting with customizable tip calculations",
      "Advanced restaurant filtering by cuisine, price, and location",
      "User rating and review system",
      "Social recommendations from friends",
      "Achievement system to encourage exploration",
      "Personalized dining history and favorites",
    ],
    technicalHighlights: [
      "MySQL database with normalized schema design",
      "RESTful API architecture for all operations",
      "User authentication and session management",
      "Complex SQL queries for recommendations algorithm",
      "Transaction handling for bill splitting accuracy",
    ],
    codeSnippet: `// Restaurant recommendation algorithm
SELECT r.*, AVG(rv.rating) as avg_rating
FROM restaurants r
JOIN reviews rv ON r.id = rv.restaurant_id
WHERE r.cuisine IN (user_preferences)
  AND rv.user_id IN (user_friends)
GROUP BY r.id
ORDER BY avg_rating DESC;`,
  },
  {
    title: "Camping Database",
    description:
      "A comprehensive camping facility database system designed in Oracle/SQL. Includes schema design, data loading, and complex queries for managing camping operations and reservations.",
    technologies: ["Oracle", "Database Design", "SQL"],
    link: "https://github.com/ink-time/Camping_Database",
    type: "Backend",
    category: "programming",
    detailedDescription:
      "A robust database system designed to manage all aspects of camping facility operations. The system handles reservations, facility management, customer data, and generates comprehensive reports for business intelligence. Built with Oracle SQL, it demonstrates advanced database design principles and complex query optimization.",
    keyFeatures: [
      "Complete camping site and facility management",
      "Reservation system with availability checking",
      "Customer relationship management",
      "Amenity and service tracking per site",
      "Revenue reporting and analytics",
      "Seasonal pricing and booking rules",
    ],
    technicalHighlights: [
      "Normalized database schema (3NF) with 10+ tables",
      "Complex JOIN queries for reservation conflicts",
      "Stored procedures for business logic",
      "Triggers for data integrity and auditing",
      "Views for common reporting queries",
      "Indexing strategy for query optimization",
    ],
    codeSnippet: `-- Check site availability with conflicts
SELECT s.site_id, s.site_name
FROM camping_sites s
WHERE NOT EXISTS (
    SELECT 1 FROM reservations r
    WHERE r.site_id = s.site_id
    AND r.check_out > :check_in
    AND r.check_in < :check_out
);`,
  },
]

const illustrationProjects: Project[] = [
  {
    title: "Old West x Greek Gods Character Design",
    description:
      "Original character designs exploring a unique blend of Greek mythology and Old West aesthetics. Featuring Medusas, Perseus, and Poseidones reimagined as cowboys and outlaws.",
    technologies: ["Digital Art", "Character Design", "Concept Art", "Clip Studio Paint"],
    link: "https://www.artstation.com/inktime",
    type: "Illustration",
    category: "illustration",
    detailedDescription:
      "A Concept Art project combining two distinct aesthetics into cohesive character designs. This series reimagines three classic characters from Greek mythology—Medusa, Perseus, and Poseidon—through an Old West lens. Each god receives three unique design variations that blend mythological elements with cowboy attire, weapons, and accessories. The storytelling aspect is particularly strong in the Medusa designs, where the snake motifs integrate naturally with Western fashion elements.",
    keyFeatures: [
      "9 unique character designs across 3 mythological figures",
      "Cohesive blend of Greek mythology and Western aesthetics",
      "Detailed costume, weapon, and accessory concepts",
      "Strong narrative storytelling through visual design",
      "Grayscale rendering showcasing form and value control",
    ],
    technicalHighlights: [
      "Strong understanding of character silhouette design",
      "Effective visual storytelling through costume and props",
      "Clean line work and confident rendering technique",
      "Consistent style across multiple character variations",
      "Creative interpretation of mythological iconography",
    ],
    images: ["/mith_oldWest_concept_all.jpg", "/mith_oldWest_render_3.jpg"], // Combined into array
  },
  {
    title: "Victorian Style Bard Redesign (from League of Legends)",
    description: "Character redesign of Bard, adapting it to a Victorian style.",
    technologies: ["Digital Art", "Character Design", "Concept Art", "Clip Studio Paint"],
    link: "https://www.artstation.com/inktime",
    type: "Illustration",
    category: "illustration",
    detailedDescription:
      "Character redesign of Bard from League of Legends, adapting it to a Victorian style, featuring 10 different character and costume designs that represent in different ways the Victorian aesthetic. After making the designs I decided to explore some of my favourites by sketching them in movement to test their functionality and appeal in dynamic poses.",
    keyFeatures: [
      "10 unique Victorian-inspired costume variations",
      "Exploration of period-appropriate accessories and details",
      "Dynamic movement sketches for functional design testing",
      "Cohesive adaptation of fantasy character to historical aesthetic",
      "Balance between Victorian elegance and character's mystical nature",
    ],
    technicalHighlights: [
      "Strong understanding of character silhouette design",
      "Effective visual storytelling through costume and props",
      "Period-accurate fashion research and adaptation",
      "Consistent style across multiple character variations",
      "Dynamic pose work demonstrating design functionality",
    ],
    images: ["/bard_redesign_1.jpg", "/bard_redesign_2.jpg"], 
  },
    {
    title: "Environment Concepts",
    description: "Atmospheric environment and scene illustrations for a final project.",
    technologies: ["Concept Art", "Digital Painting", "Environment Design"],
    link: "https://www.artstation.com/inktime",
    type: "Concept Art",
    category: "illustration",
    detailedDescription:
      "Environmental concept arts showcasing two very different worlds, in the first one I wanted to depict the contrast between a natural environment and a couple creatures living in it, and that same type of environment being exploited for its resources. In the second one I explore sea environment playing with different layer modes and creating different sea animals or creatures to transmit the rich sea environments that I've been able to witness throughout my life.",
    keyFeatures: [
      "Contrasting natural and industrialized environments",
      "Atmospheric lighting and mood creation",
      "Rich underwater scene with diverse marine life",
      "Effective use of layer modes and color theory",
      "Strong environmental storytelling",
    ],
    technicalHighlights: [
      "Strong composition and visual hierarchy",
      "Understanding of perspective and spatial depth",
      "Color and lighting for mood creation",
      "Ability to convey scale and atmosphere",
      "Layer blending techniques for atmospheric effects",
    ],
    images: ["/environment_1.jpg", "/environment_2.jpg"],
  },
]

function getTechColor(tech: string): string {
  // Database-related gets pink
  if (tech.includes("MySQL") || tech.includes("Oracle") || tech.includes("Database") || tech.includes("SQL")) {
    return "bg-pink-200 text-pink-900 dark:bg-pink-900 dark:text-pink-200"
  }
  // Game Development gets purple
  if (tech.includes("Game")) {
    return "bg-purple-200 text-purple-900 dark:bg-purple-200 dark:text-purple-900"
  }
  // Frontend/React gets blue
  if (tech.includes("React") || tech.includes("CSS")) {
    return "bg-blue-200 text-blue-900 dark:bg-blue-900 dark:text-blue-200"
  }
  // Backend/Java defaults to purple
  return "bg-purple-200 text-purple-900 dark:bg-purple-200 dark:text-purple-900"
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeCategory, setActiveCategory] = useState<"programming" | "illustration">("programming")

  const displayedProjects = activeCategory === "programming" ? projects : illustrationProjects

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
      <div className="max-w-4xl w-full space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setActiveCategory("programming")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === "programming"
                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                : "bg-card border border-border text-foreground hover:border-primary hover:shadow-md"
            }`}
          >
            Programming Projects
          </button>
          <button
            onClick={() => setActiveCategory("illustration")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === "illustration"
                ? "bg-accent text-accent-foreground shadow-lg scale-105"
                : "bg-card border border-border text-foreground hover:border-accent hover:shadow-md"
            }`}
          >
            Illustration & Concept Art
          </button>
        </div>

        <div className="space-y-6">
          {displayedProjects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="group w-full text-left p-6 md:p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={`text-xs font-semibold px-2.5 py-1.5 rounded ${getTechColor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center pt-8">
          <a
            href={
              activeCategory === "programming" ? "https://github.com/ink-time" : "https://www.artstation.com/inktime"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            {activeCategory === "programming" ? "View All on GitHub" : "View All on ArtStation"}
          </a>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground pr-8">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className={`text-xs font-semibold px-3 py-1.5 rounded ${getTechColor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Detailed Description */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.detailedDescription}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Highlights */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Technical Highlights</h4>
                  <ul className="space-y-2">
                    {selectedProject.technicalHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-2">▸</span>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Illustration Image Preview */}
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="space-y-4">
                    {selectedProject.images.map((img, idx) => (
                      <div key={idx} className="w-full rounded-lg overflow-hidden border border-border">
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`${selectedProject.title} - ${idx + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Code Snippet for programming projects only */}
                {selectedProject.codeSnippet && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Code Highlight</h4>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm text-foreground font-mono">{selectedProject.codeSnippet}</code>
                    </pre>
                  </div>
                )}

                <div className="pt-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
                  >
                    {selectedProject.category === "illustration" ? "View on ArtStation →" : "View on GitHub →"}
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
