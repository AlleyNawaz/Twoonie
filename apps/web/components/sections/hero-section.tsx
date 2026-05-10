"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ToonieSceneLazy } from "@/components/3d/toonie-scene-lazy";

export function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "120px",
        paddingBottom: "80px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="hero-grid">
          {/* LEFT COLUMN */}
          <div>
            {/* H1 */}
            <motion.h1
              className="display-lg"
              style={{ marginBottom: "28px", color: "var(--text-primary)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Turn everyday spending into{" "}
              <span className="gradient-text">long term investing.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              style={{ fontSize: "18px", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "40px", maxWidth: "500px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              Round up your everyday purchases and automatically invest the spare change on Solana. Simple, passive, and built for long term growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link href="/onboarding" className="btn-primary btn-large">
                Start with $5 →
              </Link>
              <Link href="/demo" className="btn-ghost btn-large">
                Watch the demo
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              style={{
                display: "flex",
                gap: "24px",
                flexWrap: "wrap",
                fontFamily: "'Geist Mono', monospace",
                fontSize: "12px",
                color: "var(--text-tertiary)",
              }}
            >
              {["No minimums", "No monthly fees", "Pull out any time"].map((item) => (
                <span key={item} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ color: "var(--success)" }}>●</span>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN — 3D scene */}
          <motion.div
            style={{ height: "520px", position: "relative" }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <ToonieSceneLazy />
            {/* Glow under coin */}
            <div style={{
              position: "absolute",
              bottom: "60px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "200px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(255, 107, 53, 0.20)",
              filter: "blur(20px)",
              pointerEvents: "none",
            }} />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
