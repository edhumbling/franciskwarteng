"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import SearchComponent from "./SearchComponent";

const navLinks = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/about", label: "About", icon: "👤" },
  { href: "/projects", label: "Projects", icon: "🔬" },
  { href: "/essays", label: "Essays", icon: "✍️" },
  { href: "/contact", label: "Contact", icon: "📧" },
];

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when clicking outside
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
              <div className="relative h-9 w-9 md:h-11 md:w-11 overflow-hidden rounded-full border border-amazon-accent flex-shrink-0">
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
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.28em] text-secondary">
                  Biomedical Scientist
                </p>
                <p className="text-sm md:text-lg font-semibold text-primary transition-colors group-hover:text-accent">
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
                  className="relative overflow-hidden rounded-xl border border-transparent px-4 py-2 text-sm font-medium text-secondary transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(0,212,170,0.35)]"
                >
                  <span className="relative z-10">{label}</span>
                  <span className="absolute inset-0 bg-[rgba(0,212,170,0.1)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>

            {/* Desktop Search */}
            <div className="hidden md:block w-48 lg:w-64">
              <SearchComponent />
            </div>

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

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* Menu Header */}
        <div className="mobile-menu-header">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-amazon-accent">
              <Image
                src="/photo.jpeg"
                alt="Francis Kwarteng"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">Francis Kwarteng</p>
              <p className="text-xs text-muted">Biomedical Scientist</p>
            </div>
          </div>
          <button
            className="mobile-menu-close"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Menu Search */}
        <div className="p-4 border-b border-amazon-border">
          <SearchComponent />
        </div>

        {/* Menu Navigation */}
        <nav className="mobile-menu-nav">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className="mobile-menu-link"
              onClick={closeMobileMenu}
            >
              <span className="mr-3 text-xl">{icon}</span>
              {label}
            </Link>
          ))}
        </nav>

        {/* Menu Footer */}
        <div className="mobile-menu-footer">
          <p className="text-xs text-muted mb-3">Connect with Francis</p>
          <div className="flex gap-3">
            <a
              href="mailto:kwartengfo@warhawks.ulm.edu"
              className="flex-1 amazon-button text-center text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/franciskwarteng-8711bb1ab"
              className="flex-1 amazon-button text-center text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
