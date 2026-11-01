"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const periods = [
    { label: "Weekly", href: "/dashboard/analytics/weekly" },
    { label: "Monthly", href: "/dashboard/analytics/monthly" },
    { label: "Analytics", href: "/dashboard/analytics" },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <nav aria-label="Analytics period" className="flex gap-2 border-b px-4 py-3 md:px-7">
        {periods.map(({ label, href }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={buttonVariants({
                variant: active ? "default" : "outline",
                className: "min-w-24 border-2 border-red-500",
              })}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      {children}
    </div>
  );
}
