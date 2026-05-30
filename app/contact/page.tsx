import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import { FaApple, FaInstagram, FaSoundcloud, FaSpotify, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiBeatport } from "react-icons/si";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with J. Worra. Management, bookings, and social media channels. Email jworramgmt@milkhoneyla.com or find J. Worra on Instagram, TikTok, Spotify, and more.",
  alternates: {
    canonical: "https://jworra.com/contact",
  },
  openGraph: {
    title: "Contact | J. Worra",
    description: "Get in touch with J. Worra. Management, bookings, and social media channels.",
  },
};

const socialLinks = [
  { label: "Instagram", url: "https://instagram.com/jworra", icon: FaInstagram },
  { label: "Spotify", url: "https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj", icon: FaSpotify },
  { label: "SoundCloud", url: "https://soundcloud.com/jworra", icon: FaSoundcloud },
  { label: "Apple Music", url: "https://music.apple.com/us/artist/j-worra/964744411", icon: FaApple },
  { label: "TikTok", url: "https://www.tiktok.com/@jworra", icon: FaTiktok },
  { label: "X", url: "https://twitter.com/JWorra", icon: FaTwitter },
  { label: "YouTube", url: "https://www.youtube.com/channel/UCKbul9QRhCawR1CsEFcKDtA", icon: FaYoutube },
  { label: "Beatport", url: "https://www.beatport.com/artist/j-worra/564016", icon: SiBeatport },
];

export default function ContactPage() {
  return (
    <div className="contact-page">
      <style>{`
        .contact-page {
          min-height: 100vh;
          color: white;
          background:
            radial-gradient(circle at 15% 18%, rgba(217,74,58,0.24), transparent 28rem),
            radial-gradient(circle at 88% 8%, rgba(255,255,255,0.08), transparent 24rem),
            #050505;
          overflow-x: hidden;
        }

        .contact-main {
          min-height: 100svh;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          padding: 7.5rem 1.25rem 4rem;
        }

        @media (min-width: 960px) {
          .contact-main {
            grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
            align-items: end;
            padding: 8rem clamp(2rem, 4vw, 4rem) 5rem;
          }
        }

        .contact-hero {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          min-height: 42svh;
        }

        .contact-label,
        .contact-meta,
        .contact-small {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .contact-label {
          color: rgba(255,255,255,0.66);
        }

        .contact-title {
          margin-top: 1rem;
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(2.8rem, 8vw, 5.5rem);
          line-height: 0.92;
          text-transform: uppercase;
          color: white;
        }

        .contact-title span {
          color: #d94a3a;
        }

        .contact-note {
          max-width: 34rem;
          margin-top: 1.4rem;
          color: rgba(255,255,255,0.58);
          font-size: clamp(1rem, 1.4vw, 1.1rem);
          line-height: 1.45;
        }

        .contact-board {
          display: grid;
          gap: 1rem;
        }

        .contact-card {
          border-top: 1px solid rgba(255,255,255,0.14);
          padding: 1.35rem 0 1.1rem;
        }

        .contact-card:first-child {
          border-top-color: rgba(255,255,255,0.28);
        }

        .contact-card-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.85rem;
        }

        .contact-card h2 {
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          line-height: 0.88;
          text-transform: uppercase;
        }

        .contact-meta {
          color: rgba(255,255,255,0.66);
          white-space: nowrap;
        }

        .contact-email {
          display: block;
          width: fit-content;
          max-width: 100%;
          color: rgba(255,255,255,0.66);
          font-size: clamp(1rem, 2vw, 1.35rem);
          line-height: 1.45;
          text-decoration: none;
          overflow-wrap: anywhere;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .contact-email + .contact-email {
          margin-top: 0.35rem;
        }

        .contact-email:hover {
          color: #d94a3a;
          transform: translateX(0.3rem);
        }

        .dialogxe-contact {
          color: rgba(255,255,255,0.58);
          line-height: 1.6;
        }

        .dialogxe-contact a {
          color: white;
          text-decoration: underline;
          text-underline-offset: 0.25rem;
          text-decoration-thickness: 1px;
        }

        .social-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 1.5rem;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.5rem 1rem;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.04);
          text-decoration: none;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          transition: all 0.25s ease;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }

        .social-link:hover {
          color: white;
          border-color: #d94a3a;
          background: #d94a3a;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(217,74,58,0.3);
        }

        /* ── Animations ── */
        @keyframes cnt-fade-up {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .cnt-anim {
          opacity: 0;
          animation: cnt-fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .cnt-d1 { animation-delay: 0.15s; }
        .cnt-d2 { animation-delay: 0.3s; }
        .cnt-d3 { animation-delay: 0.45s; }
        .cnt-d4 { animation-delay: 0.55s; }
        .cnt-d5 { animation-delay: 0.65s; }
        .cnt-d6 { animation-delay: 0.75s; }

        @media (prefers-reduced-motion: reduce) {
          .contact-email,
          .social-link,
          .cnt-anim {
            animation: none !important;
            opacity: 1 !important;
            transition: none;
          }
          .contact-email:hover,
          .social-link:hover {
            transform: none;
          }
        }
      `}</style>

      <Navbar variant="solid" />

      <main className="contact-main">
        <section className="contact-hero" aria-labelledby="contact-title">
          <p className="contact-label cnt-anim cnt-d1">Contact</p>
          <h1 id="contact-title" className="contact-title cnt-anim cnt-d2">
            Get<br />
            <span>in</span> touch
          </h1>
          <p className="contact-note cnt-anim cnt-d3">
            Management, bookings, label, and socials.
          </p>
        </section>

        <section className="contact-board" aria-label="Contact directory">
          <div className="contact-card cnt-anim cnt-d3">
            <div className="contact-card-head">
              <h2>Management</h2>
              <span className="contact-meta">Milk & Honey</span>
            </div>
            <a href="mailto:jworramgmt@milkhoneyla.com" className="contact-email">
              jworramgmt@milkhoneyla.com
            </a>
          </div>

          <div className="contact-card cnt-anim cnt-d4">
            <div className="contact-card-head">
              <h2>Bookings</h2>
              <span className="contact-meta">United Talent</span>
            </div>
            <a href="mailto:shaq.milli@unitedtalent.com" className="contact-email">
              shaq.milli@unitedtalent.com
            </a>
            <a href="mailto:marissa.loil@unitedtalent.com" className="contact-email">
              marissa.loil@unitedtalent.com
            </a>
          </div>

          <div className="contact-card cnt-anim cnt-d5">
            <div className="contact-card-head">
              <h2>Dialogxe</h2>
              <span className="contact-meta">Label</span>
            </div>
            <p className="dialogxe-contact">
              Label updates live at{" "}
              <a href="https://instagram.com/dialogxe" target="_blank" rel="noopener noreferrer">
                @dialogxe
              </a>
              .
            </p>
          </div>

          <div className="contact-card cnt-anim cnt-d6">
            <div className="contact-card-head">
              <h2>Socials</h2>
              <span className="contact-meta">J. Worra</span>
            </div>
            <div className="social-strip">
              {socialLinks.map(({ label, url, icon: Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={label}
                >
                  <span className="contact-small">{label}</span>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
