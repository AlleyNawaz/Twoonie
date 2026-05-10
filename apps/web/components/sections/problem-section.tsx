"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { CountUp } from "@/components/ui/count-up";

const STATS = [
  { value: 1800, prefix: "$", suffix: "/year", label: "Spare change Canadians round down without thinking", decimals: 0 },
  { value: 0.01, prefix: "", suffix: "% APY", label: "Average chequing-account interest in Canada", decimals: 2 },
  { value: 500, prefix: "$", suffix: "", label: "Minimum deposit at most Canadian robo-advisors", decimals: 0 },
];

export function ProblemSection() {
  return (
    <section id="problem" style={{ background: "var(--bg-tint)", padding: "100px 24px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionReveal>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 className="display-sm" style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
              The average Canadian throws away{" "}
              <span className="gradient-text">$1,800 a year.</span>
            </h2>
          </div>
        </SectionReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="stats-grid">
          {STATS.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 120}>
              <div className="glass-card"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px var(--accent-glow), 0 8px 32px rgba(0,0,0,0.30)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
                style={{ padding: "40px 32px", textAlign: "center", transition: "transform 0.25s ease, box-shadow 0.25s ease", cursor: "default", background: "rgba(22,29,46,0.50)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", boxShadow: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 32px 0 rgba(0,0,0,0.30)" }}
              >
                <div className="stat-card-value" style={{ marginBottom: "12px" }}>
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.6 }}>{stat.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={400}>
          <div style={{
            marginTop: "48px",
            padding: "20px 32px",
            borderRadius: "12px",
            background: "var(--accent-soft)",
            border: "1px solid rgba(255, 107, 53, 0.20)",
            textAlign: "center",
          }}>
            <p style={{ color: "var(--accent-bright)", fontWeight: 500, fontSize: "15px" }}>
              Twoonie fixes all three. No minimums. Real yield. Your spare change finally working.
            </p>
          </div>
        </SectionReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
