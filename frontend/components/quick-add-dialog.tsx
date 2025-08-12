"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function QuickAddDialog() {
  const [open, setOpen] = React.useState(false);

  function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-[#000] text-white hover:bg-[#000]/90 dark:bg-white dark:text-[#000] dark:hover:bg-white/90">
          <Plus className="h-4 w-4" />
          Quick Add
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg border-[#000]/15 bg-white text-[#000] dark:border-white/20 dark:bg-[#000] dark:text-white">
        <DialogHeader>
          <DialogTitle>Quick Add Task</DialogTitle>
          <DialogDescription className="text-[#000]/70 dark:text-white/70">
            Add a task to your inbox or a project.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleCreate} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="e.g., Draft project plan"
              required
              className="border-[#000]/20"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Optional details"
              className="border-[#000]/20"
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-[#000] text-white hover:bg-[#000]/90 dark:bg-white dark:text-[#000] dark:hover:bg-white/90"
            >
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
