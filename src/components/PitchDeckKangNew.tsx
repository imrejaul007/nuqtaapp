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
          <div className="w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0d1d3a] to-[#0a1628] relative flex items-center justify-center p-8 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-20 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-6xl mx-auto text-center space-y-12 relative z-10">

              {/* Logo with glow effect */}
              <div className="inline-flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#c9a227]/20 blur-2xl rounded-full scale-150" />
                <Image src="/nuqta-logo.png" alt="Nuqta" width={220} height={220} className="object-contain relative z-10" priority />
              </div>

              {/* Main Heading with gradient */}
              <div className="space-y-6">
                <h1 className="text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent tracking-tighter leading-[0.9] drop-shadow-2xl">
                  Nuqta
                </h1>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4ab2c] blur-xl opacity-30" />
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white relative z-10">
                    Search. Save. Earn.
                  </p>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-[#c9a227]/20 via-[#c9a227]/10 to-[#c9a227]/20 border-2 border-[#c9a227]/30 rounded-2xl p-8 backdrop-blur-sm">
                  <p className="text-2xl sm:text-3xl text-white leading-relaxed">
                    <span className="text-[#c9a227] font-black">10% offline cashback</span> on every purchase —{' '}
                    <span className="font-semibold">5x better than credit cards</span>
                  </p>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-8">
                <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-2xl p-6 hover:shadow-2xl hover:shadow-[#c9a227]/20 transition-all backdrop-blur-sm">
                  <p className="text-5xl font-black text-[#c9a227] mb-2">
                    <AnimatedNumber value={150} prefix="$" suffix="B" duration={2000} />
                  </p>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">GCC TAM</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-500/40 rounded-2xl p-6 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all backdrop-blur-sm">
                  <p className="text-5xl font-black text-emerald-400 mb-2">18x</p>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">LTV:CAC</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/40 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all backdrop-blur-sm">
                  <p className="text-5xl font-black text-blue-400 mb-2">30+</p>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Signed LOIs</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/40 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all backdrop-blur-sm">
                  <p className="text-4xl font-black text-purple-400 mb-2">Q1 2026</p>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Launch</p>
                </div>
              </div>

              {/* The Ask */}
              <div className="pt-8">
                <div className="inline-flex flex-col items-center gap-4">
                  <div className="bg-gradient-to-r from-[#c9a227] via-[#d4ab2c] to-[#c9a227] px-10 py-5 rounded-2xl shadow-2xl shadow-[#c9a227]/30 border-4 border-white/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <p className="text-3xl font-black text-[#0a1628] relative z-10">Raising $500K Pre-Seed</p>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-3 bg-slate-800/50 border-2 border-emerald-500/40 rounded-full backdrop-blur-sm">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-sm font-bold text-emerald-400">CCS • $5M Cap • 20% Discount</p>
                  </div>
                </div>
              </div>

              {/* Location & Contact */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-[#c9a227]" />
                    <span className="text-sm font-semibold">Dubai, UAE</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-600" />
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">rejaul@nuqtaapp.com</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-600" />
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">nuqtaapp.com</span>
                  </div>
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
          <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 px-8 flex items-center justify-center">
            <div className="max-w-7xl mx-auto w-full">

              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 rounded-full mb-4 border border-[#c9a227]/30">
                  <span className="text-2xl">🎯</span>
                  <p className="text-sm font-bold text-[#c9a227] uppercase tracking-wider">Market Opportunity</p>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-4">
                  <span className="bg-gradient-to-r from-[#c9a227] via-[#d4ab2c] to-[#c9a227] bg-clip-text text-transparent">$150B</span> GCC Market
                </h2>
                <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Offline retail & services across 6 GCC countries
                </p>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-5 gap-8 items-start">

                {/* LEFT: Recharts Nested Pie Chart - 2 columns */}
                <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-black text-slate-900 mb-2">Market Funnel</h3>
                    <p className="text-sm text-slate-500">Progressive capture strategy</p>
                  </div>
                  <div className="h-80 flex items-center justify-center relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[{ name: 'TAM', value: 150, fill: '#3b82f6' }]}
                          cx="50%"
                          cy="50%"
                          outerRadius={110}
                          innerRadius={85}
                          dataKey="value"
                          startAngle={90}
                          endAngle={450}
                          animationBegin={0}
                          animationDuration={1000}
                          stroke="#fff"
                          strokeWidth={3}
                        />
                        <Pie
                          data={[{ name: 'SAM', value: 45, fill: '#6366f1' }]}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          innerRadius={55}
                          dataKey="value"
                          startAngle={90}
                          endAngle={450}
                          animationBegin={200}
                          animationDuration={1000}
                          stroke="#fff"
                          strokeWidth={3}
                        />
                        <Pie
                          data={[{ name: 'SOM', value: 1.35, fill: '#c9a227' }]}
                          cx="50%"
                          cy="50%"
                          outerRadius={50}
                          dataKey="value"
                          startAngle={90}
                          endAngle={450}
                          animationBegin={400}
                          animationDuration={1000}
                          stroke="#fff"
                          strokeWidth={3}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#0f172a',
                            border: '2px solid #c9a227',
                            borderRadius: '12px',
                            padding: '12px',
                          }}
                          labelStyle={{ color: '#c9a227', fontWeight: 'bold' }}
                        />
                      </PieChart>
                    </ResponsiveContainer>

                    {/* Center Label */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="text-center">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Target</p>
                        <p className="text-2xl font-black text-[#c9a227]">$1.35B</p>
                      </div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="text-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-1"></div>
                      <p className="text-xs font-bold text-slate-700">TAM</p>
                      <p className="text-sm font-black text-blue-600">$150B</p>
                    </div>
                    <div className="text-center">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full mx-auto mb-1"></div>
                      <p className="text-xs font-bold text-slate-700">SAM</p>
                      <p className="text-sm font-black text-indigo-600">$45B</p>
                    </div>
                    <div className="text-center">
                      <div className="w-3 h-3 bg-[#c9a227] rounded-full mx-auto mb-1"></div>
                      <p className="text-xs font-bold text-slate-700">SOM (Dubai)</p>
                      <p className="text-sm font-black text-[#c9a227]">$1.35B</p>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Market Breakdown - 3 columns */}
                <div className="lg:col-span-3 space-y-4">
                  {/* TAM Card */}
                  <div className="bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-white border-2 border-blue-500/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-2xl">🌍</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-black text-slate-900">Total Addressable Market</h3>
                          <p className="text-sm text-slate-600">6 GCC Countries</p>
                        </div>
                      </div>
                      <p className="text-4xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">$150B</p>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <DataPoint
                        value="Total offline retail & services spending across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman"
                        source="GCC Retail Market Report 2024 + UAE Ministry of Economy 2025"
                      />
                    </p>
                  </div>

                  {/* SAM Card */}
                  <div className="bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-white border-2 border-indigo-500/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-2xl">🎯</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-black text-slate-900">Serviceable Addressable Market</h3>
                          <p className="text-sm text-slate-600">D2C + Local Services</p>
                        </div>
                      </div>
                      <p className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">$45B</p>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <DataPoint
                        value="Consumer-facing offline businesses: F&B, Beauty, Fashion, Fitness, Retail - all amenable to rewards programs"
                        source="30% of TAM: businesses with repeat customer potential and offline transaction focus"
                      />
                    </p>
                  </div>

                  {/* SOM Card - Enhanced with Phases */}
                  <div className="bg-gradient-to-br from-[#c9a227]/10 via-[#c9a227]/5 to-white border-2 border-[#c9a227]/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#c9a227] to-[#d4ab2c] rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-2xl">🚀</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-black text-slate-900">Serviceable Obtainable Market</h3>
                          <p className="text-sm text-slate-600">Dubai 3-Year Target (3% of SAM)</p>
                        </div>
                      </div>
                      <p className="text-4xl font-black bg-gradient-to-r from-[#c9a227] to-[#d4ab2c] bg-clip-text text-transparent">$1.35B</p>
                    </div>

                    {/* Phase 1: Dubai Horizons */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 mb-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-white text-xs font-black">1</span>
                        </div>
                        <p className="text-sm font-black text-slate-900">Phase 1: Dubai (Year 1-3)</p>
                      </div>

                      <div className="space-y-2">
                        <div className="bg-gradient-to-r from-emerald-50 to-white border-l-3 border-emerald-500 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-xs font-bold text-emerald-700">🌱 Horizon 1 (M1-12)</p>
                            <p className="text-base font-black text-emerald-600">$150M</p>
                          </div>
                          <p className="text-xs text-slate-600">F&B • Grocery • Salons • Fashion • Fitness • Events (pop-ups, exhibitions)</p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-white border-l-3 border-blue-500 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-xs font-bold text-blue-700">📈 Horizon 2 (M13-24)</p>
                            <p className="text-base font-black text-blue-600">$450M</p>
                          </div>
                          <p className="text-xs text-slate-600">+ Entertainment (cinemas, gaming) • Home Services • Pet</p>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-white border-l-3 border-purple-500 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-xs font-bold text-purple-700">🌍 Horizon 3 (M25-36)</p>
                            <p className="text-base font-black text-purple-600">$750M</p>
                          </div>
                          <p className="text-xs text-slate-600">All UAE cities (Abu Dhabi • Sharjah • Ajman • RAK • Fujairah)</p>
                        </div>
                      </div>
                    </div>

                    {/* Phase 2 & 3 - Compact */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gradient-to-br from-blue-100/50 to-white border border-blue-200 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                            <span className="text-white text-xs font-black">2</span>
                          </div>
                          <p className="text-xs font-bold text-slate-700">Phase 2 (Y4-5)</p>
                        </div>
                        <p className="text-sm font-black text-blue-600 mb-1">$3B+</p>
                        <p className="text-xs text-slate-600">Qatar + KSA</p>
                      </div>

                      <div className="bg-gradient-to-br from-purple-100/50 to-white border border-purple-200 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-sm">
                            <span className="text-white text-xs font-black">3</span>
                          </div>
                          <p className="text-xs font-bold text-slate-700">Phase 3 (Y6+)</p>
                        </div>
                        <p className="text-sm font-black text-purple-600 mb-1">$5B+</p>
                        <p className="text-xs text-slate-600">Full GCC</p>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-4 bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-3">
                      <p className="text-xs text-center text-slate-700">
                        <span className="font-black text-[#c9a227]">3% penetration</span> in Dubai within 36 months •
                        <span className="font-black text-slate-900"> KPI-driven expansion</span>
                      </p>
                    </div>
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
          <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-purple-700 uppercase tracking-wider">Core Differentiation</p>
                </div>
                <h2 className="text-5xl sm:text-6xl font-black text-slate-900 mb-4">
                  We're <span className="text-[#c9a227]">NOT</span> Another Deal App
                </h2>
                <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto">
                  We're building the <span className="text-emerald-600 font-bold">offline saving habit</span>, not chasing one-time discounts
                </p>
              </div>

              {/* Comparison Table */}
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
                {/* What We're NOT */}
                <div className="bg-gradient-to-br from-red-50 via-red-50/50 to-white border-2 border-red-200 rounded-3xl p-8 shadow-xl">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4 shadow-md">
                      <Ban className="text-red-600" size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-2">Deal/Discount Platforms</h3>
                    <p className="text-sm text-red-600 font-bold uppercase">Smiles • Entertainer • Groupon</p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { text: "30% discount pressure on merchants", sub: "Race to the bottom, unsustainable" },
                      { text: "One-time bargain hunters", sub: "No loyalty, never return at full price" },
                      { text: "Subscription paywalls (AED 200-400/yr)", sub: "Gated access kills mass adoption" },
                      { text: "Big chains only", sub: "Local businesses excluded" },
                      { text: "Points expire, caps, fine print", sub: "73% don't know deals exist" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-4 border-l-4 border-red-500 shadow-sm">
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-red-600 text-xl font-bold leading-none">×</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-base text-slate-900 font-bold mb-1">{item.text}</p>
                            <p className="text-sm text-slate-600">{item.sub}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What We ARE */}
                <div className="bg-gradient-to-br from-emerald-50 via-emerald-50/50 to-white border-2 border-emerald-200 rounded-3xl p-8 shadow-xl">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4 shadow-md">
                      <CheckCircle2 className="text-emerald-600" size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-2">Nuqta Platform</h3>
                    <p className="text-sm text-emerald-600 font-bold uppercase">Rewards Layer • Not Discount Platform</p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { text: "15% merchant commission (sustainable)", sub: "Merchants keep 85%, happy to participate" },
                      { text: "Loyal repeat customers (+40% vs deals)", sub: "Real value creation, not bargain hunting" },
                      { text: "FREE for everyone, 5-10% instant cashback", sub: "5% base + 5% social bonus, no subscriptions" },
                      { text: "Search-first local discovery", sub: "Every neighborhood business can join" },
                      { text: "No redemption restrictions for users", sub: "Internal fraud caps protect budget without affecting genuine users" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-4 border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="text-emerald-600" size={18} />
                          </div>
                          <div className="flex-1">
                            <p className="text-base text-slate-900 font-bold mb-1">{item.text}</p>
                            <p className="text-sm text-emerald-700 font-medium">{item.sub}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Insight Banner */}
              <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-r from-slate-900 via-[#0a1628] to-slate-900 rounded-3xl p-10 text-center shadow-2xl border-2 border-[#c9a227]/20">
                  <div className="inline-block px-4 py-2 bg-[#c9a227]/20 rounded-full mb-4">
                    <p className="text-xs font-bold text-[#c9a227] uppercase tracking-wider">The Core Difference</p>
                  </div>
                  <p className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                    Discount platforms <span className="text-red-400">destroy merchant margins</span>.<br/>
                    Nuqta <span className="text-emerald-400">builds loyalty</span> at sustainable economics.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    <div className="bg-white/5 rounded-xl p-5 border border-red-500/30">
                      <p className="text-xs text-red-400 font-bold uppercase mb-2">Discount Platforms</p>
                      <p className="text-3xl font-black text-red-400 mb-1">-30%</p>
                      <p className="text-sm text-slate-400 font-medium">Merchant margin loss</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-5 border border-emerald-500/30">
                      <p className="text-xs text-emerald-400 font-bold uppercase mb-2">Nuqta Model</p>
                      <p className="text-3xl font-black text-emerald-400 mb-1">+40%</p>
                      <p className="text-sm text-slate-400 font-medium">Repeat customer rate</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-5 border border-[#c9a227]/30">
                      <p className="text-xs text-[#c9a227] font-bold uppercase mb-2">The Result</p>
                      <p className="text-3xl font-black text-[#c9a227] mb-1">18x</p>
                      <p className="text-sm text-slate-400 font-medium">LTV:CAC Ratio</p>
                    </div>
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
                  <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Competitive Analysis</p>
                </div>
                <h2 className="text-5xl sm:text-6xl font-black text-slate-900 mb-6">
                  Why Can't <span className="text-red-600">Noon/Careem/Smiles</span> Do This?
                </h2>
                <p className="text-lg text-slate-500 uppercase tracking-wide font-bold mb-3">
                  Technical Breakdown: 8 Structural Barriers
                </p>
                <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto">
                  Head-to-head feature comparison shows why incumbents <span className="text-red-600 font-bold">structurally can't pivot</span> to this model without cannibalizing their revenue.
                </p>
              </div>

              {/* Competitive Matrix */}
              <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xl">
                  <thead>
                    <tr className="bg-gradient-to-r from-slate-900 via-[#0a1628] to-slate-900 text-white">
                      <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Key Differentiator</th>
                      <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-[#c9a227] text-2xl font-black">Nuqta</span>
                          <span className="text-xs text-[#c9a227]/70 font-normal">Us</span>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                        <div className="flex flex-col items-center gap-1">
                          <span>Noon</span>
                          <span className="text-xs text-slate-400 font-normal">E-commerce</span>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                        <div className="flex flex-col items-center gap-1">
                          <span>Careem</span>
                          <span className="text-xs text-slate-400 font-normal">Super App</span>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                        <div className="flex flex-col items-center gap-1">
                          <span>Smiles</span>
                          <span className="text-xs text-slate-400 font-normal">Discounts</span>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                        <div className="flex flex-col items-center gap-1">
                          <span>Cards</span>
                          <span className="text-xs text-slate-400 font-normal">Credit</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "10% Instant Cashback (Not Points)",
                        nuqta: true,
                        noon: false,
                        careem: false,
                        smiles: false,
                        cards: false
                      },
                      {
                        feature: "Offline-First Focus",
                        nuqta: true,
                        noon: false,
                        careem: false,
                        smiles: true,
                        cards: false
                      },
                      {
                        feature: "Universal (All Merchants)",
                        nuqta: true,
                        noon: false,
                        careem: false,
                        smiles: false,
                        cards: true
                      },
                      {
                        feature: "Zero Subscription Fee",
                        nuqta: true,
                        noon: true,
                        careem: true,
                        smiles: false,
                        cards: true
                      },
                      {
                        feature: "Performance-Based (Merchants)",
                        nuqta: true,
                        noon: false,
                        careem: false,
                        smiles: false,
                        cards: false
                      },
                      {
                        feature: "Search-First Discovery",
                        nuqta: true,
                        noon: false,
                        careem: false,
                        smiles: false,
                        cards: false
                      },
                      {
                        feature: "No Redemption Caps/Limits",
                        nuqta: true,
                        noon: false,
                        careem: false,
                        smiles: false,
                        cards: false
                      },
                      {
                        feature: "Merchant-Funded Model",
                        nuqta: true,
                        noon: false,
                        careem: false,
                        smiles: true,
                        cards: false
                      }
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-gradient-to-r from-slate-50 to-white" : "bg-white"}>
                        <td className="px-6 py-4 text-base font-medium text-slate-900">{row.feature}</td>
                        <td className="px-6 py-4 text-center bg-[#c9a227]/5">
                          {row.nuqta ? (
                            <CheckCircle2 className="inline-block text-emerald-600" size={28} />
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
                          {row.smiles ? (
                            <CheckCircle2 className="inline-block text-slate-400" size={24} />
                          ) : (
                            <span className="inline-block text-slate-300 text-2xl font-bold">×</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.cards ? (
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

              {/* Why Competitors Can't Copy - Memorable Analogies */}
              <div className="bg-gradient-to-br from-[#c9a227]/10 via-white to-slate-50 border-4 border-[#c9a227]/30 rounded-3xl p-10 mb-12 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="inline-block px-5 py-2 bg-slate-900 rounded-full mb-4">
                    <p className="text-sm font-bold text-[#c9a227] uppercase tracking-wider">Structural Moat — Explained Simply</p>
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 mb-4">Why Can't They Just Copy Us?</h3>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    They could try. But it would be <span className="text-red-600 font-bold">strategically stupid</span> — like these examples:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {/* Analogy 1: Careem = Uber launching Google Maps */}
                  <div className="bg-white rounded-2xl p-6 border-2 border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🚗</span>
                      </div>
                      <div>
                        <p className="text-xl font-black text-slate-900">Careem</p>
                        <p className="text-sm text-slate-500 font-medium">Logistics → Discovery?</p>
                      </div>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4 border-l-4 border-orange-500 mb-3">
                      <p className="text-base text-slate-800 leading-relaxed font-medium italic">
                        "Careem copying Nuqta is like <span className="font-black">Uber launching a Google Maps competitor</span>. Possible, but strategically stupid."
                      </p>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <strong>Why:</strong> Careem makes money from <span className="font-bold text-orange-600">delivery fees</span> (rides + food).
                      Promoting dine-in restaurants <span className="font-bold text-red-600">kills delivery orders</span>. They'd be competing with their own revenue.
                    </p>
                  </div>

                  {/* Analogy 2: Noon = Amazon launching offline discovery */}
                  <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🛒</span>
                      </div>
                      <div>
                        <p className="text-xl font-black text-slate-900">Noon</p>
                        <p className="text-sm text-slate-500 font-medium">E-commerce → Offline?</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500 mb-3">
                      <p className="text-base text-slate-800 leading-relaxed font-medium italic">
                        "Noon adding offline discovery is like <span className="font-black">Amazon telling you to shop at local stores instead</span>. Brand suicide."
                      </p>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <strong>Why:</strong> Noon's entire business is <span className="font-bold text-blue-600">e-commerce GMV</span>.
                      Every offline transaction they enable is <span className="font-bold text-red-600">lost online revenue</span>. Their warehouses become liabilities.
                    </p>
                  </div>

                  {/* Analogy 3: Tabby/Postpay = BNPL offering cashback */}
                  <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">💰</span>
                      </div>
                      <div>
                        <p className="text-xl font-black text-slate-900">Tabby / Postpay</p>
                        <p className="text-sm text-slate-500 font-medium">BNPL → Cashback?</p>
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-purple-500 mb-3">
                      <p className="text-base text-slate-800 leading-relaxed font-medium italic">
                        "BNPL adding 10% cashback is like <span className="font-black">a bank paying you to not use their loans</span>. Economics don't work."
                      </p>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <strong>Why:</strong> They charge merchants <span className="font-bold text-purple-600">4-6%</span> for installment plans.
                      Offering 10% cashback means <span className="font-bold text-red-600">losing 4-6% per transaction</span>. Negative margins instantly.
                    </p>
                  </div>

                  {/* Analogy 4: Banks = Credit cards cannibalizing themselves */}
                  <div className="bg-white rounded-2xl p-6 border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">💳</span>
                      </div>
                      <div>
                        <p className="text-xl font-black text-slate-900">Credit Cards</p>
                        <p className="text-sm text-slate-500 font-medium">1-2% → 10%?</p>
                      </div>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-4 border-l-4 border-emerald-500 mb-3">
                      <p className="text-base text-slate-800 leading-relaxed font-medium italic">
                        "Banks offering 10% cashback is like <span className="font-black">Apple making Android phones</span>. Why kill your cash cow?"
                      </p>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <strong>Why:</strong> Card networks make <span className="font-bold text-emerald-600">2-3% per swipe</span>.
                      Offering 10% cashback <span className="font-bold text-red-600">destroys their entire margin structure</span>. They'd lose money on every transaction.
                    </p>
                  </div>
                </div>

                {/* Bottom Summary */}
                <div className="mt-8 bg-slate-900 rounded-2xl p-6 text-center">
                  <p className="text-2xl font-black text-white mb-3">
                    The Pattern: <span className="text-[#c9a227]">Product Cannibalization</span>
                  </p>
                  <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    Every major player would have to <span className="text-red-400 font-bold">destroy their core revenue</span> to compete with us.
                    That's not a timing moat — it's a <span className="text-emerald-400 font-bold">structural impossibility</span>.
                  </p>
                </div>
              </div>

              {/* Deep Dive: Structural Analysis */}
              <div className="text-center mb-8">
                <p className="text-sm text-slate-500 uppercase tracking-wider font-bold mb-2">Deep Dive Analysis</p>
                <h3 className="text-3xl font-black text-slate-900">Business Model Constraints by Competitor</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Left: Structural Barriers */}
                <div className="bg-gradient-to-br from-red-50 via-red-50/50 to-white border-2 border-red-200 rounded-3xl p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <AlertCircle className="text-red-600" size={28} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Structural Barriers (Revenue Cannibalization Risk)</h3>
                  </div>
                  <div className="space-y-5">
                    <div className="bg-white rounded-xl p-5 border-l-4 border-red-500 shadow-sm">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-2xl">🛒</span>
                        <p className="text-lg font-bold text-slate-900">Noon</p>
                      </div>
                      <p className="text-base text-slate-700 leading-relaxed">E-commerce marketplace built on <strong>inventory control</strong>. Can't pivot to search-first discovery without cannibalizing their warehouse model. Would destroy unit economics.</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 border-l-4 border-orange-500 shadow-sm">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-2xl">🚗</span>
                        <p className="text-lg font-bold text-slate-900">Careem</p>
                      </div>
                      <p className="text-base text-slate-700 leading-relaxed">Super app for <strong>logistics</strong> (rides/food delivery). Local discovery isn't core. Would require complete product pivot + new merchant relationships. Too many priorities.</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 border-l-4 border-purple-500 shadow-sm">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-2xl">🎟️</span>
                        <p className="text-lg font-bold text-slate-900">Smiles/Entertainer</p>
                      </div>
                      <p className="text-base text-slate-700 leading-relaxed"><strong>Subscription coupon books</strong> (AED 200-400/year). Can't offer free 10% instant cashback without destroying their AED 200/user annual revenue. Business model incompatible.</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 border-l-4 border-blue-500 shadow-sm">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-2xl">💳</span>
                        <p className="text-lg font-bold text-slate-900">Credit Cards</p>
                      </div>
                      <p className="text-base text-slate-700 leading-relaxed"><strong>1-2% cashback</strong> on online spend only. Offline rewards require merchant integrations they don't have. Can't scale to 10% without changing entire economics. Banks move slow.</p>
                    </div>
                  </div>
                </div>

                {/* Right: Our Structural Advantages */}
                <div className="bg-gradient-to-br from-emerald-50 via-emerald-50/50 to-white border-2 border-emerald-200 rounded-3xl p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Trophy className="text-emerald-600" size={28} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Nuqta's Structural Advantages (No Trade-Offs)</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-5 border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={24} />
                        <div>
                          <p className="text-lg font-bold text-slate-900 mb-1">100% Focus on Offline Discovery</p>
                          <p className="text-sm text-slate-600 leading-relaxed">Not distracted by logistics, inventory, or super app sprawl. Single mission: connect users to local businesses.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-5 border-l-4 border-[#c9a227] shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-[#c9a227] mt-1 flex-shrink-0" size={24} />
                        <div>
                          <p className="text-lg font-bold text-slate-900 mb-1">Merchant-Funded Model</p>
                          <p className="text-sm text-slate-600 leading-relaxed">No VC subsidy burns. 5% margin from day 1. Profitable unit economics built into the business model.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-5 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                        <div>
                          <p className="text-lg font-bold text-slate-900 mb-1">First-Mover Speed</p>
                          <p className="text-sm text-slate-600 leading-relaxed">Q1 2026 launch. Competitors would need 12-18 months to pivot. We'll have the behavioral moat by then.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-5 border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-purple-600 mt-1 flex-shrink-0" size={24} />
                        <div>
                          <p className="text-lg font-bold text-slate-900 mb-1">Zero Merchant Tech Burden</p>
                          <p className="text-sm text-slate-600 leading-relaxed">We handle payment routing, QR codes, analytics. Merchants just accept orders. 24-hour setup.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 rounded-xl p-5 border-2 border-emerald-500/30 shadow-sm">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={24} />
                        <div>
                          <p className="text-lg font-bold text-emerald-900 mb-1">Behavioral Moat (Post-PMF)</p>
                          <p className="text-sm text-emerald-800 leading-relaxed font-medium">Once we own daily saving habits, we have shopping behavior data competitors can never replicate. "Search → Save → Repeat" becomes muscle memory.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Callout */}
              <div className="bg-gradient-to-r from-slate-900 via-[#0a1628] to-slate-900 rounded-3xl p-10 text-center shadow-2xl border-2 border-[#c9a227]/20">
                <div className="inline-block px-4 py-2 bg-[#c9a227]/20 rounded-full mb-4">
                  <p className="text-xs font-bold text-[#c9a227] uppercase tracking-wider">Technical Conclusion</p>
                </div>
                <p className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                  Feature-by-feature, we win on <span className="text-emerald-400">8 out of 8</span> key differentiators.
                </p>
                <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-6 leading-relaxed">
                  This isn't about being <span className="text-[#c9a227] font-black">slightly better</span> —
                  it's about building what they <span className="text-red-400 font-bold">structurally can't replicate</span> without destroying their core revenue model.
                </p>
                <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8">
                  <div className="bg-white/5 rounded-xl p-4 border border-emerald-500/30">
                    <p className="text-3xl font-black text-emerald-400 mb-2">12-18mo</p>
                    <p className="text-sm text-slate-400 font-medium">Head start advantage</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-[#c9a227]/30">
                    <p className="text-3xl font-black text-[#c9a227] mb-2">5%</p>
                    <p className="text-sm text-slate-400 font-medium">Margin from day 1</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-blue-500/30">
                    <p className="text-3xl font-black text-blue-400 mb-2">Q1 2026</p>
                    <p className="text-sm text-slate-400 font-medium">Launch & lock moat</p>
                  </div>
                </div>
                <p className="text-base text-slate-400 mt-6 italic">
                  By the time they notice (50K+ users, coin lock-in driving loyalty), we'll own the offline saving habit.
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
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#c9a227] mt-2 flex-shrink-0"></div>
                        <p className="text-base text-slate-700"><strong>No cap, no limit</strong> - use full balance anytime</p>
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
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <p className="text-base text-slate-700"><strong>No redemption limits</strong> - use full balance</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Key Insight */}
              <div className="bg-slate-900 rounded-2xl p-10 text-white text-center mb-12">
                <p className="text-3xl font-bold mb-4">
                  💡 Smart Rule: <span className="text-[#c9a227]">Nuqta Coin = Freedom</span> • <span className="text-blue-400">Brand Coin = Loyalty</span>
                </p>
                <p className="text-xl text-slate-300 mb-3">
                  Both AED-backed • Can stack together at checkout • Combines with cash/EMI/BNPL
                </p>
                <div className="bg-emerald-500/20 border-2 border-emerald-500/40 rounded-xl p-4 inline-block">
                  <p className="text-lg font-black text-emerald-400">
                    ✓ No user-facing restrictions • Use full balance anytime
                  </p>
                  <p className="text-xs text-emerald-300 mt-2 italic">
                    Internal daily/monthly caps protect budget (see Fraud Controls slide)
                  </p>
                </div>
              </div>

              {/* Why This Works - Triple Win */}
              <div className="mb-8">
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-black text-slate-900 mb-3">
                    Why This <span className="text-[#c9a227]">Creates Stickiness</span>
                  </h3>
                  <p className="text-xl text-slate-600">A win-win-win for businesses, users, and Nuqta</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">

                  {/* Business Benefits */}
                  <div className="bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-white border-2 border-emerald-500/30 rounded-3xl p-8">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 text-white flex items-center justify-center text-2xl mb-4 shadow-lg">
                      🏪
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-4">For Businesses</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-emerald-600 mt-1 flex-shrink-0" />
                        <p className="text-sm text-slate-700"><strong>+40% repeat rate</strong> vs discount platforms</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-emerald-600 mt-1 flex-shrink-0" />
                        <p className="text-sm text-slate-700"><strong>Loyal customers</strong>, not bargain hunters</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-emerald-600 mt-1 flex-shrink-0" />
                        <p className="text-sm text-slate-700"><strong>Performance-based</strong> cost (15% only on sales)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-emerald-600 mt-1 flex-shrink-0" />
                        <p className="text-sm text-slate-700"><strong>Guaranteed ROI</strong> with 85% take-home</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-emerald-600 mt-1 flex-shrink-0" />
                        <p className="text-sm text-slate-700"><strong>Brand Coin</strong> drives customers back</p>
                      </div>
                    </div>
                  </div>

                  {/* User Benefits */}
                  <div className="bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-white border-2 border-blue-500/30 rounded-3xl p-8">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center text-2xl mb-4 shadow-lg">
                      💰
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-4">For Users</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-sm text-slate-700"><strong>10% instant cashback</strong> on every purchase</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-sm text-slate-700"><strong>Universal coverage</strong> across all merchants</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-sm text-slate-700"><strong>No expiry</strong>, no points confusion</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-sm text-slate-700"><strong>Stack both coins</strong> for max savings</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-sm text-slate-700"><strong>Habit formation</strong>: "Pay with Nuqta"</p>
                      </div>
                    </div>
                  </div>

                  {/* Nuqta Benefits */}
                  <div className="bg-gradient-to-br from-[#c9a227]/10 via-[#c9a227]/5 to-white border-2 border-[#c9a227]/30 rounded-3xl p-8">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c9a227] to-[#b8922a] text-white flex items-center justify-center text-2xl mb-4 shadow-lg">
                      🚀
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-4">For Nuqta</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#c9a227] mt-1 flex-shrink-0" />
                        <p className="text-sm text-slate-700"><strong>5% margin</strong> on every transaction</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#c9a227] mt-1 flex-shrink-0" />
                        <p className="text-sm text-slate-700"><strong>Scalable revenue</strong> with GMV growth</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#c9a227] mt-1 flex-shrink-0" />
                        <p className="text-sm text-slate-700"><strong>Data moat</strong>: Shopping behavior graph</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#c9a227] mt-1 flex-shrink-0" />
                        <p className="text-sm text-slate-700"><strong>Network effects</strong>: More users = more merchants</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#c9a227] mt-1 flex-shrink-0" />
                        <p className="text-sm text-slate-700"><strong>Coins keep users</strong> locked in platform</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Stickiness Metric */}
              <div className="bg-gradient-to-r from-slate-900 via-[#0a1628] to-slate-900 rounded-2xl p-8 text-center">
                <p className="text-sm text-[#c9a227] font-bold uppercase tracking-wider mb-3">The Retention Engine</p>
                <p className="text-3xl sm:text-4xl font-black text-white mb-4">
                  Users with <span className="text-[#c9a227]">10+ AED in coins</span> create <span className="text-emerald-400">powerful habit loops</span>
                </p>
                <p className="text-lg text-slate-300">
                  Every earned coin is a reason to come back. Every redemption strengthens the habit.
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
                  <p className="text-4xl font-black text-purple-600 mb-2">7.5%</p>
                  <p className="text-sm text-slate-600">After cashback & costs</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-2xl p-6 text-center">
                  <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">Monthly RPU</p>
                  <p className="text-4xl font-black text-emerald-600 mb-2">AED 45</p>
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
                    <AnimatedNumber value={540} prefix="AED " duration={2000} />
                  </p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• Monthly RPU: AED 45</p>
                    <p>• Avg retention: 12 months</p>
                    <p>• Net margin: 7.5%</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#c9a227]/10 to-white border-2 border-[#c9a227]/30 rounded-3xl p-8 text-center hover:shadow-2xl transition-all">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c9a227]/20 mb-4">
                    <Trophy size={32} className="text-[#c9a227]" />
                  </div>
                  <p className="text-sm font-semibold text-[#c9a227] uppercase tracking-wider mb-3">LTV:CAC Ratio</p>
                  <p className="text-6xl font-black text-[#c9a227] mb-4">
                    18x
                  </p>
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-3 mt-4">
                    <p className="text-xs font-semibold text-emerald-700 uppercase mb-1">Benchmark</p>
                    <p className="text-sm text-slate-700">Anything above 3x is good, 5x+ is excellent</p>
                  </div>
                </div>
              </div>

              {/* Revenue Breakdown */}
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-8 mb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Revenue Per AED 100 Transaction</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-white border-2 border-blue-200 rounded-xl p-5 text-center">
                    <p className="text-xs font-semibold text-blue-700 uppercase mb-2">Merchant Fee (15%)</p>
                    <p className="text-3xl font-black text-blue-600">+AED 15</p>
                  </div>
                  <div className="bg-white border-2 border-red-200 rounded-xl p-5 text-center">
                    <p className="text-xs font-semibold text-red-700 uppercase mb-2">User Cashback (5-10%)</p>
                    <p className="text-3xl font-black text-red-600">-AED 7</p>
                    <p className="text-xs text-slate-500 mt-1">Blended avg</p>
                  </div>
                  <div className="bg-white border-2 border-orange-200 rounded-xl p-5 text-center">
                    <p className="text-xs font-semibold text-orange-700 uppercase mb-2">Costs (Payment, Ops)</p>
                    <p className="text-3xl font-black text-orange-600">-AED 0.5</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#c9a227]/20 to-white border-2 border-[#c9a227] rounded-xl p-5 text-center">
                    <p className="text-xs font-semibold text-[#c9a227] uppercase mb-2">Net Margin</p>
                    <p className="text-3xl font-black text-[#c9a227]">AED 7.5</p>
                    <p className="text-xs text-slate-500 mt-1">7.5% margin</p>
                  </div>
                </div>
                <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-slate-700 text-center mb-2">
                    <span className="font-bold text-blue-700">Cashback Structure:</span> 5% base + 5% optional social sharing bonus. ~40% of users share, creating 7% blended rate.
                  </p>
                  <p className="text-sm text-slate-600 text-center">
                    <span className="font-bold text-emerald-600">Range:</span> 4.5% margin (all users share) to 9.5% margin (no shares). Social sharing = viral growth + lower CAC.
                  </p>
                </div>
              </div>

              {/* Payback Period */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 mb-10">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="text-center md:text-left">
                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">CAC Payback Period</p>
                    <p className="text-5xl font-black text-white mb-2">&lt;3 Weeks</p>
                    <p className="text-base text-slate-300">Exceptional for consumer business</p>
                  </div>
                  <div className="md:col-span-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                    <p className="text-sm font-semibold text-slate-300 uppercase mb-3">Calculation:</p>
                    <div className="space-y-2 text-slate-200">
                      <p>• Monthly RPU: <span className="font-bold text-emerald-400">AED 45</span></p>
                      <p>• Blended CAC: <span className="font-bold text-orange-400">AED 30</span></p>
                      <p>• Payback: <span className="font-bold text-white">AED 30 ÷ AED 45 = 0.67 months (~20 days)</span></p>
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
                  <p className="text-sm text-white/90 mb-3">
                    Wallet functionality launches <span className="font-bold text-yellow-300">after obtaining UAE Central Bank SVF license</span>.
                    License acquisition (regulatory capital + application) is <span className="font-bold text-yellow-300">part of this fundraising round</span>.
                  </p>
                  <p className="text-sm text-white/90">
                    Post-license, we can invest float in UAE treasury bonds (4-5% yield), adding <span className="font-bold text-emerald-300">AED 10-15K annual revenue per AED 250K float</span>.
                    Example: At 100K users (AED 2.5M float), this unlocks <span className="font-bold text-emerald-300">+AED 100-125K/year</span> passive income.
                    But this is <span className="font-bold">bonus</span>, not core business. Timeline: 12-18 months post-funding.
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

      // ==================== SLIDE 13: FRAUD CONTROLS ====================
      case 13:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-red-50/30 via-white to-orange-50/20 py-16 px-8">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Risk Mitigation</p>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6">
                  Fraud Prevention Architecture
                </h2>
                <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                  We don't launch with open-ended rewards. Cashback and social incentives are <span className="font-bold text-red-600">locked, gated, and verified</span> at every step.
                </p>
              </div>

              {/* Core Principle Banner */}
              <div className="max-w-5xl mx-auto mb-12">
                <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 rounded-2xl p-8 text-center shadow-xl">
                  <p className="text-sm text-red-300 font-bold uppercase tracking-wider mb-3">Core Defense Principle</p>
                  <p className="text-2xl sm:text-3xl font-black text-white mb-4">
                    Fraud thrives on instant liquidity — <span className="text-red-300">Nuqta removes that</span>
                  </p>
                  <div className="bg-white/10 rounded-xl p-4 mt-4">
                    <p className="text-lg text-white font-medium">
                      Target: <span className="text-red-300 font-black">&lt;5% reward leakage</span> by Month 3 (monitored weekly)
                    </p>
                  </div>
                </div>
              </div>

              {/* 8-Point Framework */}
              <div className="max-w-6xl mx-auto mb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">8-Layer Defense System</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                  {/* Layer 1 */}
                  <div className="bg-white rounded-xl p-5 border-2 border-red-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-red-700 font-black text-sm">1</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Transaction-First Gating</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      No transaction = no rewards. Cashback only issued after verified merchant confirmation via POS/QR.
                    </p>
                  </div>

                  {/* Layer 2 */}
                  <div className="bg-white rounded-xl p-5 border-2 border-orange-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-700 font-black text-sm">2</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Tiered Reward Release</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <span className="font-semibold text-emerald-700">Non-refundable transactions:</span> 5% base cashback instantly credited. <span className="font-semibold text-orange-700">Refundable transactions:</span> 5% locked until refund window expires OR user cancels refund option. <span className="font-semibold text-blue-700">Social bonus:</span> +5% released 24 hours after post verification.
                    </p>
                  </div>

                  {/* Layer 3 */}
                  <div className="bg-white rounded-xl p-5 border-2 border-amber-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-700 font-black text-sm">3</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Social Verification</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      +5% social bonus requires public Instagram/TikTok post with merchant tag. Released 24 hours after verification. Manual review for first 6 months, then automated via API.
                    </p>
                  </div>

                  {/* Layer 4 */}
                  <div className="bg-white rounded-xl p-5 border-2 border-yellow-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-700 font-black text-sm">4</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Merchant KYC</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      All merchants verified with UAE trade license. Employee accounts blocked from earning cashback at their own store.
                    </p>
                  </div>

                  {/* Layer 5 */}
                  <div className="bg-white rounded-xl p-5 border-2 border-lime-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-lime-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-lime-700 font-black text-sm">5</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Behavioral Detection</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      ML flags suspicious patterns: round-number transactions, same location abuse, coordinated timing, velocity spikes.
                    </p>
                  </div>

                  {/* Layer 6 */}
                  <div className="bg-white rounded-xl p-5 border-2 border-green-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-green-700 font-black text-sm">6</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Per-Store Limits</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      10 rewarded transactions per store per month per user. Prevents single-merchant abuse while allowing unlimited rewards across different merchants. Users can visit 50 different stores and get rewarded at all 50.
                    </p>
                  </div>

                  {/* Layer 7 */}
                  <div className="bg-white rounded-xl p-5 border-2 border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-emerald-700 font-black text-sm">7</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Delayed Redemption</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Non-refundable: Instant for base 5% cashback. Refundable: Locked until refund window expires. Social bonus: 24-hour verification window before release.
                    </p>
                  </div>

                  {/* Layer 8 */}
                  <div className="bg-white rounded-xl p-5 border-2 border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-teal-700 font-black text-sm">8</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Manual Review Queue</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      First 6 months: All redemptions &gt;AED 50 manually reviewed before approval. Scales to automated ML post-PMF.
                    </p>
                  </div>

                </div>
              </div>

              {/* Investor Answer Section */}
              <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-700 font-black text-lg">Q</span>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900 mb-2">Investor Question:</p>
                      <p className="text-base text-slate-700 italic">
                        "How do you prevent users from gaming the system with fake transactions or social shares?"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 pl-14">
                    <div>
                      <p className="text-lg font-bold text-emerald-700 mb-2">Our Answer:</p>
                      <p className="text-base text-slate-700 leading-relaxed">
                        We don't launch with open-ended rewards. Cashback timing depends on transaction type (instant for non-refundable, locked for refundable). Social bonuses require 24-hour verification. We cap rewards at <span className="font-bold text-blue-600">10 transactions per store per month per user</span> to prevent single-merchant abuse, while allowing unlimited rewards across different merchants. Behavioral ML flags suspicious patterns. Our early-stage target is <span className="font-bold text-emerald-600">&lt;5% reward leakage</span>, monitored weekly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="max-w-5xl mx-auto mt-8 grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 border-2 border-emerald-200 text-center shadow-sm">
                  <p className="text-3xl font-black text-emerald-600 mb-1">&lt;5%</p>
                  <p className="text-sm text-slate-600 font-medium">Target fraud/leakage rate</p>
                </div>
                <div className="bg-white rounded-xl p-5 border-2 border-blue-200 text-center shadow-sm">
                  <p className="text-3xl font-black text-blue-600 mb-1">10x/mo</p>
                  <p className="text-sm text-slate-600 font-medium">Per-store transaction limit</p>
                </div>
                <div className="bg-white rounded-xl p-5 border-2 border-purple-200 text-center shadow-sm">
                  <p className="text-3xl font-black text-purple-600 mb-1">8 Layers</p>
                  <p className="text-sm text-slate-600 font-medium">Defense mechanisms</p>
                </div>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 14: GTM STRATEGY ====================
      case 14:
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

      // ==================== SLIDE 15: TRACTION ====================
      case 15:
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
                  30 signed LOIs • Pre-launch commitments • Q1 2026 go-live
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  { label: "Signed LOIs", value: "30", desc: "Merchants with signed agreements", icon: Store, color: "blue" },
                  { label: "Pipeline", value: "30+", desc: "Additional merchants interested", icon: Target, color: "purple" },
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
                      <span className="font-bold text-emerald-600">30+ signed LOIs</span> with <span className="font-bold text-blue-600">30 more in pipeline</span> across Dubai Marina, Downtown, and JBR. Attacking a <span className="font-bold text-purple-600">$45B GCC SAM</span> (F&B, Beauty, Fashion, Fitness). GCC TAM: <span className="font-bold">$150B</span>.
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
                        <p className="text-sm font-semibold text-slate-600 uppercase mb-1">GCC Market (SAM)</p>
                        <p className="text-2xl font-black text-emerald-600">$45B</p>
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

      // ==================== SLIDE 16: TEAM ====================
      case 16:
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

      // ==================== SLIDE 17: THE ASK ====================
      case 17:
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
                <p className="text-2xl text-slate-700 max-w-2xl mx-auto mb-8">
                  12-month runway to launch, validate, and prep for Series A
                </p>

                {/* CCS Structure */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8 max-w-3xl mx-auto">
                  <div className="flex items-center gap-3 mb-6 justify-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-black text-slate-900">CCS Structure</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                      <p className="text-sm font-bold text-blue-600 uppercase mb-2">Valuation Cap</p>
                      <p className="text-4xl font-black text-slate-900 mb-2">$5M</p>
                      <p className="text-sm text-slate-600">Maximum conversion valuation</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500 shadow-sm">
                      <p className="text-sm font-bold text-purple-600 uppercase mb-2">Discount</p>
                      <p className="text-4xl font-black text-slate-900 mb-2">20%</p>
                      <p className="text-sm text-slate-600">On next round conversion</p>
                    </div>
                  </div>

                  <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <p className="text-sm text-emerald-800 text-center">
                      <span className="font-bold">Investor-friendly terms:</span> Converts to equity at Series A with 20% discount or $5M cap, whichever is more favorable
                    </p>
                  </div>
                </div>
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
                    { category: "Operations", percent: "25%", amount: "$125K", desc: "Wallet license, legal, admin, buffer", color: "orange" }
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

      // ==================== SLIDE 18: VISION ====================
      case 18:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-16 px-8 flex items-center justify-center">
            <div className="max-w-6xl mx-auto">

              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-full mb-4 border border-purple-500/30">
                  <span className="text-2xl">🚀</span>
                  <p className="text-sm font-bold text-purple-700 uppercase tracking-wider">Long-term Vision</p>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
                  Commerce Intelligence <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">for the GCC</span>
                </h2>
                <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                  From offline rewards platform to the shopping decision layer
                </p>
              </div>

              {/* Vision Statement Card */}
              <div className="bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-white border-2 border-purple-500/30 rounded-3xl p-8 mb-12 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl">💡</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-purple-600 uppercase tracking-wide">Our North Star</p>
                    <h3 className="text-2xl font-black text-slate-900">The 30-Second Promise</h3>
                  </div>
                </div>
                <p className="text-3xl text-slate-700 leading-relaxed font-medium mb-4">
                  "Every shopper in the GCC should find the best local deal in{' '}
                  <span className="font-black text-[#c9a227]">30 seconds</span>, not{' '}
                  <span className="font-black text-red-600">30 minutes</span>."
                </p>
                <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                  <p className="text-base text-slate-600 leading-relaxed">
                    Save 3 billion hours annually across GCC by making local discovery instant, personalized, and rewarding
                  </p>
                </div>
              </div>

              {/* 3-Phase Roadmap */}
              <div className="space-y-6 mb-12">

                {/* Phase 1: Year 1-3 */}
                <div className="bg-white border-2 border-emerald-500/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center text-xl font-black flex-shrink-0 shadow-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-black text-slate-900">Phase 1: Rewards Platform</h3>
                        <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-xs font-bold text-emerald-700">Year 1-3</span>
                      </div>
                      <p className="text-base text-slate-600 mb-4 leading-relaxed">
                        Build GCC's leading offline cashback network → Capture shopping behavior data → Establish merchant relationships
                      </p>
                      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-3 mb-4">
                        <p className="text-sm text-blue-800">
                          <span className="font-bold">Launch Model:</span> Cash-based transactions with points tracking (no wallet functionality required). Wallet features launch in Phase 2 after SVF license.
                        </p>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-xl p-4">
                          <p className="text-xs text-emerald-600 font-bold uppercase mb-2">Dubai (Y1-3)</p>
                          <div className="space-y-1">
                            <p className="text-sm text-slate-700">• 5,000 merchants</p>
                            <p className="text-sm text-slate-700">• 500K users</p>
                            <p className="text-sm text-slate-700">• AED 500M GMV</p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-4">
                          <p className="text-xs text-blue-600 font-bold uppercase mb-2">Qatar + KSA (Y4-5)</p>
                          <div className="space-y-1">
                            <p className="text-sm text-slate-700">• 15,000 merchants</p>
                            <p className="text-sm text-slate-700">• 2M users</p>
                            <p className="text-sm text-slate-700">• AED 2B GMV</p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-4">
                          <p className="text-xs text-purple-600 font-bold uppercase mb-2">Full GCC (Y6+)</p>
                          <div className="space-y-1">
                            <p className="text-sm text-slate-700">• 25,000+ merchants</p>
                            <p className="text-sm text-slate-700">• 5M+ users</p>
                            <p className="text-sm text-slate-700">• AED 5B+ GMV</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 2: Year 4-6 */}
                <div className="bg-white border-2 border-blue-500/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-xl font-black flex-shrink-0 shadow-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-black text-slate-900">Phase 2: Search & Discovery</h3>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs font-bold text-blue-700">Year 4-6</span>
                      </div>
                      <p className="text-base text-slate-600 mb-4 leading-relaxed">
                        Launch search-first discovery → "Find best salon near me" → Instant results with cashback → Become the default local search engine
                      </p>
                      <div className="grid md:grid-cols-4 gap-3">
                        <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-lg p-3 text-center">
                          <p className="text-2xl font-black text-blue-600 mb-1">10M+</p>
                          <p className="text-xs text-slate-600 font-bold">Monthly searches</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-lg p-3 text-center">
                          <p className="text-2xl font-black text-purple-600 mb-1">50K+</p>
                          <p className="text-xs text-slate-600 font-bold">Merchants indexed</p>
                        </div>
                        <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 rounded-lg p-3 text-center">
                          <p className="text-2xl font-black text-emerald-600 mb-1">100M+</p>
                          <p className="text-xs text-slate-600 font-bold">Data points</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 border border-[#c9a227]/30 rounded-lg p-3 text-center">
                          <p className="text-2xl font-black text-[#c9a227] mb-1">AI</p>
                          <p className="text-xs text-slate-600 font-bold">Personalization</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 3: Year 7-10 */}
                <div className="bg-white border-2 border-purple-500/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center text-xl font-black flex-shrink-0 shadow-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-black text-slate-900">Phase 3: Commerce Intelligence</h3>
                        <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs font-bold text-purple-700">Year 7-10</span>
                      </div>
                      <p className="text-base text-slate-600 mb-4 leading-relaxed">
                        AI-powered shopping assistant → Predictive recommendations → Merchant intelligence API → The shopping decision layer for the GCC
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-xl p-4">
                          <h4 className="text-base font-black text-purple-700 mb-3 flex items-center gap-2">
                            <span>🤖</span> Consumer AI
                          </h4>
                          <div className="space-y-2">
                            <p className="text-sm text-slate-600">• Predict shopping needs before you search</p>
                            <p className="text-sm text-slate-600">• Personalized recommendations at scale</p>
                            <p className="text-sm text-slate-600">• Cross-category intelligence</p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 border border-[#c9a227]/30 rounded-xl p-4">
                          <h4 className="text-base font-black text-[#c9a227] mb-3 flex items-center gap-2">
                            <span>📊</span> Merchant Intelligence
                          </h4>
                          <div className="space-y-2">
                            <p className="text-sm text-slate-600">• Real-time demand signals</p>
                            <p className="text-sm text-slate-600">• Dynamic pricing optimization</p>
                            <p className="text-sm text-slate-600">• Competitive positioning insights</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Vision Statement */}
              <div className="bg-gradient-to-br from-[#c9a227] via-[#d4ab2c] to-[#c9a227] text-[#0a1628] rounded-2xl p-8 shadow-2xl border-4 border-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <p className="text-3xl font-black mb-3 leading-tight">
                    From 10% cashback platform to the shopping OS of the GCC
                  </p>
                  <p className="text-lg font-bold opacity-80">
                    Capturing the $150B GCC commerce graph, one transaction at a time
                  </p>
                </div>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 19: COMPETITIVE LANDSCAPE - ALTERNATIVE VIEW ====================
      case 19:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 px-8">
            <div className="max-w-7xl mx-auto">

              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">Strategic Positioning</p>
                </div>
                <h2 className="text-5xl sm:text-6xl font-black text-slate-900 mb-6">
                  We Play a <span className="text-[#c9a227]">Different Game</span>
                </h2>
                <p className="text-lg text-blue-600 uppercase tracking-wide font-bold mb-3">
                  Beyond Head-to-Head Competition — We're Creating a New Category
                </p>
                <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto">
                  While others fight for <span className="text-red-600 font-bold">delivery market share</span>, we're building an entirely new habit: <span className="text-emerald-600 font-bold">search-first offline saving</span>. This isn't disruption—it's <span className="text-blue-600 font-bold">category creation</span>.
                </p>
              </div>

              {/* Comparison Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">

                {/* Left: What They're Missing */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <AlertCircle className="text-red-600" size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">What Incumbents Can't Do</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Noon / Careem",
                        icon: "🛒",
                        weakness: "E-commerce & Super App model",
                        why: "Can't prioritize offline discovery without cannibalizing their delivery/marketplace revenue"
                      },
                      {
                        name: "Smiles / Entertainer",
                        icon: "🎫",
                        weakness: "Discount pressure business",
                        why: "Merchants pay 30% cuts for one-time bargain hunters. Can't pivot to loyalty without losing their margin model"
                      },
                      {
                        name: "Credit Cards",
                        icon: "💳",
                        weakness: "Gated 1-2% cashback",
                        why: "Capped rewards, points expire, not search-first. Bank partnerships prevent neutrality"
                      },
                      {
                        name: "Google / Meta Ads",
                        icon: "📱",
                        weakness: "No ROI guarantee",
                        why: "AED 300-500 CAC with zero footfall guarantee. Merchants pay for clicks, not sales"
                      }
                    ].map((comp, idx) => (
                      <div key={idx} className="bg-white border-2 border-red-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-3 mb-2">
                          <span className="text-2xl">{comp.icon}</span>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-slate-900 mb-1">{comp.name}</h4>
                            <p className="text-sm text-red-600 font-semibold mb-2">⚠ {comp.weakness}</p>
                            <p className="text-sm text-slate-700 leading-relaxed">{comp.why}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Our Unique Advantages */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Trophy className="text-emerald-600" size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">What Makes Us Different</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        advantage: "Search-First Offline Discovery",
                        icon: "🔍",
                        desc: "Only platform purpose-built for 'best deals near me' intent. Not a marketplace, delivery app, or super app distraction."
                      },
                      {
                        advantage: "Performance-Based Model",
                        icon: "💰",
                        desc: "Merchants pay 15% only when customers visit. No setup fees, no monthly fees, no ad spend risk. 100% ROI guarantee."
                      },
                      {
                        advantage: "No User-Facing Redemption Restrictions",
                        icon: "♾️",
                        desc: "Users can redeem full coin balance anytime. No expiry, no visible caps, no fine print. Internal fraud controls protect budget. 10% cashback beats 1-2% cards by 5-10x."
                      },
                      {
                        advantage: "Neutral Intelligence Layer",
                        icon: "🧠",
                        desc: "We recommend best card, wallet, or BNPL for each transaction—even competitors. Merchants and users trust neutrality."
                      }
                    ].map((edge, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-300 rounded-xl p-5 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{edge.icon}</span>
                          <div className="flex-1">
                            <div className="flex items-start gap-2 mb-2">
                              <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                              <h4 className="text-lg font-bold text-emerald-700">{edge.advantage}</h4>
                            </div>
                            <p className="text-sm text-slate-700 leading-relaxed">{edge.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Why We Win - Strategic Perspective */}
              <div className="text-center mb-6">
                <p className="text-sm text-blue-600 uppercase tracking-wider font-bold mb-2">Strategic Framework</p>
                <h3 className="text-3xl font-black text-slate-900">Why This Timing Creates an Unassailable Position</h3>
              </div>

              <div className="bg-gradient-to-br from-blue-50 via-blue-50/50 to-white border-2 border-blue-200 rounded-3xl p-8 mb-8 shadow-xl">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                    <p className="text-sm text-blue-600 font-bold uppercase tracking-wide mb-2">First-Mover</p>
                    <p className="text-lg font-black text-slate-900 mb-2">12-18 Month Head Start</p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Offline rewards layer in UAE is greenfield. By the time they notice, we'll own the habit.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-l-4 border-emerald-500 shadow-sm">
                    <p className="text-sm text-emerald-600 font-bold uppercase tracking-wide mb-2">Capital Efficiency</p>
                    <p className="text-lg font-black text-slate-900 mb-2">5% Margin from Day 1</p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Profitable unit economics at launch. No need to burn cash competing with Careem/Noon on delivery.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500 shadow-sm">
                    <p className="text-sm text-purple-600 font-bold uppercase tracking-wide mb-2">Network Effects</p>
                    <p className="text-lg font-black text-slate-900 mb-2">Data Compounds Over Time</p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Behavioral shopping graph can't be scraped or bought. Every transaction deepens the moat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Callout */}
              <div className="bg-gradient-to-r from-slate-900 via-[#0a1628] to-slate-900 rounded-3xl p-10 text-center shadow-2xl border-2 border-[#c9a227]/20">
                <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full mb-4">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">Strategic Takeaway</p>
                </div>
                <p className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                  While they fight over <span className="text-red-400">delivery market share</span>, we're creating a <span className="text-blue-400">new category</span>
                </p>
                <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  We're not out-delivering Noon or out-discounting Smiles. We're building the <span className="text-[#c9a227] font-black">offline saving habit</span> —
                  a blue ocean they <span className="text-red-400 font-bold">can't enter</span> without cannibalizing their entire business model.
                </p>
                <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mt-8">
                  <div className="bg-white/5 rounded-xl p-4 border border-emerald-500/30">
                    <p className="text-2xl font-black text-emerald-400 mb-1">18x</p>
                    <p className="text-sm text-slate-400 font-medium">LTV:CAC ratio (20-day payback)</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-[#c9a227]/30">
                    <p className="text-2xl font-black text-[#c9a227] mb-1">Q1 2026</p>
                    <p className="text-sm text-slate-400 font-medium">Launch & lock the market before they react</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 20: COMPETITIVE MOAT ====================
      case 20:
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

              {/* 4 Moat Pillars */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

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

                {/* Pillar 4: Coin Lock-In Mechanism */}
                <div className="bg-white border-2 border-orange-200 rounded-2xl p-8 hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Coins className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Coin Lock-In</h3>
                  <p className="text-base text-slate-700 leading-relaxed mb-6">
                    Users with <span className="font-bold text-orange-600">10+ AED in unspent coins</span> create powerful retention:
                  </p>
                  <div className="space-y-2 mb-6 text-sm text-slate-700">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                      <span>Free POS + inventory software for merchants</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                      <span>Coins earned but not yet redeemed</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                      <span>Social bonuses creating network effects</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                      <span>Gamification driving daily app opens</span>
                    </div>
                  </div>
                  <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4">
                    <p className="text-sm font-bold text-orange-700 mb-2">Why it's defensible:</p>
                    <p className="text-sm text-slate-700">
                      Financial + behavioral lock-in. Users come back to spend their earned coins. Merchants stay for free software + loyal customers. Strong habit formation.
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

      // ==================== SLIDE 21: ROADMAP ====================
      case 21:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 px-8">
            <div className="max-w-6xl mx-auto">
              {/* Enhanced Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-blue-600/10 rounded-full mb-4 border border-blue-600/30">
                  <span className="text-2xl">🗓️</span>
                  <p className="text-sm font-bold text-blue-700 uppercase tracking-wider">GTM Roadmap</p>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-4">
                  The Path to <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">GCC Domination</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  3 Phases, 3 Horizons: Dubai → Qatar+KSA → Full GCC
                </p>
              </div>

              {/* Timeline Grid */}
              <div className="space-y-8">
                {/* Phase 1 Header */}
                <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 rounded-2xl p-6 border-2 border-emerald-500/40">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 text-white flex items-center justify-center text-xl font-black shadow-lg">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">Phase 1: Dubai Launch</h3>
                      <p className="text-sm text-slate-600 font-bold">Years 1-3 • 3 Horizons • Q1 2026 - Q4 2028</p>
                    </div>
                  </div>
                </div>

                {/* Phase 1 Horizons */}
                {[
                  {
                    phase: "Horizon 1",
                    timeline: "Months 1-12 (2026)",
                    emoji: "🚀",
                    title: "Core Verticals Launch",
                    subtitle: "Dubai Marina Focus",
                    features: ["Launch Tier 1: F&B, Grocery, Salons, Fashion, Fitness, Events", "50 merchants onboarded", "Mobile app (iOS/Android)", "Core payments + search"],
                    kpis: "500 merchants • 50K users • AED 50M GMV",
                    status: "In Progress",
                    color: "emerald",
                    bgGradient: "from-emerald-500/10 via-emerald-500/5 to-white",
                    borderColor: "border-emerald-500/30",
                    badgeBg: "from-emerald-500 to-emerald-600"
                  },
                  {
                    phase: "Horizon 2",
                    timeline: "Months 13-24 (2027)",
                    emoji: "📈",
                    title: "Category Expansion",
                    subtitle: "Add Tier 2 Categories",
                    features: ["Add Entertainment (cinemas, gaming), Home Services, Pet", "AI recommendation engine", "Merchant analytics dashboard", "B2B partnerships (banks, telcos)"],
                    kpis: "2,000 merchants • 200K users • AED 200M GMV",
                    status: "Planned",
                    color: "blue",
                    bgGradient: "from-blue-500/10 via-blue-500/5 to-white",
                    borderColor: "border-blue-500/30",
                    badgeBg: "from-blue-500 to-blue-600"
                  },
                  {
                    phase: "Horizon 3",
                    timeline: "Months 25-36 (2028)",
                    emoji: "🏙️",
                    title: "UAE Expansion",
                    subtitle: "All 7 UAE Cities",
                    features: ["Abu Dhabi + Sharjah launch", "All UAE cities (Ajman, RAK, Fujairah, UAQ)", "Multi-currency support (AED/USD)", "Series A raise preparation"],
                    kpis: "5,000 merchants • 500K users • AED 500M GMV",
                    status: "Planned",
                    color: "purple",
                    bgGradient: "from-purple-500/10 via-purple-500/5 to-white",
                    borderColor: "border-purple-500/30",
                    badgeBg: "from-purple-500 to-purple-600"
                  }
                ].map((horizon, idx) => {
                  const statusColors: Record<string, string> = {
                    "In Progress": "bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 text-emerald-700 border border-emerald-500/30",
                    "Planned": "bg-gradient-to-r from-slate-200/50 to-slate-100/30 text-slate-600 border border-slate-300/50"
                  };

                  return (
                    <div key={idx} className={`bg-gradient-to-br ${horizon.bgGradient} border-2 ${horizon.borderColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-300`}>
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        {/* Left: Phase Badge + Title */}
                        <div className="flex items-start gap-4 flex-1">
                          {/* Badge with Emoji */}
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${horizon.badgeBg} text-white flex flex-col items-center justify-center flex-shrink-0 shadow-lg`}>
                            <span className="text-2xl leading-none">{horizon.emoji}</span>
                          </div>

                          {/* Phase + Title */}
                          <div>
                            <p className={`text-xs font-bold text-${horizon.color}-600 mb-1 uppercase tracking-wider`}>{horizon.phase}</p>
                            <p className="text-xs text-slate-500 font-semibold mb-2">{horizon.timeline}</p>
                            <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-1">{horizon.title}</h3>
                            <p className="text-sm text-slate-600 font-medium">{horizon.subtitle}</p>
                          </div>
                        </div>

                        {/* Right: Status Badge */}
                        <div className={`inline-flex px-5 py-2.5 rounded-full ${statusColors[horizon.status]} text-sm font-bold shadow-sm flex-shrink-0`}>
                          {horizon.status}
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="mt-6 space-y-3">
                        {horizon.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-start gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50">
                            <CheckCircle2 size={20} className={`text-${horizon.color}-600 flex-shrink-0 mt-0.5`} />
                            <p className="text-sm font-medium text-slate-700 leading-snug">{feature}</p>
                          </div>
                        ))}
                      </div>

                      {/* KPIs */}
                      <div className="mt-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-slate-200">
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-1">Target KPIs</p>
                        <p className="text-base font-black text-slate-900">{horizon.kpis}</p>
                      </div>
                    </div>
                  );
                })}

                {/* Phase 2 Header */}
                <div className="bg-gradient-to-r from-blue-600/20 to-blue-600/10 rounded-2xl p-6 border-2 border-blue-600/40 mt-8">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center text-xl font-black shadow-lg">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">Phase 2: GCC Expansion</h3>
                      <p className="text-sm text-slate-600 font-bold">Years 4-5 • Qatar + Saudi Arabia • 2029-2030</p>
                    </div>
                  </div>
                </div>

                {/* Phase 2 Details */}
                {[
                  {
                    phase: "Phase 2",
                    timeline: "Years 4-5 (2029-2030)",
                    emoji: "🌍",
                    title: "Qatar + Saudi Arabia",
                    subtitle: "Largest GCC Markets",
                    features: ["Qatar launch (Doha) - Q1 2029", "Saudi Arabia (Riyadh, Jeddah, Dammam) - Q3 2029", "Replicate proven Dubai playbook", "Local partnerships + regulatory compliance"],
                    kpis: "15,000 merchants • 2M users • AED 2B GMV",
                    status: "Planned",
                    color: "blue",
                    bgGradient: "from-blue-600/10 via-blue-600/5 to-white",
                    borderColor: "border-blue-600/30",
                    badgeBg: "from-blue-600 to-blue-500"
                  }
                ].map((phase, idx) => {
                  const statusColors: Record<string, string> = {
                    "In Progress": "bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 text-emerald-700 border border-emerald-500/30",
                    "Planned": "bg-gradient-to-r from-slate-200/50 to-slate-100/30 text-slate-600 border border-slate-300/50"
                  };

                  return (
                    <div key={`phase2-${idx}`} className={`bg-gradient-to-br ${phase.bgGradient} border-2 ${phase.borderColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-300`}>
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        {/* Left: Phase Badge + Title */}
                        <div className="flex items-start gap-4 flex-1">
                          {/* Badge with Emoji */}
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.badgeBg} text-white flex flex-col items-center justify-center flex-shrink-0 shadow-lg`}>
                            <span className="text-2xl leading-none">{phase.emoji}</span>
                          </div>

                          {/* Phase + Title */}
                          <div>
                            <p className={`text-xs font-bold text-${phase.color}-600 mb-1 uppercase tracking-wider`}>{phase.phase}</p>
                            <p className="text-xs text-slate-500 font-semibold mb-2">{phase.timeline}</p>
                            <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-1">{phase.title}</h3>
                            <p className="text-sm text-slate-600 font-medium">{phase.subtitle}</p>
                          </div>
                        </div>

                        {/* Right: Status Badge */}
                        <div className={`inline-flex px-5 py-2.5 rounded-full ${statusColors[phase.status]} text-sm font-bold shadow-sm flex-shrink-0`}>
                          {phase.status}
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="mt-6 space-y-3">
                        {phase.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-start gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50">
                            <CheckCircle2 size={20} className={`text-${phase.color}-600 flex-shrink-0 mt-0.5`} />
                            <p className="text-sm font-medium text-slate-700 leading-snug">{feature}</p>
                          </div>
                        ))}
                      </div>

                      {/* KPIs */}
                      <div className="mt-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-slate-200">
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-1">Target KPIs</p>
                        <p className="text-base font-black text-slate-900">{phase.kpis}</p>
                      </div>
                    </div>
                  );
                })}

                {/* Phase 3 Header */}
                <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 rounded-2xl p-6 border-2 border-[#c9a227]/40 mt-8">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a227] to-[#d4ab2c] text-[#0a1628] flex items-center justify-center text-xl font-black shadow-lg">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">Phase 3: Full GCC Coverage</h3>
                      <p className="text-sm text-slate-600 font-bold">Year 6+ • Kuwait, Bahrain, Oman • 2031+</p>
                    </div>
                  </div>
                </div>

                {/* Phase 3 Details */}
                {[
                  {
                    phase: "Phase 3",
                    timeline: "Year 6+ (2031+)",
                    emoji: "🏆",
                    title: "Full GCC Domination",
                    subtitle: "Market Leader Position",
                    features: ["Kuwait launch - Q1 2031", "Bahrain launch - Q2 2031", "Oman launch - Q3 2031", "Complete GCC rewards market dominance"],
                    kpis: "25,000+ merchants • 5M+ users • AED 5B+ GMV",
                    status: "Planned",
                    color: "amber",
                    bgGradient: "from-[#c9a227]/10 via-[#c9a227]/5 to-white",
                    borderColor: "border-[#c9a227]/30",
                    badgeBg: "from-[#c9a227] to-[#d4ab2c]"
                  }
                ].map((phase, idx) => {
                  const statusColors: Record<string, string> = {
                    "In Progress": "bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 text-emerald-700 border border-emerald-500/30",
                    "Planned": "bg-gradient-to-r from-slate-200/50 to-slate-100/30 text-slate-600 border border-slate-300/50"
                  };

                  return (
                    <div key={`phase3-${idx}`} className={`bg-gradient-to-br ${phase.bgGradient} border-2 ${phase.borderColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-300`}>
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        {/* Left: Phase Badge + Title */}
                        <div className="flex items-start gap-4 flex-1">
                          {/* Badge with Emoji */}
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.badgeBg} text-white flex flex-col items-center justify-center flex-shrink-0 shadow-lg`}>
                            <span className="text-2xl leading-none">{phase.emoji}</span>
                          </div>

                          {/* Phase + Title */}
                          <div>
                            <p className="text-xs font-bold text-[#c9a227] mb-1 uppercase tracking-wider">{phase.phase}</p>
                            <p className="text-xs text-slate-500 font-semibold mb-2">{phase.timeline}</p>
                            <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-1">{phase.title}</h3>
                            <p className="text-sm text-slate-600 font-medium">{phase.subtitle}</p>
                          </div>
                        </div>

                        {/* Right: Status Badge */}
                        <div className={`inline-flex px-5 py-2.5 rounded-full ${statusColors[phase.status]} text-sm font-bold shadow-sm flex-shrink-0`}>
                          {phase.status}
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="mt-6 space-y-3">
                        {phase.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-start gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50">
                            <CheckCircle2 size={20} className="text-[#c9a227] flex-shrink-0 mt-0.5" />
                            <p className="text-sm font-medium text-slate-700 leading-snug">{feature}</p>
                          </div>
                        ))}
                      </div>

                      {/* KPIs */}
                      <div className="mt-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-slate-200">
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-1">Target KPIs</p>
                        <p className="text-base font-black text-slate-900">{phase.kpis}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA Banner */}
              <div className="mt-12 bg-gradient-to-br from-[#c9a227] via-[#d4ab2c] to-[#c9a227] text-[#0a1628] rounded-3xl p-8 text-center shadow-xl">
                <p className="text-3xl lg:text-4xl font-black mb-3">From Dubai beta to GCC market leader in 6 years</p>
                <p className="text-lg font-medium opacity-90">3 Phases. 3 Horizons. 25,000+ merchants. AED 5B+ GMV.</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 22: TECHNOLOGY ====================
      case 22:
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

      // ==================== SLIDE 23-27: CLOSING SLIDES ====================
      case 23:
      case 24:
      case 25:
      case 26:
      case 27:
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
