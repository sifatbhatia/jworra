'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaBars, FaTimes } from "react-icons/fa";
import Footer from "./footer";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  backHref?: string;
  children: React.ReactNode;
  theme?: 'dark' | 'light';
  backgroundPattern?: 'paper' | 'gradient' | 'none';
}

export default function PageLayout({
  title,
  subtitle,
  backHref = "/",
  children,
  theme = 'dark',
  backgroundPattern = 'none'
}: PageLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "/music", label: "Music", isActive: title === "Music" },
    { href: "/tour", label: "Tour", isActive: title === "Tour" },
    { href: "/dialogxe", label: "Label", isActive: title === "Label" },
    { href: "/about", label: "About", isActive: title === "About" },
    { href: "/contact", label: "Contact", isActive: title === "Contact" },
  ];

  // Theme-based styles
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const textMutedColor = isDark ? 'text-white/50' : 'text-black/50';
  const borderColor = isDark ? 'border-white/10' : 'border-black/10';

  // Navigation styles
  const navBg = isDark ? 'bg-black/80 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md';
  const navBorder = isDark ? 'border-white/10' : 'border-black/5';
  const navText = isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black';
  const navActiveBg = isDark ? 'bg-white/10 text-white' : 'bg-black/5 text-black';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-[#f5f5f5]'} ${textColor} transition-colors duration-500`}>

      {/* Background Patterns */}
      {backgroundPattern === 'paper' && (
        <div className="fixed inset-0 opacity-30 pointer-events-none z-0">
          <div className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(135deg, ${isDark ? 'rgba(128, 0, 32, 0.05)' : 'rgba(128, 0, 32, 0.02)'} 0%, transparent 50%),
                linear-gradient(45deg, ${isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)'} 0%, transparent 50%),
                repeating-linear-gradient(90deg, transparent, transparent 200px, ${isDark ? 'rgba(128, 0, 32, 0.02)' : 'rgba(128, 0, 32, 0.01)'} 200px, ${isDark ? 'rgba(128, 0, 32, 0.02)' : 'rgba(128, 0, 32, 0.01)'} 400px)
              `
            }}
          />
        </div>
      )}

      {backgroundPattern === 'gradient' && (
        <div className={`fixed inset-0 bg-gradient-to-b ${isDark ? 'from-transparent via-white/[0.02] to-transparent' : 'from-transparent via-black/[0.02] to-transparent'} pointer-events-none z-0`} />
      )}

      {/* Modern Navigation */}
      <header className={`fixed top-4 left-0 right-0 z-[100] px-4 transition-transform duration-500 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <div className={`${navBg} border ${navBorder} rounded-full px-6 py-3 shadow-2xl w-full max-w-5xl mx-auto flex items-center justify-between`}>

          {/* Left Section - Back Button */}
          <Link
            href={backHref}
            className={`group flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${navText} hover:bg-white/5`}
          >
            <FaArrowLeft size={12} className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-sm font-medium hidden sm:inline">Home</span>
          </Link>

          {/* Center Emblem */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="block relative w-10 h-10 group">
              <div className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'bg-white/20' : 'bg-black/10'}`} />
              <Image
                src="/emblem.png"
                alt="Emblem"
                fill
                className={`object-contain transition-transform duration-300 group-hover:scale-110 ${!isDark && 'invert'}`}
              />
            </Link>
          </div>

          {/* Right Section - Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap
                    ${item.isActive ? navActiveBg : navText}
                  `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors ${navText} hover:bg-white/5`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-20 left-4 right-4 max-w-md mx-auto ${isDark ? 'bg-[#111]' : 'bg-white'} border ${borderColor} rounded-2xl p-4 shadow-2xl transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'}`}>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors flex justify-between items-center
                  ${item.isActive ? (isDark ? 'bg-white/10 text-white' : 'bg-black/5 text-black') : (isDark ? 'text-white/60 hover:text-white hover:bg-white/5' : 'text-black/60 hover:text-black hover:bg-black/5')}
                `}
              >
                {item.label}
                {item.isActive && <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`} />}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Page Content */}
      <main className={`relative z-10 container mx-auto px-4 sm:px-6 md:px-8 pt-32 pb-20 min-h-[80vh] transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-10 sm:mb-16">
          <h1 className="font-heading heading-h1 font-bold mb-2 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className={`text-lg sm:text-xl font-light ${textMutedColor}`}>
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </main>

      {/* Footer (Always show, handled efficiently) */}
      <Footer />
    </div>
  );
}