"use client";

import { useEffect, useRef } from "react";
import { SectionReveal } from "@/components/ui/section-reveal";

const BASE = 47392;
const TICK_PER_SECOND = 0.43; // ~$0.43/second

export function LiveTickerSection() {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let current = BASE;
    let start = Date.now();
    const raf = () => {
      const elapsed = (Date.now() - start) / 1000;
      current = BASE + elapsed * TICK_PER_SECOND;
      if (spanRef.current) {
        spanRef.current.textContent = `$${current.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      }
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section style={{ padding: "100px 24px", position: "relative", zIndex: 1, textAlign: "center" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <SectionReveal>
          <p style={{ color: "var(--text-tertiary)", fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "24px" }}>
            Live · Updating in real time
          </p>
          <div className="ticker-number" style={{ marginBottom: "16px" }}>
            <span ref={spanRef}>${BASE.toLocaleString("en-CA", { minimumFractionDigits: 2 })}</span>
          </div>
          <p style={{ fontSize: "20px", color: "var(--text-secondary)", marginBottom: "16px" }}>
            invested by Twoonie users this week
          </p>
          <p style={{ color: "var(--text-tertiary)", fontFamily: "'Geist Mono', monospace", fontSize: "13px" }}>
            From $5 chunks. The math works.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
