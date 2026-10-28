'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaCompactDisc, FaPlay } from "react-icons/fa";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

type DeckMode = "33" | "45" | "backspin" | "stopped";

const recoveryLinks = [
  {
    title: "Music",
    meta: "Discography",
    description: "Stream Who Told You To Stop?, singles, EPs, and club remixes.",
    href: "/music",
  },
  {
    title: "Tour",
    meta: "Live Dates",
    description: "Upcoming club rooms, festival sets, and Bandsintown ticket alerts.",
    href: "/tour",
  },
  {
    title: "Dialogxe",
    meta: "Record Label",
    description: "Label releases, Music 4 Dancing EP, and track submissions.",
    href: "/dialogxe",
  },
  {
    title: "About",
    meta: "Biography",
    description: "From Chicago to Los Angeles: biography, label credits, and press info.",
    href: "/about",
  },
  {
    title: "Contact",
    meta: "Mgmt & Bookings",
    description: "Direct management and booking contacts plus social channels.",
    href: "/contact",
  },
];

export default function NotFound() {
  const [deckMode, setDeckMode] = useState<DeckMode>("33");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [svgMarkup, setSvgMarkup] = useState<string>("");

  const platterHostRef = useRef<HTMLDivElement | null>(null);
  const spinNodesRef = useRef<SVGGElement[]>([]);
  const angleRef = useRef<number>(0);
  const velocityRef = useRef<number>(48);
  const deckModeRef = useRef<DeckMode>("33");
  const reducedMotionRef = useRef<boolean>(false);
  const draggingRef = useRef<boolean>(false);
  const lastPointerAngleRef = useRef<number | null>(null);
  const backspinTimerRef = useRef<number | null>(null);

  const applyRotation = (deg: number) => {
    const normalized = ((deg % 360) + 360) % 360;
    angleRef.current = normalized;
    const attrValue = `rotate(${normalized.toFixed(2)})`;
    for (const node of spinNodesRef.current) {
      node.setAttribute("transform", attrValue);
    }
  };

  useEffect(() => {
    let cancelled = false;
    fetch("/jworra-record.svg")
      .then((res) => (res.ok ? res.text() : ""))
      .then((text) => {
        if (cancelled || !text) return;
        const cleaned = text
          .replace(
            /\.jwv-spin,\.jwv-pose,\.jwv-float\s*\{[^}]+\}/,
            ""
          )
          .replace(
            /\.jwv-spin\s*\{\s*animation:[^}]+\}/,
            ".jwv-spin { animation: none !important; }"
          )
          .replace(
            '<g class="jwv-float">',
            '<g class="jwv-float" transform="translate(0 4)">'
          )
          .replace(
            '<g class="jwv-pose">',
            '<g class="jwv-pose" transform="matrix(.951057 -.309017 .216312 .66574 0 0)">'
          )
          .replace('.jwv-pose { transform:matrix(.951057,-.309017,.216312,.66574,0,0); }', '')
          .replace('.jwv-float { transform:translateY(4px); }', '');
        setSvgMarkup(cleaned);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!svgMarkup || !platterHostRef.current) return;
    const nodes = Array.from(
      platterHostRef.current.querySelectorAll<SVGGElement>(".jwv-spin")
    );
    spinNodesRef.current = nodes;
    applyRotation(angleRef.current);
  }, [svgMarkup]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      const prefersReduce = media.matches;
      reducedMotionRef.current = prefersReduce;
      setReducedMotion(prefersReduce);
      if (prefersReduce) {
        velocityRef.current = 0;
        deckModeRef.current = "stopped";
        setDeckMode("stopped");
      } else {
        velocityRef.current = 48;
        deckModeRef.current = "33";
        setDeckMode("33");
      }
    };
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    let rafId: number | null = null;
    let lastTime: number | null = null;

    const tick = (now: number) => {
      if (lastTime === null) lastTime = now;
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (!draggingRef.current) {
        const mode = deckModeRef.current;
        const targetVelocity =
          reducedMotionRef.current
            ? 0
            : mode === "33"
              ? 48
              : mode === "45"
                ? 72
                : mode === "backspin"
                  ? -420
                  : 0;

        const responseRate = mode === "backspin" ? 10 : 4.2;
        velocityRef.current +=
          (targetVelocity - velocityRef.current) * Math.min(1, dt * responseRate);

        if (Math.abs(velocityRef.current) > 0.05) {
          applyRotation(angleRef.current + velocityRef.current * dt);
        }
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (backspinTimerRef.current !== null) {
        window.clearTimeout(backspinTimerRef.current);
      }
    };
  }, []);

  const triggerMode = (mode: DeckMode) => {
    if (backspinTimerRef.current !== null) {
      window.clearTimeout(backspinTimerRef.current);
      backspinTimerRef.current = null;
    }

    deckModeRef.current = mode;
    setDeckMode(mode);

    if (reducedMotionRef.current) {
      if (mode === "backspin") {
        applyRotation(angleRef.current - 55);
      } else if (mode === "33" || mode === "45") {
        applyRotation(angleRef.current + 30);
      }
      return;
    }

    if (mode === "backspin") {
      velocityRef.current = -460;
      backspinTimerRef.current = window.setTimeout(() => {
        deckModeRef.current = "33";
        setDeckMode("33");
      }, 650);
    }
  };

  const getPointerAngle = (clientX: number, clientY: number, element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    return (Math.atan2(clientY - cy, clientX - cx) * 180) / Math.PI;
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    draggingRef.current = true;
    lastPointerAngleRef.current = getPointerAngle(
      event.clientX,
      event.clientY,
      event.currentTarget
    );
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || lastPointerAngleRef.current === null) return;
    const currentAngle = getPointerAngle(
      event.clientX,
      event.clientY,
      event.currentTarget
    );
    let delta = currentAngle - lastPointerAngleRef.current;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    lastPointerAngleRef.current = currentAngle;
    velocityRef.current = delta * 35;
    applyRotation(angleRef.current + delta * 1.35);
  };

  const handlePointerUp = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    lastPointerAngleRef.current = null;
  };

  const handlePlatterKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      triggerMode(deckMode === "33" ? "backspin" : "33");
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      applyRotation(angleRef.current - 18);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      applyRotation(angleRef.current + 18);
    }
  };

  const statusText =
    deckMode === "33"
      ? "DECK A · 33.3 RPM · LOCKED GROOVE"
      : deckMode === "45"
        ? "DECK A · 45.0 RPM · CLUB PITCH +8%"
        : deckMode === "backspin"
          ? "DECK A · BACKSPIN · REWINDING"
          : "DECK A · MOTOR OFF · CUE READY";

  return (
    <div className="nf-page">
      <style>{`
        .nf-page {
          min-height: 100vh;
          background: #080808;
          color: #ffffff;
          overflow-x: hidden;
        }

        .nf-main {
          min-height: 100svh;
          max-width: 1360px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          padding: calc(5.75rem + env(safe-area-inset-top, 0px)) 1.25rem 3.5rem;
        }

        @media (min-width: 960px) {
          .nf-main {
            grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
            align-items: center;
            gap: clamp(2.5rem, 5vw, 5rem);
            padding: calc(5.5rem + env(safe-area-inset-top, 0px)) clamp(2rem, 4vw, 4rem) 3.5rem;
          }
        }

        .nf-left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.65rem;
          min-width: 0;
        }

        .nf-label,
        .nf-meta,
        .nf-deck-readout,
        .nf-mode-btn {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .nf-label {
          color: rgba(255, 255, 255, 0.66);
          margin: 0;
        }

        .nf-title {
          margin: 0.65rem 0 0;
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(2.8rem, 7.5vw, 5.25rem);
          line-height: 0.9;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: #ffffff;
        }

        .nf-title span {
          color: #d94a3a;
        }

        .nf-copy {
          max-width: 25rem;
          margin: 1rem 0 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 0.92rem;
          font-weight: 300;
          line-height: 1.6;
        }

        .nf-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.35rem;
        }

        .nf-btn-primary,
        .nf-btn-secondary {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          padding: 0.85rem 1.6rem;
          border-radius: 999px;
          font-family: 'Courier New', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }

        .nf-btn-primary {
          background: #ffffff;
          color: #080808;
          border: 1px solid #ffffff;
        }

        .nf-btn-primary:hover {
          background: #d94a3a;
          border-color: #d94a3a;
          color: #ffffff;
          transform: translateY(-1px);
        }

        .nf-btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .nf-btn-secondary:hover {
          background: rgba(217, 74, 58, 0.16);
          border-color: #d94a3a;
          color: #ffffff;
          transform: translateY(-1px);
        }

        /* Interactive Vinyl Deck Stage */
        .nf-deck {
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          padding-top: 1.15rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .nf-deck-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .nf-deck-readout {
          color: rgba(255, 255, 255, 0.56);
          font-size: 0.6rem;
        }

        .nf-deck-hint {
          font-family: 'Courier New', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.38);
        }

        .nf-platter-stage {
          position: relative;
          width: 100%;
          max-width: 380px;
          aspect-ratio: 5 / 3.25;
          margin: 0 auto;
          cursor: grab;
          touch-action: none;
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease;
        }

        .nf-platter-stage:active {
          cursor: grabbing;
          transform: scale(0.99);
        }

        .nf-platter-stage:focus-visible {
          outline: 2px solid #d94a3a;
          outline-offset: 4px;
        }

        .nf-platter-svg-host,
        .nf-platter-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .nf-platter-svg-host svg,
        .nf-platter-fallback img {
          width: 100%;
          height: 100%;
          max-width: 380px;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 18px 34px rgba(0, 0, 0, 0.72));
        }

        .nf-deck-controls {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .nf-mode-btn {
          padding: 0.45rem 0.85rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.62);
          font-size: 0.58rem;
          letter-spacing: 0.16em;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nf-mode-btn:hover {
          border-color: rgba(255, 255, 255, 0.32);
          color: #ffffff;
        }

        .nf-mode-btn.active {
          background: #d94a3a;
          border-color: #d94a3a;
          color: #ffffff;
        }

        /* Right Column Recovery Board (matches ContactPage hairline directory) */
        .nf-board {
          display: grid;
          gap: 0;
        }

        .nf-board-heading {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 0.85rem;
        }

        .nf-card {
          display: block;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          padding: 1.05rem 0 1rem;
          text-decoration: none;
          color: inherit;
          transition: border-color 0.25s ease;
        }

        .nf-card:first-of-type {
          border-top-color: rgba(255, 255, 255, 0.28);
        }

        .nf-card:last-of-type {
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        }

        .nf-card-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.45rem;
        }

        .nf-card-title-wrap {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
        }

        .nf-card h2 {
          margin: 0;
          font-family: 'Terminal Grotesque', sans-serif;
          font-size: clamp(1.85rem, 3.5vw, 2.75rem);
          line-height: 0.9;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #ffffff;
          transition: color 0.22s ease, transform 0.22s ease;
        }

        .nf-card-arrow {
          color: #d94a3a;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.22s ease, transform 0.22s ease;
        }

        .nf-card:hover h2 {
          color: #d94a3a;
          transform: translateX(4px);
        }

        .nf-card:hover .nf-card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .nf-meta {
          color: rgba(255, 255, 255, 0.55);
          white-space: nowrap;
        }

        .nf-card-desc {
          margin: 0;
          color: rgba(255, 255, 255, 0.56);
          font-size: 0.88rem;
          font-weight: 300;
          line-height: 1.55;
          max-width: 34rem;
        }

        @keyframes nf-fade-up {
          0% { opacity: 0; transform: translateY(22px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .nf-anim {
          opacity: 0;
          animation: nf-fade-up 0.75s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .nf-d1 { animation-delay: 0.1s; }
        .nf-d2 { animation-delay: 0.2s; }
        .nf-d3 { animation-delay: 0.3s; }
        .nf-d4 { animation-delay: 0.4s; }

        @media (max-width: 639px) {
          .nf-card-head {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.3rem;
          }
          .nf-meta {
            white-space: normal;
          }
          .nf-actions {
            flex-direction: column;
          }
          .nf-btn-primary,
          .nf-btn-secondary {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .nf-anim,
          .nf-card h2,
          .nf-card-arrow,
          .nf-btn-primary,
          .nf-btn-secondary,
          .nf-platter-stage {
            animation: none !important;
            opacity: 1 !important;
            transition: none !important;
          }
        }
      `}</style>

      <Navbar variant="solid" />

      <main className="nf-main">
        <section className="nf-left" aria-labelledby="nf-title">
          <div>
            <p className="nf-label nf-anim nf-d1">
              404 · Page Not Found
            </p>
            <h1 id="nf-title" className="nf-title nf-anim nf-d2">
              Off the<br />
              <span>Record</span>
            </h1>
            <p className="nf-copy nf-anim nf-d3">
              That route isn&apos;t in the crate. Spin or scratch the platter below, or jump straight to releases, tour dates, and label dispatches.
            </p>

            <div className="nf-actions nf-anim nf-d3">
              <Link href="/" className="nf-btn-primary">
                Back Home <FaArrowRight size={11} aria-hidden="true" />
              </Link>
              <Link href="/music" className="nf-btn-secondary">
                <FaPlay size={9} aria-hidden="true" /> Stream Music
              </Link>
            </div>
          </div>

          <div className="nf-deck nf-anim nf-d4" aria-label="Interactive vinyl platter">
            <div className="nf-deck-head">
              <span className="nf-deck-readout" role="status" aria-live="polite">
                {statusText}
              </span>
              <span className="nf-deck-hint">Drag record to scratch</span>
            </div>

            <div
              role="slider"
              tabIndex={0}
              aria-label="J. Worra vinyl platter — drag to scratch or press Enter to backspin"
              aria-valuemin={0}
              aria-valuemax={360}
              aria-valuenow={0}
              className="nf-platter-stage"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onKeyDown={handlePlatterKeyDown}
            >
              {svgMarkup ? (
                <div
                  ref={platterHostRef}
                  className="nf-platter-svg-host"
                  dangerouslySetInnerHTML={{ __html: svgMarkup }}
                />
              ) : (
                <div className="nf-platter-fallback">
                  <img src="/jworra-record.svg" alt="J. Worra vinyl record" />
                </div>
              )}
            </div>

            <div className="nf-deck-controls" role="group" aria-label="Turntable speed controls">
              <button
                type="button"
                className={`nf-mode-btn ${deckMode === "33" && !reducedMotion ? "active" : ""}`}
                onClick={() => triggerMode("33")}
              >
                <FaCompactDisc size={10} style={{ display: "inline", marginRight: 5, verticalAlign: "-1px" }} aria-hidden="true" />
                33 RPM
              </button>
              <button
                type="button"
                className={`nf-mode-btn ${deckMode === "45" ? "active" : ""}`}
                onClick={() => triggerMode("45")}
              >
                45 RPM
              </button>
              <button
                type="button"
                className={`nf-mode-btn ${deckMode === "backspin" ? "active" : ""}`}
                onClick={() => triggerMode("backspin")}
              >
                Backspin
              </button>
              <button
                type="button"
                className={`nf-mode-btn ${deckMode === "stopped" ? "active" : ""}`}
                onClick={() => triggerMode("stopped")}
              >
                Stop
              </button>
            </div>
          </div>
        </section>

        <section className="nf-board nf-anim nf-d3" aria-label="Site directory">
          <div className="nf-board-heading">Where to next</div>
          {recoveryLinks.map((item) => (
            <Link key={item.href} href={item.href} className="nf-card">
              <div className="nf-card-head">
                <span className="nf-card-title-wrap">
                  <h2>{item.title}</h2>
                  <FaArrowRight size={13} className="nf-card-arrow" aria-hidden="true" />
                </span>
                <span className="nf-meta">{item.meta}</span>
              </div>
              <p className="nf-card-desc">{item.description}</p>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
