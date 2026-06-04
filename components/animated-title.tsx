"use client"

import { useEffect, useState } from "react"

export function AnimatedTitle() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="text-center space-y-4">
      {/* Main title */}
      <h1
        className={`text-5xl sm:text-7xl font-black tracking-tight transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <span className="inline-block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
          WILLIAN
        </span>
        <br />
        <span className="inline-block text-4xl sm:text-5xl mt-2 text-foreground/90">
          GOGOBOY
        </span>
      </h1>

      {/* Tagline */}
      <p
        className={`text-xl sm:text-2xl text-muted-foreground font-light transition-all duration-1000 delay-300 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {"✨ A energia que sua festa precisa ✨".split("").map((char, i) => (
          <span
            key={i}
            className="inline-block animate-pulse"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </p>

      {/* Decorative line */}
      <div
        className={`flex items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
        <span className="text-primary text-2xl animate-bounce">🔥</span>
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
      </div>
    </div>
  )
}
