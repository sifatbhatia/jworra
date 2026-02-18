
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { formatReleaseDate, getAlbumTypeLabel, getArtistAlbums } from "@/lib/spotify";
import { FaApple, FaExternalLinkAlt, FaPlay, FaSoundcloud, FaSpotify, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiBeatport } from "react-icons/si";

// export const dynamic = 'force-static'; // Default is static for output: export

export const metadata: Metadata = {
  title: "Music | J. Worra",
  description: "Stream J. Worra's latest releases. Explore the complete discography of house and techno tracks.",
  openGraph: {
    title: "Music | J. Worra",
    description: "Stream J. Worra's latest releases.",
  },
};

export default async function MusicPage() {
  const allReleases = await getArtistAlbums(50);
  const releases = allReleases.slice(0, 20); // Show more since we have space
  const latest = releases[0];

  return (
    <div style={{ background: '#080808', minHeight: '100vh', color: 'white' }}>
      <style>{`
        @font-face {
          font-family: 'Terminal Grotesque';
          src: url('/fonts/terminal-grotesque.ttf') format('truetype');
          font-weight: 400;
          font-display: swap;
        }

        .split-wrap {
          display: grid;
          grid-template-columns: 1fr;
          min-height: 100vh;
        }
        @media (min-width: 900px) {
          .split-wrap {
            grid-template-columns: 0.9fr 1.1fr;
          }
        }

        /* Left Column (Sticky) */
        .split-left {
          position: relative;
          height: 80svh;
          overflow: hidden;
        }
        @media (min-width: 900px) {
          .split-left {
            height: 100svh;
            position: sticky;
            top: 0;
          }
        }
        .split-left-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          filter: brightness(0.6) contrast(1.1);
        }
        .split-left-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(8,8,8,0.1) 0%,
            transparent 40%,
            rgba(8,8,8,0.8) 85%,
            rgba(8,8,8,1) 100%
          );
        }
        .split-left-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 2rem;
        }
        @media (min-width: 900px) {
          .split-left-content { padding: clamp(2rem, 5vw, 4rem); }
        }
        
        /* Typography */
        .eyebrow {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 0.6rem;
        }
        .main-heading {
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(3rem, 7vw, 7rem);
          line-height: 0.88;
          letter-spacing: -0.02em;
          color: white;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
        }
        .sub-text {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          line-height: 1.5;
          max-width: 320px;
        }

        /* Right Column (Scrollable) */
        .split-right {
          padding: 4rem 1.5rem 3rem;
          background: #080808;
        }
        @media (min-width: 900px) {
          .split-right {
            padding: 10rem 2.5rem 5rem;
            border-left: 1px solid rgba(255,255,255,0.06);
          }
        }

        .section-label {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-bottom: 1.5rem;
        }

        /* Grid */
        .release-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .release-grid { grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; }
        }

        .release-card {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          text-decoration: none;
          group: true;
        }
        .release-img-wrap {
          position: relative;
          aspect-ratio: 1/1;
          background: rgba(255,255,255,0.05);
          overflow: hidden;
          transition: filter 0.3s ease;
        }
        .release-img-wrap:hover {
          filter: brightness(1.2);
        }
        .release-title {
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: 1.25rem;
          color: white;
          line-height: 1.1;
          transition: color 0.2s;
        }
        .release-info {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Buttons */
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          background: white;
          color: black;
          font-family: 'Courier New', monospace;
          font-weight: bold;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 99px;
          margin-top: 1rem;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .cta-btn:hover {
          transform: scale(1.02);
          background: #943B2D;
          color: white;
        }

        .divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin: 3rem 0;
        }

        /* Social Row */
        .social-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.4);
          transition: all 0.25s ease;
        }
        .social-btn:hover {
          border-color: #943B2D;
          color: white;
          background: #943B2D;
          transform: scale(1.1);
        }

        /* ── Entrance Animations ── */
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(30px); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
        }
        @keyframes zoom-in {
          0% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .split-left-img {
          animation: zoom-in 2s ease-out forwards;
        }
        .anim-fade-up {
          opacity: 0;
          animation: fade-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .anim-delay-1 { animation-delay: 0.2s; }
        .anim-delay-2 { animation-delay: 0.4s; }
        .anim-delay-3 { animation-delay: 0.6s; }
        .release-card {
          opacity: 0;
          animation: fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .release-card:nth-child(1) { animation-delay: 0.3s; }
        .release-card:nth-child(2) { animation-delay: 0.4s; }
        .release-card:nth-child(3) { animation-delay: 0.5s; }
        .release-card:nth-child(4) { animation-delay: 0.55s; }
        .release-card:nth-child(5) { animation-delay: 0.6s; }
        .release-card:nth-child(6) { animation-delay: 0.65s; }
        .release-card:nth-child(n+7) { animation-delay: 0.7s; }
        .section-label {
          opacity: 0;
          animation: fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s forwards;
        }
        .social-row {
          opacity: 0;
          animation: fade-in 0.8s ease 0.8s forwards;
        }
      `}</style>

      <Navbar variant="solid" theme="dark" />

      <div className="split-wrap">

        {/* Left Column (Sticky Visual) */}
        <div className="split-left">
          {/* Use Latest Release Art or Fallback */}
          {latest?.images[0] ? (
            <Image
              src={latest.images[0].url}
              alt={latest.name}
              fill
              className="split-left-img"
              priority
            />
          ) : (
            <Image
              src="/about.jpg"
              alt="J. Worra"
              fill
              className="split-left-img"
              priority
            />
          )}
          <div className="split-left-gradient" />

          <div className="split-left-content">
            <p className="eyebrow anim-fade-up anim-delay-1">// LATEST RELEASE</p>
            <h1 className="main-heading anim-fade-up anim-delay-2">{latest?.name || "Music"}</h1>
            <div className="flex gap-4 items-center anim-fade-up anim-delay-3">
              <a
                href={latest?.external_urls?.spotify || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                <FaPlay size={10} /> Listen Now
              </a>
            </div>
          </div>
        </div>

        {/* Right Column (Scrollable Content) */}
        <div className="split-right">

          <div className="section-label">// DISCOGRAPHY</div>

          <div className="release-grid">
            {releases.map((release) => (
              <a
                key={release.id}
                href={release.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="release-card group"
              >
                <div className="release-img-wrap">
                  {release.images[0] && (
                    <Image
                      src={release.images[0].url}
                      alt={release.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FaSpotify className="text-white drop-shadow-lg" size={32} />
                  </div>
                </div>
                <div>
                  <h3 className="release-title group-hover:underline decoration-1 underline-offset-4">{release.name}</h3>
                  <p className="release-info">
                    {new Date(release.release_date).getFullYear()} • {release.album_type}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="divider" />

          {/* Socials / Platforms */}
          <div className="section-label">// AVAILABLE ON</div>
          <div className="social-row">
            <a href="https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="social-btn"><FaSpotify size={18} /></a>
            <a href="https://music.apple.com/us/artist/j-worra/964744411" target="_blank" rel="noopener noreferrer" aria-label="Apple Music" className="social-btn"><FaApple size={18} /></a>
            <a href="https://soundcloud.com/jworra" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud" className="social-btn"><FaSoundcloud size={18} /></a>
            <a href="https://www.beatport.com/artist/j-worra/123456" target="_blank" rel="noopener noreferrer" aria-label="Beatport" className="social-btn"><SiBeatport size={18} /></a>
            <a href="https://www.youtube.com/channel/UCKbul9QRhCawR1CsEFcKDtA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-btn"><FaYoutube size={18} /></a>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}