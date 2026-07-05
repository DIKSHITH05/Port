"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function CLITerminal() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<{ command: string; output: string }[]>([
    {
      command: "help",
      output: "Available commands: about, skills, projects, contact, clear",
    },
  ])

  const commands: Record<string, string> = {
    about:
      "Hi! I'm G R Dikshith, a Data Science & AI Engineer passionate about building intelligent solutions with ML and NLP.",
    skills:
      "Python, SQL, Machine Learning, Deep Learning, NLP, Flask, LangChain, Scikit-learn, Data Analysis, REST APIs",
    projects: "Bid Document Extractor, Heart Failure Prediction Model, Multi-Agent AI Defense Framework",
    contact:
      "Email: dikshithraj03@gmail.com | GitHub: github.com/DIKSHITH05 | LinkedIn: linkedin.com/in/dikshith05 | Phone: +917760275088",
    help: "Available commands: about, skills, projects, contact, clear",
    clear: "",
  }

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    const command = input.toLowerCase().trim()

    if (command === "") return

    const output = commands[command] || `Command not found: ${command}. Type 'help' for available commands.`

    if (command === "clear") {
      setHistory([])
      setInput("")
      return
    }

    setHistory([...history, { command, output }])
    setInput("")
  }

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Terminal</h2>
            <p className="text-muted-foreground">Explore my portfolio through an interactive CLI experience.</p>
          </div>

          <div className="rounded-xl border border-border/40 bg-black/50 p-6 font-mono text-sm overflow-hidden">
            {/* Terminal Output */}
            <div className="space-y-2 mb-4 max-h-80 overflow-y-auto">
              {history.length === 0 ? (
                <div className="text-muted-foreground">
                  Type a command to get started. Type 'help' for available commands.
                </div>
              ) : (
                history.map((entry, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-accent">$ {entry.command}</div>
                    <div className="text-foreground/80 pl-4">{entry.output}</div>
                  </div>
                ))
              )}
            </div>

            {/* Terminal Input */}
            <form onSubmit={handleCommand} className="flex items-center gap-2">
              <span className="text-accent">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a command..."
                className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground"
              />
            </form>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {["about", "skills", "projects", "contact"].map((cmd) => (
              <Button
                key={cmd}
                variant="outline"
                size="sm"
                onClick={() => {
                  const command = cmd.toLowerCase().trim()
                  const output =
                    commands[command] || `Command not found: ${command}. Type 'help' for available commands.`
                  setHistory([...history, { command, output }])
                  setInput("")
                }}
                className="text-xs"
              >
                {cmd}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
