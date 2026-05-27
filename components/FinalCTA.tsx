'use client';

import { useRef } from 'react';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';
import { Apple, Play, Sparkles, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FinalCTA() {
  const ref   = useRef<HTMLDivElement>(null);
  const isVis = useIntersectionObserver(ref, { threshold: 0.2 });

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div
        ref={ref}
        className={cn(
          'relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 transition-all duration-700',
          isVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-glow-blue animate-float">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight">
          Your next scroll could be{' '}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            a moment with God
          </span>
        </h2>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          50,000 believers have already started redeeming their screen time. Your worship journey begins the moment you download. Free. Today. Always.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <Apple className="w-7 h-7" />
            <div className="text-left">
              <p className="text-[11px] opacity-70 leading-none">Download on the</p>
              <p className="text-lg font-bold leading-tight">App Store</p>
            </div>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <Play className="w-6 h-6 fill-current" />
            <div className="text-left">
              <p className="text-[11px] opacity-70 leading-none">Get it on</p>
              <p className="text-lg font-bold leading-tight">Google Play</p>
            </div>
          </a>
        </div>

        {/* Micro-trust */}
        <div className="flex flex-wrap justify-center gap-6 pt-2">
          {[
            { icon: Shield, text: 'Free Forever Core' },
            { icon: Sparkles, text: 'No Credit Card' },
            { emoji: '🔒', text: 'Privacy First' },
            { emoji: '✝️', text: 'Faith Centered' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              {item.icon ? <item.icon className="w-4 h-4 text-green-500" /> : <span>{item.emoji}</span>}
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
