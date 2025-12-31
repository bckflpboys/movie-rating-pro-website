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

// JSON-LD Schema for rich snippets and AEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Movie Rating Pro",
  "headline": "AI-Powered Movie Rating & Tracking Chrome Extension",
  "alternativeHeadline": "The smartest way to rate and track movies",
  "image": "https://movie-pro.32d.one/mrp-logo-text.png",
  "applicationCategory": "BrowserExtension",
  "applicationSubCategory": "EntertainmentApplication",
  "operatingSystem": "Chrome, Edge, Brave, Opera, Chromium",
  "featureList": "AI Title Detection, Automatic Genre Detection, Custom Rating Criteria, Local Database, CSV Export, Dark Mode, Privacy-Focused",
  "softwareRequirements": "Google Chrome 88+ or compatible Chromium browser",
  "author": {
    "@type": "Organization",
    "name": "Devaura",
    "url": "https://devaura.co.za",
    "sameAs": [
      "https://twitter.com/devaura_co",
      "https://github.com/devaura",
      "https://linkedin.com/company/devaura"
    ]
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2025-12-31"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1250",
    "bestRating": "5",
    "worstRating": "1"
  },
  "description": "Movie Rating Pro is an AI-powered Chrome extension that automatically detects movie titles and genres from streaming services like Netflix and Prime Video. It allows users to rate films with precision using custom criteria and save their data locally."
};

export const metadata: Metadata = {
  title: {
    default: "Movie Rating Pro - AI-Powered Cinema Scoring & Tracking",
    template: "%s | Movie Rating Pro"
  },
  description: "The ultimate AI-powered Chrome extension for movie enthusiasts. Automatically detect titles & genres, rate films with precision, and track your cinematic journey.",
  keywords: ["movie rating", "film scoring", "chrome extension", "movie reviews", "film analysis", "cinema scoring", "AI movie tracker", "automatic genre detection", "letterboxd alternative", "imdb rating", "smart movie logger"],
  manifest: '/site.webmanifest',

  // Icons
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

  // Theme and PWA
  themeColor: '#0B0A13',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Movie Rating Pro',
  },

  // Format detection
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false
  },

  // Viewport settings
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover'
  },

  // Open Graph / Social Media
  openGraph: {
    title: 'Movie Rating Pro - Precision Cinema Scoring',
    description: 'Rate movies with uncompromising precision. The ultimate tool for film enthusiasts and critics alike.',
    url: 'https://movie-pro.32d.one',
    siteName: 'Movie Rating Pro',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://movie-pro.32d.one/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Movie Rating Pro - Precision Cinema Scoring',
        type: 'image/jpeg',
        secureUrl: 'https://movie-pro.32d.one/og-image.jpg'
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Movie Rating Pro - Precision Cinema Scoring',
    description: 'The ultimate tool for film enthusiasts and critics to rate movies with precision.',
    creator: '@moviepro',
    site: '@moviepro',
    images: [
      {
        url: 'https://movie-pro.32d.one/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Movie Rating Pro - Precision Cinema Scoring'
      }
    ],
  },

  // Additional metadata
  metadataBase: new URL('https://movie-pro.32d.one'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
    yandex: 'YANDEX_VERIFICATION_CODE',
  },

  // Other
  applicationName: 'Movie Rating Pro',
  authors: [{ name: 'Devaura', url: 'https://devaura.co.za' }],
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  creator: 'Devaura',
  publisher: 'Devaura',
  category: 'Entertainment',
  classification: 'Film Rating Tool',
  abstract: 'A powerful Chrome extension for precise movie ratings and film analysis.',
  archives: ['https://movie-pro.32d.one/sitemap.xml'],
  assets: ['https://movie-pro.32d.one/assets'],
  bookmarks: ['https://movie-pro.32d.one/bookmarks'],
};

// FAQ Schema for better AEO
function FaqSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the best AI movie rating extension for Chrome?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Movie Rating Pro is the leading AI-powered movie rating extension. It uses advanced algorithms to automatically detect movie titles and genres from any streaming site, allowing for instant, precise logging without manual entry."
              }
            },
            {
              "@type": "Question",
              "name": "How does Movie Rating Pro detect genres automatically?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Movie Rating Pro utilizes intelligent DOM analysis and AI pattern matching to scan the active webpage (e.g., Netflix, Prime Video) for genre keywords and metadata, instantly autofilling the category field for a seamless user experience."
              }
            },
            {
              "@type": "Question",
              "name": "Is Movie Rating Pro free to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Movie Rating Pro is completely free to use. All core features, including AI detection, custom fields, and local data storage, are available at no cost."
              }
            },
            {
              "@type": "Question",
              "name": "Does Movie Rating Pro track my browsing history?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Movie Rating Pro is designed with privacy first. All your ratings and data are stored locally on your device. We do not track your browsing history or store your personal data on external servers."
              }
            },
            {
              "@type": "Question",
              "name": "Can I export my movie ratings?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can easily export your entire movie rating database to CSV or JSON formats for backup or analysis in other tools."
              }
            }
          ]
        })
      }}
    />
  );
}

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

        {/* Preload critical assets */}
        <link rel="preload" href="/mrp-logo-text.png" as="image" />
        <link rel="preload" href="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" as="script" />

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

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <FaqSchema />

        {/* Performance optimizations */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="bg-[#0B0A13] text-slate-300 antialiased selection:bg-violet-500/30 selection:text-violet-200">
        {children}
        <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" />
      </body>
    </html>
  );
}
