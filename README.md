# PraisePause — Marketing Website

> "Turn every scroll into worship" — the official landing page for the PraisePause app.

Built with **Next.js 15 (App Router)** · **Tailwind CSS** · **Supabase** · **Vercel**

---

## 🚀 Quick Start (Local Dev)

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and fill in your Supabase keys
cp .env.local.example .env.local

# 3. Run dev server
npm run dev
# → Open http://localhost:3000
```

---

## 🗄️ Supabase Setup (Free Tier — One-Time)

### 1. Create a Supabase project
1. Go to [supabase.com](https://supabase.com) → **New Project**
2. Choose a region close to your users
3. Save your **database password** somewhere safe

### 2. Create the email subscribers table
In Supabase → **SQL Editor**, paste and run:

```sql
CREATE TABLE IF NOT EXISTS email_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  source TEXT DEFAULT 'lead-magnet',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for the public form)
CREATE POLICY "Allow public inserts" ON email_subscribers
  FOR INSERT WITH CHECK (true);

-- Only service role can read (protects subscriber emails)
CREATE POLICY "Only service role reads" ON email_subscribers
  FOR SELECT USING (auth.role() = 'service_role');
```

### 3. Add your keys to `.env.local`
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
Find these in Supabase → **Project Settings → API**.

---

## ☁️ Deploy to Vercel (Free — One-Time)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial PraisePause website"
# Create a repo at github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/praisepause-website.git
git push -u origin main
```

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repo
3. Leave build settings at defaults (Vercel auto-detects Next.js)
4. Add **Environment Variables** (same as `.env.local`):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click **Deploy** — your site is live in ~60 seconds!

### 3. Enable Vercel Analytics (Free, for ad tracking)
In Vercel Dashboard → your project → **Analytics** tab → **Enable**.
Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';
// Add <Analytics /> inside your root layout body
```
Install: `npm install @vercel/analytics`

---

## 🌐 Custom Domain + Cloudflare DNS

### 1. Add domain in Vercel
1. Vercel Dashboard → Project → **Settings → Domains**
2. Type your domain (e.g., `praisepause.app`) → **Add**
3. Vercel shows you the DNS records needed

### 2. Point DNS in Cloudflare
1. Log in to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Select your domain → **DNS → Records**
3. Add an **A record**:
   - Name: `@`
   - IPv4: `76.76.21.21` (Vercel's IP)
   - Proxy status: **Proxied** (orange cloud)
4. Add a **CNAME** for `www`:
   - Name: `www`
   - Target: `cname.vercel-dns.com`
   - Proxy status: **Proxied**
5. In Cloudflare → **SSL/TLS** → set to **Full (strict)**
6. DNS propagates in 1–5 minutes with Cloudflare

### 3. Verify in Vercel
Back in Vercel → Domains — status should show **Valid Configuration** with a green checkmark.

---

## 📊 Vercel Analytics for Paid Ads

Vercel's free tier includes **Web Analytics** (page views, unique visitors, top pages).

For paid ad conversion tracking:
- Add `?utm_source=tiktok&utm_medium=paid&utm_campaign=launch` to your ad URLs
- Vercel Analytics captures these UTM params automatically
- For deeper funnel tracking (form submissions → downloads), add [Vercel Speed Insights](https://vercel.com/docs/speed-insights) or connect Google Analytics 4 (free).

---

## 📅 Sample Content Calendar (First 30 Days)

| Week | Platform | Content Idea |
|------|----------|-------------|
| 1 | TikTok | "I turned my doomscrolling into worship — here's how" |
| 1 | Instagram Reels | App demo + "Free forever" hook |
| 2 | TikTok | "What happened after 7 days of PraisePause" |
| 2 | Pinterest | "5 ways to redeem your screen time" pin → landing page |
| 3 | Facebook | Testimonial carousel ad → app store |
| 3 | TikTok | Duet challenge: "Pause & Praise" challenge |
| 4 | Email (to subscribers) | Exclusive worship resource + referral ask |
| 4 | YouTube Shorts | 60-second app walkthrough |

---

## 🔧 Project Structure

```
praisepause-website/
├── app/
│   ├── layout.tsx          # Root layout with SEO, fonts, dark mode
│   ├── page.tsx            # Main landing page (all sections)
│   ├── globals.css         # Global styles + Tailwind base
│   └── actions/
│       └── subscribe.ts    # Server Action: email form → Supabase
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProblemSolution.tsx
│   ├── HowItWorks.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx
│   ├── LeadMagnet.tsx
│   ├── SocialProof.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── lib/
│   ├── supabase.ts         # Supabase client
│   └── utils.ts            # cn() helper
├── public/
│   └── (images, icons)
├── .env.local.example
├── next.config.js
├── tailwind.config.ts
└── README.md
```

---

## 📜 License

© 2025 PraisePause. All rights reserved.
