'use client';

import { useRef, useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';
import { Clock, Zap, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

/* ── Countdown timer ────────────────────────────────────────────── */
function useCountdown(targetHours = 48) {
  const [time, setTime] = useState({ h: targetHours, m: 0, s: 0 });

  useEffect(() => {
    // Persist a "launch deadline" in sessionStorage so refreshes don't reset
    const key = 'pp_launch_deadline';
    let deadline = sessionStorage.getItem(key);
    if (!deadline) {
      const d = new Date(Date.now() + targetHours * 60 * 60 * 1000);
      deadline = d.toISOString();
      sessionStorage.setItem(key, deadline);
    }

    const tick = () => {
      const diff = new Date(deadline!).getTime() - Date.now();
      if (diff <= 0) {
        setTime({ h: 0, m: 0, s: 0 });
        return;
      }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({ h, m, s });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetHours]);

  return time;
}

function CountdownBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
        <span className="text-2xl sm:text-4xl font-black text-white tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs text-white/70 font-medium mt-1.5 uppercase tracking-wide">{label}</span>
    </div>
  );
}

/* ── Press / as-seen-on logos (text-based, no external deps) ───── */
const pressItems = [
  { name: 'FaithTech Review', emoji: '⛪' },
  { name: 'The Gospel Herald', emoji: '📰' },
  { name: 'Worship Digest',   emoji: '🎵' },
  { name: 'ChurchTech Today', emoji: '💻' },
  { name: 'Spirit & Screen',  emoji: '📱' },
];

export default function SocialProof() {
  const ref    = useRef<HTMLDivElement>(null);
  const isVis  = useIntersectionObserver(ref, { threshold: 0.1 });
  const time   = useCountdown(48);

  return (
    <section id="launch-special" className="overflow-hidden" ref={ref}>

      {/* ── As seen in ── */}
      <div className={cn(
        'py-12 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800 transition-all duration-700',
        isVis ? 'opacity-100' : 'opacity-0'
      )}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-7">
            Featured In
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {pressItems.map((p, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                <span className="text-xl">{p.emoji}</span>
                <span className="text-sm font-semibold">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Launch Urgency Banner ── */}
      <div className="py-24 lg:py-32 bg-cta-gradient relative overflow-hidden">

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          {/* Subtle cross pattern */}
          <div className="absolute top-8 right-8 text-white/10 text-9xl font-serif">✝</div>
          <div className="absolute bottom-8 left-8 text-white/10 text-7xl font-serif">✝</div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

          <div className={cn(
            'transition-all duration-700 delay-100',
            isVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 text-white font-bold text-sm mb-6">
              <Zap className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              Launch Week Special — Ending Soon
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              First 10,000 users get
              <br />
              <span className="text-yellow-300">Premium FREE</span> for 3 months
            </h2>

            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Lock in free premium access before the launch window closes. Includes Daily Themes, extended worship packs, and priority new features — forever free for early adopters.
            </p>
          </div>

          {/* Countdown */}
          <div className={cn(
            'transition-all duration-700 delay-200',
            isVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}>
            <div className="flex items-center justify-center gap-3">
              <CountdownBlock value={time.h} label="Hours" />
              <span className="text-white/50 text-3xl font-black mb-4">:</span>
              <CountdownBlock value={time.m} label="Minutes" />
              <span className="text-white/50 text-3xl font-black mb-4">:</span>
              <CountdownBlock value={time.s} label="Seconds" />
            </div>
          </div>

          {/* Progress bar — spots claimed */}
          <div className={cn(
            'space-y-3 transition-all duration-700 delay-300',
            isVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}>
            <div className="flex justify-between text-sm text-white/70 font-medium">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                Early spots claimed
              </span>
              <span className="text-yellow-300 font-bold">7,341 / 10,000</span>
            </div>
            <div className="h-3 rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 transition-all duration-1000"
                style={{ width: '73.4%' }}
              />
            </div>
            <p className="text-white/60 text-xs text-center">
              <strong className="text-white">2,659 spots remaining</strong> — once these are gone, they're gone
            </p>
          </div>

          {/* CTA */}
          <div className={cn(
            'transition-all duration-700 delay-400',
            isVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}>
            <a
              href="#download"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-indigo-700 font-black text-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 shadow-xl"
            >
              <Clock className="w-6 h-6" />
              Claim My Spot — Free
            </a>
            <p className="text-white/60 text-sm mt-3">Available on iOS & Android · No credit card required</p>
          </div>

        </div>
      </div>

    </section>
  );
}
