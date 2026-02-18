import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import LoadingScreen from "@/components/loading-screen";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const nohemi = localFont({
  src: "../public/fonts/Nohemi/Nohemi/Web-TT/Nohemi-Bold.woff2",
  variable: "--font-nohemi",
  weight: "700",
  display: "swap",
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-556QW4JP';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-V6W6965G0V';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jworra.com'),
  title: {
    default: "J. Worra - DJ and Producer",
    template: "%s | J. Worra"
  },
  description: "Official website for DJ and producer J. Worra. Stream latest releases, tour dates, and more.",
  keywords: ["J. Worra", "DJ", "producer", "electronic music", "house music", "techno", "music releases", "tour dates"],
  authors: [{ name: "J. Worra" }],
  creator: "J. Worra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jworra.com",
    title: "J. Worra - DJ and Producer",
    description: "Official website for DJ and producer J. Worra. Stream latest releases, tour dates, and more.",
    siteName: "J. Worra",
    images: [
      {
        url: "/emblem.png",
        width: 1200,
        height: 630,
        alt: "J. Worra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "J. Worra - DJ and Producer",
    description: "Official website for DJ and producer J. Worra. Stream latest releases, tour dates, and more.",
    images: ["/emblem.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'J. Worra',
    alternateName: 'Jamie Sitter',
    description: 'DJ and producer from Chicago to Los Angeles, specializing in house and techno music',
    url: 'https://jworra.com',
    image: 'https://jworra.com/emblem.png',
    jobTitle: 'DJ and Music Producer',
    knowsAbout: ['House Music', 'Techno', 'Electronic Music Production', 'DJ Performance'],
    sameAs: [
      'https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj',
      'https://music.apple.com/us/artist/j-worra/964744411',
      'https://soundcloud.com/jworra',
      'https://instagram.com/jworra',
      'https://www.beatport.com/artist/j-worra/123456',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Los Angeles',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Management',
        email: 'jworramgmt@milkhoneyla.com',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Bookings',
        email: 'marissa.loil@unitedtalent.com',
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');`,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(
              function(w,d,s,l,i){
                w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              }
            )(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Prevent Next.js router from causing 404 errors in static export */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable Next.js router functionality immediately
              (function() {
                // Prevent router from initializing
                var originalNext = window.next;
                Object.defineProperty(window, 'next', {
                  get: function() {
                    if (originalNext && originalNext.router) {
                      // Override router methods
                      originalNext.router.prefetch = function() {};
                      originalNext.router.push = function(url) { window.location.href = url; };
                      originalNext.router.replace = function(url) { window.location.href = url; };
                    }
                    return originalNext;
                  },
                  set: function(value) {
                    originalNext = value;
                    if (value && value.router) {
                      value.router.prefetch = function() {};
                      value.router.push = function(url) { window.location.href = url; };
                      value.router.replace = function(url) { window.location.href = url; };
                    }
                  }
                });

                // Catch and prevent router-related errors
                window.addEventListener('error', function(event) {
                  if (event.message && event.message.includes('__PAGE__.txt')) {
                    event.preventDefault();
                  }
                });

                window.addEventListener('unhandledrejection', function(event) {
                  if (event.reason && event.reason.message &&
                      event.reason.message.includes('__PAGE__.txt')) {
                    event.preventDefault();
                  }
                });
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} ${nohemi.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
