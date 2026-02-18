'use client';

import { FaInstagram, FaTiktok, FaSpotify, FaApple, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const ASCII_ART = `
⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⣶⣾⣿⣿⣿⣿⣷⣶⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣠⢔⣫⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⠀⠀⠀⠀⠀
⠀⠀⠀⣠⢊⡴⡫⢚⡽⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀
⠀⠀⡴⣱⢫⢎⡔⡩⣚⠵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀
⠀⣼⣽⣳⣣⢯⣞⡜⡱⣫⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀
⢸⣿⣿⣿⣿⣿⣿⣾⡽⣱⣫⠞⠉⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠃⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠘⠃⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿
⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣀⣀⣀⣠⣴⢟⡵⣳⢯⢿⣿⡟⣿⣿⣿⣿⡇
⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣞⡵⣫⢏⢞⡽⡽⣻⢯⡟⠀
⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣚⢕⡡⢊⠜⡵⣣⠟⠀⠀
⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢷⣫⢖⡥⢊⡴⠋⠀⠀⠀
⠀⠀⠀⠀⠀⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣞⣭⠞⠋⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⠿⢿⣿⣿⣿⣿⡿⠿⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀
`;


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ background: '#050505', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <style>{`
        .ascii-bg {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        .ascii-bg pre {
          font-family: 'Courier New', 'Consolas', monospace;
          font-size: clamp(10px, 1.8vw, 22px);
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.07);
          white-space: pre;
          text-align: center;
          user-select: none;
          letter-spacing: 0.05em;
          animation: spin-disc 60s linear infinite;
        }
        @keyframes spin-disc {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Footer Logo Hover */
        .footer-logo-wrap {
          position: relative;
          width: 160px;
          height: 29px;
          cursor: pointer;
          display: inline-block;
          margin-bottom: 1.25rem;
        }
        .footer-logo-layer {
          position: absolute;
          inset: 0;
          mask-image: url('/jworra-logo.svg');
          -webkit-mask-image: url('/jworra-logo.svg');
          mask-size: contain;
          -webkit-mask-size: contain;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          mask-position: left center;
          -webkit-mask-position: left center;
        }
        .footer-logo-main {
          background: white;
          opacity: 0.7;
          overflow: hidden;
          transition: opacity 0.3s ease, filter 0.4s ease;
          filter: drop-shadow(0 0 0px transparent);
        }
        .footer-logo-wrap:hover .footer-logo-main {
          opacity: 1;
          filter: drop-shadow(0 0 20px rgba(255,255,255,0.4)) drop-shadow(0 0 40px rgba(148,59,45,0.3));
        }
        .footer-logo-main::after {
          content: '';
          position: absolute;
          inset: -20% -10%;
          background: linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.4) 60%, transparent 80%);
          transform: translateX(-150%);
          pointer-events: none;
        }
        .footer-logo-wrap:hover .footer-logo-main::after {
          animation: footer-shimmer 0.7s ease-in-out forwards;
        }
        @keyframes footer-shimmer {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }
        .footer-logo-chroma {
          opacity: 0;
          transition: opacity 0.25s ease, transform 0.25s ease;
          pointer-events: none;
        }
        .footer-logo-chroma-r {
          background: rgba(200,50,40,0.7);
          mix-blend-mode: screen;
        }
        .footer-logo-chroma-c {
          background: rgba(40,140,200,0.7);
          mix-blend-mode: screen;
        }
        .footer-logo-wrap:hover .footer-logo-chroma-r {
          opacity: 1;
          transform: translate(4px, -1px);
        }
        .footer-logo-wrap:hover .footer-logo-chroma-c {
          opacity: 1;
          transform: translate(-4px, 1px);
        }
        .footer-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(3rem, 6vw, 5rem) 1.5rem clamp(1.5rem, 3vw, 2.5rem);
          width: 100%;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1.5fr;
            gap: 2rem;
          }
        }
        .footer-heading {
          font-family: 'Courier New', monospace;
          font-size: clamp(0.6rem, 1.2vw, 0.75rem);
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: clamp(0.8rem, 2vw, 1.25rem);
          font-weight: 400;
        }
        .footer-brand-desc {
          font-size: clamp(0.8rem, 1.4vw, 0.95rem);
          color: rgba(255,255,255,0.4);
          line-height: 1.7;
          max-width: 320px;
          margin-bottom: 1.5rem;
        }
        .footer-socials {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }
        .footer-social {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.4);
          transition: all 0.3s ease;
        }
        .footer-social:hover {
          background: #943B2D;
          border-color: #943B2D;
          color: white;
          transform: scale(1.1);
        }
        .footer-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-nav-link {
          font-size: clamp(0.8rem, 1.4vw, 0.95rem);
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.25s ease, padding-left 0.25s ease;
        }
        .footer-nav-link:hover {
          color: #943B2D;
          padding-left: 4px;
        }
        .footer-contact-block {
          margin-bottom: 1.25rem;
        }
        .footer-contact-label {
          font-family: 'Courier New', monospace;
          font-size: clamp(0.55rem, 1vw, 0.65rem);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-bottom: 0.35rem;
        }
        .footer-contact-email {
          font-size: clamp(0.75rem, 1.3vw, 0.9rem);
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: color 0.25s ease;
          word-break: break-all;
        }
        .footer-contact-email:hover {
          color: #943B2D;
        }
        .footer-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.6rem 1.5rem;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 999px;
          font-size: 0.75rem;
          font-family: 'Courier New', monospace;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }
        .footer-cta:hover {
          background: #943B2D;
          border-color: #943B2D;
          color: white;
        }
        .footer-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          margin-bottom: 1.5rem;
        }
        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
          justify-content: space-between;
        }
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
          }
        }
        .footer-copyright {
          font-family: 'Courier New', monospace;
          font-size: clamp(0.55rem, 1vw, 0.7rem);
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.15);
        }
        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }
        .footer-legal-link {
          font-family: 'Courier New', monospace;
          font-size: clamp(0.5rem, 0.9vw, 0.65rem);
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.15);
          text-decoration: none;
          transition: color 0.25s ease;
        }
        .footer-legal-link:hover {
          color: rgba(255,255,255,0.5);
        }
      `}</style>

      {/* ASCII Art Background */}
      <div className="ascii-bg">
        <pre>{ASCII_ART}</pre>
      </div>

      {/* Footer Content */}
      <div className="footer-inner">
        {/* Main Grid */}
        <div className="footer-grid">

          {/* Brand Column */}
          <div>
            <Link href="/">
              <div className="footer-logo-wrap">
                <div className="footer-logo-layer footer-logo-chroma footer-logo-chroma-r" />
                <div className="footer-logo-layer footer-logo-chroma footer-logo-chroma-c" />
                <div className="footer-logo-layer footer-logo-main" />
              </div>
            </Link>
            <p className="footer-brand-desc">
              DJ and producer fusing classic house with modern tech.
              From Chicago to Los Angeles, bringing unique swagger to the underground.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com/jworra" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social">
                <FaInstagram size={14} />
              </a>
              <a href="https://www.tiktok.com/@jworra" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="footer-social">
                <FaTiktok size={14} />
              </a>
              <a href="https://twitter.com/JWorra" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="footer-social">
                <FaTwitter size={14} />
              </a>
              <a href="https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="footer-social">
                <FaSpotify size={14} />
              </a>
              <a href="https://music.apple.com/us/artist/j-worra/964744411" target="_blank" rel="noopener noreferrer" aria-label="Apple Music" className="footer-social">
                <FaApple size={14} />
              </a>
              <a href="https://www.youtube.com/channel/UCKbul9QRhCawR1CsEFcKDtA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social">
                <FaYoutube size={14} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="footer-heading">Explore</h3>
            <ul className="footer-nav-list">
              <li><Link href="/music" className="footer-nav-link">Music</Link></li>
              <li><Link href="/tour" className="footer-nav-link">Tour</Link></li>
              <li><Link href="/dialogxe" className="footer-nav-link">Dialogxe Label</Link></li>
              <li><Link href="/about" className="footer-nav-link">About</Link></li>
              <li><Link href="/contact" className="footer-nav-link">Contact</Link></li>
            </ul>
          </div>

          {/* Music */}
          <div>
            <h3 className="footer-heading">Listen</h3>
            <ul className="footer-nav-list">
              <li><a href="https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj" target="_blank" rel="noopener noreferrer" className="footer-nav-link">Spotify</a></li>
              <li><a href="https://music.apple.com/us/artist/j-worra/964744411" target="_blank" rel="noopener noreferrer" className="footer-nav-link">Apple Music</a></li>
              <li><a href="https://soundcloud.com/jworra" target="_blank" rel="noopener noreferrer" className="footer-nav-link">SoundCloud</a></li>
              <li><a href="https://www.beatport.com/artist/j-worra/564016" target="_blank" rel="noopener noreferrer" className="footer-nav-link">Beatport</a></li>
              <li><a href="https://www.youtube.com/channel/UCKbul9QRhCawR1CsEFcKDtA" target="_blank" rel="noopener noreferrer" className="footer-nav-link">YouTube</a></li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact-block">
              <div className="footer-contact-label">Management</div>
              <a href="mailto:jworramgmt@milkhoneyla.com" className="footer-contact-email">
                jworramgmt@milkhoneyla.com
              </a>
            </div>
            <div className="footer-contact-block">
              <div className="footer-contact-label">Bookings</div>
              <a href="mailto:marissa.loil@unitedtalent.com" className="footer-contact-email">
                marissa.loil@unitedtalent.com
              </a>
            </div>
            <a
              href="https://www.bandsintown.com/a/5248787-j.-worra"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta"
            >
              Follow on Bandsintown
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-divider" />
        <div className="footer-bottom">
          <span className="footer-copyright">
            &copy; {currentYear} J. Worra · All Rights Reserved · <a href="https://siftion.pages.dev" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'} onMouseLeave={e => e.currentTarget.style.color = 'inherit'}>Designed by Siftion</a>
          </span>
          <div className="footer-legal">
            <Link href="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-legal-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}