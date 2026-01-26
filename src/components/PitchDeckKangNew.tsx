'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, PieChart, Pie, LineChart, Line, AreaChart, Area, ResponsiveContainer } from 'recharts';
import { SectionHeader, MetricCard, FeatureCard, FlowStep, ComparisonPanel, ChartContainer, IconCard, AnimatedNumber } from './pitch-deck';
import { typography, colors, spacing, decorative } from '@/constants/design-tokens';
import { chartColors, chartTheme, formatCurrency, formatPercentage, formatPieLabel } from '@/constants/chart-config';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import { Search, Lock, CreditCard, DollarSign, Gift, TrendingUp, Store, Handshake, Building2, Megaphone, Users, BarChart3, Globe, Target, ShoppingBag, Ban, Link, Coins, User, CheckCircle2, Sparkles, Package, Calendar, ArrowRight, Briefcase, GraduationCap, Video, Shirt, ShoppingCart, PartyPopper, Trophy, MapPin, Zap, Palette, UserPlus, Repeat, AlertCircle } from 'lucide-react';

interface PitchDeckProps {
  isOpen: boolean;
  onClose: () => void;
}

// ==================== TOOLTIP COMPONENT ====================
function DataPoint({
  value,
  source,
  className = ''
}: {
  value: string;
  source: string;
  className?: string;
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <span
      className={`relative cursor-help inline-flex items-start gap-1 ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onTouchStart={() => setShowTooltip(true)}
      onTouchEnd={() => setTimeout(() => setShowTooltip(false), 3000)}
    >
      <span>{value}</span>
      <span className="text-[0.25em] text-[#c9a227]/70 hover:text-[#c9a227] transition-colors mt-1">ⓘ</span>
      {showTooltip && (
        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-700 whitespace-normal max-w-[200px] sm:max-w-[280px] text-center shadow-lg font-normal">
          <span className="text-[#c9a227] font-medium">Source:</span> {source}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-200" />
        </span>
      )}
    </span>
  );
}

// ==================== MAIN COMPONENT ====================
export default function PitchDeckKangNew({ isOpen, onClose }: PitchDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 27;

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen) return null;

  // ==================== RENDER SLIDE BASED ON INDEX ====================
  const renderSlide = () => {
    switch (currentSlide) {

      // ==================== SLIDE 0: COVER ====================
      case 0:
        return (
          <div className="w-full min-h-screen bg-white relative flex items-center justify-center p-8">
            <div className="max-w-5xl mx-auto text-center space-y-12">

              {/* Logo */}
              <div className="inline-flex items-center justify-center">
                <Image src="/nuqta-logo.png" alt="Nuqta" width={200} height={200} className="object-contain" priority />
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                  Nuqta
                </h1>
                <p className="text-4xl sm:text-5xl font-light text-slate-600">
                  Rewards-Led Commerce Intelligence
                </p>
              </div>

              {/* Subtitle */}
              <p className="text-2xl sm:text-3xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Optimize everyday offline spending —{' '}
                <span className="font-bold text-[#c9a227]">save money, measure ROI, build loyalty</span>
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8">
                <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-10 hover:shadow-xl transition-shadow">
                  <p className="text-6xl font-black text-[#c9a227] mb-3">
                    <AnimatedNumber value={150} prefix="$" suffix="B" duration={2000} />
                  </p>
                  <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">GCC Market TAM</p>
                </div>
                <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-10 hover:shadow-xl transition-shadow">
                  <p className="text-5xl font-black text-slate-900 mb-3">
                    75-85%
                  </p>
                  <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Lower CAC</p>
                </div>
                <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-10 hover:shadow-xl transition-shadow">
                  <p className="text-6xl font-black text-slate-900 mb-3">
                    <AnimatedNumber value={1.4} decimals={1} suffix="M" duration={2000} />
                  </p>
                  <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">UAE Businesses</p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="pt-8">
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-100 border-2 border-emerald-300 rounded-full">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-base font-bold text-emerald-800">Pre-Seed Stage • Dubai, UAE</p>
                </div>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 1: SHOPPER PROBLEM - DASHBOARD STYLE ====================
      case 1:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-red-50/30 to-white py-16 px-8">
            <div className="max-w-7xl mx-auto">

              {/* Header */}
              <div className="mb-12">
                <div className="inline-block px-3 py-1 bg-red-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Problem #1</p>
                </div>
                <h2 className="text-5xl sm:text-6xl font-black text-slate-900 mb-4">
                  Shoppers Waste <span className="text-red-600">AED 2.4B</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl">
                  Every year, UAE shoppers overpay because they can't find local deals
                </p>
              </div>

              {/* Big Stat Card */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-12 mb-10 shadow-2xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-white">
                    <p className="text-lg mb-2 opacity-90">Average Loss Per Shopper/Year</p>
                    <p className="text-8xl font-black tracking-tight">
                      <AnimatedNumber value={684} prefix="AED " duration={2000} />
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white">
                    <p className="text-sm mb-1">Total Market Loss</p>
                    <p className="text-4xl font-black">AED 2.4B</p>
                  </div>
                </div>
              </div>

              {/* 3 Pain Points - Card Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                    <Search className="text-red-600" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Can't Find Deals</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Search "coffee deals near me" — get Google ads, not local offers
                  </p>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-3xl font-black text-red-600">73%</p>
                    <p className="text-sm text-slate-500">Don't know local deals exist</p>
                  </div>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                    <Lock className="text-orange-600" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Gated Rewards</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Points expire, minimum spends, blackout dates — rewards feel impossible
                  </p>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-3xl font-black text-orange-600">AED 450M</p>
                    <p className="text-sm text-slate-500">Unredeemed points/year</p>
                  </div>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                    <CreditCard className="text-yellow-600" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">No Local Cashback</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Credit cards reward Amazon, not the café downstairs
                  </p>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-3xl font-black text-yellow-600">0.5%</p>
                    <p className="text-sm text-slate-500">Avg cashback on local purchases</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 2: MERCHANT PROBLEM - METRICS DASHBOARD ====================
      case 2:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-orange-50/30 to-white py-16 px-8">
            <div className="max-w-7xl mx-auto">

              {/* Header */}
              <div className="mb-12">
                <div className="inline-block px-3 py-1 bg-orange-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-orange-700 uppercase tracking-wider">Problem #2</p>
                </div>
                <h2 className="text-5xl sm:text-6xl font-black text-slate-900 mb-4">
                  Merchants Burn <span className="text-orange-600">AED 12B/Year</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl">
                  High CAC, low retention, razor-thin margins
                </p>
              </div>

              {/* 4 Metric Cards - Horizontal */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                <div className="bg-white border-l-4 border-red-500 rounded-xl p-6 shadow-md">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">CAC</p>
                  <p className="text-4xl font-black text-red-600 mb-1">
                    <AnimatedNumber value={200} prefix="AED " duration={1500} />
                  </p>
                  <p className="text-sm text-slate-600">Digital Ads</p>
                </div>
                <div className="bg-white border-l-4 border-orange-500 rounded-xl p-6 shadow-md">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Repeat Rate</p>
                  <p className="text-4xl font-black text-orange-600 mb-1">
                    <AnimatedNumber value={15} suffix="%" duration={1500} />
                  </p>
                  <p className="text-sm text-slate-600">First 90 days</p>
                </div>
                <div className="bg-white border-l-4 border-yellow-500 rounded-xl p-6 shadow-md">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">LTV:CAC</p>
                  <p className="text-4xl font-black text-yellow-600 mb-1">
                    <AnimatedNumber value={1.2} decimals={1} suffix="x" duration={1500} />
                  </p>
                  <p className="text-sm text-slate-600">vs 3x+ goal</p>
                </div>
                <div className="bg-white border-l-4 border-slate-500 rounded-xl p-6 shadow-md">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Net Margin</p>
                  <p className="text-4xl font-black text-slate-600 mb-1">
                    <AnimatedNumber value={7.5} decimals={1} suffix="%" duration={1500} />
                  </p>
                  <p className="text-sm text-slate-600">vs 25% target</p>
                </div>
              </div>

              {/* 3 Core Problems - Feature Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-8 border-2 border-orange-200 hover:shadow-2xl transition-all">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Megaphone className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Invisible Locally</h3>
                      <p className="text-sm text-slate-600 mt-1">Unknown to neighbors</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-sm text-slate-600">Monthly ad spend</span>
                      <span className="text-lg font-bold text-orange-600">AED 35K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Local awareness</span>
                      <span className="text-lg font-bold text-slate-900">&lt;10%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border-2 border-red-200 hover:shadow-2xl transition-all">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <DollarSign className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">CAC Too High</h3>
                      <p className="text-sm text-slate-600 mt-1">3 purchases to break even</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-sm text-slate-600">Cost per customer</span>
                      <span className="text-lg font-bold text-red-600">AED 200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Avg transaction</span>
                      <span className="text-lg font-bold text-slate-900">AED 85</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border-2 border-yellow-200 hover:shadow-2xl transition-all">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="text-yellow-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">No Retention</h3>
                      <p className="text-sm text-slate-600 mt-1">One-time buyers</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-sm text-slate-600">Repeat rate (90d)</span>
                      <span className="text-lg font-bold text-yellow-600">15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Never return</span>
                      <span className="text-lg font-bold text-slate-900">85%</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 3: MARKET OPPORTUNITY - DATA VISUALIZATION ====================
      case 3:
        return (
          <div className="w-full min-h-screen bg-white py-16 px-8 flex items-center justify-center">
            <div className="max-w-6xl mx-auto">

              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-block px-3 py-1 bg-[#c9a227]/10 rounded-full mb-4">
                  <p className="text-xs font-bold text-[#c9a227] uppercase tracking-wider">Market Size</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  <span className="text-[#c9a227]">$78B</span> Market Opportunity
                </h2>
                <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                  GCC F&B, salon, and fitness market
                </p>
              </div>

              {/* TAM/SAM/SOM Visualization */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT: Recharts Nested Pie Chart */}
                <div className="h-96 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'TAM', value: 78, fill: '#3b82f6' },
                        ]}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        innerRadius={90}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                        animationBegin={0}
                        animationDuration={1000}
                      />
                      <Pie
                        data={[
                          { name: 'SAM', value: 34, fill: '#6366f1' },
                        ]}
                        cx="50%"
                        cy="50%"
                        outerRadius={85}
                        innerRadius={55}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                        animationBegin={200}
                        animationDuration={1000}
                      />
                      <Pie
                        data={[
                          { name: 'SOM', value: 0.34, fill: '#c9a227' },
                        ]}
                        cx="50%"
                        cy="50%"
                        outerRadius={50}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                        animationBegin={400}
                        animationDuration={1000}
                        label={({ name, value }) => `${name}: $${value}${value >= 1 ? 'B' : 'M'}`}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0f172a',
                          border: '2px solid #c9a227',
                          borderRadius: '8px',
                        }}
                        labelStyle={{ color: '#c9a227', fontWeight: 'bold' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* RIGHT: Market Breakdown */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-500 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-slate-900">TAM</h3>
                      <p className="text-3xl font-black text-blue-600">$78B</p>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <DataPoint
                        value="GCC total market across F&B, salons, and fitness"
                        source="GCC Foodservice ($61.55B, Mordor Intelligence 2025), extrapolated salons (~$15B) & fitness (~$2B)"
                      />
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-50 to-white border-l-4 border-indigo-500 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-slate-900">SAM</h3>
                      <p className="text-3xl font-black text-indigo-600">$34B</p>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <DataPoint
                        value="UAE market (initial focus)"
                        source="UAE Foodservice ($23.21B, Mordor Intelligence 2025), Salon Services ($10.05B, Deep Market Insights 2024), Fitness ($0.6B, SPER Research 2025)"
                      />
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#c9a227]/10 to-white border-l-4 border-[#c9a227] rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-slate-900">SOM (1% Target)</h3>
                      <p className="text-3xl font-black text-[#c9a227]">$340M</p>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <DataPoint
                        value="1% penetration of UAE SAM"
                        source="Conservative 1% market capture with 16.8x LTV:CAC economics. At 15% commission: $51M annual revenue potential at maturity"
                      />
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 4: WHY NOW ====================
      case 4:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-8">
            <div className="max-w-6xl mx-auto">

              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">Perfect Timing</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  Why <span className="text-[#c9a227]">Now?</span>
                </h2>
                <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                  Four converging trends make this the perfect moment for Nuqta
                </p>
              </div>

              {/* 4 Timing Factors */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 hover:shadow-2xl transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Search className="text-blue-600" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Search-First Shopping</h3>
                      <p className="text-sm text-[#c9a227] font-semibold">UAE Trend Shift</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4 text-lg">
                    67% of UAE shoppers now start product research with search engines, not brand websites or apps
                  </p>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500">Google Trends UAE 2024 • Euromonitor Consumer Survey</p>
                  </div>
                </div>

                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-8 hover:shadow-2xl transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="text-emerald-600" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Shop Local Movement</h3>
                      <p className="text-sm text-[#c9a227] font-semibold">Post-Pandemic Surge</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4 text-lg">
                    83% of UAE residents prefer supporting local businesses when given convenient options
                  </p>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500">Dubai Chamber of Commerce 2024</p>
                  </div>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-8 hover:shadow-2xl transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="text-purple-600" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">AI Maturity</h3>
                      <p className="text-sm text-[#c9a227] font-semibold">Tech Enabler</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4 text-lg">
                    LLMs make real-time semantic search + personalized routing finally affordable at scale
                  </p>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500">OpenAI GPT-4 • Claude 3.5 • Vector DB advancements</p>
                  </div>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-2xl p-8 hover:shadow-2xl transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <DollarSign className="text-red-600" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">CAC Crisis</h3>
                      <p className="text-sm text-[#c9a227] font-semibold">Market Pain Point</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4 text-lg">
                    Digital ad costs up 340% since 2020 — merchants desperate for affordable acquisition channels
                  </p>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500">Meta Ads Manager UAE Data • Google Ads Benchmark Report</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 5: SOLUTION OVERVIEW ====================
      case 5:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-[#c9a227]/10 to-white py-16 px-8">
            <div className="max-w-7xl mx-auto">

              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-block px-3 py-1 bg-emerald-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Our Solution</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  Search<span className="text-[#c9a227]">→</span>Save<span className="text-[#c9a227]">→</span>Earn
                </h2>
                <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                  A three-sided marketplace connecting shoppers, merchants, and payment partners
                </p>
              </div>

              {/* 3 Value Props */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">

                {/* FOR SHOPPERS */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-emerald-200">
                  <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                    <Search className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">For Shoppers</h3>
                  <p className="text-lg text-slate-600 mb-2">
                    Search "coffee deals near me" → get instant, verified local offers
                  </p>
                  <p className="text-sm font-semibold text-[#c9a227] mb-6">
                    Target: Students & employees earning {'<'}25K AED/month
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={16} className="text-emerald-600" />
                      </div>
                      <p className="text-sm text-slate-700">Hyper-local deal discovery</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={16} className="text-emerald-600" />
                      </div>
                      <p className="text-sm text-slate-700">5% cashback on social share</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={16} className="text-emerald-600" />
                      </div>
                      <p className="text-sm text-slate-700">10 AED/month subscription</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <p className="text-3xl font-black text-emerald-600">15-30%</p>
                    <p className="text-sm text-slate-600">Avg savings per transaction</p>
                  </div>
                </div>

                {/* FOR MERCHANTS */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#c9a227]/30">
                  <div className="w-16 h-16 bg-[#c9a227] rounded-2xl flex items-center justify-center mb-6">
                    <Store className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">For Merchants</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    Acquire high-intent customers at 75-85% lower CAC than Google Ads
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={16} className="text-[#c9a227]" />
                      </div>
                      <p className="text-sm text-slate-700">Only pay on completed sales</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={16} className="text-[#c9a227]" />
                      </div>
                      <p className="text-sm text-slate-700">Zero upfront marketing cost</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={16} className="text-[#c9a227]" />
                      </div>
                      <p className="text-sm text-slate-700">Built-in loyalty loop</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <p className="text-3xl font-black text-[#c9a227]">AED 30-50</p>
                    <p className="text-sm text-slate-600">CAC vs AED 200 (Google Ads)</p>
                  </div>
                </div>

                {/* FOR PAYMENT PARTNERS */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-200">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <CreditCard className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">For Banks</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    Drive card usage + merchant partnerships without building tech
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={16} className="text-blue-600" />
                      </div>
                      <p className="text-sm text-slate-700">White-label ready platform</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={16} className="text-blue-600" />
                      </div>
                      <p className="text-sm text-slate-700">Increase transaction volume</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={16} className="text-blue-600" />
                      </div>
                      <p className="text-sm text-slate-700">Revenue share model</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <p className="text-3xl font-black text-blue-600">+35%</p>
                    <p className="text-sm text-slate-600">Card usage lift (projected)</p>
                  </div>
                </div>

              </div>

              {/* Bottom CTA */}
              <div className="text-center bg-slate-900 rounded-2xl p-8 text-white">
                <p className="text-2xl font-bold mb-2">
                  One platform. Three revenue streams. Zero customer acquisition cost.
                </p>
                <p className="text-slate-400">Shoppers save → Merchants grow → Banks win</p>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 6: USER JOURNEY - BEFORE ====================
      case 6:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-red-50 to-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Current Experience</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  User Journey <span className="text-red-600">(Before Nuqta)</span>
                </h2>
                <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                  Shoppers waste time searching across fragmented platforms
                </p>
              </div>

              {/* 5 Steps */}
              <div className="relative space-y-6">
                {[
                  { num: 1, title: "Google Search", desc: "Search 'coffee deals near me' → get ads, not local offers", icon: Search, color: "red" },
                  { num: 2, title: "Check Apps", desc: "Open 3-4 different apps (Zomato, Groupon, brand apps)", icon: ShoppingBag, color: "orange" },
                  { num: 3, title: "Compare Manually", desc: "Screenshot deals, compare prices, check distances", icon: BarChart3, color: "yellow" },
                  { num: 4, title: "Limited Options", desc: "Only find deals from big chains, miss local gems", icon: Store, color: "slate" },
                  { num: 5, title: "Give Up", desc: "Too much effort → just pay full price or order online", icon: Ban, color: "red" }
                ].map((step, idx) => {
                  const Icon = step.icon;
                  const borderColor = {
                    red: "border-red-200",
                    orange: "border-orange-200",
                    yellow: "border-yellow-200",
                    slate: "border-slate-200"
                  }[step.color] || "border-slate-200";
                  const iconColor = {
                    red: "text-red-600 bg-red-100",
                    orange: "text-orange-600 bg-orange-100",
                    yellow: "text-yellow-600 bg-yellow-100",
                    slate: "text-slate-600 bg-slate-100"
                  }[step.color] || "text-slate-600 bg-slate-100";

                  return (
                    <div key={idx} className={`relative bg-white border-2 ${borderColor} rounded-2xl p-8 hover:shadow-xl transition-all`}>
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 rounded-xl ${iconColor} flex items-center justify-center`}>
                            <Icon size={32} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold">
                              {step.num}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                          </div>
                          <p className="text-lg text-slate-600 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Stat */}
              <div className="mt-12 bg-red-600 rounded-2xl p-8 text-center text-white">
                <p className="text-5xl font-black mb-2">
                  <AnimatedNumber value={27} duration={1500} /> minutes
                </p>
                <p className="text-xl">Average time wasted per search → still no guarantee of best deal</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 7: USER JOURNEY - AFTER ====================
      case 7:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50 to-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">With Nuqta</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  User Journey <span className="text-emerald-600">(After Nuqta)</span>
                </h2>
                <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                  One search. Instant results. Local deals.
                </p>
              </div>

              {/* 3 Simple Steps */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { num: 1, title: "Search Once", desc: "Type 'coffee deals near me' in Nuqta", icon: Search, result: "Instant results from all local merchants" },
                  { num: 2, title: "Compare & Choose", desc: "See all deals in one view, sorted by distance", icon: CheckCircle2, result: "Save 15-30% instantly" },
                  { num: 3, title: "Claim & Earn", desc: "Claim deal, get cashback on top", icon: Gift, result: "Double rewards (deal + cashback)" }
                ].map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="bg-white border-2 border-emerald-200 rounded-3xl p-8 hover:shadow-2xl transition-all">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center mb-6">
                        <Icon className="text-white" size={32} />
                      </div>
                      <div className="mb-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 text-xl font-black mb-3">
                          {step.num}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-lg text-slate-600 mb-4">{step.desc}</p>
                      </div>
                      <div className="pt-4 border-t-2 border-emerald-100">
                        <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-1">Result</p>
                        <p className="text-base text-slate-700">{step.result}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Stat */}
              <div className="bg-emerald-600 rounded-2xl p-8 text-center text-white">
                <p className="text-5xl font-black mb-2">
                  <AnimatedNumber value={30} duration={1500} /> seconds
                </p>
                <p className="text-xl">From search to claimed deal → 54x faster than traditional search</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 8: PLATFORM DIFFERENTIATION ====================
      case 8:
        return (
          <div className="w-full min-h-screen bg-white py-16 px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-purple-700 uppercase tracking-wider">Differentiation</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  We're <span className="text-[#c9a227]">NOT</span> Another Deal App
                </h2>
              </div>

              {/* Comparison Table */}
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* What We're NOT */}
                <div className="bg-slate-50 border-2 border-slate-300 rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                      <Ban className="text-red-600" size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900">Traditional Platforms</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Show deals from big chains only",
                      "Require merchant onboarding/tech",
                      "Gated rewards (points, min spend)",
                      "Separate payment processing",
                      "No local discovery focus"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-600 text-xl font-bold">×</span>
                        </div>
                        <p className="text-lg text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What We ARE */}
                <div className="bg-gradient-to-br from-[#c9a227]/10 to-white border-2 border-[#c9a227]/30 rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                      <CheckCircle2 className="text-emerald-600" size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900">Nuqta Platform</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Search-first local discovery engine",
                      "Zero merchant tech burden (we handle routing)",
                      "Instant cashback (not points)",
                      "Integrated payment + rewards in one",
                      "Hyper-local AI-powered matching"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle2 className="text-emerald-600" size={16} />
                        </div>
                        <p className="text-lg text-slate-900 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 9: COMPETITIVE LANDSCAPE ====================
      case 9:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-white py-16 px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Competition</p>
                </div>
                <h2 className="text-5xl sm:text-6xl font-black text-slate-900 mb-6">
                  Why Can't <span className="text-red-600">Noon/Careem</span> Do This?
                </h2>
                <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto">
                  We're not competing head-to-head. We're building what they structurally can't.
                </p>
              </div>

              {/* Competitive Matrix */}
              <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-[#c9a227] text-2xl">Nuqta</span>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">Noon</th>
                      <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">Careem</th>
                      <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">Entertainer</th>
                      <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">Google Maps</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "Search-First Discovery",
                        nuqta: true,
                        noon: false,
                        careem: false,
                        entertainer: false,
                        google: true
                      },
                      {
                        feature: "Instant Cashback (Not Points)",
                        nuqta: true,
                        noon: false,
                        careem: false,
                        entertainer: false,
                        google: false
                      },
                      {
                        feature: "Hyper-Local Focus (SMBs)",
                        nuqta: true,
                        noon: false,
                        careem: false,
                        entertainer: true,
                        google: true
                      },
                      {
                        feature: "Zero Merchant Tech Burden",
                        nuqta: true,
                        noon: false,
                        careem: false,
                        entertainer: false,
                        google: true
                      },
                      {
                        feature: "Offline + Online Unified",
                        nuqta: true,
                        noon: false,
                        careem: true,
                        entertainer: true,
                        google: false
                      },
                      {
                        feature: "AI-Powered Personalization",
                        nuqta: true,
                        noon: true,
                        careem: true,
                        entertainer: false,
                        google: true
                      },
                      {
                        feature: "Merchant-Funded Cashback",
                        nuqta: true,
                        noon: false,
                        careem: false,
                        entertainer: true,
                        google: false
                      }
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <td className="px-6 py-4 text-base font-medium text-slate-900">{row.feature}</td>
                        <td className="px-6 py-4 text-center">
                          {row.nuqta ? (
                            <CheckCircle2 className="inline-block text-emerald-600" size={24} />
                          ) : (
                            <span className="inline-block text-red-600 text-2xl font-bold">×</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.noon ? (
                            <CheckCircle2 className="inline-block text-slate-400" size={24} />
                          ) : (
                            <span className="inline-block text-slate-300 text-2xl font-bold">×</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.careem ? (
                            <CheckCircle2 className="inline-block text-slate-400" size={24} />
                          ) : (
                            <span className="inline-block text-slate-300 text-2xl font-bold">×</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.entertainer ? (
                            <CheckCircle2 className="inline-block text-slate-400" size={24} />
                          ) : (
                            <span className="inline-block text-slate-300 text-2xl font-bold">×</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.google ? (
                            <CheckCircle2 className="inline-block text-slate-400" size={24} />
                          ) : (
                            <span className="inline-block text-slate-300 text-2xl font-bold">×</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Why They Can't Compete */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Left: Structural Barriers */}
                <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertCircle className="text-red-600" size={32} />
                    <h3 className="text-2xl font-black text-slate-900">Why They Won't Compete</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-lg font-bold text-slate-900 mb-2">Noon:</p>
                      <p className="text-base text-slate-700">E-commerce marketplace focused on inventory. Can't pivot to search-first discovery without cannibalizing core business.</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900 mb-2">Careem:</p>
                      <p className="text-base text-slate-700">Super app for rides/food delivery. Local discovery isn't core to their logistics-first model. Too many priorities.</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900 mb-2">Entertainer:</p>
                      <p className="text-base text-slate-700">Subscription coupon book (AED 200-400/year). Can't compete with free instant cashback without destroying their business model.</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900 mb-2">Google Maps:</p>
                      <p className="text-base text-slate-700">Navigation tool. No payment integration, no cashback layer, no merchant relationship model. Can't monetize local search in GCC.</p>
                    </div>
                  </div>
                </div>

                {/* Right: Our Unfair Advantages */}
                <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Trophy className="text-emerald-600" size={32} />
                    <h3 className="text-2xl font-black text-slate-900">Our Unfair Advantages</h3>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-base font-bold text-slate-900">100% Focus on Local Discovery</p>
                        <p className="text-sm text-slate-600">We're not distracted by logistics, inventory, or super app sprawl.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-base font-bold text-slate-900">Merchant-Funded Cashback</p>
                        <p className="text-sm text-slate-600">No VC subsidy burns. Sustainable from Day 1.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-base font-bold text-slate-900">Speed to Market</p>
                        <p className="text-sm text-slate-600">We're launching in 7 days. They'd need 12-18 months to pivot.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-base font-bold text-slate-900">Zero Merchant Tech Burden</p>
                        <p className="text-sm text-slate-600">We handle payment routing. Merchants just accept orders.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-base font-bold text-slate-900">Behavioral Moat (Post-PMF)</p>
                        <p className="text-sm text-slate-600">Once we own daily saving habits, we have data they can't replicate.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Callout */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  We're not trying to beat Noon or Careem at their game.
                </p>
                <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto">
                  We're building the <span className="text-[#c9a227] font-bold">search layer for local commerce</span> —
                  something they structurally can't do without destroying their core business.
                  By the time they notice (50K+ users, 35% retention), we'll have the behavioral moat.
                </p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 10: BUSINESS MODEL ====================
      case 10:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-[#c9a227]/10 to-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-[#c9a227]/20 rounded-full mb-4">
                  <p className="text-xs font-bold text-[#c9a227] uppercase tracking-wider">Revenue Model</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  How We <span className="text-[#c9a227]">Make Money</span>
                </h2>
                <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                  Four revenue streams from platform transactions
                </p>
              </div>

              {/* 4 Revenue Sources */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  {
                    title: "Commission on Sales",
                    rate: "5%",
                    desc: "Transaction commission from merchants on completed sales",
                    icon: Store,
                    color: "blue"
                  },
                  {
                    title: "Promoted Sales",
                    rate: "5%",
                    desc: "Additional revenue when merchants promote their listings",
                    icon: TrendingUp,
                    color: "purple"
                  },
                  {
                    title: "Transaction Volume",
                    rate: "FREE",
                    desc: "Free for users during validation phase (Year 1). Monetize via merchant transactions only.",
                    icon: User,
                    color: "emerald"
                  },
                  {
                    title: "Affiliate Commission",
                    rate: "Variable",
                    desc: "Revenue share from bank partnerships and payment partners",
                    icon: Handshake,
                    color: "orange"
                  }
                ].map((stream, idx) => {
                  const Icon = stream.icon;
                  const borderColor = stream.color === "blue" ? "border-blue-200" :
                                      stream.color === "purple" ? "border-purple-200" :
                                      stream.color === "emerald" ? "border-emerald-200" :
                                      "border-orange-200";
                  const iconBg = stream.color === "blue" ? "bg-blue-500" :
                                 stream.color === "purple" ? "bg-purple-500" :
                                 stream.color === "emerald" ? "bg-emerald-500" :
                                 "bg-orange-500";

                  return (
                    <div key={idx} className={`bg-white border-2 ${borderColor} rounded-3xl p-6 hover:shadow-2xl transition-all`}>
                      <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{stream.title}</h3>
                      <p className="text-4xl font-black text-[#c9a227] mb-3">{stream.rate}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{stream.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Example Calculation */}
              <div className="bg-slate-900 rounded-2xl p-10 text-white">
                <h3 className="text-3xl font-bold mb-8 text-center">Example: AED 1,000 Monthly GMV per User</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-sm text-slate-400 mb-2">Base Commission (5%)</p>
                    <p className="text-4xl font-black text-[#c9a227]">AED 50</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-2">Promoted Sales (5%)</p>
                    <p className="text-4xl font-black text-[#c9a227]">AED 50</p>
                  </div>
                  <div className="border-l-2 border-[#c9a227]/30">
                    <p className="text-sm text-slate-400 mb-2">Total Revenue</p>
                    <p className="text-4xl font-black text-white">AED 100+</p>
                  </div>
                </div>
                <div className="mt-8 bg-emerald-900/30 border border-emerald-500/30 rounded-xl p-4">
                  <p className="text-center text-base text-emerald-300 font-semibold">
                    ✅ Free for users during Year 1 validation • Focus on transaction volume, not subscriptions
                  </p>
                </div>
                <p className="text-center text-base text-slate-300 mt-4">
                  + Affiliate commissions from bank partnerships • Users get 5-10% cashback in Nuqta Coins
                </p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 11: NUQTA COIN VS BRAND COIN ====================
      case 11:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-[#c9a227]/10 to-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-[#c9a227]/20 rounded-full mb-4">
                  <p className="text-xs font-bold text-[#c9a227] uppercase tracking-wider">Rewards System</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  Two <span className="text-[#c9a227]">Reward Currencies</span>
                </h2>
                <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                  Nuqta Coin for freedom, Brand Coin for loyalty
                </p>
              </div>

              {/* 2-Column Comparison */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">

                {/* Nuqta Coin */}
                <div className="bg-white border-2 border-[#c9a227]/30 rounded-3xl p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#c9a227] rounded-full flex items-center justify-center">
                      <Coins className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-slate-900">Nuqta Coin</h3>
                      <p className="text-lg text-[#c9a227] font-semibold">Universal Currency</p>
                    </div>
                  </div>

                  <div className="bg-[#c9a227]/5 rounded-2xl p-6 mb-6">
                    <p className="text-4xl font-black text-slate-900 mb-2">1 Coin = 1 AED</p>
                    <p className="text-base text-slate-600">Works across ALL merchants on Nuqta</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="text-xl font-bold text-slate-900">How Users Earn:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#c9a227] mt-1 flex-shrink-0" />
                        <p className="text-base text-slate-700"><strong>5% base</strong> on every purchase</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#c9a227] mt-1 flex-shrink-0" />
                        <p className="text-base text-slate-700"><strong>+5% bonus</strong> when they share on social</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#c9a227] mt-1 flex-shrink-0" />
                        <p className="text-base text-slate-700"><strong>Max 10%</strong> in Nuqta Coins per transaction</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900">How Users Use:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#c9a227] mt-2 flex-shrink-0"></div>
                        <p className="text-base text-slate-700">Pay partially or fully using coins</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#c9a227] mt-2 flex-shrink-0"></div>
                        <p className="text-base text-slate-700">Use across categories (food, fashion, services)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#c9a227] mt-2 flex-shrink-0"></div>
                        <p className="text-base text-slate-700">Combine with card, EMI, or BNPL</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brand Coin */}
                <div className="bg-white border-2 border-blue-200 rounded-3xl p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                      <Store className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-slate-900">Brand Coin</h3>
                      <p className="text-lg text-blue-600 font-semibold">Merchant-Specific</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                    <p className="text-4xl font-black text-slate-900 mb-2">1 Coin = 1 AED</p>
                    <p className="text-base text-slate-600">Only redeemable at the issuing merchant</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="text-xl font-bold text-slate-900">How Users Earn:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-blue-500 mt-1 flex-shrink-0" />
                        <p className="text-base text-slate-700">Merchant loyalty campaigns</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-blue-500 mt-1 flex-shrink-0" />
                        <p className="text-base text-slate-700">Repeat purchase rewards</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-blue-500 mt-1 flex-shrink-0" />
                        <p className="text-base text-slate-700">Example: Buy 3x → 200 Brand Coins</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900">Why It Exists:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <p className="text-base text-slate-700">True loyalty without discounting</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <p className="text-base text-slate-700">Incentivize repeat visits</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <p className="text-base text-slate-700">Lower cost than flat discounts</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Key Insight */}
              <div className="bg-slate-900 rounded-2xl p-10 text-white text-center">
                <p className="text-3xl font-bold mb-4">
                  💡 Smart Rule: <span className="text-[#c9a227]">Nuqta Coin = Freedom</span> • <span className="text-blue-400">Brand Coin = Loyalty</span>
                </p>
                <p className="text-xl text-slate-300">
                  Both AED-backed • Can stack together at checkout • Combines with cash/EMI/BNPL
                </p>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 12: UNIT ECONOMICS ====================
      case 12:
        return (
          <div className="w-full min-h-screen bg-white py-16 px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Unit Economics</p>
                </div>
                <h2 className="text-5xl sm:text-6xl font-black text-slate-900 mb-4">
                  Profitable from <span className="text-emerald-600">Day One</span>
                </h2>
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-6 mb-6">
                  <p className="text-lg sm:text-xl text-white font-medium">
                    "Nuqta is profitable at the transaction level from day one. Growth is limited by execution, not economics."
                  </p>
                </div>
              </div>

              {/* Top-Line Metrics */}
              <div className="grid md:grid-cols-4 gap-6 mb-10">
                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-6 text-center">
                  <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">Avg Transaction</p>
                  <p className="text-4xl font-black text-blue-600 mb-2">AED 100</p>
                  <p className="text-sm text-slate-600">Per user purchase</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-2xl p-6 text-center">
                  <p className="text-xs font-semibold text-purple-700 uppercase tracking-wider mb-2">Net Take Rate</p>
                  <p className="text-4xl font-black text-purple-600 mb-2">~7%</p>
                  <p className="text-sm text-slate-600">Effective commission</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-2xl p-6 text-center">
                  <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">Monthly RPU</p>
                  <p className="text-4xl font-black text-emerald-600 mb-2">AED 42</p>
                  <p className="text-sm text-slate-600">Revenue per user/month</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-2xl p-6 text-center">
                  <p className="text-xs font-semibold text-orange-700 uppercase tracking-wider mb-2">Frequency</p>
                  <p className="text-4xl font-black text-orange-600 mb-2">6x</p>
                  <p className="text-sm text-slate-600">Transactions/month</p>
                </div>
              </div>

              {/* Core Economics */}
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-3xl p-8 text-center hover:shadow-2xl transition-all">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                    <DollarSign size={32} className="text-emerald-600" />
                  </div>
                  <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-3">Blended CAC</p>
                  <p className="text-6xl font-black text-emerald-600 mb-4">
                    <AnimatedNumber value={30} prefix="AED " duration={2000} />
                  </p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• Merchant QR: AED 10-15</p>
                    <p>• Student Ambassadors: AED 25-30</p>
                    <p>• Digital (later): AED 60-80</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-3xl p-8 text-center hover:shadow-2xl transition-all">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <TrendingUp size={32} className="text-blue-600" />
                  </div>
                  <p className="text-sm font-semibold text-blue-700 uppercase tracking-wider mb-3">Annual LTV</p>
                  <p className="text-6xl font-black text-blue-600 mb-4">
                    <AnimatedNumber value={504} prefix="AED " duration={2000} />
                  </p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• Monthly RPU: AED 42</p>
                    <p>• Avg retention: 12 months</p>
                    <p>• Gross margin: ~85%</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#c9a227]/10 to-white border-2 border-[#c9a227]/30 rounded-3xl p-8 text-center hover:shadow-2xl transition-all">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c9a227]/20 mb-4">
                    <Trophy size={32} className="text-[#c9a227]" />
                  </div>
                  <p className="text-sm font-semibold text-[#c9a227] uppercase tracking-wider mb-3">LTV:CAC Ratio</p>
                  <p className="text-6xl font-black text-[#c9a227] mb-4">
                    16.8x
                  </p>
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-3 mt-4">
                    <p className="text-xs font-semibold text-emerald-700 uppercase mb-1">Benchmark</p>
                    <p className="text-sm text-slate-700">Anything above 5x is excellent</p>
                  </div>
                </div>
              </div>

              {/* Revenue Breakdown */}
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-8 mb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Revenue Per AED 100 Transaction</h3>
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="bg-white border-2 border-blue-200 rounded-xl p-5 text-center">
                    <p className="text-xs font-semibold text-blue-700 uppercase mb-2">Merchant Fee (15%)</p>
                    <p className="text-3xl font-black text-blue-600">AED 15</p>
                  </div>
                  <div className="bg-white border-2 border-red-200 rounded-xl p-5 text-center">
                    <p className="text-xs font-semibold text-red-700 uppercase mb-2">User Cashback (5%)</p>
                    <p className="text-3xl font-black text-red-600">-AED 5</p>
                  </div>
                  <div className="bg-white border-2 border-orange-200 rounded-xl p-5 text-center">
                    <p className="text-xs font-semibold text-orange-700 uppercase mb-2">Social Paid (60% share)</p>
                    <p className="text-3xl font-black text-orange-600">-AED 3</p>
                  </div>
                  <div className="bg-white border-2 border-emerald-200 rounded-xl p-5 text-center">
                    <p className="text-xs font-semibold text-emerald-700 uppercase mb-2">Social Retained (40%)</p>
                    <p className="text-3xl font-black text-emerald-600">+AED 2</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#c9a227]/20 to-white border-2 border-[#c9a227] rounded-xl p-5 text-center">
                    <p className="text-xs font-semibold text-[#c9a227] uppercase mb-2">Net Nuqta Revenue</p>
                    <p className="text-3xl font-black text-[#c9a227]">AED 7</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-600">
                    <span className="font-bold text-emerald-600">Why 7% is strong:</span> Amazon takes 8-15%, but we have higher frequency (6x/month vs 2-3x) + subscription revenue.
                  </p>
                </div>
              </div>

              {/* Payback Period */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 mb-10">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="text-center md:text-left">
                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">CAC Payback Period</p>
                    <p className="text-5xl font-black text-white mb-2">&lt;1 Month</p>
                    <p className="text-base text-slate-300">Exceptional for any consumer business</p>
                  </div>
                  <div className="md:col-span-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                    <p className="text-sm font-semibold text-slate-300 uppercase mb-3">Calculation:</p>
                    <div className="space-y-2 text-slate-200">
                      <p>• Monthly RPU: <span className="font-bold text-emerald-400">AED 42</span></p>
                      <p>• Blended CAC: <span className="font-bold text-orange-400">AED 30</span></p>
                      <p>• Payback: <span className="font-bold text-white">AED 30 ÷ AED 42 = 0.71 months (~21 days)</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wallet Float Dynamics (Cash Flow Advantage) */}
              <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 mb-10 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Coins size={24} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white">Wallet Float Dynamics (Cash Flow Advantage)</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <p className="text-lg font-semibold mb-4 text-blue-200">How Wallet Float Works:</p>
                    <p className="text-base text-white/90 leading-relaxed mb-4">
                      Nuqta operates a stored-value wallet. Users earn Nuqta Coins continuously but redeem gradually over 30-45 days.
                      This creates <span className="font-bold text-yellow-300">operational float</span> that improves cash flow efficiency and reduces working capital pressure.
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-4">
                      <p className="text-sm font-semibold text-blue-200 uppercase mb-2">Redemption Behavior (Conservative)</p>
                      <div className="space-y-2 text-sm text-white/80">
                        <p>• 50% redeemed within same month</p>
                        <p>• 30% redeemed after 1-3 months</p>
                        <p>• 20% never redeemed / expire / churn</p>
                      </div>
                    </div>
                    <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-xl p-4">
                      <p className="text-sm font-semibold text-emerald-200 uppercase mb-2">This is NOT revenue (yet)</p>
                      <p className="text-sm text-white/80">Float improves cash flow management. Once we secure a UAE Central Bank Stored Value Facility (SVF) license, we can invest float in treasuries (4-5% yield). But this is Year 2+ upside.</p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl p-6">
                    <p className="text-sm font-bold text-blue-200 uppercase tracking-wider mb-4">Operational Float Held:</p>
                    <div className="space-y-3 text-base">
                      <div className="flex justify-between items-center pb-2 border-b border-white/20">
                        <span className="text-white/80">1,000 users:</span>
                        <span className="font-bold text-white">AED 25-30K</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-white/20">
                        <span className="text-white/80">10,000 users:</span>
                        <span className="font-bold text-yellow-300">AED 250-300K</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-white/20">
                        <span className="text-white/80">100,000 users:</span>
                        <span className="font-bold text-yellow-300">AED 2.5-3M</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 bg-blue-500/20 rounded-lg p-3 mt-4">
                        <span className="text-blue-100 font-bold">Benefit:</span>
                        <span className="font-black text-lg text-white">Cash Flow Buffer</span>
                      </div>
                    </div>
                    <p className="text-xs text-white/60 mt-4 italic">Smooths payouts, reduces burn volatility, lowers working capital needs.</p>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-6">
                  <p className="text-lg font-bold text-white mb-4">Why Float Matters (Even Without Interest Revenue):</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-white/90">
                    <div>
                      <p className="font-semibold text-blue-200 mb-2">✓ Smoother Merchant Payouts</p>
                      <p>We can pay merchants faster (builds trust) without waiting for user redemptions.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-200 mb-2">✓ Reduced Burn Volatility</p>
                      <p>Float absorbs redemption spikes. Less working capital needed month-to-month.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-200 mb-2">✓ Operational Flexibility</p>
                      <p>Cash buffer allows faster decision-making without external financing pressure.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-purple-500/20 border-l-4 border-purple-400 rounded-lg p-4">
                  <p className="text-lg font-bold text-purple-100 mb-2">Future Upside (Post-SVF License):</p>
                  <p className="text-sm text-white/90">
                    Once we secure a UAE Central Bank <span className="font-bold text-yellow-300">Stored Value Facility (SVF) license</span> (Month 6-12, AED 50K fee),
                    we can invest float in UAE treasury bonds (4-5% yield), adding <span className="font-bold text-emerald-300">AED 10-15K annual revenue per AED 250K float</span>.
                    Example: At 100K users (AED 2.5M float), this unlocks <span className="font-bold text-emerald-300">+AED 100-125K/year</span> passive income.
                    But this is <span className="font-bold">bonus</span>, not core business.
                  </p>
                </div>
              </div>

              {/* Why These Economics Are Defensible */}
              <div className="bg-white border-2 border-purple-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Why These Unit Economics Are Defensible</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-slate-900 mb-1">Cashback is Merchant-Funded</p>
                        <p className="text-sm text-slate-600">We never subsidize discounts. Every AED paid to users comes from merchants.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-slate-900 mb-1">Social Sharing Offsets CAC</p>
                        <p className="text-sm text-slate-600">60% of users share, driving viral loops. 40% don't share = margin boost.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-slate-900 mb-1">Habit Loops Improve Retention</p>
                        <p className="text-sm text-slate-600">Daily saving habits = 6 transactions/month (vs 2-3 for competitors).</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-slate-900 mb-1">Offline Transactions = Higher Frequency</p>
                        <p className="text-sm text-slate-600">Local cafes, salons, groceries = daily use cases (not just occasional online purchases).</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-slate-900 mb-1">No Inventory Risk</p>
                        <p className="text-sm text-slate-600">Pure platform play. No stock, no warehouse, no discount burn.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-slate-900 mb-1">No Subsidy-Driven Growth</p>
                        <p className="text-sm text-slate-600">Unlike Noon/Careem early days, we don't burn cash to acquire users.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 bg-gradient-to-r from-emerald-50 to-blue-50 border-l-4 border-emerald-500 rounded-lg p-6 text-center">
                  <p className="text-lg font-bold text-slate-900 mb-2">This is not promo economics. This is infrastructure economics.</p>
                  <p className="text-base text-slate-700">Merchants pay for real value: incremental customers, measurable ROI, zero upfront ad spend.</p>
                </div>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 13: GTM STRATEGY ====================
      case 13:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 to-white py-16 px-8">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-purple-700 uppercase tracking-wider">Go-to-Market Strategy</p>
                </div>
                <h2 className="text-5xl sm:text-6xl font-black text-slate-900 mb-6">
                  Institutional-Grade <span className="text-purple-600">GTM</span>
                </h2>
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 mb-8">
                  <p className="text-lg sm:text-xl text-white font-medium leading-relaxed">
                    "Nuqta scales by first creating daily saving habits, then using merchants as distribution,
                    and finally layering digital growth once unit economics are proven — city by city."
                  </p>
                </div>
              </div>

              {/* GTM Rules */}
              <div className="bg-white border-2 border-purple-200 rounded-2xl p-8 mb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Target size={28} className="text-purple-600" />
                  GTM Rules (Discipline Signals)
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5">
                    <p className="text-sm font-semibold text-purple-700 uppercase tracking-wider mb-2">Rule #1</p>
                    <p className="text-lg font-bold text-slate-900">Only 3 Channels</p>
                    <p className="text-base text-slate-600 mt-2">For first 6 months. No "test everything" mode.</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
                    <p className="text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2">Rule #2</p>
                    <p className="text-lg font-bold text-slate-900">Metrics, Not Vanity</p>
                    <p className="text-base text-slate-600 mt-2">D7/D30 retention &gt; user count. Weekly reviews.</p>
                  </div>
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-5">
                    <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-2">Rule #3</p>
                    <p className="text-lg font-bold text-slate-900">Density Before Breadth</p>
                    <p className="text-base text-slate-600 mt-2">Own Marina/Downtown before expanding cities.</p>
                  </div>
                </div>
              </div>

              {/* Core Growth Engine */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <Zap size={32} className="text-yellow-400" />
                  <h3 className="text-3xl font-black text-white">Core Growth Engine: Habit Loops</h3>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { step: "1", label: "Trigger", desc: "Lunch time (12-2pm)", color: "blue" },
                    { step: "2", label: "Action", desc: "Open Nuqta → Search 'lunch'", color: "purple" },
                    { step: "3", label: "Reward", desc: "5-10% instant cashback", color: "emerald" },
                    { step: "4", label: "Repeat", desc: "Daily 12pm habit formed", color: "yellow" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 text-center">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${
                        item.color === "blue" ? "bg-blue-500" :
                        item.color === "purple" ? "bg-purple-500" :
                        item.color === "emerald" ? "bg-emerald-500" :
                        "bg-yellow-500"
                      } text-white font-black text-xl mb-3`}>
                        {item.step}
                      </div>
                      <p className="text-lg font-bold text-white mb-2">{item.label}</p>
                      <p className="text-sm text-slate-300">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-base text-slate-300">
                    <span className="font-bold text-yellow-400">Goal:</span> Users open Nuqta 8+ times/month within 30 days.
                    This habit is the foundation — everything else amplifies it.
                  </p>
                </div>
              </div>

              {/* 3 Primary Channels */}
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">3 Primary Channels (Months 1-6)</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Channel 1: Merchant QR */}
                  <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 hover:shadow-2xl transition-all">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
                      <Store size={28} className="text-blue-600" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-blue-100 rounded-full mb-3">
                      <p className="text-xs font-bold text-blue-700 uppercase">Primary Channel</p>
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-3">Merchant-Led QR Distribution</h4>
                    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-blue-700 uppercase mb-1">Target CAC</p>
                      <p className="text-3xl font-black text-blue-600">≤ AED 15</p>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <p className="text-sm text-slate-700">Merchants display QR at checkout</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <p className="text-sm text-slate-700">User scans → instant 5-10% cashback</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <p className="text-sm text-slate-700">Target: 50 high-traffic merchants in Marina/Downtown</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Why It Works</p>
                      <p className="text-sm text-slate-700">Merchants become our sales force. Zero paid ads needed.</p>
                    </div>
                  </div>

                  {/* Channel 2: Student Ambassadors */}
                  <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 hover:shadow-2xl transition-all">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 mb-4">
                      <GraduationCap size={28} className="text-purple-600" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-purple-100 rounded-full mb-3">
                      <p className="text-xs font-bold text-purple-700 uppercase">Secondary Channel</p>
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-3">Student Ambassador Program</h4>
                    <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-purple-700 uppercase mb-1">Target CAC</p>
                      <p className="text-3xl font-black text-purple-600">≤ AED 30</p>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <p className="text-sm text-slate-700">10 ambassadors at AUD, UAEU, HCT</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <p className="text-sm text-slate-700">AED 500/month + AED 10 per activated user</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <p className="text-sm text-slate-700">Target: 200 signups/month (50 activate)</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Why It Works</p>
                      <p className="text-sm text-slate-700">Students trust peers. Low-cost, high-quality acquisition.</p>
                    </div>
                  </div>

                  {/* Channel 3: Habit Loops (Retention Focus) */}
                  <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 hover:shadow-2xl transition-all">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 mb-4">
                      <Repeat size={28} className="text-emerald-600" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-emerald-100 rounded-full mb-3">
                      <p className="text-xs font-bold text-emerald-700 uppercase">Retention Foundation</p>
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-3">Daily Saving Habits</h4>
                    <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-emerald-700 uppercase mb-1">Target Retention</p>
                      <p className="text-3xl font-black text-emerald-600">D30 ≥ 25%</p>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <p className="text-sm text-slate-700">Push notifications: "Lunch deals near you"</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <p className="text-sm text-slate-700">7-day streak rewards (extra 2% cashback)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <p className="text-sm text-slate-700">Target: 8+ sessions/month per user</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Why It Works</p>
                      <p className="text-sm text-slate-700">Habits drive LTV. Retention &gt; acquisition at this stage.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Scale (Gated) */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <Lock size={28} className="text-red-600" />
                  <h3 className="text-3xl font-black text-slate-900">Digital Scale (Gated Until Unit Economics Proven)</h3>
                </div>
                <div className="bg-white rounded-xl p-6 mb-6">
                  <p className="text-lg text-slate-700 mb-4">
                    <span className="font-bold text-red-600">Rule:</span> No paid digital ads (Meta, Google, TikTok) until:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-4">
                      <p className="text-sm font-semibold text-emerald-700 uppercase mb-1">Activation</p>
                      <p className="text-2xl font-black text-emerald-600">5,000 MAU</p>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
                      <p className="text-sm font-semibold text-blue-700 uppercase mb-1">Retention</p>
                      <p className="text-2xl font-black text-blue-600">35% Repeat Rate</p>
                    </div>
                    <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4">
                      <p className="text-sm font-semibold text-purple-700 uppercase mb-1">Merchant Health</p>
                      <p className="text-2xl font-black text-purple-600">&lt;5% Churn</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-red-100 border-l-4 border-red-500 rounded-lg p-4">
                  <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-700">
                    <span className="font-bold">Why this discipline matters:</span> Paid ads scale broken products.
                    We prove retention + LTV first, then layer digital to amplify what already works.
                  </p>
                </div>
              </div>

              {/* Key Metrics Dashboard */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">Key Metrics (Weekly Review)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-5 text-center">
                    <TrendingUp size={24} className="text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-blue-700 uppercase mb-1">D7 Retention</p>
                    <p className="text-3xl font-black text-blue-600">≥30%</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-xl p-5 text-center">
                    <Repeat size={24} className="text-purple-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-purple-700 uppercase mb-1">D30 Retention</p>
                    <p className="text-3xl font-black text-purple-600">≥25%</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 rounded-xl p-5 text-center">
                    <DollarSign size={24} className="text-emerald-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-emerald-700 uppercase mb-1">CAC (Blended)</p>
                    <p className="text-3xl font-black text-emerald-600">≤AED 40</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 rounded-xl p-5 text-center">
                    <Zap size={24} className="text-yellow-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-yellow-700 uppercase mb-1">Activation Rate</p>
                    <p className="text-3xl font-black text-yellow-600">≥40%</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-600">
                    <span className="font-bold">Activation = </span>
                    User completes first transaction within 7 days of signup
                  </p>
                </div>
              </div>

              {/* Geographic Strategy */}
              <div className="mt-10 bg-slate-900 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Geographic Expansion Rule</h3>
                <p className="text-lg text-slate-300 max-w-4xl mx-auto">
                  <span className="font-bold text-[#c9a227]">Density before breadth:</span> Own Marina + Downtown Dubai
                  (50 merchants, 5K users, 35% repeat rate) before launching Abu Dhabi. One city at a time, proven economics first.
                </p>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 14: TRACTION ====================
      case 14:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50 to-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Pre-Launch Traction</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  Proof of <span className="text-emerald-600">Demand</span>
                </h2>
                <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                  30 signed LOIs • Launching in 7 days • Capital-efficient validation
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  { label: "Signed LOIs", value: "30", desc: "Merchants with signed agreements", icon: Store, color: "blue" },
                  { label: "Pipeline", value: "50+", desc: "Additional merchants interested", icon: Target, color: "purple" },
                  { label: "Launch", value: "7 Days", desc: "MVP going live", icon: Zap, color: "emerald" },
                  { label: "Bootstrapped", value: "$50K", desc: "Self-funded to date", icon: DollarSign, color: "gold" }
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  const iconBg = stat.color === "blue" ? "bg-blue-100 text-blue-600" :
                                 stat.color === "purple" ? "bg-purple-100 text-purple-600" :
                                 stat.color === "emerald" ? "bg-emerald-100 text-emerald-600" :
                                 "bg-[#c9a227]/10 text-[#c9a227]";

                  return (
                    <div key={idx} className="bg-white border-2 border-slate-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${iconBg} mb-4`}>
                        <Icon size={28} />
                      </div>
                      <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-2">{stat.label}</p>
                      <p className="text-5xl font-black text-slate-900 mb-2">{stat.value}</p>
                      <p className="text-base text-slate-600">{stat.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* LOI Proof Section */}
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 border-2 border-blue-200 rounded-2xl p-8 mb-12">
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={32} className="text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">60+ Merchant Network</h3>
                    <p className="text-lg text-slate-700 mb-4">
                      <span className="font-bold text-emerald-600">30+ signed LOIs</span> with <span className="font-bold text-blue-600">30 more in pipeline</span> across Dubai Marina, Downtown, and JBR. Attacking a <span className="font-bold text-purple-600">$34B UAE market</span> (F&B, salons, fitness). GCC TAM: <span className="font-bold">$78B</span>.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm font-semibold text-slate-600 uppercase mb-1">Signed LOIs</p>
                        <p className="text-2xl font-black text-blue-600">30+</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm font-semibold text-slate-600 uppercase mb-1">Pipeline</p>
                        <p className="text-2xl font-black text-purple-600">30</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm font-semibold text-slate-600 uppercase mb-1">UAE Market (SAM)</p>
                        <p className="text-2xl font-black text-emerald-600">$34B</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Milestones */}
              <div className="bg-white border-2 border-emerald-200 rounded-2xl p-10">
                <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">90-Day Validation Plan</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { milestone: "Week 1-2: SHIP", date: "Launch NOW", tasks: ["5 merchants live", "100 users", "AED 5-10K GMV", "D7 retention ≥30%"] },
                    { milestone: "Month 1-2: PROVE", date: "Validate PMF", tasks: ["300 users", "10 merchants", "AED 20K GMV", "D30 retention ≥20%"] },
                    { milestone: "Month 3: SCALE", date: "Fundraise Ready", tasks: ["500 users", "AED 30K GMV", "CAC ≤AED 50", "Raise $500-750K"] }
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500 text-white text-2xl font-black mb-4">
                        {idx + 1}
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-2">{item.milestone}</h4>
                      <p className="text-sm font-semibold text-emerald-600 mb-4">{item.date}</p>
                      <div className="space-y-2">
                        {item.tasks.map((task, tidx) => (
                          <p key={tidx} className="text-base text-slate-600">• {task}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 15: TEAM ====================
      case 15:
        return (
          <div className="w-full min-h-screen bg-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-[#c9a227]/20 rounded-full mb-4">
                  <p className="text-xs font-bold text-[#c9a227] uppercase tracking-wider">Our Team</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  Built by <span className="text-[#c9a227]">Experts</span>
                </h2>
                <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                  Deep experience in cybersecurity, digital marketing, and D2C commerce
                </p>
              </div>

              {/* Founder */}
              <div className="max-w-2xl mx-auto mb-16">
                <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-3xl p-10 hover:shadow-2xl transition-all">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#c9a227] to-[#a68420] mb-6 mx-auto"></div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2 text-center">Rejaul Karim</h3>
                  <p className="text-xl font-semibold text-[#c9a227] mb-6 text-center">Founder & CEO</p>
                  <div className="space-y-4 text-base text-slate-700 leading-relaxed mb-6">
                    <p>• Ex-CTO & Co-Founder of cybersecurity company</p>
                    <p>• 6+ years in digital marketing & growth</p>
                    <p>• Managed 120+ D2C clients across industries</p>
                    <p>• 2M AED in ad spend managed</p>
                    <p>• Deep expertise in performance marketing, conversion optimization, and customer acquisition</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Cybersecurity", "Digital Marketing", "D2C Commerce", "Growth", "Product Strategy"].map((skill, sidx) => (
                      <span key={sidx} className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Advisors */}
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-10">
                <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Advisors & Supporters</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Fintech Expert", desc: "Former VP at Emirates NBD", icon: Building2 },
                    { title: "Retail Advisor", desc: "15+ years in UAE F&B", icon: Store },
                    { title: "Tech Mentor", desc: "Ex-CTO of MENA startup", icon: Zap }
                  ].map((advisor, idx) => {
                    const Icon = advisor.icon;
                    return (
                      <div key={idx} className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-200 mb-4">
                          <Icon size={32} className="text-slate-600" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{advisor.title}</h4>
                        <p className="text-base text-slate-600">{advisor.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 16: THE ASK ====================
      case 16:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-[#c9a227]/10 to-white py-16 px-8 flex items-center justify-center">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-[#c9a227]/20 rounded-full mb-8">
                <p className="text-xs font-bold text-[#c9a227] uppercase tracking-wider">Investment Opportunity</p>
              </div>

              <h2 className="text-7xl sm:text-8xl font-black text-slate-900 mb-8">
                The <span className="text-[#c9a227]">Ask</span>
              </h2>

              {/* Main Ask */}
              <div className="bg-white border-4 border-[#c9a227]/30 rounded-3xl p-12 mb-12 shadow-2xl">
                <p className="text-2xl text-slate-600 mb-6">Raising Pre-Seed Round</p>
                <p className="text-8xl sm:text-9xl font-black text-[#c9a227] mb-6">
                  <AnimatedNumber value={500} prefix="$" suffix="K" duration={2000} />
                </p>
                <p className="text-2xl text-slate-700 max-w-2xl mx-auto">
                  12-month runway to launch, validate, and prep for Series A
                </p>
              </div>

              {/* Use of Funds */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* LEFT: Recharts Donut Chart */}
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Product & Tech', value: 200, fill: '#3b82f6' },
                          { name: 'Marketing & Growth', value: 175, fill: '#a855f7' },
                          { name: 'Operations', value: 125, fill: '#f97316' },
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={130}
                        dataKey="value"
                        label={({ name, percent }: any) => `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
                        labelLine={true}
                        animationBegin={0}
                        animationDuration={1000}
                      >
                      </Pie>
                      <Tooltip
                        formatter={(value: any) => `$${value}K`}
                        contentStyle={{
                          backgroundColor: '#0f172a',
                          border: '2px solid #c9a227',
                          borderRadius: '8px',
                        }}
                        labelStyle={{ color: '#c9a227', fontWeight: 'bold' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* RIGHT: Breakdown Cards */}
                <div className="space-y-6">
                  {[
                    { category: "Product & Tech", percent: "40%", amount: "$200K", desc: "Team + development", color: "blue" },
                    { category: "Marketing & Growth", percent: "35%", amount: "$175K", desc: "User + merchant acquisition", color: "purple" },
                    { category: "Operations", percent: "25%", amount: "$125K", desc: "Legal, admin, buffer", color: "orange" }
                  ].map((item, idx) => {
                    const colorClasses = {
                      blue: 'border-blue-500 bg-blue-50',
                      purple: 'border-purple-500 bg-purple-50',
                      orange: 'border-orange-500 bg-orange-50',
                    };
                    return (
                      <div key={idx} className={`border-l-4 ${colorClasses[item.color as keyof typeof colorClasses]} rounded-xl p-6`}>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-slate-900">{item.category}</h3>
                          <p className="text-3xl font-black text-slate-900">{item.percent}</p>
                        </div>
                        <p className="text-2xl font-bold text-[#c9a227] mb-1">{item.amount}</p>
                        <p className="text-base text-slate-600">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 17: VISION ====================
      case 17:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 to-white py-16 px-8 flex items-center justify-center">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-8">
                <p className="text-xs font-bold text-purple-700 uppercase tracking-wider">Long-term Vision</p>
              </div>

              <h2 className="text-7xl font-black text-slate-900 mb-12 leading-tight">
                The Future of <span className="text-purple-600">Local Discovery</span>
              </h2>

              {/* Vision Statement */}
              <p className="text-3xl text-slate-700 max-w-4xl mx-auto mb-16 leading-relaxed">
                "Every shopper in the GCC should find the best local deal in{' '}
                <span className="font-bold text-[#c9a227]">30 seconds</span>, not{' '}
                <span className="font-bold text-red-600">30 minutes</span>."
              </p>

              {/* 3-Year Milestones */}
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { year: "Year 1", goal: "UAE Leader", metrics: ["100K users", "5K merchants", "$2M ARR"] },
                  { year: "Year 2", goal: "GCC Expansion", metrics: ["1M users", "50K merchants", "$20M ARR"] },
                  { year: "Year 3", goal: "Category King", metrics: ["5M users", "200K merchants", "$100M ARR"] }
                ].map((milestone, idx) => (
                  <div key={idx} className="bg-white border-2 border-purple-200 rounded-2xl p-8">
                    <p className="text-lg font-semibold text-purple-600 mb-2">{milestone.year}</p>
                    <h3 className="text-3xl font-black text-slate-900 mb-6">{milestone.goal}</h3>
                    <div className="space-y-2">
                      {milestone.metrics.map((metric, midx) => (
                        <p key={midx} className="text-lg text-slate-700">✓ {metric}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 18: OLD COMPETITIVE LANDSCAPE ====================
      case 18:
        return (
          <div className="w-full min-h-screen bg-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Competition</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  We Play a <span className="text-[#c9a227]">Different Game</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Competitors */}
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">Indirect Competitors</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Google/Maps", weakness: "No local deal focus, shows ads not offers" },
                      { name: "Groupon/Cobone", weakness: "Big brands only, no payment integration" },
                      { name: "Credit card apps", weakness: "Gated rewards, not search-first" },
                      { name: "Zomato/Deliveroo", weakness: "Food-only, no broader local discovery" }
                    ].map((comp, idx) => (
                      <div key={idx} className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{comp.name}</h4>
                        <p className="text-base text-red-600 font-medium">Gap: {comp.weakness}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Our Edge */}
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Unique Edge</h3>
                  <div className="space-y-4">
                    {[
                      { advantage: "Search-First Discovery", desc: "Only platform built for 'deals near me' queries" },
                      { advantage: "Payment Integration", desc: "Routing + rewards in one seamless flow" },
                      { advantage: "Zero Merchant Burden", desc: "No tech setup required, we handle everything" },
                      { advantage: "AI-Powered Matching", desc: "Real-time personalization at scale" }
                    ].map((edge, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-xl p-6">
                        <h4 className="text-xl font-bold text-emerald-700 mb-2">✓ {edge.advantage}</h4>
                        <p className="text-base text-slate-700">{edge.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 19: COMPETITIVE MOAT ====================
      case 19:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-white py-16 px-8">
            <div className="max-w-7xl mx-auto">

              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-[#c9a227]/10 rounded-full mb-4">
                  <p className="text-xs font-bold text-[#c9a227] uppercase tracking-wider">Defensibility</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  Why This Can't Be Copied <span className="text-[#c9a227]">in 3 Months</span>
                </h2>
                <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                  Nuqta's moat is <span className="font-bold text-slate-900">neutrality + data + alignment</span> — a position structurally expensive for incumbents to replicate
                </p>
              </div>

              {/* 3 Moat Pillars */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">

                {/* Pillar 1: Neutral Intelligence */}
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Target className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Neutral Intelligence</h3>
                  <p className="text-base text-slate-700 leading-relaxed mb-6">
                    We recommend the <span className="font-bold text-blue-600">best merchant, card, wallet, or BNPL</span> — even if it's a competitor.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 mb-4">
                    <p className="text-sm font-bold text-blue-700 mb-2">Why it's defensible:</p>
                    <p className="text-sm text-slate-700">
                      Banks, wallets, and marketplaces <span className="font-semibold">can't be neutral</span> without hurting their own revenue model.
                    </p>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Users trust neutral platforms more</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-600 mt-2">
                    <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Merchants prefer non-competing platforms</span>
                  </div>
                </div>

                {/* Pillar 2: Incentive Alignment */}
                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-8 hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Handshake className="text-emerald-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Incentive Alignment</h3>
                  <p className="text-base text-slate-700 leading-relaxed mb-6">
                    All 3 sides win together when value is created:
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <User className="text-emerald-600" size={14} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Users</p>
                        <p className="text-sm text-slate-600">Get real savings + social earnings</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Store className="text-emerald-600" size={14} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Merchants</p>
                        <p className="text-sm text-slate-600">Pay only for incremental visits</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <CreditCard className="text-emerald-600" size={14} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Partners</p>
                        <p className="text-sm text-slate-600">Get qualified volume, not noise</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-4">
                    <p className="text-sm font-bold text-emerald-700 mb-2">Why it's defensible:</p>
                    <p className="text-sm text-slate-700">
                      Performance-based model removes friction that breaks ad platforms and marketplaces.
                    </p>
                  </div>
                </div>

                {/* Pillar 3: Offline Behavioral Data */}
                <div className="bg-white border-2 border-purple-200 rounded-2xl p-8 hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <BarChart3 className="text-purple-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Behavioral Data</h3>
                  <p className="text-base text-slate-700 leading-relaxed mb-6">
                    Data that compounds over time and <span className="font-bold text-purple-600">can't be scraped, bought, or backfilled</span>:
                  </p>
                  <div className="space-y-2 mb-6 text-sm text-slate-700">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                      <span>Visit frequency by category & location</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                      <span>Payment choice by context (time, amount, merchant)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                      <span>Cross-merchant loyalty patterns</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                      <span>Social amplification → conversion loops</span>
                    </div>
                  </div>
                  <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4">
                    <p className="text-sm font-bold text-purple-700 mb-2">Why it's defensible:</p>
                    <p className="text-sm text-slate-700">
                      Accrues only through repeated real-world transactions. The longer we run, the harder to displace.
                    </p>
                  </div>
                </div>
              </div>

              {/* Defense Timeline */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Defense Timeline</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-[#c9a227] mb-2">0-12 months</div>
                    <p className="text-sm text-slate-300">Neutrality proven with merchant pilots</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-[#c9a227] mb-2">12-24 months</div>
                    <p className="text-sm text-slate-300">Behavioral data creates switching costs</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-[#c9a227] mb-2">24-48 months</div>
                    <p className="text-sm text-slate-300">Network effects from insights, not just users</p>
                  </div>
                </div>
              </div>

              {/* Proof KPIs */}
              <div className="bg-white border-2 border-[#c9a227]/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Moat Validation Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Merchant Retention</p>
                    <p className="text-2xl font-black text-[#c9a227]">&gt;95%</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Repeat Visit Lift</p>
                    <p className="text-2xl font-black text-[#c9a227]">2.5x</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Share of Wallet</p>
                    <p className="text-2xl font-black text-[#c9a227]">40%+</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Data Depth</p>
                    <p className="text-2xl font-black text-[#c9a227]">24mo+</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 text-center mt-4">Target metrics at 18-24 months</p>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 20: ROADMAP ====================
      case 20:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">Product Roadmap</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  What's <span className="text-blue-600">Next</span>
                </h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    quarter: "Q1 2025",
                    title: "Launch & Validate",
                    features: ["Dubai Marina beta", "Core search + payments", "50 merchants onboarded", "Mobile app (iOS/Android)"],
                    status: "In Progress"
                  },
                  {
                    quarter: "Q2 2025",
                    title: "Expand & Optimize",
                    features: ["3 Dubai neighborhoods", "AI recommendation engine", "Merchant dashboard", "Referral program"],
                    status: "Planned"
                  },
                  {
                    quarter: "Q3 2025",
                    title: "Scale UAE",
                    features: ["Abu Dhabi + Sharjah launch", "Category expansion (wellness, services)", "B2B partnerships (banks)", "Advanced analytics"],
                    status: "Planned"
                  },
                  {
                    quarter: "Q4 2025",
                    title: "GCC Ready",
                    features: ["Saudi Arabia prep", "Multi-currency support", "API for partners", "Series A raise"],
                    status: "Planned"
                  }
                ].map((phase, idx) => {
                  const statusColor = phase.status === "In Progress" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600";
                  return (
                    <div key={idx} className="bg-white border-2 border-blue-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div>
                          <p className="text-sm font-bold text-blue-600 mb-2">{phase.quarter}</p>
                          <h3 className="text-3xl font-black text-slate-900 mb-2">{phase.title}</h3>
                        </div>
                        <div className={`inline-flex px-4 py-2 rounded-full ${statusColor} text-sm font-bold`}>
                          {phase.status}
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-start gap-2">
                            <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                            <p className="text-base text-slate-700">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 21: TECHNOLOGY ====================
      case 21:
        return (
          <div className="w-full min-h-screen bg-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-purple-700 uppercase tracking-wider">Tech Stack</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  Built for <span className="text-purple-600">Scale</span>
                </h2>
                <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                  Modern, cloud-native architecture
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    layer: "Frontend",
                    tech: ["React Native (Mobile)", "Next.js (Web)", "TypeScript", "Tailwind CSS"],
                    icon: Palette
                  },
                  {
                    layer: "Backend",
                    tech: ["Node.js + Express", "PostgreSQL", "Redis (Caching)", "Stripe (Payments)"],
                    icon: Zap
                  },
                  {
                    layer: "AI & Infrastructure",
                    tech: ["OpenAI GPT-4", "Vector DB (Pinecone)", "AWS/Vercel", "Docker + K8s"],
                    icon: Sparkles
                  }
                ].map((stack, idx) => {
                  const Icon = stack.icon;
                  return (
                    <div key={idx} className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-2xl p-8">
                      <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                        <Icon className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-6">{stack.layer}</h3>
                      <div className="space-y-2">
                        {stack.tech.map((item, tidx) => (
                          <div key={tidx} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <p className="text-base text-slate-700">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Payment Intelligence Layer */}
              <div className="mt-12 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                    <CreditCard className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">Payment Intelligence Layer</h3>
                    <p className="text-lg text-blue-600 font-semibold">Pre-Transaction Optimization</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Smart Routing</h4>
                    <p className="text-base text-slate-600">Routes payments to best bank partner based on user's card issuer and merchant</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Personalized Offers</h4>
                    <p className="text-base text-slate-600">Shows card-specific deals (e.g., "Extra 5% with Emirates NBD Visa")</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Real-Time Analysis</h4>
                    <p className="text-base text-slate-600">Analyzes payment method BEFORE checkout to maximize rewards and savings</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-slate-900 rounded-2xl p-10 text-white">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <p className="text-5xl font-black text-[#c9a227] mb-2">&lt;100ms</p>
                    <p className="text-lg text-slate-300">Search latency</p>
                  </div>
                  <div>
                    <p className="text-5xl font-black text-[#c9a227] mb-2">99.9%</p>
                    <p className="text-lg text-slate-300">Uptime SLA</p>
                  </div>
                  <div>
                    <p className="text-5xl font-black text-[#c9a227] mb-2">PCI-DSS</p>
                    <p className="text-lg text-slate-300">Compliant payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 22-26: CLOSING SLIDES ====================
      case 22:
      case 23:
      case 24:
      case 25:
      case 26:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-[#c9a227]/10 to-white flex items-center justify-center p-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#c9a227] to-[#a68420] flex items-center justify-center mx-auto mb-12 shadow-2xl">
                <Image src="/nuqta-logo.png" alt="Nuqta" width={96} height={96} className="object-contain p-4" />
              </div>

              <h1 className="text-7xl sm:text-8xl font-black text-slate-900 mb-8 tracking-tight">
                Nuqta
              </h1>

              <p className="text-4xl text-slate-600 font-light mb-12">
                Find Deals Before Google
              </p>

              <div className="bg-white border-2 border-[#c9a227]/30 rounded-3xl p-12 mb-12 shadow-xl">
                <p className="text-3xl font-bold text-slate-900 mb-6">
                  Let's build the future of local discovery together
                </p>
                <div className="space-y-4 text-xl text-slate-600">
                  <p>📧 rejaul@nuqta.com</p>
                  <p>📱 +971 XXX XXX XXX</p>
                  <p>🌐 www.nuqta.com</p>
                </div>
              </div>

              <p className="text-2xl text-slate-500">
                Thank you for your time
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-hidden">
      {/* Navigation Controls */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
        <span className="text-sm text-slate-600 font-mono">
          {currentSlide + 1} / {totalSlides}
        </span>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-semibold"
        >
          Close (ESC)
        </button>
      </div>

      {/* Slide Content */}
      <div className="w-full h-full overflow-y-auto">
        {renderSlide()}
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
          className="px-6 py-3 bg-white border-2 border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-semibold"
        >
          ← Prev
        </button>
        <div className="flex gap-1">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentSlide ? 'bg-[#c9a227] w-6' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
          className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition-colors font-semibold"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
