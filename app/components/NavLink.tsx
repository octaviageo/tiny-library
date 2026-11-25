"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({href, children, matchPrefix}: {href: string, children: React.ReactNode, matchPrefix?: boolean}) {
    const pathname = usePathname();
    const isActive = matchPrefix
  ? pathname === href || pathname.startsWith(`${href}/`)
  : pathname === href;

    return (
        <Link href={href} className={
    isActive
      ? "font-semibold text-black underline underline-offset-4"
      : "text-black-800 hover:text-black-600 hover:underline hover:underline-offset-4"
  }>
            {children}
        </Link>
    );
}

