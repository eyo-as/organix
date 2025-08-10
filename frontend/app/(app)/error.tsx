"use client"

export default function ErrorPage({ error }: { error: Error & { digest?: string } }) {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-2">
      <div className="text-lg font-semibold">Something went wrong</div>
      <div className="text-sm text-muted-foreground">{error.message}</div>
    </div>
  )
}
