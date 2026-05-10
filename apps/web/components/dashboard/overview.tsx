"use client";

import { useEffect, useRef, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, ArrowUpRight, Zap, DollarSign } from "lucide-react";

const PORTFOLIO_DATA = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(Date.now() - (29 - i) * 86400000).toLocaleDateString("en-CA", { month: "short", day: "numeric" }),
  value: 180 + Math.sin(i * 0.4) * 20 + i * 2.3 + Math.random() * 8,
}));

const DONUT_DATA = [
  { name: "Yield USDC", value: 60, color: "#FF6B35" },
  { name: "SOL", value: 25, color: "#FFA572" },
  { name: "jitoSOL", value: 15, color: "#FFD23F" },
];

const STAT_CARDS = [
  { label: "Total invested", value: "$231.20", icon: DollarSign, change: "+$12.40 this week" },
  { label: "Yield earned", value: "$16.63", icon: TrendingUp, change: "6.2% blended APY" },
  { label: "Round-ups this mo.", value: "47", icon: ArrowUpRight, change: "47 transactions" },
  { label: "Current APY", value: "6.2%", icon: Zap, change: "Across all positions" },
];

const RECENT_ROUNDUPS = [
  { merchant: "Tim Hortons", category: "☕", amount: "$3.75", roundup: "$0.25", status: "Invested", date: "May 9" },
  { merchant: "Sobeys", category: "🛒", amount: "$47.23", roundup: "$0.77", status: "Invested", date: "May 8" },
  { merchant: "TTC Transit", category: "🚌", amount: "$3.20", roundup: "$0.80", status: "Pending sweep", date: "May 8" },
  { merchant: "Petro-Canada", category: "⛽", amount: "$62.45", roundup: "$0.55", status: "Invested", date: "May 7" },
  { merchant: "Loblaws", category: "🛒", amount: "$89.12", roundup: "$0.88", status: "Invested", date: "May 7" },
];

function LiveYieldCounter() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let value = 0.000089;
    const interval = setInterval(() => {
      value += 0.000003 + Math.random() * 0.000002;
      if (ref.current) ref.current.textContent = `+$${value.toFixed(6)} earned just now`;
    }, 1200);
    return () => clearInterval(interval);
  }, []);
  return (
    <span ref={ref} style={{
      fontFamily: "'Geist Mono', monospace",
      fontSize: "13px",
      color: "var(--success)",
      animation: "countPulse 2s ease-in-out infinite",
    }}>
      +$0.000089 earned just now
    </span>
  );
}

export function DashboardOverview() {
  const [timeRange, setTimeRange] = useState("30d");

  return (
    <div>
      {/* Hero block */}
      <div style={{ marginBottom: "40px" }}>
        <p style={{ fontSize: "13px", color: "var(--text-tertiary)", marginBottom: "8px" }}>Your portfolio</p>
        <div className="portfolio-value" style={{ marginBottom: "8px" }}>$247.83</div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "8px" }}>
          <span style={{ color: "var(--success)", fontSize: "14px", fontWeight: 500 }}>↑ $12.40 this week (+5.3%)</span>
        </div>
        <LiveYieldCounter />
      </div>

      {/* Stat cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "32px" }} className="stats-grid-dash">
        {STAT_CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="glass-card" style={{ padding: "20px", transition: "transform 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.transform = ""}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>{card.label}</span>
                <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "var(--accent-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={14} color="var(--accent)" strokeWidth={1.5} />
                </div>
              </div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "var(--text-primary)", fontFamily: "'Geist Mono', monospace", marginBottom: "4px" }}>{card.value}</div>
              <div style={{ fontSize: "11px", color: "var(--text-tertiary)" }}>{card.change}</div>
            </div>
          );
        })}
      </div>

      {/* Charts row */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px", marginBottom: "32px" }} className="charts-grid">
        {/* Area chart */}
        <div className="glass-card" style={{ padding: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)" }}>Portfolio Value</h3>
            <div style={{ display: "flex", gap: "4px" }}>
              {["30d", "90d", "1y", "All"].map((r) => (
                <button key={r} onClick={() => setTimeRange(r)} style={{
                  padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: 500, cursor: "pointer", border: "none",
                  background: timeRange === r ? "var(--accent-soft)" : "transparent",
                  color: timeRange === r ? "var(--accent)" : "var(--text-tertiary)",
                }}>{r}</button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={PORTFOLIO_DATA}>
              <defs>
                <linearGradient id="portfolioGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#FF6B35" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" tick={{ fill: "var(--text-tertiary)", fontSize: 11 }} axisLine={false} tickLine={false} interval={4} />
              <YAxis tick={{ fill: "var(--text-tertiary)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
              <Tooltip
                contentStyle={{ background: "var(--bg-elevated)", border: "1px solid var(--border-default)", borderRadius: "8px", fontSize: "12px" }}
                labelStyle={{ color: "var(--text-secondary)" }}
                formatter={(v: number) => [`$${v.toFixed(2)}`, "Value"]}
              />
              <Area type="monotone" dataKey="value" stroke="#FF6B35" strokeWidth={2} fill="url(#portfolioGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Donut */}
        <div className="glass-card" style={{ padding: "24px" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "20px" }}>Allocation</h3>
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie data={DONUT_DATA} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="value" strokeWidth={0}>
                {DONUT_DATA.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip formatter={(v: number) => [`${v}%`]} contentStyle={{ background: "var(--bg-elevated)", border: "1px solid var(--border-default)", borderRadius: "8px", fontSize: "12px" }} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ marginTop: "12px" }}>
            {DONUT_DATA.map((d) => (
              <div key={d.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "2px", background: d.color }} />
                  <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>{d.name}</span>
                </div>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-primary)", fontFamily: "'Geist Mono', monospace" }}>{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent round-ups */}
      <div className="glass-card" style={{ padding: "24px", marginBottom: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)" }}>Recent Round-ups</h3>
          <span style={{ fontSize: "12px", color: "var(--accent)", cursor: "pointer" }}>View all →</span>
        </div>
        {RECENT_ROUNDUPS.map((r, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: i < RECENT_ROUNDUPS.length - 1 ? "1px solid var(--border-faint)" : "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "var(--bg-surface)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>{r.category}</div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-primary)" }}>{r.merchant}</div>
                <div style={{ fontSize: "12px", color: "var(--text-tertiary)", fontFamily: "'Geist Mono', monospace" }}>{r.amount}</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--accent)", fontFamily: "'Geist Mono', monospace" }}>+{r.roundup}</span>
              <span className={r.status === "Invested" ? "pill-invested" : "pill-pending"}>{r.status}</span>
              <span style={{ fontSize: "11px", color: "var(--text-tertiary)" }}>{r.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {["Withdraw funds", "Change risk profile", "Boost round-ups 2x"].map((action) => (
          <button key={action} className="btn-ghost" style={{ fontSize: "13px", padding: "10px 18px" }}>{action}</button>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) { .stats-grid-dash { grid-template-columns: repeat(2, 1fr) !important; } .charts-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { .stats-grid-dash { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
