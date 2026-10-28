import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for J. Worra's official website. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://jworra.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | J. Worra",
    description: "Privacy policy for J. Worra's official website.",
    images: ["/emblem.webp"],
  },
  robots: {
    index: false,
    follow: true,
  },
};

const sections = [
  {
    label: "Introduction",
    content: [
      `J. Worra ("we", "us", or "our") operates jworra.com. This page outlines how we handle any personal information you might share while visiting the site.`,
      "We keep things straightforward. If you have questions, reach out anytime.",
    ],
  },
  {
    label: "What We Collect",
    content: [
      "Like most websites, we collect basic analytics — pages visited, browser type, time spent on site. This comes from Google Analytics and Google Tag Manager, and it helps us understand what people actually listen to and click on.",
      "If you contact us directly through the site (email, social links), we'll keep whatever you share so we can respond. We don't sell, rent, or trade any of it.",
    ],
  },
  {
    label: "Cookies",
    content: [
      "We use minimal cookies — mostly from Google Analytics (page views) and Spotify (embedded players). These are standard for any music site and don't track you across the web.",
      "You can block cookies in your browser settings. The site will still work, though the analytics will be blind.",
    ],
  },
  {
    label: "Third Parties",
    content: [
      "This site embeds content from Spotify, Apple Music, SoundCloud, Bandsintown, YouTube, and Instagram. Each platform has its own privacy policy, and interacting with their embeds is subject to their terms.",
      "We also use Google Tag Manager and Google Analytics for site stats. We don't control what those services collect — check their policies for details.",
    ],
  },
  {
    label: "Changes",
    content: [
      "If this policy changes, the date below gets updated. That's the notice.",
    ],
  },
  {
    label: "California Privacy Rights",
    content: [
      "California residents are entitled to additional rights under the California Consumer Privacy Act (CCPA). You have the right to know what personal information we collect, request deletion of your data, and opt out of any sale of personal information. We do not sell your personal information.",
      "We do not respond to browser Do Not Track signals at this time, as there is no consistent industry standard for handling them. If a standard is established, we will update this policy accordingly.",
      "To exercise your California privacy rights, email <a href=\"mailto:jworramgmt@milkhoneyla.com\" class=\"privacy-link\">jworramgmt@milkhoneyla.com</a>. We will respond within the timeframe required by law.",
    ],
  },
  {
    label: "Contact",
    content: [
      'Questions? Email <a href="mailto:jworramgmt@milkhoneyla.com" class="privacy-link">jworramgmt@milkhoneyla.com</a>.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <style>{`
        .privacy-page {
          min-height: 100vh;
          background: #080808;
          color: white;
        }

        .privacy-hero {
          padding: 8rem 1.25rem 3rem;
          max-width: 960px;
          margin: 0 auto;
        }

        @media (min-width: 640px) {
          .privacy-hero {
            padding: 10rem 2rem 4rem;
          }
        }

        .privacy-label {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.66);
          margin-bottom: 1rem;
        }

        .privacy-title {
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(2.8rem, 8vw, 5.5rem);
          line-height: 0.92;
          text-transform: uppercase;
          color: white;
          margin-bottom: 1.2rem;
        }

        .privacy-title span {
          color: #d94a3a;
        }

        .privacy-intro {
          max-width: 34rem;
          color: rgba(255,255,255,0.58);
          font-size: clamp(1rem, 1.4vw, 1.1rem);
          line-height: 1.5;
        }

        .privacy-body {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 1.25rem 5rem;
        }

        @media (min-width: 640px) {
          .privacy-body {
            padding: 0 2rem 6rem;
          }
        }

        .privacy-section {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 2rem 0;
        }

        .privacy-section:first-of-type {
          border-top-color: rgba(255,255,255,0.18);
        }

        .privacy-section h2 {
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          line-height: 0.92;
          text-transform: uppercase;
          color: white;
          margin-bottom: 1rem;
        }

        .privacy-section p {
          color: rgba(255,255,255,0.6);
          font-size: 0.95rem;
          line-height: 1.7;
          font-weight: 300;
          max-width: 42rem;
        }

        .privacy-section p + p {
          margin-top: 0.8rem;
        }

        .privacy-link {
          color: #d94a3a;
          text-decoration: underline;
          text-underline-offset: 0.2rem;
          transition: color 0.2s ease;
        }

        .privacy-link:hover {
          color: white;
        }

        .privacy-footer {
          text-align: center;
          padding-bottom: 2rem;
          font-family: 'Courier New', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }

        @keyframes priv-fade-up {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .priv-anim {
          opacity: 0;
          animation: priv-fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .priv-d1 { animation-delay: 0.15s; }
        .priv-d2 { animation-delay: 0.3s; }
        .priv-d3 { animation-delay: 0.45s; }
        .privacy-section {
          opacity: 0;
          animation: priv-fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .privacy-section:nth-child(1) { animation-delay: 0.1s; }
        .privacy-section:nth-child(2) { animation-delay: 0.2s; }
        .privacy-section:nth-child(3) { animation-delay: 0.3s; }
        .privacy-section:nth-child(4) { animation-delay: 0.4s; }
        .privacy-section:nth-child(5) { animation-delay: 0.5s; }
        .privacy-section:nth-child(6) { animation-delay: 0.6s; }

        @media (prefers-reduced-motion: reduce) {
          .priv-anim,
          .privacy-section {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <Navbar variant="solid" />

      <section className="privacy-hero" aria-labelledby="privacy-title">
        <p className="privacy-label priv-anim priv-d1">Legal</p>
        <h1 id="privacy-title" className="privacy-title priv-anim priv-d2">
          Privacy<br />
          <span>Policy</span>
        </h1>
        <p className="privacy-intro priv-anim priv-d3">
          The short version: we respect your privacy and don&apos;t do anything shady with your data.
        </p>
      </section>

      <div className="privacy-body">
        {sections.map((section) => (
          <div key={section.label} className="privacy-section">
            <h2>{section.label}</h2>
            {section.content.map((text, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
          </div>
        ))}
      </div>

      <p className="privacy-footer">Last updated: May 29, 2026</p>

      <Footer />
    </div>
  );
}
