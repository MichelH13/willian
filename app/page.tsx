import { AnimatedBackground } from "@/components/animated-background"
import { AnimatedTitle } from "@/components/animated-title"
import { PhotoCarousel } from "@/components/photo-carousel"
import { FeaturesSection } from "@/components/features-section"
import { ContactButtons } from "@/components/contact-buttons"

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      
      <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 gap-10">
        {/* Hero Section */}
        <section className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left side - Title and Info */}
          <div className="flex-1 flex flex-col items-center lg:items-start gap-8">
            <AnimatedTitle />
            
            {/* Features */}
            <div className="hidden lg:block">
              <FeaturesSection />
            </div>
          </div>

          {/* Right side - Photo Carousel */}
          <div className="flex-1 w-full max-w-md">
            <PhotoCarousel />
          </div>
        </section>

        {/* Mobile Features */}
        <section className="lg:hidden w-full">
          <FeaturesSection />
        </section>

        {/* CTA Section */}
        <section className="w-full max-w-lg mx-auto space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">
              Agende seu evento agora!
            </h2>
            <p className="text-muted-foreground">
              Entre em contato e faça da sua festa um sucesso!
            </p>
          </div>
          
          <ContactButtons />
          
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            São Paulo - SP
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full text-center text-xs text-muted-foreground/50 mt-8">
          <p>© 2024 Willian GoGoBoy - Todos os direitos reservados</p>
        </footer>
      </main>

      {/* Custom CSS for gradient animation */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  )
}
