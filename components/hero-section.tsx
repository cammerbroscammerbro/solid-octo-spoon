"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToFooter = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-balance text-foreground">
                Generate Simulations of Complex Concepts in Seconds.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Turn complex &quot;What-if&quot; questions into instant 3D visualizations for your students.
              </p>
            </div>
            <Button
              onClick={scrollToFooter}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg font-medium rounded-md transition-all duration-300"
            >
              Join the Waitlist
            </Button>
          </div>

          {/* Right Side - YouTube Video */}
          <div className="relative">
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted/10 border border-border/50">
              <iframe
                src="https://www.youtube.com/embed/znLNpuTnX7k?autoplay=1&mute=1&loop=1&playlist=znLNpuTnX7k&controls=0&showinfo=0&rel=0&modestbranding=1"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Hypothetical Lab Demo"
              />
            </div>
            {/* Subtle glow effect */}
            <div className="absolute -inset-4 bg-accent/5 blur-3xl -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
