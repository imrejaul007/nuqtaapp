/**
 * Nuqta Pitch Deck Design System
 * Style: Minimalist Modern (Apple-style) + Material Design + Dashboard Focus
 *
 * Principles:
 * - Lots of whitespace
 * - Clean typography hierarchy
 * - Material Design elevation/shadows
 * - Data-focused layouts
 * - Gold brand accent (#c9a227)
 */

// ========== COLOR PALETTE ==========

export const colors = {
  // Brand
  brand: {
    gold: '#c9a227',
    goldLight: '#f4d35e',
    goldDark: '#a68420',
  },

  // Backgrounds (Light theme)
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9',
  },

  // Text (Material Design grays)
  text: {
    primary: '#0f172a',      // slate-900
    secondary: '#475569',    // slate-600
    tertiary: '#94a3b8',     // slate-400
    disabled: '#cbd5e1',     // slate-300
  },

  // Semantic colors (minimal, clean)
  semantic: {
    success: '#10b981',      // emerald-500
    error: '#ef4444',        // red-500
    warning: '#f59e0b',      // amber-500
    info: '#3b82f6',         // blue-500
  },

  // Borders (subtle)
  border: {
    light: '#e2e8f0',        // slate-200
    medium: '#cbd5e1',       // slate-300
    dark: '#94a3b8',         // slate-400
  },

  // Shadows (Material Design inspired)
  shadow: {
    xs: 'rgba(0, 0, 0, 0.05)',
    sm: 'rgba(0, 0, 0, 0.1)',
    md: 'rgba(0, 0, 0, 0.15)',
    lg: 'rgba(0, 0, 0, 0.2)',
    xl: 'rgba(0, 0, 0, 0.25)',
  }
};

// ========== TYPOGRAPHY SCALE ==========

export const typography = {
  // Display (Hero numbers, massive metrics)
  display: {
    xl: 'text-8xl sm:text-9xl font-black tracking-tight',
    lg: 'text-7xl sm:text-8xl font-black tracking-tight',
    md: 'text-6xl sm:text-7xl font-black tracking-tight',
  },

  // Headings (Clean, minimal)
  heading: {
    h1: 'text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight',
    h2: 'text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight',
    h3: 'text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight',
    h4: 'text-xl sm:text-2xl font-semibold tracking-tight',
    h5: 'text-lg sm:text-xl font-semibold',
    h6: 'text-base sm:text-lg font-semibold',
  },

  // Body text
  body: {
    xl: 'text-xl font-normal leading-relaxed',
    lg: 'text-lg font-normal leading-relaxed',
    base: 'text-base font-normal leading-relaxed',
    sm: 'text-sm font-normal leading-relaxed',
    xs: 'text-xs font-normal leading-relaxed',
  },

  // Labels & Captions (uppercase, tracking)
  label: {
    lg: 'text-sm font-semibold uppercase tracking-wider',
    base: 'text-xs font-semibold uppercase tracking-wider',
    sm: 'text-xs font-medium uppercase tracking-wide',
  },

  // Metrics (Dashboard-style numbers)
  metric: {
    hero: 'text-6xl sm:text-7xl md:text-8xl font-black tabular-nums',
    large: 'text-4xl sm:text-5xl md:text-6xl font-bold tabular-nums',
    medium: 'text-3xl sm:text-4xl font-bold tabular-nums',
    small: 'text-2xl sm:text-3xl font-semibold tabular-nums',
  }
};

// ========== SPACING SYSTEM (8px base) ==========

export const spacing = {
  // Component padding
  padding: {
    xs: 'p-3',           // 12px
    sm: 'p-4',           // 16px
    base: 'p-6',         // 24px
    lg: 'p-8',           // 32px
    xl: 'p-10',          // 40px
    '2xl': 'p-12',       // 48px
  },

  // Gaps (grids, flexbox)
  gap: {
    xs: 'gap-2',         // 8px
    sm: 'gap-3',         // 12px
    base: 'gap-4',       // 16px
    lg: 'gap-6',         // 24px
    xl: 'gap-8',         // 32px
    '2xl': 'gap-12',     // 48px
  },

  // Margins
  margin: {
    xs: 'mb-2',          // 8px
    sm: 'mb-4',          // 16px
    base: 'mb-6',        // 24px
    lg: 'mb-8',          // 32px
    xl: 'mb-12',         // 48px
    '2xl': 'mb-16',      // 64px
  }
};

// ========== MATERIAL DESIGN SHADOWS ==========

export const shadows = {
  // Material Design elevation levels
  none: 'shadow-none',
  xs: 'shadow-sm',                                    // Elevation 1
  sm: 'shadow',                                       // Elevation 2
  base: 'shadow-md',                                  // Elevation 4
  md: 'shadow-lg',                                    // Elevation 8
  lg: 'shadow-xl',                                    // Elevation 16
  xl: 'shadow-2xl',                                   // Elevation 24

  // Custom shadows for specific use cases
  card: 'shadow-md hover:shadow-lg transition-shadow duration-300',
  cardHover: 'shadow-lg hover:shadow-xl transition-shadow duration-300',
  float: 'shadow-xl',
};

// ========== BORDER RADIUS (Minimal, clean) ==========

export const borderRadius = {
  none: 'rounded-none',
  sm: 'rounded-md',        // 6px
  base: 'rounded-lg',      // 8px
  md: 'rounded-xl',        // 12px
  lg: 'rounded-2xl',       // 16px
  xl: 'rounded-3xl',       // 24px
  full: 'rounded-full',
};

// ========== COMPONENT STYLES ==========

export const components = {
  // Card (Material Design inspired)
  card: {
    base: `bg-white ${borderRadius.lg} ${shadows.card} border border-slate-200 ${spacing.padding.lg}`,
    minimal: `bg-white ${borderRadius.base} border border-slate-200 ${spacing.padding.base}`,
    elevated: `bg-white ${borderRadius.lg} ${shadows.cardHover} ${spacing.padding.lg}`,
    flat: `bg-slate-50 ${borderRadius.base} border border-slate-100 ${spacing.padding.base}`,
  },

  // Metric Card (Dashboard-style)
  metricCard: {
    base: `bg-white ${borderRadius.lg} ${shadows.base} border border-slate-100 ${spacing.padding.lg}`,
    featured: `bg-gradient-to-br from-white to-slate-50 ${borderRadius.xl} ${shadows.md} border-2 border-[#c9a227]/20 ${spacing.padding.xl}`,
  },

  // Icon Container (Clean, minimal)
  iconContainer: {
    sm: 'w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100',
    base: 'w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100',
    lg: 'w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-100',
    xl: 'w-20 h-20 flex items-center justify-center rounded-2xl bg-slate-50 border-2 border-slate-200',
  },

  // Badge (Subtle, minimal)
  badge: {
    base: 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
    gold: 'bg-[#c9a227]/10 text-[#c9a227] border border-[#c9a227]/20',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    info: 'bg-blue-50 text-blue-700 border border-blue-200',
  },

  // Container (Max width, centered)
  container: {
    sm: 'max-w-4xl mx-auto px-6 py-8',
    base: 'max-w-6xl mx-auto px-8 py-12',
    lg: 'max-w-7xl mx-auto px-10 py-16',
  }
};

// ========== LAYOUT GRIDS ==========

export const grids = {
  // Dashboard-style metric grids
  metrics: {
    twoCol: 'grid grid-cols-1 md:grid-cols-2 gap-6',
    threeCol: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
    fourCol: 'grid grid-cols-2 md:grid-cols-4 gap-4',
  },

  // Content grids
  content: {
    twoCol: 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12',
    threeCol: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8',
  },

  // Feature grids (with more spacing)
  features: {
    twoCol: 'grid grid-cols-1 md:grid-cols-2 gap-8',
    threeCol: 'grid grid-cols-1 md:grid-cols-3 gap-6',
  }
};

// ========== ANIMATIONS (Minimal, purposeful) ==========

export const animations = {
  // Subtle transitions (Apple-style)
  transition: {
    fast: 'transition-all duration-150 ease-out',
    base: 'transition-all duration-300 ease-out',
    slow: 'transition-all duration-500 ease-out',
  },

  // Hover effects (minimal lift)
  hover: {
    lift: 'hover:-translate-y-1 hover:shadow-lg transition-all duration-200',
    scale: 'hover:scale-105 transition-transform duration-200',
    glow: 'hover:shadow-[#c9a227]/20 hover:shadow-xl transition-shadow duration-300',
  },

  // Fade in (subtle entrance)
  fadeIn: 'animate-fadeIn',

  // Number counter (data emphasis)
  counter: 'animate-counter',
};

// ========== RESPONSIVE BREAKPOINTS ==========

export const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
};

// ========== UTILITY FUNCTIONS ==========

export const utils = {
  // Combine class names
  cn: (...classes: string[]) => classes.filter(Boolean).join(' '),

  // Get color with opacity
  withOpacity: (color: string, opacity: number) => `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`,
};

// ========== EXPORT ALL ==========

export const designSystem = {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
  components,
  grids,
  animations,
  breakpoints,
  utils,
};

export default designSystem;
