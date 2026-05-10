"use client";

const ROUNDUPS = [
  { merchant: "Tim Hortons", amount: "$0.25", status: "SWEPT", txSig: "3xR7...Ab2", date: "May 9" },
  { merchant: "Sobeys", amount: "$0.77", status: "SWEPT", txSig: "9kL2...Fc8", date: "May 8" },
  { merchant: "TTC Transit", amount: "$0.80", status: "PENDING", date: "May 8" },
  { merchant: "Petro-Canada", amount: "$0.55", status: "SWEPT", txSig: "2mN5...Dd4", date: "May 7" },
  { merchant: "Loblaws", amount: "$0.88", status: "SWEPT", txSig: "7pQ9...Ee1", date: "May 7" },
  { merchant: "Netflix", amount: "$0.01", status: "PENDING", date: "May 6" },
  { merchant: "Shoppers Drug Mart", amount: "$0.63", status: "SWEPT", txSig: "4sT3...Gg6", date: "May 6" },
  { merchant: "Starbucks", amount: "$0.50", status: "SWEPT", txSig: "8uV7...Hh3", date: "May 5" },
];

export function DashboardRoundups() {
  const swept = ROUNDUPS.filter((r) => r.status === "SWEPT");
  const pending = ROUNDUPS.filter((r) => r.status === "PENDING");
  const total = ROUNDUPS.reduce((sum, r) => sum + parseFloat(r.amount.replace("$", "")), 0);

  return (
    <div>
      <h2 style={{ fontSize: "24px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "24px" }}>Round-ups</h2>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "32px" }}>
        {[
          { label: "This week", value: `$${total.toFixed(2)}` },
          { label: "Total swept", value: `${swept.length} round-ups` },
          { label: "Pending sweep", value: `${pending.length} transactions` },
        ].map((s) => (
          <div key={s.label} className="glass-card" style={{ padding: "20px" }}>
            <div style={{ fontSize: "12px", color: "var(--text-tertiary)", marginBottom: "8px" }}>{s.label}</div>
            <div style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", fontFamily: "'Geist Mono', monospace" }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Banner for pending */}
      {pending.length > 0 && (
        <div style={{
          padding: "14px 20px",
          borderRadius: "10px",
          background: "rgba(255,107,53,0.08)",
          border: "1px solid rgba(255,107,53,0.20)",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <span style={{ fontSize: "13px", color: "var(--accent-bright)" }}>
            {pending.length} round-ups pending — will sweep when total ≥ $5
          </span>
          <button className="btn-primary" style={{ fontSize: "12px", padding: "7px 14px" }}>Force sweep now</button>
        </div>
      )}

      {/* Timeline */}
      <div className="glass-card" style={{ overflow: "hidden" }}>
        {ROUNDUPS.map((r, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "16px 24px",
            borderBottom: i < ROUNDUPS.length - 1 ? "1px solid var(--border-faint)" : "none",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{
                width: "10px", height: "10px", borderRadius: "50%",
                background: r.status === "SWEPT" ? "var(--success)" : r.status === "PENDING" ? "var(--accent)" : "var(--danger)",
                boxShadow: r.status === "PENDING" ? "0 0 8px var(--accent-glow)" : "none",
              }} />
              <div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-primary)" }}>{r.merchant}</div>
                <div style={{ fontSize: "11px", color: "var(--text-tertiary)", fontFamily: "'Geist Mono', monospace" }}>
                  {r.txSig ? (
                    <a href={`https://solscan.io/tx/${r.txSig}`} target="_blank" rel="noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>
                      {r.txSig} ↗
                    </a>
                  ) : "Pending sweep"}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontSize: "15px", fontWeight: 600, color: "var(--accent)", fontFamily: "'Geist Mono', monospace" }}>{r.amount}</span>
              <span className={r.status === "SWEPT" ? "pill-invested" : r.status === "PENDING" ? "pill-pending" : "pill-failed"}>
                {r.status === "SWEPT" ? "Invested" : r.status}
              </span>
              <span style={{ fontSize: "11px", color: "var(--text-tertiary)", minWidth: "40px" }}>{r.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
