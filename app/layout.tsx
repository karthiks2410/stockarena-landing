import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stocksarena.net"),
  title: "Stock Arena - India's Stock Market Fantasy Game",
  description: "Pick stocks. Compete with friends. Win bragging rights. India's first stock market fantasy game with real NSE/BSE prices.",
  keywords: ["stock market", "fantasy game", "trading", "NSE", "BSE", "India", "stocks", "competition", "fantasy stock", "virtual trading"],
  authors: [{ name: "Stock Arena" }],
  openGraph: {
    title: "Stock Arena - India's Stock Market Fantasy Game",
    description: "Pick stocks. Compete with friends. Win bragging rights. Play India's first stock market fantasy game with real NSE/BSE prices.",
    type: "website",
    locale: "en_IN",
    siteName: "Stock Arena",
    url: "https://stocksarena.net",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Stock Arena - India's Stock Market Fantasy Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stock Arena - India's Stock Market Fantasy Game",
    description: "Pick stocks. Compete with friends. Win bragging rights.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
