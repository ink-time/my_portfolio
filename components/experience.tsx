"use client"
import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  details: string[];
  tags: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Web developer and Graphic designer",
    company: "3com",
    period: "2025",
    details: [
      "Web development with Wordpress (using Elementor, Bebuilder)", 
      "Graphic design related with web pages and marketing campaigns"
    ],
    tags: ["Wordpress", "Elementor", "Graphic Design", "Marketing"]
  },
  {
    title: "Crossplatform development Internship",
    company: "Mercanza",
    period: "2025",
    details: [
      "Mainly maintenance and migration tasks"
    ],
    tags: ["Maintenance", "Migration", "Web Development"]
  },
];

function getExperienceColor(tag: string): string {
    if (tag.includes("Wordpress") || tag.includes("Design")) {
        return "bg-pink-200 text-pink-900 dark:bg-pink-200 dark:text-pink-900"
    }
    if (tag.includes("Maintenance") || tag.includes("Migration")) {
        return "bg-blue-200 text-blue-900 dark:bg-blue-200 dark:text-blue-900"
    }
    return "bg-purple-200 text-purple-900 dark:bg-purple-200 dark:text-purple-900"
}

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
      <div className="max-w-4xl w-full space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Work Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceData.map((job, idx) => (
            <div
              key={idx}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 flex flex-col h-full"
            >
              <h3 className="text-lg font-bold text-foreground mb-1">
                {job.title}
              </h3>
              
              <div className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                <p className="font-semibold">{job.company}</p>
                <p>{job.period}</p>
              </div>

              <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 text-base mb-4 space-y-1">
                {job.details.map((detail, detailIdx) => (
                  <li key={detailIdx} className="text-sm">{detail}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {job.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className={`text-sm px-3 py-1.5 font-semibold rounded-full ${getExperienceColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
