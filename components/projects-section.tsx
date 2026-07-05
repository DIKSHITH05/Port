"use client"

import { useState } from "react"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const TECHNOLOGIES = [
  "All Projects",
  "Python",
  "LangChain",
  "Machine Learning",
  "Data Engineering",
  "Flask",
  "AI/ML",
  "MongoDB",
  "Web Development", // Added web development tag for Equipment Tracker
]

export default function ProjectsSection() {
  const [selectedTech, setSelectedTech] = useState("All Projects")

  const projects = [
    {
      title: "Bid-Document-Extractor-AI-Powered-Intelligent-Document-Processing-System",
      description:
        "Built an AI system to automatically extract structured data from bid documents using LLMs and hybrid regex logic. Reduced manual parsing time by 85%.",
      tech: ["Python", "LangChain", "GPT-4o-mini", "PDF Parsing"],
      image: "/document-processing-ai-system.jpg",
      github: "https://github.com/DIKSHITH05/Bid-Document-Extractor-AI-Powered-Intelligent-Document-Processing-System",
      featured: true,
    },
    {
      title: "AI-Heart-Failure-Prediction-Model-Logistic-Regression",
      description:
        "Developed a machine learning model for heart failure prediction with strong preprocessing and evaluation pipelines, achieving high accuracy and ROC-AUC scores.",
      tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
      image: "/medical-data-analysis-machine-learning.jpg",
      github: "https://github.com/DIKSHITH05/AI-Heart-Failure-Prediction-Model-Logistic-Regression-",
      featured: true,
    },
    {
      title: "Multi-Agent-AI-Defense-Against-AI-Powered-Attacks",
      description:
        "Designing a multi-agent cyber defense framework inspired by swarm intelligence for real-time anomaly detection and threat classification.",
      tech: ["Python", "Flask", "AI/ML", "MongoDB"],
      image: "/cybersecurity-defense-system.jpg",
      github: "https://github.com/DIKSHITH05/Multi-Agent-AI-Defense-Against-AI-Powered-Attacks-",
      featured: true,
      status: "Ongoing",
    },
    {
      title: "Equipment Tracker",
      description:
        "A web-based equipment tracking system for managing and monitoring equipment inventory, usage logs, and maintenance schedules. Streamlines asset management with real-time updates and comprehensive reporting capabilities.",
      tech: ["Python", "Flask", "Web Development", "Database"],
      image: "/equipment-tracking-management.jpg",
      github: "https://github.com/DIKSHITH05/Equipment-tracker",
      featured: false,
    },
    {
      title: "AI-CARBON-PASSPORT",
      description:
        "Secure digital trust ecosystem for carbon market governance. Integrating Digital Carbon Passports, intelligent governance, fraud detection, trust scoring, and dynamic pricing mechanisms.",
      tech: ["AI/ML", "Web Development"],
      image: "/carbon-exchange-project.png",
      github: "https://github.com/DIKSHITH05/CarbonEx-AI-Governed-Carbon-Credit-Trading-Platform",
      featured: true,
    },
  ]

  const filteredProjects =
    selectedTech === "All Projects"
      ? projects
      : projects.filter(
          (p) => p.tech && p.tech.some && p.tech.some((t) => t.toLowerCase().includes(selectedTech.toLowerCase())),
        )

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-sm">⚙️ Filter by technology:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {TECHNOLOGIES &&
                TECHNOLOGIES.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedTech === tech
                        ? "bg-accent text-background"
                        : "bg-background/50 text-foreground border border-border/50 hover:border-accent/50"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects && filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group h-full flex flex-col rounded-lg border border-border/40 bg-card/50 overflow-hidden hover:border-accent/50 transition-all hover:bg-card/80"
                >
                  <div className="relative h-48 bg-muted overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-accent text-background text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                    {project.status && (
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                          {project.status}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground break-words">{project.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4 mt-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech &&
                          project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/10 text-foreground border border-foreground/20 hover:border-accent hover:bg-accent/10 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                      </div>

                      <Button
                        size="sm"
                        asChild
                        className="w-full bg-accent text-background hover:bg-accent/90 font-medium"
                      >
                        <Link href={project.github || "#"} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 col-span-full">
                <p className="text-muted-foreground">No projects found for the selected technology.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
