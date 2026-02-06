'use client';

import { FaSpotify, FaApple, FaSoundcloud, FaInstagram, FaYoutube, FaTwitter, FaTiktok } from "react-icons/fa";
import { SiBeatport } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="block relative w-16 h-16 opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/emblem.png"
                alt="J. Worra Emblem"
                fill
                className="object-contain invert"
              />
            </Link>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">J. Worra</h2>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                DJ and producer fusing classic house with modern tech. 
                From Chicago to Los Angeles, bringing unique swagger to the underground.
              </p>
            </div>
            {/* Social Icons - Accessible & Minimal */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: FaInstagram, href: "https://instagram.com/jworra", label: "Instagram" },
                { icon: FaSpotify, href: "https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj", label: "Spotify" },
                { icon: FaSoundcloud, href: "https://soundcloud.com/jworra", label: "SoundCloud" },
                { icon: FaApple, href: "https://music.apple.com/us/artist/j-worra/964744411", label: "Apple Music" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Explore</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/music" className="hover:text-white transition-colors">Music</Link></li>
              <li><Link href="/tour" className="hover:text-white transition-colors">Tour</Link></li>
              <li><Link href="/dialogxe" className="hover:text-white transition-colors">Dialogxe Label</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
             <h3 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Contact</h3>
             <div className="space-y-6 text-sm">
                <div>
                  <p className="text-white/40 mb-1 text-xs uppercase tracking-wider">Management</p>
                  <a href="mailto:jworramgmt@milkhoneyla.com" className="text-white/80 hover:text-white transition-colors">
                    jworramgmt@milkhoneyla.com
                  </a>
                </div>
                <div>
                  <p className="text-white/40 mb-1 text-xs uppercase tracking-wider">Bookings</p>
                  <a href="mailto:marissa.loil@unitedtalent.com" className="text-white/80 hover:text-white transition-colors">
                    marissa.loil@unitedtalent.com
                  </a>
                </div>
             </div>
          </div>

          {/* Newsletter / Updates (Simplified) */}
           <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Stay Updated</h3>
            <p className="text-white/50 text-sm mb-4">
              Track J. Worra on Bandsintown for the latest tour dates and announcements.
            </p>
            <a 
              href="https://www.bandsintown.com/a/5248787-j.-worra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/20 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto text-center"
            >
              Follow on Bandsintown
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>&copy; {currentYear} J. Worra. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}