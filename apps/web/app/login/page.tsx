"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--bg-base)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
    }}>
      <div style={{ width: "100%", maxWidth: "400px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "24px" }}>
            <svg width="32" height="32" viewBox="0 0 28 28"><circle cx="14" cy="14" r="13" fill="url(#lcoin-o)" /><circle cx="14" cy="14" r="9" fill="url(#lcoin-i)" /><text x="14" y="18" textAnchor="middle" fontSize="9" fontWeight="700" fill="rgba(10,15,26,0.8)" fontFamily="serif">2</text><defs><radialGradient id="lcoin-o" cx="35%" cy="30%"><stop offset="0%" stopColor="#E8E8E8" /><stop offset="100%" stopColor="#9CA3AF" /></radialGradient><radialGradient id="lcoin-i" cx="35%" cy="30%"><stop offset="0%" stopColor="#FFD23F" /><stop offset="100%" stopColor="#FF6B35" /></radialGradient></defs></svg>
            <span style={{ fontWeight: 700, fontSize: "20px", color: "var(--text-primary)" }}>twoonie</span>
          </Link>
          <h1 style={{ fontSize: "28px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>Welcome back</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>Sign in to your account</p>
        </div>

        <div className="glass-card" style={{ padding: "32px" }}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", fontSize: "13px", color: "var(--text-secondary)", marginBottom: "8px" }}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid var(--border-default)", background: "var(--bg-elevated)", color: "var(--text-primary)", fontSize: "15px", outline: "none", boxSizing: "border-box" }}
            />
          </div>
          <button className="btn-primary" style={{ width: "100%", marginBottom: "16px" }}>
            Send magic link →
          </button>
          <p style={{ textAlign: "center", fontSize: "12px", color: "var(--text-tertiary)" }}>
            No password needed. We use secure magic links.
          </p>
        </div>

        <p style={{ textAlign: "center", marginTop: "24px", fontSize: "13px", color: "var(--text-tertiary)" }}>
          New to Twoonie?{" "}
          <Link href="/onboarding" style={{ color: "var(--accent)", textDecoration: "none" }}>Create account →</Link>
        </p>
      </div>
    </div>
  );
}
