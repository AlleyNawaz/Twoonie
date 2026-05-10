"use client";

import Link from "next/link";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Github } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section style={{
      padding: "120px 24px",
      position: "relative",
      zIndex: 1,
      textAlign: "center",
      overflow: "hidden",
    }}>
      {/* Warm radial glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(255, 107, 53, 0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "700px", margin: "0 auto", position: "relative" }}>
        <SectionReveal>
          <h2 className="display-sm" style={{ color: "var(--text-primary)", marginBottom: "20px" }}>
            Start with the change{" "}
            <span className="gradient-text">in your pocket.</span>
          </h2>
          <p style={{ fontSize: "18px", color: "var(--text-secondary)", marginBottom: "48px" }}>
            Free to start. No minimums. Cancel anytime.
          </p>

          <Link
            href="/onboarding"
            className="btn-primary btn-large"
            style={{
              fontSize: "20px",
              padding: "22px 56px",
              borderRadius: "16px",
              boxShadow: "0 0 40px var(--accent-glow)",
              animation: "pulse-glow 3s ease-in-out infinite",
              display: "inline-flex",
            }}
          >
            Start with $5 →
          </Link>

          <div style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
            fontFamily: "'Geist Mono', monospace",
            fontSize: "12px",
            color: "var(--text-tertiary)",
          }}>
            {[
              { label: "Open source on GitHub", href: "https://github.com/twoonie-app/twoonie" },
              { label: "Audited code" },
              { label: "MIT licensed" },
            ].map((item) => (
              <span key={item.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "var(--accent)" }}>●</span>
                {item.href ? (
                  <a href={item.href} style={{ color: "var(--text-tertiary)", textDecoration: "none" }} target="_blank" rel="noreferrer">{item.label}</a>
                ) : item.label}
              </span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
