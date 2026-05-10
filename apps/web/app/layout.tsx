import type { Metadata } from "next";
import "./globals.css";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { BackgroundLayers } from "@/components/ui/background-layers";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Twoonie — Your Spare Change, Working Harder",
  description:
    "Twoonie rounds up every Canadian purchase to the nearest dollar and invests the difference on Solana. Earning yields banks can't touch. Start with the change in your pocket.",
  keywords: [
    "Canadian micro-investing",
    "Solana",
    "round-up investing",
    "Twoonie",
    "USDC yield",
    "Acorns Canada",
    "spare change investing",
  ],
  openGraph: {
    title: "Twoonie — Your Spare Change, Working Harder",
    description:
      "Twoonie rounds up every Canadian purchase to the nearest dollar and invests the difference on Solana.",
    url: "https://twoonie.app",
    siteName: "Twoonie",
    images: [
      {
        url: "https://twoonie.app/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twoonie — Your Spare Change, Working Harder",
    description:
      "Round-up investing on Solana for Canadians. Sub-cent fees. Real yield.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="twoonie-bg">
        <BackgroundLayers />
        <CursorGlow />
        {children}
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              background: "var(--bg-elevated)",
              border: "1px solid var(--border-default)",
              color: "var(--text-primary)",
            },
          }}
        />
      </body>
    </html>
  );
}
