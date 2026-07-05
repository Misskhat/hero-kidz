"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  // Fixes the bug where home ("/") matches every single page
  const isActive = useMemo(() => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  }, [pathname, href]);

  // Prevents the "false" string bug in class names
  const className = useMemo(() => {
    const baseClasses = "text-black font-semibold";
    const activeClasses = "text-primary outline-1";

    return isActive ? `${baseClasses} ${activeClasses}` : baseClasses;
  }, [isActive]);

  return (
    <Link
      href={href}
      className={className}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
