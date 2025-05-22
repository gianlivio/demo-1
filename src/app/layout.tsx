import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Gianlivio Dev',
  description: 'Progetto personale con Next.js + Tailwind',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-white dark:bg-gray-900 shadow-md px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-yellow-400">
              Gianlivio.dev
            </Link>
            <div className="space-x-4">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:underline">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:underline">
                About
              </Link>
              <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:underline">
                Progetti
              </Link>
            </div>
          </div>
        </div>

        <main className="min-h-screen bg-gray-100 dark:bg-gray-800 px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
