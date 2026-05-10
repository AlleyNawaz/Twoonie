"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { Check, X } from "lucide-react";

const ROWS = [
  { feature: "Minimum deposit", twoonie: "$5", ws: "$1", td: "$0", rbc: "$0" },
  { feature: "Account fee", twoonie: "$0/mo", ws: "$0/mo", td: "$4-15", rbc: "$4-15" },
  { feature: "Management fee", twoonie: "0.25%", ws: "0.50%", td: "1.50%", rbc: "1.65%" },
  { feature: "USDC yield", twoonie: "6.2% APY", ws: "N/A", td: "N/A", rbc: "N/A" },
  { feature: "Time to start", twoonie: "2 minutes", ws: "Days", td: "Weeks", rbc: "Weeks" },
];

export function PricingSection() {
  return (
    <section id="pricing" style={{ background: "var(--bg-tint)", padding: "100px 24px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionReveal>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ color: "var(--accent)", fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>Pricing</p>
            <h2 className="display-sm" style={{ color: "var(--text-primary)" }}>
              Simple. <span className="gradient-text">Transparent.</span> Fair.
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={150}>
          <div className="glass-card" style={{ overflow: "hidden" }}>
            <table className="pricing-table" style={{ width: "100%" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-default)" }}>
                  <th style={{ padding: "16px 20px", color: "var(--text-tertiary)", textAlign: "left", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}></th>
                  <th style={{ padding: "16px 20px", color: "var(--accent)", fontWeight: 700, fontSize: "14px", background: "var(--accent-soft)" }}>Twoonie</th>
                  <th style={{ padding: "16px 20px", color: "var(--text-secondary)", fontWeight: 500, fontSize: "13px" }}>Wealthsimple</th>
                  <th style={{ padding: "16px 20px", color: "var(--text-secondary)", fontWeight: 500, fontSize: "13px" }}>TD</th>
                  <th style={{ padding: "16px 20px", color: "var(--text-secondary)", fontWeight: 500, fontSize: "13px" }}>RBC</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.feature} style={{ borderBottom: "1px solid var(--border-faint)" }}>
                    <td style={{ padding: "14px 20px", color: "var(--text-secondary)", fontSize: "14px", fontWeight: 500 }}>{row.feature}</td>
                    <td style={{ padding: "14px 20px", color: "var(--accent)", fontWeight: 600, fontSize: "14px", background: "rgba(255,107,53,0.03)" }}>{row.twoonie}</td>
                    <td style={{ padding: "14px 20px", color: "var(--text-primary)", fontSize: "14px" }}>{row.ws}</td>
                    <td style={{ padding: "14px 20px", color: "var(--text-secondary)", fontSize: "14px" }}>{row.td}</td>
                    <td style={{ padding: "14px 20px", color: "var(--text-secondary)", fontSize: "14px" }}>{row.rbc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionReveal>

        <SectionReveal delay={300}>
          <p style={{ marginTop: "24px", textAlign: "center", color: "var(--text-tertiary)", fontSize: "13px", lineHeight: 1.7, fontStyle: "italic" }}>
            We charge 0.25% only on amounts you&apos;ve earned. Your spare change is free to invest — you only pay when we make you money.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
