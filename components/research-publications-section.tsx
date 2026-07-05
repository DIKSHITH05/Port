"use client"

import { Github, ExternalLink, BookOpen, Layers, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ResearchPublicationsSection() {
  const publications = [
    {
      title: "AI-Governed Carbon Credit Exchange with Digital Carbon Passport",
      subtitle: "Secure digital trust ecosystem for carbon market governance",
      tags: ["Random Forest", "XGBoost", "Neural Networks", "AES-256", "SHA-256", "STAVP"],
      overview: "Proposed and designed an AI-governed carbon trading ecosystem integrating Digital Carbon Passports, intelligent governance, fraud detection, trust scoring, and dynamic pricing mechanisms.",
      architecture: "Secure Trade Authorization and Verification Pipeline (STAVP) with AES-256 encryption, SHA-256 hashing, secure transaction validation, and ML-driven market intelligence layers.",
      innovation: "Combines Digital Carbon Passports with intelligent governance and the STAVP pipeline for end-to-end secure carbon credit authorization and verification.",
      impact: "Addresses fraud detection, trust evaluation, and adaptive pricing in carbon credit markets through AI-driven governance and secure transaction pipelines.",
      publication: "Abstract Accepted",
      conference: "ICASF 2027, Abu Dhabi University, UAE",
      github: "https://github.com/DIKSHITH05/CarbonEx-AI-Governed-Carbon-Credit-Trading-Platform",
      paper: "/carbon-paper.pdf"
    },
    {
      title: "HoneyBee-Inspired Multi-Agent Cyber Defense Framework",
      subtitle: "Detect-Mislead-Neutralize-Learn security lifecycle for autonomous defense",
      tags: ["Python", "Flask", "Apache Kafka", "XGBoost", "CNN-LSTM", "DQN", "Reinforcement Learning"],
      overview: "Proposed and designed a HoneyBee-inspired multi-agent cyber defense architecture integrating intelligent threat detection, adaptive deception, autonomous response, and continuous learning for enterprise-scale protection.",
      architecture: "Scalable agent-based framework utilizing Apache Kafka, Flask-based deception environments, XGBoost, CNN-LSTM, Deep Q-Network (DQN) reinforcement learning, adaptive honeypots, and distributed threat intelligence sharing.",
      innovation: "Developed the Detect-Mislead-Neutralize-Learn lifecycle with adaptive attacker redirection, intelligence collection, and autonomous neutralization through coordinated multi-agent orchestration.",
      impact: "Evaluated on CIC-IDS2017 and simulated enterprise attacks: 98.24% detection accuracy, 98.51% precision, 98.10% recall, 0.992 ROC-AUC, 1.85% false positive rate, and 92.40% deception engagement rate.",
      publication: "Book chapter accepted in Metaheuristic Optimization for Social Good — First Author & Corresponding Author",
      conference: "ICIICE 2026, Dubai, UAE (Oral Presentation Accepted)",
      github: "https://github.com/DIKSHITH05/Multi-Agent-AI-Defense-Against-AI-Powered-Attacks-",
      paper: "/CH32.pdf"
    }
  ]

  return (
    <section id="research" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Publications</h2>
            <p className="text-muted-foreground max-w-2xl">
              Academic research and publications focusing on applied AI, cybersecurity, and secure ecosystems.
            </p>
          </div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div key={index} className="bg-card/50 border border-border/40 rounded-2xl p-8 overflow-hidden hover:border-accent/30 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="inline-block px-3 py-1 bg-muted/50 border border-border/50 text-muted-foreground text-xs font-semibold rounded-full tracking-wider">
                      RESEARCH PANEL
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-3 leading-tight">
                        {pub.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {pub.subtitle}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-background/50 border border-border/50 text-muted-foreground text-sm rounded-md font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm font-semibold tracking-wider">
                          <BookOpen className="w-4 h-4" />
                          OVERVIEW
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {pub.overview}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm font-semibold tracking-wider">
                          <Layers className="w-4 h-4" />
                          ARCHITECTURE
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {pub.architecture}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm font-semibold tracking-wider">
                          <Zap className="w-4 h-4" />
                          INNOVATION
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {pub.innovation}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm font-semibold tracking-wider">
                          <Target className="w-4 h-4" />
                          IMPACT
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {pub.impact}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border/30 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-end">
                      <div className="space-y-1 text-sm">
                        <p><span className="text-muted-foreground">Publication:</span> <span className="font-semibold text-foreground">{pub.publication}</span></p>
                        <p><span className="text-muted-foreground">Conference:</span> <span className="font-semibold text-foreground">{pub.conference}</span></p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Button variant="outline" className="rounded-full bg-background border-border/50 hover:bg-muted" asChild>
                          <Link href={pub.github} target="_blank">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                        <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90" asChild>
                          <Link href={pub.paper} target="_blank">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Paper
                          </Link>
                        </Button>
                      </div>
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
