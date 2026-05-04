import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MockDataProvider } from "@/context/MockDataContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BPTI - Best Performance Team Survey",
  description: "Evaluate your team's core cultural drivers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <MockDataProvider>
          {children}
        </MockDataProvider>
      </body>
    </html>
  );
}
