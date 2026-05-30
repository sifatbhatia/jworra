'use client';

import { useEffect, useRef } from "react";

export default function BandsintownWidget() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const existing = document.querySelector("script[src*='bandsintown']");
    if (existing) {
      document.body.removeChild(existing);
    }

    const script = document.createElement("script");
    script.src = "https://widget.bandsintown.com/main.min.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bandsintown-widget">
      <style>{`
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
        .bit-widget, .bit-event-list {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
        }
        .bit-event-list { overflow-x: hidden !important; }
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
          background: #d94a3a !important;
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
        }
      `}</style>
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
  );
}
