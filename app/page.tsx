"use client"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import ResearchPublicationsSection from "@/components/research-publications-section"
import BlogSection from "@/components/blog-section"
import CLITerminal from "@/components/cli-terminal"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ResearchPublicationsSection />
      <BlogSection />
      <CLITerminal />
      <Footer />
    </div>
  )
}
