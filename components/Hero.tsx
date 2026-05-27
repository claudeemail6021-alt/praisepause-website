'use client';

import { useEffect, useRef, useState } from 'react';
import { Apple, Play, Star, ArrowDown, Sparkles, Shield } from 'lucide-react';

/* ── App store badge components ─────────────────────────────────── */
function AppStoreBadge() {
  return (
    <a
      href="#download"
      className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-black text-white hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-lg group"
    >
      <Apple className="w-7 h-7 flex-shrink-0 group-hover:scale-110 transition-transform" />
      <div className="text-left">
        <p className="text-[10px] font-medium opacity-80 leading-none">Download on the</p>
        <p className="text-[17px] font-bold leading-tight tracking-tight">App Store</p>
      </div>
    </a>
  );
}

function PlayStoreBadge() {
  return (
    <a
      href="#download"
      className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-black text-white hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-lg group"
    >
      <Play className="w-6 h-6 flex-shrink-0 fill-current group-hover:scale-110 transition-transform" />
      <div className="text-left">
        <p className="text-[10px] font-medium opacity-80 leading-none">Get it on</p>
        <p className="text-[17px] font-bold leading-tight tracking-tight">Google Play</p>
      </div>
    </a>
  );
}

/* ── Phone mock with video placeholder ──────────────────────────── */
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px] animate-float">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-blue-400/40 to-indigo-600/40 blur-2xl scale-110 -z-10" />

      {/* Phone shell */}
      <div className="relative w-full aspect-[9/19] rounded-[3rem] bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl border-4 border-gray-700 overflow-hidden">

        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-10" />

        {/* Screen content */}
        <div className="absolute inset-2 rounded-[2.5rem] bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden flex flex-col">

          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-8 pb-2">
            <span className="text-[10px] font-bold text-gray-700 dark:text-gray-200">9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-4 h-2 rounded-sm border border-gray-400 dark:border-gray-500">
                <div className="w-3/4 h-full bg-green-500 rounded-sm" />
              </div>
            </div>
          </div>

          {/* App header */}
          <div className="px-4 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-blue-700 dark:text-blue-300">PraisePause</span>
            </div>
          </div>

          {/* "Video" placeholder — TikTok style */}
          <div className="mx-3 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 flex-1 flex flex-col items-center justify-center relative">
            {/* Fake video controls */}
            <div className="absolute top-3 right-3 flex flex-col gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Star className="w-4 h-4 text-white fill-white" />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white text-xs font-bold">✦</span>
              </div>
            </div>

            {/* "Worship pause" notification */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 mx-4 text-center">
              <div className="text-2xl mb-1">🙏</div>
              <p className="text-white text-xs font-bold mb-0.5">Time to Worship!</p>
              <p className="text-white/80 text-[10px]">You've scrolled 5 min</p>
            </div>

            {/* Bottom caption */}
            <div className="absolute bottom-3 left-3 right-10">
              <p className="text-white text-[10px] font-semibold">"Turning my scroll into prayer 🙌"</p>
              <p className="text-white/60 text-[9px]">#PraisePause #worship</p>
            </div>

            {/* Play button hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                <Play className="w-5 h-5 text-blue-600 fill-blue-600 ml-1" />
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="flex items-center justify-around px-3 py-3 mt-2">
            {['🏠','🔍','✝️','👤'].map((icon, i) => (
              <div key={i} className={`text-sm ${i === 2 ? 'scale-125' : 'opacity-60'}`}>{icon}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl px-3 py-2 shadow-xl border border-blue-100 dark:border-gray-700 flex items-center gap-1.5">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-xs font-bold text-gray-800 dark:text-white">4.9</span>
      </div>
    </div>
  );
}

/* ── Hero ───────────────────────────────────────────────────────── */
export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-hero-gradient dark:bg-gray-950 overflow-hidden pt-16"
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-300/20 dark:bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/30 dark:bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left column — copy */}
          <div
            ref={ref}
            className={`space-y-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                🎉 Now Available — Free Forever Core
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-gray-900 dark:text-white">
              Turn every{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  scroll
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-blue-200/60 dark:bg-blue-800/40 rounded-full -z-0 transform skew-x-3" />
              </span>
              {' '}into{' '}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                worship
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
              PraisePause gently interrupts your social media scroll with a 30-second worship moment — turning idle screen time into daily encounters with God.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6">
              {[
                { num: '50K+', label: 'Worshippers' },
                { num: '2.1M', label: 'Pauses Taken' },
                { num: '4.9★', label: 'App Rating' },
              ].map((stat) => (
                <div key={stat.num} className="flex flex-col">
                  <span className="text-2xl font-black text-gray-900 dark:text-white">{stat.num}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Download buttons */}
            <div id="download" className="flex flex-wrap gap-4">
              <AppStoreBadge />
              <PlayStoreBadge />
            </div>

            {/* Free badge */}
            <div className="flex items-center gap-2 pt-1">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                Free Forever Core · No credit card · No catch
              </span>
            </div>
          </div>

          {/* Right column — phone mockup */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <PhoneMockup />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce-slow opacity-60">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Scroll to explore</span>
          <ArrowDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </section>
  );
}
