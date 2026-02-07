'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  TrendingUp,
  DollarSign,
  Users,
  Store,
  Calendar,
  Target,
  Zap,
  BarChart3,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Wallet,
  Coins,
  Calculator,
  ChevronRight,
  ChevronDown,
  LineChart,
  Activity,
  CheckCircle,
  AlertTriangle,
  Settings,
  Percent,
  TrendingDown,
  CreditCard,
  Building2,
  Banknote,
  Package,
  ShoppingCart,
  RefreshCw,
  AlertCircle,
  Gauge
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

type TabType = 'dashboard' | 'assumptions' | 'h1' | 'h2' | 'h3' | 'cashflow' | 'pnl' | 'sensitivity';

// ============================================
// ASSUMPTIONS STATE TYPE
// ============================================
interface Assumptions {
  // User Economics
  aov: number;
  frequency: number;
  cac: number;
  retentionMonths: number;
  activationRate: number;
  userChurn: number;

  // Revenue Streams
  baseCommission: number;
  noShareBonus: number;
  noShareRate: number;
  promotedCommission: number;
  promotedGmvPct: number;
  merchantSubPrice: number;
  merchantSubAttach: number;
  affiliateCommission: number;
  affiliateGmvPct: number;
  userSubPrice: number;
  userSubAttach: number;
  financeRevenuePerUser: number;
  financeAttach: number;
  b2bCommission: number;
  b2bGmvPct: number;

  // Budget
  marketingPct: number;
  salaryPct: number;
  techOpsPct: number;
  customerAcqPct: number;
  merchantAcqPct: number;
  rentFixed: number;

  // Merchant
  merchantChurn: number;
  cam: number;

  // Funding
  initialBudget: number;
  runwayMonths: number;

  // KPI Gates
  h2GateMau: number;
  h2GateMerchants: number;
  h2GateGmv: number;
  h2GateLtvcac: number;
  h3GateMau: number;
  h3GateMerchants: number;
  h3GateGmv: number;
  h3GateRetention: number;
}

// Default assumptions - ALIGNED WITH OFFICIAL DOCUMENTS
// Source: funding-docs, memo, homepage
// LTV:CAC target: 16.8x (AED 504 LTV / AED 30 CAC)
const defaultAssumptions: Assumptions = {
  aov: 100,
  frequency: 4,
  cac: 30, // Official: AED 30 blended CAC
  retentionMonths: 14, // 14 months retention → LTV ~AED 493 ≈ official AED 504
  activationRate: 40,
  userChurn: 5,

  baseCommission: 5,
  noShareBonus: 5,
  noShareRate: 40,
  promotedCommission: 5,
  promotedGmvPct: 30,
  merchantSubPrice: 100,
  merchantSubAttach: 20,
  affiliateCommission: 3,
  affiliateGmvPct: 10,
  userSubPrice: 1,
  userSubAttach: 5,
  financeRevenuePerUser: 10,
  financeAttach: 15,
  b2bCommission: 3,
  b2bGmvPct: 5,

  // Budget allocation: aligned with Use of Funds ($400K SAFE)
  // Marketing 35%, Tech 25%, Team 20%, Ops 15%, Reserve 5%
  // For monthly budget: Marketing + Customer Acq combined
  marketingPct: 35, // 35% of budget goes to marketing
  salaryPct: 20, // 20% team (matches Use of Funds)
  techOpsPct: 40, // 25% tech + 15% ops = 40% combined
  customerAcqPct: 70, // 70% of marketing for customer acquisition
  merchantAcqPct: 30, // 30% of marketing for merchant acquisition
  rentFixed: 5000,

  merchantChurn: 5,
  cam: 100,

  initialBudget: 734000, // Tranche 1: $200K × 3.67 = AED 734K
  runwayMonths: 5,

  h2GateMau: 5000,
  h2GateMerchants: 250,
  h2GateGmv: 10000000,
  h2GateLtvcac: 10,
  h3GateMau: 75000,
  h3GateMerchants: 500,
  h3GateGmv: 50000000,
  h3GateRetention: 30,
};

// ============================================
// CALCULATION FUNCTIONS
// ============================================
function calculateMetrics(assumptions: Assumptions) {
  const {
    aov, frequency, cac, retentionMonths, activationRate, userChurn,
    baseCommission, noShareBonus, noShareRate, promotedCommission, promotedGmvPct,
    merchantSubPrice, merchantSubAttach, affiliateCommission, affiliateGmvPct,
    userSubPrice, userSubAttach, financeRevenuePerUser, financeAttach,
    b2bCommission, b2bGmvPct, initialBudget, runwayMonths
  } = assumptions;

  // Calculate weighted commission rate
  const avgCommissionRate = baseCommission + (noShareBonus * noShareRate / 100);

  // GMV per user per month
  const gmvPerUser = aov * frequency;

  // Revenue per user (from all active streams in Year 1)
  const commissionRevenue = gmvPerUser * (avgCommissionRate / 100);
  const promotedRevenue = gmvPerUser * (promotedGmvPct / 100) * (promotedCommission / 100);
  const affiliateRevenue = gmvPerUser * (affiliateGmvPct / 100) * (affiliateCommission / 100);
  // Year 1 free: userSub, finance, b2b are 0

  const arpu = commissionRevenue + promotedRevenue + affiliateRevenue;

  // LTV Calculation
  const ltv = arpu * retentionMonths;

  // LTV:CAC Ratio
  const ltvCac = ltv / cac;

  // CAC Payback (months)
  const cacPayback = cac / arpu;

  // Monthly budget
  const monthlyBudget = initialBudget / runwayMonths;

  // Take rate (blended)
  const takeRate = avgCommissionRate + (promotedGmvPct / 100 * promotedCommission) + (affiliateGmvPct / 100 * affiliateCommission);

  // Burn multiple (simplified)
  const burnMultiple = monthlyBudget / (arpu * 1000); // Assuming 1000 users

  // Magic number (simplified)
  const magicNumber = 0.8; // Placeholder

  // NRR
  const nrr = 100 - userChurn;

  return {
    avgCommissionRate,
    gmvPerUser,
    arpu,
    ltv,
    ltvCac,
    cacPayback,
    monthlyBudget,
    takeRate,
    burnMultiple,
    magicNumber,
    nrr,
  };
}

function generateMonthlyData(assumptions: Assumptions, phase: 'h1' | 'h2' | 'h3') {
  const metrics = calculateMetrics(assumptions);
  const { monthlyBudget, arpu, gmvPerUser } = metrics;
  const { cac, cam, merchantChurn, userChurn, marketingPct, customerAcqPct, merchantAcqPct } = assumptions;

  const marketingBudget = monthlyBudget * (marketingPct / 100);
  const customerAcqBudget = marketingBudget * (customerAcqPct / 100);
  const merchantAcqBudget = marketingBudget * (merchantAcqPct / 100);

  const months = phase === 'h1' ? ['Feb', 'Mar', 'Apr', 'May', 'Jun'] :
                 phase === 'h2' ? ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] :
                 ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  let users = phase === 'h1' ? 0 : phase === 'h2' ? 5000 : 75000;
  let merchants = phase === 'h1' ? 10 : phase === 'h2' ? 250 : 500;
  let cash = assumptions.initialBudget;
  let cumulativeGmv = 0;
  let cumulativeRevenue = 0;

  return months.map((month, idx) => {
    // New user acquisition
    const newUsers = Math.floor(customerAcqBudget / cac);
    const churnedUsers = Math.floor(users * (userChurn / 100));
    users = users + newUsers - churnedUsers;

    // New merchant acquisition
    const newMerchants = Math.floor(merchantAcqBudget / cam);
    const churnedMerchants = Math.floor(merchants * (merchantChurn / 100));
    merchants = merchants + newMerchants - churnedMerchants;

    // Active users (activation rate applied)
    const activeUsers = Math.floor(users * (assumptions.activationRate / 100));

    // GMV and Revenue
    const gmv = activeUsers * gmvPerUser;
    const revenue = activeUsers * arpu;
    cumulativeGmv += gmv;
    cumulativeRevenue += revenue;

    // Costs
    const costs = monthlyBudget;
    const netPL = revenue - costs;
    cash = cash + netPL;

    return {
      month: `${month} ${phase === 'h1' ? '2026' : phase === 'h2' ? '2026' : '2027'}`,
      users,
      activeUsers,
      merchants,
      gmv,
      revenue,
      costs,
      netPL,
      cash,
      cumulativeGmv,
      cumulativeRevenue,
    };
  });
}

// ============================================
// MAIN COMPONENT
// ============================================
export default function FinancialProjectionPage() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [assumptions, setAssumptions] = useState<Assumptions>(defaultAssumptions);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    userEconomics: true,
    revenueStreams: true,
    budget: true,
    merchant: true,
    funding: true,
    kpiGates: false,
  });

  const metrics = calculateMetrics(assumptions);

  const updateAssumption = useCallback((key: keyof Assumptions, value: number) => {
    setAssumptions(prev => ({ ...prev, [key]: value }));
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const tabs = [
    { id: 'dashboard' as TabType, label: 'Dashboard', icon: BarChart3 },
    { id: 'assumptions' as TabType, label: 'Assumptions', icon: Settings },
    { id: 'h1' as TabType, label: 'H1 Monthly', icon: Calendar },
    { id: 'h2' as TabType, label: 'H2 Monthly', icon: Calendar },
    { id: 'h3' as TabType, label: 'H3 Monthly', icon: Calendar },
    { id: 'cashflow' as TabType, label: 'Cash Flow', icon: Wallet },
    { id: 'pnl' as TabType, label: 'P&L', icon: DollarSign },
    { id: 'sensitivity' as TabType, label: 'Sensitivity', icon: RefreshCw },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-[#c9a227]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center flex-shrink-0">
              <LineChart size={24} className="text-[#0a1628] sm:w-8 sm:h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Financial Projections</h1>
              <p className="text-slate-400 text-sm sm:text-base">70+ Parameters • Real-Time Calculations • AED Currency</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
              <span className="flex items-center gap-1">
                <Zap size={14} />
                Interactive Model
              </span>
            </div>
            <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
              KPI-Gated Growth
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-white/10 sticky top-0 bg-[#0a1628]/95 backdrop-blur-xl z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 sm:gap-2 py-3 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 py-2 rounded-lg transition-all flex items-center gap-2 text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-[#c9a227] text-[#0a1628] font-bold'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === 'dashboard' && <DashboardTab metrics={metrics} assumptions={assumptions} />}
        {activeTab === 'assumptions' && (
          <AssumptionsTab
            assumptions={assumptions}
            updateAssumption={updateAssumption}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
          />
        )}
        {activeTab === 'h1' && <MonthlyProjectionsTab assumptions={assumptions} phase="h1" />}
        {activeTab === 'h2' && <MonthlyProjectionsTab assumptions={assumptions} phase="h2" />}
        {activeTab === 'h3' && <MonthlyProjectionsTab assumptions={assumptions} phase="h3" />}
        {activeTab === 'cashflow' && <CashFlowTab assumptions={assumptions} />}
        {activeTab === 'pnl' && <PLTab assumptions={assumptions} metrics={metrics} />}
        {activeTab === 'sensitivity' && <SensitivityTab assumptions={assumptions} />}
      </div>

      <GlobalFooter />
    </div>
  );
}

// ============================================
// SVG CHART COMPONENTS
// ============================================

// Bar Chart Component
function BarChart({ data, labels, colors, height = 200, title }: {
  data: number[];
  labels: string[];
  colors: string[];
  height?: number;
  title?: string;
}) {
  const maxValue = Math.max(...data);
  const barWidth = 100 / data.length;

  return (
    <div className="w-full">
      {title && <p className="text-sm text-slate-400 mb-3 text-center">{title}</p>}
      <svg viewBox={`0 0 400 ${height + 40}`} className="w-full" style={{ height: height + 40 }}>
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((pct) => (
          <g key={pct}>
            <line
              x1="40"
              y1={height - (pct / 100) * height + 10}
              x2="390"
              y2={height - (pct / 100) * height + 10}
              stroke="rgba(255,255,255,0.1)"
              strokeDasharray="4"
            />
            <text
              x="35"
              y={height - (pct / 100) * height + 14}
              fill="#64748b"
              fontSize="10"
              textAnchor="end"
            >
              {Math.round((pct / 100) * maxValue / 1000)}K
            </text>
          </g>
        ))}

        {/* Bars with animation */}
        {data.map((value, idx) => {
          const barHeight = (value / maxValue) * height;
          const x = 50 + idx * (350 / data.length);
          const barW = (350 / data.length) * 0.7;

          return (
            <g key={idx}>
              <defs>
                <linearGradient id={`bar-gradient-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={colors[idx % colors.length]} stopOpacity="1" />
                  <stop offset="100%" stopColor={colors[idx % colors.length]} stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <rect
                x={x}
                y={height - barHeight + 10}
                width={barW}
                height={barHeight}
                fill={`url(#bar-gradient-${idx})`}
                rx="4"
                className="transition-all duration-500"
              >
                <animate
                  attributeName="height"
                  from="0"
                  to={barHeight}
                  dur="0.8s"
                  fill="freeze"
                />
                <animate
                  attributeName="y"
                  from={height + 10}
                  to={height - barHeight + 10}
                  dur="0.8s"
                  fill="freeze"
                />
              </rect>
              <text
                x={x + barW / 2}
                y={height + 28}
                fill="#94a3b8"
                fontSize="10"
                textAnchor="middle"
              >
                {labels[idx]}
              </text>
              <text
                x={x + barW / 2}
                y={height - barHeight + 5}
                fill="#fff"
                fontSize="9"
                fontWeight="bold"
                textAnchor="middle"
              >
                {(value / 1000).toFixed(0)}K
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// Line Chart Component
function LineChart2({ data, labels, color = "#c9a227", height = 180, title, showArea = true }: {
  data: number[];
  labels: string[];
  color?: string;
  height?: number;
  title?: string;
  showArea?: boolean;
}) {
  const maxValue = Math.max(...data) * 1.1;
  const minValue = Math.min(0, ...data);
  const range = maxValue - minValue;

  const points = data.map((value, idx) => {
    const x = 50 + (idx / (data.length - 1)) * 340;
    const y = height - ((value - minValue) / range) * (height - 20) + 10;
    return { x, y, value };
  });

  const pathD = points.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaD = `${pathD} L ${points[points.length - 1].x} ${height + 10} L ${points[0].x} ${height + 10} Z`;

  return (
    <div className="w-full">
      {title && <p className="text-sm text-slate-400 mb-3 text-center">{title}</p>}
      <svg viewBox={`0 0 400 ${height + 40}`} className="w-full" style={{ height: height + 40 }}>
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((pct) => (
          <line
            key={pct}
            x1="45"
            y1={height - (pct / 100) * (height - 20) + 10}
            x2="395"
            y2={height - (pct / 100) * (height - 20) + 10}
            stroke="rgba(255,255,255,0.1)"
            strokeDasharray="4"
          />
        ))}

        {/* Area fill */}
        {showArea && (
          <path
            d={areaD}
            fill={`url(#area-gradient-${color.replace('#', '')})`}
            opacity="0.3"
          />
        )}

        <defs>
          <linearGradient id={`area-gradient-${color.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.4" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Line */}
        <path
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1000"
            to="0"
            dur="1.5s"
            fill="freeze"
          />
        </path>

        {/* Data points */}
        {points.map((p, idx) => (
          <g key={idx}>
            <circle
              cx={p.x}
              cy={p.y}
              r="5"
              fill="#0a1628"
              stroke={color}
              strokeWidth="2"
            />
            <text
              x={p.x}
              y={height + 28}
              fill="#94a3b8"
              fontSize="10"
              textAnchor="middle"
            >
              {labels[idx]}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// Donut Chart Component
function DonutChart({ data, labels, colors, size = 200, title }: {
  data: number[];
  labels: string[];
  colors: string[];
  size?: number;
  title?: string;
}) {
  const total = data.reduce((sum, v) => sum + v, 0);
  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.35;
  const strokeWidth = size * 0.15;

  let currentAngle = -90;

  const segments = data.map((value, idx) => {
    const percentage = (value / total) * 100;
    const angle = (value / total) * 360;
    const startAngle = currentAngle;
    currentAngle += angle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = ((startAngle + angle) * Math.PI) / 180;

    const x1 = cx + radius * Math.cos(startRad);
    const y1 = cy + radius * Math.sin(startRad);
    const x2 = cx + radius * Math.cos(endRad);
    const y2 = cy + radius * Math.sin(endRad);

    const largeArc = angle > 180 ? 1 : 0;

    return {
      path: `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
      color: colors[idx % colors.length],
      label: labels[idx],
      percentage,
      value
    };
  });

  return (
    <div className="flex flex-col items-center">
      {title && <p className="text-sm text-slate-400 mb-3">{title}</p>}
      <div className="relative">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {segments.map((seg, idx) => (
            <path
              key={idx}
              d={seg.path}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              className="transition-all duration-300 hover:opacity-80"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="500"
                to="0"
                dur={`${0.5 + idx * 0.2}s`}
                fill="freeze"
              />
            </path>
          ))}
          {/* Center text */}
          <text
            x={cx}
            y={cy - 5}
            fill="#fff"
            fontSize="16"
            fontWeight="bold"
            textAnchor="middle"
          >
            AED
          </text>
          <text
            x={cx}
            y={cy + 15}
            fill="#c9a227"
            fontSize="14"
            fontWeight="bold"
            textAnchor="middle"
          >
            {(total / 1000).toFixed(0)}K
          </text>
        </svg>
      </div>
      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
        {segments.map((seg, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: seg.color }} />
            <span className="text-slate-400">{seg.label}</span>
            <span className="text-white font-bold">{seg.percentage.toFixed(0)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Progress Bar Component
function ProgressBar({ value, max, label, color = "#c9a227", showPercentage = true }: {
  value: number;
  max: number;
  label: string;
  color?: string;
  showPercentage?: boolean;
}) {
  const percentage = Math.min(100, (value / max) * 100);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-slate-400">{label}</span>
        {showPercentage && (
          <span className="text-sm font-bold" style={{ color }}>
            {percentage.toFixed(0)}%
          </span>
        )}
      </div>
      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${percentage}%`,
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
          }}
        />
      </div>
      <div className="flex justify-between text-xs text-slate-500 mt-1">
        <span>{value.toLocaleString()}</span>
        <span>{max.toLocaleString()}</span>
      </div>
    </div>
  );
}

// Cash Runway Gauge Component
function CashRunwayGauge({ monthsRemaining, totalMonths, cash }: {
  monthsRemaining: number;
  totalMonths: number;
  cash: number;
}) {
  const percentage = Math.min(100, (monthsRemaining / totalMonths) * 100);
  const angle = (percentage / 100) * 180;
  const color = monthsRemaining >= 6 ? '#22c55e' : monthsRemaining >= 3 ? '#eab308' : '#ef4444';

  // Arc path for gauge
  const radius = 80;
  const startAngle = 180;
  const endAngle = startAngle - angle;

  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;

  const x1 = 100 + radius * Math.cos(startRad);
  const y1 = 100 + radius * Math.sin(startRad);
  const x2 = 100 + radius * Math.cos(endRad);
  const y2 = 100 + radius * Math.sin(endRad);

  const largeArc = angle > 180 ? 1 : 0;

  return (
    <div className="flex flex-col items-center">
      <svg width="200" height="120" viewBox="0 0 200 120">
        {/* Background arc */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="16"
          strokeLinecap="round"
        />

        {/* Value arc */}
        <path
          d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 0 ${x2} ${y2}`}
          fill="none"
          stroke={color}
          strokeWidth="16"
          strokeLinecap="round"
          className="transition-all duration-1000"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="300"
            to="0"
            dur="1s"
            fill="freeze"
          />
        </path>

        {/* Center text */}
        <text x="100" y="75" fill="#fff" fontSize="24" fontWeight="bold" textAnchor="middle">
          {monthsRemaining}
        </text>
        <text x="100" y="95" fill="#94a3b8" fontSize="12" textAnchor="middle">
          months left
        </text>

        {/* Tick marks */}
        {[0, 3, 6, 9, 12].map((tick, idx) => {
          const tickAngle = 180 - (tick / 12) * 180;
          const tickRad = (tickAngle * Math.PI) / 180;
          const innerR = 92;
          const outerR = 98;
          return (
            <g key={idx}>
              <line
                x1={100 + innerR * Math.cos(tickRad)}
                y1={100 + innerR * Math.sin(tickRad)}
                x2={100 + outerR * Math.cos(tickRad)}
                y2={100 + outerR * Math.sin(tickRad)}
                stroke="#64748b"
                strokeWidth="2"
              />
              <text
                x={100 + 108 * Math.cos(tickRad)}
                y={100 + 108 * Math.sin(tickRad)}
                fill="#64748b"
                fontSize="8"
                textAnchor="middle"
              >
                {tick}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="text-center mt-2">
        <p className="text-slate-400 text-sm">Cash Position</p>
        <p className="text-xl font-bold" style={{ color }}>
          AED {(cash / 1000).toFixed(0)}K
        </p>
      </div>
    </div>
  );
}

// Mini Sparkline Component
function Sparkline({ data, color = "#c9a227", width = 100, height = 30 }: {
  data: number[];
  color?: string;
  width?: number;
  height?: number;
}) {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue || 1;

  const points = data.map((value, idx) => {
    const x = (idx / (data.length - 1)) * width;
    const y = height - ((value - minValue) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={width} height={height} className="inline-block ml-2">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ============================================
// DASHBOARD TAB
// ============================================
function DashboardTab({ metrics, assumptions }: { metrics: ReturnType<typeof calculateMetrics>; assumptions: Assumptions }) {
  const { ltvCac, cacPayback, arpu, ltv, monthlyBudget, takeRate, nrr, burnMultiple } = metrics;

  // H1 projected values
  const h1Data = generateMonthlyData(assumptions, 'h1');
  const h2Data = generateMonthlyData(assumptions, 'h2');
  const lastMonth = h1Data[h1Data.length - 1];
  const mrr = lastMonth.revenue;
  const arr = mrr * 12;

  // Chart data
  const revenueData = h1Data.map(d => d.revenue);
  const userGrowthData = h1Data.map(d => d.users);
  const gmvData = h1Data.map(d => d.gmv);
  const monthLabels = h1Data.map(d => d.month.split(' ')[0]);

  // Revenue breakdown for donut chart
  const commissionRevenue = lastMonth.revenue * 0.7;
  const promotedRevenue = lastMonth.revenue * 0.2;
  const subscriptionRevenue = lastMonth.revenue * 0.1;

  // Cash runway calculation
  const allData = [...h1Data, ...h2Data];
  const runwayMonths = Math.floor(lastMonth.cash / (assumptions.initialBudget / assumptions.runwayMonths));

  return (
    <div className="space-y-8">
      {/* Alert Banners */}
      <div className="space-y-3">
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
          <p className="text-green-400 font-bold flex items-center gap-2">
            <Target size={18} />
            H1 Target (~5 months, $200K Tranche 1)
          </p>
          <p className="text-slate-300 text-sm mt-1">
            50,000 MAU (aggressive) • 1,500 Merchants • Launch: March 1, 2026
          </p>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
          <p className="text-blue-400 font-bold flex items-center gap-2">
            <Banknote size={18} />
            Funding Structure
          </p>
          <p className="text-slate-300 text-sm mt-1">
            $400K total at $5M cap | Tranche 1: $200K (now) | Tranche 2: $200K (at milestones)
          </p>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
          <p className="text-yellow-400 font-bold flex items-center gap-2">
            <AlertTriangle size={18} />
            Budget Allocation
          </p>
          <p className="text-slate-300 text-sm mt-1">
            {assumptions.marketingPct}% Marketing | {assumptions.salaryPct}% Salaries | {assumptions.techOpsPct}% Tech/Ops
          </p>
        </div>
      </div>

      {/* Visual Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Growth Chart */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="text-[#c9a227]" size={20} />
            Revenue Growth (H1)
          </h3>
          <BarChart
            data={revenueData}
            labels={monthLabels}
            colors={['#c9a227', '#22c55e', '#3b82f6', '#a855f7', '#ec4899']}
            height={180}
          />
        </div>

        {/* User Growth Chart */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Users className="text-blue-400" size={20} />
            User Acquisition (H1)
          </h3>
          <LineChart2
            data={userGrowthData}
            labels={monthLabels}
            color="#3b82f6"
            height={180}
          />
        </div>

        {/* Revenue Breakdown Donut */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <PieChart className="text-purple-400" size={20} />
            Revenue Mix
          </h3>
          <DonutChart
            data={[commissionRevenue, promotedRevenue, subscriptionRevenue]}
            labels={['Commission', 'Promoted', 'Subscription']}
            colors={['#c9a227', '#22c55e', '#3b82f6']}
            size={200}
          />
        </div>

        {/* Cash Runway Gauge */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Gauge className="text-green-400" size={20} />
            Cash Runway
          </h3>
          <CashRunwayGauge
            monthsRemaining={Math.max(0, runwayMonths)}
            totalMonths={12}
            cash={lastMonth.cash}
          />
        </div>
      </div>

      {/* KPI Progress Section */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <Target className="text-[#c9a227]" size={20} />
          H1 Target Progress
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProgressBar
            value={lastMonth.users}
            max={assumptions.h2GateMau}
            label="MAU Target"
            color="#22c55e"
          />
          <ProgressBar
            value={lastMonth.merchants}
            max={assumptions.h2GateMerchants}
            label="Merchant Target"
            color="#3b82f6"
          />
          <ProgressBar
            value={h1Data.reduce((sum, d) => sum + d.gmv, 0)}
            max={assumptions.h2GateGmv}
            label="GMV Target"
            color="#a855f7"
          />
          <ProgressBar
            value={ltvCac}
            max={assumptions.h2GateLtvcac}
            label="LTV:CAC Target"
            color="#c9a227"
          />
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Gauge className="text-[#c9a227]" size={22} />
          Key Performance Indicators
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <KPICard
            label="LTV:CAC Ratio"
            value={`${ltvCac.toFixed(1)}x`}
            subtext="Target: ≥8x"
            status={ltvCac >= 8 ? 'success' : ltvCac >= 3 ? 'warning' : 'danger'}
          />
          <KPICard
            label="CAC Payback"
            value={`${cacPayback.toFixed(1)}`}
            subtext="months"
            status={cacPayback <= 12 ? 'success' : 'warning'}
          />
          <KPICard
            label="Gross Margin"
            value="100%"
            subtext="Digital product"
            status="success"
          />
          <KPICard
            label="Burn Multiple"
            value={burnMultiple.toFixed(1)}
            subtext="Lower is better"
            status={burnMultiple <= 2 ? 'success' : burnMultiple <= 4 ? 'warning' : 'danger'}
          />
          <KPICard
            label="Magic Number"
            value="0.8"
            subtext="Sales efficiency"
            status="neutral"
          />
          <KPICard
            label="Monthly Burn"
            value={`AED ${(monthlyBudget / 1000).toFixed(0)}K`}
            subtext={`${assumptions.runwayMonths}mo runway`}
            status="warning"
          />
          <KPICard
            label="MRR (H1 End)"
            value={`AED ${(mrr / 1000).toFixed(0)}K`}
            subtext="Monthly recurring"
            status="neutral"
          />
          <KPICard
            label="ARR Run Rate"
            value={`AED ${(arr / 1000000).toFixed(1)}M`}
            subtext="MRR × 12"
            status="neutral"
          />
        </div>
      </div>

      {/* Unit Economics */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Calculator className="text-[#c9a227]" size={22} />
          Unit Economics
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <KPICard
            label="ARPU (Monthly)"
            value={`AED ${arpu.toFixed(0)}`}
            subtext="Revenue per MAU"
            status="neutral"
          />
          <KPICard
            label="LTV"
            value={`AED ${ltv.toFixed(0)}`}
            subtext="Lifetime Value"
            status="neutral"
          />
          <KPICard
            label="Blended CAC"
            value={`AED ${assumptions.cac}`}
            subtext="User acquisition"
            status="neutral"
          />
          <KPICard
            label="GMV per MAU"
            value={`AED ${metrics.gmvPerUser}`}
            subtext="AOV × Frequency"
            status="neutral"
          />
        </div>
      </div>

      {/* Growth Metrics */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="text-[#c9a227]" size={22} />
          Growth Metrics
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <KPICard
            label="CMGR (H1)"
            value="56%"
            subtext="Compound monthly"
            status="success"
          />
          <KPICard
            label="User Churn"
            value={`${assumptions.userChurn}%`}
            subtext="Monthly average"
            status={assumptions.userChurn <= 5 ? 'success' : 'warning'}
          />
          <KPICard
            label="Merchant Churn"
            value={`${assumptions.merchantChurn}%`}
            subtext="Monthly logo churn"
            status={assumptions.merchantChurn <= 5 ? 'success' : 'warning'}
          />
          <KPICard
            label="NRR (Projected)"
            value={`${nrr.toFixed(0)}%`}
            subtext="Net revenue retention"
            status={nrr >= 100 ? 'success' : nrr >= 90 ? 'neutral' : 'warning'}
          />
        </div>
      </div>

      {/* Revenue Breakdown */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <PieChart className="text-[#c9a227]" size={22} />
          Revenue Streams (7 Total)
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <RevenueStreamCard
            icon={<ShoppingCart size={20} />}
            name="Commission on Sales"
            rate={`${metrics.avgCommissionRate.toFixed(1)}%`}
            description="Base + social sharing bonus"
            active={true}
          />
          <RevenueStreamCard
            icon={<Zap size={20} />}
            name="Promoted Sales"
            rate={`${assumptions.promotedCommission}%`}
            description={`On ${assumptions.promotedGmvPct}% of GMV`}
            active={true}
          />
          <RevenueStreamCard
            icon={<Building2 size={20} />}
            name="Merchant Subscription"
            rate={`AED ${assumptions.merchantSubPrice}/mo`}
            description={`${assumptions.merchantSubAttach}% attach rate`}
            active={true}
          />
          <RevenueStreamCard
            icon={<Package size={20} />}
            name="Affiliates"
            rate={`${assumptions.affiliateCommission}%`}
            description={`On ${assumptions.affiliateGmvPct}% of GMV`}
            active={true}
          />
          <RevenueStreamCard
            icon={<Users size={20} />}
            name="User Subscription"
            rate={`AED ${assumptions.userSubPrice}/mo`}
            description="FREE Year 1"
            active={false}
          />
          <RevenueStreamCard
            icon={<CreditCard size={20} />}
            name="Finance (BNPL)"
            rate={`AED ${assumptions.financeRevenuePerUser}/user`}
            description="FREE Year 1"
            active={false}
          />
          <RevenueStreamCard
            icon={<Package size={20} />}
            name="B2B Buying"
            rate={`${assumptions.b2bCommission}%`}
            description="FREE Year 1"
            active={false}
          />
          <div className="p-4 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[#c9a227] font-bold text-lg">Blended Take Rate</p>
              <p className="text-2xl font-bold text-white">{takeRate.toFixed(1)}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// ASSUMPTIONS TAB
// ============================================
function AssumptionsTab({
  assumptions,
  updateAssumption,
  expandedSections,
  toggleSection,
}: {
  assumptions: Assumptions;
  updateAssumption: (key: keyof Assumptions, value: number) => void;
  expandedSections: Record<string, boolean>;
  toggleSection: (section: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
        <p className="text-blue-400 font-bold flex items-center gap-2">
          <Zap size={18} />
          Interactive Model
        </p>
        <p className="text-slate-300 text-sm mt-1">
          Change any assumption and watch all 70+ metrics update automatically!
        </p>
      </div>

      {/* User Economics */}
      <CollapsibleSection
        title="User Economics"
        icon={<Users size={20} />}
        expanded={expandedSections.userEconomics}
        onToggle={() => toggleSection('userEconomics')}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AssumptionInput
            label="Average Order Value (AOV)"
            value={assumptions.aov}
            onChange={(v) => updateAssumption('aov', v)}
            unit="AED per transaction"
            step={10}
          />
          <AssumptionInput
            label="Transaction Frequency"
            value={assumptions.frequency}
            onChange={(v) => updateAssumption('frequency', v)}
            unit="transactions/user/month"
            step={0.5}
          />
          <AssumptionInput
            label="Blended CAC"
            value={assumptions.cac}
            onChange={(v) => updateAssumption('cac', v)}
            unit="AED per user"
            step={5}
          />
          <AssumptionInput
            label="Average Retention"
            value={assumptions.retentionMonths}
            onChange={(v) => updateAssumption('retentionMonths', v)}
            unit="months"
            step={1}
            min={1}
          />
          <AssumptionInput
            label="Activation Rate"
            value={assumptions.activationRate}
            onChange={(v) => updateAssumption('activationRate', v)}
            unit="%"
            step={5}
            min={0}
            max={100}
          />
          <AssumptionInput
            label="Monthly User Churn"
            value={assumptions.userChurn}
            onChange={(v) => updateAssumption('userChurn', v)}
            unit="%"
            step={0.5}
            min={0}
            max={100}
          />
        </div>
      </CollapsibleSection>

      {/* Revenue Streams */}
      <CollapsibleSection
        title="Revenue Model (7 Streams)"
        icon={<DollarSign size={20} />}
        expanded={expandedSections.revenueStreams}
        onToggle={() => toggleSection('revenueStreams')}
      >
        <div className="space-y-6">
          {/* Stream 1: Commission */}
          <div>
            <h4 className="text-[#c9a227] font-bold mb-3 flex items-center gap-2">
              1️⃣ Commission on Sales (Base + Social Sharing)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AssumptionInput
                label="Base Commission Rate"
                value={assumptions.baseCommission}
                onChange={(v) => updateAssumption('baseCommission', v)}
                unit="% of GMV"
                step={0.5}
              />
              <AssumptionInput
                label="No-Share Bonus Commission"
                value={assumptions.noShareBonus}
                onChange={(v) => updateAssumption('noShareBonus', v)}
                unit="% (if user doesn't share)"
                step={0.5}
              />
              <AssumptionInput
                label="% of Users NOT Sharing"
                value={assumptions.noShareRate}
                onChange={(v) => updateAssumption('noShareRate', v)}
                unit="%"
                step={5}
                max={100}
              />
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <label className="block text-sm text-slate-400 mb-2">Avg Commission Rate (Auto)</label>
                <div className="text-xl font-bold text-[#c9a227]">
                  {(assumptions.baseCommission + (assumptions.noShareBonus * assumptions.noShareRate / 100)).toFixed(1)}%
                </div>
                <span className="text-xs text-slate-500">weighted average</span>
              </div>
            </div>
          </div>

          {/* Stream 2: Promoted Sales */}
          <div>
            <h4 className="text-[#c9a227] font-bold mb-3 flex items-center gap-2">
              2️⃣ Promoted Sales (Merchant Ads)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AssumptionInput
                label="Promoted Sales Commission"
                value={assumptions.promotedCommission}
                onChange={(v) => updateAssumption('promotedCommission', v)}
                unit="% of promoted GMV"
                step={0.5}
              />
              <AssumptionInput
                label="% of GMV from Promoted Sales"
                value={assumptions.promotedGmvPct}
                onChange={(v) => updateAssumption('promotedGmvPct', v)}
                unit="% of total GMV"
                step={5}
                max={100}
              />
            </div>
          </div>

          {/* Stream 3: Merchant Subscription */}
          <div>
            <h4 className="text-[#c9a227] font-bold mb-3 flex items-center gap-2">
              3️⃣ Business Subscription (Merchant SaaS)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AssumptionInput
                label="Merchant Subscription (Monthly)"
                value={assumptions.merchantSubPrice}
                onChange={(v) => updateAssumption('merchantSubPrice', v)}
                unit="AED per merchant/month"
                step={50}
              />
              <AssumptionInput
                label="Merchant Subscription Attach Rate"
                value={assumptions.merchantSubAttach}
                onChange={(v) => updateAssumption('merchantSubAttach', v)}
                unit="% of merchants paying"
                step={5}
                max={100}
              />
            </div>
          </div>

          {/* Stream 4: Affiliates */}
          <div>
            <h4 className="text-[#c9a227] font-bold mb-3 flex items-center gap-2">
              4️⃣ Cash Store Affiliates Commission
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AssumptionInput
                label="Affiliate Commission Rate"
                value={assumptions.affiliateCommission}
                onChange={(v) => updateAssumption('affiliateCommission', v)}
                unit="% of affiliate GMV"
                step={0.5}
              />
              <AssumptionInput
                label="% of GMV from Affiliates"
                value={assumptions.affiliateGmvPct}
                onChange={(v) => updateAssumption('affiliateGmvPct', v)}
                unit="% of total GMV"
                step={5}
                max={100}
              />
            </div>
          </div>

          {/* Year 1 FREE Notice */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <p className="text-green-400 font-bold flex items-center gap-2">
              🎁 Year 1 FREE Policy
            </p>
            <p className="text-slate-300 text-sm mt-1">
              Streams 5-7 (User Subscriptions, Finance Revenue, B2B Commission) are FREE for the first 12 months to drive adoption and build loyalty.
            </p>
          </div>

          {/* Streams 5-7 (FREE Year 1) */}
          <div className="opacity-60">
            <h4 className="text-slate-400 font-bold mb-3 flex items-center gap-2">
              5️⃣ User Subscription <span className="text-green-400 text-xs">[FREE YEAR 1]</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AssumptionInput
                label="User Subscription (Monthly)"
                value={assumptions.userSubPrice}
                onChange={(v) => updateAssumption('userSubPrice', v)}
                unit="AED per user/month"
                step={5}
              />
              <AssumptionInput
                label="User Subscription Attach Rate"
                value={assumptions.userSubAttach}
                onChange={(v) => updateAssumption('userSubAttach', v)}
                unit="% of MAU paying"
                step={1}
                max={100}
              />
            </div>
          </div>

          <div className="opacity-60">
            <h4 className="text-slate-400 font-bold mb-3 flex items-center gap-2">
              6️⃣ Finance (BNPL / Lending) <span className="text-green-400 text-xs">[FREE YEAR 1]</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AssumptionInput
                label="Finance Revenue per MAU"
                value={assumptions.financeRevenuePerUser}
                onChange={(v) => updateAssumption('financeRevenuePerUser', v)}
                unit="AED per MAU/month"
                step={1}
              />
              <AssumptionInput
                label="Finance Attach Rate"
                value={assumptions.financeAttach}
                onChange={(v) => updateAssumption('financeAttach', v)}
                unit="% of MAU using finance"
                step={5}
                max={100}
              />
            </div>
          </div>

          <div className="opacity-60">
            <h4 className="text-slate-400 font-bold mb-3 flex items-center gap-2">
              7️⃣ B2B Buying (Bulk Orders) <span className="text-green-400 text-xs">[FREE YEAR 1]</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AssumptionInput
                label="B2B Commission Rate"
                value={assumptions.b2bCommission}
                onChange={(v) => updateAssumption('b2bCommission', v)}
                unit="% of B2B GMV"
                step={0.5}
              />
              <AssumptionInput
                label="% of GMV from B2B"
                value={assumptions.b2bGmvPct}
                onChange={(v) => updateAssumption('b2bGmvPct', v)}
                unit="% of total GMV"
                step={1}
                max={100}
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Budget Allocation */}
      <CollapsibleSection
        title="Budget Allocation & Cost Structure"
        icon={<Wallet size={20} />}
        expanded={expandedSections.budget}
        onToggle={() => toggleSection('budget')}
      >
        <div className="space-y-4">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-4">
            <p className="text-slate-300 text-sm">
              <strong className="text-blue-400">Flexible Budget Formula:</strong> Budget allocation follows your preferences.
              Marketing: 50-60% | Salaries: 20-30% | Tech & Ops: 10-20%
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AssumptionInput
              label="Marketing Budget %"
              value={assumptions.marketingPct}
              onChange={(v) => updateAssumption('marketingPct', v)}
              unit="% of monthly budget"
              step={5}
              max={100}
              highlight="green"
            />
            <AssumptionInput
              label="Salaries/Team Budget %"
              value={assumptions.salaryPct}
              onChange={(v) => updateAssumption('salaryPct', v)}
              unit="% of monthly budget"
              step={5}
              max={100}
              highlight="yellow"
            />
            <AssumptionInput
              label="Tech & Ops Budget %"
              value={assumptions.techOpsPct}
              onChange={(v) => updateAssumption('techOpsPct', v)}
              unit="% of monthly budget"
              step={5}
              max={100}
              highlight="blue"
            />
            <AssumptionInput
              label="Customer Acquisition % of Marketing"
              value={assumptions.customerAcqPct}
              onChange={(v) => updateAssumption('customerAcqPct', v)}
              unit="%"
              step={5}
              max={100}
            />
            <AssumptionInput
              label="Merchant Acquisition % of Marketing"
              value={assumptions.merchantAcqPct}
              onChange={(v) => updateAssumption('merchantAcqPct', v)}
              unit="%"
              step={5}
              max={100}
            />
            <AssumptionInput
              label="Rent (Fixed Monthly)"
              value={assumptions.rentFixed}
              onChange={(v) => updateAssumption('rentFixed', v)}
              unit="AED"
              step={500}
            />
          </div>
        </div>
      </CollapsibleSection>

      {/* Merchant Metrics */}
      <CollapsibleSection
        title="Merchant Metrics"
        icon={<Store size={20} />}
        expanded={expandedSections.merchant}
        onToggle={() => toggleSection('merchant')}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AssumptionInput
            label="Merchant Churn Rate"
            value={assumptions.merchantChurn}
            onChange={(v) => updateAssumption('merchantChurn', v)}
            unit="% monthly"
            step={1}
            max={100}
          />
          <AssumptionInput
            label="CAM (Merchant Acquisition Cost)"
            value={assumptions.cam}
            onChange={(v) => updateAssumption('cam', v)}
            unit="AED per merchant"
            step={100}
          />
        </div>
      </CollapsibleSection>

      {/* Funding */}
      <CollapsibleSection
        title="Initial Funding & Cash"
        icon={<Banknote size={20} />}
        expanded={expandedSections.funding}
        onToggle={() => toggleSection('funding')}
      >
        <div className="space-y-4">
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-4">
            <p className="text-green-400 font-bold">Tranched Funding Structure</p>
            <p className="text-slate-300 text-sm mt-1">
              <strong>Tranche 1:</strong> $200K (AED 734K) - Immediately upon funding<br />
              <strong>Tranche 2:</strong> $200K (AED 734K) - Upon milestones: 500 live merchants, 25,000 MAU, CTO hired<br />
              <strong>Total Ask:</strong> $400K at $5M valuation cap (SAFE with 20% discount)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AssumptionInput
              label="Tranche 1 Budget (Starting Cash)"
              value={assumptions.initialBudget}
              onChange={(v) => updateAssumption('initialBudget', v)}
              unit="AED ($200K USD @ 3.67 rate)"
              step={10000}
              highlight="green"
            />
            <AssumptionInput
              label="Target Runway"
              value={assumptions.runwayMonths}
              onChange={(v) => updateAssumption('runwayMonths', v)}
              unit="months"
              step={1}
              min={1}
            />
          </div>

          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <label className="block text-sm text-slate-400 mb-2">Fixed Monthly Budget (Auto-Calculated)</label>
            <div className="text-xl font-bold text-white">
              AED {(assumptions.initialBudget / assumptions.runwayMonths).toLocaleString()}
            </div>
            <span className="text-xs text-slate-500">= Initial Budget ÷ Target Runway</span>
          </div>
        </div>
      </CollapsibleSection>

      {/* KPI Gates */}
      <CollapsibleSection
        title="KPI-Gated Phase Progression"
        icon={<Target size={20} />}
        expanded={expandedSections.kpiGates}
        onToggle={() => toggleSection('kpiGates')}
      >
        <div className="space-y-6">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <p className="text-blue-400 font-bold">Data-Driven Progression</p>
            <p className="text-slate-300 text-sm mt-1">
              Phases advance when KPI targets are hit, not based on time. Set gates below for H1→H2→H3→Phase2 transitions.
            </p>
          </div>

          {/* H1 → H2 Gate */}
          <div>
            <h4 className="text-[#c9a227] font-bold mb-3">H1 → H2 Gate (Validate Categories)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AssumptionInput
                label="MAU Target for H2"
                value={assumptions.h2GateMau}
                onChange={(v) => updateAssumption('h2GateMau', v)}
                unit="users"
                step={1000}
                highlight="green"
              />
              <AssumptionInput
                label="Merchants Target for H2"
                value={assumptions.h2GateMerchants}
                onChange={(v) => updateAssumption('h2GateMerchants', v)}
                unit="merchants"
                step={10}
                highlight="green"
              />
              <AssumptionInput
                label="GMV Target for H2"
                value={assumptions.h2GateGmv}
                onChange={(v) => updateAssumption('h2GateGmv', v)}
                unit="AED (cumulative)"
                step={1000000}
              />
              <AssumptionInput
                label="LTV:CAC Target for H2"
                value={assumptions.h2GateLtvcac}
                onChange={(v) => updateAssumption('h2GateLtvcac', v)}
                unit="ratio (10x = healthy)"
                step={1}
              />
            </div>
          </div>

          {/* H2 → H3 Gate */}
          <div>
            <h4 className="text-[#c9a227] font-bold mb-3">H2 → H3 Gate (Scale Categories)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AssumptionInput
                label="MAU Target for H3"
                value={assumptions.h3GateMau}
                onChange={(v) => updateAssumption('h3GateMau', v)}
                unit="users"
                step={5000}
              />
              <AssumptionInput
                label="Merchants Target for H3"
                value={assumptions.h3GateMerchants}
                onChange={(v) => updateAssumption('h3GateMerchants', v)}
                unit="merchants"
                step={50}
              />
              <AssumptionInput
                label="GMV Target for H3"
                value={assumptions.h3GateGmv}
                onChange={(v) => updateAssumption('h3GateGmv', v)}
                unit="AED (cumulative)"
                step={5000000}
              />
              <AssumptionInput
                label="D30 Retention Target for H3"
                value={assumptions.h3GateRetention}
                onChange={(v) => updateAssumption('h3GateRetention', v)}
                unit="%"
                step={5}
                max={100}
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
}

// ============================================
// MONTHLY PROJECTIONS TAB
// ============================================
function MonthlyProjectionsTab({ assumptions, phase }: { assumptions: Assumptions; phase: 'h1' | 'h2' | 'h3' }) {
  const data = generateMonthlyData(assumptions, phase);
  const phaseLabel = phase === 'h1' ? 'H1 2026 (Feb-Jun)' : phase === 'h2' ? 'H2 2026 (Jul-Dec)' : 'H3 2027 (Jan-Jun)';

  const totalRevenue = data.reduce((sum, d) => sum + d.revenue, 0);
  const totalGmv = data.reduce((sum, d) => sum + d.gmv, 0);
  const totalCosts = data.reduce((sum, d) => sum + d.costs, 0);
  const totalNet = data.reduce((sum, d) => sum + d.netPL, 0);
  const lastMonth = data[data.length - 1];

  // Chart data
  const revenueData = data.map(d => d.revenue);
  const costsData = data.map(d => d.costs);
  const usersData = data.map(d => d.users);
  const gmvData = data.map(d => d.gmv);
  const monthLabels = data.map(d => d.month.split(' ')[0]);

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label={`${phase.toUpperCase()} Revenue`}
          value={`AED ${(totalRevenue / 1000).toFixed(0)}K`}
          subtext="Total"
          trend={`${data.length} months`}
          trendUp={true}
          color="gold"
        />
        <MetricCard
          label="End Users"
          value={lastMonth.users.toLocaleString()}
          subtext="Total users"
          trend={`${lastMonth.activeUsers.toLocaleString()} active`}
          trendUp={true}
          color="blue"
        />
        <MetricCard
          label="End Merchants"
          value={lastMonth.merchants.toLocaleString()}
          subtext="Live merchants"
          trend="Growing"
          trendUp={true}
          color="purple"
        />
        <MetricCard
          label="Net P&L"
          value={`AED ${(totalNet / 1000).toFixed(0)}K`}
          subtext={totalNet >= 0 ? 'Profit' : 'Loss'}
          trend={totalNet >= 0 ? 'Positive' : 'Negative'}
          trendUp={totalNet >= 0}
          color={totalNet >= 0 ? 'green' : 'gold'}
        />
      </div>

      {/* Visual Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue vs Costs Bar Chart */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="text-[#c9a227]" size={20} />
            Revenue vs Costs
          </h3>
          <div className="space-y-4">
            {data.map((row, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{row.month}</span>
                  <span className={row.netPL >= 0 ? 'text-green-400' : 'text-red-400'}>
                    {row.netPL >= 0 ? '+' : ''}{(row.netPL / 1000).toFixed(0)}K
                  </span>
                </div>
                <div className="flex gap-1 h-6">
                  <div
                    className="bg-gradient-to-r from-green-500 to-green-400 rounded-l"
                    style={{ width: `${(row.revenue / Math.max(...data.map(d => Math.max(d.revenue, d.costs)))) * 100}%` }}
                  />
                  <div
                    className="bg-gradient-to-r from-red-500 to-red-400 rounded-r"
                    style={{ width: `${(row.costs / Math.max(...data.map(d => Math.max(d.revenue, d.costs)))) * 100}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="flex gap-4 text-xs mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded" />
                <span className="text-slate-400">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded" />
                <span className="text-slate-400">Costs</span>
              </div>
            </div>
          </div>
        </div>

        {/* User & GMV Growth */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="text-blue-400" size={20} />
            Growth Metrics
          </h3>
          <LineChart2
            data={usersData}
            labels={monthLabels}
            color="#3b82f6"
            height={150}
            title="User Growth"
          />
          <div className="mt-4">
            <LineChart2
              data={gmvData}
              labels={monthLabels}
              color="#22c55e"
              height={100}
              title="GMV Growth"
            />
          </div>
        </div>
      </div>

      {/* Monthly Table */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Calendar className="text-[#c9a227]" size={20} />
          {phaseLabel} Monthly Projections
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-3 px-3 text-slate-400 font-semibold">Month</th>
                <th className="text-right py-3 px-3 text-slate-400 font-semibold">Users</th>
                <th className="text-right py-3 px-3 text-slate-400 font-semibold">Active</th>
                <th className="text-right py-3 px-3 text-slate-400 font-semibold">Merchants</th>
                <th className="text-right py-3 px-3 text-slate-400 font-semibold">GMV</th>
                <th className="text-right py-3 px-3 text-slate-400 font-semibold">Revenue</th>
                <th className="text-right py-3 px-3 text-slate-400 font-semibold">Costs</th>
                <th className="text-right py-3 px-3 text-slate-400 font-semibold">Net P&L</th>
                <th className="text-right py-3 px-3 text-slate-400 font-semibold">Cash</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {data.map((row, idx) => (
                <tr key={idx} className={row.netPL >= 0 ? 'bg-green-500/5' : ''}>
                  <td className="py-3 px-3 text-white font-medium">{row.month}</td>
                  <td className="py-3 px-3 text-right text-slate-300">{row.users.toLocaleString()}</td>
                  <td className="py-3 px-3 text-right text-slate-300">{row.activeUsers.toLocaleString()}</td>
                  <td className="py-3 px-3 text-right text-slate-300">{row.merchants}</td>
                  <td className="py-3 px-3 text-right text-slate-300">AED {(row.gmv / 1000).toFixed(0)}K</td>
                  <td className="py-3 px-3 text-right text-green-400">AED {(row.revenue / 1000).toFixed(0)}K</td>
                  <td className="py-3 px-3 text-right text-red-400">AED {(row.costs / 1000).toFixed(0)}K</td>
                  <td className={`py-3 px-3 text-right font-bold ${row.netPL >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    AED {(row.netPL / 1000).toFixed(0)}K
                  </td>
                  <td className="py-3 px-3 text-right text-white">AED {(row.cash / 1000).toFixed(0)}K</td>
                </tr>
              ))}
              <tr className="bg-[#c9a227]/10">
                <td className="py-3 px-3 text-[#c9a227] font-bold">TOTAL</td>
                <td className="py-3 px-3 text-right text-white font-bold">{lastMonth.users.toLocaleString()}</td>
                <td className="py-3 px-3 text-right text-white font-bold">{lastMonth.activeUsers.toLocaleString()}</td>
                <td className="py-3 px-3 text-right text-white font-bold">{lastMonth.merchants}</td>
                <td className="py-3 px-3 text-right text-white font-bold">AED {(totalGmv / 1000000).toFixed(1)}M</td>
                <td className="py-3 px-3 text-right text-green-400 font-bold">AED {(totalRevenue / 1000).toFixed(0)}K</td>
                <td className="py-3 px-3 text-right text-red-400 font-bold">AED {(totalCosts / 1000).toFixed(0)}K</td>
                <td className={`py-3 px-3 text-right font-bold ${totalNet >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  AED {(totalNet / 1000).toFixed(0)}K
                </td>
                <td className="py-3 px-3 text-right text-white font-bold">AED {(lastMonth.cash / 1000).toFixed(0)}K</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============================================
// CASH FLOW TAB
// ============================================
function CashFlowTab({ assumptions }: { assumptions: Assumptions }) {
  const h1Data = generateMonthlyData(assumptions, 'h1');
  const h2Data = generateMonthlyData(assumptions, 'h2');
  const allData = [...h1Data, ...h2Data];

  const lowestCash = Math.min(...allData.map(d => d.cash));
  const runwayMonths = allData.filter(d => d.cash > 0).length;
  const breakEvenMonth = allData.findIndex(d => d.netPL >= 0);

  return (
    <div className="space-y-8">
      {/* Cash Alerts */}
      <div className="space-y-3">
        {lowestCash < 100000 && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
            <p className="text-red-400 font-bold flex items-center gap-2">
              <AlertCircle size={18} />
              Low Cash Warning
            </p>
            <p className="text-slate-300 text-sm mt-1">
              Cash position drops to AED {(lowestCash / 1000).toFixed(0)}K. Consider reducing burn or raising additional funding.
            </p>
          </div>
        )}

        <div className={`rounded-xl p-4 ${runwayMonths >= 10 ? 'bg-green-500/10 border-green-500/30' : 'bg-yellow-500/10 border-yellow-500/30'} border`}>
          <p className={`font-bold flex items-center gap-2 ${runwayMonths >= 10 ? 'text-green-400' : 'text-yellow-400'}`}>
            <Clock size={18} />
            Runway: {runwayMonths} months
          </p>
          <p className="text-slate-300 text-sm mt-1">
            {breakEvenMonth >= 0 ? `Break-even expected in Month ${breakEvenMonth + 1}` : 'Break-even not achieved in projection period'}
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label="Starting Cash"
          value={`AED ${(assumptions.initialBudget / 1000).toFixed(0)}K`}
          subtext="Tranche 1"
          trend="$200K USD"
          trendUp={true}
          color="green"
        />
        <MetricCard
          label="Monthly Burn"
          value={`AED ${(assumptions.initialBudget / assumptions.runwayMonths / 1000).toFixed(0)}K`}
          subtext="Average"
          trend={`${assumptions.runwayMonths}mo runway`}
          trendUp={false}
          color="gold"
        />
        <MetricCard
          label="Lowest Cash"
          value={`AED ${(lowestCash / 1000).toFixed(0)}K`}
          subtext="In projection"
          trend={lowestCash > 0 ? 'Positive' : 'Negative'}
          trendUp={lowestCash > 0}
          color={lowestCash > 100000 ? 'green' : 'gold'}
        />
        <MetricCard
          label="Break-even"
          value={breakEvenMonth >= 0 ? `Month ${breakEvenMonth + 1}` : 'N/A'}
          subtext="First profitable month"
          trend={breakEvenMonth >= 0 ? 'Achieved' : 'Pending'}
          trendUp={breakEvenMonth >= 0}
          color={breakEvenMonth >= 0 ? 'green' : 'purple'}
        />
      </div>

      {/* Cash Flow Visualization */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Cash Position Chart */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <LineChart className="text-[#c9a227]" size={20} />
            Cash Position Over Time
          </h3>
          <LineChart2
            data={allData.slice(0, 10).map(d => d.cash)}
            labels={allData.slice(0, 10).map(d => d.month.split(' ')[0])}
            color={lowestCash > 100000 ? '#22c55e' : '#ef4444'}
            height={180}
          />
        </div>

        {/* Net Cash Flow Chart */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Activity className="text-green-400" size={20} />
            Monthly Net Cash Flow
          </h3>
          <div className="space-y-3">
            {allData.slice(0, 10).map((row, idx) => {
              const maxFlow = Math.max(...allData.slice(0, 10).map(d => Math.abs(d.netPL)));
              const percentage = (Math.abs(row.netPL) / maxFlow) * 100;

              return (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-xs text-slate-400 w-12">{row.month.split(' ')[0]}</span>
                  <div className="flex-1 flex items-center">
                    {row.netPL < 0 ? (
                      <>
                        <div className="flex-1" />
                        <div
                          className="h-4 bg-gradient-to-l from-red-500 to-red-400 rounded-l"
                          style={{ width: `${percentage / 2}%` }}
                        />
                        <div className="w-px h-6 bg-white/30" />
                        <div className="flex-1" />
                      </>
                    ) : (
                      <>
                        <div className="flex-1" />
                        <div className="w-px h-6 bg-white/30" />
                        <div
                          className="h-4 bg-gradient-to-r from-green-500 to-green-400 rounded-r"
                          style={{ width: `${percentage / 2}%` }}
                        />
                        <div className="flex-1" />
                      </>
                    )}
                  </div>
                  <span className={`text-xs font-bold w-16 text-right ${row.netPL >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {(row.netPL / 1000).toFixed(0)}K
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cash Flow Table */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Wallet className="text-[#c9a227]" size={20} />
          Monthly Cash Flow
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-3 px-3 text-slate-400 font-semibold">Month</th>
                <th className="text-right py-3 px-3 text-slate-400 font-semibold">Inflows</th>
                <th className="text-right py-3 px-3 text-slate-400 font-semibold">Outflows</th>
                <th className="text-right py-3 px-3 text-slate-400 font-semibold">Net Flow</th>
                <th className="text-right py-3 px-3 text-slate-400 font-semibold">Ending Cash</th>
                <th className="text-right py-3 px-3 text-slate-400 font-semibold">Runway Left</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {allData.slice(0, 10).map((row, idx) => {
                const remainingMonths = Math.max(0, Math.floor(row.cash / row.costs));
                return (
                  <tr key={idx} className={row.cash < 100000 ? 'bg-red-500/10' : ''}>
                    <td className="py-3 px-3 text-white font-medium">{row.month}</td>
                    <td className="py-3 px-3 text-right text-green-400">AED {(row.revenue / 1000).toFixed(0)}K</td>
                    <td className="py-3 px-3 text-right text-red-400">AED {(row.costs / 1000).toFixed(0)}K</td>
                    <td className={`py-3 px-3 text-right font-bold ${row.netPL >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      AED {(row.netPL / 1000).toFixed(0)}K
                    </td>
                    <td className="py-3 px-3 text-right text-white font-bold">AED {(row.cash / 1000).toFixed(0)}K</td>
                    <td className={`py-3 px-3 text-right ${remainingMonths > 3 ? 'text-green-400' : 'text-yellow-400'}`}>
                      {remainingMonths} mo
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============================================
// P&L TAB
// ============================================
function PLTab({ assumptions, metrics }: { assumptions: Assumptions; metrics: ReturnType<typeof calculateMetrics> }) {
  const h1Data = generateMonthlyData(assumptions, 'h1');
  const h2Data = generateMonthlyData(assumptions, 'h2');

  const h1Revenue = h1Data.reduce((sum, d) => sum + d.revenue, 0);
  const h1Costs = h1Data.reduce((sum, d) => sum + d.costs, 0);
  const h2Revenue = h2Data.reduce((sum, d) => sum + d.revenue, 0);
  const h2Costs = h2Data.reduce((sum, d) => sum + d.costs, 0);

  const yearRevenue = h1Revenue + h2Revenue;
  const yearCosts = h1Costs + h2Costs;
  const yearProfit = yearRevenue - yearCosts;

  return (
    <div className="space-y-8">
      {/* P&L Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label="Year 1 Revenue"
          value={`AED ${(yearRevenue / 1000000).toFixed(2)}M`}
          subtext="Total"
          trend="Growing"
          trendUp={true}
          color="green"
        />
        <MetricCard
          label="Year 1 Costs"
          value={`AED ${(yearCosts / 1000000).toFixed(2)}M`}
          subtext="Total"
          trend="Controlled"
          trendUp={false}
          color="gold"
        />
        <MetricCard
          label="Year 1 Net"
          value={`AED ${(yearProfit / 1000000).toFixed(2)}M`}
          subtext={yearProfit >= 0 ? 'Profit' : 'Loss'}
          trend={yearProfit >= 0 ? 'Positive' : 'Negative'}
          trendUp={yearProfit >= 0}
          color={yearProfit >= 0 ? 'green' : 'purple'}
        />
        <MetricCard
          label="Net Margin"
          value={`${((yearProfit / yearRevenue) * 100).toFixed(0)}%`}
          subtext="Revenue efficiency"
          trend={yearProfit >= 0 ? 'Healthy' : 'Improving'}
          trendUp={yearProfit >= 0}
          color="blue"
        />
      </div>

      {/* P&L Statement */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <DollarSign className="text-[#c9a227]" size={20} />
          Income Statement (Year 1)
        </h3>

        <div className="space-y-4">
          {/* Revenue Section */}
          <div className="border-b border-white/10 pb-4">
            <h4 className="text-[#c9a227] font-bold mb-3">Revenue</h4>
            <div className="space-y-2 text-sm">
              <PLRow label="Commission Revenue" h1={h1Revenue * 0.7} h2={h2Revenue * 0.7} />
              <PLRow label="Promoted Sales" h1={h1Revenue * 0.2} h2={h2Revenue * 0.2} />
              <PLRow label="Merchant Subscriptions" h1={h1Revenue * 0.05} h2={h2Revenue * 0.05} />
              <PLRow label="Affiliate Revenue" h1={h1Revenue * 0.05} h2={h2Revenue * 0.05} />
              <PLRow label="Total Revenue" h1={h1Revenue} h2={h2Revenue} isTotal />
            </div>
          </div>

          {/* Costs Section */}
          <div className="border-b border-white/10 pb-4">
            <h4 className="text-[#c9a227] font-bold mb-3">Operating Expenses</h4>
            <div className="space-y-2 text-sm">
              <PLRow label="Marketing & Acquisition" h1={h1Costs * (assumptions.marketingPct / 100)} h2={h2Costs * (assumptions.marketingPct / 100)} isExpense />
              <PLRow label="Salaries & Team" h1={h1Costs * (assumptions.salaryPct / 100)} h2={h2Costs * (assumptions.salaryPct / 100)} isExpense />
              <PLRow label="Tech & Operations" h1={h1Costs * (assumptions.techOpsPct / 100)} h2={h2Costs * (assumptions.techOpsPct / 100)} isExpense />
              <PLRow label="Total Expenses" h1={h1Costs} h2={h2Costs} isTotal isExpense />
            </div>
          </div>

          {/* Net Income */}
          <div>
            <div className="space-y-2 text-sm">
              <PLRow label="Net Income" h1={h1Revenue - h1Costs} h2={h2Revenue - h2Costs} isTotal isProfit />
              <PLRow label="Net Margin" h1={(((h1Revenue - h1Costs) / h1Revenue) * 100)} h2={(((h2Revenue - h2Costs) / h2Revenue) * 100)} isPercentage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PLRow({
  label,
  h1,
  h2,
  isTotal = false,
  isExpense = false,
  isProfit = false,
  isPercentage = false,
}: {
  label: string;
  h1: number;
  h2: number;
  isTotal?: boolean;
  isExpense?: boolean;
  isProfit?: boolean;
  isPercentage?: boolean;
}) {
  const total = h1 + h2;
  const textColor = isProfit
    ? total >= 0 ? 'text-green-400' : 'text-red-400'
    : isExpense ? 'text-red-400' : 'text-green-400';

  return (
    <div className={`flex justify-between items-center ${isTotal ? 'font-bold border-t border-white/10 pt-2 mt-2' : ''}`}>
      <span className={isTotal ? 'text-white' : 'text-slate-400'}>{label}</span>
      <div className="flex gap-8">
        <span className={`w-24 text-right ${textColor}`}>
          {isPercentage ? `${h1.toFixed(0)}%` : `AED ${(h1 / 1000).toFixed(0)}K`}
        </span>
        <span className={`w-24 text-right ${textColor}`}>
          {isPercentage ? `${h2.toFixed(0)}%` : `AED ${(h2 / 1000).toFixed(0)}K`}
        </span>
        <span className={`w-24 text-right font-bold ${textColor}`}>
          {isPercentage ? `${((h1 + h2) / 2).toFixed(0)}%` : `AED ${(total / 1000).toFixed(0)}K`}
        </span>
      </div>
    </div>
  );
}

// ============================================
// SENSITIVITY TAB
// ============================================
function SensitivityTab({ assumptions }: { assumptions: Assumptions }) {
  const baseMetrics = calculateMetrics(assumptions);
  const baseH1 = generateMonthlyData(assumptions, 'h1');
  const baseRevenue = baseH1.reduce((sum, d) => sum + d.revenue, 0);

  const scenarios = [
    { variable: 'CAC (AED)', baseValue: assumptions.cac, changes: [-20, -10, 0, 10, 20] },
    { variable: 'AOV (AED)', baseValue: assumptions.aov, changes: [-20, -10, 0, 10, 20] },
    { variable: 'Frequency', baseValue: assumptions.frequency, changes: [-20, -10, 0, 10, 20] },
    { variable: 'User Churn (%)', baseValue: assumptions.userChurn, changes: [-20, -10, 0, 10, 20] },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
        <p className="text-blue-400 font-bold flex items-center gap-2">
          <RefreshCw size={18} />
          Sensitivity Analysis
        </p>
        <p className="text-slate-300 text-sm mt-1">
          How key assumptions impact H1 revenue. Base case: AED {(baseRevenue / 1000).toFixed(0)}K
        </p>
      </div>

      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Revenue Impact by Variable Change</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-3 px-4 text-slate-400">Variable</th>
                <th className="text-center py-3 px-4 text-red-400">-20%</th>
                <th className="text-center py-3 px-4 text-yellow-400">-10%</th>
                <th className="text-center py-3 px-4 text-green-400">Base</th>
                <th className="text-center py-3 px-4 text-blue-400">+10%</th>
                <th className="text-center py-3 px-4 text-purple-400">+20%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {scenarios.map((scenario, idx) => (
                <tr key={idx}>
                  <td className="py-3 px-4 text-white">{scenario.variable} ({scenario.baseValue})</td>
                  {scenario.changes.map((change, changeIdx) => {
                    const factor = 1 + change / 100;
                    // Simplified impact calculation
                    const impactFactor = scenario.variable.includes('Churn') ? 1 / factor : factor;
                    const impactedRevenue = baseRevenue * impactFactor;
                    const changeColor = change < 0 ? 'text-red-400' : change > 0 ? 'text-blue-400' : 'text-green-400';

                    return (
                      <td key={changeIdx} className={`py-3 px-4 text-center ${change === 0 ? 'bg-green-500/10 font-bold text-green-400' : changeColor}`}>
                        AED {(impactedRevenue / 1000).toFixed(0)}K
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Visual Scenario Comparison */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <BarChart3 className="text-[#c9a227]" size={20} />
          Scenario Comparison
        </h3>
        <div className="space-y-6">
          {/* Worst Case */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-red-400 font-bold">Worst Case (-20%)</span>
              <span className="text-white">AED {(baseRevenue * 0.64 / 1000).toFixed(0)}K</span>
            </div>
            <div className="h-8 bg-white/5 rounded-lg overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-lg transition-all duration-1000"
                style={{ width: '64%' }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-xs text-white font-bold">
                64% of base
              </div>
            </div>
          </div>

          {/* Conservative */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-yellow-400 font-bold">Conservative (-10%)</span>
              <span className="text-white">AED {(baseRevenue * 0.81 / 1000).toFixed(0)}K</span>
            </div>
            <div className="h-8 bg-white/5 rounded-lg overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg transition-all duration-1000"
                style={{ width: '81%' }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-xs text-white font-bold">
                81% of base
              </div>
            </div>
          </div>

          {/* Base Case */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-[#c9a227] font-bold">Base Case</span>
              <span className="text-white">AED {(baseRevenue / 1000).toFixed(0)}K</span>
            </div>
            <div className="h-8 bg-white/5 rounded-lg overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-[#c9a227] to-[#e8c547] rounded-lg transition-all duration-1000"
                style={{ width: '100%' }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-xs text-[#0a1628] font-bold">
                100% baseline
              </div>
            </div>
          </div>

          {/* Optimistic */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-blue-400 font-bold">Optimistic (+10%)</span>
              <span className="text-white">AED {(baseRevenue * 1.21 / 1000).toFixed(0)}K</span>
            </div>
            <div className="h-8 bg-white/5 rounded-lg overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg transition-all duration-1000"
                style={{ width: '100%' }}
              />
              <div className="absolute right-2 inset-y-0 flex items-center text-xs text-white font-bold">
                +21%
              </div>
            </div>
          </div>

          {/* Best Case */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-green-400 font-bold">Best Case (+20%)</span>
              <span className="text-white">AED {(baseRevenue * 1.44 / 1000).toFixed(0)}K</span>
            </div>
            <div className="h-8 bg-white/5 rounded-lg overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-lg transition-all duration-1000"
                style={{ width: '100%' }}
              />
              <div className="absolute right-2 inset-y-0 flex items-center text-xs text-white font-bold">
                +44%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scenario Cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="p-6 bg-red-500/10 rounded-xl border border-red-500/30">
          <div className="flex items-center gap-2 mb-3">
            <TrendingDown className="text-red-400" size={20} />
            <p className="text-red-400 font-bold">Worst Case</p>
          </div>
          <p className="text-3xl font-bold text-white">AED {(baseRevenue * 0.64 / 1000).toFixed(0)}K</p>
          <p className="text-slate-400 text-sm mt-2">-36% from base</p>
          <div className="mt-4">
            <Sparkline data={[100, 85, 70, 60, 64]} color="#ef4444" />
          </div>
        </div>
        <div className="p-6 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30">
          <div className="flex items-center gap-2 mb-3">
            <Target className="text-[#c9a227]" size={20} />
            <p className="text-[#c9a227] font-bold">Base Case</p>
          </div>
          <p className="text-3xl font-bold text-white">AED {(baseRevenue / 1000).toFixed(0)}K</p>
          <p className="text-slate-400 text-sm mt-2">Target scenario</p>
          <div className="mt-4">
            <Sparkline data={[20, 40, 60, 80, 100]} color="#c9a227" />
          </div>
        </div>
        <div className="p-6 bg-green-500/10 rounded-xl border border-green-500/30">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="text-green-400" size={20} />
            <p className="text-green-400 font-bold">Best Case</p>
          </div>
          <p className="text-3xl font-bold text-white">AED {(baseRevenue * 1.44 / 1000).toFixed(0)}K</p>
          <p className="text-slate-400 text-sm mt-2">+44% from base</p>
          <div className="mt-4">
            <Sparkline data={[20, 50, 80, 110, 144]} color="#22c55e" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// REUSABLE COMPONENTS
// ============================================

function KPICard({
  label,
  value,
  subtext,
  status,
}: {
  label: string;
  value: string;
  subtext: string;
  status: 'success' | 'warning' | 'danger' | 'neutral';
}) {
  const statusClasses = {
    success: 'border-green-500/30 bg-gradient-to-br from-green-500/10 to-green-500/5',
    warning: 'border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-yellow-500/5',
    danger: 'border-red-500/30 bg-gradient-to-br from-red-500/10 to-red-500/5',
    neutral: 'border-white/10 bg-white/5',
  };

  const valueColors = {
    success: 'text-green-400',
    warning: 'text-yellow-400',
    danger: 'text-red-400',
    neutral: 'text-white',
  };

  return (
    <div className={`p-4 rounded-xl border ${statusClasses[status]}`}>
      <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">{label}</p>
      <p className={`text-2xl font-bold ${valueColors[status]} mb-1`}>{value}</p>
      <p className="text-slate-500 text-xs">{subtext}</p>
    </div>
  );
}

function MetricCard({
  label,
  value,
  subtext,
  trend,
  trendUp,
  color = 'gold'
}: {
  label: string;
  value: string;
  subtext: string;
  trend: string;
  trendUp: boolean;
  color?: 'gold' | 'blue' | 'green' | 'purple';
}) {
  const colorClasses = {
    gold: 'from-[#c9a227]/20 to-[#c9a227]/5 border-[#c9a227]/30',
    blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/30',
    green: 'from-green-500/20 to-green-500/5 border-green-500/30',
    purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/30',
  };

  const valueColors = {
    gold: 'text-[#c9a227]',
    blue: 'text-blue-400',
    green: 'text-green-400',
    purple: 'text-purple-400',
  };

  return (
    <div className={`p-4 rounded-xl bg-gradient-to-br ${colorClasses[color]} border`}>
      <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">{label}</p>
      <p className={`text-2xl sm:text-3xl font-bold ${valueColors[color]} mb-1`}>{value}</p>
      <p className="text-slate-500 text-xs mb-2">{subtext}</p>
      <div className={`flex items-center gap-1 text-xs ${trendUp ? 'text-green-400' : 'text-red-400'}`}>
        {trendUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
        {trend}
      </div>
    </div>
  );
}

function CollapsibleSection({
  title,
  icon,
  expanded,
  onToggle,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-[#c9a227]/10 to-transparent hover:from-[#c9a227]/20 transition-all"
      >
        <div className="flex items-center gap-3">
          <span className="text-[#c9a227]">{icon}</span>
          <span className="text-lg font-bold text-white">{title}</span>
        </div>
        <ChevronDown
          size={20}
          className={`text-slate-400 transition-transform ${expanded ? 'rotate-180' : ''}`}
        />
      </button>
      {expanded && <div className="px-6 pb-6 pt-2">{children}</div>}
    </div>
  );
}

function AssumptionInput({
  label,
  value,
  onChange,
  unit,
  step = 1,
  min = 0,
  max,
  highlight,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  unit: string;
  step?: number;
  min?: number;
  max?: number;
  highlight?: 'green' | 'yellow' | 'blue';
}) {
  const highlightClasses = {
    green: 'bg-gradient-to-br from-green-500/20 to-green-500/10 border-green-500/30',
    yellow: 'bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 border-yellow-500/30',
    blue: 'bg-gradient-to-br from-blue-500/20 to-blue-500/10 border-blue-500/30',
  };

  return (
    <div className={`p-4 rounded-xl border ${highlight ? highlightClasses[highlight] : 'bg-white/5 border-white/10'}`}>
      <label className="block text-sm text-slate-400 mb-2">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        step={step}
        min={min}
        max={max}
        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white font-bold focus:outline-none focus:border-[#c9a227] transition-colors"
      />
      <span className="text-xs text-slate-500 mt-1 block">{unit}</span>
    </div>
  );
}

function RevenueStreamCard({
  icon,
  name,
  rate,
  description,
  active,
}: {
  icon: React.ReactNode;
  name: string;
  rate: string;
  description: string;
  active: boolean;
}) {
  return (
    <div className={`p-4 rounded-xl border ${active ? 'bg-white/5 border-white/10' : 'bg-white/5 border-white/10 opacity-50'}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className={active ? 'text-[#c9a227]' : 'text-slate-500'}>{icon}</span>
        <span className="text-sm font-bold text-white">{name}</span>
      </div>
      <p className="text-xl font-bold text-[#c9a227]">{rate}</p>
      <p className="text-xs text-slate-400 mt-1">{description}</p>
      {!active && (
        <span className="inline-block mt-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
          FREE Year 1
        </span>
      )}
    </div>
  );
}
