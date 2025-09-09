import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-animate-id');
            if (id) {
              setVisibleElements(prev => new Set([...prev, id]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const registerElement = (element: HTMLElement | null, id: string) => {
    if (element && observerRef.current) {
      element.setAttribute('data-animate-id', id);
      observerRef.current.observe(element);
    }
  };

  const isVisible = (id: string) => visibleElements.has(id);

  return { registerElement, isVisible };
};

export const useStaggeredAnimation = (itemsCount: number, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const triggerStagger = () => {
    // Clear existing timeouts
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];

    // Reset visible items
    setVisibleItems(new Set());

    // Stagger the animations
    for (let i = 0; i < itemsCount; i++) {
      const timeout = setTimeout(() => {
        setVisibleItems(prev => new Set([...prev, i]));
      }, i * delay);
      timeoutsRef.current.push(timeout);
    }
  };

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return { visibleItems, triggerStagger };
};

export const useParallaxEffect = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getParallaxStyle = (speed = 0.5) => ({
    transform: `translateY(${scrollY * speed}px)`,
  });

  return { scrollY, getParallaxStyle };
};