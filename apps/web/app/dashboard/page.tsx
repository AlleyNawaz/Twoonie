"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard, PieChart, CreditCard, ArrowUpRight,
  Settings, HelpCircle, LogOut, TrendingUp, DollarSign, Zap, BarChart2
} from "lucide-react";
import { DashboardOverview } from "@/components/dashboard/overview";
import { DashboardPortfolio } from "@/components/dashboard/portfolio";
import { DashboardTransactions } from "@/components/dashboard/transactions";
import { DashboardRoundups } from "@/components/dashboard/roundups";
import { DashboardSettings } from "@/components/dashboard/settings-tab";

const NAV = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "portfolio", label: "Portfolio", icon: PieChart },
  { id: "transactions", label: "Transactions", icon: CreditCard },
  { id: "roundups", label: "Round-ups", icon: ArrowUpRight },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function DashboardPage() {
  const [tab, setTab] = useState("overview");

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-base)", display: "flex" }}>
      {/* Sidebar */}
      <aside className="sidebar">
        <div style={{ padding: "24px 16px", borderBottom: "1px solid var(--border-faint)" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" fill="url(#dcoin-outer)" />
              <circle cx="14" cy="14" r="9" fill="url(#dcoin-inner)" />
              <text x="14" y="18" textAnchor="middle" fontSize="9" fontWeight="700" fill="rgba(10,15,26,0.8)" fontFamily="serif">2</text>
              <defs>
                <radialGradient id="dcoin-outer" cx="35%" cy="30%"><stop offset="0%" stopColor="#E8E8E8" /><stop offset="100%" stopColor="#9CA3AF" /></radialGradient>
                <radialGradient id="dcoin-inner" cx="35%" cy="30%"><stop offset="0%" stopColor="#FFD23F" /><stop offset="100%" stopColor="#FF6B35" /></radialGradient>
              </defs>
            </svg>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--text-primary)" }}>twoonie</span>
          </Link>
        </div>

        {/* User avatar */}
        <div style={{ padding: "20px 16px", borderBottom: "1px solid var(--border-faint)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "50%",
              background: "linear-gradient(135deg, var(--accent), var(--secondary))",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "14px", fontWeight: 700, color: "#0A0F1A",
            }}>A</div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>Ali Nawaz</div>
              <div style={{ fontSize: "11px", color: "var(--text-tertiary)", fontFamily: "'Geist Mono', monospace" }}>Ali@twoonie.app</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "12px 8px" }}>
          {NAV.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`sidebar-nav-item ${tab === id ? "active" : ""}`}
              style={{ width: "100%", background: "none", border: tab === id ? "1px solid rgba(255,107,53,0.20)" : "1px solid transparent", cursor: "pointer", marginBottom: "2px" }}
            >
              <Icon size={16} strokeWidth={1.5} />
              {label}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div style={{ padding: "12px 8px", borderTop: "1px solid var(--border-faint)" }}>
          <button className="sidebar-nav-item" style={{ width: "100%", background: "none", border: "1px solid transparent", cursor: "pointer", marginBottom: "2px" }}>
            <HelpCircle size={16} strokeWidth={1.5} />Help
          </button>
          <button className="sidebar-nav-item" style={{ width: "100%", background: "none", border: "1px solid transparent", cursor: "pointer", color: "var(--danger)" }}>
            <LogOut size={16} strokeWidth={1.5} />Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="dashboard-main" style={{ flex: 1, minHeight: "100vh" }}>
        {tab === "overview" && <DashboardOverview />}
        {tab === "portfolio" && <DashboardPortfolio />}
        {tab === "transactions" && <DashboardTransactions />}
        {tab === "roundups" && <DashboardRoundups />}
        {tab === "settings" && <DashboardSettings />}
      </main>
    </div>
  );
}
