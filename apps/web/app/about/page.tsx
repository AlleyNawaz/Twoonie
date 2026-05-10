import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { SectionReveal } from "@/components/ui/section-reveal";

export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      
      <section style={{ paddingTop: "160px", paddingBottom: "100px", paddingLeft: "24px", paddingRight: "24px", flex: 1 }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <SectionReveal>
            <h1 className="display-md" style={{ marginBottom: "32px", color: "var(--text-primary)" }}>
              About <span className="gradient-text">Twoonie</span>
            </h1>
            <p style={{ fontSize: "18px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "24px" }}>
              At Twoonie, we believe that investing shouldn&apos;t be a privilege reserved for the wealthy or the financially savvy. It should be a natural extension of your daily life.
            </p>
            <p style={{ fontSize: "18px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "24px" }}>
              Our mission is to democratize access to wealth creation by turning everyday spending into long-term investing. By seamlessly rounding up your purchases and automatically investing the spare change on Solana, we make building a portfolio effortless, passive, and accessible to everyone.
            </p>
            <p style={{ fontSize: "18px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "48px" }}>
              Whether you&apos;re starting with $5 or $500, Twoonie is designed to help you grow your money quietly in the background while you go about your day.
            </p>

            <h2 className="display-sm" style={{ marginBottom: "24px", color: "var(--text-primary)" }}>
              Our Vision
            </h2>
            <p style={{ fontSize: "18px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "24px" }}>
              We envision a world where every transaction is an opportunity for growth. By leveraging the speed and low costs of the Solana blockchain, we&apos;re building an on-ramp for millions to participate in the financial system without the friction of traditional banking.
            </p>
            <p style={{ fontSize: "18px", color: "var(--text-secondary)", lineHeight: 1.8 }}>
              No minimums. No monthly fees. Just simple, automated investing built for the future.
            </p>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
