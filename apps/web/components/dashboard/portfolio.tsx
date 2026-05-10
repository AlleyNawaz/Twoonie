"use client";

import { useState } from "react";

const POSITIONS = [
  {
    name: "Yield USDC", symbol: "USDC", emoji: "💵",
    balance: "$148.70", apy: "6.2%", yield: "$9.22", color: "#FF6B35",
    desc: "Deposited in Kamino Finance for maximum stable yield.",
  },
  {
    name: "SOL", symbol: "SOL", emoji: "◎",
    balance: "$61.96", apy: "N/A", change24h: "+2.3%", color: "#FFA572",
    desc: "Native Solana held for network participation and growth.",
  },
  {
    name: "jitoSOL", symbol: "jitoSOL", emoji: "🌊",
    balance: "$37.17", apy: "7.1%", yield: "$2.64", color: "#FFD23F",
    desc: "Liquid staking via Jito — earn MEV rewards + staking yield.",
  },
];

const PROFILES = [
  { id: "SAFE", label: "Safe", allocations: "80% USDC / 20% SOL / 0% jitoSOL", projected1y: "$260", projected5y: "$285" },
  { id: "BALANCED", label: "Balanced", allocations: "60% USDC / 25% SOL / 15% jitoSOL", projected1y: "$278", projected5y: "$340" },
  { id: "GROWTH", label: "Growth", allocations: "30% USDC / 40% SOL / 30% jitoSOL", projected1y: "$298", projected5y: "$420" },
];

export function DashboardPortfolio() {
  const [profile, setProfile] = useState("BALANCED");

  return (
    <div>
      <h2 style={{ fontSize: "24px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "32px" }}>Portfolio</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
        {POSITIONS.map((pos) => (
          <div key={pos.name} className="glass-card" style={{ padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "transform 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.transform = ""}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${pos.color}20`, border: `1px solid ${pos.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>{pos.emoji}</div>
              <div>
                <div style={{ fontSize: "16px", fontWeight: 600, color: "var(--text-primary)" }}>{pos.name}</div>
                <div style={{ fontSize: "12px", color: "var(--text-tertiary)", marginTop: "2px" }}>{pos.desc}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)", fontFamily: "'Geist Mono', monospace" }}>{pos.balance}</div>
                {pos.apy && pos.apy !== "N/A" && <div style={{ fontSize: "12px", color: "var(--success)" }}>APY {pos.apy}</div>}
                {pos.change24h && <div style={{ fontSize: "12px", color: "var(--success)" }}>{pos.change24h} 24h</div>}
              </div>
              <button className="btn-ghost" style={{ fontSize: "12px", padding: "8px 16px" }}>Withdraw</button>
            </div>
          </div>
        ))}
      </div>

      {/* Rebalance */}
      <div className="glass-card" style={{ padding: "28px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "20px" }}>Risk Profile</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "24px" }}>
          {PROFILES.map((p) => (
            <button key={p.id} onClick={() => setProfile(p.id)} style={{
              padding: "18px 16px",
              borderRadius: "12px",
              border: profile === p.id ? "1px solid var(--accent)" : "1px solid var(--border-faint)",
              background: profile === p.id ? "var(--accent-soft)" : "transparent",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s",
            }}>
              <div style={{ fontSize: "15px", fontWeight: 600, color: profile === p.id ? "var(--accent)" : "var(--text-primary)", marginBottom: "6px" }}>{p.label}</div>
              <div style={{ fontSize: "11px", color: "var(--text-tertiary)" }}>{p.allocations}</div>
            </button>
          ))}
        </div>
        {(() => {
          const p = PROFILES.find((x) => x.id === profile)!;
          return (
            <div style={{ padding: "16px", background: "var(--bg-surface)", borderRadius: "10px", display: "flex", gap: "32px" }}>
              <div><div style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>In 1 year</div><div style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)", fontFamily: "'Geist Mono', monospace" }}>{p.projected1y}</div></div>
              <div><div style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>In 5 years</div><div style={{ fontSize: "18px", fontWeight: 700, color: "var(--accent)", fontFamily: "'Geist Mono', monospace" }}>{p.projected5y}</div></div>
            </div>
          );
        })()}
        <button className="btn-primary" style={{ marginTop: "16px", fontSize: "13px", padding: "10px 20px" }}>Apply {PROFILES.find((p) => p.id === profile)?.label} profile</button>
      </div>
    </div>
  );
}
