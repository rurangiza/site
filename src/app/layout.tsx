import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Footer from "@/app/components/Footer/Footer";
import Navbar from '@/app/components/Navbar/Navbar'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rurangiza.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Arsène Rurangiza",
    template: "%s | Arsène Rurangiza",
  },
  description: "Software developer, indie-hacker, music lover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased tracking-tigh">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-[#FCFCFC] text-gray-900 dark:text-zinc-200">
          <main className="max-w-[60ch] mx-auto w-full space-y-4">
          <Navbar />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
