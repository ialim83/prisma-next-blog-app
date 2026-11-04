"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BookOpen,
  Newspaper,
  Mail,
  LogIn,
  UserPlus,
  Menu,
  X,
} from "lucide-react";
import { ModeToggle } from "./ModeToggle";

const primaryLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: BookOpen },
  { href: "/blog", label: "Blog", icon: Newspaper },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/dashboard", label: "Dashboard", icon: UserPlus },
];

const accountLinks = [
  { href: "/login", label: "Login", icon: LogIn },
  { href: "/signup", label: "Sign-up", icon: UserPlus },
];

const allLinks = [...primaryLinks, ...accountLinks];

export function NavLinks() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const renderDesktopLink = (link: (typeof allLinks)[number]) => {
    const Icon = link.icon;
    const active = pathname === link.href;

    return (
      <Link
        key={link.href}
        href={link.href}
        aria-current={active ? "page" : undefined}
        className={`flex min-w-20 flex-col items-center justify-center gap-1 rounded-full px-4 py-3 transition-colors ${
          active
            ? "bg-black text-white"
            : "text-black hover:bg-neutral-200"
        }`}
      >
        <Icon size={22} strokeWidth={1.8} />
        <span className="text-sm">{link.label}</span>
      </Link>
    );
  };

  return (
    <header className="relative z-50 w-full">
      <div className="flex w-full items-center justify-center gap-3">
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 rounded-full border border-neutral-200 bg-white p-2 text-black shadow-lg dark:border-neutral-300 dark:bg-white dark:text-black md:flex"
        >
          {primaryLinks.map(renderDesktopLink)}
        </nav>

        <div className="hidden items-center gap-1 rounded-full border border-neutral-200 bg-white p-2 text-black shadow-lg dark:border-neutral-300 dark:bg-white dark:text-black md:flex">
          {accountLinks.map(renderDesktopLink)}
          <ModeToggle />
        </div>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <ModeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex size-10 items-center justify-center rounded-lg text-neutral-800 hover:bg-neutral-200 dark:text-white dark:hover:bg-neutral-800"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`absolute left-0 top-full w-full overflow-hidden border-t border-neutral-200 bg-white shadow-xl transition-all duration-300 dark:border-neutral-800 dark:bg-neutral-900 md:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
          {allLinks.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${
                  active
                    ? "bg-emerald-500/10 font-semibold text-emerald-600 dark:text-emerald-400"
                    : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                }`}
              >
                <Icon size={19} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}


