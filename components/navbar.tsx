'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaSpotify, FaSoundcloud, FaTiktok, FaTwitter, FaApple, FaYoutube } from 'react-icons/fa';

interface NavbarProps {
    variant?: 'transparent' | 'solid';
    theme?: 'dark' | 'light';
}

export default function Navbar({ variant = 'solid', theme = 'dark' }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
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
                .nav-pill {
                    position: fixed;
                    top: 1rem;
                    left: 1rem;
                    right: 1rem;
                    z-index: 100;
                    display: flex;
                    justify-content: center;
                }
                .nav-container {
                    width: 100%;
                    max-width: 100%;
                    background: rgba(59, 59, 59, 0.5);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border-radius: 48px;
                    overflow: hidden;
                    display: grid;
                    grid-template-rows: 56px 0fr;
                    transition: grid-template-rows 0.45s ease, border-radius 0.45s ease;
                }
                .nav-container.open {
                    border-radius: 24px;
                    grid-template-rows: 56px 1fr;
                }
                @media (min-width: 768px) {
                    .nav-container {
                        max-width: clamp(280px, 65vw, 600px);
                    }
                }
                .nav-container.transparent {
                    background: rgba(255, 255, 255, 0.1);
                }
                .nav-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.5rem 1rem 0.5rem 0.5rem;
                    height: 56px;
                    overflow: hidden;
                }
                .nav-body {
                    overflow: hidden;
                    visibility: hidden;
                    transition: visibility 0s 0.45s;
                }
                .nav-container.open .nav-body {
                    visibility: visible;
                    transition: visibility 0s 0s;
                }
                .nav-links {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 1.5rem;
                    padding: 2rem 1.5rem 3rem;
                    min-height: 380px;
                }
                .nav-link {
                    font-size: 1.75rem;
                    font-weight: 500;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: white;
                    text-decoration: none;
                    transition: color 0.25s ease, transform 0.25s ease, letter-spacing 0.25s ease, opacity 0.25s ease;
                    display: inline-block;
                }
                .nav-link:hover {
                    color: rgba(255,255,255,0.5);
                    opacity: 0.7;
                    transform: translateX(6px) scale(1.04);
                    letter-spacing: 0.15em;
                }
                .nav-link.active { color: #AF352B; letter-spacing: 0.25em; }
                .nav-link.active:hover { color: #c94038; transform: translateX(6px) scale(1.04); }
                .nav-icon {
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
                .nav-icon:hover { opacity: 0.6; }
                .nav-icon svg {
                    transition: transform 0.45s ease;
                }
                .nav-icon.open svg {
                    transform: rotate(45deg);
                }
                .nav-socials {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                    padding-top: 1.5rem;
                    margin-top: 0.5rem;
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
                    background: #943B2D;
                    border-color: #943B2D;
                    color: white;
                    transform: scale(1.1);
                }
                .nav-social-link:active {
                    transform: scale(0.95);
                }
                .nav-social-link-mini {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 1.75rem;
                    height: 1.75rem;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    color: white;
                    transition: all 0.3s ease;
                }
                .nav-social-link-mini:hover {
                    background: #943B2D;
                    border-color: #943B2D;
                    color: white;
                    transform: translateY(-2px);
                }
            `}</style>

            <div className="nav-pill">
                <div className={`nav-container ${isOpen ? 'open' : ''} ${isTransparent ? 'transparent' : ''}`}>
                    {/* Top bar — row 1, always 56px */}
                    <div className="nav-top">
                        <Link href="/" onClick={() => isOpen && setIsOpen(false)}>
                            <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image src="/emblem.png" alt="J. Worra" width={32} height={32} style={{ objectFit: 'contain' }} />
                            </div>
                        </Link>

                        <button
                            className={`nav-icon ${isOpen ? 'open' : ''}`}
                            onClick={() => setIsOpen(v => !v)}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <line x1="9" y1="2" x2="9" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Nav body — row 2, expands from 0fr to 1fr */}
                    <div className="nav-body">
                        <div className="nav-links">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`nav-link ${isActive ? 'active' : ''}`}
                                        style={{
                                            transition: 'transform 0.4s ease, opacity 0.4s ease',
                                            transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
                                            opacity: isOpen ? 1 : 0,
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}

                            {/* Social icons */}
                            <div
                                className="nav-socials"
                                style={{
                                    transition: 'transform 0.4s ease 0.05s, opacity 0.4s ease 0.05s',
                                    transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
                                    opacity: isOpen ? 1 : 0,
                                }}
                            >
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
        </>
    );
}
