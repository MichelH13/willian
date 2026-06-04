"use client"

import { Instagram, MessageCircle } from "lucide-react"

const INSTAGRAM_URL = "https://www.instagram.com/will_fidelis123/"
const WHATSAPP_NUMBER = "5511971628110"
const WHATSAPP_MESSAGE = "Olá! Gostaria de contratar o Willian GoGoBoy para um evento."

export function ContactButtons() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-red-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Instagram className="relative z-10 w-6 h-6 group-hover:animate-bounce" />
        <span className="relative z-10">Instagram</span>
        
        {/* Shine effect */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-green-500 text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 overflow-hidden"
      >
        <span className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <MessageCircle className="relative z-10 w-6 h-6 group-hover:animate-bounce" />
        <span className="relative z-10">WhatsApp</span>
        
        {/* Shine effect */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </a>
    </div>
  )
}
