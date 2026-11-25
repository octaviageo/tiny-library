"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type CategoryNavLinkProps = {
  href: string;
  children: React.ReactNode;
  exact?: boolean;
};

export default function CategoryNavLink({
  href,
  children,
  exact = false,
}: CategoryNavLinkProps) {
  const pathname = usePathname();

  const isActive = exact
    ? pathname === href
    : pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`rounded-full border-2 px-4 py-2 text-sm font-medium transition duration-300 ${
        isActive
          ? "border-black bg-black text-white"
          : "border-gray-300 bg-white text-black hover:border-black hover:bg-black hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}