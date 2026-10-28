import Image from "next/image";
import { FaApple, FaArrowRight, FaSpotify } from "react-icons/fa";
import { SiBeatport } from "react-icons/si";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import styles from "./dialogxe.module.css";

const tracks = [
  { number: "01", title: "like me", artist: "J. Worra", href: "https://open.spotify.com/track/5umiuTVKIVZUXTECqaT0nt" },
  { number: "02", title: "perfect", artist: "J. Worra feat. Benni Ola", href: "https://open.spotify.com/track/4h7KuSXcA5iD4qDsiq5Jb0" },
  { number: "03", title: "back 2 u", artist: "J. Worra", href: "https://open.spotify.com/track/32hCv3uH5eZrQyiwKUbfUq" },
  { number: "04", title: "work it", artist: "J. Worra", href: "https://open.spotify.com/track/2E5kgDErt1GGv34xB8wrpc" },
];

function ActionLink({ children, href, secondary = false, textLink = false }: { children: React.ReactNode; href: string; secondary?: boolean; textLink?: boolean }) {
  const external = href.startsWith("http");
  return (
    <a className={`${styles.action} ${secondary ? styles.actionSecondary : ""} ${textLink ? styles.actionTextLink : ""}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
      <span className={styles.actionText}>{children}</span>
      <FaArrowRight size={12} className={styles.actionArrow} aria-hidden="true" />
      <span className={styles.actionGlow} aria-hidden="true" />
    </a>
  );
}

export default function DialogxePage() {
  return (
    <div className={styles.page}>
      <Navbar variant="solid" />
      <main>
        <section className={styles.hero} aria-labelledby="dialogxe-title">
          <div className={styles.heroMedia} aria-hidden="true" />
          <div className={styles.heroCopy}>
            <h1 id="dialogxe-title" className={`${styles.wordmark} ${styles.reveal} ${styles.delayOne}`}>
              <Image src="/dialogxe-logo-transparent.png" alt="Dialogxe" width={1900} height={486} priority className={styles.logoImage} />
            </h1>
            <p className={`${styles.heroDescription} ${styles.reveal} ${styles.delayTwo}`}>Independent record label by J. Worra</p>
            <div className={`${styles.actions} ${styles.reveal} ${styles.delayFour}`}>
              <ActionLink href="https://open.spotify.com/album/4Ktfjs4DfhzMJ1gcK6NS91">Listen to the EP</ActionLink>
              <ActionLink href="#releases" secondary>View releases</ActionLink>
            </div>
          </div>
        </section>

        <section className={styles.releases} id="releases" aria-labelledby="releases-title">
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel}>02 — Releases</p>
            <div className={styles.releaseGrid}>
              <div className={styles.releaseIntro}>
                <h2 id="releases-title">Music 4 Dancing</h2>
                <p>The first Dialogxe release: four tracks from J. Worra, built for the dance floor.</p>
              </div>
              <div className={styles.releaseArtwork}>
                <p className={styles.releaseCode}>DLX001</p>
                <Image src="/dlx001-cover.jpg" alt="Music 4 Dancing EP cover art" width={300} height={300} sizes="(max-width: 899px) 82vw, 28vw" />
                <span>Music 4 Dancing EP</span>
              </div>
              <div className={styles.trackList} aria-label="Music 4 Dancing EP track list">
                {tracks.map((track) => (
                  <a key={track.number} className={styles.track} href={track.href} target="_blank" rel="noopener noreferrer">
                    <span className={styles.trackNumber}>{track.number}</span>
                    <span className={styles.trackName}>{track.title}<small>{track.artist}</small></span>
                    <FaArrowRight aria-hidden="true" />
                  </a>
                ))}
                <div className={styles.releaseMeta}><span>J. Worra</span><span>Music 4 Dancing EP</span><span>2025</span></div>
                <div className={styles.platformLinks} aria-label="Listen to Music 4 Dancing on music platforms">
                  <a href="https://open.spotify.com/album/4Ktfjs4DfhzMJ1gcK6NS91" target="_blank" rel="noopener noreferrer"><FaSpotify aria-hidden="true" /> Spotify</a>
                  <a href="https://music.apple.com/us/album/music-4-dancing-ep/1850544417" target="_blank" rel="noopener noreferrer"><FaApple aria-hidden="true" /> Apple Music</a>
                  <a href="https://www.beatport.com/release/music-4-dancing/5555800" target="_blank" rel="noopener noreferrer"><SiBeatport aria-hidden="true" /> Beatport</a>
                </div>
              </div>
            </div>
            <div className={styles.otherReleases}>
              <p className={styles.sectionLabel}>Other releases</p>
              <div className={styles.otherReleaseGrid}>
                <Image
                  src="/adored-cover.jpg"
                  alt="Adored single artwork"
                  width={300}
                  height={300}
                  sizes="(max-width: 680px) 82vw, 180px"
                  className={styles.otherReleaseArt}
                />
                <div className={styles.otherReleaseInfo}>
                  <h3>Adored</h3>
                  <div className={styles.otherReleaseMeta}>
                    <span>Single · 2026</span>
                  </div>
                  <div className={styles.platformLinks} aria-label="Listen to Adored on music platforms">
                    <a href="https://open.spotify.com/track/5Hmp9hwnelqENrdpOn45N0" target="_blank" rel="noopener noreferrer"><FaSpotify aria-hidden="true" /> Spotify</a>
                    <a href="https://music.apple.com/us/song/adored/6778079467" target="_blank" rel="noopener noreferrer"><FaApple aria-hidden="true" /> Apple Music</a>
                    <a href="https://www.beatport.com/release/adored-extended/7038870" target="_blank" rel="noopener noreferrer"><SiBeatport aria-hidden="true" /> Beatport</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.follow} aria-labelledby="follow-title">
          <div className={styles.followInner}>
            <h2 id="follow-title">Follow <span>Dialogxe.</span></h2>
            <p>New releases, music, and everything happening around the label.</p>
            <div className={styles.actions}><ActionLink href="https://tstack.app/dialogxe?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafixgxWH1rNyqDQ3tcjT4ZAw3evAMMd1TMitN9zbfvYzO2GtNhtUmABkhLe-A_aem_JLLhX1DOluZgexVk4fP3Ow">Submit a track</ActionLink><ActionLink href="/tour" textLink>View J. Worra tour dates</ActionLink></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
