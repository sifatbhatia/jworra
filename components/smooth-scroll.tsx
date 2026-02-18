'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
    useEffect(() => {
        // Lenis Smooth Scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Siftion Signature
        console.log(
            "%c DESIGNED BY SIFTION %c https://siftion.pages.dev ",
            "background: #000; color: #fff; font-size: 12px; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;",
            "background: #fff; color: #000; font-size: 12px; font-weight: bold; padding: 4px 8px; border-radius: 0 4px 4px 0; border: 1px solid #000;"
        );
        console.log("%c Need a website? Get in touch. ", "color: #666; font-size: 10px; margin-top: 4px; font-family: monospace;");

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
