"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { CountUp } from "@/components/ui/count-up";
import { Zap, TrendingUp, Clock } from "lucide-react";

const CARDS = [
  {
    icon: Zap,
    value: 0.0005,
    prefix: "$",
    suffix: "",
    decimals: 4,
    label: "per transaction",
    desc: "Round-ups would be impossible on Ethereum — gas alone would eat the investment. Solana's micro-fees finally make this work.",
  },
  {
    icon: TrendingUp,
    value: 6.2,
    prefix: "",
    suffix: "% USDC yield",
    decimals: 1,
    label: "via Kamino Finance",
    desc: "Your USDC earns yield 600x better than a Canadian chequing account. Real, on-chain, transparent.",
  },
  {
    icon: Clock,
    value: 3,
    prefix: "",
    suffix: " seconds",
    decimals: 0,
    label: "to settlement",
    desc: "Your spare change becomes invested in under 3 seconds. Compare to 2-3 business days for a bank transfer.",
  },
];

export function WhySolanaSection() {
  return (
    <section id="why-solana" style={{ background: "var(--bg-tint)", padding: "100px 24px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionReveal>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p style={{ color: "var(--accent)", fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>Why Solana</p>
            <h2 className="display-sm" style={{ color: "var(--text-primary)" }}>
              The only chain where{" "}
              <span className="gradient-text">$0.30 round-ups</span>{" "}
              make sense.
            </h2>
          </div>
        </SectionReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="solana-grid">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <SectionReveal key={card.label} delay={i * 120}>
                <div className="glass-card" style={{
                  padding: "40px 32px",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px var(--accent-glow), 0 8px 32px rgba(0,0,0,0.30)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "var(--accent-soft)",
                    border: "1px solid rgba(255,107,53,0.20)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}>
                    <Icon size={20} color="var(--accent)" strokeWidth={1.5} />
                  </div>
                  <div className="stat-card-value" style={{ marginBottom: "4px", fontSize: "36px" }}>
                    <CountUp end={card.value} prefix={card.prefix} suffix={card.suffix} decimals={card.decimals} />
                  </div>
                  <div style={{ color: "var(--text-tertiary)", fontFamily: "'Geist Mono', monospace", fontSize: "12px", marginBottom: "16px" }}>{card.label}</div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.65 }}>{card.desc}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .solana-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
