import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from 'next/font/google';
import "./globals.css";

// Load Inter font with specific weights
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600']
});

export const metadata: Metadata = {
  title: "Movie Rating Pro - Precision Cinema Scoring",
  description: "A powerful Chrome extension for cinephiles.",
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/mrp-logo-text.png', sizes: 'any', type: 'image/png' },
    ],
    apple: [
      { url: '/mrp-logo-text.png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/mrp-logo-text.png', color: '#0B0A13' },
    ],
  },
  themeColor: '#0B0A13',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Movie Rating Pro',
  },
  formatDetection: {
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Windows 8/10 Tiles */}
        <meta name="msapplication-TileColor" content="#0B0A13" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* iOS PWA */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Pinned tab in Safari */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0B0A13" />
        
        {/* Favicon for legacy browsers */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#0B0A13] text-slate-300 antialiased selection:bg-violet-500/30 selection:text-violet-200">
        {children}
        <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" />
      </body>
    </html>
  );
}
