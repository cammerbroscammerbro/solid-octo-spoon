"use client"

const steps = [
  {
    number: "01",
    title: "Type",
    description:
      "Describe your scenario in plain language. Ask any 'what-if' question you can imagine.",
  },
  {
    number: "02",
    title: "Visualize",
    description:
      "Watch as your scenario transforms into a real-time 3D simulation.",
  },
  {
    number: "03",
    title: "Experiment",
    description:
      "Adjust variables, explore edge cases, and let students interact with the simulation directly.",
  },
]

export function StepsSection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-sm uppercase tracking-widest text-accent font-medium">
            How It Works
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 text-foreground">
            Three Simple Steps
          </h2>
        </div>

        {/* Sticky Video + Scrolling Steps Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Sticky Video - Left Side */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative">
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted/10 border border-border/50">
                <iframe
                  src="https://www.youtube.com/embed/q-j6rVNqMnw?autoplay=1&mute=1&loop=1&playlist=q-j6rVNqMnw&controls=0&showinfo=0&rel=0&modestbranding=1"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Hypothetical Lab Demo"
                />
              </div>
              {/* Subtle accent glow */}
              <div className="absolute -inset-2 bg-accent/3 blur-2xl -z-10 rounded-lg" />
            </div>
          </div>

          {/* Scrolling Steps - Right Side */}
          <div className="space-y-32 lg:space-y-48 lg:py-24">
            {steps.map((step) => (
              <div key={step.number} className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-6xl md:text-7xl font-serif text-accent/40">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
