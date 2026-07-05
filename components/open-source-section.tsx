"use client"

import { Github } from "lucide-react"

export default function OpenSourceSection() {
  const contributions = [
    {
      name: "Contributing to Open Source",
      description: "Actively working on personal ML and AI projects to contribute to the open-source community.",
      role: "Active Developer",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Source</h2>
            <p className="text-muted-foreground max-w-2xl">
              I'm passionate about contributing to the open-source community and sharing knowledge with fellow
              developers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {contributions.map((contrib, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border/40 bg-card/50 hover:bg-card/80 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <Github className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{contrib.name}</h3>
                    <p className="text-muted-foreground mb-2">{contrib.description}</p>
                    <p className="text-sm text-accent">{contrib.role}</p>
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
