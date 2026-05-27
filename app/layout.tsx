import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

/* ── Fonts ─────────────────────────────────────────────────────── */
const inter = Inter({
  subsets:  ['latin'],
  variable: '--font-inter',
  display:  'swap',
});

/* ── SEO Metadata ───────────────────────────────────────────────── */
const BASE_URL   = 'https://praisepause.app';
const SITE_NAME  = 'PraisePause';
const TITLE      = 'PraisePause — Turn Every Scroll Into Worship';
const DESCRIPTION =
  'PraisePause gently interrupts your social media scroll with a 30-second worship moment. ' +
  'Redeem your screen time with prayer, Scripture, and gratitude. Free forever on iOS & Android.';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:  TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'Christian app',
    'worship app',
    'screen time',
    'prayer app',
    'faith app',
    'PraisePause',
    'digital wellness',
    'Bible app',
    'devotional app',
    'Jesus app',
    'scroll worship',
    'spiritual discipline',
    'church app',
    'free prayer app',
    'Christian iOS app',
    'Christian Android app',
  ],
  authors: [{ name: 'PraisePause Team', url: BASE_URL }],
  creator: 'PraisePause',
  publisher: 'PraisePause',
  category: 'Lifestyle · Religion & Spirituality',

  /* Open Graph — drives Facebook, Instagram, and WhatsApp previews */
  openGraph: {
    type:        'website',
    url:          BASE_URL,
    siteName:     SITE_NAME,
    title:        TITLE,
    description:  DESCRIPTION,
    locale:       'en_US',
    images: [
      {
        url:    `${BASE_URL}/og-image.png`,
        width:   1200,
        height:  630,
        alt:    'PraisePause — Turn every scroll into worship',
      },
    ],
  },

  /* Twitter / X card */
  twitter: {
    card:        'summary_large_image',
    title:        TITLE,
    description:  DESCRIPTION,
    images:      [`${BASE_URL}/og-image.png`],
    creator:     '@PraisePauseApp',
    site:        '@PraisePauseApp',
  },

  /* App links */
  appLinks: {
    ios: {
      app_store_id: '000000000',
      url:          'https://apps.apple.com/app/praisepause',
    },
    android: {
      package:      'app.praisepause',
      url:          'https://play.google.com/store/apps/details?id=app.praisepause',
    },
  },

  /* Robots */
  robots: {
    index:           true,
    follow:          true,
    googleBot: {
      index:         true,
      follow:        true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },

  /* Canonical */
  alternates: {
    canonical: BASE_URL,
  },

  /* Verification (add values from Google Search Console / Bing) */
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SITE_VERIFICATION_TOKEN',
  },

  /* Icons */
  icons: {
    icon:       '/favicon.ico',
    shortcut:   '/favicon-16x16.png',
    apple:      '/apple-touch-icon.png',
  },

  /* Manifest for PWA */
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width:              'device-width',
  initialScale:        1,
  maximumScale:        5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3B82F6' },
    { media: '(prefers-color-scheme: dark)',  color: '#1E3A5F' },
  ],
};

/* ── JSON-LD structured data ────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type':       'WebSite',
      '@id':         `${BASE_URL}/#website`,
      url:            BASE_URL,
      name:           SITE_NAME,
      description:    DESCRIPTION,
      potentialAction: {
        '@type':       'SearchAction',
        target: {
          '@type':     'EntryPoint',
          urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type':         'MobileApplication',
      '@id':           `${BASE_URL}/#app`,
      name:             SITE_NAME,
      description:      DESCRIPTION,
      url:              BASE_URL,
      operatingSystem: 'iOS, Android',
      applicationCategory: 'LifestyleApplication',
      offers: {
        '@type':  'Offer',
        price:     '0',
        priceCurrency: 'USD',
      },
      aggregateRating: {
        '@type':       'AggregateRating',
        ratingValue:    '4.9',
        ratingCount:    '3200',
        bestRating:     '5',
        worstRating:    '1',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type':          'Question',
          name:              'Is PraisePause really free forever?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:    'Yes — Core worship pauses, daily Scripture, streaks, and shareable cards are permanently free. No trial, no paywall on essentials.',
          },
        },
        {
          '@type':          'Question',
          name:              'Does PraisePause work with TikTok and Instagram?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:    'Yes. PraisePause works alongside TikTok, Instagram, YouTube Shorts, Facebook, and more. After your interval, a gentle pause interrupts — then you return to your feed.',
          },
        },
      ],
    },
  ],
};

/* ── Root Layout ────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Apple smart app banner */}
        <meta name="apple-itunes-app" content="app-id=000000000" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
