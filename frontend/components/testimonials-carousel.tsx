"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const TESTIMONIALS = [
  {
    quote: "Organix decluttered my workflow. It feels like Notion and Linear had a calm baby.",
    name: "Alex Rivera",
    role: "Product Designer",
  },
  {
    quote: "My team finally has clarity. Focus Mode and quick capture are game changers.",
    name: "Priya Shah",
    role: "Engineering Manager",
  },
  {
    quote: "Studying got easier with clean views and tags. It just gets out of the way.",
    name: "Daniel Kim",
    role: "Student",
  },
]

export function TestimonialsCarousel() {
  const [index, setIndex] = React.useState(0)
  const next = React.useCallback(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), [])
  const prev = React.useCallback(() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), [])

  React.useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  const t = TESTIMONIALS[index]

  return (
    <Card className="relative overflow-hidden border-none bg-muted/40 shadow-sm">
      <CardContent className="flex items-center gap-4 p-6">
        <Button variant="ghost" size="icon" onClick={prev} aria-label="Previous">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="mx-auto max-w-2xl text-center">
          <Quote className="mx-auto mb-3 h-6 w-6 text-muted-foreground" />
          <p className="text-lg leading-relaxed">{t.quote}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            {t.name} — {t.role}
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={next} aria-label="Next">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </CardContent>
    </Card>
  )
}
