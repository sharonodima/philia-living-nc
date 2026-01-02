import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SkipLink from "@/components/SkipLink";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://philialivingnc.com'),
  title: {
    default: "Philia Living - Quality and Affordable In-Home Health Care in North Carolina",
    template: "%s | Philia Living"
  },
  description: "Philia Living provides compassionate, professional in-home health care services throughout North Carolina. Our caregivers visit your home to deliver personalized care with dignity and respect.",
  keywords: [
    "in-home health care",
    "home care services",
    "North Carolina home care",
    "elderly care at home",
    "senior care services",
    "personal care assistance",
    "companion care",
    "respite care",
    "Philia Living",
    "homecare North Carolina",
    "caregiver services",
    "aging in place",
    "home health aide"
  ],
  authors: [{ name: "Philia Living", url: "https://philialivingnc.com" }],
  creator: "Philia Living",
  publisher: "Philia Living",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://philialivingnc.com",
    siteName: "Philia Living",
    title: "Philia Living - Quality and Affordable In-Home Health Care",
    description: "Compassionate in-home health care services throughout North Carolina. Our caregivers bring professional care directly to your home.",
    images: [
      {
        url: "/images/hero-bg.avif",
        width: 1200,
        height: 630,
        alt: "Philia Living - In-Home Health Care Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Philia Living - In-Home Health Care Services",
    description: "Compassionate in-home health care services throughout North Carolina",
    images: ["/images/hero-bg.avif"],
  },
  verification: {
    google: "m7mwrBboBkjdNyiI3W3nXYkaJIHTJFUsDQX6VgGMjnQ",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://philialivingnc.com",
  },
  category: "Healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://philialivingnc.com",
    "name": "Philia Living",
    "alternateName": "Philia Living Homecare",
    "url": "https://philialivingnc.com",
    "logo": "https://philialivingnc.com/logo.png",
    "description": "Philia Living provides compassionate, professional in-home health care services throughout North Carolina.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "NC",
      "addressCountry": "US"
    },
    "telephone": "(919) 519-8477",
    "email": "marse@philialivingnc.com",
    "priceRange": "$$",
    "areaServed": {
      "@type": "State",
      "name": "North Carolina"
    },
    "serviceType": [
      "In-Home Health Care",
      "Personal Care Services",
      "Companion Care",
      "Respite Care",
      "Senior Care",
      "Elderly Care"
    ],
    "sameAs": [
      // Add your social media profiles here when available
      // "https://www.facebook.com/philialiving",
      // "https://www.linkedin.com/company/philialiving"
    ]
  };

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <SkipLink />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navigation />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
