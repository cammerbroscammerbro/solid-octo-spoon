import { HeroSection } from "@/components/hero-section"
import { StepsSection } from "@/components/steps-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <StepsSection />
      <AdvantagesSection />
      <FooterSection />
    </main>
  )
}
