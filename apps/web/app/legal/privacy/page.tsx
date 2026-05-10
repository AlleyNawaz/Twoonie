import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { SectionReveal } from "@/components/ui/section-reveal";

export default function PrivacyPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      
      <section style={{ paddingTop: "160px", paddingBottom: "100px", paddingLeft: "24px", paddingRight: "24px", flex: 1 }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <SectionReveal>
            <h1 className="display-sm" style={{ marginBottom: "32px", color: "var(--text-primary)" }}>
              Privacy Policy
            </h1>
            <div style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <p>Last updated: May 2026</p>
              
              <h2 style={{ color: "var(--text-primary)", fontSize: "20px", marginTop: "16px" }}>1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This includes your name, email address, and bank connection data via Plaid.</p>

              <h2 style={{ color: "var(--text-primary)", fontSize: "20px", marginTop: "16px" }}>2. How We Use Information</h2>
              <p>We may use the information we collect about you to provide, maintain, and improve our Services, such as to facilitate transactions, process round-ups, send receipts, provide products and services you request, and send related information.</p>

              <h2 style={{ color: "var(--text-primary)", fontSize: "20px", marginTop: "16px" }}>3. Security</h2>
              <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. We never store your direct banking credentials; all connections are handled securely via Plaid.</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
