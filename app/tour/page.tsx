import PageLayout from "@/components/page-layout";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Tour",
  description: "Catch J. Worra live at venues worldwide. View upcoming tour dates, get tickets, and follow on Bandsintown for show notifications.",
  openGraph: {
    title: "Tour | J. Worra",
    description: "Catch J. Worra live at venues worldwide. View upcoming tour dates and get tickets.",
  },
};

export default function TourPage() {
  return (
    <PageLayout
      title="Tour"
      subtitle="Upcoming shows and performances"
      backgroundPattern="gradient"
    >
      <div className="relative max-w-5xl mx-auto space-y-6 sm:space-y-8">
        {/* Tour Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
            Catch J. Worra live at venues around the world. Check back regularly for new dates and locations.
          </p>
        </div>

        {/* Official Bandsintown Widget */}
        <div className="border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 bg-gradient-to-b from-white/[0.02] to-transparent">
          <div className="bandsintown-widget">
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  /* Base: keep widget auto-styled, align with site palette */
                  .bit-widget { background: transparent !important; color: #ffffff !important; }
                  .bit-widget .bit-header, .bit-widget .bit-footer { display: none !important; }
                  /* Hide the top Track pill/link */
                  .bit-widget > a:first-of-type { display: none !important; }

                  /* Typography & subtle spacing to match site */
                  .bit-widget * { font-family: var(--font-open-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important; }
                  .bit-event { padding: 18px 0 !important; border-bottom: 1px solid rgba(255,255,255,0.08) !important; }
                  .bit-event:last-child { border-bottom: none !important; }
                  .bit-widget .bit-venue { color: #ffffff !important; font-weight: 600 !important; }
                  .bit-widget .bit-location, .bit-widget .bit-date, .bit-widget .bit-time { color: rgba(255,255,255,0.60) !important; }

                  /* Buttons: rounded white primary, outlined RSVP */
                  .bit-widget .bit-button { background: #ffffff !important; color: #000000 !important; border: none !important; border-radius: 9999px !important; padding: 8px 16px !important; font-weight: 600 !important; }
                  .bit-widget .bit-button:hover { background: rgba(255,255,255,0.9) !important; }
                  .bit-widget .bit-button.bit-rsvp, .bit-widget .bit-rsvp { background: transparent !important; border: 1px solid rgba(255,255,255,0.35) !important; color: rgba(255,255,255,0.85) !important; }

                  /* Mobile tweaks */
                  @media (max-width: 640px) {
                    .bit-event { padding: 16px 0 !important; }
                    .bit-widget .bit-button { padding: 7px 14px !important; font-size: 12px !important; }
                  }
                `,
              }}
            />
            <Script
              src="https://widget.bandsintown.com/main.min.js"
              strategy="afterInteractive"
              charSet="utf-8"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <a 
                    class="bit-widget-initializer" 
                    data-artist-name="J. Worra" 
                    data-display-local-dates="false" 
                    data-display-past-dates="false" 
                    data-auto-style="true" 
                    data-text-color="#FFFFFF" 
                    data-link-color="#800020" 
                    data-background-color="transparent" 
                    data-display-limit="15" 
                    data-display-start-time="true" 
                    data-link-text-color="#FFFFFF" 
                    data-display-lineup="false" 
                    data-display-play-my-city="false" 
                    data-separator-color="rgba(255, 255, 255, 0.1)"
                  ></a>
                `
              }}
            />
          </div>
        </div>

        {/* Follow Section */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="text-center max-w-xl mx-auto space-y-6">
            <div>
              <h3 className="text-white/40 text-xs uppercase tracking-wider mb-3">Never Miss A Show</h3>
              <p className="text-white/60 text-sm sm:text-base">
                Follow J. Worra on Bandsintown to get notified about new tour dates in your area.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://www.bandsintown.com/a/5248787-j.-worra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black text-sm sm:text-base font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] shadow-lg"
              >
                <span>Follow on Bandsintown</span>
              </a>
              <p className="text-white/30 text-xs mt-4">
                Get tour updates and announcements
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}