"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Work", href: "/work" },
  ];
  const pathname = usePathname();
  const styles = {
    active: ["text-[#1F6FFA]"].join(" "),
    default: ["hover:text-[#1F6FFA]"].join(" "),
  };

  return (
    <nav className="flex space-x-4 mt-8">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            className={isActive ? styles.active : styles.default}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
