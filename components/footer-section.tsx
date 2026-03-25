"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FooterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <footer id="waitlist" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        {/* CTA */}
        <div className="space-y-6 mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Ready to Transform Your Classroom?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Be among the first educators to experience AI-powered simulations. Join our waitlist for early access.
          </p>
        </div>

        {/* Email Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 bg-muted/20 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
            />
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 font-medium disabled:opacity-50"
            >
              {isLoading ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
        ) : (
          <div className="p-6 rounded-lg border border-accent/30 bg-accent/5 max-w-md mx-auto">
            <p className="text-accent font-medium">
              Thank you for joining! We&apos;ll be in touch soon.
            </p>
          </div>
        )}
        {error && (
          <p className="mt-4 text-red-500 text-sm">{error}</p>
        )}

        {/* Footer Bottom */}
        <div className="mt-24 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl text-foreground">Hypothetical Lab</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hypothetical Lab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
