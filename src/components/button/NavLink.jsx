"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${path.startsWith(href) && "text-primary outline-1"} text-black font-semibold`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
