'use client';

import { useRef, useActionState } from 'react';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';
import { subscribeEmail, type SubscribeResult } from '@/app/actions/subscribe';
import { Mail, Download, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const pdfHighlights = [
  { emoji: '🕊️', text: 'A 30-second pause for when you\'re overwhelmed by the news feed' },
  { emoji: '🙏', text: 'A gratitude prayer for your morning scroll' },
  { emoji: '✨', text: 'A Scripture-based pause for when comparison creeps in' },
  { emoji: '💪', text: 'A worship prompt for midday energy slumps' },
  { emoji: '🌙', text: 'A calming night-time reflection after evening scrolling' },
];

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        'w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-200',
        pending
          ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
          : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-glow-gold hover:scale-[1.02] hover:shadow-xl'
      )}
    >
      {pending ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Sending your PDF…
        </>
      ) : (
        <>
          <Download className="w-5 h-5" />
          Send Me the Free PDF →
        </>
      )}
    </button>
  );
}

export default function LeadMagnet() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const [state, formAction, isPending] = useActionState<SubscribeResult | null, FormData>(
    subscribeEmail,
    null
  );

  return (
    <section id="lead-magnet" className="py-24 lg:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div
          className={cn(
            'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Left: what they get */}
          <div className="space-y-7">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-200 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-sm font-bold mb-4">
                🎁 Free Gift — Instant Download
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-4">
                Get Your{' '}
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  5 Worship Pauses
                </span>{' '}
                PDF — Free
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                These are the exact 5 pause scripts that PraisePause users say changed how they spend their screen time. Beautifully designed, printable, and shareable — yours free when you join our community.
              </p>
            </div>

            {/* PDF preview card */}
            <div className="rounded-3xl bg-white dark:bg-gray-800 border border-amber-200 dark:border-amber-800 p-6 shadow-card">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-16 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md">
                  <span className="text-white text-xl">📄</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">5 Worship Pauses PDF</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Instant email delivery · Free forever</p>
                </div>
              </div>

              <ul className="space-y-3">
                {pdfHighlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">{item.emoji}</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: signup form */}
          <div className="rounded-3xl bg-white dark:bg-gray-900 border border-amber-200 dark:border-amber-800 p-8 shadow-xl">

            {state?.success ? (
              /* Success state */
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-9 h-9 text-green-500" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">You're in! 🙌</h3>
                <p className="text-gray-600 dark:text-gray-300">{state.message}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  While you wait — download PraisePause free:
                </p>
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors duration-200"
                >
                  Download the App Free
                </a>
              </div>
            ) : (
              /* Form */
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                    Yes, send my free PDF! 🎉
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Join 50,000+ believers. Unsubscribe anytime. We never spam.
                  </p>
                </div>

                <form action={formAction} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">
                      First Name <span className="font-normal text-gray-400">(optional)</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your first name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Error message */}
                  {state && !state.success && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {state.error}
                    </div>
                  )}

                  <SubmitButton pending={isPending} />
                </form>

                <p className="text-xs text-center text-gray-400 dark:text-gray-500">
                  🔒 Your email is safe with us. No spam, ever. Powered by Supabase.
                </p>

                {/* Social proof micro-nudge */}
                <div className="flex items-center gap-2 justify-center pt-1">
                  <div className="flex -space-x-2">
                    {['🧑🏾','👩🏽','👨🏻','👩🏼'].map((emoji, i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-white dark:border-gray-900 flex items-center justify-center text-sm">
                        {emoji}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    <strong className="text-gray-700 dark:text-gray-300">1,240 people</strong> signed up this week
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
