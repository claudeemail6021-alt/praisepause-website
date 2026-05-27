'use client';

import { useState, useEffect } from 'react';
import { Apple, Play, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StickyBar() {
  const [visible,   setVisible]   = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show bar after user scrolls past hero (~80vh)
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-300',
        visible && !dismissed
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0'
      )}
    >
      <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center gap-3 shadow-2xl">
        {/* App icon */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
          <span className="text-xl">✝️</span>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-gray-900 dark:text-white truncate">PraisePause</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Free forever · 4.9★ · 50K worshippers</p>
        </div>

        {/* CTA buttons */}
        <div className="flex gap-2 flex-shrink-0">
          <a
            href="#"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-black text-white text-xs font-bold"
          >
            <Apple className="w-3.5 h-3.5" /> iOS
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-black text-white text-xs font-bold"
          >
            <Play className="w-3 h-3 fill-current" /> Android
          </a>
        </div>

        {/* Dismiss */}
        <button
          onClick={() => setDismissed(true)}
          className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 flex-shrink-0"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
