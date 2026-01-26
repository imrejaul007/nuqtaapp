/**
 * Recharts Theme Configuration for Nuqta Pitch Deck
 * Provides consistent styling for all charts across slides
 */

import { colors } from './design-tokens';

export const chartColors = {
  primary: colors.primary.gold,
  blue: colors.semantic.blue,
  green: colors.semantic.green,
  emerald: colors.semantic.emerald,
  purple: colors.semantic.purple,
  red: colors.semantic.red,
  orange: colors.semantic.orange,
  pink: colors.semantic.pink,
  cyan: colors.semantic.cyan,
  amber: colors.semantic.amber,
};

// Color palette for multi-series charts
export const chartPalette = [
  chartColors.blue,
  chartColors.emerald,
  chartColors.purple,
  chartColors.orange,
  chartColors.pink,
  chartColors.cyan,
];

// Grid styling
export const gridStyle = {
  stroke: '#1a2a42',
  strokeDasharray: '3 3',
  strokeOpacity: 0.5,
};

// Axis styling
export const axisStyle = {
  tick: {
    fill: '#9ca3af',
    fontSize: 12,
  },
  axisLine: {
    stroke: '#1a2a42',
  },
};

// Tooltip styling
export const tooltipStyle = {
  contentStyle: {
    backgroundColor: '#0f172a',
    border: `2px solid ${chartColors.primary}`,
    borderRadius: '8px',
    padding: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
  },
  labelStyle: {
    color: chartColors.primary,
    fontWeight: 'bold',
    marginBottom: '4px',
  },
  itemStyle: {
    color: '#e2e8f0',
  },
};

// Legend styling
export const legendStyle = {
  iconType: 'circle' as const,
  wrapperStyle: {
    paddingTop: '20px',
  },
  iconSize: 10,
};

// Animation configuration
export const animationConfig = {
  animationDuration: 1000,
  animationEasing: 'ease-out' as const,
};

// Default chart margins
export const chartMargins = {
  default: { top: 20, right: 30, bottom: 20, left: 20 },
  withLegend: { top: 20, right: 30, bottom: 40, left: 20 },
  compact: { top: 10, right: 20, bottom: 10, left: 10 },
};

// Chart theme (combines all styling)
export const chartTheme = {
  colors: chartColors,
  palette: chartPalette,
  grid: gridStyle,
  axis: axisStyle,
  tooltip: tooltipStyle,
  legend: legendStyle,
  animation: animationConfig,
  margins: chartMargins,
};

// Utility functions for formatting chart data
export const formatCurrency = (value: number, prefix: string = '$'): string => {
  if (value >= 1000000000) {
    return `${prefix}${(value / 1000000000).toFixed(1)}B`;
  }
  if (value >= 1000000) {
    return `${prefix}${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `${prefix}${(value / 1000).toFixed(1)}K`;
  }
  return `${prefix}${value.toFixed(0)}`;
};

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

export const formatPieLabel = (entry: any): string => {
  const { name, value, percent } = entry;
  return `${name}: ${formatCurrency(value)} (${formatPercentage(percent * 100)})`;
};
