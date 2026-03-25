import { Lightbulb, MousePointerClick, Zap } from "lucide-react"

const advantages = [
  {
    icon: Lightbulb,
    title: "Student Intuition",
    description:
      "Build deep conceptual understanding through visual exploration. Students don't just memorize concepts they visualize it.",
  },
  {
    icon: MousePointerClick,
    title: "Live Interaction",
    description:
      "Adjust parameters in real-time and observe immediate results. Perfect for classroom demonstrations and student experiments.",
  },
  {
    icon: Zap,
    title: "Zero Setup",
    description:
      "No downloads, no installations, no complex configurations. Open your browser and start simulating within seconds.",
  },
]

export function AdvantagesSection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-accent font-medium">
            Why Choose Hypothetical Lab
          </span>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="group p-8 lg:p-10 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <advantage.icon className="w-7 h-7 text-accent" />
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-4 text-foreground">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
