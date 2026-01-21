import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
