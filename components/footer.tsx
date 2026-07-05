"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/DIKSHITH05?tab=repositories" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/dikshith05/" },
    { icon: Mail, label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=dikshithraj03@gmail.com" },
  ]

  return (
    <footer className="border-t border-border/40 bg-card/30 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-accent">GR Dikshith</h3>
            <p className="text-sm text-muted-foreground">Data Science & AI Engineer</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Quick Links</h4>
            <nav className="flex flex-col gap-1">
              {["About", "Projects", "Blog"].map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} G R Dikshith. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
