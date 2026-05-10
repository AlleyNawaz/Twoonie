import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { SectionReveal } from "@/components/ui/section-reveal";

export default function TermsPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      
      <section style={{ paddingTop: "160px", paddingBottom: "100px", paddingLeft: "24px", paddingRight: "24px", flex: 1 }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <SectionReveal>
            <h1 className="display-sm" style={{ marginBottom: "32px", color: "var(--text-primary)" }}>
              Terms of Service
            </h1>
            <div style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <p>Last updated: May 2026</p>
              
              <h2 style={{ color: "var(--text-primary)", fontSize: "20px", marginTop: "16px" }}>1. Acceptance of Terms</h2>
              <p>By accessing and using Twoonie, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>

              <h2 style={{ color: "var(--text-primary)", fontSize: "20px", marginTop: "16px" }}>2. Description of Service</h2>
              <p>Twoonie provides users with a platform that rounds up daily purchases and invests the spare change into cryptocurrencies via the Solana blockchain. You understand and agree that the Service is provided &quot;AS-IS&quot;.</p>

              <h2 style={{ color: "var(--text-primary)", fontSize: "20px", marginTop: "16px" }}>3. Risks of Investing</h2>
              <p>All investments, including cryptocurrency, involve risk. Twoonie does not provide financial advice, and you are responsible for any risks associated with investing on the platform.</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
