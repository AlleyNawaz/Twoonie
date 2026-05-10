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
            <div style={{ padding: "24px", borderRadius: "12px", background: "rgba(255, 107, 53, 0.05)", border: "1px solid rgba(255, 107, 53, 0.2)" }}>
              <p style={{ color: "var(--accent)", fontFamily: "'Geist Mono', monospace", fontSize: "14px", margin: 0 }}>
                Documentation is currently being updated. Please check back soon or visit our GitHub repository for the latest code and README.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
