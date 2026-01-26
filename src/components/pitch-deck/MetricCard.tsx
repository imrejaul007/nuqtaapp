'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

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
  className?: string;
  variant?: 'default' | 'minimal' | 'featured';
}

// Minimalist color system with subtle accents
const colorClasses = {
  blue: {
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    value: 'text-slate-900',
    accent: 'border-blue-100',
  },
  green: {
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    value: 'text-slate-900',
    accent: 'border-emerald-100',
  },
  purple: {
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    value: 'text-slate-900',
    accent: 'border-purple-100',
  },
  gold: {
    iconBg: 'bg-[#c9a227]/10',
    iconColor: 'text-[#c9a227]',
    value: 'text-slate-900',
    accent: 'border-[#c9a227]/20',
  },
  red: {
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    value: 'text-slate-900',
    accent: 'border-red-100',
  },
  orange: {
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    value: 'text-slate-900',
    accent: 'border-orange-100',
  },
  pink: {
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-600',
    value: 'text-slate-900',
    accent: 'border-pink-100',
  },
};

const sizeClasses = {
  small: {
    value: 'text-2xl sm:text-3xl',
    label: 'text-xs',
    padding: 'p-5',
  },
  medium: {
    value: 'text-3xl sm:text-4xl',
    label: 'text-xs',
    padding: 'p-6',
  },
  large: {
    value: 'text-4xl sm:text-5xl md:text-6xl',
    label: 'text-sm',
    padding: 'p-8',
  },
};

const trendIcons = {
  up: '↑',
  down: '↓',
  neutral: '→',
};

const trendColors = {
  up: 'text-emerald-600',
  down: 'text-red-600',
  neutral: 'text-slate-500',
};

export function MetricCard({
  label,
  value,
  subtext,
  color = 'gold',
  size = 'medium',
  icon: Icon,
  dataSource,
  trend,
  trendValue,
  sparkline,
  className = '',
  variant = 'default',
}: MetricCardProps) {
  const colorClass = colorClasses[color];
  const sizeClass = sizeClasses[size];

  const variantClasses = {
    default: 'card-clean hover-lift',
    minimal: 'card-minimal hover-lift',
    featured: 'card-featured hover-lift-strong',
  };

  return (
    <div
      className={`
        ${variantClasses[variant]}
        ${sizeClass.padding}
        ${className}
      `}
    >
      {/* Icon & Label Row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className={`w-10 h-10 rounded-lg ${colorClass.iconBg} flex items-center justify-center`}>
              <Icon size={20} className={colorClass.iconColor} strokeWidth={2.5} />
            </div>
          )}
          <span className={`${sizeClass.label} font-semibold uppercase tracking-wider text-slate-600`}>
            {label}
            {dataSource && (
              <span className="ml-2 inline-flex items-center">
                <span className="text-[#c9a227]/70 text-xs cursor-help relative group">
                  ⓘ
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-white border border-slate-200 shadow-lg rounded-lg text-xs text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    Source: {dataSource}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-200"></span>
                  </span>
                </span>
              </span>
            )}
          </span>
        </div>

        {/* Trend indicator */}
        {trend && trendValue && (
          <div className={`flex items-center gap-1 text-sm font-semibold ${trendColors[trend]}`}>
            <span>{trendIcons[trend]}</span>
            <span>{trendValue}</span>
          </div>
        )}
      </div>

      {/* Metric Value */}
      <div className="mb-2">
        <p className={`${sizeClass.value} font-black ${colorClass.value} tabular-nums tracking-tight`}>
          {value}
        </p>
      </div>

      {/* Subtext */}
      {subtext && (
        <p className="text-sm text-slate-500 leading-relaxed">
          {subtext}
        </p>
      )}

      {/* Sparkline chart */}
      {sparkline && (
        <div className="mt-4 -mb-2 -mx-2">
          {sparkline}
        </div>
      )}
    </div>
  );
}
