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
    <footer className="relative overflow-hidden" style={{ background: '#050505' }}>
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
        }
        .footer-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 1.5rem 2rem;
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
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 1.25rem;
          font-weight: 400;
        }
        .footer-brand-desc {
          font-size: 0.85rem;
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
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.3);
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
          font-size: 0.85rem;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.25s ease, padding-left 0.25s ease;
        }
        .footer-nav-link:hover {
          color: rgba(255,255,255,0.9);
          padding-left: 4px;
        }
        .footer-contact-block {
          margin-bottom: 1.25rem;
        }
        .footer-contact-label {
          font-family: 'Courier New', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-bottom: 0.35rem;
        }
        .footer-contact-email {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: color 0.25s ease;
          word-break: break-all;
        }
        .footer-contact-email:hover {
          color: rgba(255,255,255,0.9);
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
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.35);
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
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.15);
        }
        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }
        .footer-legal-link {
          font-family: 'Courier New', monospace;
          font-size: 0.6rem;
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
            <Link href="/" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
              <img
                src="/jworra-logo.svg"
                alt="J. Worra"
                style={{
                  width: '160px',
                  height: 'auto',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.7,
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
              />
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
          <span className="footer-copyright">&copy; {currentYear} J. Worra · All Rights Reserved</span>
          <div className="footer-legal">
            <Link href="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-legal-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}