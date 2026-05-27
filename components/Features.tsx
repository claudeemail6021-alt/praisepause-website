'use client';

import { useRef } from 'react';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';
import {
  Gift, Pause, Star, Users, Share2, BookOpen,
  Bell, Sun, Shield, Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon:    Gift,
    emoji:   '🎁',
    label:   'Free Forever Core',
    desc:    'Core worship pauses, daily verses, and streaks are 100% free — always. No bait-and-switch. No trial period. Just free.',
    tag:     'FREE',
    tagColor:'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300',
    border:  'border-green-200 dark:border-green-800',
    glow:    'hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]',
    big:     true,
  },
  {
    icon:    Pause,
    emoji:   '⏸️',
    label:   'Smart Worship Pauses',
    desc:    'Triggers automatically after your chosen scroll interval — no manual tracking needed. Designed to feel like grace, not guilt.',
    tag:     'CORE',
    tagColor:'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
    border:  'border-blue-200 dark:border-blue-800',
    glow:    'hover:shadow-glow-blue',
  },
  {
    icon:    Star,
    emoji:   '🔥',
    label:   'Worship Streaks',
    desc:    'Build a daily streak of completed pauses. Miss a day and your community prays you back — streaks are about grace, not shame.',
    tag:     'CORE',
    tagColor:'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
    border:  'border-blue-200 dark:border-blue-800',
    glow:    'hover:shadow-glow-blue',
  },
  {
    icon:    Share2,
    emoji:   '🌟',
    label:   'Shareable Worship Cards',
    desc:    'Turn any pause into a stunning, branded card for your Story or Feed. One tap. Beautiful. Built-in invite hook that grows your community.',
    tag:     'VIRAL',
    tagColor:'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300',
    border:  'border-purple-200 dark:border-purple-800',
    glow:    'hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
  },
  {
    icon:    Users,
    emoji:   '💌',
    label:   'Referral & Community',
    desc:    'Invite friends and unlock exclusive worship packs together. Watch your faith community grow one invitation at a time.',
    tag:     'GROWTH',
    tagColor:'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300',
    border:  'border-amber-200 dark:border-amber-800',
    glow:    'hover:shadow-glow-gold',
  },
  {
    icon:    BookOpen,
    emoji:   '📖',
    label:   'Living Word Library',
    desc:    'Curated Scripture library with 1,000+ verses sorted by mood, season, and need. Never scramble for what to read again.',
    tag:     'CONTENT',
    tagColor:'bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300',
    border:  'border-sky-200 dark:border-sky-800',
    glow:    'hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]',
  },
  {
    icon:    Bell,
    emoji:   '🔔',
    label:   'Gentle Nudges',
    desc:    'Morning devotionals and evening reflections land as soft notifications — never spammy, always Spirit-led timing.',
    tag:     'CORE',
    tagColor:'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
    border:  'border-blue-200 dark:border-blue-800',
    glow:    'hover:shadow-glow-blue',
  },
  {
    icon:    Sun,
    emoji:   '🌅',
    label:   'Daily Themes',
    desc:    'Each day carries a fresh theme — gratitude, peace, boldness, joy. Your pauses align with that theme for a coherent spiritual flow.',
    tag:     'PREMIUM',
    tagColor:'bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300',
    border:  'border-rose-200 dark:border-rose-800',
    glow:    'hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]',
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.05 });

  return (
    <section id="features" className="py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-semibold mb-4">
            Everything You Need 🛠️
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
            Built for real believers,{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              real lives
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Every feature is designed around one goal: helping you encounter God in the middle of ordinary moments.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className={cn(
                  'group relative rounded-3xl p-7 border bg-gray-50 dark:bg-gray-900 cursor-default',
                  'transition-all duration-300 hover:-translate-y-1 hover:shadow-card',
                  f.border, f.glow,
                  f.big ? 'sm:col-span-2 lg:col-span-1' : '',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Tag */}
                <span className={cn('absolute top-5 right-5 text-[10px] font-black px-2 py-0.5 rounded-full', f.tagColor)}>
                  {f.tag}
                </span>

                {/* Icon */}
                <div className="text-3xl mb-4">{f.emoji}</div>

                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{f.label}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Free tier callout */}
        <div
          className={cn(
            'mt-12 rounded-3xl p-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 flex flex-col sm:flex-row items-center gap-6 transition-all duration-700 delay-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <div className="text-5xl flex-shrink-0">🎉</div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-1">Free Forever — No Fine Print</h3>
            <p className="text-green-700 dark:text-green-300">
              Core worship pauses, streaks, the verse library, and shareable cards are permanently free. Premium Daily Themes unlock for $2.99/month — completely optional and never paywalled for essentials.
            </p>
          </div>
          <a
            href="#download"
            className="flex-shrink-0 px-6 py-3 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold transition-colors duration-200 whitespace-nowrap"
          >
            Get Free Access
          </a>
        </div>

      </div>
    </section>
  );
}
