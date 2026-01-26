'use client';

import { LucideIcon } from 'lucide-react';

interface IconCardProps {
  icon: LucideIcon;
  color?: 'gold' | 'blue' | 'purple' | 'slate' | 'emerald' | 'red';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function IconCard({
  icon: Icon,
  color = 'gold',
  size = 'lg',
  className = ''
}: IconCardProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
    xl: 'w-16 h-16'
  };

  // Minimalist color scheme with subtle backgrounds
  const colorClasses = {
    gold: 'bg-[#c9a227]/10 text-[#c9a227]',
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-purple-50 text-purple-600',
    slate: 'bg-slate-100 text-slate-700',
    emerald: 'bg-emerald-50 text-emerald-600',
    red: 'bg-red-50 text-red-600',
  };

  const iconSizes = {
    sm: 18,
    md: 22,
    lg: 26,
    xl: 30
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${colorClasses[color]}
        rounded-lg
        flex
        items-center
        justify-center
        transition-all
        duration-200
        hover:scale-105
        ${className}
      `}
    >
      <Icon size={iconSizes[size]} strokeWidth={2.5} />
    </div>
  );
}
