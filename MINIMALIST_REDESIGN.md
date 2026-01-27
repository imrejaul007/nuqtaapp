# Nuqta Pitch Deck - Minimalist Redesign

## Design Philosophy

**Style:** Minimalist Modern (Apple-style) + Material Design + Dashboard Focus
**Branding:** Keep gold color (#c9a227) from logo
**Approach:** Clean, data-focused, lots of whitespace

---

## Color Palette

### Light Theme (Background)
```css
--background: #ffffff           /* Pure white */
--background-secondary: #f8fafc /* Slate-50 */
--background-tertiary: #f1f5f9  /* Slate-100 */
```

### Text (Dark on light)
```css
--foreground: #0f172a           /* Slate-900 - Primary text */
--foreground-secondary: #475569 /* Slate-600 - Secondary text */
--foreground-tertiary: #94a3b8  /* Slate-400 - Tertiary text */
```

### Brand Gold (From logo)
```css
--accent: #c9a227               /* Primary gold */
--accent-light: #f4d35e         /* Light gold */
--accent-dark: #a68420          /* Dark gold */
```

### Borders (Subtle)
```css
--border-light: #e2e8f0         /* Slate-200 */
--border-medium: #cbd5e1        /* Slate-300 */
--border-dark: #94a3b8          /* Slate-400 */
```

### Semantic Colors (Minimal palette)
```css
--success: #10b981              /* Emerald-500 */
--error: #ef4444                /* Red-500 */
--warning: #f59e0b              /* Amber-500 */
--info: #3b82f6                 /* Blue-500 */
```

---

## Typography Scale

### Display (Hero numbers)
- XL: `text-8xl sm:text-9xl font-black tracking-tight`
- LG: `text-7xl sm:text-8xl font-black tracking-tight`
- MD: `text-6xl sm:text-7xl font-black tracking-tight`

### Headings (Clean, minimal)
- H1: `text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight`
- H2: `text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight`
- H3: `text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight`
- H4: `text-xl sm:text-2xl font-semibold tracking-tight`

### Body Text
- XL: `text-xl font-normal leading-relaxed`
- LG: `text-lg font-normal leading-relaxed`
- Base: `text-base font-normal leading-relaxed`
- SM: `text-sm font-normal leading-relaxed`

### Labels (Uppercase, tracking)
- Base: `text-xs font-semibold uppercase tracking-wider`

### Metrics (Dashboard numbers)
- Hero: `text-6xl sm:text-7xl md:text-8xl font-black tabular-nums`
- Large: `text-4xl sm:text-5xl md:text-6xl font-bold tabular-nums`
- Medium: `text-3xl sm:text-4xl font-bold tabular-nums`

---

## Material Design Elevation

### Shadow Levels
```css
.elevation-1  /* Subtle card */
.elevation-2  /* Default card */
.elevation-4  /* Raised card */
.elevation-8  /* Featured card */
.elevation-16 /* Modal/dialog */
.elevation-24 /* Maximum elevation */
```

### Usage
- **Cards:** elevation-2 (default), elevation-4 (hover)
- **Featured cards:** elevation-8
- **Modals:** elevation-16
- **Dropdowns:** elevation-8

---

## Component Styles

### Cards

#### Clean Card (Default)
```css
.card-clean {
  background: white;
  border-radius: 1rem;
  border: 1px solid #e2e8f0;
  box-shadow: elevation-2;
}
.card-clean:hover {
  box-shadow: elevation-4;
  transform: translateY(-2px);
}
```

#### Minimal Card
```css
.card-minimal {
  background: #f8fafc;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}
.card-minimal:hover {
  background: white;
  border-color: #cbd5e1;
}
```

#### Featured Card
```css
.card-featured {
  background: linear-gradient(to bottom right, white, #f8fafc);
  border-radius: 1.5rem;
  border: 2px solid rgba(201, 162, 39, 0.15);
  box-shadow: elevation-8;
}
.card-featured:hover {
  border-color: rgba(201, 162, 39, 0.4);
  box-shadow: elevation-16;
  transform: translateY(-4px);
}
```

### Hover Effects (Apple-style, subtle)

#### Lift
```css
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: elevation-4;
}
```

#### Lift Strong
```css
.hover-lift-strong:hover {
  transform: translateY(-4px);
  box-shadow: elevation-8;
}
```

#### Scale
```css
.hover-scale:hover {
  transform: scale(1.05);
}
```

#### Gold Accent
```css
.hover-gold:hover {
  color: #c9a227;
  border-color: #c9a227;
}
```

---

## Updated Components

### 1. MetricCard

**Purpose:** Dashboard-style metric display
**Style:** Clean white card with subtle icon, large number, trend indicator

**Props:**
```tsx
interface MetricCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  color?: 'blue' | 'green' | 'purple' | 'gold' | 'red' | 'orange' | 'pink';
  size?: 'small' | 'medium' | 'large';
  icon?: LucideIcon;
  dataSource?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  sparkline?: React.ReactNode;
  variant?: 'default' | 'minimal' | 'featured';
}
```

**Usage:**
```tsx
<MetricCard
  icon={TrendingUp}
  label="Revenue Growth"
  value="234%"
  subtext="Year over year"
  color="gold"
  variant="featured"
  trend="up"
  trendValue="+12%"
/>
```

**Design:**
- Icon in 10x10 rounded container with subtle background
- Label in uppercase tracking-wider text
- Large tabular number (slate-900)
- Trend indicator in top-right
- Optional sparkline at bottom

---

### 2. SectionHeader

**Purpose:** Slide titles and section headers
**Style:** Clean, minimal, lots of whitespace

**Props:**
```tsx
interface SectionHeaderProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  alignment?: 'left' | 'center' | 'right';
}
```

**Usage:**
```tsx
<SectionHeader
  eyebrow="Market Opportunity"
  title="$650B Global Market"
  subtitle="Massive untapped potential in UAE and beyond"
  alignment="center"
/>
```

**Design:**
- Eyebrow: Gold, xs, uppercase, tracking-wider
- Title: 3xl-5xl, bold, slate-900, tracking-tight
- Subtitle: lg, slate-600, leading-relaxed
- Bottom margin: mb-12

---

### 3. IconCard

**Purpose:** Minimal icon containers
**Style:** Clean, subtle background, small size

**Props:**
```tsx
interface IconCardProps {
  icon: LucideIcon;
  color?: 'gold' | 'blue' | 'purple' | 'slate' | 'emerald' | 'red';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
```

**Usage:**
```tsx
<IconCard icon={Search} color="gold" size="lg" />
```

**Design:**
- Simple rounded-lg container
- Subtle background color (color/10 or color-50)
- No border, no shadow
- Minimal hover: scale(1.05)
- Sizes: sm (10x10), md (12x12), lg (14x14), xl (16x16)

---

### 4. FeatureCard

**Purpose:** Feature/benefit cards
**Style:** Clean card with icon, title, description

**Props:**
```tsx
interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  color?: 'blue' | 'green' | 'purple' | 'gold' | 'red' | 'orange' | 'slate';
  variant?: 'default' | 'minimal' | 'featured';
}
```

**Usage:**
```tsx
<FeatureCard
  icon={Zap}
  title="Lightning Fast"
  description="Get deals in seconds, not minutes"
  color="gold"
  variant="default"
/>
```

**Design:**
- Icon in 12x12 rounded container with subtle bg
- Title: xl, semibold, slate-900, tracking-tight
- Description: base, slate-600, leading-relaxed
- Uses card-clean/minimal/featured classes
- Hover lift effect

---

### 5. AnimatedNumber

**Purpose:** Number counter animations
**Style:** Same as before (still useful for dashboard feel)

**Props:** (No changes)
```tsx
interface AnimatedNumberProps {
  value: number | string;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}
```

**Usage:**
```tsx
<AnimatedNumber value={684} prefix="AED " duration={2000} />
```

---

## Grid Layouts

### Dashboard Metrics
```tsx
// 2-column
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// 3-column
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

// 4-column
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
```

### Features
```tsx
// 2-column with more spacing
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

// 3-column features
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
```

---

## Spacing System (8px base)

### Padding
- xs: `p-3` (12px)
- sm: `p-4` (16px)
- base: `p-6` (24px)
- lg: `p-8` (32px)
- xl: `p-10` (40px)
- 2xl: `p-12` (48px)

### Gaps
- xs: `gap-2` (8px)
- sm: `gap-3` (12px)
- base: `gap-4` (16px)
- lg: `gap-6` (24px)
- xl: `gap-8` (32px)
- 2xl: `gap-12` (48px)

### Margins
- xs: `mb-2` (8px)
- sm: `mb-4` (16px)
- base: `mb-6` (24px)
- lg: `mb-8` (32px)
- xl: `mb-12` (48px)
- 2xl: `mb-16` (64px)

---

## Border Radius

- sm: `rounded-md` (6px)
- base: `rounded-lg` (8px)
- md: `rounded-xl` (12px)
- lg: `rounded-2xl` (16px)
- xl: `rounded-3xl` (24px)

---

## Container Pattern (All slides)

```tsx
<div className="w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-10 py-12 bg-white">
  {/* Section Header */}
  <SectionHeader
    eyebrow="Section Label"
    title="Main Heading"
    subtitle="Supporting text"
  />

  {/* Main Content */}
  <div className="max-w-6xl w-full space-y-8">
    {/* Cards, grids, content */}
  </div>

  {/* Bottom Callout (Optional) */}
  <div className="mt-12 card-featured p-6 max-w-4xl w-full">
    <p className="text-center text-lg text-slate-700">
      Callout text
    </p>
  </div>
</div>
```

---

## Animations (Minimal, purposeful)

### Keep from previous:
- `animate-fadeIn` - Subtle entrance
- `animate-counter` - Number counting (for metrics)

### Remove:
- All excessive animations (shimmer, glow, pulse, rotate, bounce, etc.)
- Complex hover effects
- Floating particles
- Gradient shifts

### New approach:
- Simple transitions: `transition-all duration-200 ease-out`
- Minimal hover lifts: `translateY(-2px)` or `translateY(-4px)`
- Subtle scale: `scale(1.05)`
- No rotation, no glow, no shimmer

---

## Before & After Comparison

### Before (Dark Theme)
```tsx
<div className="bg-gradient-to-br from-[#c9a227]/30 to-[#c9a227]/10 border-2 border-[#c9a227]/40 rounded-2xl p-6 hover-lift hover-glow animate-scaleIn">
  <IconCard icon={Search} size="xl" color="gold" glow={true} animate={true} />
  <h3 className="text-2xl font-bold text-[#c9a227] mb-3">Title</h3>
  <p className="text-gray-300">Description</p>
</div>
```

### After (Minimalist Light)
```tsx
<FeatureCard
  icon={Search}
  title="Title"
  description="Description"
  color="gold"
  variant="default"
/>
```

**Result:**
- 5 lines → 1 component
- Clean, readable
- Professional, minimalist
- Consistent styling
- Easy to maintain

---

## Implementation Status

### Completed ✅
1. Created design system ([design-system.ts](src/constants/design-system.ts))
2. Updated globals.css with:
   - Light theme CSS variables
   - Material Design elevation system
   - Minimalist card styles
   - Subtle hover effects
3. Redesigned components:
   - MetricCard (dashboard-style)
   - SectionHeader (clean typography)
   - IconCard (minimal containers)
   - FeatureCard (clean feature cards)
   - AnimatedNumber (kept, still useful)

### Next Steps
1. Apply new design to Slide 0 (Cover)
2. Apply new design to Slide 1 (Shopper Problem)
3. Apply new design to all 24 slides
4. Remove old dark theme classes
5. Test responsive behavior
6. Build and verify

---

## Design Principles Summary

### ✅ DO:
- Use lots of whitespace
- Keep backgrounds light (white, slate-50, slate-100)
- Use subtle shadows (Material Design elevation)
- Keep typography clean and readable
- Use gold accent sparingly for emphasis
- Make data/metrics prominent
- Use minimal hover effects (lift, scale)

### ❌ DON'T:
- Use dark backgrounds
- Use excessive gradients
- Add glow/pulse/shimmer effects
- Rotate elements on hover
- Use bright neon colors
- Over-animate
- Clutter the layout

---

## File Structure

```
src/
├── constants/
│   └── design-system.ts          # New design system
├── app/
│   └── globals.css                # Updated with minimalist styles
├── components/
│   └── pitch-deck/
│       ├── MetricCard.tsx         # Redesigned (dashboard-style)
│       ├── SectionHeader.tsx      # Redesigned (clean typography)
│       ├── IconCard.tsx           # Redesigned (minimal)
│       ├── FeatureCard.tsx        # Redesigned (clean cards)
│       ├── AnimatedNumber.tsx     # Kept (still useful)
│       ├── FlowStep.tsx           # TODO: Redesign
│       ├── ComparisonPanel.tsx    # TODO: Redesign
│       └── ChartContainer.tsx     # TODO: Update for light theme
```

---

## Next: Apply to PitchDeckKang.tsx

All components are ready. Next step is to update [PitchDeckKang.tsx](src/components/PitchDeckKang.tsx) with the new minimalist design system, starting with Slide 0.
