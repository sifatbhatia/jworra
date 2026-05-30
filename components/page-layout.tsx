'use client';

import Footer from "./footer";
import Navbar from "./navbar";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  theme?: 'dark' | 'light';
  backgroundPattern?: 'paper' | 'gradient' | 'none';
}

export default function PageLayout({
  title,
  subtitle,
  children,
  theme = 'dark',
  backgroundPattern = 'none'
}: PageLayoutProps) {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const textMutedColor = isDark ? 'text-white/50' : 'text-black/50';

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
      <Navbar variant="solid" />

      {/* Page Content */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 pt-32 pb-20 min-h-[80vh]">
        <div className="mb-10 sm:mb-16">
          <h1 className="font-heading heading-h1 font-bold mb-2 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className={`font-label ${textMutedColor}`}>
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
