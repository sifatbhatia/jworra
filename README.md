## 🎵 J. Worra Official Website

A modern, high-performance DJ website featuring:
- ✨ Real-time Spotify API integration for latest releases
- 🎪 Bandsintown API integration for live tour dates
- 📱 Fully responsive design with smooth animations
- 🎥 Cinematic video background hero section
- 🎨 Clean, minimalist UI optimized for conversions
- ⚡ Fast page loads and optimized performance
- 🔍 Complete SEO optimization

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example file and add your API credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
BANDSINTOWN_APP_ID=your_bandsintown_app_id
NEXT_PUBLIC_SITE_URL=https://jworra.com
```

**Getting API Credentials:**
- **Spotify:** https://developer.spotify.com/dashboard
- **Bandsintown:** https://www.bandsintown.com/api/requests

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
dj-site/
├── app/
│   ├── about/              # Biography page
│   ├── contact/            # Contact information
│   ├── dialogxe/           # Dialogxe label page
│   ├── music/              # Music releases (Spotify API)
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of service
│   ├── tour/               # Tour dates (Bandsintown API)
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # Dynamic sitemap
│   └── globals.css         # Global styles
├── components/
│   ├── hero.tsx            # Video hero section
│   ├── footer.tsx          # Page footer layout
│   ├── page-layout.tsx     # Page wrapper
│   └── page-transition.tsx # Page animations
├── lib/
│   ├── spotify.ts          # Spotify API client
│   └── bandsintown.ts      # Bandsintown API client
├── public/
│   ├── emblem.png/svg      # Logo files
│   ├── hero-bg.webm        # Hero video
│   ├── favicon/            # Favicon assets
│   └── robots.txt          # SEO robots file
├── .env.example            # Environment template
└── README.md               # This file
```

---

## ✨ Features

### Pages
- **Homepage** - Video background hero with smooth animations
- **Music** - Latest releases from Spotify API with streaming links
- **Tour** - Live tour dates from Bandsintown with ticket links
- **About** - Artist biography and contact information
- **Dialogxe** - Dialogxe Records label page
- **Contact** - Management and booking details
- **Privacy/Terms** - Legal pages

### Technical Features
- ⚡ **Next.js 16** - Latest React framework with App Router
- 🎨 **Tailwind CSS 4** - Modern styling with custom design system
- 📱 **Fully Responsive** - Mobile-first design
- 🖼️ **Image Optimization** - Next.js Image component
- 🎭 **Page Transitions** - Smooth navigation animations
- 🔍 **SEO Optimized** - Meta tags, sitemap, Open Graph
- 📊 **PWA Support** - Installable as progressive web app
- 🌐 **API Integration** - Spotify + Bandsintown real-time data

---

## 🔧 Configuration

### Spotify API Setup

1. Create app at https://developer.spotify.com/dashboard
2. Get Client ID and Client Secret
3. Add to `.env.local`
4. Artist configured: J. Worra (ID: 4q0N3EI67tVnAeeaXbNQIj)

### Bandsintown API Setup

1. Request access at https://www.bandsintown.com/api/requests
2. Get App ID
3. Add to `.env.local`
4. Artist configured: J. Worra

### Custom Domain

Update `NEXT_PUBLIC_SITE_URL` in environment variables and:
- `app/layout.tsx` - Update Open Graph URL
- `app/sitemap.ts` - Update base URL
- `public/robots.txt` - Update sitemap URL

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Import to Vercel:
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Add environment variables from `.env.local`
   - Deploy!

3. Configure custom domain in Vercel settings

### Static Export (DreamHost, Netlify, etc.)

```bash
npm run build
```

Upload the `out/` folder contents to your web server.

### Self-Hosted

```bash
npm run build
npm start
```

---

## 📊 Analytics

Add Google Analytics by setting environment variables:

```env
NEXT_PUBLIC_GTM_ID=your_gtm_id
NEXT_PUBLIC_GA_ID=your_ga_id
```

---

## 🎨 Customization

### Update Content
- **Bio:** Edit `app/about/page.tsx`
- **Contact:** Edit `app/contact/page.tsx`
- **Social Links:** Edit `components/page-layout.tsx`
- **Colors:** Edit `app/globals.css`

### Replace Assets
- **Logo:** Replace `public/emblem.png` and `emblem.svg`
- **Favicon:** Replace `app/favicon.ico`
- **Hero Video:** Replace `public/hero-bg.webm`
- **Photos:** Add to `public/` folder

### Change Fonts
Edit `app/layout.tsx`:
```tsx
import { YourFont, AnotherFont } from "next/font/google";
```

---

## 📝 Environment Variables

Required variables in `.env.local`:

```env
# Spotify API
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret

# Bandsintown API
BANDSINTOWN_APP_ID=your_app_id

# Site Config
NEXT_PUBLIC_SITE_URL=https://jworra.com

# Optional Analytics
NEXT_PUBLIC_GTM_ID=your_gtm_id
NEXT_PUBLIC_GA_ID=your_ga_id
```

---

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Tech Stack

- **Framework:** Next.js 16.1.1
- **React:** 19.2.3
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript 5
- **Icons:** React Icons 5.5.0
- **Deployment:** Vercel (recommended)

---

## 🐛 Troubleshooting

### Music page not loading?
- Verify Spotify credentials in `.env.local`
- Check artist ID in `lib/spotify.ts`
- Ensure Spotify API app has proper permissions

### Tour dates not showing?
- Verify Bandsintown credentials
- Check artist name matches exactly
- Ensure API rate limits not exceeded

### Build errors?
```bash
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### More help?
Contact your development team or review the Next.js documentation.

---

## 📈 Performance

Current optimization status:
- ✅ Image optimization via Next.js Image
- ✅ Font optimization with display: swap
- ✅ Code splitting and lazy loading
- ✅ Video background optimized (WebM)
- ✅ Compression enabled
- ✅ Proper caching headers
- ✅ Standalone output mode

**Target Metrics:**
- Lighthouse Score: 90+
- First Contentful Paint: <1.8s
- Time to Interactive: <3.0s
- Cumulative Layout Shift: <0.1

---

## 🔐 Security

- ✅ Environment variables for all secrets
- ✅ `.gitignore` configured properly
- ✅ HTTPS enforced (via Vercel)
- ✅ `poweredByHeader` disabled
- ✅ Dependencies regularly updated
- ✅ No sensitive data in repository

---

## 📞 Support

For technical issues, check the troubleshooting section above or review:
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs

---

## 📄 License

© 2026 J. Worra. All rights reserved.

---

**Built with ❤️ for J. Worra**
