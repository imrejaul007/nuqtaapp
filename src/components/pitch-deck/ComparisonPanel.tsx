import React from 'react';
import { typography, decorative, spacing } from '@/constants/design-tokens';

interface ComparisonPanelProps {
  leftTitle: string;
  leftContent: React.ReactNode;
  leftColor?: 'red' | 'orange';
  rightTitle: string;
  rightContent: React.ReactNode;
  rightColor?: 'green' | 'gold';
  className?: string;
}

const colorClasses = {
  red: {
    gradient: 'from-red-500/20 to-red-500/5',
    border: 'border-red-500/40',
    title: 'text-red-400',
    marker: 'text-red-400',
  },
  orange: {
    gradient: 'from-orange-500/20 to-orange-500/5',
    border: 'border-orange-500/40',
    title: 'text-orange-400',
    marker: 'text-orange-400',
  },
  green: {
    gradient: 'from-green-500/20 to-green-500/5',
    border: 'border-green-500/40',
    title: 'text-green-400',
    marker: 'text-green-400',
  },
  gold: {
    gradient: 'from-[#c9a227]/20 to-[#c9a227]/5',
    border: 'border-[#c9a227]/40',
    title: 'text-[#c9a227]',
    marker: 'text-[#c9a227]',
  },
};

export function ComparisonPanel({
  leftTitle,
  leftContent,
  leftColor = 'red',
  rightTitle,
  rightContent,
  rightColor = 'gold',
  className = '',
}: ComparisonPanelProps) {
  const leftColorClass = colorClasses[leftColor];
  const rightColorClass = colorClasses[rightColor];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${spacing.card.gap.normal} ${className}`}>
      {/* Left Panel */}
      <div
        className={`
          bg-gradient-to-br ${leftColorClass.gradient}
          ${decorative.card.rounded.large}
          border-2 ${leftColorClass.border}
          ${spacing.card.padding.medium}
        `}
      >
        <h3 className={`text-xl font-bold ${leftColorClass.title} mb-4 text-center`}>
          ❌ {leftTitle}
        </h3>
        <div className="space-y-3 text-sm text-gray-300">
          {leftContent}
        </div>
      </div>

      {/* Right Panel */}
      <div
        className={`
          bg-gradient-to-br ${rightColorClass.gradient}
          ${decorative.card.rounded.large}
          border-2 ${rightColorClass.border}
          ${spacing.card.padding.medium}
        `}
      >
        <h3 className={`text-xl font-bold ${rightColorClass.title} mb-4 text-center`}>
          ✓ {rightTitle}
        </h3>
        <div className="space-y-3 text-sm text-gray-300">
          {rightContent}
        </div>
      </div>
    </div>
  );
}

// Helper component for comparison items
export function ComparisonItem({
  children,
  marker = '•',
}: {
  children: React.ReactNode;
  marker?: string;
}) {
  return (
    <p className="flex items-start gap-2">
      <span className="mt-1">{marker}</span>
      <span>{children}</span>
    </p>
  );
}
