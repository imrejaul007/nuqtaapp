import React from 'react';
import { typography, decorative, spacing } from '@/constants/design-tokens';

interface FlowStepProps {
  stepNumber: number;
  title: string;
  description: string;
  color?: 'blue' | 'green' | 'purple' | 'gold' | 'red' | 'orange' | 'pink';
  icon?: string;
  showConnector?: boolean;
  connectorDirection?: 'down' | 'right';
  className?: string;
}

const colorClasses = {
  blue: {
    gradient: 'from-blue-500/20 to-blue-500/5',
    border: 'border-blue-500/40',
    title: 'text-blue-400',
    circle: 'bg-blue-500',
  },
  green: {
    gradient: 'from-green-500/20 to-green-500/5',
    border: 'border-green-500/40',
    title: 'text-green-400',
    circle: 'bg-green-500',
  },
  purple: {
    gradient: 'from-purple-500/20 to-purple-500/5',
    border: 'border-purple-500/40',
    title: 'text-purple-400',
    circle: 'bg-purple-500',
  },
  gold: {
    gradient: 'from-[#c9a227]/20 to-[#c9a227]/5',
    border: 'border-[#c9a227]/40',
    title: 'text-[#c9a227]',
    circle: 'bg-[#c9a227]',
  },
  red: {
    gradient: 'from-red-500/20 to-red-500/5',
    border: 'border-red-500/40',
    title: 'text-red-400',
    circle: 'bg-red-500',
  },
  orange: {
    gradient: 'from-orange-500/20 to-orange-500/5',
    border: 'border-orange-500/40',
    title: 'text-orange-400',
    circle: 'bg-orange-500',
  },
  pink: {
    gradient: 'from-pink-500/20 to-pink-500/5',
    border: 'border-pink-500/40',
    title: 'text-pink-400',
    circle: 'bg-pink-500',
  },
};

export function FlowStep({
  stepNumber,
  title,
  description,
  color = 'gold',
  icon,
  showConnector = true,
  connectorDirection = 'down',
  className = '',
}: FlowStepProps) {
  const colorClass = colorClasses[color];

  return (
    <div className={`relative ${className}`}>
      <div
        className={`
          bg-gradient-to-r ${colorClass.gradient}
          ${decorative.card.rounded.medium}
          border-2 ${colorClass.border}
          p-4
          transition-all duration-300 hover:scale-102
        `}
      >
        <div className="flex items-center gap-4">
          {/* Step number circle */}
          <div className={`flex-shrink-0 w-12 h-12 ${colorClass.circle} rounded-full flex items-center justify-center text-2xl font-black ${color === 'gold' ? 'text-black' : 'text-white'}`}>
            {stepNumber}
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className={`text-lg font-bold ${colorClass.title} mb-1`}>
              {icon && `${icon} `}
              {title}
            </h3>
            <p className="text-sm text-gray-300">{description}</p>
          </div>

          {/* Connector arrow (desktop only) */}
          {showConnector && (
            <span className={`hidden ${connectorDirection === 'right' ? 'md:block' : 'md:block'} text-3xl text-[#c9a227]`}>
              {connectorDirection === 'down' ? '↓' : '→'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
