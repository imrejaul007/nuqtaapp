'use client';

import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  alignment = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[alignment]} ${className}`}>
      {/* Eyebrow (Gold accent) */}
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wider text-[#c9a227] mb-3">
          {eyebrow}
        </p>
      )}

      {/* Title (Minimalist, clean typography) */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
        {title}
      </h2>

      {/* Subtitle (Light, readable) */}
      {subtitle && (
        <p className={`text-lg text-slate-600 leading-relaxed max-w-3xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
