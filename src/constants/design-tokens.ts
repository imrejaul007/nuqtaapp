/**
 * Design System Tokens for Nuqta Pitch Deck
 * Provides consistent typography, colors, and spacing across all slides
 */

export const typography = {
  // Slide titles (main headers)
  h1: 'text-3xl sm:text-4xl md:text-5xl font-black',

  // Section headers
  h2: 'text-2xl sm:text-3xl md:text-4xl font-bold',

  // Sub-headers
  h3: 'text-lg sm:text-xl md:text-2xl font-bold',

  // Body text
  body: 'text-base sm:text-lg font-normal',

  // Small body text
  bodySmall: 'text-sm sm:text-base font-normal',

  // Labels and captions
  label: 'text-xs sm:text-sm uppercase tracking-wider font-semibold',

  // Large metrics/numbers
  metric: 'text-4xl sm:text-5xl md:text-6xl font-black',

  // Medium metrics
  metricMedium: 'text-2xl sm:text-3xl md:text-4xl font-black',

  // Small metrics
  metricSmall: 'text-xl sm:text-2xl md:text-3xl font-bold',
} as const;

export const colors = {
  // Primary brand colors
  primary: {
    background: '#0a1628', // Dark blue background
    gold: '#c9a227', // Brand gold/yellow
  },

  // Semantic colors for data visualization
  semantic: {
    blue: '#3b82f6',
    green: '#22c55e',
    emerald: '#10b981',
    purple: '#a855f7',
    red: '#ef4444',
    orange: '#f97316',
    pink: '#ec4899',
    cyan: '#06b6d4',
    amber: '#f59e0b',
  },

  // Gradient backgrounds for cards
  gradients: {
    blue: 'bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-400/40',
    green: 'bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-400/40',
    emerald: 'bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-400/40',
    purple: 'bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-400/40',
    red: 'bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-400/40',
    orange: 'bg-gradient-to-br from-orange-500/20 to-orange-500/5 border-2 border-orange-400/40',
    pink: 'bg-gradient-to-br from-pink-500/20 to-pink-500/5 border-2 border-pink-400/40',
    gold: 'bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border-2 border-[#c9a227]/40',
  },

  // Text colors
  text: {
    primary: 'text-white',
    secondary: 'text-slate-300',
    muted: 'text-slate-400',
    accent: 'text-[#c9a227]',
  },
} as const;

export const spacing = {
  card: {
    padding: {
      small: 'p-3 sm:p-4 md:p-5',
      medium: 'p-4 sm:p-5 md:p-6',
      large: 'p-6 sm:p-8 md:p-10',
    },
    gap: {
      small: 'gap-3 md:gap-4',
      normal: 'gap-4 md:gap-6',
      large: 'gap-6 md:gap-8',
    },
  },

  section: {
    gap: {
      small: 'space-y-4',
      normal: 'space-y-6',
      large: 'space-y-8',
    },
  },

  container: {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
  },
} as const;

export const decorative = {
  card: {
    rounded: {
      small: 'rounded-lg sm:rounded-xl',
      medium: 'rounded-xl sm:rounded-2xl',
      large: 'rounded-2xl sm:rounded-3xl',
    },
    shadow: {
      normal: 'shadow-lg',
      hover: 'hover:shadow-xl transition-shadow duration-300',
      glow: 'hover:shadow-2xl transition-shadow duration-300',
    },
  },
} as const;

export const layout = {
  // Standard slide container
  slideContainer: 'w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8',

  // Card styling
  card: 'rounded-xl sm:rounded-2xl',
  cardShadow: 'shadow-lg hover:shadow-xl transition-shadow duration-300',

  // Grid layouts
  grid2Col: 'grid grid-cols-1 md:grid-cols-2',
  grid3Col: 'grid grid-cols-1 md:grid-cols-3',
  grid4Col: 'grid grid-cols-2 md:grid-cols-4',

  // Flex utilities
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
} as const;

export const animations = {
  fadeIn: 'animate-fadeIn',
  counter: 'animate-counter',
  slideUp: 'animate-slideUp',

  // Hover effects
  hoverScale: 'hover:scale-105 transition-transform duration-300',
  hoverGlow: 'hover:shadow-2xl transition-shadow duration-300',
} as const;

// Helper function to combine class names
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};
