import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import Header from "@/components/layout/header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: "800",
});

export const metadata: Metadata = {
  title: {
    default:
      "BeyondDev | Simple Software Systems for Local Filipino Businesses",
    template: "%s | BeyondDev",
  },
  description:
    "We help local Filipino businesses replace messy manual workflows with simple custom software systems. Get your 14-Day Business System Starter today.",
  keywords: [
    "Filipino business software",
    "local business systems Philippines",
    "custom software for small business",
    "order tracker Philippines",
    "booking system Philippines",
    "inventory tracker",
    "business automation Philippines",
  ],
  authors: [{ name: "BeyondDev" }],
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: "BeyondDev",
    title: "BeyondDev | Simple Software Systems for Local Filipino Businesses",
    description:
      "We help local Filipino businesses replace messy manual workflows with simple custom software systems. Get your 14-Day Business System Starter today.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
