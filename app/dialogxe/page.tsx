import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import Image from "next/image";
import { FaInstagram, FaSoundcloud, FaSpotify } from "react-icons/fa";
import { SiBeatport } from "react-icons/si";

export const metadata: Metadata = {
  title: "Dialogxe Label",
  description: "Dialogxe - Music 4 Dancing. The official record label by J. Worra.",
  openGraph: {
    title: "Dialogxe Label | J. Worra",
    description: "Dialogxe - Music 4 Dancing. The official record label by J. Worra.",
  },
};

const platforms = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/album/4Ktfjs4DfhzMJ1gcK6NS91",
    icon: FaSpotify,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/dialogxe",
    icon: FaInstagram,
  },
  {
    label: "SoundCloud",
    href: "https://soundcloud.com/dialogxe",
    icon: FaSoundcloud,
  },
  {
    label: "Beatport",
    href: "https://beatport.com/label/dialogxe",
    icon: SiBeatport,
  },
];

const catalog = [
  {
    number: "DLX001",
    title: "New Sounds",
    format: "Digital single",
    href: "https://open.spotify.com/album/4Ktfjs4DfhzMJ1gcK6NS91",
  },
  {
    number: "DLX002",
    title: "Next Transmission",
    format: "Coming soon",
    href: "https://instagram.com/dialogxe",
  },
];

export default function LabelPage() {
  return (
    <div className="dialogxe-page">
      <style>{`
        .dialogxe-page {
          min-height: 100vh;
          color: #090909;
          background:
            linear-gradient(180deg, rgba(248,248,244,0.92), rgba(229,226,218,0.92)),
            url('/dialogxe_bg.png') center / cover;
          overflow-x: hidden;
        }

        .dialogxe-hero {
          min-height: 100svh;
          display: grid;
          grid-template-columns: 1fr;
          padding: 7rem 1.25rem 3rem;
          gap: 2.5rem;
        }
        @media (min-width: 960px) {
          .dialogxe-hero {
            grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
            align-items: stretch;
            padding: 7.5rem clamp(2rem, 4vw, 4rem) 4rem;
            gap: clamp(2rem, 4vw, 4rem);
          }
        }

        .dialogxe-art {
          position: relative;
          min-height: 58svh;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0,0,0,0.14);
          background:
            linear-gradient(135deg, rgba(255,255,255,0.68), rgba(255,255,255,0.18)),
            url('/dialogxe_bg.png') center / cover;
          overflow: hidden;
        }
        @media (min-width: 960px) {
          .dialogxe-art {
            min-height: calc(100svh - 11.5rem);
          }
        }

        .dialogxe-art::before,
        .dialogxe-art::after {
          content: "";
          position: absolute;
          pointer-events: none;
        }
        .dialogxe-art::before {
          inset: 1rem;
          border: 1px solid rgba(0,0,0,0.08);
        }
        .dialogxe-art::after {
          width: 34vw;
          max-width: 420px;
          aspect-ratio: 1;
          right: -10%;
          bottom: -14%;
          background: #d62b24;
          mix-blend-mode: multiply;
          filter: blur(4px);
          transform: rotate(-18deg);
          opacity: 0.9;
        }

        .dialogxe-logo-stage {
          position: relative;
          z-index: 1;
          width: min(88vw, 760px);
          aspect-ratio: 1900 / 407;
          transform: rotate(-2deg);
          filter: drop-shadow(0 1rem 1.25rem rgba(0,0,0,0.12));
        }

        .dialogxe-stamp {
          position: absolute;
          z-index: 2;
          left: 1rem;
          bottom: 1rem;
          display: grid;
          grid-template-columns: auto auto;
          gap: 0.4rem 1rem;
          font-family: 'Courier New', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.5);
        }
        @media (min-width: 640px) {
          .dialogxe-stamp {
            left: 1.5rem;
            bottom: 1.5rem;
          }
        }

        .dialogxe-copy {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-width: 0;
          gap: 2rem;
        }

        .dialogxe-kicker,
        .dialogxe-label,
        .dialogxe-meta {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }
        .dialogxe-kicker,
        .dialogxe-label {
          color: rgba(0,0,0,0.42);
        }

        .dialogxe-title {
          margin-top: 1rem;
          max-width: 720px;
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(3.8rem, 13vw, 9.5rem);
          line-height: 0.96;
          text-transform: uppercase;
          color: #090909;
        }

        .dialogxe-title span {
          color: #d62b24;
        }

        .dialogxe-manifesto {
          max-width: 34rem;
          color: rgba(0,0,0,0.66);
          font-size: clamp(1rem, 1.5vw, 1.15rem);
          line-height: 1.45;
          font-weight: 300;
        }

        .dialogxe-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .dialogxe-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          min-height: 2.85rem;
          padding: 0.85rem 1.25rem;
          border: 1px solid rgba(0,0,0,0.18);
          border-radius: 999px;
          color: #090909;
          background: rgba(255,255,255,0.38);
          font-family: 'Courier New', monospace;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }

        .dialogxe-button.primary {
          background: #090909;
          border-color: #090909;
          color: white;
        }

        .dialogxe-button:hover {
          transform: translateY(-2px);
          background: #d62b24;
          border-color: #d62b24;
          color: white;
        }

        .dialogxe-panel {
          border-top: 1px solid rgba(0,0,0,0.16);
          padding-top: 1.5rem;
        }

        .dialogxe-catalog {
          display: flex;
          flex-direction: column;
          margin-top: 1rem;
        }

        .dialogxe-release {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 1rem;
          padding: 1.1rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.12);
          color: #090909;
          text-decoration: none;
        }

        .dialogxe-release:first-child {
          border-top: 1px solid rgba(0,0,0,0.12);
        }

        .dialogxe-release-title {
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(1.7rem, 3.2vw, 3rem);
          line-height: 0.9;
          text-transform: uppercase;
        }

        .dialogxe-release:hover .dialogxe-release-title {
          color: #d62b24;
        }

        .dialogxe-meta {
          color: rgba(0,0,0,0.4);
        }

        .dialogxe-index {
          color: rgba(0,0,0,0.36);
          font-family: 'Courier New', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
        }

        .dialogxe-section {
          padding: 0 1.25rem 4rem;
        }
        @media (min-width: 960px) {
          .dialogxe-section {
            padding: 0 clamp(2rem, 4vw, 4rem) 5rem;
          }
        }

        .dialogxe-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          border-top: 1px solid rgba(0,0,0,0.16);
          padding-top: 1.5rem;
        }
        @media (min-width: 760px) {
          .dialogxe-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .dialogxe-note {
          min-height: 11rem;
          border-left: 1px solid rgba(0,0,0,0.16);
          padding-left: 1rem;
        }

        .dialogxe-note strong {
          display: block;
          margin: 0.6rem 0;
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: 2.3rem;
          line-height: 0.9;
          text-transform: uppercase;
        }

        .dialogxe-note p {
          max-width: 22rem;
          color: rgba(0,0,0,0.58);
          font-size: 0.92rem;
          line-height: 1.55;
        }

        @media (max-width: 520px) {
          .dialogxe-hero {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .dialogxe-actions {
            flex-direction: column;
          }
          .dialogxe-button {
            width: 100%;
          }
          .dialogxe-release {
            grid-template-columns: 1fr;
            gap: 0.45rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dialogxe-button,
          .dialogxe-release-title {
            transition: none;
          }
          .dialogxe-button:hover {
            transform: none;
          }
        }
      `}</style>

      <Navbar variant="solid" theme="light" />

      <main>
        <section className="dialogxe-hero" aria-labelledby="dialogxe-title">
          <div className="dialogxe-art">
            <div className="dialogxe-logo-stage">
              <Image
                src="/dialogxe_R1.png"
                alt="Dialogxe"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="dialogxe-stamp" aria-hidden="true">
              <span>Music 4 Dancing</span>
              <span>Los Angeles</span>
              <span>Est. 2026</span>
              <span>Cat. DLX001</span>
            </div>
          </div>

          <div className="dialogxe-copy">
            <div>
              <p className="dialogxe-kicker">Independent dance label</p>
              <h1 id="dialogxe-title" className="dialogxe-title">
                Music<br />
                <span>4</span> Dancing
              </h1>
              <p className="dialogxe-manifesto">
                Music 4 Dancing. No pitch deck, no manifesto. Just records for the room.
              </p>
              <div className="dialogxe-actions">
                <a
                  href="https://open.spotify.com/album/4Ktfjs4DfhzMJ1gcK6NS91"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dialogxe-button primary"
                >
                  <FaSpotify size={14} />
                  Stream DLX001
                </a>
                <a
                  href="https://instagram.com/dialogxe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dialogxe-button"
                >
                  <FaInstagram size={14} />
                  Follow Dialogxe
                </a>
              </div>
            </div>

            <div className="dialogxe-panel">
              <p className="dialogxe-label">Catalog</p>
              <div className="dialogxe-catalog">
                {catalog.map((release, index) => (
                  <a
                    key={release.number}
                    href={release.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dialogxe-release"
                  >
                    <span className="dialogxe-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="dialogxe-release-title">
                        {release.title}
                      </span>
                      <span className="dialogxe-meta block">
                        {release.number} / {release.format}
                      </span>
                    </span>
                    <span className="dialogxe-meta">Open</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="dialogxe-section" aria-label="Dialogxe principles">
          <div className="dialogxe-grid">
            <div className="dialogxe-note">
              <span className="dialogxe-label">01</span>
              <strong>No filler</strong>
              <p>Compact releases with a point of view, made to move quickly from studio to floor.</p>
            </div>
            <div className="dialogxe-note">
              <span className="dialogxe-label">02</span>
              <strong>Club first</strong>
              <p>Low-end, swing, pressure, and utility matter. The record has to work in the room.</p>
            </div>
            <div className="dialogxe-note">
              <span className="dialogxe-label">03</span>
              <strong>Stay weird</strong>
              <p>Dialogxe keeps the rough edges, the red marks, and the strange little choices.</p>
            </div>
          </div>

          <div className="dialogxe-actions" style={{ marginTop: "2rem" }}>
            {platforms.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="dialogxe-button"
                aria-label={label}
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
