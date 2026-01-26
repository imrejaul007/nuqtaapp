'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  color?: 'blue' | 'green' | 'purple' | 'gold' | 'red' | 'orange' | 'slate';
  variant?: 'default' | 'minimal' | 'featured';
  className?: string;
  style?: React.CSSProperties;
}

const colorClasses = {
  blue: {
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    title: 'text-slate-900',
    accent: 'border-blue-100',
  },
  green: {
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    title: 'text-slate-900',
    accent: 'border-emerald-100',
  },
  purple: {
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    title: 'text-slate-900',
    accent: 'border-purple-100',
  },
  gold: {
    iconBg: 'bg-[#c9a227]/10',
    iconColor: 'text-[#c9a227]',
    title: 'text-slate-900',
    accent: 'border-[#c9a227]/20',
  },
  red: {
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    title: 'text-slate-900',
    accent: 'border-red-100',
  },
  orange: {
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    title: 'text-slate-900',
    accent: 'border-orange-100',
  },
  slate: {
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-700',
    title: 'text-slate-900',
    accent: 'border-slate-200',
  },
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  color = 'gold',
  variant = 'default',
  className = '',
  style,
}: FeatureCardProps) {
  const colorClass = colorClasses[color];

  const variantClasses = {
    default: 'card-clean p-6 hover-lift',
    minimal: 'card-minimal p-5 hover-lift',
    featured: 'card-featured p-8 hover-lift-strong',
  };

  return (
    <div
      className={`${variantClasses[variant]} ${className}`}
      style={style}
    >
      {/* Icon */}
      {Icon && (
        <div className={`w-12 h-12 rounded-lg ${colorClass.iconBg} flex items-center justify-center mb-4`}>
          <Icon size={24} className={colorClass.iconColor} strokeWidth={2.5} />
        </div>
      )}

      {/* Title */}
      <h3 className={`text-xl font-semibold ${colorClass.title} mb-2 tracking-tight`}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-base text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
