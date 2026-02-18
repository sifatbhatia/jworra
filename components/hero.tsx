'use client';

import { FaInstagram, FaTiktok, FaSpotify, FaApple, FaYoutube, FaTwitter, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // If loading screen already completed (e.g. navigating back to home), start immediately
    if ((window as any).__loadingComplete) {
      setLoaded(true);
      return;
    }

    // Otherwise wait for the loading screen to finish
    const handleLoadingComplete = () => {
      setTimeout(() => setLoaded(true), 200);
    };

    window.addEventListener('loadingComplete', handleLoadingComplete);

    return () => {
      window.removeEventListener('loadingComplete', handleLoadingComplete);
    };
  }, []);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-black" style={{ height: '100svh' }}>

        {/* Video Background with Scale Animation */}
        <div className={`absolute inset-0 transition-transform duration-[2000ms] ease-out will-change-transform ${loaded ? 'scale-100' : 'scale-110'}`}>
          <video
            className="hero-video absolute inset-0 h-full w-full object-cover opacity-90"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/hero-bg.webm" type="video/webm" />
            <source src="/hero-bg.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center w-full max-w-4xl mx-auto px-4">

            {/* Logo Container - Stagger 1 */}
            <div
              className={`relative mb-6 sm:mb-8 transition-all duration-[1200ms] cubic-bezier(0.2, 0.8, 0.2, 1)
              ${loaded ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-12 scale-110 blur-xl'}
            `}
            >
              <style>{`
                .logo-wrap {
                  position: relative;
                  cursor: pointer;
                  width: clamp(280px, 65vw, 600px);
                  aspect-ratio: 1117.27 / 201.67;
                  margin: 0 auto;
                }
                .logo-layer {
                  position: absolute;
                  inset: 0;
                  will-change: transform, opacity;
                  mask-image: url('/jworra-logo.svg');
                  -webkit-mask-image: url('/jworra-logo.svg');
                  mask-size: contain;
                  -webkit-mask-size: contain;
                  mask-repeat: no-repeat;
                  -webkit-mask-repeat: no-repeat;
                  mask-position: center;
                  -webkit-mask-position: center;
                }
                /* Main white logo */
                .logo-main {
                  background-color: rgba(255, 255, 255, 0.9);
                  filter: drop-shadow(0 0 20px rgba(255,255,255,0.3));
                  transition: filter 0.4s ease;
                  overflow: hidden;
                }
                .logo-wrap:hover .logo-main {
                  filter: drop-shadow(0 0 40px rgba(255,255,255,0.6)) drop-shadow(0 0 80px rgba(148, 59, 45, 0.4));
                }
                /* Shimmer sweep */
                .logo-main::after {
                  content: '';
                  position: absolute;
                  inset: -20% -10%;
                  background: linear-gradient(
                    105deg,
                    transparent 20%,
                    rgba(255,255,255,0.4) 40%,
                    rgba(255,255,255,0.9) 50%,
                    rgba(255,255,255,0.4) 60%,
                    transparent 80%
                  );
                  transform: translateX(-150%);
                  pointer-events: none;
                }
                .logo-wrap:hover .logo-main::after {
                  animation: shimmer-sweep 0.7s ease-in-out forwards;
                }
                @keyframes shimmer-sweep {
                  0% { transform: translateX(-150%); }
                  100% { transform: translateX(150%); }
                }
                /* Chromatic aberration layers */
                .logo-chroma {
                  opacity: 0;
                  transition: opacity 0.25s ease, transform 0.25s ease;
                  pointer-events: none;
                }
                .logo-chroma-r {
                  background-color: rgba(200, 50, 40, 0.7);
                  mix-blend-mode: screen;
                }
                .logo-chroma-c {
                  background-color: rgba(40, 140, 200, 0.7);
                  mix-blend-mode: screen;
                }
                .logo-wrap:hover .logo-chroma-r {
                  opacity: 1;
                  transform: translate(6px, -2px);
                }
                .logo-wrap:hover .logo-chroma-c {
                  opacity: 1;
                  transform: translate(-6px, 2px);
                }
              `}</style>

              <div className="logo-wrap">
                {/* Chromatic aberration: Red channel */}
                <div className="logo-layer logo-chroma logo-chroma-r" />
                {/* Chromatic aberration: Cyan channel */}
                <div className="logo-layer logo-chroma logo-chroma-c" />
                {/* Main logo with shimmer */}
                <div className="logo-layer logo-main" />
              </div>
            </div>

            {/* Socials - Stagger 3 */}
            <ul
              className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 list-none px-4 mb-0 transition-all duration-[1200ms] delay-300 cubic-bezier(0.2, 0.8, 0.2, 1)
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            >
              {[
                { href: "https://www.instagram.com/jworra/", icon: FaInstagram, label: "Instagram" },
                { href: "https://www.tiktok.com/@jworra?lang=en", icon: FaTiktok, label: "TikTok" },
                { href: "https://twitter.com/JWorra", icon: FaTwitter, label: "X (Twitter)" },
                { href: "https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj", icon: FaSpotify, label: "Spotify" },
                { href: "https://music.apple.com/us/artist/j-worra/964744411", icon: FaApple, label: "Apple Music" },
                { href: "https://www.youtube.com/channel/UCKbul9QRhCawR1CsEFcKDtA", icon: FaYoutube, label: "YouTube" }
              ].map((item, i) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white transition-all duration-300 ease-out hover:bg-[#943B2D] hover:border-[#943B2D] hover:scale-110 active:scale-95"
                    aria-label={item.label}
                  >
                    <item.icon size={16} className="sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button - Stagger 4 (Restored Absolute Position) */}
            <div
              className={`absolute bottom-8 right-8 z-20 transition-all duration-[1200ms] delay-500 cubic-bezier(0.2, 0.8, 0.2, 1)
              ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
            `}
            >
              <Link
                href="/tour"
                className="group relative inline-flex items-center justify-center px-10 py-4 text-white bg-white/5 backdrop-blur-xl border border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:bg-[#943B2D] hover:border-[#943B2D] hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 text-xs sm:text-sm font-bold font-sans tracking-[0.2em] uppercase transition-transform duration-300 group-hover:-translate-x-3">Upcoming Dates</span>
                <FaArrowRight size={12} className="absolute right-4 z-10 sm:w-3.5 sm:h-3.5 transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />

                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
