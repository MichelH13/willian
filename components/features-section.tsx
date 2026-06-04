"use client"

import { Sparkles, Music, PartyPopper, Star } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Shows Incríveis",
    description: "Apresentações de tirar o fôlego",
  },
  {
    icon: Music,
    title: "Energia Total",
    description: "Animação do começo ao fim",
  },
  {
    icon: PartyPopper,
    title: "Festas & Eventos",
    description: "Aniversários, formaturas e mais",
  },
  {
    icon: Star,
    title: "Profissional",
    description: "Experiência e pontualidade",
  },
]

export function FeaturesSection() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-lg mx-auto">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group relative p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Hover glow */}
          <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10 flex flex-col items-center text-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <feature.icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">
              {feature.title}
            </h3>
            <p className="text-xs text-muted-foreground">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
