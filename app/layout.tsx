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

// JSON-LD Schema for rich snippets
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Movie Rating Pro",
  "applicationCategory": "BrowserExtension",
  "operatingSystem": "Chrome",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1000+"
  }
};

export const metadata: Metadata = {
  title: {
    default: "Movie Rating Pro - Precision Cinema Scoring",
    template: "%s | Movie Rating Pro"
  },
  description: "The ultimate Chrome extension for movie enthusiasts. Rate films with precision, discover hidden gems, and track your cinematic journey with our powerful tools.",
  keywords: ["movie rating", "film scoring", "chrome extension", "movie reviews", "film analysis", "cinema scoring"],
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
export function FaqSchema() {
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
              "name": "What is Movie Rating Pro?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Movie Rating Pro is a Chrome extension that helps film enthusiasts rate movies with precision, discover hidden gems, and track their cinematic journey with powerful analytical tools."
              }
            },
            {
              "@type": "Question",
              "name": "How does the rating system work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our rating system uses a sophisticated algorithm that considers multiple aspects of filmmaking, including acting, direction, cinematography, and more, to provide a comprehensive and accurate rating."
              }
            },
            {
              "@type": "Question",
              "name": "Is Movie Rating Pro free to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Movie Rating Pro is completely free to use with all core features available at no cost. We may offer premium features in the future."
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
