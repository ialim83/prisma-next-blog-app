import Link from "next/link";
import React from "react";

export default function PracticeLayout({
  children,
  marketingSlot,
  salesSlot,
}: {
  children: React.ReactNode;
  marketingSlot: React.ReactNode;
  salesSlot: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex gap-10 m-8">
        <Link href="/development" className="text-blue-500 hover:underline">
          Development
        </Link>
        <Link href="/marketing" className="text-blue-500 hover:underline">
          Marketing
        </Link>
        {/* <Link
          href="/marketing/settings"
          className="text-blue-500 hover:underline"
        >
          Settings
        </Link> */}
        <Link href="/sales" className="text-blue-500 hover:underline">
          Sales
        </Link>
      </nav>
      <div className="flex gap-4">
        {marketingSlot}
        {salesSlot}
      </div>

      {children}
    </div>
  );
}
