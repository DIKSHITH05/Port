"use client"

import { ExternalLink } from "lucide-react"
import { useEffect } from "react"
import Navigation from "@/components/navigation"

export default function AchievementsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const metrics = [
    {
      title: "LeetCode Solver",
      description: "Solved 150+ coding problems",
      stat: "152",
      label: "Problems",
      color: "text-orange-500",
    },
    {
      title: "Technical Blogger",
      description: "Published technical articles",
      stat: "12",
      label: "Articles",
      color: "text-green-500",
    },
    {
      title: "Open Source Contributor",
      description: "Active in open source community",
      stat: "15",
      label: "Merged PRs",
      color: "text-purple-500",
    },
    {
      title: "AI Research Projects",
      description: "Conferences & Book Chapters",
      stat: "3",
      label: "Publications",
      color: "text-blue-500",
    },
  ]

  const certifications = [
    {
      title: "Deep Learning Specialization",
      platform: "Coursera",
      platformBadge: "Coursera",
      year: 2026,
      credentialId: "JI9D917XPXLZ",
      verifyUrl: "https://coursera.org/verify/specialization/JI9D917XPXLZ",
      courses: [
        "Neural Networks and Deep Learning",
        "Improving Deep Neural Networks",
        "Convolutional Neural Networks",
        "Sequence Models",
      ],
    },
    {
      title: "Generative AI for Software Developers",
      platform: "Coursera",
      platformBadge: "Coursera",
      year: 2025,
      credentialId: "NE3KD0KJAYH1",
      verifyUrl: "https://coursera.org/verify/specialization/NE3KD0KJAYH1",
      courses: [
        "Generative AI: Introduction and Applications",
        "Prompt Engineering Basics",
        "Elevate Your Software Development Career",
      ],
    },
    {
      title: "Explore Machine Learning using Python",
      platform: "Infosys Springboard",
      platformBadge: "Infosys",
      year: 2024,
      credentialId: "ML-Python-2024",
      verifyUrl: "https://verify.onwingspan.com",
    },
    {
      title: "OpenGL",
      platform: "Infosys Springboard",
      platformBadge: "Infosys",
      year: 2024,
      credentialId: "OpenGL-2024",
      verifyUrl: "https://verify.onwingspan.com",
    },
    {
      title: "IBM AI Engineering Professional Certificate",
      platform: "Coursera",
      platformBadge: "Coursera",
      year: 2025,
      credentialId: "IBM-AI-ENG-2025",
      verifyUrl: "https://coursera.org/verify/professional-cert/IBM-AI-ENG-2025",
      courses: [
        "Machine Learning with Python",
        "Introduction to Deep Learning & Neural Networks with Keras",
        "Building Deep Learning Models with TensorFlow",
      ],
    },
    {
      title: "Cloud Computing",
      platform: "NPTEL",
      platformBadge: "NPTEL",
      year: 2024,
      credentialId: "NPTEL-CLOUD-2024",
      verifyUrl: "https://nptel.ac.in/noc/certificate",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-accent mb-4">Achievements</h1>
          <p className="text-lg text-muted-foreground">
            Badges, certifications, and metrics showcasing professional growth and impact
          </p>
        </div>

        {/* Professional Metrics */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Professional Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="border border-border rounded-lg p-8 hover:border-accent/50 transition-colors">
                <p className="text-sm text-muted-foreground mb-4">{metric.title}</p>
                <p className={`text-4xl font-bold mb-2 ${metric.color}`}>{metric.stat}+</p>
                <p className="text-muted-foreground text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Certifications */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Professional Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-6 hover:border-accent/50 transition-colors bg-card/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.platform} • {cert.year}
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/30">
                    {cert.platformBadge}
                  </span>
                </div>
                {cert.courses && (
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Courses:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {cert.courses.slice(0, 2).map((course, i) => (
                        <li key={i}>• {course}</li>
                      ))}
                      {cert.courses.length > 2 && <li>• +{cert.courses.length - 2} more</li>}
                    </ul>
                  </div>
                )}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3">
                    Credential ID: <span className="text-accent">{cert.credentialId}</span>
                  </p>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    Verify <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
