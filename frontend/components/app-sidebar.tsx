"use client";

import type React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Home, KanbanIcon as LayoutKanban } from "lucide-react";
import { BRAND } from "./brand";

const navItems = [
  { title: "Dashboard", href: "/dashboard", icon: Home },
  { title: "Tasks", href: "/tasks", icon: LayoutKanban },
];

export function AppSidebar() {
  const pathname = usePathname();

  // Override sidebar theme to pure white/black using its CSS variables.
  // Values are HSL strings expected by the shadcn sidebar primitives. [^1]
  const sidebarVars = {
    "--sidebar-background": "0 0% 100%",
    "--sidebar-foreground": "0 0% 0%",
    "--sidebar-accent": "0 0% 92%",
    "--sidebar-accent-foreground": "0 0% 13%",
    "--sidebar-border": "0 0% 13%",
    "--sidebar-ring": "0 0% 13%",
  } as React.CSSProperties;

  return (
    <Sidebar collapsible="icon" style={sidebarVars}>
      <SidebarContent>
        <SidebarGroup className="pt-4">
          <div className="mb-3 flex items-center gap-2 px-2 text-[#000] dark:text-white">
            <div className="h-4 w-4 rounded-sm bg-[#000] dark:bg-white" />
            <span className="text-sm font-semibold">{BRAND.name}</span>
          </div>
          <SidebarGroupLabel className="text-xs text-[#000]/60 dark:text-white/60">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className="data-[active=true]:bg-[#000] data-[active=true]:text-white hover:bg-[#000] hover:text-white"
                  >
                    <Link href={item.href} className="text-sm">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
