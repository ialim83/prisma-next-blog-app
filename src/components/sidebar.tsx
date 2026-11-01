"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const pageTitles: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/write-blog": "Write a post",
  "/dashboard/analytics": "Analytics",
};

export default function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const title = pageTitles[pathname] ?? "Dashboard";

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-h-svh">
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-3 border-b bg-background/90 px-4 backdrop-blur-sm md:px-7">
          <SidebarTrigger className="-ml-1 rounded-lg" aria-label="Toggle sidebar" />
          <Separator orientation="vertical" className="h-5" />
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Workspace</span>
            <ChevronRight className="size-3.5 text-muted-foreground/60" />
            <span className="font-medium">{title}</span>
          </div>
        </header>
        <div className="flex flex-1 flex-col">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
