"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  ChevronRight,
  FilePenLine,
  LayoutDashboard,
  Search,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navigation = [
  {
    label: "Workspace",
    items: [
      { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { title: "Write a post", href: "/dashboard/write-blog", icon: FilePenLine },
      { title: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    ],
  },
];

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const filteredNavigation = navigation
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.title.toLowerCase().includes(query.trim().toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-sidebar-border shadow-[1px_0_0_0_var(--sidebar-border)] dark:border-r-white/20 dark:shadow-[1px_0_0_0_rgba(255,255,255,0.16)]"
      {...props}
    >
      <SidebarHeader className="px-4 pb-5 pt-5">
        <Link href="/dashboard" className="flex items-center gap-3 outline-none">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <BookOpen className="`size-[18px]`" strokeWidth={2.2} />
          </span>
          <span className="flex min-w-0 flex-col leading-tight group-data-[collapsible=icon]:hidden">
            <span className="truncate text-sm font-semibold tracking-tight">Draft &amp; Publish</span>
            <span className="mt-1 text-xs text-muted-foreground">BLOG STUDIO</span>
          </span>
        </Link>
        <div className="relative mt-3 group-data-[collapsible=icon]:hidden">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <SidebarInput
            aria-label="Search dashboard navigation"
            placeholder="Search navigation"
            className="h-9 rounded-lg pl-9"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {filteredNavigation.map((group) => (
          <SidebarGroup key={group.label} className="p-0">
            <SidebarGroupLabel className="px-3 pb-2 pt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground/75">
              {group.label}
            </SidebarGroupLabel>
            <SidebarMenu className="gap-1">
              {group.items.map(({ title, href, icon: Icon }) => {
                const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(`${href}/`));

                return (
                  <SidebarMenuItem key={href}>
                    <SidebarMenuButton
                      render={<Link href={href} aria-current={active ? "page" : undefined} />}
                      isActive={active}
                      tooltip={title}
                      className="h-10 rounded-lg px-3 text-[13px] font-medium"
                    >
                      <Icon className="`size-[17px]`" strokeWidth={1.8} />
                      <span>{title}</span>
                      {active && <ChevronRight className="ml-auto size-4 opacity-60" />}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-3">
        <Link
          href="/blog"
          className="group flex items-center justify-between gap-2 rounded-xl border bg-background/70 p-3 text-sm transition-colors hover:bg-accent group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:border-transparent group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:p-2"
        >
          <span className="flex min-w-0 items-center gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <BookOpen className="size-4" />
            </span>
            <span className="min-w-0 group-data-[collapsible=icon]:hidden">
              <span className="block text-xs font-medium">Your publication</span>
              <span className="mt-0.5 block text-[11px] text-muted-foreground">Visit your blog</span>
            </span>
          </span>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground group-data-[collapsible=icon]:hidden" />
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
