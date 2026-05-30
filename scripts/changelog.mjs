import puppeteer from 'puppeteer';
import { writeFileSync } from 'fs';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Inter', -apple-system, sans-serif;
    background: #0a0a0a;
    color: #e5e5e5;
    padding: 0;
    line-height: 1.6;
  }
  .cover {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 50%, #0a0a0a 100%);
    padding: 80px 60px 60px;
    border-bottom: 1px solid rgba(217,74,58,0.3);
    text-align: center;
  }
  .cover h1 {
    font-size: 42px;
    font-weight: 700;
    color: white;
    letter-spacing: -1px;
    margin-bottom: 8px;
  }
  .cover h1 span { color: #d94a3a; }
  .cover .sub {
    color: rgba(255,255,255,0.5);
    font-size: 16px;
    font-weight: 300;
  }
  .cover .date {
    font-size: 13px;
    color: rgba(255,255,255,0.3);
    margin-top: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .section {
    padding: 40px 60px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .section:last-child { border-bottom: none; }
  .section h2 {
    font-size: 13px;
    font-weight: 600;
    color: #d94a3a;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 16px;
  }
  .section ul { list-style: none; }
  .section li {
    padding: 6px 0;
    padding-left: 16px;
    position: relative;
    font-size: 14px;
    color: rgba(255,255,255,0.8);
    font-weight: 300;
  }
  .section li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 14px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #d94a3a;
    opacity: 0.6;
  }
  .tag {
    display: inline-block;
    font-size: 10px;
    font-weight: 600;
    padding: 2px 7px;
    border-radius: 4px;
    margin-right: 6px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .tag-blue { background: rgba(59,130,246,0.2); color: #60a5fa; }
  .tag-green { background: rgba(34,197,94,0.2); color: #4ade80; }
  .tag-red { background: rgba(239,68,68,0.2); color: #f87171; }
  .tag-yellow { background: rgba(234,179,8,0.2); color: #facc15; }
  .tag-purple { background: rgba(168,85,247,0.2); color: #c084fc; }
  .footer {
    padding: 30px 60px;
    text-align: center;
    color: rgba(255,255,255,0.2);
    font-size: 11px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .stat-row {
    display: flex;
    gap: 24px;
    margin-top: 16px;
  }
  .stat {
    flex: 1;
    text-align: center;
    padding: 20px;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 8px;
  }
  .stat-num {
    font-size: 28px;
    font-weight: 700;
    color: white;
  }
  .stat-label {
    font-size: 11px;
    color: rgba(255,255,255,0.4);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 4px;
  }
  @media print {
    body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
  }
</style>
</head>
<body>

<div class="cover">
  <h1>jworra.com <span>Changelog</span></h1>
  <p class="sub">All notable changes and optimizations</p>
  <p class="date">May 30, 2026 &mdash; Build v2.1</p>
</div>

<div class="section">
  <h2>Performance &amp; Output Size</h2>
  <ul>
    <li><span class="tag tag-green">-74%</span> Total output size reduced from 52.6 MB to 13.7 MB</li>
    <li><span class="tag tag-green">-57%</span> hero-bg.mov: 14.1 MB &rarr; 6.0 MB (H.264 CRF 28 re-encode)</li>
    <li><span class="tag tag-green">-40%</span> hero-bg.webm: 7.2 MB &rarr; 4.3 MB (VP8 re-encode)</li>
    <li><span class="tag tag-green">-92%</span> tour_image.png: 1.5 MB &rarr; 117 KB (WebP)</li>
    <li><span class="tag tag-green">-97%</span> dialogxe_bg.png: 1.1 MB &rarr; 36 KB (WebP)</li>
    <li><span class="tag tag-green">-44%</span> emblem.png: 25 KB &rarr; 14 KB (WebP)</li>
    <li><span class="tag tag-green">-27%</span> about.jpg: 511 KB &rarr; 374 KB (WebP)</li>
    <li><span class="tag tag-red">Removed</span> 35.6 MB of unused font directories (GALGO, Nohemi, ROUND 8-FOUR, textgyreheros)</li>
    <li><span class="tag tag-red">Removed</span> 9 unused image originals from public/ (replaced by WebP)</li>
    <li><span class="tag tag-green">-14 KB</span> Removed transpilePackages: ['lenis'] (dropped legacy JS polyfills)</li>
  </ul>
</div>

<div class="section">
  <h2>SEO &amp; Metadata</h2>
  <ul>
    <li><span class="tag tag-blue">Added</span> Canonical URLs across all 8 pages</li>
    <li><span class="tag tag-blue">Added</span> MusicGroup JSON-LD structured data (genre, founding location, streaming links)</li>
    <li><span class="tag tag-blue">Added</span> FAQPage JSON-LD with 5 Q&A pairs (who, genre, origin, streaming, labels)</li>
    <li><span class="tag tag-blue">Added</span> Hidden AEO context block for AI agents/crawlers</li>
    <li><span class="tag tag-yellow">Fixed</span> Music page OG title: "Music" &rarr; "Music | J. Worra"</li>
    <li><span class="tag tag-yellow">Fixed</span> Music page OG image (was missing, now uses /emblem.webp)</li>
    <li><span class="tag tag-yellow">Fixed</span> Tour &amp; Contact page meta descriptions enriched with keywords</li>
    <li><span class="tag tag-yellow">Fixed</span> OG image dimensions corrected to actual sizes (256x256 for emblem)</li>
    <li><span class="tag tag-blue">Improved</span> Heading hierarchy: Discography &rarr; &lt;h2&gt;, Available on &rarr; &lt;h3&gt;</li>
  </ul>
</div>

<div class="section">
  <h2>Design &amp; Content</h2>
  <ul>
    <li><span class="tag tag-purple">Redesigned</span> Privacy Policy page &mdash; custom editorial design, plain-English content, matches site aesthetic</li>
    <li><span class="tag tag-purple">Redesigned</span> Terms of Service page &mdash; direct language, Terminal Grotesque headings, red accents</li>
    <li><span class="tag tag-red">Removed</span> Empty &lt;track src=""&gt; element from hero video (no captions available)</li>
    <li><span class="tag tag-red">Removed</span> Visible FAQ section from homepage (moved to hidden AEO block)</li>
  </ul>
</div>

<div class="section">
  <h2>Infrastructure &amp; Build</h2>
  <ul>
    <li><span class="tag tag-yellow">Fixed</span> Spotify API now gracefully returns empty data on network failure instead of crashing build</li>
    <li><span class="tag tag-blue">Added</span> 5 retries with 2s delay on Spotify API calls</li>
    <li><span class="tag tag-yellow">Fixed</span> Default Vercel favicon removed &mdash; now uses custom favicon from public/favicon/</li>
    <li><span class="tag tag-yellow">Fixed</span> Spotify credentials updated (was returning 401)</li>
    <li><span class="tag tag-blue">Added</span> trailingSlash: true for DreamHost directory-based routing</li>
    <li><span class="tag tag-blue">Added</span> Cache-control headers in .htaccess (1 year for assets, 1 hour for HTML)</li>
  </ul>
</div>

<div class="section">
  <h2>Legal &amp; Compliance</h2>
  <ul>
    <li><span class="tag tag-blue">Added</span> California Privacy Rights section to Privacy Policy &mdash; CCPA disclosures (right to know, delete, opt-out), Do Not Track policy</li>
  </ul>
</div>

<div class="section">
  <h2>Video &amp; Animation</h2>
  <ul>
    <li><span class="tag tag-purple">Rewrote</span> Hero background video loop &mdash; replaced RAF seek hack with dual-video crossfade for seamless looping, eliminating visible stutter between loop iterations</li>
  </ul>
</div>

<div class="section">
  <h2>Infrastructure &amp; Build</h2>
  <ul>
    <li><span class="tag tag-yellow">Fixed</span> Node.js DEP0205 deprecation warning from Next.js dependency &mdash; suppressed via node-options in .npmrc</li>
  </ul>
</div>

<div class="section">
  <h2>Accessibility</h2>
  <ul>
    <li><span class="tag tag-blue">Added</span> fetchpriority="high" + loading="eager" to nav emblem (LCP optimization)</li>
    <li><span class="tag tag-yellow">Fixed</span> Low-opacity text contrast across Dialogxe, Tour, About, and Music pages</li>
    <li><span class="tag tag-yellow">Fixed</span> Non-composited CSS animations replaced (scrollbar-color removed from transitions)</li>
    <li><span class="tag tag-blue">Added</span> prefers-reduced-motion support on all pages</li>
  </ul>
</div>

<div class="section">
  <h2>Stats</h2>
  <div class="stat-row">
    <div class="stat">
      <div class="stat-num">13.7 MB</div>
      <div class="stat-label">Final Build Size</div>
    </div>
    <div class="stat">
      <div class="stat-num">10</div>
      <div class="stat-label">Pages</div>
    </div>
    <div class="stat">
      <div class="stat-num">3</div>
      <div class="stat-label">Sections Added</div>
    </div>
    <div class="stat">
      <div class="stat-num">3</div>
      <div class="stat-label">JSON-LD Schemas</div>
    </div>
    <div class="stat">
      <div class="stat-num">74%</div>
      <div class="stat-label">Size Reduction</div>
    </div>
  </div>
</div>

<div class="footer">
  Generated from jworra.com &mdash; Built with Next.js 16.1.1 &mdash; Deployed to DreamHost
</div>

</body>
</html>`;

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle0' });
await page.pdf({
  path: 'CHANGELOG.pdf',
  format: 'A4',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});
await browser.close();
console.log('CHANGELOG.pdf generated');
