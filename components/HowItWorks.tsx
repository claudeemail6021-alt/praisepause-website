'use client';

import { useRef } from 'react';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';
import { Smartphone, Pause, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    step:    '01',
    icon:    Smartphone,
    emoji:   '📲',
    color:   'from-blue-500 to-blue-600',
    bgLight: 'bg-blue-50 dark:bg-blue-900/20',
    border:  'border-blue-200 dark:border-blue-800',
    title:   'Download & Personalize',
    body:    "Install PraisePause for free, pick your scroll interval (5, 10, or 15 minutes), choose your worship style — prayer, scripture, gratitude, or praise song — and you're set. It takes under 2 minutes.",
    detail:  'Works on iOS & Android',
  },
  {
    step:    '02',
    icon:    Pause,
    emoji:   '🙏',
    color:   'from-indigo-500 to-purple-600',
    bgLight: 'bg-indigo-50 dark:bg-indigo-900/20',
    border:  'border-indigo-200 dark:border-indigo-800',
    title:   'Receive Your Worship Pause',
    body:    "Scroll your usual feeds. When your interval is up, a beautiful full-screen prompt gently interrupts with today's worship moment — a personalized prayer, a living verse, or a 30-second praise track. No buzzers, no guilt. Just grace.",
    detail:  'Gentle, never harsh',
  },
  {
    step:    '03',
    icon:    Share2,
    emoji:   '✨',
    color:   'from-amber-500 to-orange-500',
    bgLight: 'bg-amber-50 dark:bg-amber-900/20',
    border:  'border-amber-200 dark:border-amber-800',
    title:   'Carry the Moment Forward',
    body:    "Complete your pause, earn a streak star, and optionally share your worship moment as a beautifully designed card to your Story or Feed. Watch your community grow as friends ask, \"What is PraisePause?\"",
    detail:  'Built-in share cards',
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-heaven-gradient dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-20 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-4">
            Simple as 1-2-3 🎯
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
            How{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              PraisePause
            </span>{' '}
            works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Three joyful steps that transform your relationship with your phone — and with God.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">

          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-amber-200 dark:from-blue-800 dark:via-indigo-800 dark:to-amber-800 z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className={cn(
                  'relative z-10 flex flex-col items-center text-center transition-all duration-700',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Icon circle */}
                <div className={cn(
                  'w-20 h-20 rounded-3xl bg-gradient-to-br flex items-center justify-center mb-6 shadow-lg relative',
                  step.color
                )}>
                  <Icon className="w-9 h-9 text-white" />
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 flex items-center justify-center">
                    <span className="text-xs font-black text-gray-700 dark:text-gray-200">{step.step}</span>
                  </div>
                </div>

                {/* Emoji */}
                <div className="text-4xl mb-4">{step.emoji}</div>

                {/* Card */}
                <div className={cn(
                  'w-full rounded-3xl p-8 border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1',
                  step.bgLight, step.border
                )}>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">{step.body}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    {step.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={cn(
            'text-center mt-16 transition-all duration-700 delay-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <a
            href="#download"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-bold shadow-glow-blue hover:scale-105 hover:shadow-xl transition-all duration-200"
          >
            <span className="text-xl">🙌</span>
            Start Your Worship Journey — Free
          </a>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">No subscription required for core features</p>
        </div>

      </div>
    </section>
  );
}
