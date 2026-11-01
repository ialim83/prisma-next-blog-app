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

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: BookOpen },
  { href: "/blog", label: "Blog", icon: Newspaper },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/login", label: "Login", icon: LogIn },
  { href: "/signup", label: "Sign-up", icon: UserPlus },
  { href: "/dashboard", label: "Dashboard", icon: UserPlus },
];

export function NavLinks() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full ">
      <div className="flex items-center justify-center">

      
      {/* Desktop pill navigation */}
      <nav
        aria-label="Main navigation"
        className="hidden md:flex items-center gap-2 rounded-full
    border border-white/80
    `bg-gradient-to-b` from-white via-neutral-100 to-neutral-200
    p-3
    shadow-[0_20px_45px_-15px_rgba(0,0,0,0.3)]
    dark:border-neutral-700
    dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950"
      >
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`flex min-w-24 flex-col items-center justify-center
          gap-2 rounded-full px-5 py-4
          transition-all duration-300
          ${
            active
              ? "bg-neutral-900 text-white shadow-lg dark:bg-white dark:text-neutral-900"
              : "text-neutral-600 hover:bg-neutral-200/70 dark:text-neutral-300 dark:hover:bg-neutral-700"
          }`}
            >
              <Icon size={28} strokeWidth={1.8} />
              <span className="text-base font-normal">{link.label}</span>
            </Link>
          );
        })}
      </nav>
        

      {/* Mobile dropdown menu */}
      {/* Mobile hamburger button */}
      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        className="ml-auto flex size-10 items-center justify-center
    rounded-lg text-neutral-800 hover:bg-neutral-200
    dark:text-white dark:hover:bg-neutral-800 md:hidden"
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

        <ModeToggle></ModeToggle>
      <div
        id="mobile-navigation"
        className={`absolute left-0 top-full w-full overflow-hidden border-t border-neutral-200 bg-white shadow-xl transition-all duration-300 dark:border-neutral-800 dark:bg-neutral-900 md:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
          {links.map((link) => {
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
      </div>
      </div>
    </header>
  );
}
