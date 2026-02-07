'use client';

import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

// Page container with consistent padding
export function PageContainer({ children, className = '' }: SectionProps) {
  return (
    <div className={`min-h-screen bg-[#0a1628] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {children}
      </div>
    </div>
  );
}

// Light page container
export function PageContainerLight({ children, className = '' }: SectionProps) {
  return (
    <div className={`min-h-screen bg-slate-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {children}
      </div>
    </div>
  );
}

// Section with title
interface SectionWithTitleProps extends SectionProps {
  title: string;
  subtitle?: string;
  variant?: 'dark' | 'light';
  titleSize?: 'sm' | 'md' | 'lg';
}

export function Section({
  children,
  title,
  subtitle,
  className = '',
  id,
  variant = 'dark',
  titleSize = 'md',
}: SectionWithTitleProps) {
  const titleClasses = {
    sm: 'text-lg sm:text-xl md:text-2xl',
    md: 'text-xl sm:text-2xl md:text-3xl',
    lg: 'text-2xl sm:text-3xl md:text-4xl',
  };

  const titleColor = variant === 'dark' ? 'text-white' : 'text-slate-900';
  const subtitleColor = variant === 'dark' ? 'text-slate-400' : 'text-slate-600';

  return (
    <section id={id} className={`mb-8 sm:mb-10 lg:mb-12 ${className}`}>
      <div className="mb-4 sm:mb-6">
        <h2 className={`${titleClasses[titleSize]} font-bold ${titleColor} mb-1 sm:mb-2`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-sm sm:text-base ${subtitleColor}`}>
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

// Grid layouts
interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

const gridColsClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
};

const gapClasses = {
  sm: 'gap-3 sm:gap-4',
  md: 'gap-4 sm:gap-5 md:gap-6',
  lg: 'gap-5 sm:gap-6 md:gap-8',
};

export function Grid({ children, cols = 3, gap = 'md', className = '' }: GridProps) {
  return (
    <div className={`grid ${gridColsClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}

// Responsive flex row that wraps on mobile
interface FlexRowProps {
  children: React.ReactNode;
  gap?: 'sm' | 'md' | 'lg';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  align?: 'start' | 'center' | 'end' | 'stretch';
  wrap?: boolean;
  className?: string;
}

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
};

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

export function FlexRow({
  children,
  gap = 'md',
  justify = 'start',
  align = 'center',
  wrap = true,
  className = '',
}: FlexRowProps) {
  return (
    <div
      className={`
        flex
        ${wrap ? 'flex-wrap' : 'flex-nowrap'}
        ${gapClasses[gap]}
        ${justifyClasses[justify]}
        ${alignClasses[align]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// Divider
interface DividerProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function Divider({ variant = 'dark', className = '' }: DividerProps) {
  const colorClass = variant === 'dark' ? 'border-slate-700/50' : 'border-slate-200';
  return <hr className={`border-t ${colorClass} my-6 sm:my-8 ${className}`} />;
}

// Spacer
interface SpacerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const spacerClasses = {
  sm: 'h-4 sm:h-6',
  md: 'h-6 sm:h-8 md:h-10',
  lg: 'h-8 sm:h-10 md:h-12',
  xl: 'h-10 sm:h-12 md:h-16',
};

export function Spacer({ size = 'md' }: SpacerProps) {
  return <div className={spacerClasses[size]} />;
}
