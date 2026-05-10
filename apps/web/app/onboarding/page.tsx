"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

type Step = 0 | 1 | 2 | 3 | 4 | 5;

const QUIZ = [
  {
    q: "When you hear 'investing', what do you feel?",
    options: [
      { label: "Excited — I want growth", profile: "GROWTH" },
      { label: "Cautious — I want balance", profile: "BALANCED" },
      { label: "Nervous — I want safety", profile: "SAFE" },
    ],
  },
  {
    q: "If your portfolio dropped 20% in a month, you would:",
    options: [
      { label: "Buy more", profile: "GROWTH" },
      { label: "Hold steady", profile: "BALANCED" },
      { label: "Pull out", profile: "SAFE" },
    ],
  },
  {
    q: "Your goal:",
    options: [
      { label: "Build wealth aggressively", profile: "GROWTH" },
      { label: "Steady growth over time", profile: "BALANCED" },
      { label: "Keep up with inflation", profile: "SAFE" },
    ],
  },
];

const PROFILE_MAP: Record<string, string> = { SAFE: "Safe", BALANCED: "Balanced", GROWTH: "Growth" };

export default function OnboardingPage() {
  const [step, setStep] = useState<Step>(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [quizIdx, setQuizIdx] = useState(0);
  const [finalProfile, setFinalProfile] = useState("BALANCED");
  const [depositAmt, setDepositAmt] = useState<number | null>(null);
  const [isCustomAmt, setIsCustomAmt] = useState(false);
  const [bankConnected, setBankConnected] = useState(false);

  const next = () => setStep((s) => Math.min(5, s + 1) as Step);

  const handleQuizAnswer = (profile: string) => {
    const answers = [...quizAnswers, profile];
    setQuizAnswers(answers);
    if (quizIdx < QUIZ.length - 1) {
      setQuizIdx(quizIdx + 1);
    } else {
      const counts: Record<string, number> = {};
      answers.forEach((a) => (counts[a] = (counts[a] || 0) + 1));
      const best = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setFinalProfile(best);
      next();
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--bg-base)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 24px",
      position: "relative",
    }}>
      {/* Glow */}
      <div style={{ position: "fixed", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(255,107,53,0.07), transparent 70%)", pointerEvents: "none" }} />

      {/* Progress dots */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "48px" }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} style={{
            width: i === step ? "24px" : "8px",
            height: "8px",
            borderRadius: "4px",
            background: i <= step ? "var(--accent)" : "var(--border-default)",
            transition: "all 0.3s ease",
          }} />
        ))}
      </div>

      <div style={{ width: "100%", maxWidth: "480px" }}>
        <AnimatePresence mode="wait">
          {/* STEP 0 — Welcome */}
          {step === 0 && (
            <motion.div key="s0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "56px", marginBottom: "20px" }}>🍁</div>
              <h1 className="display-xs" style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                Welcome to Twoonie.
              </h1>
              <p style={{ color: "var(--text-secondary)", marginBottom: "40px", lineHeight: 1.7 }}>
                Let&apos;s get your spare change working. It takes 2 minutes.
              </p>
              <button className="btn-primary btn-large" onClick={next} style={{ width: "100%" }}>Continue →</button>
            </motion.div>
          )}

          {/* STEP 1 — Sign up */}
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <h2 className="display-xs" style={{ color: "var(--text-primary)", marginBottom: "8px" }}>Create your account</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "32px" }}>A secure wallet is created automatically — no seed phrases.</p>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "13px", color: "var(--text-secondary)", marginBottom: "8px" }}>Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  defaultValue="Ali@twoonie.app"
                  style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid var(--border-default)", background: "var(--bg-elevated)", color: "var(--text-primary)", fontSize: "15px", outline: "none", boxSizing: "border-box" }}
                />
              </div>
              <button className="btn-primary" style={{ width: "100%", marginBottom: "16px" }} onClick={next}>
                Send magic link →
              </button>
              <div style={{ padding: "14px 16px", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.20)", borderRadius: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <Check size={16} color="var(--success)" />
                <span style={{ fontSize: "13px", color: "var(--success)" }}>Your secure Solana wallet is ready</span>
              </div>
            </motion.div>
          )}

          {/* STEP 2 — Risk profile quiz */}
          {step === 2 && (
            <motion.div key={`s2-${quizIdx}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
              <p style={{ fontSize: "12px", color: "var(--accent)", fontFamily: "'Geist Mono', monospace", letterSpacing: "0.08em", marginBottom: "12px" }}>
                Q{quizIdx + 1} of {QUIZ.length}
              </p>
              <h2 style={{ fontSize: "22px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "28px", lineHeight: 1.4 }}>
                {QUIZ[quizIdx].q}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {QUIZ[quizIdx].options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleQuizAnswer(opt.profile)}
                    className="btn-ghost"
                    style={{ justifyContent: "flex-start", width: "100%", textAlign: "left" }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3 — Connect bank */}
          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <div style={{ padding: "14px 16px", background: "var(--accent-soft)", border: "1px solid rgba(255,107,53,0.20)", borderRadius: "10px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "16px" }}>🎯</span>
                <span style={{ fontSize: "13px", color: "var(--accent-bright)" }}>Profile: <strong>{PROFILE_MAP[finalProfile]}</strong></span>
              </div>
              <h2 className="display-xs" style={{ color: "var(--text-primary)", marginBottom: "8px" }}>Connect your bank</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "32px" }}>Link your Canadian bank to enable round-ups. We never store your credentials.</p>
              {!bankConnected ? (
                <button className="btn-primary" style={{ width: "100%", marginBottom: "12px" }} onClick={() => { setBankConnected(true); }}>
                  🏦 Link bank with Plaid
                </button>
              ) : (
                <div style={{ padding: "16px", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.20)", borderRadius: "10px", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Check size={16} color="var(--success)" />
                    <span style={{ fontSize: "14px", color: "var(--success)", fontWeight: 500 }}>Connected to TD Canada Trust ···· 4521</span>
                  </div>
                  <p style={{ fontSize: "12px", color: "var(--text-tertiary)", marginTop: "6px" }}>Twoonie can see your transactions. We never store your credentials.</p>
                </div>
              )}
              <div style={{ display: "flex", gap: "10px" }}>
                {bankConnected && <button className="btn-primary" style={{ flex: 1 }} onClick={next}>Continue →</button>}
                <button className="btn-ghost" style={{ flex: 1 }} onClick={next}>Connect later</button>
              </div>
            </motion.div>
          )}

          {/* STEP 4 — First deposit */}
          {step === 4 && (
            <motion.div key="s4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <h2 className="display-xs" style={{ color: "var(--text-primary)", marginBottom: "8px" }}>Make your first deposit</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "32px" }}>Start as little as $5. Or let round-ups build it for you.</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", marginBottom: "20px" }}>
                {[5, 25, 100, "Custom"].map((amt) => {
                  const isSelected = amt === "Custom" ? isCustomAmt : (!isCustomAmt && depositAmt === amt);
                  return (
                    <button key={amt} onClick={() => {
                        if (amt === "Custom") {
                          setIsCustomAmt(true);
                          setDepositAmt(null);
                        } else {
                          setIsCustomAmt(false);
                          setDepositAmt(amt as number);
                        }
                      }}
                      style={{
                        padding: "16px",
                        borderRadius: "12px",
                        border: isSelected ? "1px solid var(--accent)" : "1px solid var(--border-default)",
                        background: isSelected ? "var(--accent-soft)" : "var(--bg-elevated)",
                        color: isSelected ? "var(--accent)" : "var(--text-primary)",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: 600,
                      }}
                    >
                      {amt === "Custom" ? "Custom" : `$${amt}`}
                    </button>
                  );
                })}
              </div>

              {isCustomAmt && (
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontSize: "13px", color: "var(--text-secondary)", marginBottom: "8px" }}>Custom Amount ($)</label>
                  <input
                    type="number"
                    placeholder="e.g. 50"
                    onChange={(e) => setDepositAmt(Number(e.target.value))}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid var(--border-default)", background: "var(--bg-elevated)", color: "var(--text-primary)", fontSize: "15px", outline: "none", boxSizing: "border-box" }}
                  />
                </div>
              )}

              {depositAmt !== null && depositAmt > 0 && (
                <div style={{ padding: "16px", background: "var(--bg-surface)", borderRadius: "10px", marginBottom: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span style={{ color: "var(--text-secondary)", fontSize: "14px" }}>Amount</span>
                    <span style={{ color: "var(--text-primary)", fontFamily: "'Geist Mono', monospace" }}>${depositAmt}</span>
                  </div>
                  <button className="btn-primary" style={{ width: "100%" }} onClick={next}>
                    Simulate deposit ✓
                  </button>
                </div>
              )}
              <button className="btn-ghost" style={{ width: "100%" }} onClick={next}>Skip for now</button>
            </motion.div>
          )}

          {/* STEP 5 — Done */}
          {step === 5 && (
            <motion.div key="s5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} style={{ textAlign: "center" }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ fontSize: "72px", marginBottom: "24px" }}
              >
                🎉
              </motion.div>
              <h2 className="display-xs" style={{ color: "var(--text-primary)", marginBottom: "12px" }}>
                You&apos;re all set. <span className="gradient-text">Welcome to Twoonie.</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "40px" }}>Your spare change is now working harder than your bank account.</p>
              <Link href="/dashboard" className="btn-primary btn-large" style={{ width: "100%", justifyContent: "center" }}>
                Go to dashboard →
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
