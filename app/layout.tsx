import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpenClaw Dojo - Learn to Deploy AI Agents",
  description:
    "Step-by-step OpenClaw setup guides. Deploy AI agents on WhatsApp/Telegram in a weekend. 100+ successful deployments.",
  keywords: [
    "OpenClaw",
    "AI agents",
    "WhatsApp bot",
    "Telegram bot",
    "AI deployment",
    "tutorial",
  ],
  openGraph: {
    title: "OpenClaw Dojo",
    description: "Learn to deploy AI agents with copy-paste tutorials",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-text-primary`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
