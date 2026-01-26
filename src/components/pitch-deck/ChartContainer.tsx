import React from 'react';
import { ResponsiveContainer } from 'recharts';
import { typography } from '@/constants/design-tokens';

interface ChartContainerProps {
  children: React.ReactNode;
  title?: string;
  height?: number;
  className?: string;
  subtitle?: string;
}

export function ChartContainer({
  children,
  title,
  height = 400,
  className = '',
  subtitle,
}: ChartContainerProps) {
  return (
    <div className={`w-full ${className}`}>
      {title && (
        <div className="mb-4 text-center">
          <h3 className={`${typography.h3} text-white mb-1`}>
            {title}
          </h3>
          {subtitle && (
            <p className={`${typography.bodySmall} text-gray-400`}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      <ResponsiveContainer width="100%" height={height}>
        {children}
      </ResponsiveContainer>
    </div>
  );
}
