"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer style={{
      background: "var(--bg-tint)",
      borderTop: "1px solid var(--border-faint)",
      padding: "56px 24px 32px",
      position: "relative",
      zIndex: 1,
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px", marginBottom: "48px" }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" fill="url(#fcoin-outer)" />
                <circle cx="14" cy="14" r="9" fill="url(#fcoin-inner)" />
                <text x="14" y="18" textAnchor="middle" fontSize="9" fontWeight="700" fill="rgba(10,15,26,0.8)" fontFamily="serif">2</text>
                <defs>
                  <radialGradient id="fcoin-outer" cx="35%" cy="30%"><stop offset="0%" stopColor="#E8E8E8" /><stop offset="100%" stopColor="#9CA3AF" /></radialGradient>
                  <radialGradient id="fcoin-inner" cx="35%" cy="30%"><stop offset="0%" stopColor="#FFD23F" /><stop offset="100%" stopColor="#FF6B35" /></radialGradient>
                </defs>
              </svg>
              <span style={{ fontWeight: 700, fontSize: "18px", color: "var(--text-primary)" }}>twoonie</span>
            </div>
            <p style={{ fontSize: "13px", color: "var(--text-tertiary)", lineHeight: 1.7, maxWidth: "280px" }}>
              Acorns for Canada, built on Solana. Round-up investing that makes your spare change work harder than your bank account.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Product</h4>
            {["How it works", "Pricing", "Demo", "Dashboard"].map((item) => (
              <div key={item} style={{ marginBottom: "10px" }}>
                <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`} style={{ fontSize: "14px", color: "var(--text-secondary)", textDecoration: "none" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
                >{item}</Link>
              </div>
            ))}
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Resources</h4>
            {[
              { label: "Docs", href: "/docs" },
              { label: "GitHub", href: "https://github.com/twoonie-app/twoonie" },
              { label: "Twitter", href: "https://twitter.com/twoonie_app" },
              { label: "About", href: "/about" },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: "10px" }}>
                <a href={item.href} style={{ fontSize: "14px", color: "var(--text-secondary)", textDecoration: "none" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
                >{item.label}</a>
              </div>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Legal</h4>
            {[{ label: "Terms", href: "/legal/terms" }, { label: "Privacy", href: "/legal/privacy" }].map((item) => (
              <div key={item.label} style={{ marginBottom: "10px" }}>
                <Link href={item.href} style={{ fontSize: "14px", color: "var(--text-secondary)", textDecoration: "none" }}>{item.label}</Link>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border-faint)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "12px", color: "var(--text-tertiary)", fontFamily: "'Geist Mono', monospace" }}>
            © 2026 Twoonie Inc. All rights reserved.
          </p>
          <p style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>
            Built in Canada 🍁 for Frontier Hackathon 2026
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
