import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Tour",
  description: "Catch J. Worra live. Upcoming tour dates and tickets.",
  openGraph: {
    title: "Tour | J. Worra",
    description: "Catch J. Worra live. Upcoming tour dates and tickets.",
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
          color: rgba(255,255,255,0.45);
          margin-bottom: 0.6rem;
        }
        .tour-heading {
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(3.5rem, 8vw, 8rem);
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
          font-size: clamp(2rem, 4vw, 3.5rem);
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

      <Navbar variant="solid" theme="dark" />

      <div className="tour-wrap">
        <div className="tour-left">
          <Image
            src="/about.jpg"
            alt="J. Worra performing"
            fill
            className="tour-left-img"
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
            <div className="bandsintown-widget">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    .bit-widget-container {
                      font-family: 'Terminal Grotesque', sans-serif !important;
                      background: transparent !important;
                      width: 100% !important;
                      max-width: 100% !important;
                      min-width: 0 !important;
                      overflow-x: hidden !important;
                      box-sizing: border-box !important;
                    }

                    .bandsintown-widget,
                    .bandsintown-widget *,
                    .bit-widget,
                    .bit-event-list,
                    .bit-event-list *,
                    .bit-widget-container,
                    .bit-widget-container * {
                      box-sizing: border-box !important;
                    }

                    .bit-widget,
                    .bit-event-list {
                      width: 100% !important;
                      max-width: 100% !important;
                      min-width: 0 !important;
                    }

                    .bit-event-list {
                      overflow-x: hidden !important;
                    }

                    .bit-event-list .bit-event {
                      border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                      padding: 24px 0 !important;
                      transition: background 0.2s ease;
                      width: 100% !important;
                      max-width: 100% !important;
                      min-width: 0 !important;
                    }
                    .bit-event-list .bit-event:hover {
                      background: rgba(255,255,255,0.02) !important;
                    }

                    .bit-date {
                      font-family: 'Courier New', monospace !important;
                      color: rgba(255,255,255,0.6) !important;
                      font-size: 14px !important;
                      letter-spacing: 0.1em !important;
                      text-transform: uppercase !important;
                    }

                    .bit-venue {
                      font-family: 'Terminal Grotesque', sans-serif !important;
                      font-size: 24px !important;
                      color: white !important;
                      margin-bottom: 4px !important;
                    }
                    .bit-location {
                      font-family: 'Courier New', monospace !important;
                      color: rgba(255,255,255,0.4) !important;
                      font-size: 12px !important;
                      text-transform: uppercase !important;
                      letter-spacing: 0.05em !important;
                      overflow-wrap: anywhere !important;
                    }

                    .bit-button {
                      background: linear-gradient(to bottom right, #ffffff, #e5e5e5) !important;
                      color: #000 !important;
                      font-family: 'Courier New', monospace !important;
                      font-weight: bold !important;
                      text-transform: uppercase !important;
                      letter-spacing: 0.1em !important;
                      border-radius: 9999px !important;
                      padding: 14px 24px !important;
                      font-size: 11px !important;
                      border: none !important;
                      transition: all 0.3s ease !important;
                      box-shadow: 0 0 20px rgba(255,255,255,0.15), inset 0 0 0 1px rgba(255,255,255,0.5) !important;
                      text-decoration: none !important;
                      display: inline-block !important;
                      text-align: center !important;
                    }
                    .bit-button:hover {
                      background: #943B2D !important;
                      color: white !important;
                      transform: scale(1.02);
                    }

                    @media (max-width: 480px) {
                      .bandsintown-widget {
                        width: calc(100vw - 3rem) !important;
                        max-width: calc(100vw - 3rem) !important;
                      }

                      .bit-widget-container,
                      .bit-widget,
                      .bit-event-list,
                      .bit-event-list .bit-event {
                        display: block !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        min-width: 0 !important;
                      }

                      .bit-event-list .bit-event,
                      .bit-event-list .bit-event > * {
                        float: none !important;
                        clear: both !important;
                      }

                      .bit-date,
                      .bit-venue,
                      .bit-location {
                        width: 100% !important;
                        max-width: 100% !important;
                      }

                      .bit-venue {
                        font-size: 20px !important;
                        line-height: 1.05 !important;
                      }

                      .bit-button {
                        width: 100% !important;
                        display: flex !important;
                        justify-content: center !important;
                        margin-top: 8px !important;
                        white-space: normal !important;
                      }
                    }
                  `,
                }}
              />
              <Script
                src="https://widget.bandsintown.com/main.min.js"
                strategy="afterInteractive"
                charSet="utf-8"
              />
              <a
                className="bit-widget-initializer"
                data-artist-name="J. Worra"
                data-display-local-dates="false"
                data-display-past-dates="false"
                data-auto-style="false"
                data-text-color="#FFFFFF"
                data-link-color="#FFFFFF"
                data-background-color="transparent"
                data-display-limit="15"
                data-display-start-time="false"
                data-link-text-color="#FFFFFF"
                data-display-lineup="false"
                data-display-play-my-city="false"
                data-separator-color="rgba(255, 255, 255, 0.1)"
                data-font="sans-serif"
              />
            </div>
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
