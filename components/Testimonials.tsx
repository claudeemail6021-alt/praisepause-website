'use client';

import { useRef } from 'react';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name:    'Marcus T.',
    role:    'Youth Pastor, Atlanta GA',
    avatar:  '🧑🏾‍💼',
    stars:   5,
    quote:   "I was skeptical — I've tried every digital detox app out there. But PraisePause doesn't fight your phone. It redeems it. I've had more spontaneous prayer moments in the last 30 days than in the previous year. My whole youth group is on it now.",
    highlight: '30 days of breakthrough',
  },
  {
    name:    'Priya M.',
    role:    'College student, Dallas TX',
    avatar:  '👩🏽‍🎓',
    stars:   5,
    quote:   "Between classes, I used to mindlessly scroll for 20 minutes. Now those gaps are actually the most peaceful parts of my day. The pauses feel like a deep breath from God. My anxiety has dropped noticeably since I started using it.",
    highlight: 'Anxiety noticeably reduced',
  },
  {
    name:    'James & Rachel K.',
    role:    'Married couple, Portland OR',
    avatar:  '👫',
    stars:   5,
    quote:   "We started doing our PraisePause moments together — it's become this unexpected little ritual that strengthens our marriage. We'll pause, pray together for 30 seconds, and share the same verse. Small habit, massive impact.",
    highlight: 'Marriage ritual they both love',
  },
  {
    name:    'Donna R.',
    role:    'Retired nurse, Nashville TN',
    avatar:  '👩🏻‍⚕️',
    stars:   5,
    quote:   "At 68, I wasn't sure I needed another app. But my granddaughter showed me PraisePause and I cried the first time I used it. It interrupted a tough news scroll with Psalm 23. I felt like God saw me in that exact moment.",
    highlight: 'God met her in the moment',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.05 });

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Aggregate rating */}
          <div className="flex justify-center items-center gap-2 mb-5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-2xl font-black text-gray-900 dark:text-white">4.9</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">/ 5.0 from 3,200+ reviews</span>
          </div>

          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4">
            Real Stories 💛
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
            Lives being{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              transformed
            </span>
            , one pause at a time
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            From college dorms to retirement homes — PraisePause meets believers exactly where they are.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={cn(
                'group relative rounded-3xl p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800',
                'transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-blue-100 dark:text-blue-900">
                <Quote className="w-10 h-10 fill-current" />
              </div>

              {/* Stars */}
              <StarRating count={t.stars} />

              {/* Quote */}
              <blockquote className="mt-4 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed text-[15px] relative z-10">
                "{t.quote}"
              </blockquote>

              {/* Highlight pill */}
              <div className="mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {t.highlight}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center text-2xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social trust indicators */}
        <div
          className={cn(
            'mt-14 flex flex-wrap justify-center gap-8 transition-all duration-700 delay-400',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          {[
            { num: '50K+',  label: 'Active worshippers' },
            { num: '2.1M',  label: 'Total pauses completed' },
            { num: '94%',   label: 'Say faith has grown' },
            { num: '4.9★',  label: 'Average app store rating' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-gray-900 dark:text-white">{stat.num}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
