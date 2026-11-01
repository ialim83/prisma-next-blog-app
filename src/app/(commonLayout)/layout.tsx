import { NavLinks } from "@/components/layout/NavLinks";
import React from "react";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    <NavLinks/>
    {children}</div>;
}
