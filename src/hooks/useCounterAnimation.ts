import { useEffect, useState } from 'react';

/**
 * Hook to animate a number from 0 to target value
 * @param end - The target number to count to
 * @param duration - Animation duration in milliseconds (default: 2000ms)
 * @param enabled - Whether the animation is enabled (default: true)
 * @returns The current animated value
 */
export function useCounterAnimation(
  end: number,
  duration: number = 2000,
  enabled: boolean = true
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setCount(end);
      return;
    }

    let start = 0;
    const increment = end / (duration / 16); // 60fps = 16ms per frame
    let animationFrame: number;

    const animate = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
      } else {
        setCount(Math.floor(start));
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, enabled]);

  return count;
}

/**
 * Hook to format number with counter animation
 * Useful for displaying formatted currency or large numbers
 */
export function useFormattedCounter(
  end: number,
  formatter: (value: number) => string,
  duration: number = 2000,
  enabled: boolean = true
): string {
  const count = useCounterAnimation(end, duration, enabled);
  return formatter(count);
}
