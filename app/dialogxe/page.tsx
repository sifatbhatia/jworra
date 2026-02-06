import PageLayout from "@/components/page-layout";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dialogxe Label",
  description: "Dialogxe - Music 4 Dancing. The official record label by J. Worra. Stream the latest releases and follow for updates.",
  openGraph: {
    title: "Dialogxe Label | J. Worra",
    description: "Dialogxe - Music 4 Dancing. The official record label by J. Worra.",
  },
};

export default function LabelPage() {
  return (
    <PageLayout
      title="Dialogxe"
      subtitle="Music 4 Dancing"
      theme="light"
      backgroundPattern="paper"
    >
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 sm:gap-12">
        {/* Logo Section */}
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg aspect-square">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent rounded-full blur-3xl" />
          <Image
            src="/dialogxe_R1.png"
            alt="Dialogxe Logo"
            fill
            className="object-contain drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4">
          {/* Left - Latest Release */}
          <div className="bg-white/50 backdrop-blur-sm border border-black/5 rounded-2xl p-6 sm:p-8 text-center md:text-left space-y-4 hover:bg-white/80 transition-colors duration-300 shadow-sm">
            <span className="inline-block px-3 py-1 bg-black text-white text-xs font-bold rounded-full tracking-wider uppercase mb-2">
              Latest Release
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-black leading-tight">
              New Sounds
            </h3>
            <p className="text-black/60 text-sm leading-relaxed">
              Explore the latest tracks defining the Dialogxe sound. House music curated for the dancefloor.
            </p>
            <a
              href="https://open.spotify.com/album/4Ktfjs4DfhzMJ1gcK6NS91"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black font-bold underline decoration-2 underline-offset-4 hover:text-black/70 transition-colors mt-2"
              style={{ textDecorationColor: '#800020' }}
            >
              Stream Now
            </a>
          </div>

          {/* Right - Follow */}
          <div className="bg-white/50 backdrop-blur-sm border border-black/5 rounded-2xl p-6 sm:p-8 text-center md:text-left space-y-4 hover:bg-white/80 transition-colors duration-300 shadow-sm">
            <span className="inline-block px-3 py-1 border border-black/10 text-black/60 text-xs font-bold rounded-full tracking-wider uppercase mb-2">
              Connect
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-black leading-tight">
              Join the Community
            </h3>
            <p className="text-black/60 text-sm leading-relaxed">
              Follow Dialogxe on Instagram for release announcements, showcases, and behind-the-scenes content.
            </p>
            <a
              href="https://instagram.com/dialogxe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black font-bold underline decoration-2 underline-offset-4 hover:text-black/70 transition-colors mt-2"
              style={{ textDecorationColor: '#800020' }}
            >
              Follow @dialogxe
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}