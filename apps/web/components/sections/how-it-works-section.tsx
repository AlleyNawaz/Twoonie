"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { Link2, TrendingUp, Zap, BarChart3 } from "lucide-react";

const STEPS = [
  { num: "01", icon: Link2, title: "CONNECT", desc: "Link your Canadian bank in 30 seconds via Plaid. Twoonie can see your transactions — never your credentials." },
  { num: "02", icon: TrendingUp, title: "ROUND UP", desc: "Every purchase rounds to the nearest dollar. We track the pennies so you don't have to think about it." },
  { num: "03", icon: Zap, title: "INVEST", desc: "Once your change hits $5, we sweep it into your Solana vault — yield USDC, SOL, jitoSOL." },
  { num: "04", icon: BarChart3, title: "EARN", desc: "Watch your portfolio grow in real time. Withdraw anytime, no penalties, no minimums." },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" style={{ padding: "100px 24px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionReveal>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <p style={{ color: "var(--accent)", fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>How it works</p>
            <h2 className="display-sm" style={{ color: "var(--text-primary)" }}>
              Four steps to <span className="gradient-text">real wealth</span>
            </h2>
          </div>
        </SectionReveal>

        {/* Track */}
        <div style={{ position: "relative" }}>
          {/* Connector line */}
          <div style={{
            position: "absolute",
            top: "56px",
            left: "10%",
            right: "10%",
            height: "2px",
            background: "linear-gradient(90deg, transparent, var(--border-default), var(--accent), var(--border-default), transparent)",
            zIndex: 0,
          }}>
            {/* Traveling coin */}
            <div style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 16px var(--accent-glow)",
              animation: "coinTravel 8s linear infinite",
            }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", position: "relative", zIndex: 1 }} className="steps-grid">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <SectionReveal key={step.num} delay={i * 150}>
                  <div className="glass-card" style={{
                    padding: "32px 24px",
                    textAlign: "center",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    cursor: "default",
                  }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px var(--accent-glow), 0 8px 32px rgba(0,0,0,0.30)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "";
                      (e.currentTarget as HTMLElement).style.boxShadow = "";
                    }}
                  >
                    {/* Icon circle */}
                    <div style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      background: "var(--accent-soft)",
                      border: "1px solid rgba(255,107,53,0.20)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}>
                      <Icon size={22} color="var(--accent)" strokeWidth={1.5} />
                    </div>
                    <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", color: "var(--accent)", letterSpacing: "0.1em", marginBottom: "8px" }}>{step.num}</div>
                    <h3 style={{ fontSize: "16px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "10px", letterSpacing: "0.02em" }}>{step.title}</h3>
                    <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
