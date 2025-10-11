"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/essays", label: "Essays" },
  { href: "/contact", label: "Contact" },
];

export default function NavigationBar() {
  return (
    <header className="amazon-nav">
      <div className="amazon-nav-content">
        <Link href="/" className="amazon-nav-brand">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/photo.jpeg"
              alt="Francis Kwarteng"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <span>Francis Kwarteng</span>
        </Link>

        <nav className="amazon-nav-links">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="amazon-nav-link">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
