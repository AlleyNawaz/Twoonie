"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Solana", href: "#why-solana" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Magnetic CTA effect
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const dist = Math.sqrt(x * x + y * y);
      if (dist < 80) {
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      }
    };

    const handleMouseLeave = () => {
      btn.style.transform = "";
    };

    window.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{
        position: "fixed",
        top: "16px",
        left: "50%",
        width: "calc(100% - 32px)",
        maxWidth: "900px",
        zIndex: 1000,
      }}
    >
      <nav className="navbar-pill" style={{ padding: "12px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <TwoonieLogo />
            <span style={{ fontWeight: 700, fontSize: "18px", color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              twoonie
            </span>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }} className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link
              href="/login"
              style={{
                color: "var(--text-secondary)",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                padding: "8px 14px",
              }}
            >
              Login
            </Link>
            <Link
              href="/onboarding"
              ref={btnRef}
              className="btn-primary"
              style={{ padding: "9px 20px", fontSize: "14px", transition: "transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease" }}
            >
              Start with $5 →
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: "none",
                background: "transparent",
                border: "none",
                color: "var(--text-primary)",
                cursor: "pointer",
                padding: "4px",
              }}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{ overflow: "hidden", paddingTop: "12px" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", borderTop: "1px solid var(--border-faint)", paddingTop: "12px" }}>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      padding: "10px 12px",
                      color: "var(--text-secondary)",
                      fontSize: "14px",
                      textDecoration: "none",
                      borderRadius: "8px",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/onboarding"
                  className="btn-primary"
                  style={{ marginTop: "8px", justifyContent: "center" }}
                >
                  Start with $5 →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.header>
  );
}

function TwoonieLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="13" fill="url(#coin-outer)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      <circle cx="14" cy="14" r="9" fill="url(#coin-inner)" />
      <text x="14" y="18" textAnchor="middle" fontSize="9" fontWeight="700" fill="rgba(15,22,35,0.9)" fontFamily="serif">2</text>
      <defs>
        <radialGradient id="coin-outer" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </radialGradient>
        <radialGradient id="coin-inner" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#FFD23F" />
          <stop offset="100%" stopColor="#FF6B35" />
        </radialGradient>
      </defs>
    </svg>
  );
}
