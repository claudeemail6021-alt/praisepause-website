'use client';

import { useRef } from 'react';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';
import { TrendingDown, Heart, Clock, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const problemStats = [
  {
    icon: Clock,
    stat: '4.5 hrs',
    label: 'Average daily screen time per adult',
    color: 'text-red-500',
    bg:    'bg-red-50 dark:bg-red-900/20',
    border:'border-red-100 dark:border-red-800',
  },
  {
    icon: TrendingDown,
    stat: '12 min',
    label: 'Time the average person spends in prayer each week',
    color: 'text-orange-500',
    bg:    'bg-orange-50 dark:bg-orange-900/20',
    border:'border-orange-100 dark:border-orange-800',
  },
  {
    icon: Zap,
    stat: '96×',
    label: 'More time scrolling than in Scripture daily',
    color: 'text-yellow-600',
    bg:    'bg-yellow-50 dark:bg-yellow-900/20',
    border:'border-yellow-100 dark:border-yellow-800',
  },
];

const solutionPoints = [
  {
    emoji: '⏸️',
    title: 'The Pause',
    body:  'After every customizable scroll interval, PraisePause softly surfaces a worship prompt — a prayer, a verse, a gratitude moment — right inside your feed.',
  },
  {
    emoji: '🙌',
    title: 'Redeem, Don\'t Restrict',
    body:  'No draconian screen-time blocks. Just gentle, joyful redirects that turn what was wasted into something that builds your faith.',
  },
  {
    emoji: '🌊',
    title: 'Let It Flow',
    body:  'Complete your pause in 30 seconds, earn a streak, and return to your day — refreshed, centered, and reminded of what matters most.',
  },
];

export default function ProblemSolution() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section id="problem" className="py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── PROBLEM ─── */}
        <div
          ref={ref}
          className={cn(
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-semibold mb-4">
              The Reality Check 😬
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
              We give our most sacred hours to the scroll
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Every believer wants to go deeper with God — but our phones keep winning. It's not a willpower problem. It's a design problem. And we built the solution.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
            {problemStats.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={cn(
                    'rounded-2xl border p-8 text-center transition-all duration-500',
                    item.bg, item.border,
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                  )}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className={cn('flex justify-center mb-4', item.color)}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className={cn('text-5xl font-black mb-2', item.color)}>{item.stat}</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── SOLUTION ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: headline */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold">
              The PraisePause Way ✨
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-tight">
              What if your phone{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                pointed you to God
              </span>{' '}
              instead of away from Him?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              PraisePause sits quietly in the background and, at the exact moment you've been scrolling too long, gently steps in with a worship experience designed to take just 30 seconds — but leave an impression that lasts all day.
            </p>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
              <Heart className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <p className="text-blue-800 dark:text-blue-200 text-sm font-medium">
                "Redeem the time, because the days are evil." — Ephesians 5:16
              </p>
            </div>
          </div>

          {/* Right: solution points */}
          <div className="space-y-5">
            {solutionPoints.map((point, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-card transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl flex-shrink-0 mt-0.5">{point.emoji}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{point.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{point.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
