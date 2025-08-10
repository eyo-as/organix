"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AuthPage() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-white text-[#212121] dark:bg-[#212121] dark:text-white">
      <Card className="w-full max-w-md border border-[#212121]/15 bg-white dark:border-white/20 dark:bg-[#212121]">
        <CardHeader className="space-y-1">
          <CardTitle>Welcome</CardTitle>
          <CardDescription className="text-[#212121]/70 dark:text-white/70">
            Log in or create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form className="grid gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@domain.com" required className="border-[#212121]/20" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required className="border-[#212121]/20" />
            </div>
            <Button
              type="submit"
              className="mt-2 w-full bg-[#212121] text-white hover:bg-[#212121]/90 dark:bg-white dark:text-[#212121] dark:hover:bg-white/90"
            >
              Continue
            </Button>
          </form>
          <div className="text-center text-sm">
            <span className="text-[#212121]/70 dark:text-white/70">Just exploring? </span>
            <a href="/dashboard" className="underline hover:no-underline">
              Continue to demo →
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
