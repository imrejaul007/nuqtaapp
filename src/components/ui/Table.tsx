'use client';

import React from 'react';

interface TableProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'dark' | 'light';
}

export function Table({ children, className = '', variant = 'dark' }: TableProps) {
  const bgClass = variant === 'dark' ? 'bg-slate-800/50' : 'bg-white';
  const borderClass = variant === 'dark' ? 'border-slate-700/50' : 'border-slate-200';

  return (
    <div className={`overflow-x-auto rounded-xl sm:rounded-2xl border ${borderClass} ${bgClass} ${className}`}>
      <table className="w-full min-w-[600px]">
        {children}
      </table>
    </div>
  );
}

interface TableHeadProps {
  children: React.ReactNode;
  variant?: 'dark' | 'light';
}

export function TableHead({ children, variant = 'dark' }: TableHeadProps) {
  const bgClass = variant === 'dark' ? 'bg-slate-900/50' : 'bg-slate-100';
  const textClass = variant === 'dark' ? 'text-slate-400' : 'text-slate-600';
  const borderClass = variant === 'dark' ? 'border-slate-700/50' : 'border-slate-200';

  return (
    <thead className={`${bgClass} border-b ${borderClass}`}>
      <tr>
        {React.Children.map(children, (child) => (
          <th className={`px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold ${textClass} uppercase tracking-wider`}>
            {child}
          </th>
        ))}
      </tr>
    </thead>
  );
}

interface TableBodyProps {
  children: React.ReactNode;
}

export function TableBody({ children }: TableBodyProps) {
  return <tbody className="divide-y divide-slate-700/30">{children}</tbody>;
}

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'dark' | 'light';
  highlight?: boolean;
}

export function TableRow({ children, className = '', variant = 'dark', highlight = false }: TableRowProps) {
  const hoverClass = variant === 'dark' ? 'hover:bg-slate-700/30' : 'hover:bg-slate-50';
  const highlightClass = highlight
    ? variant === 'dark'
      ? 'bg-[#c9a227]/10'
      : 'bg-[#c9a227]/5'
    : '';

  return (
    <tr className={`transition-colors ${hoverClass} ${highlightClass} ${className}`}>
      {children}
    </tr>
  );
}

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'dark' | 'light';
  align?: 'left' | 'center' | 'right';
  bold?: boolean;
}

export function TableCell({
  children,
  className = '',
  variant = 'dark',
  align = 'left',
  bold = false,
}: TableCellProps) {
  const textClass = variant === 'dark' ? 'text-slate-300' : 'text-slate-700';
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <td
      className={`
        px-3 sm:px-4 md:px-6 py-3 sm:py-4
        text-xs sm:text-sm
        ${textClass}
        ${alignClass[align]}
        ${bold ? 'font-semibold' : ''}
        ${className}
      `}
    >
      {children}
    </td>
  );
}

// Responsive table that becomes cards on mobile
interface ResponsiveTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  variant?: 'dark' | 'light';
  className?: string;
}

export function ResponsiveTable({ headers, rows, variant = 'dark', className = '' }: ResponsiveTableProps) {
  const bgClass = variant === 'dark' ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-slate-200';
  const headerBg = variant === 'dark' ? 'bg-slate-900/50' : 'bg-slate-100';
  const textClass = variant === 'dark' ? 'text-slate-300' : 'text-slate-700';
  const labelClass = variant === 'dark' ? 'text-slate-400' : 'text-slate-500';
  const borderClass = variant === 'dark' ? 'border-slate-700/30' : 'border-slate-200';

  return (
    <>
      {/* Desktop Table */}
      <div className={`hidden md:block overflow-x-auto rounded-xl border ${bgClass} ${className}`}>
        <table className="w-full">
          <thead className={`${headerBg} border-b ${borderClass}`}>
            <tr>
              {headers.map((header, i) => (
                <th key={i} className={`px-4 lg:px-6 py-4 text-left text-sm font-semibold ${labelClass} uppercase tracking-wider`}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={`divide-y ${borderClass}`}>
            {rows.map((row, i) => (
              <tr key={i} className={`hover:${variant === 'dark' ? 'bg-slate-700/30' : 'bg-slate-50'} transition-colors`}>
                {row.map((cell, j) => (
                  <td key={j} className={`px-4 lg:px-6 py-4 text-sm ${textClass}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className={`md:hidden space-y-3 ${className}`}>
        {rows.map((row, i) => (
          <div key={i} className={`rounded-xl border p-4 ${bgClass}`}>
            {row.map((cell, j) => (
              <div key={j} className={`flex justify-between items-start py-2 ${j < row.length - 1 ? `border-b ${borderClass}` : ''}`}>
                <span className={`text-xs font-medium ${labelClass} uppercase`}>{headers[j]}</span>
                <span className={`text-sm ${textClass} text-right ml-4`}>{cell}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
