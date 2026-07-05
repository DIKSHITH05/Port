"use client"

import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import TypewriterText from "./typewriter-text"
import { useState } from "react"

export default function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showDescription, setShowDescription] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent text-sm font-semibold tracking-wider">HI THERE, I'M</p>
              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
                <TypewriterText text="G R Dikshith" speed={80} onComplete={() => setShowSubtitle(true)} />
              </h1>
              {showSubtitle && (
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
                    Passionate about
                  </p>
                  <p className="text-xl text-accent font-medium animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <TypewriterText
                      text="Data Science, Data Engineer & AI Engineer"
                      speed={40}
                      onComplete={() => setShowDescription(true)}
                    />
                  </p>
                </div>
              )}
            </div>

            {showDescription && (
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-500">
                AI-driven CSE student specializing in ML pipelines, LLM-powered document intelligence, and predictive
                modeling. Proficient in Python, SQL, LangChain, TensorFlow, and Scikit-learn, with open-source
                contributions, published blogs, and experience delivering scalable, real-world AI systems.
              </p>
            )}

            {showDescription && (
              <div className="flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="#projects">
                    View My Work
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="GR-DIKSHITH-RESUME.pdf" download="GR-DIKSHITH-RESUME.pdf">
                    Download Resume
                    <Download className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            )}

            {showDescription && (
              <div className="flex gap-4 pt-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <Link
                  href="https://github.com/DIKSHITH05?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/dikshith05/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="mailto:dikshithraj03@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            )}
          </div>

          {/* Right side - Profile Image placeholder */}
          <div className="relative hidden md:block">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 flex items-center justify-center overflow-hidden">
              <img
                src="/images/whatsapp-20image-202026-01-06-20at-2021.jpeg"
                alt="G R Dikshith"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
