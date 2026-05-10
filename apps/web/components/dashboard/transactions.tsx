"use client";

import { useState } from "react";

const ALL_TXS = [
  { merchant: "Tim Hortons", category: "☕ Food", amount: "$3.75", roundup: "$0.25", date: "May 9", hasRoundup: true },
  { merchant: "Sobeys", category: "🛒 Groceries", amount: "$47.23", roundup: "$0.77", date: "May 8", hasRoundup: true },
  { merchant: "TTC Transit", category: "🚌 Transit", amount: "$3.20", roundup: "$0.80", date: "May 8", hasRoundup: true },
  { merchant: "Petro-Canada", category: "⛽ Gas", amount: "$62.45", roundup: "$0.55", date: "May 7", hasRoundup: true },
  { merchant: "Loblaws", category: "🛒 Groceries", amount: "$89.12", roundup: "$0.88", date: "May 7", hasRoundup: true },
  { merchant: "Netflix", category: "📺 Streaming", amount: "$18.99", roundup: "$0.01", date: "May 6", hasRoundup: true },
  { merchant: "Shoppers Drug Mart", category: "💊 Pharmacy", amount: "$24.37", roundup: "$0.63", date: "May 6", hasRoundup: true },
  { merchant: "Starbucks", category: "☕ Food", amount: "$7.50", roundup: "$0.50", date: "May 5", hasRoundup: true },
  { merchant: "Cineplex", category: "🎬 Entertainment", amount: "$14.99", roundup: "$0.01", date: "May 5", hasRoundup: true },
  { merchant: "Amazon.ca", category: "📦 Shopping", amount: "$43.82", roundup: "$0.18", date: "May 4", hasRoundup: true },
];

export function DashboardTransactions() {
  const [search, setSearch] = useState("");
  const [roundupOnly, setRoundupOnly] = useState(false);

  const filtered = ALL_TXS.filter(
    (tx) =>
      tx.merchant.toLowerCase().includes(search.toLowerCase()) &&
      (!roundupOnly || tx.hasRoundup)
  );

  return (
    <div>
      <h2 style={{ fontSize: "24px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "24px" }}>Transactions</h2>

      {/* Filters */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search merchants..."
          style={{
            flex: 1, minWidth: "200px",
            padding: "10px 16px",
            borderRadius: "10px",
            border: "1px solid var(--border-default)",
            background: "var(--bg-elevated)",
            color: "var(--text-primary)",
            fontSize: "14px",
            outline: "none",
          }}
        />
        <button
          onClick={() => setRoundupOnly(!roundupOnly)}
          style={{
            padding: "10px 16px",
            borderRadius: "10px",
            border: "1px solid " + (roundupOnly ? "var(--accent)" : "var(--border-default)"),
            background: roundupOnly ? "var(--accent-soft)" : "var(--bg-elevated)",
            color: roundupOnly ? "var(--accent)" : "var(--text-secondary)",
            fontSize: "13px",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          Has round-up
        </button>
      </div>

      <div className="glass-card" style={{ overflow: "hidden" }}>
        {filtered.map((tx, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "16px 24px",
            borderBottom: i < filtered.length - 1 ? "1px solid var(--border-faint)" : "none",
            transition: "background 0.15s",
          }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "rgba(255,107,53,0.03)"}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "transparent"}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "var(--bg-surface)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>
                {tx.category.split(" ")[0]}
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-primary)" }}>{tx.merchant}</div>
                <div style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>{tx.category.split(" ").slice(1).join(" ")} · {tx.date}</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span style={{ fontSize: "14px", color: "var(--text-primary)", fontFamily: "'Geist Mono', monospace" }}>{tx.amount}</span>
              {tx.hasRoundup && (
                <span style={{ fontSize: "13px", color: "var(--accent)", fontFamily: "'Geist Mono', monospace", fontWeight: 600 }}>
                  +{tx.roundup}
                </span>
              )}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ padding: "40px", textAlign: "center", color: "var(--text-tertiary)" }}>No transactions found.</div>
        )}
      </div>
    </div>
  );
}
