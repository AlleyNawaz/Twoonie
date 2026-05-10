"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowRight, Activity, Wallet, ShieldCheck, Sparkles } from "lucide-react";
import { CountUp } from "@/components/ui/count-up";

const TRANSACTIONS = [
  { merchant: "Tim Hortons", category: "☕", amount: "$3.75", roundup: "0.25" },
  { merchant: "Sobeys", category: "🛒", amount: "$47.23", roundup: "0.77" },
  { merchant: "TTC Transit", category: "🚌", amount: "$3.20", roundup: "0.80" },
  { merchant: "Petro-Canada", category: "⛽", amount: "$62.45", roundup: "0.55" },
  { merchant: "Loblaws", category: "🛒", amount: "$89.12", roundup: "0.88" },
  { merchant: "Netflix", category: "📺", amount: "$18.99", roundup: "0.01" },
  { merchant: "Shoppers", category: "💊", amount: "$24.37", roundup: "0.63" },
  { merchant: "Starbucks", category: "☕", amount: "$7.50", roundup: "0.50" },
  { merchant: "Cineplex", category: "🎬", amount: "$14.99", roundup: "0.01" },
  { merchant: "Amazon.ca", category: "📦", amount: "$43.82", roundup: "0.18" },
  { merchant: "LCBO", category: "🍷", amount: "$34.62", roundup: "0.38" },
  { merchant: "Indigo", category: "📚", amount: "$27.45", roundup: "0.55" },
  { merchant: "Shell", category: "⛽", amount: "$58.12", roundup: "0.88" },
  { merchant: "Uber Eats", category: "🚗", amount: "$26.34", roundup: "0.66" },
  { merchant: "Spotify", category: "🎵", amount: "$10.99", roundup: "0.01" },
];

type Phase = "title" | "transactions" | "sweep" | "vault" | "growth" | "finale";

export default function DemoPage() {
  const [phase, setPhase] = useState<Phase>("title");
  const [visibleTxs, setVisibleTxs] = useState<number[]>([]);
  const [totalRoundup, setTotalRoundup] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [portfolioValue, setPortfolioValue] = useState(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const clearTimers = () => timersRef.current.forEach(clearTimeout);

  const runDemo = (spd: number) => {
    clearTimers();
    setPhase("title");
    setVisibleTxs([]);
    setTotalRoundup(0);
    setPortfolioValue(0);

    const delay = (ms: number) => ms / spd;
    const t = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms);
      timersRef.current.push(id);
    };

    // 1. Intro -> Transactions
    t(() => setPhase("transactions"), delay(2500));

    // 2. Stream in transactions smoothly
    const txBaseDelay = 2500 + 1000;
    TRANSACTIONS.forEach((tx, i) => {
      t(() => {
        setVisibleTxs((prev) => [i, ...prev].slice(0, 5)); // Keep only latest 5 visible for smooth scroll
        setTotalRoundup((prev) => prev + parseFloat(tx.roundup));
      }, delay(txBaseDelay + i * 800));
    });

    const afterTxs = txBaseDelay + TRANSACTIONS.length * 800 + 1500;

    // 3. Sweep animation
    t(() => setPhase("sweep"), delay(afterTxs));

    // 4. Vault allocation
    t(() => setPhase("vault"), delay(afterTxs + 3500));

    // 5. Growth curve
    t(() => {
      setPhase("growth");
      const startValue = 247.83;
      const endValue = 2847.30;
      const durationMs = delay(4000);
      const startTime = Date.now();
      const tick = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        // easeOutExpo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setPortfolioValue(startValue + eased * (endValue - startValue));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay(afterTxs + 8000));

    // 6. Finale
    t(() => setPhase("finale"), delay(afterTxs + 15000));
    
    // Loop
    t(() => runDemo(spd), delay(afterTxs + 24000));
  };

  useEffect(() => {
    if (playing) runDemo(speed);
    else clearTimers();
    return clearTimers;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, speed]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(20, 30, 60, 0.4) 0%, var(--bg-base) 100%)",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Header */}
      <div style={{ padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 10 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: "20px", color: "var(--text-primary)", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
          twoonie <span style={{ color: "var(--accent)", fontSize: "12px", background: "rgba(255, 107, 53, 0.15)", padding: "4px 8px", borderRadius: "999px", letterSpacing: "0.05em", textTransform: "uppercase" }}>Live Demo</span>
        </Link>
        <Link href="/onboarding" className="btn-primary" style={{ fontSize: "14px", padding: "10px 20px" }}>
          Try it yourself <ArrowRight size={16} style={{ marginLeft: "6px" }} />
        </Link>
      </div>

      {/* Main Cinematic Stage */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px", perspective: "1000px" }}>
        <AnimatePresence mode="wait">
          
          {/* PHASE: TITLE */}
          {phase === "title" && (
            <motion.div 
              key="title" 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} 
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} 
              exit={{ opacity: 0, y: -30, filter: "blur(10px)", scale: 0.95 }} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ textAlign: "center", maxWidth: "700px" }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 1 }}
                style={{ width: "60px", height: "60px", borderRadius: "50%", background: "var(--accent)", margin: "0 auto 32px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 40px rgba(255, 107, 53, 0.4)" }}
              >
                <Sparkles size={28} color="white" />
              </motion.div>
              <h1 className="display-md" style={{ color: "var(--text-primary)", marginBottom: "24px", lineHeight: 1.1 }}>
                Watch a week of spending.<br />
                <span className="gradient-text">Watch wealth quietly grow.</span>
              </h1>
              <p style={{ color: "var(--text-tertiary)", fontSize: "16px", fontFamily: "'Geist Mono', monospace" }}>Auto-plays in 2 seconds...</p>
            </motion.div>
          )}

          {/* PHASE: TRANSACTIONS */}
          {phase === "transactions" && (
            <motion.div 
              key="txs" 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, y: -40, filter: "blur(8px)" }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ width: "100%", maxWidth: "560px", position: "relative" }}
            >
              {/* Header Totals */}
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <p style={{ fontSize: "14px", color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px", fontFamily: "'Geist Mono', monospace" }}>7 Days of Sweeps</p>
                <div style={{ fontSize: "64px", fontWeight: 700, color: "var(--text-primary)", fontFamily: "'Geist Mono', monospace", letterSpacing: "-0.04em", lineHeight: 1 }}>
                  $<CountUp end={totalRoundup} decimals={2} duration={400} />
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(16,185,129,0.15)", color: "var(--success)", padding: "6px 12px", borderRadius: "999px", fontSize: "13px", fontWeight: 600, marginTop: "16px" }}>
                  <Activity size={14} /> Processing transactions...
                </div>
              </div>

              {/* Transactions Ledger */}
              <div style={{ 
                position: "relative", height: "380px", overflow: "hidden",
                maskImage: "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent 100%)" 
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "20px 0" }}>
                  <AnimatePresence initial={false}>
                    {visibleTxs.map((idx) => {
                      const tx = TRANSACTIONS[idx];
                      return (
                        <motion.div
                          key={idx}
                          layout
                          initial={{ opacity: 0, y: -30, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          style={{
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                            padding: "16px 24px",
                            background: "rgba(20,25,40,0.8)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(255,255,255,0.05)",
                            borderRadius: "16px",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>
                              {tx.category}
                            </div>
                            <div>
                              <div style={{ fontSize: "16px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>{tx.merchant}</div>
                              <div style={{ fontSize: "13px", color: "var(--text-tertiary)", fontFamily: "'Geist Mono', monospace" }}>{tx.amount}</div>
                            </div>
                          </div>
                          <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: "12px", color: "var(--text-tertiary)", marginBottom: "4px", textTransform: "uppercase" }}>Round up</div>
                            <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--accent)", fontFamily: "'Geist Mono', monospace" }}>
                              +${tx.roundup}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}

          {/* PHASE: SWEEP ACTION */}
          {phase === "sweep" && (
            <motion.div 
              key="sweep" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} 
              transition={{ duration: 0.8 }}
              style={{ textAlign: "center", maxWidth: "600px", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              {/* Animated sweep beam */}
              <div style={{ position: "relative", width: "100%", height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "300px", opacity: [0, 1, 0], x: [ -150, 0, 150 ] }}
                  transition={{ duration: 1.5, ease: "easeInOut", repeat: 1 }}
                  style={{ position: "absolute", height: "4px", background: "linear-gradient(90deg, transparent, var(--accent), transparent)", filter: "blur(2px)" }}
                />
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: [0, 1.2, 1], rotate: 0 }}
                  transition={{ type: "spring", damping: 12, delay: 0.5 }}
                  style={{ width: "80px", height: "80px", borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 60px rgba(255, 107, 53, 0.6)", zIndex: 2 }}
                >
                  <Wallet size={36} color="white" />
                </motion.div>
              </div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
                className="display-xs" style={{ color: "var(--text-primary)", marginBottom: "16px" }}
              >
                Threshold Reached
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
                style={{ padding: "16px 28px", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: "16px", display: "inline-flex", alignItems: "center", gap: "12px" }}
              >
                <ShieldCheck size={20} color="var(--success)" />
                <span style={{ color: "var(--success)", fontWeight: 500, fontSize: "16px" }}>Successfully swept $7.06 to Solana vault</span>
              </motion.div>
            </motion.div>
          )}

          {/* PHASE: VAULT ALLOCATION */}
          {phase === "vault" && (
            <motion.div 
              key="vault" 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, y: -40 }} 
              transition={{ duration: 0.8 }}
              style={{ width: "100%", maxWidth: "480px" }}
            >
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <p style={{ fontSize: "14px", color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Auto-Allocation</p>
                <h2 className="display-sm" style={{ color: "var(--text-primary)" }}>$7.06 invested</h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "USDC Yield", desc: "Low risk, stable returns", percent: "60%", value: "$4.23", color: "#3B82F6" },
                  { label: "Solana (SOL)", desc: "Ecosystem growth", percent: "25%", value: "$1.77", color: "#10B981" },
                  { label: "jitoSOL", desc: "Liquid staking", percent: "15%", value: "$1.06", color: "#F59E0B" },
                ].map((item, i) => (
                  <motion.div 
                    key={item.label} 
                    initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.2, type: "spring" }}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "rgba(20,25,40,0.6)", border: `1px solid ${item.color}40`, borderRadius: "16px", position: "relative", overflow: "hidden" }}
                  >
                    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "4px", background: item.color }} />
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                        <span style={{ fontSize: "16px", fontWeight: 600, color: "var(--text-primary)" }}>{item.label}</span>
                        <span style={{ fontSize: "12px", padding: "2px 8px", background: `${item.color}20`, color: item.color, borderRadius: "999px", fontWeight: 600 }}>{item.percent}</span>
                      </div>
                      <div style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>{item.desc}</div>
                    </div>
                    <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "20px", fontWeight: 600, color: "var(--text-primary)" }}>{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* PHASE: GROWTH */}
          {phase === "growth" && (
            <motion.div 
              key="growth" 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} 
              transition={{ duration: 1 }}
              style={{ textAlign: "center", maxWidth: "600px", width: "100%" }}
            >
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <p style={{ fontSize: "14px", color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "24px" }}>Fast-forwarding 5 years</p>
                <div style={{ fontSize: "clamp(60px, 10vw, 96px)", fontWeight: 700, letterSpacing: "-0.04em", background: "var(--gradient-accent)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'Geist Mono', monospace", marginBottom: "16px", lineHeight: 1 }}>
                  ${portfolioValue.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div style={{ display: "inline-flex", padding: "8px 16px", background: "rgba(16,185,129,0.15)", borderRadius: "999px" }}>
                  <p style={{ color: "var(--success)", fontSize: "15px", fontWeight: 600 }}>+ $487.30 in passive yield earned</p>
                </div>
              </motion.div>
              
              {/* SVG Animated Chart Line */}
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                style={{ width: "100%", height: "160px", marginTop: "40px", position: "relative" }}
              >
                <svg width="100%" height="100%" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path 
                    d="M 0 90 Q 50 85 100 75 T 200 50 T 300 30 T 400 10 L 400 100 L 0 100 Z"
                    fill="url(#chartGrad)"
                    initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, delay: 1 }}
                  />
                  <motion.path 
                    d="M 0 90 Q 50 85 100 75 T 200 50 T 300 30 T 400 10"
                    fill="none" stroke="var(--accent)" strokeWidth="3"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeOut", delay: 1 }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          )}

          {/* PHASE: FINALE */}
          {phase === "finale" && (
            <motion.div 
              key="finale" 
              initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }} 
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ textAlign: "center", maxWidth: "600px" }}
            >
              <h2 className="display-md" style={{ color: "var(--text-primary)", marginBottom: "32px", lineHeight: 1.2 }}>
                The money you already spent,<br />
                <span className="gradient-text">building the wealth you deserve.</span>
              </h2>
              <div style={{ width: "60px", height: "4px", background: "var(--border-default)", margin: "0 auto 32px", borderRadius: "2px" }} />
              <Link 
                href="/onboarding" 
                className="btn-primary" 
                style={{ fontSize: "16px", padding: "16px 32px", borderRadius: "999px", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 0 40px rgba(255, 107, 53, 0.3)" }}
              >
                Start investing with $5 <ChevronRight size={20} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Playback Controls */}
      <div style={{
        position: "fixed", bottom: "32px", right: "32px", zIndex: 50,
        display: "flex", alignItems: "center", gap: "12px",
        padding: "10px 16px",
        background: "rgba(15,22,35,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "999px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
      }}>
        <button 
          onClick={() => setPlaying(!playing)} 
          style={{ background: "none", border: "none", cursor: "pointer", color: playing ? "var(--text-primary)" : "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px", transition: "color 0.2s" }}
        >
          {playing ? <div style={{display: 'flex', gap: '3px'}}><div style={{width: '3px', height: '12px', background: 'currentColor', borderRadius: '1px'}}/><div style={{width: '3px', height: '12px', background: 'currentColor', borderRadius: '1px'}}/></div> : <div style={{width: 0, height: 0, borderTop: '7px solid transparent', borderBottom: '7px solid transparent', borderLeft: '12px solid currentColor'}}/>}
        </button>
        <div style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.15)" }} />
        <div style={{ display: "flex", gap: "4px" }}>
          {[1, 1.5, 2].map((s) => (
            <button 
              key={s} 
              onClick={() => { setSpeed(s); if (playing) { setPlaying(false); setTimeout(() => setPlaying(true), 50); } }} 
              style={{
                padding: "4px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: 600,
                border: "none", cursor: "pointer", transition: "all 0.2s",
                background: speed === s ? "var(--text-primary)" : "transparent",
                color: speed === s ? "var(--bg-base)" : "var(--text-secondary)",
              }}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
