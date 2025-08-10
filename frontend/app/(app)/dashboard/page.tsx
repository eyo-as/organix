import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-6 text-[#212121] dark:text-white">
      <section className="space-y-1">
        <h2 className="text-2xl font-semibold">Welcome back</h2>
        <p className="text-sm text-[#212121]/70 dark:text-white/70">A calm overview for your day.</p>
      </section>

      <Card className="border border-[#212121]/15 bg-white dark:border-white/20 dark:bg-[#212121]">
        <CardContent className="p-4">
          <div className="mb-3 text-sm text-[#212121]/70 dark:text-white/70">Today</div>
          <ul className="space-y-2">
            <li className="rounded-md border border-[#212121]/15 bg-white px-3 py-2 text-sm dark:border-white/20 dark:bg-[#212121]">
              Review weekly goals
            </li>
            <li className="rounded-md border border-[#212121]/15 bg-white px-3 py-2 text-sm dark:border-white/20 dark:bg-[#212121]">
              Draft project outline
            </li>
            <li className="rounded-md border border-[#212121]/15 bg-white px-3 py-2 text-sm dark:border-white/20 dark:bg-[#212121]">
              30‑min focus session
            </li>
          </ul>
          <div className="mt-4">
            <Button className="bg-[#212121] text-white hover:bg-[#212121]/90 dark:bg-white dark:text-[#212121] dark:hover:bg-white/90">
              Add a task
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-[#212121]/15 bg-white dark:border-white/20 dark:bg-[#212121]">
        <CardContent className="p-4">
          <div className="mb-2 text-sm font-medium">Notes</div>
          <div className="rounded-md border border-[#212121]/15 bg-white p-3 text-sm text-[#212121]/70 dark:border-white/20 dark:bg-[#212121] dark:text-white/70">
            Keep it simple. One step at a time.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
