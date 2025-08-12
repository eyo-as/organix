"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Task = {
  id: string
  title: string
  done?: boolean
  due?: string
}

const initial: Task[] = [
  { id: "1", title: "Design hero section", due: "Today" },
  { id: "2", title: "Draft project plan", due: "Tomorrow" },
]

export default function TasksPage() {
  const [tasks, setTasks] = React.useState<Task[]>(initial)
  const [newTitle, setNewTitle] = React.useState("")
  const [editing, setEditing] = React.useState<string | null>(null)
  const [filter, setFilter] = React.useState<"all" | "open" | "done">("all")

  function addTask(e: React.FormEvent) {
    e.preventDefault()
    if (!newTitle.trim()) return
    setTasks((prev) => [{ id: crypto.randomUUID(), title: newTitle.trim() }, ...prev])
    setNewTitle("")
  }

  function toggleDone(id: string) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  const visible = tasks.filter((t) => (filter === "all" ? true : filter === "open" ? !t.done : !!t.done))

  return (
    <div className="mx-auto w-full max-w-3xl space-y-4 text-[#212121] dark:text-white">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold">Tasks</h2>
        <div className="flex items-center gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={`${
              filter === "all"
                ? "bg-[#212121] text-white hover:bg-[#212121]/90 dark:bg-white dark:text-[#212121] dark:hover:bg-white/90"
                : "border-[#212121] text-[#212121] hover:bg-[#212121] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#212121]"
            }`}
          >
            All
          </Button>
          <Button
            variant={filter === "open" ? "default" : "outline"}
            onClick={() => setFilter("open")}
            className={`${
              filter === "open"
                ? "bg-[#212121] text-white hover:bg-[#212121]/90 dark:bg-white dark:text-[#212121] dark:hover:bg-white/90"
                : "border-[#212121] text-[#212121] hover:bg-[#212121] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#212121]"
            }`}
          >
            Open
          </Button>
          <Button
            variant={filter === "done" ? "default" : "outline"}
            onClick={() => setFilter("done")}
            className={`${
              filter === "done"
                ? "bg-[#212121] text-white hover:bg-[#212121]/90 dark:bg-white dark:text-[#212121] dark:hover:bg-white/90"
                : "border-[#212121] text-[#212121] hover:bg-[#212121] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#212121]"
            }`}
          >
            Done
          </Button>
        </div>
      </div>

      <Card className="border border-[#212121]/15 bg-white dark:border-white/20 dark:bg-[#212121]">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Quick add</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={addTask} className="flex gap-2">
            <Input
              placeholder="Add a task..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="h-9 border-[#212121]/20"
            />
            <Button
              type="submit"
              className="bg-[#212121] text-white hover:bg-[#212121]/90 dark:bg-white dark:text-[#212121] dark:hover:bg-white/90"
            >
              Add
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="border border-[#212121]/15 bg-white dark:border-white/20 dark:bg-[#212121]">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">List</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="divide-y divide-[#212121]/10 dark:divide-white/10">
            {visible.map((t) => (
              <li key={t.id} className="flex items-center gap-3 px-4 py-3">
                <button
                  aria-label={t.done ? "Mark as not done" : "Mark as done"}
                  className={`h-4 w-4 rounded-sm border border-[#212121] dark:border-white ${
                    t.done ? "bg-[#212121] dark:bg-white" : "bg-transparent"
                  }`}
                  onClick={() => toggleDone(t.id)}
                />
                {editing === t.id ? (
                  <InlineEditor
                    defaultValue={t.title}
                    onCancel={() => setEditing(null)}
                    onSave={(val) => {
                      setTasks((prev) => prev.map((x) => (x.id === t.id ? { ...x, title: val } : x)))
                      setEditing(null)
                    }}
                  />
                ) : (
                  <button
                    className={`flex-1 text-left text-sm ${t.done ? "opacity-60 line-through" : ""}`}
                    onClick={() => setEditing(t.id)}
                  >
                    {t.title}
                  </button>
                )}
                <div className="text-xs opacity-60">{t.due ?? ""}</div>
              </li>
            ))}
            {visible.length === 0 && (
              <li className="px-4 py-8 text-center text-sm opacity-60">Nothing here. Enjoy the calm.</li>
            )}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

function InlineEditor({
  defaultValue,
  onCancel,
  onSave,
}: {
  defaultValue: string
  onCancel: () => void
  onSave: (value: string) => void
}) {
  const [value, setValue] = React.useState(defaultValue)
  return (
    <div className="flex w-full items-center gap-2">
      <Input value={value} onChange={(e) => setValue(e.target.value)} className="h-8 border-[#212121]/20" />
      <Button
        size="sm"
        onClick={() => onSave(value)}
        className="bg-[#212121] text-white hover:bg-[#212121]/90 dark:bg-white dark:text-[#212121] dark:hover:bg-white/90"
      >
        Save
      </Button>
      <Button size="sm" variant="ghost" onClick={onCancel} className="hover:bg-[#212121]/10 dark:hover:bg-white/10">
        Cancel
      </Button>
    </div>
  )
}
