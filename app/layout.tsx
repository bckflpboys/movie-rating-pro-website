import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie Rating Pro - Precision Cinema Scoring",
  description: "A powerful Chrome extension for cinephiles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

      </head>
      <body className="bg-[#0B0A13] text-slate-300 antialiased selection:bg-violet-500/30 selection:text-violet-200">
        {children}
        <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" />
      </body>
    </html>
  );
}
