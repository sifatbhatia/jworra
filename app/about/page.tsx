import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaApple, FaInstagram, FaSoundcloud, FaSpotify, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiBeatport } from "react-icons/si";

export const metadata: Metadata = {
  title: "About | J. Worra",
  description: "Learn about J. Worra, DJ and producer from Chicago to LA. Recognized by DJ Mag as 2019 Breakthrough Music Producer.",
  openGraph: {
    title: "About | J. Worra",
    description: "Learn about J. Worra, DJ and producer from Chicago to LA.",
  },
};

const labels = ["Never Worry Records", "Higher Ground", "Sink or Swim", "Club Sweat", "Realm Records"];
const remixes = ["GRiZ", "Gryffin", "Gorgon City", "Kaskade", "deadmau5", "Sidepiece"];
const festivals = ["EDC Las Vegas", "Coachella", "Splash House", "Brooklyn Mirage", "Spybar Chicago", "Sound LA"];

export default function AboutPage() {
  return (
    <div style={{ background: '#080808', minHeight: '100vh', color: 'white' }}>
      <style>{`
        @font-face {
          font-family: 'Terminal Grotesque';
          src: url('/fonts/terminal-grotesque.ttf') format('truetype');
          font-weight: 400;
          font-display: swap;
        }

        .about-wrap {
          display: grid;
          grid-template-columns: 1fr;
          min-height: 100vh;
        }
        @media (min-width: 900px) {
          .about-wrap {
            grid-template-columns: 0.9fr 1.1fr;
          }
        }

        /* Left */
        .about-left {
          position: relative;
          height: 80svh;
          overflow: hidden;
        }
        @media (min-width: 900px) {
          .about-left {
            height: 100svh;
            position: sticky;
            top: 0;
          }
        }
        .about-left-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: brightness(0.6) contrast(1.05);
        }
        .about-left-gradient {
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
        .about-left-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 2rem;
        }
        @media (min-width: 900px) {
          .about-left-content { padding: clamp(2rem, 5vw, 4rem); }
        }
        .about-eyebrow {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 0.6rem;
        }
        @media (min-width: 900px) {
          .about-eyebrow { font-size: 0.7rem; margin-bottom: 0.8rem; }
        }
        .about-name {
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(3rem, 7vw, 7rem);
          line-height: 0.88;
          letter-spacing: -0.02em;
          color: white;
          margin-bottom: 0.8rem;
        }
        @media (min-width: 900px) {
          .about-name { margin-bottom: 1rem; }
        }
        .about-tagline {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          line-height: 1.5;
          max-width: 320px;
        }
        @media (min-width: 900px) {
          .about-tagline { font-size: 1rem; max-width: 400px; }
        }

        /* Right */
        .about-right {
          padding: 4rem 1.5rem 3rem;
          background: #080808;
        }
        @media (min-width: 900px) {
          .about-right {
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
          margin-bottom: 0.75rem;
        }
        .section-heading {
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(1.8rem, 3.2vw, 3rem);
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: white;
          margin-bottom: 1.25rem;
        }
        .bio-body {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          font-weight: 300;
        }
        .bio-body p + p { margin-top: 0.8rem; }

        .divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin: 1.5rem 0;
        }

        .credits-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 640px) {
          .credits-grid { grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; }
        }
        .credits-heading {
          font-family: 'Courier New', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.18);
          margin-bottom: 0.6rem;
        }
        .credits-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .credits-list li {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.4);
          font-weight: 300;
        }

        .contact-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .contact-label {
          font-family: 'Courier New', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.18);
          margin-bottom: 0.4rem;
        }
        .contact-email {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.25s ease;
          word-break: break-all;
        }
        .contact-email:hover { color: #943B2D; }


        .social-row {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }
        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.75rem;
          height: 1.75rem;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.3);
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .social-btn:hover {
          border-color: #943B2D;
          color: white;
          background: #943B2D;
          transform: scale(1.1);
        }

      `}</style>

      <Navbar variant="solid" theme="dark" />

      <div className="about-wrap">

        {/* ── LEFT: Photo + overlaid text ── */}
        <div className="about-left">
          <Image
            src="/about.jpg"
            alt="J. Worra"
            fill
            className="about-left-img"
            priority
          />
          <div className="about-left-gradient" />
          <div className="about-left-content">
            <p className="about-eyebrow">DJ · Producer · Chicago → Los Angeles</p>
            <h1 className="about-name">J. Worra</h1>
            <p className="about-tagline">
              Fusing classic house with modern tech — bringing a unique swagger to the underground.
            </p>
          </div>
        </div>

        {/* ── RIGHT: Info panel ── */}
        <div className="about-right">

          {/* Bio */}
          <div className="section-label">// biography</div>
          <h2 className="section-heading">Authentic voice.<br />Underground roots.</h2>
          <div className="bio-body">
            <p>
              Jamie Sitter, better known as J. Worra, is a Chicago native now thriving as a DJ and producer in Los Angeles. Fusing classic house with modern tech, she's become a standout in the dance music underground — renowned for her innovative production, technical skills, and a unique swagger that bridges creative ventures in fashion and art.
            </p>
            <p>
              DJ Mag recognized her as the 2019 Breakthrough Music Producer of the Year. She has released on acclaimed labels including Never Worry Records, Higher Ground, Sink or Swim, Club Sweat, and Realm Records — and her remixes for GRiZ, Gryffin, Gorgon City, Kaskade, deadmau5, and Sidepiece have further cemented her as a sought-after talent.
            </p>
            <p>
              From festivals like EDC Las Vegas, Coachella, and Splash House to iconic clubs like The Brooklyn Mirage, Spybar Chicago, and Sound LA — J. Worra captivates audiences with dynamic, high-energy performances. Offstage, she champions LGBTQ youth, local charities, and animal rescue.
            </p>
          </div>

          <div className="divider" />

          {/* Credits */}
          <div className="credits-grid">
            <div>
              <div className="credits-heading">// labels</div>
              <ul className="credits-list">
                {labels.map(l => <li key={l}>{l}</li>)}
              </ul>
            </div>
            <div>
              <div className="credits-heading">// remixes for</div>
              <ul className="credits-list">
                {remixes.map(r => <li key={r}>{r}</li>)}
              </ul>
            </div>
            <div>
              <div className="credits-heading">// festivals</div>
              <ul className="credits-list">
                {festivals.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
          </div>

          <div className="divider" />

          {/* Contact */}
          <div className="contact-row">
            <div>
              <div className="contact-label">// management</div>
              <a href="mailto:jworramgmt@milkhoneyla.com" className="contact-email">
                jworramgmt@milkhoneyla.com
              </a>
            </div>
            <div>
              <div className="contact-label">// bookings</div>
              <a href="mailto:marissa.loil@unitedtalent.com" className="contact-email">
                marissa.loil@unitedtalent.com
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>// follow</div>
          <div className="social-row">
            <a href="https://instagram.com/jworra" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-btn"><FaInstagram size={12} /></a>
            <a href="https://www.tiktok.com/@jworra" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-btn"><FaTiktok size={12} /></a>
            <a href="https://twitter.com/JWorra" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-btn"><FaTwitter size={12} /></a>
            <a href="https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="social-btn"><FaSpotify size={12} /></a>
            <a href="https://music.apple.com/us/artist/j-worra/964744411" target="_blank" rel="noopener noreferrer" aria-label="Apple Music" className="social-btn"><FaApple size={12} /></a>
            <a href="https://soundcloud.com/jworra" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud" className="social-btn"><FaSoundcloud size={12} /></a>
            <a href="https://www.youtube.com/channel/UCKbul9QRhCawR1CsEFcKDtA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-btn"><FaYoutube size={12} /></a>
            <a href="https://www.beatport.com/artist/j-worra/564016" target="_blank" rel="noopener noreferrer" aria-label="Beatport" className="social-btn"><SiBeatport size={12} /></a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}