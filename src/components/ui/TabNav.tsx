'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon?: LucideIcon;
}

interface TabNavProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function TabNav({
  tabs,
  activeTab,
  onTabChange,
  variant = 'dark',
  size = 'md',
  className = '',
}: TabNavProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 sm:px-3 py-1.5 sm:py-2',
    md: 'text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5',
    lg: 'text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3',
  };

  const bgClass = variant === 'dark'
    ? 'bg-slate-800/50 border-slate-700/50'
    : 'bg-slate-100 border-slate-200';

  const activeClass = variant === 'dark'
    ? 'bg-[#c9a227] text-black'
    : 'bg-[#c9a227] text-black';

  const inactiveClass = variant === 'dark'
    ? 'text-slate-400 hover:text-white hover:bg-slate-700/50'
    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200';

  return (
    <div className={`overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 ${className}`}>
      <div className={`inline-flex rounded-xl p-1 border ${bgClass} min-w-full sm:min-w-0`}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex items-center justify-center gap-1.5 sm:gap-2
                rounded-lg font-medium whitespace-nowrap
                transition-all duration-200
                ${sizeClasses[size]}
                ${isActive ? activeClass : inactiveClass}
                flex-1 sm:flex-initial
              `}
            >
              {Icon && <Icon size={size === 'sm' ? 14 : size === 'md' ? 16 : 18} />}
              <span className={Icon ? 'hidden xs:inline' : ''}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Pill/Badge navigation for filtering
interface PillNavProps {
  items: { id: string; label: string; count?: number }[];
  activeItem: string;
  onItemChange: (itemId: string) => void;
  variant?: 'dark' | 'light';
  className?: string;
}

export function PillNav({
  items,
  activeItem,
  onItemChange,
  variant = 'dark',
  className = '',
}: PillNavProps) {
  const activeClass = 'bg-[#c9a227] text-black';
  const inactiveClass = variant === 'dark'
    ? 'bg-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-white'
    : 'bg-slate-200 text-slate-600 hover:bg-slate-300 hover:text-slate-900';

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onItemChange(item.id)}
          className={`
            flex items-center gap-1.5
            px-3 sm:px-4 py-1.5 sm:py-2
            rounded-full
            text-xs sm:text-sm font-medium
            transition-all duration-200
            ${activeItem === item.id ? activeClass : inactiveClass}
          `}
        >
          {item.label}
          {item.count !== undefined && (
            <span className={`
              px-1.5 py-0.5 rounded-full text-xs
              ${activeItem === item.id ? 'bg-black/20' : 'bg-slate-600/50'}
            `}>
              {item.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

// Vertical tab navigation for sidebars
interface VerticalTabNavProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  variant?: 'dark' | 'light';
  className?: string;
}

export function VerticalTabNav({
  tabs,
  activeTab,
  onTabChange,
  variant = 'dark',
  className = '',
}: VerticalTabNavProps) {
  const activeClass = variant === 'dark'
    ? 'bg-[#c9a227]/20 text-[#c9a227] border-l-2 border-[#c9a227]'
    : 'bg-[#c9a227]/10 text-[#c9a227] border-l-2 border-[#c9a227]';

  const inactiveClass = variant === 'dark'
    ? 'text-slate-400 hover:text-white hover:bg-slate-700/50 border-l-2 border-transparent'
    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border-l-2 border-transparent';

  return (
    <nav className={`space-y-1 ${className}`}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              w-full flex items-center gap-3
              px-3 sm:px-4 py-2 sm:py-2.5
              text-sm font-medium
              transition-all duration-200
              ${isActive ? activeClass : inactiveClass}
            `}
          >
            {Icon && <Icon size={18} />}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
