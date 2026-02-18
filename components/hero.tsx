
import { FaInstagram, FaTiktok, FaSpotify, FaApple, FaYoutube, FaTwitter, FaPlay, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import Navbar from "./navbar";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100svh' }}>
      {/* Video Background */}
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-bg.webm" type="video/webm" />
        <source src="/hero-bg.mov" type="video/quicktime" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay for better text readability and cinematic effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center" style={{ height: '100svh' }}>
        <div className="text-center">
          <div className="relative px-4 mb-3 sm:mb-4" style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: 'clamp(200px, 50vw, 500px)',
                aspectRatio: '1117.27 / 201.67',
                WebkitMaskImage: "url('/jworra-logo.svg')",
                maskImage: "url('/jworra-logo.svg')",
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
              }}
            />
          </div>

          <Navbar variant="transparent" />
          <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 list-none px-4">
            <li>
              <a
                href="https://www.instagram.com/jworra/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 hover:border-white/50 hover:scale-110 active:scale-95 transition-all duration-300 ease-out"
                aria-label="Instagram"
              >
                <FaInstagram size={14} className="sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@jworra?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 hover:border-white/50 hover:scale-110 active:scale-95 transition-all duration-300 ease-out"
                aria-label="TikTok"
              >
                <FaTiktok size={14} className="sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/JWorra"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 hover:border-white/50 hover:scale-110 active:scale-95 transition-all duration-300 ease-out"
                aria-label="X (Twitter)"
              >
                <FaTwitter size={14} className="sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 hover:border-white/50 hover:scale-110 active:scale-95 transition-all duration-300 ease-out"
                aria-label="Spotify"
              >
                <FaSpotify size={14} className="sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </li>
            <li>
              <a
                href="https://music.apple.com/us/artist/j-worra/964744411"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 hover:border-white/50 hover:scale-110 active:scale-95 transition-all duration-300 ease-out"
                aria-label="Apple Music"
              >
                <FaApple size={14} className="sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCKbul9QRhCawR1CsEFcKDtA"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 hover:border-white/50 hover:scale-110 active:scale-95 transition-all duration-300 ease-out"
                aria-label="YouTube"
              >
                <FaYoutube size={14} className="sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </li>
          </ul>
          {/* Call-to-action button positioned at bottom right */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-10">
            <Link
              href="/tour"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-300 ease-out shadow-lg hover:shadow-xl uppercase tracking-wide text-[10px] sm:text-xs font-bold font-sans"
            >
              <span>Upcoming Dates</span>
              <FaArrowRight size={12} className="sm:w-3.5 sm:h-3.5 transition-all duration-300 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 absolute right-3 sm:right-4" />
            </Link>
          </div>


        </div>
      </div>
    </section>
  );
}
