import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-accent text-balance">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can work together on your next data project
            </p>
          </div>

          {/* Contact Info & Social */}
          <div className="max-w-2xl mx-auto space-y-6">
              {/* Contact Information */}
              <div className="border border-accent/30 rounded-xl p-8 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  {/* Email */}
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dikshithraj03@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                    <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">Email</p>
                      <p className="text-accent font-medium hover:underline cursor-pointer">dikshithraj03@gmail.com</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connect With Me */}
              <div className="border border-accent/30 rounded-xl p-8 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4">Connect with me</h2>

                <div className="space-y-3">
                  {/* GitHub */}
                  <Link
                    href="https://github.com/DIKSHITH05?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-input hover:bg-input/80 border border-border hover:border-accent/50 rounded-lg transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-5 h-5 text-accent" />
                      <span className="font-medium">GitHub</span>
                    </div>
                    <span className="text-muted-foreground group-hover:text-accent transition-colors">↗</span>
                  </Link>

                  {/* LinkedIn */}
                  <Link
                    href="https://www.linkedin.com/in/dikshith05/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-input hover:bg-input/80 border border-border hover:border-accent/50 rounded-lg transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-accent" />
                      <span className="font-medium">LinkedIn</span>
                    </div>
                    <span className="text-muted-foreground group-hover:text-accent transition-colors">↗</span>
                  </Link>

                  {/* Direct Email */}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=dikshithraj03@gmail.com&su=Hello%20Dikshith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-4 bg-input hover:bg-input/80 border border-border hover:border-accent/50 rounded-lg transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-accent" />
                      <span className="font-medium">Direct Email</span>
                    </div>
                    <span className="text-muted-foreground group-hover:text-accent transition-colors">↗</span>
                  </a>
                </div>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
