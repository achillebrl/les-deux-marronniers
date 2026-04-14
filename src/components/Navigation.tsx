"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation({ activePage }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "https://les-deux-marronniers.fr/contact/", label: "Contact", external: true },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(247,243,236,0.96)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(90,138,60,0.12)" : "none",
          padding: scrolled ? "0.75rem 0" : "1.5rem 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.15rem",
                fontWeight: 700,
                color: scrolled ? "#2c1f0e" : "#f7f3ec",
                letterSpacing: "0.02em",
                transition: "color 0.3s",
              }}
            >
              Les Deux Marronniers
            </span>
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: scrolled ? "#5a8a3c" : "rgba(247,243,236,0.6)",
                transition: "color 0.3s",
              }}
            >
              Pension Canine & Élevage
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                  style={{ padding: "0.5rem 1.5rem" }}
                >
                  <span>{link.label}</span>
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "0.95rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color:
                      activePage === link.href
                        ? "#5a8a3c"
                        : scrolled
                        ? "#2c1f0e"
                        : "rgba(247,243,236,0.9)",
                    fontWeight: activePage === link.href ? 600 : 400,
                  }}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                background: scrolled ? "#2c1f0e" : "#f7f3ec",
                transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                background: scrolled ? "#2c1f0e" : "#f7f3ec",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                background: scrolled ? "#2c1f0e" : "#f7f3ec",
                transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <div
        className={`mobile-nav fixed top-0 right-0 h-full w-72 z-50 flex flex-col justify-center px-10 ${menuOpen ? "open" : ""}`}
        style={{ background: "#2c1f0e", boxShadow: "-10px 0 40px rgba(0,0,0,0.3)" }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center"
          aria-label="Close menu"
          style={{ color: "#f7f3ec" }}
        >
          ✕
        </button>

        <p
          className="mb-10 tracking-[0.3em] uppercase text-xs"
          style={{ color: "#7ab354", fontFamily: "var(--font-cormorant)" }}
        >
          Navigation
        </p>

        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="btn-primary text-center"
                style={{ marginTop: "1rem" }}
              >
                <span>{link.label}</span>
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.5rem",
                  color: activePage === link.href ? "#7ab354" : "#f7f3ec",
                  fontWeight: 600,
                  borderBottom: "1px solid rgba(247,243,236,0.08)",
                  paddingBottom: "1rem",
                }}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        <div className="absolute bottom-10 left-10">
          <p
            style={{
              fontFamily: "var(--font-lora)",
              fontSize: "0.8rem",
              color: "rgba(247,243,236,0.4)",
              lineHeight: 1.6,
            }}
          >
            06 47 28 18 28<br />
            Saint-Maximin, Oise
          </p>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}