"use client";

// Pure CSS/SVG Toonie scene — zero dependencies, always works
export function ToonieSceneLazy() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
      {/* Glow background */}
      <div style={{
        position: "absolute",
        width: "320px", height: "320px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)",
        animation: "bob 4s ease-in-out infinite",
      }} />

      {/* Main Toonie coin */}
      <div style={{
        width: "220px", height: "220px", borderRadius: "50%",
        background: "radial-gradient(circle at 35% 30%, #E8E8E8 0%, #B0B5C0 50%, #8A8F9A 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", zIndex: 2,
        animation: "spin-slow 12s linear infinite, bob 4s ease-in-out infinite",
        boxShadow: "0 0 60px rgba(255, 107, 53, 0.30), 0 0 120px rgba(255, 107, 53, 0.12), inset 0 2px 4px rgba(255,255,255,0.20)",
      }}>
        {/* Inner gold disc */}
        <div style={{
          width: "150px", height: "150px", borderRadius: "50%",
          background: "radial-gradient(circle at 35% 30%, #FFD23F 0%, #FFA030 40%, #C86808 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "inset 0 2px 6px rgba(255,255,255,0.20), inset 0 -2px 4px rgba(0,0,0,0.20)",
        }}>
          <span style={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "64px", fontWeight: 900,
            color: "rgba(10,15,26,0.80)",
            lineHeight: 1,
            textShadow: "0 1px 2px rgba(255,180,50,0.40)",
          }}>2</span>
        </div>

        {/* Edge shine */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(0,0,0,0.10) 100%)",
        }} />
      </div>

      {/* Orbiting USDC coins */}
      {[
        { delay: "0s", r: "160px", dur: "6s" },
        { delay: "-1s", r: "175px", dur: "7s" },
        { delay: "-2s", r: "155px", dur: "5.5s" },
        { delay: "-3.5s", r: "170px", dur: "8s" },
        { delay: "-4.5s", r: "165px", dur: "6.5s" },
        { delay: "-0.5s", r: "158px", dur: "7.5s" },
      ].map((orbit, i) => (
        <div key={i} style={{
          position: "absolute",
          width: "40px", height: "40px",
          animation: `orbit${i} ${orbit.dur} linear infinite`,
          animationDelay: orbit.delay,
        }}>
          <div style={{
            width: "40px", height: "40px", borderRadius: "50%",
            background: `radial-gradient(circle at 35% 30%, #FFA572, #FF6B35)`,
            boxShadow: "0 0 14px rgba(255, 107, 53, 0.70)",
          }} />
        </div>
      ))}

      <style>{`
        @keyframes orbit0 { from { transform: rotate(0deg) translateX(160px); } to { transform: rotate(360deg) translateX(160px); } }
        @keyframes orbit1 { from { transform: rotate(60deg) translateX(175px); } to { transform: rotate(420deg) translateX(175px); } }
        @keyframes orbit2 { from { transform: rotate(120deg) translateX(155px); } to { transform: rotate(480deg) translateX(155px); } }
        @keyframes orbit3 { from { transform: rotate(180deg) translateX(170px); } to { transform: rotate(540deg) translateX(170px); } }
        @keyframes orbit4 { from { transform: rotate(240deg) translateX(165px); } to { transform: rotate(600deg) translateX(165px); } }
        @keyframes orbit5 { from { transform: rotate(300deg) translateX(158px); } to { transform: rotate(660deg) translateX(158px); } }
      `}</style>
    </div>
  );
}
