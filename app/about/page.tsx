import PageLayout from "@/components/page-layout";
import { Metadata } from "next";
import Image from "next/image";
import { FaApple, FaEnvelope, FaHeart, FaInstagram, FaMusic, FaSoundcloud, FaSpotify, FaTrophy } from "react-icons/fa";
import { SiBeatport } from "react-icons/si";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about J. Worra, DJ and producer from Chicago to LA. Recognized by DJ Mag as 2019 Breakthrough Music Producer, playing festivals like EDC Vegas, Coachella, and Splash House.",
  openGraph: {
    title: "About | J. Worra",
    description: "Learn about J. Worra, DJ and producer from Chicago to LA. Recognized by DJ Mag as 2019 Breakthrough Music Producer.",
  },
};

export default function AboutPage() {
  return (
    <PageLayout
      title="About"
      subtitle="The story behind the music"
      backgroundPattern="paper"
    >

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Modern Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start min-h-[80vh]">

          {/* Left Column - Visual Element */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-6">
            <div className="relative w-64 h-64 lg:w-72 lg:h-72 mx-auto lg:mx-0">
              <Image
                src="/jworra-about.png"
                alt="J. Worra"
                fill
                className="object-cover rounded-2xl filter drop-shadow-2xl"
              />
            </div>


          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Hero Text */}
            <div className="space-y-4">
              <h1 className="font-heading heading-h1 font-bold text-white leading-tight">
                J. Worra
              </h1>
              <p className="text-xl text-white/70 leading-relaxed font-light">
                DJ and producer
              </p>
            </div>

            {/* Full Bio */}
            <div className="space-y-6 text-white/80 leading-relaxed">
              <p>
                Jamie Sitter, better known as J. Worra, is a Chicago native now thriving as a DJ and producer in Los Angeles.
                Fusing classic house with modern tech, she's become a standout in the dance music underground.
                Renowned for her innovative production and technical skills, she brings a unique swagger to her music while
                seamlessly blending her creative ventures in fashion and art.
              </p>

              <p>
                DJ Mag recognized her as the 2019 Breakthrough Music Producer of the Year, and she has released on acclaimed
                labels such as Never Worry Records, Higher Ground, Sink or Swim, Club Sweat, and Realm Records. Her remixes
                for GRiZ, Gryffin and Gorgon City, Kaskade, deadmau5, and Sidepiece have further solidified her as a sought-after talent.
              </p>

              <p>
                From festivals like EDC Las Vegas, Coachella, and Splash House to iconic clubs like The Brooklyn Mirage,
                Spybar Chicago, and Sound LA, J. Worra captivates audiences across the country with her dynamic performances.
              </p>

              <p>
                Offstage, she uses her platform to champion causes close to her heart, including LGBTQ youth, local charities,
                and animal rescue efforts. As one of house music's most authentic voices, she continues to push boundaries,
                delivering fresh tracks that resonate with both seasoned house heads and a new generation of fans.
              </p>
            </div>

            {/* Contact Info */}
            <div className="border-t border-white/5 pt-4 sm:pt-6 space-y-3 sm:space-y-4">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-white/60 text-xs sm:text-sm">
                <div>
                  <span className="text-white font-medium block mb-1">Management:</span>
                  <a
                    href="mailto:jworramgmt@milkhoneyla.com"
                    className="text-white/80 hover:text-white transition-colors underline hover:underline-offset-2 break-all"
                    style={{ textDecorationColor: '#800020' }}
                  >
                    jworramgmt@milkhoneyla.com
                  </a>
                </div>
                <div>
                  <span className="text-white font-medium block mb-1">Bookings:</span>
                  <a
                    href="mailto:marissa.loil@unitedtalent.com"
                    className="text-white/80 hover:text-white transition-colors underline hover:underline-offset-2 break-all"
                    style={{ textDecorationColor: '#800020' }}
                  >
                    marissa.loil@unitedtalent.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Social Bar */}
        <div className="mt-12 border-t border-white/5 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-xs uppercase tracking-wider">Connect</p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
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
                  className="group flex items-center gap-2 text-white/50 hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={16} className="flex-shrink-0" />
                  <span className="text-xs font-medium hidden sm:inline whitespace-nowrap">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}