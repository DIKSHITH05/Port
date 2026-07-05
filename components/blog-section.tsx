"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import Link from "next/link"

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "How Multi-Agent Systems Can Defend Against AI-Powered Attacks",
      description:
        "Exploring how collaborative multi-agent systems can detect, respond to, and mitigate sophisticated AI-powered attacks in real-time.",
      date: "2025", // Updated year from 2024 to 2025
      readTime: "8 min read",
      categories: ["AI", "Security", "Technology"],
      link: "https://medium.com/@dikshithraj03/how-multi-agent-systems-can-defend-against-ai-powered-attacks-df1a7c56d620",
      image: "/multi-agent-ai-defense.jpg",
    },
    {
      id: 2,
      title: "Part 2: Designing and Implementing a Multi-Agent Cyber Defense System",
      description:
        "Deep dive into the architecture, design patterns, and implementation strategies for building scalable multi-agent systems for cybersecurity defense.",
      date: "2025", // Updated year from 2024 to 2025
      readTime: "10 min read",
      categories: ["AI", "Security", "Technology"],
      link: "https://medium.com/@dikshithraj03/part-2-designing-and-implementing-a-multi-agent-cyber-defense-system-221f0540dd05",
      image: "/multi-agent-system-architecture.jpg",
    },
    {
      id: 3,
      title: "Turning Messy Documents into Structured Data with LLMs",
      description:
        "Learn how to leverage Large Language Models to automatically extract, clean, and structure data from unorganized documents with high accuracy.",
      date: "2025", // Updated year from 2024 to 2025
      readTime: "9 min read",
      categories: ["AI", "Data Engineering", "Technology"],
      link: "https://medium.com/@dikshithraj03/turning-messy-documents-into-structured-data-with-llms-d8a6242a31cc",
      image: "/llm-document-processing.jpg",
    },
    {
      id: 4,
      title: "Computer Architecture - Trends in Processor Design",
      description:
        "Explore the latest trends, innovations, and architectural advances shaping the future of processor design and computing performance.",
      date: "2025", // Updated year from 2024 to 2025
      readTime: "15 min watch",
      categories: ["Technology"],
      link: "https://youtu.be/qBCU3h2chXE?si=LoiRsMTd6fInPrms",
      image: "/computer-architecture-processor-design-trends.jpg",
    },
  ]

  const allCategories = ["All", "AI", "Security", "Data Engineering", "Technology"]
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.categories.includes(selectedCategory)
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog Posts</h2>
            <p className="text-muted-foreground max-w-2xl">
              Insights on AI, Machine Learning, Security, and Data Engineering
            </p>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search blogs, tags, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-card/50 border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-accent text-background"
                    : "bg-card/50 border border-border/40 text-foreground hover:border-accent/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div>
            {filteredBlogs.length > 0 ? (
              <>
                <h3 className="text-xl font-semibold mb-6">All Posts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBlogs.map((blog) => (
                    <Link
                      key={blog.id}
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group h-full"
                    >
                      <div className="h-full p-6 rounded-xl border border-border/40 bg-card/50 hover:bg-card/80 hover:border-accent/50 transition-all flex flex-col">
                        <div className="w-full h-40 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                          <img
                            src={blog.image || "/placeholder.svg"}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = "none"
                            }}
                          />
                        </div>

                        <p className="text-xs text-muted-foreground mb-3">{blog.date}</p>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">{blog.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {blog.categories.map((cat) => (
                            <span
                              key={cat}
                              className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>

                        <p className="text-xs text-muted-foreground">{blog.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No blog posts found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
