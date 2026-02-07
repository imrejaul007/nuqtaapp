'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'blue' | 'green' | 'red' | 'purple' | 'orange' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  className?: string;
}

const variantClasses = {
  gold: 'bg-[#c9a227]/20 text-[#c9a227] border-[#c9a227]/30',
  blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  green: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  red: 'bg-red-500/20 text-red-400 border-red-500/30',
  purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  gray: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
};

const sizeClasses = {
  sm: 'text-xs px-1.5 py-0.5',
  md: 'text-xs sm:text-sm px-2 sm:px-2.5 py-0.5 sm:py-1',
  lg: 'text-sm px-3 py-1 sm:py-1.5',
};

export function Badge({
  children,
  variant = 'gold',
  size = 'md',
  icon: Icon,
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1 sm:gap-1.5
        rounded-full border
        font-medium
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {Icon && <Icon size={size === 'sm' ? 10 : size === 'md' ? 12 : 14} />}
      {children}
    </span>
  );
}

// Status Badge with dot indicator
interface StatusBadgeProps {
  status: 'success' | 'warning' | 'error' | 'info' | 'pending';
  label?: string;
  size?: 'sm' | 'md';
  className?: string;
}

const statusColors = {
  success: { dot: 'bg-emerald-400', text: 'text-emerald-400' },
  warning: { dot: 'bg-yellow-400', text: 'text-yellow-400' },
  error: { dot: 'bg-red-400', text: 'text-red-400' },
  info: { dot: 'bg-blue-400', text: 'text-blue-400' },
  pending: { dot: 'bg-slate-400', text: 'text-slate-400' },
};

const statusLabels = {
  success: 'Active',
  warning: 'Warning',
  error: 'Error',
  info: 'Info',
  pending: 'Pending',
};

export function StatusBadge({
  status,
  label,
  size = 'md',
  className = '',
}: StatusBadgeProps) {
  const color = statusColors[status];
  const displayLabel = label || statusLabels[status];

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 sm:gap-2
        ${size === 'sm' ? 'text-xs' : 'text-xs sm:text-sm'}
        ${color.text}
        ${className}
      `}
    >
      <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${color.dot} ${status === 'pending' ? 'animate-pulse' : ''}`} />
      {displayLabel}
    </span>
  );
}

// Number Badge (for counts)
interface NumberBadgeProps {
  count: number;
  max?: number;
  variant?: 'gold' | 'blue' | 'green' | 'red' | 'gray';
  size?: 'sm' | 'md';
  className?: string;
}

export function NumberBadge({
  count,
  max = 99,
  variant = 'gold',
  size = 'md',
  className = '',
}: NumberBadgeProps) {
  const displayCount = count > max ? `${max}+` : count.toString();

  const bgClasses = {
    gold: 'bg-[#c9a227]',
    blue: 'bg-blue-500',
    green: 'bg-emerald-500',
    red: 'bg-red-500',
    gray: 'bg-slate-500',
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center
        rounded-full font-semibold
        ${bgClasses[variant]} text-white
        ${size === 'sm' ? 'min-w-[18px] h-[18px] text-[10px] px-1' : 'min-w-[22px] h-[22px] text-xs px-1.5'}
        ${className}
      `}
    >
      {displayCount}
    </span>
  );
}
