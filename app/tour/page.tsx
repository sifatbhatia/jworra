import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import Image from "next/image";
import BandsintownWidget from "./bandsintown-widget";

export const metadata: Metadata = {
  title: "Tour",
  description: "Catch J. Worra live. Upcoming tour dates and tickets for festivals, clubs, and late-night dance floor dispatches.",
  alternates: {
    canonical: "https://jworra.com/tour",
  },
  openGraph: {
    title: "Tour | J. Worra",
    description: "Catch J. Worra live. Upcoming tour dates and tickets for festivals, clubs, and late-night shows.",
    images: ["/emblem.webp"],
  },
};

export default function TourPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "white" }}>
      <style>{`
        .tour-wrap {
          display: grid;
          grid-template-columns: 1fr;
          min-height: 100vh;
        }
        @media (min-width: 900px) {
          .tour-wrap {
            grid-template-columns: 0.9fr 1.1fr;
          }
        }

        .tour-left {
          position: relative;
          height: 62svh;
          overflow: hidden;
        }
        @media (min-width: 900px) {
          .tour-left {
            height: 100svh;
            position: sticky;
            top: 0;
          }
        }
        .tour-left-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: brightness(0.55) contrast(1.08);
          animation: tour-zoom-in 2s ease-out forwards;
        }
        .tour-left-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(8,8,8,0.08) 0%,
            transparent 38%,
            rgba(8,8,8,0.78) 86%,
            rgba(8,8,8,1) 100%
          );
        }
        .tour-left-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 2rem;
        }
        @media (min-width: 900px) {
          .tour-left-content {
            padding: clamp(2rem, 5vw, 4rem);
          }
        }

        .tour-eyebrow,
        .tour-section-label {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
        }
        .tour-eyebrow {
          color: rgba(255,255,255,0.66);
          margin-bottom: 0.6rem;
        }
        .tour-heading {
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(2.8rem, 8vw, 5.5rem);
          line-height: 0.88;
          color: white;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
        }
        .tour-tagline {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          line-height: 1.5;
          max-width: 340px;
        }

        .tour-right {
          min-width: 0;
          padding: 4rem 1.5rem 3rem;
          background: #080808;
        }
        @media (min-width: 900px) {
          .tour-right {
            padding: 10rem 2.5rem 5rem;
            border-left: 1px solid rgba(255,255,255,0.06);
          }
        }

        .tour-section-label {
          color: rgba(255,255,255,0.2);
          margin-bottom: 1.5rem;
        }
        .tour-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin: 3rem 0;
        }
        .tour-alert {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
          max-width: 34rem;
        }
        .tour-alert h2 {
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          line-height: 0.95;
          color: white;
          text-transform: uppercase;
        }
        .tour-alert p {
          color: rgba(255,255,255,0.52);
          font-size: 0.95rem;
          line-height: 1.6;
          font-weight: 300;
        }
        .tour-follow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.8rem 1.5rem;
          background: white;
          color: black;
          font-family: 'Courier New', monospace;
          font-weight: bold;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 99px;
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .tour-follow:hover {
          transform: scale(1.02);
          background: #943B2D;
          color: white;
        }

        @keyframes tour-fade-up {
          0% { opacity: 0; transform: translateY(30px); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes tour-zoom-in {
          0% { transform: scale(1.15); opacity: 0.75; }
          100% { transform: scale(1); opacity: 1; }
        }
        .tour-anim {
          opacity: 0;
          animation: tour-fade-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .tour-delay-1 { animation-delay: 0.2s; }
        .tour-delay-2 { animation-delay: 0.4s; }
        .tour-delay-3 { animation-delay: 0.6s; }

        .bandsintown-widget {
          width: 100%;
          max-width: 100%;
          min-width: 0;
          overflow-x: hidden;
        }
      `}</style>

      <Navbar variant="solid" />

      <div className="tour-wrap">
        <div className="tour-left">
          <Image
            src="/tour_image.webp"
            alt="J. Worra performing"
            className="tour-left-img"
            width={1200}
            height={1600}
            priority
          />
          <div className="tour-left-gradient" />
          <div className="tour-left-content">
            <p className="tour-eyebrow tour-anim tour-delay-1">Live dates</p>
            <h1 className="tour-heading tour-anim tour-delay-2">Tour</h1>
            <p className="tour-tagline tour-anim tour-delay-3">
              Upcoming rooms, festivals, and late-night dance floor dispatches.
            </p>
          </div>
        </div>

        <div className="tour-right">
          <div className="tour-section-label">Upcoming shows</div>

          <div className="w-full min-w-0 overflow-hidden">
            <BandsintownWidget />
          </div>

          <div className="tour-divider" />

          <div className="tour-alert">
            <div className="tour-section-label">Alerts</div>
            <h2>Never miss a show</h2>
            <p>Get notified when new dates are announced in your area.</p>
            <a
              href="https://www.bandsintown.com/a/5248787-j.-worra"
              target="_blank"
              rel="noopener noreferrer"
              className="tour-follow"
            >
              Follow on Bandsintown
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
