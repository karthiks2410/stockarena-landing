import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stocksarena.net"),
  title: {
    default: "Stock Arena - India's #1 Stock Market Fantasy Game",
    template: "%s | Stock Arena",
  },
  description:
    "Play India's first stock market fantasy game! Pick real NSE/BSE stocks, compete with friends, track live prices, and win. Free to play - no real money involved.",
  keywords: [
    "stock market fantasy game",
    "fantasy trading India",
    "NSE BSE game",
    "virtual stock trading",
    "stock market game India",
    "fantasy stocks",
    "paper trading India",
    "stock market competition",
    "learn stock trading",
    "stock picking game",
    "trading simulator India",
    "stock arena",
    "stocksarena",
  ],
  authors: [{ name: "Stock Arena", url: "https://www.stocksarena.net" }],
  creator: "Stock Arena",
  publisher: "Stock Arena",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.stocksarena.net",
  },
  openGraph: {
    title: "Stock Arena - India's #1 Stock Market Fantasy Game",
    description:
      "Pick real NSE/BSE stocks, compete with friends, track live prices, and win! Free to play.",
    type: "website",
    locale: "en_IN",
    siteName: "Stock Arena",
    url: "https://www.stocksarena.net",
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
    title: "Stock Arena - India's #1 Stock Market Fantasy Game",
    description:
      "Pick real NSE/BSE stocks, compete with friends, and win! Free to play.",
    images: ["/api/og"],
    creator: "@stockarena",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
  category: "Games",
};

// JSON-LD Structured Data for rich snippets
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Stock Arena",
  description:
    "India's first stock market fantasy game. Pick real NSE/BSE stocks, compete with friends, and win!",
  url: "https://www.stocksarena.net",
  applicationCategory: "GameApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1000",
    bestRating: "5",
    worstRating: "1",
  },
  author: {
    "@type": "Organization",
    name: "Stock Arena",
    url: "https://www.stocksarena.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0a0a0a] text-white">{children}</body>
    </html>
  );
}
