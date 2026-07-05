"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Experience", href: "/?section=experience" },
    { label: "Skills", href: "/?section=skills" },
    { label: "Projects", href: "/?section=projects" },
    { label: "Research", href: "/?section=research" },
    { label: "Blog", href: "/?section=blog" },
    { label: "Achievements", href: "/achievements" },
    { label: "Contact", href: "/contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    if (href === "/") {
      router.push("/")
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
    } else if (href.startsWith("/?section=")) {
      const section = href.split("=")[1]
      router.push("/")
      setTimeout(() => {
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    } else {
      router.push(href)
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-accent">
            GR Dikshith
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="block px-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                onClick={(e) => {
                  handleNavClick(e, item.href)
                  setIsOpen(false)
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
