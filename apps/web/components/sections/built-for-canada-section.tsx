"use client";

import { SectionReveal } from "@/components/ui/section-reveal";

export function BuiltForCanadaSection() {
  return (
    <section style={{ padding: "100px 24px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionReveal>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 className="display-sm" style={{ color: "var(--text-primary)" }}>
              The on-ramp for the next{" "}
              <span className="gradient-text">10 million Canadians</span>
            </h2>
          </div>
        </SectionReveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="canada-grid">
          <SectionReveal>
            <div>
              <p style={{ fontSize: "17px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "24px" }}>
                10 million Canadians don&apos;t have an investment account. Not because they don&apos;t want to invest.
                Because investing feels like a wall. $500 minimums. Confusing forms. Banks that talk down to you.
              </p>
              <p style={{ fontSize: "17px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "24px" }}>
                IG Wealth Management has spent 100 years helping Canadians build wealth. Twoonie is the on-ramp
                for the next 10 million who think they can&apos;t afford to start.
              </p>
              <p style={{ fontSize: "17px", color: "var(--accent-bright)", lineHeight: 1.8, fontWeight: 500 }}>
                We&apos;re not competing with IGWM — we&apos;re their feeder.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            {/* Maple leaf constellation SVG */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <MapleConstellation />
            </div>
          </SectionReveal>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .canada-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function MapleConstellation() {
  const dots: [number, number][] = [
    [120, 40], [160, 50], [200, 30], [240, 50], [280, 40],
    [100, 80], [140, 90], [180, 70], [220, 90], [260, 80], [300, 70],
    [80, 120], [120, 130], [160, 120], [200, 140], [240, 120], [280, 130], [320, 120],
    [60, 160], [100, 170], [140, 155], [200, 175], [260, 155], [300, 170], [340, 160],
    [80, 200], [130, 205], [200, 210], [270, 205], [320, 200],
    [100, 240], [160, 250], [200, 245], [240, 250], [300, 240],
    [140, 280], [180, 290], [200, 285], [220, 290], [260, 280],
    [180, 320], [200, 325], [220, 320],
    [200, 360],
  ];

  const lines: [number, number, number, number][] = [
    [120, 40, 200, 30], [200, 30, 280, 40], [160, 50, 140, 90], [240, 50, 260, 80],
    [100, 80, 80, 120], [300, 70, 320, 120], [200, 140, 200, 175], [200, 245, 200, 285],
    [200, 325, 200, 360],
  ];

  return (
    <svg viewBox="0 0 400 400" width="360" height="360" style={{ opacity: 0.85 }}>
      {lines.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,107,53,0.15)" strokeWidth="1" />
      ))}
      {dots.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === Math.floor(dots.length / 2) ? 5 : 2.5}
          fill={i % 3 === 0 ? "var(--accent)" : i % 3 === 1 ? "var(--secondary)" : "rgba(255,255,255,0.3)"}
          style={{ animation: `dotPulse ${2 + (i % 3) * 0.5}s ease-in-out infinite`, animationDelay: `${(i * 0.1) % 2}s` }}
        />
      ))}
    </svg>
  );
}
