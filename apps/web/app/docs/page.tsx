import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { SectionReveal } from "@/components/ui/section-reveal";

export default function DocsPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      
      <section style={{ paddingTop: "160px", paddingBottom: "100px", paddingLeft: "24px", paddingRight: "24px", flex: 1 }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <SectionReveal>
            <h1 className="display-md" style={{ marginBottom: "32px", color: "var(--text-primary)" }}>
              Documentation
            </h1>
            <p style={{ fontSize: "18px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "24px" }}>
              Welcome to the Twoonie developer documentation. Here you can find details on how our Solana smart contracts operate, the architecture of our sweeps logic, and how we ensure secure transactions using Plaid.
            </p>

            <h2 className="display-sm" style={{ color: "var(--text-primary)", fontSize: "28px", marginTop: "48px", marginBottom: "24px" }}>Overview</h2>
            <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "16px" }}>
              Twoonie bridges traditional Canadian banking with decentralized finance. By connecting your existing bank accounts securely via Plaid, the platform monitors your everyday transactions, calculates the spare change, and sweeps it into a personalized Solana vault when a threshold is met.
            </p>
            <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "24px" }}>
              The funds are automatically distributed into a diversified portfolio consisting of USDC yields, SOL, and liquid staked tokens like jitoSOL, ensuring your idle change works harder than it would in a traditional bank account.
            </p>

            <h2 className="display-sm" style={{ color: "var(--text-primary)", fontSize: "28px", marginTop: "48px", marginBottom: "24px" }}>Core Features</h2>
            <ul style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "24px", paddingLeft: "24px" }}>
              <li style={{ marginBottom: "12px" }}><strong>Automated Round-ups:</strong> Seamlessly connects to Canadian bank accounts to track spending and calculate round-up amounts.</li>
              <li style={{ marginBottom: "12px" }}><strong>Solana Vault Integration:</strong> Groups micro-transactions and sweeps them on-chain into a secure, non-custodial Solana wallet.</li>
              <li style={{ marginBottom: "12px" }}><strong>Automated Yield Strategies:</strong> Automatically allocates deposited funds into predefined risk profiles (e.g., Safe, Balanced, Growth) across various Solana ecosystem assets.</li>
              <li style={{ marginBottom: "12px" }}><strong>Premium Interface:</strong> Built with a high-fidelity, cinematic user interface that feels native, fast, and highly responsive.</li>
            </ul>

            <h2 className="display-sm" style={{ color: "var(--text-primary)", fontSize: "28px", marginTop: "48px", marginBottom: "24px" }}>Technical Stack</h2>
            <ul style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "24px", paddingLeft: "24px" }}>
              <li style={{ marginBottom: "8px" }}><strong>Frontend:</strong> Next.js (App Router), React, TypeScript</li>
              <li style={{ marginBottom: "8px" }}><strong>Styling:</strong> Vanilla CSS, CSS Modules, Tailwind CSS</li>
              <li style={{ marginBottom: "8px" }}><strong>Animation:</strong> Framer Motion, GSAP</li>
              <li style={{ marginBottom: "8px" }}><strong>Workspace:</strong> Turborepo (Monorepo architecture)</li>
              <li style={{ marginBottom: "8px" }}><strong>Web3 Integration:</strong> Solana Web3.js, Anchor (for Solana PDA interaction)</li>
              <li style={{ marginBottom: "8px" }}><strong>Backend/API:</strong> Hono (Serverless API), BullMQ (Background job queue for sweeps)</li>
              <li style={{ marginBottom: "8px" }}><strong>Banking API:</strong> Plaid</li>
            </ul>

            <div style={{ padding: "24px", borderRadius: "12px", background: "rgba(255, 107, 53, 0.05)", border: "1px solid rgba(255, 107, 53, 0.2)", marginTop: "48px" }}>
              <p style={{ color: "var(--accent)", fontFamily: "'Geist Mono', monospace", fontSize: "14px", margin: 0 }}>
                For installation instructions and to run the app locally, please visit our <a href="https://github.com/AlleyNawaz/Twoonie" style={{ color: "var(--accent)", textDecoration: "underline" }}>GitHub repository</a>.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
