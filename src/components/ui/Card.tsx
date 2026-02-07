'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'gradient' | 'glass' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const variantClasses = {
  default: 'bg-white border border-slate-200 shadow-sm',
  dark: 'bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm',
  gradient: 'bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50',
  glass: 'bg-white/10 backdrop-blur-md border border-white/20',
  bordered: 'bg-transparent border-2 border-[#c9a227]/30',
};

const paddingClasses = {
  none: '',
  sm: 'p-3 sm:p-4',
  md: 'p-4 sm:p-5 md:p-6',
  lg: 'p-5 sm:p-6 md:p-8',
};

export function Card({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  hover = true,
}: CardProps) {
  return (
    <div
      className={`
        rounded-xl sm:rounded-2xl
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// KPI Card - for metrics and statistics
interface KPICardProps {
  label: string;
  value: string | number;
  subtext?: string;
  icon?: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  color?: 'gold' | 'blue' | 'green' | 'purple' | 'red' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
  className?: string;
}

const kpiColorClasses = {
  gold: {
    icon: 'text-[#c9a227]',
    iconBg: 'bg-[#c9a227]/10',
    accent: 'border-l-[#c9a227]',
  },
  blue: {
    icon: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    accent: 'border-l-blue-400',
  },
  green: {
    icon: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    accent: 'border-l-emerald-400',
  },
  purple: {
    icon: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    accent: 'border-l-purple-400',
  },
  red: {
    icon: 'text-red-400',
    iconBg: 'bg-red-500/10',
    accent: 'border-l-red-400',
  },
  orange: {
    icon: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    accent: 'border-l-orange-400',
  },
};

const trendColors = {
  up: 'text-emerald-400',
  down: 'text-red-400',
  neutral: 'text-slate-400',
};

const trendIcons = {
  up: '↑',
  down: '↓',
  neutral: '→',
};

export function KPICard({
  label,
  value,
  subtext,
  icon: Icon,
  trend,
  trendValue,
  color = 'gold',
  size = 'md',
  variant = 'dark',
  className = '',
}: KPICardProps) {
  const colorClass = kpiColorClasses[color];

  const sizeClasses = {
    sm: {
      value: 'text-xl sm:text-2xl',
      label: 'text-xs',
      padding: 'p-3 sm:p-4',
      icon: 16,
    },
    md: {
      value: 'text-2xl sm:text-3xl md:text-4xl',
      label: 'text-xs sm:text-sm',
      padding: 'p-4 sm:p-5 md:p-6',
      icon: 20,
    },
    lg: {
      value: 'text-3xl sm:text-4xl md:text-5xl',
      label: 'text-sm',
      padding: 'p-5 sm:p-6 md:p-8',
      icon: 24,
    },
  };

  const sizeClass = sizeClasses[size];
  const bgClass = variant === 'dark'
    ? 'bg-slate-800/50 border-slate-700/50'
    : 'bg-white border-slate-200';
  const textClass = variant === 'dark' ? 'text-white' : 'text-slate-900';
  const labelClass = variant === 'dark' ? 'text-slate-400' : 'text-slate-600';

  return (
    <div
      className={`
        rounded-xl sm:rounded-2xl border backdrop-blur-sm
        ${bgClass}
        ${sizeClass.padding}
        ${colorClass.accent} border-l-4
        transition-all duration-300 hover:shadow-lg hover:-translate-y-1
        ${className}
      `}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <div className="flex items-center gap-2 sm:gap-3">
          {Icon && (
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${colorClass.iconBg} flex items-center justify-center`}>
              <Icon size={sizeClass.icon} className={colorClass.icon} />
            </div>
          )}
          <span className={`${sizeClass.label} font-medium uppercase tracking-wider ${labelClass}`}>
            {label}
          </span>
        </div>
        {trend && trendValue && (
          <span className={`text-xs sm:text-sm font-semibold ${trendColors[trend]}`}>
            {trendIcons[trend]} {trendValue}
          </span>
        )}
      </div>

      {/* Value */}
      <p className={`${sizeClass.value} font-bold ${textClass} tabular-nums tracking-tight`}>
        {value}
      </p>

      {/* Subtext */}
      {subtext && (
        <p className={`text-xs sm:text-sm ${labelClass} mt-1 sm:mt-2`}>
          {subtext}
        </p>
      )}
    </div>
  );
}

// Feature Card - for features, benefits, etc.
interface FeatureCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  iconColor?: string;
  variant?: 'dark' | 'light';
  className?: string;
  children?: React.ReactNode;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  iconColor = 'text-[#c9a227]',
  variant = 'dark',
  className = '',
  children,
}: FeatureCardProps) {
  const bgClass = variant === 'dark'
    ? 'bg-slate-800/50 border-slate-700/50'
    : 'bg-white border-slate-200';
  const titleClass = variant === 'dark' ? 'text-white' : 'text-slate-900';
  const descClass = variant === 'dark' ? 'text-slate-400' : 'text-slate-600';

  return (
    <div
      className={`
        rounded-xl sm:rounded-2xl border backdrop-blur-sm
        p-4 sm:p-5 md:p-6
        ${bgClass}
        transition-all duration-300 hover:shadow-lg hover:-translate-y-1
        ${className}
      `}
    >
      {Icon && (
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-700/50 flex items-center justify-center mb-3 sm:mb-4`}>
          <Icon size={20} className={`sm:w-6 sm:h-6 ${iconColor}`} />
        </div>
      )}
      <h3 className={`text-base sm:text-lg font-semibold ${titleClass} mb-1 sm:mb-2`}>
        {title}
      </h3>
      {description && (
        <p className={`text-sm ${descClass}`}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
