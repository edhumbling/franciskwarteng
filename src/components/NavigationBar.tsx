"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/essays", label: "Essays" },
  { href: "/contact", label: "Contact" },
];

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="relative overflow-hidden rounded-xl border border-transparent px-4 py-2 text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(32,139,15,0.35)]"
                  style={{ color: '#e5e5e7' }}
                >
                  <span className="relative z-10">{label}</span>
                </Link>
              ))}
            </nav>

            {/* Hamburger Menu Button */}
            <button
              className="hamburger-button lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu - Full Screen Black Glass */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* Menu Header */}
        <div className="mobile-menu-header">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2" style={{ borderColor: '#208b0f' }}>
              <Image
                src="/photo.jpeg"
                alt="Francis Kwarteng"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-base font-semibold" style={{ color: '#ffffff' }}>Francis Kwarteng</p>
              <p className="text-xs" style={{ color: '#a1a1a6' }}>Biomedical Scientist</p>
            </div>
          </div>
          <button
            className="mobile-menu-close"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Menu Navigation - Large Apple-style Links */}
        <nav className="mobile-menu-nav">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="mobile-menu-link"
              onClick={closeMobileMenu}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Menu Footer */}
        <div className="mobile-menu-footer">
          <p className="text-xs mb-4 uppercase tracking-wider" style={{ color: '#a1a1a6' }}>Connect</p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:kwartengfo@warhawks.ulm.edu"
              className="text-sm transition-colors"
              style={{ color: '#e5e5e7' }}
              onClick={closeMobileMenu}
            >
              kwartengfo@warhawks.ulm.edu
            </a>
            <a
              href="https://www.linkedin.com/in/franciskwarteng-8711bb1ab"
              className="text-sm transition-colors"
              style={{ color: '#e5e5e7' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
