
import PageLayout from "@/components/page-layout";
import { Metadata } from "next";
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
    <PageLayout
      title="Tour"
      subtitle="Live Dates"
      theme="dark"
      backgroundPattern="none"
    >
      <div className="min-h-[60vh] w-full max-w-6xl mx-auto px-4 sm:px-6">



        {/* Widget Container - Raw, Industrial */}
        <div className="w-full mb-24">

          {/* Custom Styles for Widget Override */}
          <div className="bandsintown-widget">
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  /* Container reset */
                  .bit-widget-container {
                    font-family: 'Terminal Grotesque', sans-serif !important;
                    background: transparent !important;
                  }
                  
                  /* Event Row */
                  .bit-event-list .bit-event {
                    border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                    padding: 24px 0 !important;
                    transition: background 0.2s ease;
                  }
                  .bit-event-list .bit-event:hover {
                    background: rgba(255,255,255,0.02) !important;
                  }

                  /* Date */
                  .bit-date {
                    font-family: 'Courier New', monospace !important;
                    color: rgba(255,255,255,0.6) !important;
                    font-size: 14px !important;
                    letter-spacing: 0.1em !important;
                    text-transform: uppercase !important;
                  }

                  /* Venue / Location */
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
                  }

                  /* Buttons */
                  .bit-button {
                    background-color: #fff !important;
                    color: #000 !important;
                    font-family: 'Courier New', monospace !important;
                    font-weight: bold !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.1em !important;
                    border-radius: 9999px !important;
                    padding: 12px 24px !important;
                    font-size: 11px !important;
                    border: none !important;
                    transition: transform 0.2s ease, opacity 0.2s ease !important;
                    box-shadow: 0 0 0 1px rgba(255,255,255,0.1);
                    text-decoration: none !important;
                    display: inline-block !important;
                  }
                  .bit-button:hover {
                    background-color: #e5e5e5 !important;
                    transform: scale(1.02);
                    opacity: 0.9;
                  }
                  /* Hide RSVP if specific RSVP styling is not desired, or style it differently */
                  /* For now, treat all buttons as primary actions */
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
            ></a>
          </div>
        </div>

        {/* Footer / Follow */}
        <div className="flex flex-col items-center text-center space-y-6 pt-12 border-t border-white/10">
          <span className="font-label text-white/40 block tracking-widest">// ALERTS</span>
          <h3 className="font-heading text-3xl text-white">NEVER MISS A SHOW</h3>
          <p className="text-white/60 font-light max-w-md mx-auto">
            Get notified when new dates are announced in your area.
          </p>
          <a
            href="https://www.bandsintown.com/a/5248787-j.-worra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-black font-label text-xs sm:text-sm tracking-widest font-bold rounded-full hover:bg-white/90 transition-all duration-300"
          >
            FOLLOW ON BANDSINTOWN
          </a>
        </div>

      </div>
    </PageLayout>
  );
}