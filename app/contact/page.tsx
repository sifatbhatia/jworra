import PageLayout from "@/components/page-layout";
import { Metadata } from "next";
import { FaApple, FaEnvelope, FaInstagram, FaMusic, FaSoundcloud, FaSpotify } from "react-icons/fa";
import { SiBeatport } from "react-icons/si";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with J. Worra for bookings, management inquiries, and collaborations. Contact information for management and booking agents.",
  openGraph: {
    title: "Contact | J. Worra",
    description: "Get in touch with J. Worra for bookings, management inquiries, and collaborations.",
  },
};

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact"
      subtitle="Get in touch"
      backgroundPattern="paper"
    >

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <FaEnvelope className="text-white/60" size={18} />
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white">Management</h3>
              </div>
              <a
                href="mailto:jworramgmt@milkhoneyla.com"
                className="text-white/80 hover:text-white transition-colors underline hover:underline-offset-2 text-sm sm:text-base md:text-lg break-all"
                style={{ textDecorationColor: '#800020' }}
              >
                jworramgmt@milkhoneyla.com
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <FaEnvelope className="text-white/60" size={18} />
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white">Bookings</h3>
              </div>
              <a
                href="mailto:marissa.loil@unitedtalent.com"
                className="text-white/80 hover:text-white transition-colors underline hover:underline-offset-2 text-sm sm:text-base md:text-lg break-all"
                style={{ textDecorationColor: '#800020' }}
              >
                marissa.loil@unitedtalent.com
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-b border-white/10 py-6 sm:py-8 mb-8 md:mb-12">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Follow J. Worra</h3>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: FaSpotify, label: "Spotify", url: "https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj" },
              { icon: FaApple, label: "Apple Music", url: "https://music.apple.com/us/artist/j-worra/964744411" },
              { icon: FaSoundcloud, label: "SoundCloud", url: "https://soundcloud.com/jworra" },
              { icon: SiBeatport, label: "Beatport", url: "https://www.beatport.com/artist/j-worra/123456" },
              { icon: FaInstagram, label: "Instagram", url: "https://instagram.com/jworra" }
            ].map(({ icon: Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <Icon size={20} className="text-white/60 group-hover:text-white transition-colors" />
                </div>
                <span className="text-white/50 group-hover:text-white text-xs sm:text-sm font-medium transition-colors">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Label Contact */}
        <div className="border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6">
            <FaMusic className="text-white/60" size={24} />
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Dialogxe Label</h3>
          <p className="text-white/60 leading-relaxed mb-4">
            For all inquiries regarding releases on Dialogxe, please reach out through the official channels.
          </p>
          <p className="text-sm text-white/40">
            Follow <a
              href="https://instagram.com/jworra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white underline underline-offset-2 transition-colors"
            >
              @jworra
            </a> on Instagram for updates.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}