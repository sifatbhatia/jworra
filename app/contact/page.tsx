import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import { FaApple, FaInstagram, FaSoundcloud, FaSpotify, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiBeatport } from "react-icons/si";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with J. Worra. Management, bookings, and social media channels.",
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
            radial-gradient(circle at 15% 18%, rgba(148,59,45,0.24), transparent 28rem),
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
          color: rgba(255,255,255,0.38);
        }

        .contact-title {
          margin-top: 1rem;
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(4.2rem, 14vw, 11rem);
          line-height: 0.96;
          text-transform: uppercase;
          color: white;
        }

        .contact-title span {
          color: #943B2D;
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
          font-size: clamp(2.4rem, 5vw, 4.5rem);
          line-height: 0.86;
          text-transform: uppercase;
        }

        .contact-meta {
          color: rgba(255,255,255,0.32);
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
          color: #ff6b5f;
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
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        @media (min-width: 640px) {
          .social-strip {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          min-height: 3.25rem;
          padding: 0.8rem 0.95rem;
          border: 1px solid rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.62);
          background: rgba(255,255,255,0.035);
          text-decoration: none;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }

        .social-link:hover {
          color: white;
          border-color: #943B2D;
          background: rgba(148,59,45,0.62);
          transform: translateY(-2px);
        }

        .contact-small {
          font-size: 0.58rem;
          letter-spacing: 0.16em;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-email,
          .social-link {
            transition: none;
          }
          .contact-email:hover,
          .social-link:hover {
            transform: none;
          }
        }
      `}</style>

      <Navbar variant="solid" theme="dark" />

      <main className="contact-main">
        <section className="contact-hero" aria-labelledby="contact-title">
          <p className="contact-label">Contact</p>
          <h1 id="contact-title" className="contact-title">
            Get<br />
            <span>in</span> touch
          </h1>
          <p className="contact-note">
            Management, bookings, label, and socials.
          </p>
        </section>

        <section className="contact-board" aria-label="Contact directory">
          <div className="contact-card">
            <div className="contact-card-head">
              <h2>Management</h2>
              <span className="contact-meta">Milk & Honey</span>
            </div>
            <a href="mailto:jworramgmt@milkhoneyla.com" className="contact-email">
              jworramgmt@milkhoneyla.com
            </a>
          </div>

          <div className="contact-card">
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

          <div className="contact-card">
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

          <div className="contact-card">
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
