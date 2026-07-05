"use client"

import { Code2, Database, Network, LineChart, Users } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming & Tools",
      icon: <Code2 className="w-6 h-6 text-accent" />,
      skills: ["Python", "SQL", "REST APIs", "Flask", "FastAPI", "Git", "Docker", "API Integration"],
    },
    {
      title: "Data Analytics & ML",
      icon: <Database className="w-6 h-6 text-accent" />,
      skills: ["Random Forest", "XGBoost", "Feature Engineering", "Model Evaluation", "LangChain", "CI/CD Pipelines", "Logistic Regression"],
    },
    {
      title: "Deep Learning & AI",
      icon: <Network className="w-6 h-6 text-accent" />,
      skills: [
        "TensorFlow",
        "PyTorch",
        "CNNs",
        "RNNs",
        "Transformers",
        "NLP",
        "GPT-4o-mini",
        "HuggingFace",
      ],
    },
    {
      title: "Data Visualization",
      icon: <LineChart className="w-6 h-6 text-accent" />,
      skills: ["Matplotlib", "Seaborn", "Tableau", "Power BI"],
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6 text-accent" />,
      skills: ["Problem Solving", "Analytical Thinking", "Teamwork", "Communication", "Adaptability"],
    },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Skills & <span className="text-accent">Expertise</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I specialize in machine learning modeling, natural language processing, and intelligent document
              processing with modern cloud technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(var(--accent),0.1)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-300 -mr-16 -mt-16" />
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-accent/10 rounded-xl border border-accent/20 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-1.5 rounded-full bg-background border border-border text-foreground/80 text-sm font-medium hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
