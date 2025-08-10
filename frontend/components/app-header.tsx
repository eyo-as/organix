"use client"

import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "./theme-toggle"
import { QuickAddDialog } from "./quick-add-dialog"

function titleFromPath(path: string) {
  if (path.startsWith("/tasks")) return "Tasks"
  if (path.startsWith("/dashboard") || path === "/") return "Dashboard"
  return "Organix"
}

export function AppHeader() {
  const pathname = usePathname()
  const title = titleFromPath(pathname || "/")

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b border-[#212121]/15 bg-white px-3 text-[#212121] dark:border-white/20 dark:bg-[#212121] dark:text-white">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-1 h-4 bg-[#212121]/15 dark:bg-white/20" />
      <h1 className="text-base font-semibold">{title}</h1>
      <div className="ml-auto flex items-center gap-2">
        <QuickAddDialog />
        <ThemeToggle />
        <Button variant="ghost" size="icon" aria-label="More" className="hidden" />
      </div>
    </header>
  )
}
