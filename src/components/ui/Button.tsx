'use client';

import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const variantClasses = {
  primary: 'bg-[#c9a227] hover:bg-[#b8922a] text-black font-semibold',
  secondary: 'bg-slate-700 hover:bg-slate-600 text-white',
  outline: 'border-2 border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227] hover:text-black',
  ghost: 'text-slate-400 hover:text-white hover:bg-slate-700/50',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
};

const sizeClasses = {
  sm: 'text-xs px-3 py-1.5 sm:px-4 sm:py-2',
  md: 'text-sm px-4 py-2 sm:px-5 sm:py-2.5',
  lg: 'text-base px-5 py-2.5 sm:px-6 sm:py-3',
};

const iconSizes = {
  sm: 14,
  md: 16,
  lg: 18,
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  loading = false,
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const iconSize = iconSizes[size];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-lg sm:rounded-xl
        transition-all duration-200
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {!loading && Icon && iconPosition === 'left' && <Icon size={iconSize} />}
      {children}
      {!loading && Icon && iconPosition === 'right' && <Icon size={iconSize} />}
    </button>
  );
}

// Link Button
interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  external?: boolean;
  className?: string;
}

export function LinkButton({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  external = false,
  className = '',
}: LinkButtonProps) {
  const iconSize = iconSizes[size];

  const classes = `
    inline-flex items-center justify-center gap-2
    rounded-lg sm:rounded-xl
    transition-all duration-200
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {Icon && iconPosition === 'left' && <Icon size={iconSize} />}
        {children}
        {Icon && iconPosition === 'right' && <Icon size={iconSize} />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {Icon && iconPosition === 'left' && <Icon size={iconSize} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={iconSize} />}
    </Link>
  );
}

// Icon Button (square button with just an icon)
interface IconButtonProps {
  icon: LucideIcon;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  'aria-label': string;
}

const iconButtonSizes = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

export function IconButton({
  icon: Icon,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  onClick,
  'aria-label': ariaLabel,
}: IconButtonProps) {
  const iconSize = iconSizes[size];

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      className={`
        inline-flex items-center justify-center
        rounded-lg sm:rounded-xl
        transition-all duration-200
        ${variantClasses[variant]}
        ${iconButtonSizes[size]}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {loading ? (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : (
        <Icon size={iconSize} />
      )}
    </button>
  );
}
