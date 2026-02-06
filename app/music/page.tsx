import PageLayout from "@/components/page-layout";
import { formatReleaseDate, getAlbumTypeLabel, getArtistAlbums } from "@/lib/spotify";
import { Metadata } from "next";
import Image from "next/image";
import { FaApple, FaExternalLinkAlt, FaPlay, FaSoundcloud, FaSpotify } from "react-icons/fa";
import { SiBeatport } from "react-icons/si";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Music",
  description: "Stream J. Worra's latest releases on Spotify, Apple Music, SoundCloud, and Beatport. Explore the complete discography of house and techno tracks.",
  openGraph: {
    title: "Music | J. Worra",
    description: "Stream J. Worra's latest releases on Spotify, Apple Music, SoundCloud, and Beatport.",
  },
};

export default async function MusicPage() {
  const releases = await getArtistAlbums(8);
  return (
    <PageLayout
      title="Music"
      subtitle="Stream the latest releases"
      backgroundPattern="gradient"
    >

      <div className="relative max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-12">
        {/* Hero CTA Section */}
        {releases.length > 0 && (
          <div className="relative">
            {/* Featured Release - Better Desktop Layout */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 items-center">
              {/* Album Art - Centered on mobile, left on desktop */}
              <div className="relative group lg:flex-shrink-0">
                <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 relative rounded-lg overflow-hidden bg-white/5">
                  {releases[0].images[0] ? (
                    <Image
                      src={releases[0].images[0].url}
                      alt={releases[0].name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 320px, 320px"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                      <span className="text-6xl opacity-30">🎵</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Release Info & CTA - Takes remaining space */}
              <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6 max-w-2xl">
                <div className="space-y-2 sm:space-y-3">
                  <div className="text-white/50 text-xs uppercase tracking-wider font-medium">
                    Latest Release
                  </div>
                  <h2 className="font-heading heading-h2 font-bold text-white leading-tight">
                    {releases[0].name}
                  </h2>
                  <div className="flex items-center gap-3 text-white/60 text-sm justify-center lg:justify-start">
                    <span>{getAlbumTypeLabel(releases[0].album_type)}</span>
                    <span>•</span>
                    <span>{formatReleaseDate(releases[0].release_date)}</span>
                  </div>
                </div>

                {/* Primary CTAs */}
                <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 justify-center lg:justify-start">
                  <a
                    href={releases[0].external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 sm:gap-3 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 bg-white text-black text-sm sm:text-base font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] shadow-lg"
                  >
                    <FaPlay size={12} className="sm:w-3.5 sm:h-3.5" />
                    <span>Listen Now</span>
                  </a>
                  <a
                    href="https://music.apple.com/us/artist/j-worra/964744411"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 sm:gap-3 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 bg-white/5 text-white text-sm sm:text-base font-semibold rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <FaApple size={16} />
                    <span>Apple Music</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Discography Grid */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">Discography</h3>
              <p className="text-white/50 text-xs sm:text-sm">All releases</p>
            </div>
            <a
              href="https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-sm flex items-center gap-2 transition-colors"
            >
              <span>View on Spotify</span>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {releases.map((release) => (
              <a
                key={release.id}
                href={release.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="group space-y-3"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden bg-white/5">
                  {release.images[1] ? (
                    <Image
                      src={release.images[1].url}
                      alt={release.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl opacity-20">🎵</span>
                    </div>
                  )}

                  {/* Minimal play overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <FaPlay className="text-black text-sm ml-0.5" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="font-medium text-white text-sm line-clamp-1 group-hover:text-white/80 transition-colors">
                    {release.name}
                  </h4>
                  <p className="text-white/40 text-xs">
                    {formatReleaseDate(release.release_date)} • {getAlbumTypeLabel(release.album_type)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>



        {/* Streaming Platforms - Minimalist */}
        <div className="border-t border-white/5 pt-8">
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-white/40 text-xs uppercase tracking-wider mb-4">Available On</h3>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <a
                href="https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <FaSpotify size={20} />
                <span className="text-sm font-medium">Spotify</span>
              </a>

              <a
                href="https://music.apple.com/us/artist/j-worra/964744411"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <FaApple size={20} />
                <span className="text-sm font-medium">Apple Music</span>
              </a>

              <a
                href="https://soundcloud.com/jworra"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <FaSoundcloud size={20} />
                <span className="text-sm font-medium">SoundCloud</span>
              </a>

              <a
                href="https://www.beatport.com/artist/j-worra/123456"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <SiBeatport size={20} />
                <span className="text-sm font-medium">Beatport</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}