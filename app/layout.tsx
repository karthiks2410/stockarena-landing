import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Stock Arena - India's Stock Market Fantasy Game",
  description: "Pick stocks. Compete with friends. Win bragging rights. India's first stock market fantasy game with real NSE/BSE prices.",
  keywords: ["stock market", "fantasy game", "trading", "NSE", "BSE", "India", "stocks", "competition"],
  authors: [{ name: "Stock Arena" }],
  openGraph: {
    title: "Stock Arena - India's Stock Market Fantasy Game",
    description: "Pick stocks. Compete with friends. Win bragging rights.",
    type: "website",
    locale: "en_IN",
    siteName: "Stock Arena",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stock Arena - India's Stock Market Fantasy Game",
    description: "Pick stocks. Compete with friends. Win bragging rights.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#0a0a0a] text-white">{children}</body>
    </html>
  );
}
