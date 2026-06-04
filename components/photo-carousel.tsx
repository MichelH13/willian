"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const photos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_v4kg6gv4kg6gv4kg-NydpT6Uy2v5hbNy0w4tlJlGxt7AiDg.png",
    alt: "Willian GoGoBoy em show na balada",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_lt5l3xlt5l3xlt5l-BR1XsDT1yOTyhCpSIhIgYZfkUUP38d.png",
    alt: "Willian GoGoBoy selfie",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_dgwosjdgwosjdgwo-3hhA2XvzMje6xUyyWE2fY0LyERmq5V.png",
    alt: "Willian GoGoBoy no palco",
  },
]

export function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % photos.length)
        setIsAnimating(false)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex(index)
        setIsAnimating(false)
      }, 300)
    }
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Main image container */}
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-primary/30">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur-lg opacity-75 animate-pulse" />
        
        <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-primary/50">
          <Image
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            fill
            className={`object-cover transition-all duration-500 ${
              isAnimating ? "scale-110 opacity-0" : "scale-100 opacity-100"
            }`}
            priority
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-6">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                : "bg-muted hover:bg-primary/50"
            }`}
            aria-label={`Ir para foto ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-4 mt-4">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-16 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex
                ? "ring-2 ring-primary scale-110"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
