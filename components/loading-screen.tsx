'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// Local fonts (loaded via @font-face)
const LOCAL_FONTS = ['Terminal Grotesque', 'TeX Gyre Heros', 'Galgo', 'Nohemi', 'Round 8-Four'];

const FONTS = [
    { family: 'Playfair Display', weight: '700' },
    { family: 'Terminal Grotesque', weight: '400' },
    { family: 'Galgo', weight: '400' },
    { family: 'Bebas Neue', weight: '400' },
    { family: 'TeX Gyre Heros', weight: '700' },
    { family: 'Nohemi', weight: '700' },
    { family: 'Dancing Script', weight: '700' },
    { family: 'Round 8-Four', weight: '400' },
];

// Timing
const FAST_INTERVAL = 100;       // starting speed (ms)
const SLOW_INTERVAL = 600;       // final speed before lock
const DECEL_DURATION = 2800;     // how long the deceleration takes (ms)
const HOLD_DURATION = 500;       // pause on final font before exit
const EXIT_DURATION = 800;       // scale+blur+fade out time

export default function LoadingScreen() {
    const [currentFontIndex, setCurrentFontIndex] = useState(0);
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [phase, setPhase] = useState<'loading' | 'shuffling' | 'holding' | 'exiting' | 'done'>('loading');
    const startTimeRef = useRef<number>(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Load Google Fonts
    useEffect(() => {
        const googleFonts = FONTS.filter(f => !LOCAL_FONTS.includes(f.family));
        const families = googleFonts.map(f => f.family.replace(/ /g, '+')).join('&family=');
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${families}&display=swap`;
        document.head.appendChild(link);

        link.onload = () => setFontsLoaded(true);
        setTimeout(() => setFontsLoaded(true), 800);
    }, []);

    // Easing function — cubic ease-out for smooth deceleration
    const getInterval = useCallback((elapsed: number) => {
        const t = Math.min(elapsed / DECEL_DURATION, 1);
        const eased = t * t * t; // cubic ease-in — starts slow decel, then ramps hard
        return FAST_INTERVAL + (SLOW_INTERVAL - FAST_INTERVAL) * eased;
    }, []);

    // Slot-machine shuffle with deceleration
    const scheduleNext = useCallback(() => {
        const elapsed = Date.now() - startTimeRef.current;

        if (elapsed >= DECEL_DURATION) {
            // Deceleration complete — hold on current font
            setPhase('holding');
            timeoutRef.current = setTimeout(() => {
                setPhase('exiting');
                timeoutRef.current = setTimeout(() => {
                    setPhase('done');
                }, EXIT_DURATION + 100);
            }, HOLD_DURATION);
            return;
        }

        const interval = getInterval(elapsed);
        timeoutRef.current = setTimeout(() => {
            setCurrentFontIndex(prev => (prev + 1) % FONTS.length);
            scheduleNext();
        }, interval);
    }, [getInterval]);

    // Start shuffling when fonts are ready
    useEffect(() => {
        if (!fontsLoaded) return;

        startTimeRef.current = Date.now();
        setPhase('shuffling');
        scheduleNext();

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [fontsLoaded, scheduleNext]);

    if (phase === 'done') return null;

    const currentFont = FONTS[currentFontIndex];
    const isExiting = phase === 'exiting';

    return (
        <>
            <style>{`
                @font-face {
                    font-family: 'Terminal Grotesque';
                    src: url('/fonts/terminal-grotesque.ttf') format('truetype');
                    font-weight: 400;
                    font-display: swap;
                }
                @font-face {
                    font-family: 'TeX Gyre Heros';
                    src: url('/fonts/textgyreheros/texgyreheros-bold.otf') format('opentype');
                    font-weight: 700;
                    font-display: swap;
                }
                @font-face {
                    font-family: 'Galgo';
                    src: url('/fonts/GALGO/Galgo.woff2') format('woff2'),
                         url('/fonts/GALGO/Galgo.woff') format('woff');
                    font-weight: 400;
                    font-display: swap;
                }
                @font-face {
                    font-family: 'Nohemi';
                    src: url('/fonts/Nohemi/Nohemi/Web-TT/Nohemi-Bold.woff2') format('woff2'),
                         url('/fonts/Nohemi/Nohemi/Web-TT/Nohemi-Bold.woff') format('woff');
                    font-weight: 700;
                    font-display: swap;
                }
                @font-face {
                    font-family: 'Round 8-Four';
                    src: url('/fonts/ROUND 8-FOUR/Webfont/Web Font Kit/round8-four-webfont.woff2') format('woff2'),
                         url('/fonts/ROUND 8-FOUR/Webfont/Web Font Kit/round8-four-webfont.woff') format('woff');
                    font-weight: 400;
                    font-display: swap;
                }
                .loading-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #0a0a0a;
                    transition: opacity ${EXIT_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1),
                                backdrop-filter ${EXIT_DURATION}ms ease;
                }
                .loading-overlay.exiting {
                    opacity: 0;
                    pointer-events: none;
                }
                .loading-text {
                    font-size: clamp(2.5rem, 8vw, 5rem);
                    color: white;
                    text-align: center;
                    letter-spacing: 0.08em;
                    user-select: none;
                    transition: transform ${EXIT_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1),
                                filter ${EXIT_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1),
                                opacity ${EXIT_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1);
                    transform: scale(1);
                    filter: blur(0px);
                }
                .loading-text.exiting {
                    transform: scale(1.15);
                    filter: blur(12px);
                    opacity: 0;
                }
            `}</style>

            <div className={`loading-overlay ${isExiting ? 'exiting' : ''}`}>
                <span
                    className={`loading-text ${isExiting ? 'exiting' : ''}`}
                    style={{
                        fontFamily: `'${currentFont.family}', sans-serif`,
                        fontWeight: currentFont.weight,
                    }}
                >
                    J. Worra
                </span>
            </div>
        </>
    );
}
