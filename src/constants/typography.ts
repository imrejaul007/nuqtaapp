/**
 * Typography Design System for Nuqta Pitch Deck
 *
 * Standardized text sizing hierarchy to ensure consistency across all 30 slides.
 * All classes use responsive Tailwind patterns: mobile → tablet → desktop
 */

export const TYPOGRAPHY = {
  // ==================== SLIDE TITLES (Main Headers) ====================
  // Use for primary slide titles like "Market Opportunity", "Exit Strategy"
  slideTitle: 'text-5xl sm:text-6xl md:text-7xl font-black',

  // ==================== SECTION HEADERS ====================
  // Use for major section headers within slides
  sectionHeader: 'text-3xl sm:text-4xl md:text-5xl font-bold',

  // Use for sub-section headers
  sectionSubheader: 'text-2xl sm:text-3xl md:text-4xl font-bold',

  // ==================== BODY TEXT (4 Levels) ====================
  // Level A: Extra large metrics/numbers (e.g., "$400K", "67-133x")
  metricXLarge: 'text-5xl sm:text-6xl md:text-7xl font-black',

  // Level B: Large metrics/numbers (e.g., "10x LTV:CAC", "$38M")
  metricLarge: 'text-4xl sm:text-5xl md:text-6xl font-black',

  // Level C: Medium metrics (e.g., card numbers, secondary stats)
  metricMedium: 'text-2xl sm:text-3xl md:text-4xl font-bold',

  // Level D: Small metrics (e.g., inline numbers in paragraphs)
  metricSmall: 'text-xl sm:text-2xl md:text-3xl font-bold',

  // Regular body text - large (primary paragraphs, descriptions)
  bodyLarge: 'text-base sm:text-lg md:text-xl',

  // Regular body text - medium (card content, list items)
  bodyRegular: 'text-sm sm:text-base md:text-lg',

  // Regular body text - small (dense content, footnotes)
  bodySmall: 'text-xs sm:text-sm md:text-base',

  // ==================== LABELS/CAPTIONS ====================
  // Eyebrow labels (e.g., "5-YEAR FINANCIAL OUTLOOK", "PATH TO LIQUIDITY")
  labelEyebrow: 'text-xs sm:text-sm font-bold uppercase tracking-wider',

  // Regular labels (chart labels, axis labels, data point labels)
  labelRegular: 'text-xs sm:text-sm',

  // Micro labels (sources, footnotes, disclaimers)
  labelMicro: 'text-xs',

  // ==================== SPECIAL CASES ====================
  // Hero number - for cover slide only (e.g., "Raising $400K")
  heroNumber: 'text-6xl sm:text-7xl md:text-8xl font-black',

  // Card titles within slides
  cardTitle: 'text-lg sm:text-xl md:text-2xl font-bold',

  // Button/CTA text
  buttonText: 'text-sm sm:text-base md:text-lg font-bold',
} as const;

/**
 * Usage Examples:
 *
 * <h2 className={TYPOGRAPHY.slideTitle}>Market Opportunity</h2>
 * <h3 className={TYPOGRAPHY.sectionHeader}>Strategic Acquirers</h3>
 * <p className={TYPOGRAPHY.metricLarge}>67-133x</p>
 * <p className={TYPOGRAPHY.bodyLarge}>This is a paragraph of body text.</p>
 * <p className={TYPOGRAPHY.labelEyebrow}>5-Year Financial Outlook</p>
 */
