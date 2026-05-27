'use client';

import { useState, useRef } from 'react';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    q: 'Is PraisePause really free forever?',
    a: "Yes — genuinely. Core worship pauses, daily Scripture, streaks, and shareable cards will always be free. No trial that expires. No bait-and-switch. We offer an optional Premium tier ($2.99/month) with Daily Themes and extended packs, but the heart of the app is and will remain free. We believe spiritual tools shouldn't have a paywall.",
  },
  {
    q: 'Does PraisePause work inside social media apps, or do I have to switch apps?',
    a: "On iOS, PraisePause uses Screen Time APIs to detect usage and trigger a gentle system notification that opens your pause. On Android, it uses Accessibility Services to surface the pause. It works alongside apps like TikTok, Instagram, YouTube Shorts, and Facebook — you don't have to be on a specific app. After your pause, you return right where you left off.",
  },
  {
    q: 'I've tried screen time apps before and always ended up ignoring them. Why is this different?',
    a: "Most screen time apps use friction — hard locks, timers, shame-inducing warnings. PraisePause uses invitation, not restriction. It doesn't block anything. It simply offers a 30-second moment of grace. The emotional reward of a worship pause is far stronger than a cold hard-stop. Our users report they actually look forward to the interruption after the first week.",
  },
  {
    q: 'What types of worship pauses are included?',
    a: "The free core includes four pause types: Prayer prompts (guided or spontaneous), Scripture pauses (a verse matched to your current emotional season), Gratitude moments (3 quick thanksgiving prompts), and Praise check-ins (a lyric or doxology to anchor your heart). Premium adds Daily Theme packs, worship music snippets, and curated pastor devotionals.",
  },
  {
    q: 'Can I set my own scroll interval? What if 5 minutes feels too short?',
    a: "Absolutely. You choose your interval: 5, 10, 15, 20, or 30 minutes. You can also set different intervals for different apps — maybe every 5 minutes on TikTok but every 20 on LinkedIn. The goal is a rhythm that feels like grace, not pressure. You can change your settings anytime from the home screen.",
  },
  {
    q: 'Is my data private? What do you collect?',
    a: "We take privacy seriously. We collect only your email (if you sign up for community updates), your chosen pause settings, and your streak count. We never access the content of your social media feeds, sell data to advertisers, or share your usage with third parties. Full privacy policy is at the bottom of this page.",
  },
  {
    q: 'What if I miss a day? Do I lose my streak?',
    a: "Grace, not guilt — always. Miss a day and you receive a gentle 'restoration prompt' the next morning. Your community is notified to pray for you. Streaks reset, but your history never disappears. Some of our most meaningful testimonials come from people who 'broke' their streak and experienced God's grace in a fresh way.",
  },
  {
    q: 'Can I use PraisePause for my small group or church?',
    a: "Yes! We have a Community Plan in the works for churches and small groups — shared pause schedules, group streaks, and pastor-curated content packages. Join the waitlist via the email form on this page and we'll notify you when it launches.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }: {
  q: string; a: string; isOpen: boolean; onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-200 hover:border-blue-200 dark:hover:border-blue-800">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white dark:bg-gray-900 hover:bg-blue-50/50 dark:hover:bg-gray-800 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-gray-900 dark:text-white text-[15px] leading-snug">{q}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-blue-500 flex-shrink-0 transition-transform duration-300',
            isOpen ? 'rotate-180' : 'rotate-0'
          )}
        />
      </button>

      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 pb-5 pt-1 bg-blue-50/40 dark:bg-gray-800/40">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref     = useRef<HTMLDivElement>(null);
  const isVis   = useIntersectionObserver(ref, { threshold: 0.05 });

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white dark:bg-gray-950" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className={cn(
            'text-center mb-14 transition-all duration-700',
            isVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4">
            Got Questions? 🙋
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-5">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you want to know before you download.
          </p>
        </div>

        {/* FAQ list */}
        <div
          className={cn(
            'space-y-3 transition-all duration-700 delay-100',
            isVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <div
          className={cn(
            'mt-12 text-center p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 transition-all duration-700 delay-300',
            isVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">
            Still have a question? We'd love to hear from you.
          </p>
          <a
            href="mailto:hello@praisepause.app"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors duration-200"
          >
            ✉️ Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}
