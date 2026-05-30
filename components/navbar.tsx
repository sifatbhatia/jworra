'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaSpotify, FaTiktok, FaTwitter, FaApple, FaYoutube } from 'react-icons/fa';

interface NavbarProps {
    variant?: 'transparent' | 'solid';
}

export default function Navbar({ variant = 'solid' }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (typeof document === 'undefined') return;
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/music", label: "Music" },
        { href: "/tour", label: "Tour" },
        { href: "/dialogxe", label: "Label" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    const isTransparent = variant === 'transparent' && !scrolled && !isOpen;

    return (
        <>
            <style>{`
                .nav-wrap {
                    position: fixed;
                    top: 1rem;
                    left: 1rem;
                    right: 1rem;
                    z-index: 100;
                    display: flex;
                    justify-content: center;
                    pointer-events: none;
                }
                .nav-pill {
                    pointer-events: auto;
                    width: 100%;
                    max-width: 100%;
                    background: rgba(80, 80, 80, 0.35);
                    backdrop-filter: blur(24px) saturate(1.8);
                    -webkit-backdrop-filter: blur(24px) saturate(1.8);
                    border-radius: 32px;
                    overflow: hidden;
                }
                .nav-pill.transparent {
                    background: rgba(255, 255, 255, 0.2);
                }
                @media (min-width: 768px) {
                    .nav-pill {
                        max-width: clamp(280px, 65vw, 600px);
                    }
                }
                .nav-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.5rem 1rem 0.5rem 0.5rem;
                    height: 56px;
                }
                .nav-collapse {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 300ms ease;
                }
                .nav-collapse.open {
                    grid-template-rows: 1fr;
                }
                .nav-collapse-inner {
                    overflow: hidden;
                    min-height: 0;
                }
                .nav-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    padding: 0 1.5rem 2rem;
                    opacity: 0;
                    transition: opacity 0.15s ease;
                    pointer-events: none;
                }
                .nav-collapse.open .nav-content {
                    opacity: 1;
                    transition: opacity 0.3s ease 0.12s;
                    pointer-events: auto;
                }
                .nav-link {
                    position: relative;
                    font-size: 1.75rem;
                    font-weight: 500;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: white;
                    text-decoration: none;
                    transition: color 0.22s ease;
                    display: inline-block;
                }
                .nav-link::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 0.1em;
                    bottom: -0.35rem;
                    height: 1px;
                    background: currentColor;
                    transform: scaleX(0);
                    transform-origin: right;
                    opacity: 0.65;
                    transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .nav-link:hover { color: rgba(255,255,255,0.72); }
                .nav-link:hover::after,
                .nav-link.active::after {
                    transform: scaleX(1);
                    transform-origin: left;
                }
                .nav-link.active { color: #d94a3a; }
                .nav-toggle {
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    transition: opacity 0.2s ease;
                }
                .nav-toggle:hover { opacity: 0.6; }
                .nav-toggle svg {
                    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .nav-toggle.open svg {
                    transform: rotate(45deg);
                }
                .nav-socials {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                    padding-top: 1.25rem;
                    margin-top: 0.25rem;
                    border-top: 1px solid rgba(255,255,255,0.12);
                    width: 100%;
                }
                .nav-social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 2.25rem;
                    height: 2.25rem;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid rgba(255,255,255,0.2);
                    color: white;
                    transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
                }
                .nav-social-link:hover {
                    background: #d94a3a;
                    border-color: #d94a3a;
                    transform: scale(1.1);
                }
            `}</style>

            <div className="nav-wrap">
                <div className={`nav-pill ${isTransparent ? 'transparent' : ''}`}>
                    <div className="nav-top">
                        <Link href="/" onClick={() => isOpen && setIsOpen(false)}>
                            <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image src="/emblem.webp" alt="J. Worra" width={32} height={32} fetchPriority="high" loading="eager" style={{ objectFit: 'contain', width: 'clamp(28px, 3.5vw, 40px)', height: 'clamp(28px, 3.5vw, 40px)' }} />
                            </div>
                        </Link>

                        <button
                            className={`nav-toggle ${isOpen ? 'open' : ''}`}
                            onClick={() => setIsOpen(v => !v)}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <line x1="9" y1="2" x2="9" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    <div className={`nav-collapse ${isOpen ? 'open' : ''}`}>
                        <div className="nav-collapse-inner">
                            <div className="nav-content">
                                {navItems.map((item) => {
                                    const isActive = pathname.replace(/\/$/, '') === item.href.replace(/\/$/, '');
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`nav-link ${isActive ? 'active' : ''}`}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}

                                <div className="nav-socials">
                                    <a href="https://www.instagram.com/jworra/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="nav-social-link">
                                        <FaInstagram size={14} />
                                    </a>
                                    <a href="https://www.tiktok.com/@jworra?lang=en" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="nav-social-link">
                                        <FaTiktok size={14} />
                                    </a>
                                    <a href="https://twitter.com/JWorra" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="nav-social-link">
                                        <FaTwitter size={14} />
                                    </a>
                                    <a href="https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="nav-social-link">
                                        <FaSpotify size={14} />
                                    </a>
                                    <a href="https://music.apple.com/us/artist/j-worra/964744411" target="_blank" rel="noopener noreferrer" aria-label="Apple Music" className="nav-social-link">
                                        <FaApple size={14} />
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCKbul9QRhCawR1CsEFcKDtA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="nav-social-link">
                                        <FaYoutube size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
