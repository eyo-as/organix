import SiteNavbar from "@/components/site-navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BRAND } from "@/components/brand"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, CalendarDays, Zap } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-[#212121] dark:bg-[#212121] dark:text-white">
      <SiteNavbar />

      <main>
        {/* Hero - no images, pure black/white */}
        <section className="border-b border-[#212121]/15 dark:border-white/20">
          <div className="container mx-auto grid gap-8 px-4 py-16 md:grid-cols-2 md:items-center lg:py-24">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                {"Organize Everything. Conquer Anything."}
              </h1>
              <p className="text-lg text-[#212121]/70 dark:text-white/70">
                {"Your second brain for tasks, projects, and life — naturally organized."}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/auth">
                  <Button className="bg-[#212121] px-6 text-white hover:bg-[#212121]/90 dark:bg-white dark:text-[#212121] dark:hover:bg-white/90">
                    Get Started
                  </Button>
                </Link>
                <a href="#features">
                  <Button
                    variant="outline"
                    className="border-[#212121] px-6 text-[#212121] hover:bg-[#212121] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#212121] bg-transparent"
                  >
                    Learn More
                  </Button>
                </a>
              </div>
              <div className="text-sm text-[#212121]/70 dark:text-white/70">No clutter. No noise. Just clarity.</div>
            </div>

            <div className="rounded-lg border border-[#212121]/15 p-6 dark:border-white/20">
              <div className="text-sm font-medium">A calmer way to work</div>
              <ul className="mt-3 space-y-2 text-sm text-[#212121]/80 dark:text-white/80">
                <li>• Focus on essentials</li>
                <li>• Minimal UI, maximal clarity</li>
                <li>• Fast capture and simple lists</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features (monochrome) */}
        <section id="features" className="container mx-auto grid gap-6 px-4 py-14 md:grid-cols-3">
          <Card className="border border-[#212121]/15 bg-white dark:border-white/20 dark:bg-[#212121]">
            <CardContent className="p-5">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                <Zap className="h-4 w-4" /> Quick capture
              </div>
              <p className="text-sm text-[#212121]/70 dark:text-white/70">Add tasks instantly without breaking flow.</p>
            </CardContent>
          </Card>
          <Card className="border border-[#212121]/15 bg-white dark:border-white/20 dark:bg-[#212121]">
            <CardContent className="p-5">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                <CalendarDays className="h-4 w-4" /> Natural planning
              </div>
              <p className="text-sm text-[#212121]/70 dark:text-white/70">Plan your day with clarity and ease.</p>
            </CardContent>
          </Card>
          <Card className="border border-[#212121]/15 bg-white dark:border-white/20 dark:bg-[#212121]">
            <CardContent className="p-5">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" /> Meaningful status
              </div>
              <p className="text-sm text-[#212121]/70 dark:text-white/70">Simple signals. Done or not yet.</p>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#212121]/15 dark:border-white/20">
          <div className="container mx-auto flex flex-col items-center gap-3 px-4 py-8 text-center">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-sm bg-[#212121] dark:bg-white" />
              <span className="text-sm font-medium">{BRAND.name}</span>
            </div>
            <div className="text-xs text-[#212121]/70 dark:text-white/70">
              Organized naturally. Clarity without clutter.
            </div>
            <div className="text-xs text-[#212121]/70 dark:text-white/70">
              © {new Date().getFullYear()} {BRAND.name}
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
