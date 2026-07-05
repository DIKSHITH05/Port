"use client"

import { Briefcase } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "AI Engineer",
      company: "Orfiq AI solutions Ltd",
      location: "London, United Kingdom (Remote)",
      date: "Jan 2026 - Present",
      description: [
        "Architect and deploy production-grade Generative AI systems using Azure OpenAI and multi-agent LLM workflows.",
        "Design scalable FastAPI microservices for AI inference, RAG/GraphRAG (Neo4j + Vector DB), and real-time APIs.",
        "Built autonomous 16+ agents architectures with structured orchestration for complex reasoning tasks.",
        "Developed scalable FastAPI-based AI services integrated with Azure OpenAI.",
      ],
    },
    {
      title: "Web & Backend Development Intern",
      company: "Hardee Flexipach",
      location: "",
      date: "Aug 2024 - Oct 2024",
      description: [
        "Contributed to the development and maintenance of internal company websites.",
        "Implemented backend logic and functionality using Python, Java, and C.",
        "Collaborated with the tech team to improve system performance and code quality.",
        "Gained practical experience in SDLC, debugging, and team-based development.",
      ],
    },
    {
      title: "Open Source Contributor",
      company: "GitHub",
      location: "Bangalore, India",
      date: "2023 - 2026",
      description: [
        "Delivered 15+ production-grade PRs to enterprise-scale open-source ecosystems (Apache Airflow, Matplotlib, Prefect).",
        "Enhanced scheduler logic, visualization modules, and workflow orchestration components improving execution efficiency by 12–18%.",
        "Implemented robust unit/integration tests and CI optimizations improving release stability.",
        "Participated in cross-timezone code reviews and design discussions for scalable open-source architecture.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-muted-foreground max-w-2xl">
              My professional journey in building scalable backend systems, contributing to open-source, and developing AI-powered solutions.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-0 border-l border-accent/20 md:border-none"
              >
                <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                  <div className="md:col-span-1 mb-2 md:mb-0 text-muted-foreground text-sm font-medium pt-1">
                    {exp.date}
                  </div>
                  <div className="md:col-span-4 relative pb-8 md:pb-0">
                    <div className="hidden md:block absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-accent border-[3px] border-background" />
                    
                    <div className="bg-card/50 border border-border/40 p-6 rounded-xl hover:border-accent/50 transition-all hover:bg-card/80">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                          <div className="text-accent font-medium mt-1 flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            {exp.company}
                            {exp.location && <span className="text-muted-foreground text-sm font-normal">— {exp.location}</span>}
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-4">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
