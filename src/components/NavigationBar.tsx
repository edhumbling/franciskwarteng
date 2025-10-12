"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/essays", label: "Essays" },
  { href: "/contact", label: "Contact" },
];

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? "translate-y-0 opacity-100" : "translate-y-0"
        }`}
      >
        <div className="amazon-container">
          <div className="amazon-card flex items-center justify-between gap-3 rounded-xl md:rounded-2xl px-3 md:px-6 py-2 md:py-4 shadow-lg">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 group flex-shrink-0">
              <div className="relative h-9 w-9 md:h-11 md:w-11 overflow-hidden rounded-full border-2 border-green-600 flex-shrink-0" style={{ borderColor: '#208b0f' }}>
                <Image
                  src="/photo.jpeg"
                  alt="Francis Kwarteng"
                  fill
                  sizes="(max-width: 768px) 36px, 44px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.28em]" style={{ color: '#a1a1a6' }}>
                  Biomedical Scientist
                </p>
                <p className="text-sm md:text-lg font-semibold transition-colors" style={{ color: '#ffffff' }}>
                  Francis Kwarteng
                </p>
              </div>
            </Link>

            {/* Navigation - All Devices */}
            <nav className="flex items-center gap-3 ml-auto">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="relative overflow-hidden rounded-xl border border-transparent px-4 py-2 text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(32,139,15,0.35)]"
                  style={{ 
                    color: '#e5e5e7',
                    fontFamily: 'Micholate, Amazon Ember, sans-serif',
                    letterSpacing: '0.8px'
                  }}
                >
                  <span className="relative z-10">{label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
