"use client"

import Link from "next/link"
import { BRAND } from "./brand"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"

export default function SiteNavbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#212121]/15 bg-white/80 backdrop-blur dark:border-white/20 dark:bg-[#212121]/80">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 text-[#212121] dark:text-white">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-sm bg-[#212121] dark:bg-white" />
          <span className="font-semibold">{BRAND.name}</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle className="border-[#212121] text-[#212121] hover:bg-[#212121] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#212121]" />
          <Link href="/auth">
            <Button
              variant="outline"
              className="border-[#212121] text-[#212121] hover:bg-[#212121] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#212121] bg-transparent"
            >
              Log in
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
