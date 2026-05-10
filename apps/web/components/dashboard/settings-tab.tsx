"use client";

import { useState } from "react";

export function DashboardSettings() {
  const [roundupEnabled, setRoundupEnabled] = useState(true);
  const [multiplier, setMultiplier] = useState(1);
  const [weeklyMax, setWeeklyMax] = useState(50);
  const [profile, setProfile] = useState("BALANCED");

  return (
    <div style={{ maxWidth: "680px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "32px" }}>Settings</h2>

      {/* Profile */}
      <SettingsCard title="Profile">
        <SettingsRow label="Name"><span style={{ color: "var(--text-primary)" }}>Ali Nawaz</span></SettingsRow>
        <SettingsRow label="Email"><span style={{ color: "var(--text-primary)", fontFamily: "'Geist Mono', monospace", fontSize: "13px" }}>Ali@twoonie.app</span></SettingsRow>
      </SettingsCard>

      {/* Round-up settings */}
      <SettingsCard title="Round-up Settings">
        <SettingsRow label="Enable round-ups">
          <Toggle value={roundupEnabled} onChange={setRoundupEnabled} />
        </SettingsRow>
        <SettingsRow label="Multiplier">
          <div style={{ display: "flex", gap: "8px" }}>
            {[1, 2, 5, 10].map((m) => (
              <button key={m} onClick={() => setMultiplier(m)} style={{
                padding: "6px 14px",
                borderRadius: "8px",
                border: multiplier === m ? "1px solid var(--accent)" : "1px solid var(--border-default)",
                background: multiplier === m ? "var(--accent-soft)" : "transparent",
                color: multiplier === m ? "var(--accent)" : "var(--text-secondary)",
                cursor: "pointer",
                fontSize: "13px",
              }}>{m}x</button>
            ))}
          </div>
        </SettingsRow>
        <SettingsRow label={`Weekly cap: $${weeklyMax}`}>
          <input
            type="range" min={10} max={500} step={10}
            value={weeklyMax}
            onChange={(e) => setWeeklyMax(Number(e.target.value))}
            style={{ width: "200px", accentColor: "var(--accent)" }}
          />
        </SettingsRow>
      </SettingsCard>

      {/* Bank connection */}
      <SettingsCard title="Bank Connection">
        <SettingsRow label="Connected bank">
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: "var(--text-primary)" }}>🏦 TD Canada Trust ···· 4521</span>
            <button className="btn-ghost" style={{ fontSize: "12px", padding: "6px 12px", color: "var(--danger)", borderColor: "var(--danger)" }}>Disconnect</button>
          </div>
        </SettingsRow>
      </SettingsCard>

      {/* Risk profile */}
      <SettingsCard title="Risk Profile">
        <div style={{ display: "flex", gap: "10px" }}>
          {["SAFE", "BALANCED", "GROWTH"].map((p) => (
            <button key={p} onClick={() => setProfile(p)} style={{
              padding: "10px 20px",
              borderRadius: "10px",
              border: profile === p ? "1px solid var(--accent)" : "1px solid var(--border-faint)",
              background: profile === p ? "var(--accent-soft)" : "transparent",
              color: profile === p ? "var(--accent)" : "var(--text-secondary)",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 500,
            }}>{p.charAt(0) + p.slice(1).toLowerCase()}</button>
          ))}
        </div>
      </SettingsCard>

      <button className="btn-primary" style={{ marginTop: "8px" }}>Save settings</button>
    </div>
  );
}

function SettingsCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass-card" style={{ padding: "24px", marginBottom: "16px" }}>
      <h3 style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "20px" }}>{title}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{children}</div>
    </div>
  );
}

function SettingsRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontSize: "14px", color: "var(--text-secondary)" }}>{label}</span>
      {children}
    </div>
  );
}

function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!value)}
      style={{
        width: "44px", height: "24px", borderRadius: "12px", border: "none", cursor: "pointer",
        background: value ? "var(--accent)" : "var(--bg-surface)",
        position: "relative", transition: "background 0.2s",
      }}
    >
      <div style={{
        position: "absolute", top: "3px",
        left: value ? "23px" : "3px",
        width: "18px", height: "18px", borderRadius: "50%", background: "white",
        transition: "left 0.2s",
      }} />
    </button>
  );
}
