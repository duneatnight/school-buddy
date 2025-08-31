import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "School Buddy",
  description: "School Buddy app",
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
        <header className="w-full relative print:hidden">
          <div className="max-w-4xl mx-auto p-2 flex items-center justify-center">
            <h1 className="text-2xl font-semibold inline-flex items-center gap-2">
              <span>School Buddy</span>
              <span aria-hidden title="Pusheen" className="text-xl">
                🐱
              </span>
            </h1>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
