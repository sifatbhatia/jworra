'use client';

import { FaInstagram, FaTiktok, FaSpotify, FaApple, FaYoutube, FaTwitter, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type LatestTrack = {
  name: string;
  spotifyUrl: string;
};

export default function Hero({ latestTrack }: { latestTrack: LatestTrack | null }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const readyTimeout = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(readyTimeout);
  }, []);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-black" style={{ height: '100svh' }}>

        {/* Video Background with Scale Animation */}
        <div className={`absolute inset-0 transition-transform duration-[2000ms] ease-out will-change-transform ${loaded ? 'scale-100' : 'scale-110'}`}>
          <Image
            src="/hero-poster.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 object-cover"
          />
          <video
            className="hero-video absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-poster.webp"
            aria-hidden="true"
          >
            <source src="/hero-bg.webm" type="video/webm" />
            <source src="/hero-bg.mov" type="video/quicktime" />
          </video>
        </div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80 pointer-events-none" />



        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center w-full max-w-4xl mx-auto px-4">

            {/* Announcement above the logo. */}
            <div className={`flex justify-center mb-3 sm:mb-4 transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
              <style>{`
                @keyframes toast-bg-shift {
                  0%, 100% { transform: translateX(-30%); }
                  50% { transform: translateX(30%); }
                }
                .hero-upcoming-dates {
                  bottom: calc(2rem + env(safe-area-inset-bottom, 0px));
                }
                .toast-pill {
                  position: relative;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  gap: 0.75rem;
                  padding: 0.7rem 1.2rem;
                  background: rgba(255,255,255,0.10);
                  backdrop-filter: blur(24px) saturate(1.15);
                  -webkit-backdrop-filter: blur(24px) saturate(1.15);
                  border: 1px solid rgba(255,255,255,0.24);
                  border-radius: 32px;
                  box-shadow: 0 4px 24px rgba(0,0,0,0.3);
                  width: min(90vw, clamp(280px, 65vw, 500px));
                  max-width: none;
                  overflow: hidden;
                  animation: toast-glow 4s ease-in-out infinite;
                }
                .toast-pill::before {
                  content: '';
                  position: absolute;
                  inset: 0;
                  background: linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.18) 50%, transparent 80%);
                  animation: toast-bg-shift 8s ease-in-out infinite;
                  will-change: transform;
                  pointer-events: none;
                  border-radius: 32px;
                }
                @keyframes toast-glow {
                  0%, 100% { box-shadow: 0 4px 24px rgba(0,0,0,0.3); }
                  50% { box-shadow: 0 4px 32px rgba(255,255,255,0.16), 0 4px 24px rgba(0,0,0,0.3); }
                }
                .toast-text {
                  font-size: clamp(0.58rem, 1.2vw, 0.8rem);
                  color: rgba(255,255,255,0.85);
                  line-height: 1.35;
                  font-family: 'Montserrat', sans-serif;
                }
                .toast-text strong {
                  color: white;
                  font-weight: 600;
                }
                .toast-links {
                  display: flex;
                  gap: 0.35rem;
                  flex-shrink: 0;
                }
                .toast-link {
                  display: inline-flex;
                  align-items: center;
                  gap: 0.3rem;
                  padding: 0.3rem 0.65rem;
                  border-radius: 16px;
                  font-size: clamp(0.5rem, 1vw, 0.65rem);
                  font-weight: 600;
                  font-family: 'Montserrat', sans-serif;
                  text-decoration: none;
                  letter-spacing: 0.04em;
                  transition: all 0.25s ease;
                }
                .toast-link-spotify {
                  background: rgba(255,255,255,0.12);
                  color: rgba(255,255,255,0.9);
                  border: 1px solid rgba(255,255,255,0.22);
                }
                .toast-link-spotify:hover {
                  background: rgba(255,255,255,0.85);
                  border-color: rgba(255,255,255,0.85);
                  color: #080808;
                }
                .toast-link-sc {
                  background: rgba(255,121,0,0.15);
                  color: #ff7900;
                  border: 1px solid rgba(255,121,0,0.25);
                }
                .toast-link-sc:hover {
                  background: #ff7900;
                  color: white;
                }
                @media (max-width: 525px) {
                  .toast-pill {
                    flex-wrap: wrap;
                    gap: 0.3rem;
                    padding: 0.45rem 0.7rem;
                    text-align: center;
                  }
                  .toast-text { font-size: 0.58rem; white-space: nowrap; }
                  .toast-link { font-size: 0.5rem; padding: 0.2rem 0.4rem; }
                }
                @media (prefers-reduced-motion: reduce) {
                  .toast-pill {
                    animation: none !important;
                  }
                }
              `}</style>
              <div className="toast-pill">
                <span className="toast-text">
                  <strong>Out now</strong>{latestTrack ? `: ${latestTrack.name}` : " on Spotify"}
                </span>
                <span className="toast-links">
                  <a href={latestTrack?.spotifyUrl ?? "https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj"} target="_blank" rel="noopener noreferrer" className="toast-link toast-link-spotify">
                    <FaSpotify size={10} /> Listen
                  </a>
                </span>
              </div>
            </div>

            {/* Logo Container - Stagger 1 */}
            <div
              className={`relative mb-6 sm:mb-8 transition-all duration-[1200ms] cubic-bezier(0.2, 0.8, 0.2, 1)
              ${loaded ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-12 scale-110 blur-xl'}
            `}
            >
              <style>{`
                .logo-wrap {
                  position: relative;
                  display: block;
                  cursor: pointer;
                  width: clamp(280px, 65vw, 600px);
                  aspect-ratio: 1117.27 / 201.67;
                  margin: 0 auto;
                  font-size: 0;
                  line-height: 0;
                  font-weight: inherit;
                }
                .logo-heading-label {
                  position: absolute;
                  width: 1px;
                  height: 1px;
                  padding: 0;
                  margin: -1px;
                  overflow: hidden;
                  clip: rect(0, 0, 0, 0);
                  white-space: nowrap;
                  border: 0;
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
                  background-color: rgba(255, 255, 255, 0.55);
                  filter: drop-shadow(0 0 30px rgba(255,255,255,0.2));
                  transition: filter 0.4s ease;
                  overflow: hidden;
                }
                .logo-wrap:hover .logo-main {
                  background-color: rgba(255, 255, 255, 0.7);
                  filter: drop-shadow(0 0 40px rgba(255,255,255,0.4)) drop-shadow(0 0 80px rgba(148, 59, 45, 0.3));
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
                @media (prefers-reduced-motion: reduce) {
                  .logo-main::after {
                    display: none;
                  }
                  .logo-layer,
                  .logo-main,
                  .logo-chroma {
                    transition: none;
                  }
                  .logo-wrap:hover .logo-chroma-r,
                  .logo-wrap:hover .logo-chroma-c {
                    opacity: 0;
                    transform: none;
                  }
                }
              `}</style>

              <h1 className="logo-wrap" aria-label="J. Worra — DJ and Producer">
                <span className="logo-heading-label">J. Worra — DJ and Producer</span>
                {/* Chromatic aberration: Red channel */}
                <span className="logo-layer logo-chroma logo-chroma-r" />
                {/* Chromatic aberration: Cyan channel */}
                <span className="logo-layer logo-chroma logo-chroma-c" />
                {/* Main logo with shimmer */}
                <span className="logo-layer logo-main" />
              </h1>
            </div>

            {/* Socials - Stagger 3 */}
            <ul
              className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 list-none px-4 mb-0 transition-[opacity,transform] duration-[1200ms] delay-300 cubic-bezier(0.2, 0.8, 0.2, 1)
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
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white transition-[background,transform,border-color] duration-300 ease-out hover:bg-[#d94a3a] hover:border-[#d94a3a] hover:scale-110 active:scale-95"
                    aria-label={item.label}
                  >
                    <item.icon size={16} className="sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button - Stagger 4 (Restored Absolute Position) */}
            <div
              className={`hero-upcoming-dates absolute right-4 sm:right-8 z-20 transition-[opacity,transform] duration-[1200ms] delay-500 cubic-bezier(0.2, 0.8, 0.2, 1)
              ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
            `}
            >
              <Link
                href="/tour"
                className="group relative inline-flex items-center justify-center px-10 py-4 text-white bg-white/5 backdrop-blur-xl border border-white/20 rounded-full overflow-hidden transition-[background,transform,border-color] duration-300 hover:bg-[#d94a3a] hover:border-[#d94a3a] hover:scale-105 active:scale-95"
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
