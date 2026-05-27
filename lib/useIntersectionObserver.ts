'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';

interface Options extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  elementRef: RefObject<Element | null>,
  { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = true }: Options = {}
): boolean {
  const [isVisible, setIsVisible] = useState(false);
  const frozen = useRef(false);

  useEffect(() => {
    const element = elementRef?.current;
    if (!element) return;

    if (frozen.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        if (visible) {
          setIsVisible(true);
          if (freezeOnceVisible) {
            frozen.current = true;
            observer.disconnect();
          }
        } else {
          if (!freezeOnceVisible) setIsVisible(false);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible]);

  return isVisible;
}
