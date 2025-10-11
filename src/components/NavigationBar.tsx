"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import SearchComponent from "./SearchComponent";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/essays", label: "Essays" },
  { href: "/contact", label: "Contact" },
  { href: "/index", label: "Index" },
  { href: "/sitemap", label: "Site Map" },
];

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? "translate-y-0 opacity-100" : "translate-y-0"
      }`}
    >
      <div className="main-container">
        <div className="glass-panel flex items-center justify-between gap-6 rounded-2xl px-6 py-4 shadow-accent">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[rgba(45,212,191,0.45)]">
              <Image
                src="/photo.jpeg"
                alt="Francis Kwarteng"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[rgba(148,163,184,0.8)]">
                Biomedical Scientist
              </p>
              <p className="text-lg font-semibold text-white transition-colors group-hover:text-[rgba(94,234,212,0.95)]">
                Francis Kwarteng
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative overflow-hidden rounded-xl border border-transparent px-4 py-2 text-sm font-medium text-[rgba(203,213,225,0.75)] transition-all duration-300 hover:border-[rgba(94,234,212,0.25)] hover:text-[rgba(94,234,212,0.95)] hover:shadow-[0_0_20px_rgba(45,212,191,0.35)]"
              >
                <span className="relative z-10">{label}</span>
                <span className="absolute inset-0 bg-[rgba(11,28,46,0.75)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block w-64">
            <SearchComponent />
          </div>

          <div className="md:hidden">
            <SearchComponent />
          </div>
        </div>
      </div>
    </header>
  );
}
