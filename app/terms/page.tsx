import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for J. Worra's official website. Read our terms and conditions for using this website.",
  alternates: {
    canonical: "https://jworra.com/terms",
  },
  openGraph: {
    title: "Terms of Service | J. Worra",
    description: "Terms of service for J. Worra's official website.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const sections = [
  {
    label: "Acceptance",
    content: [
      "By accessing jworra.com, you agree to these terms. If you don't agree, please refrain from using the site.",
    ],
  },
  {
    label: "Content",
    content: [
      "All music, text, images, logos, and design on this site belong to J. Worra unless otherwise noted. You're welcome to stream, share links, and enjoy the music — but please don't repackage, resell, or claim it as your own.",
      "For commercial use of any content, please reach out first.",
    ],
  },
  {
    label: "Your Use",
    content: [
      "You agree to use this site only for lawful purposes. Don't attempt to damage, disrupt, scrape, or gain unauthorized access to any part of it. Please be respectful.",
    ],
  },
  {
    label: "Third-Party Links",
    content: [
      "This site links to Spotify, Apple Music, SoundCloud, Bandsintown, Instagram, YouTube, and other platforms. We're not responsible for their content, practices, or availability.",
    ],
  },
  {
    label: "Disclaimer",
    content: [
      "The site is provided \"as is.\" We make no guarantees about uptime, accuracy, or compatibility with your particular setup. We'll do our best, but cannot be held responsible for unforeseen issues.",
    ],
  },
  {
    label: "Liability",
    content: [
      "J. Worra shall not be liable for any damages arising from your use of this site. If you encounter a problem, please let us know and we'll do our best to address it.",
    ],
  },
  {
    label: "Changes",
    content: [
      "These terms may be updated occasionally. Continued use after changes constitutes acceptance of the updated terms.",
    ],
  },
  {
    label: "Governing Law",
    content: [
      "These terms are governed by the laws of the State of California, United States.",
    ],
  },
  {
    label: "Contact",
    content: [
      'Questions? <a href="mailto:jworramgmt@milkhoneyla.com" class="terms-link">jworramgmt@milkhoneyla.com</a>.',
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="terms-page">
      <style>{`
        .terms-page {
          min-height: 100vh;
          background: #080808;
          color: white;
        }

        .terms-hero {
          padding: 8rem 1.25rem 3rem;
          max-width: 960px;
          margin: 0 auto;
        }

        @media (min-width: 640px) {
          .terms-hero {
            padding: 10rem 2rem 4rem;
          }
        }

        .terms-label {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.66);
          margin-bottom: 1rem;
        }

        .terms-title {
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(2.8rem, 8vw, 5.5rem);
          line-height: 0.92;
          text-transform: uppercase;
          color: white;
          margin-bottom: 1.2rem;
        }

        .terms-title span {
          color: #d94a3a;
        }

        .terms-intro {
          max-width: 34rem;
          color: rgba(255,255,255,0.58);
          font-size: clamp(1rem, 1.4vw, 1.1rem);
          line-height: 1.5;
        }

        .terms-body {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 1.25rem 5rem;
        }

        @media (min-width: 640px) {
          .terms-body {
            padding: 0 2rem 6rem;
          }
        }

        .terms-section {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 2rem 0;
        }

        .terms-section:first-of-type {
          border-top-color: rgba(255,255,255,0.18);
        }

        .terms-section h2 {
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          line-height: 0.92;
          text-transform: uppercase;
          color: white;
          margin-bottom: 1rem;
        }

        .terms-section p {
          color: rgba(255,255,255,0.6);
          font-size: 0.95rem;
          line-height: 1.7;
          font-weight: 300;
          max-width: 42rem;
        }

        .terms-section p + p {
          margin-top: 0.8rem;
        }

        .terms-link {
          color: #d94a3a;
          text-decoration: underline;
          text-underline-offset: 0.2rem;
          transition: color 0.2s ease;
        }

        .terms-link:hover {
          color: white;
        }

        .terms-footer {
          text-align: center;
          padding-bottom: 2rem;
          font-family: 'Courier New', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }

        @keyframes trm-fade-up {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .trm-anim {
          opacity: 0;
          animation: trm-fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .trm-d1 { animation-delay: 0.15s; }
        .trm-d2 { animation-delay: 0.3s; }
        .trm-d3 { animation-delay: 0.45s; }
        .terms-section {
          opacity: 0;
          animation: trm-fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .terms-section:nth-child(1) { animation-delay: 0.1s; }
        .terms-section:nth-child(2) { animation-delay: 0.2s; }
        .terms-section:nth-child(3) { animation-delay: 0.3s; }
        .terms-section:nth-child(4) { animation-delay: 0.4s; }
        .terms-section:nth-child(5) { animation-delay: 0.5s; }
        .terms-section:nth-child(6) { animation-delay: 0.6s; }
        .terms-section:nth-child(7) { animation-delay: 0.7s; }
        .terms-section:nth-child(8) { animation-delay: 0.8s; }
        .terms-section:nth-child(9) { animation-delay: 0.9s; }

        @media (prefers-reduced-motion: reduce) {
          .trm-anim,
          .terms-section {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <Navbar variant="solid" />

      <section className="terms-hero" aria-labelledby="terms-title">
        <p className="terms-label trm-anim trm-d1">Legal</p>
        <h1 id="terms-title" className="terms-title trm-anim trm-d2">
          Terms<br />
          <span>of Service</span>
        </h1>
        <p className="terms-intro trm-anim trm-d3">
          The legal stuff, translated into plain English.
        </p>
      </section>

      <div className="terms-body">
        {sections.map((section) => (
          <div key={section.label} className="terms-section">
            <h2>{section.label}</h2>
            {section.content.map((text, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
          </div>
        ))}
      </div>

      <p className="terms-footer">Last updated: May 29, 2026</p>

      <Footer />
    </div>
  );
}