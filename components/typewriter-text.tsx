"use client"

import { useEffect, useState } from "react"

interface TypewriterTextProps {
  text: string
  speed?: number
  className?: string
  onComplete?: () => void
}

function TypewriterText({ text, speed = 50, className = "", onComplete }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)

      return () => clearTimeout(timeout)
    } else if (!isComplete && displayedText.length === text.length) {
      setIsComplete(true)
      onComplete?.()
    }
  }, [displayedText, text, speed, isComplete, onComplete])

  return (
    <span className={className}>
      <span>{displayedText}</span>
      {!isComplete && <span className="inline-block ml-1 w-0.5 h-8 md:h-10 bg-accent animate-typewriter-cursor" />}
    </span>
  )
}

export default TypewriterText
export { TypewriterText }
