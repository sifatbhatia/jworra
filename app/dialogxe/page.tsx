
import PageLayout from "@/components/page-layout";
import { Metadata } from "next";
import Image from "next/image";
import { FaSpotify, FaInstagram, FaSoundcloud } from "react-icons/fa";
import { SiBeatport } from "react-icons/si";

export const metadata: Metadata = {
  title: "Dialogxe Label",
  description: "Dialogxe - Music 4 Dancing. The official record label by J. Worra.",
  openGraph: {
    title: "Dialogxe Label | J. Worra",
    description: "Dialogxe - Music 4 Dancing. The official record label by J. Worra.",
  },
};

export default function LabelPage() {
  return (
    <div>
      <PageLayout
        title=""
        subtitle=""
        theme="light"
        backgroundPattern="paper"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] w-full max-w-7xl mx-auto px-4 sm:px-6 items-center gap-12 lg:gap-24">

          {/* LEFT: The Brand / Visual Anchor */}
          <div className="flex flex-col items-center lg:items-start justify-center order-1 lg:order-1">
            <div className="relative w-full max-w-md aspect-square mb-8">
              <div className="absolute inset-0 bg-black/5 blur-[80px] rounded-full opacity-0 hover:opacity-20 transition-opacity duration-1000" />
              <Image
                src="/dialogxe_R1.png"
                alt="Dialogxe Logo"
                fill
                className="object-contain drop-shadow-2xl relative z-10"
                priority
              />
            </div>
            <h1 className="font-heading text-[12vw] lg:text-[7rem] leading-[0.85] tracking-tighter text-black/5 hidden lg:block select-none pointer-events-none">
              DIALOGXE
            </h1>
          </div>

          {/* RIGHT: The Manifesto & Actions */}
          <div className="flex flex-col justify-center space-y-12 order-2 lg:order-2">

            {/* Intro / Manifesto */}
            <div className="space-y-6">
              <span className="font-label text-black/40 block">// EST. 2026</span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl leading-[0.9] text-black">
                MUSIC<br />4 DANCING.
              </h2>
              <p className="text-black/60 font-light text-sm sm:text-base max-w-md leading-relaxed">
                A home for the underground. Curated house and techno cuts designed for soundsystems and late nights. No filler, just groove.
              </p>
            </div>

            <div className="w-full h-px bg-black/10" />

            {/* Releases Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-label text-black/40">// LATEST DROP</span>
                <span className="font-label text-black/40">CAT. DLX001</span>
              </div>

              <a
                href="https://open.spotify.com/album/4Ktfjs4DfhzMJ1gcK6NS91"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-center justify-between py-4 border-b border-black/10 group-hover:border-black transition-colors duration-300">
                  <span className="font-heading text-2xl sm:text-3xl text-black group-hover:translate-x-4 transition-transform duration-300">
                    NEW SOUNDS
                  </span>
                  <span className="font-label text-xs bg-black text-white px-3 py-1 uppercase tracking-wider group-hover:bg-black/80 transition-colors">
                    Stream
                  </span>
                </div>
              </a>

              <a
                href="https://instagram.com/dialogxe"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-center justify-between py-4 border-b border-black/10 group-hover:border-black transition-colors duration-300">
                  <span className="font-heading text-2xl sm:text-3xl text-black group-hover:translate-x-4 transition-transform duration-300">
                    CONNECT
                  </span>
                  <span className="font-label text-xs bg-black text-white px-3 py-1 uppercase tracking-wider group-hover:bg-black/80 transition-colors">
                    Instagram
                  </span>
                </div>
              </a>
            </div>

            {/* Socials / Connect */}
            <div className="space-y-6 pt-4">
              <span className="font-label text-black/40 block">// NETWORK</span>
              <div className="flex gap-6">
                {[
                  { icon: FaSpotify, url: "https://open.spotify.com/album/4Ktfjs4DfhzMJ1gcK6NS91" },
                  { icon: FaInstagram, url: "https://instagram.com/dialogxe" },
                  { icon: FaSoundcloud, url: "https://soundcloud.com/dialogxe" },
                  { icon: SiBeatport, url: "https://beatport.com/label/dialogxe" }
                ].map(({ icon: Icon, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/40 hover:text-black transition-colors duration-300 transform hover:scale-110"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </PageLayout>
    </div>
  );
}