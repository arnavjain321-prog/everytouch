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
  title: "EveryTouch | 90 minutes of match film, edited to your every touch",
  description:
    "EveryTouch turns full match footage into a recruiter-ready highlight reel of every touch you take. Automatically. No editing skills required.",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "EveryTouch",
    description:
      "90 minutes of match film, edited to your every touch. Automatically. No editing skills required.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
