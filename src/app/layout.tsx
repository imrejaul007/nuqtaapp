import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalHeader from "@/components/GlobalHeader";
import GlobalFooter from "@/components/GlobalFooter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nuqta - Smart Rewards & Payment Intelligence for the GCC",
  description: "Earn universal rewards on everyday spending and always know the smartest way to pay. Nuqta connects payments, rewards, and loyalty into one intelligent system for the UAE & GCC.",
  keywords: "rewards, loyalty, payments, BNPL, UAE, GCC, smart pay, cashback, points",
  openGraph: {
    title: "Nuqta - Smart Rewards & Payment Intelligence",
    description: "Earn universal rewards on everyday spending and always know the smartest way to pay.",
    type: "website",
    siteName: "Nuqta",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nuqta - Payment Intelligence & Universal Rewards for the GCC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuqta - Smart Rewards & Payment Intelligence",
    description: "Earn universal rewards on everyday spending and always know the smartest way to pay.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#0a1628]`}>
        <GlobalHeader />
        <main className="pt-14 sm:pt-16 min-h-screen">
          {children}
        </main>
        <GlobalFooter />
      </body>
    </html>
  );
}
