'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Home } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
  showLogo?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  subtitle,
  backHref = '/dashboard',
  backLabel = 'Dashboard',
  showLogo = true,
  className = '',
  children,
}: PageHeaderProps) {
  return (
    <header className={`w-full ${className}`}>
      {/* Top Navigation Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
        {/* Logo and Back Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          {showLogo && (
            <Link href="/dashboard" className="flex-shrink-0">
              <Image
                src="/images/nuqta-logo.png"
                alt="Nuqta"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </Link>
          )}
          <Link
            href={backHref}
            className="flex items-center gap-1.5 sm:gap-2 text-slate-600 hover:text-[#c9a227] transition-colors text-sm sm:text-base"
          >
            <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
            <span className="hidden xs:inline">{backLabel}</span>
            <Home size={16} className="xs:hidden" />
          </Link>
        </div>

        {/* Optional Actions */}
        {children && (
          <div className="flex items-center gap-2 sm:gap-3">
            {children}
          </div>
        )}
      </div>

      {/* Title Section */}
      <div className="mb-6 sm:mb-8 lg:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2 sm:mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}

// Light variant for pages with light backgrounds
export function PageHeaderLight({
  title,
  subtitle,
  backHref = '/dashboard',
  backLabel = 'Dashboard',
  showLogo = true,
  className = '',
  children,
}: PageHeaderProps) {
  return (
    <header className={`w-full ${className}`}>
      {/* Top Navigation Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
        {/* Logo and Back Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          {showLogo && (
            <Link href="/dashboard" className="flex-shrink-0">
              <Image
                src="/images/nuqta-logo.png"
                alt="Nuqta"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </Link>
          )}
          <Link
            href={backHref}
            className="flex items-center gap-1.5 sm:gap-2 text-slate-600 hover:text-[#c9a227] transition-colors text-sm sm:text-base"
          >
            <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
            <span className="hidden xs:inline">{backLabel}</span>
            <Home size={16} className="xs:hidden" />
          </Link>
        </div>

        {/* Optional Actions */}
        {children && (
          <div className="flex items-center gap-2 sm:gap-3">
            {children}
          </div>
        )}
      </div>

      {/* Title Section */}
      <div className="mb-6 sm:mb-8 lg:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-2 sm:mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
