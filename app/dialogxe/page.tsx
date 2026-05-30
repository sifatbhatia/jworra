import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import Image from "next/image";
import { FaInstagram, FaSpotify } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Dialogxe Label",
  description: "Dialogxe - Music 4 Dancing. The official record label by J. Worra.",
  openGraph: {
    title: "Dialogxe Label | J. Worra",
    description: "Dialogxe - Music 4 Dancing. The official record label by J. Worra.",
  },
};

export default function LabelPage() {
  return (
    <div className="dialogxe-page">
      <style>{`
        .dialogxe-page {
          min-height: 100vh;
          color: #090909;
          background:
            linear-gradient(180deg, rgba(248,248,244,0.92), rgba(229,226,218,0.92)),
            url('/dialogxe_bg.webp') center / cover;
          overflow-x: hidden;
        }

        .dialogxe-hero {
          min-height: 100svh;
          display: grid;
          grid-template-columns: 1fr;
          padding: 5rem 1.25rem 3rem;
          gap: 2.5rem;
          align-items: center;
        }
        @media (min-width: 960px) {
          .dialogxe-hero {
            grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
            align-items: center;
            padding: 5rem clamp(2rem, 4vw, 4rem) 4rem;
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
            url('/dialogxe_bg.webp') center / cover;
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
          color: rgba(0,0,0,0.42);
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
          justify-content: center;
          min-width: 0;
          gap: 2rem;
        }

        .dialogxe-kicker,
        .dialogxe-label {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.6);
        }

        .dialogxe-title {
          margin-top: 1rem;
          max-width: 720px;
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(2.8rem, 8vw, 5.5rem);
          line-height: 0.96;
          text-transform: uppercase;
          color: #090909;
        }

        .dialogxe-title span {
          color: #d62b24;
        }

        .dialogxe-manifesto {
          max-width: 34rem;
          color: rgba(0,0,0,0.78);
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

        /* ── Animations ── */
        @keyframes dlx-fade-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes dlx-logo-in {
          0% { opacity: 0; transform: rotate(-2deg) scale(0.92); }
          100% { opacity: 1; transform: rotate(-2deg) scale(1); }
        }
        .dlx-anim {
          opacity: 0;
          animation: dlx-fade-up 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .dlx-delay-1 { animation-delay: 0.2s; }
        .dlx-delay-2 { animation-delay: 0.35s; }
        .dlx-delay-3 { animation-delay: 0.5s; }
        .dlx-delay-4 { animation-delay: 0.65s; }
        .dialogxe-logo-stage {
          animation: dlx-logo-in 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s forwards;
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
        }

        @media (prefers-reduced-motion: reduce) {
          .dialogxe-button,
          .dlx-anim,
          .dialogxe-art,
          .dialogxe-logo-stage {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            transition: none;
          }
          .dialogxe-button:hover {
            transform: none;
          }
        }
      `}</style>

      <Navbar variant="solid" />

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
                placeholder="empty"
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
              <p className="dialogxe-kicker dlx-anim dlx-delay-1">Independent dance label</p>
              <h1 id="dialogxe-title" className="dialogxe-title dlx-anim dlx-delay-2">
                Music<br />
                <span>4</span> Dancing
              </h1>
              <p className="dialogxe-manifesto dlx-anim dlx-delay-3">
                Music 4 Dancing. No pitch deck, no manifesto. Just records for the room.
              </p>
              <div className="dialogxe-actions dlx-anim dlx-delay-4">
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


          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
