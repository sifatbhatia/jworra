
import PageLayout from "@/components/page-layout";
import { Metadata } from "next";
import { FaSpotify, FaApple, FaSoundcloud, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { SiBeatport } from "react-icons/si";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with J. Worra. Management, bookings, and social media channels.",
  openGraph: {
    title: "Contact | J. Worra",
    description: "Get in touch with J. Worra. Management, bookings, and social media channels.",
  },
};

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact"
      subtitle="Get in touch"
      theme="dark"
      backgroundPattern="none"
    >
      <div className="min-h-[60vh] flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 sm:px-6">

        {/* Main Grid: Management & Bookings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mb-24">

          {/* Management */}
          <div className="flex flex-col items-center text-center space-y-4">
            <span className="font-label text-white/40 block tracking-widest">// MANAGEMENT</span>
            <div className="space-y-1">
              <h3 className="font-heading text-3xl sm:text-4xl text-white">Milk & Honey</h3>
              <a
                href="mailto:jworramgmt@milkhoneyla.com"
                className="block text-[3.5vw] sm:text-[2vw] lg:text-2xl text-white/60 hover:text-[#943B2D] transition-colors duration-300 font-light border-b border-transparent hover:border-[#943B2D]/40 pb-1 whitespace-nowrap"
              >
                jworramgmt@milkhoneyla.com
              </a>
            </div>
          </div>

          {/* Bookings */}
          <div className="flex flex-col items-center text-center space-y-4">
            <span className="font-label text-white/40 block tracking-widest">// BOOKINGS</span>
            <div className="space-y-1">
              <h3 className="font-heading text-3xl sm:text-4xl text-white">United Talent</h3>
              <a
                href="mailto:marissa.loil@unitedtalent.com"
                className="block text-[3.5vw] sm:text-[2vw] lg:text-2xl text-white/60 hover:text-[#943B2D] transition-colors duration-300 font-light border-b border-transparent hover:border-[#943B2D]/40 pb-1 whitespace-nowrap"
              >
                marissa.loil@unitedtalent.com
              </a>
            </div>
          </div>


          {/* Dialogxe Label */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center text-center space-y-4 mt-8 md:mt-0">
            <span className="font-label text-white/40 block tracking-widest">// DIALOGXE LABEL</span>
            <div className="space-y-2 max-w-lg">
              <h3 className="font-heading text-3xl text-white">Inquiries</h3>
              <p className="text-white/60 font-light leading-relaxed">
                For demos and label inquiries, reach out via official channels.<br />
                Follow <a href="https://instagram.com/dialogxe" className="text-white hover:underline decoration-1 underline-offset-4 transition-all">@dialogxe</a> for updates.
              </p>
            </div>
          </div>

        </div>

        <div className="w-full h-px bg-white/10 mb-16 max-w-2xl" />

        {/* Social Directory */}
        <div className="w-full max-w-4xl">
          <div className="text-center mb-10">
            <span className="font-label text-white/40 block tracking-widest mb-2">// FOLLOW J. WORRA</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white">SOCIALS</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "INSTAGRAM", url: "https://instagram.com/jworra", icon: FaInstagram },
              { label: "SPOTIFY", url: "https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj", icon: FaSpotify },
              { label: "SOUNDCLOUD", url: "https://soundcloud.com/jworra", icon: FaSoundcloud },
              { label: "APPLE MUSIC", url: "https://music.apple.com/us/artist/j-worra/964744411", icon: FaApple },
              { label: "TIKTOK", url: "https://www.tiktok.com/@jworra", icon: FaTiktok },
              { label: "TWITTER", url: "https://twitter.com/JWorra", icon: FaTwitter },
              { label: "YOUTUBE", url: "https://www.youtube.com/channel/UCKbul9QRhCawR1CsEFcKDtA", icon: FaYoutube },
              { label: "BEATPORT", url: "https://www.beatport.com/artist/j-worra/123456", icon: SiBeatport },
            ].map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-3 sm:p-6 border border-white/5 hover:border-[#943B2D] bg-white/5 hover:bg-[#943B2D] backdrop-blur-sm transition-all duration-300 rounded-2xl hover:scale-[1.02]"
              >
                <social.icon size={24} className="text-white/40 group-hover:text-white mb-2 sm:mb-3 transition-colors duration-300" />
                <span className="font-label text-[10px] tracking-wide sm:tracking-widest text-white/60 group-hover:text-white transition-colors duration-300 whitespace-nowrap">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </PageLayout>
  );
}