import Image from "next/image";
import { FaInstagram, FaTiktok, FaSpotify, FaApple, FaYoutube, FaTwitter, FaPlay, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

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
          <div className="relative px-4">
            <Image
              src="/emblem.png"
              alt="Emblem"
              width={80}
              height={80}
              className="mx-auto object-contain drop-shadow-lg max-w-[60px] sm:max-w-[80px] w-full h-auto mb-3 sm:mb-4 opacity-90 mix-blend-mode-screen"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent rounded-full blur-sm" />
          </div>
          <nav className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-white mb-3 sm:mb-4 font-heading px-4">
            <a
              href="/music"
              className="text-xs sm:text-sm md:text-base font-medium text-white/90 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 ease-out relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
            >
              Music
            </a>
            <a
              href="/tour"
              className="text-xs sm:text-sm md:text-base font-medium text-white/90 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 ease-out relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
            >
              Tour
            </a>
            <a
              href="/dialogxe"
              className="text-xs sm:text-sm md:text-base font-medium text-white/90 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 ease-out relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
            >
              Label
            </a>
            <a
              href="/about"
              className="text-xs sm:text-sm md:text-base font-medium text-white/90 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 ease-out relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-xs sm:text-sm md:text-base font-medium text-white/90 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 ease-out relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
            >
              Contact
            </a>
          </nav>
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
        <a
          href="/tour"
          className="group inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-semibold text-white bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-full hover:bg-white/30 hover:border-white/50 hover:scale-105 active:scale-95 transition-all duration-300 ease-out shadow-lg hover:shadow-xl overflow-hidden relative font-heading"
        >
          <span className="transition-transform duration-300 group-hover:translate-x-[-8px]">Upcoming Dates</span>
          <FaArrowRight size={12} className="sm:w-3.5 sm:h-3.5 transition-all duration-300 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 absolute right-3 sm:right-4" />
        </a>
      </div>

      {/* Bottom left text */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 z-10 text-white font-heading max-w-[calc(100%-10rem)] sm:max-w-[280px] md:max-w-none">
        <p className="text-xs sm:text-sm font-medium leading-relaxed">
          Dialogxe by J. Worra.{' '}
          <span className="md:inline block">
            <a
              href="/dialogxe"
              className="underline hover:text-white/80 transition-colors duration-300"
            >
              Out Now.
            </a>
          </span>
        </p>
      </div>
        </div>
      </div>
    </section>
  );
}
