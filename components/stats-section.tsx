"use client"

export default function StatsSection() {
  const stats = [
    {
      label: "Projects Built",
      value: "9+",
      icon: "🚀",
    },
    {
      label: "Model Accuracy",
      value: "91%",
      icon: "🎯",
    },
    {
      label: "AI Research Projects",
      value: "3+",
      icon: "🔬",
    },
    {
      label: "LeetCode Solver",
      value: "152+",
      icon: "💻",
      description: "Solved 150+ coding problems",
    },
    {
      label: "Technical Blogger",
      value: "12+",
      icon: "📝",
      description: "Published technical articles",
    },
    {
      label: "Open Source Contributor",
      value: "15+",
      icon: "🌟",
      description: "Active in open source community",
    },
  ]

  return (
    <section className="py-20 bg-card/30 border-y border-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">By the Numbers</h2>
          <p className="text-lg text-muted-foreground">Quantifying my impact</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 p-4 rounded-lg border border-border/30 bg-background/50 hover:bg-background/80 transition-colors"
            >
              <p className="text-3xl">{stat.icon}</p>
              <p className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              {stat.description && <p className="text-xs text-muted-foreground/70">{stat.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
