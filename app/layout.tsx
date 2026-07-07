import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import { ProgressProvider } from "@/context/ProgressContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Marriage: Version Forever",
  description: "Built with Love. Tested by You. Deployed Forever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-[#FAF8F6] text-[#071A35]">
        <ProgressProvider>
          <Navbar />
          {children}
        </ProgressProvider>
      </body>
    </html>
  );
}