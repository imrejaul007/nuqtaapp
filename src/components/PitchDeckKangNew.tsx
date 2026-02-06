'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, PieChart, Pie, LineChart, Line, AreaChart, Area, ResponsiveContainer, Legend } from 'recharts';
import { SectionHeader, MetricCard, FeatureCard, FlowStep, ComparisonPanel, ChartContainer, IconCard, AnimatedNumber } from './pitch-deck';
import { typography, colors, spacing, decorative } from '@/constants/design-tokens';
import { chartColors, chartTheme, formatCurrency, formatPercentage, formatPieLabel } from '@/constants/chart-config';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import { Search, Lock, CreditCard, DollarSign, Gift, TrendingUp, TrendingDown, Store, Handshake, Building2, Megaphone, Users, BarChart3, Globe, Target, ShoppingBag, Ban, Link as LinkIcon, Coins, User, CheckCircle, CheckCircle2, Sparkles, Package, Calendar, ArrowRight, Briefcase, GraduationCap, Video, Shirt, ShoppingCart, PartyPopper, Trophy, MapPin, Zap, Palette, UserPlus, Repeat, AlertCircle, AlertTriangle, Clock, Smartphone, Shield, Rocket } from 'lucide-react';

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
  const [activeNiche, setActiveNiche] = useState('fnb');
  const totalSlides = 31;

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
              <div className="absolute top-20 left-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#c9a227]/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-20 right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
                <h1 className={`${typography.metricHero} bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent tracking-tighter leading-[0.9] drop-shadow-2xl`}>
                  Nuqta
                </h1>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4ab2c] blur-xl opacity-30" />
                  <p className={`${typography.h2} text-white relative z-10`}>
                    Search. Save. Earn.
                  </p>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-[#c9a227]/20 via-[#c9a227]/10 to-[#c9a227]/20 border-2 border-[#c9a227]/30 rounded-2xl p-8 backdrop-blur-sm">
                  <p className={`${typography.h3} text-white leading-relaxed`}>
                    <span className="text-[#c9a227] font-black">10% offline cashback</span> on every purchase —{' '}
                    <span className="font-semibold">5x better than credit cards</span>
                  </p>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-8">
                <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-2xl p-6 hover:shadow-2xl hover:shadow-[#c9a227]/20 transition-all backdrop-blur-sm">
                  <p className={`${typography.metric} text-[#c9a227] mb-2`}>
                    <AnimatedNumber value={35} prefix="$" suffix="B" duration={2000} />
                  </p>
                  <p className={`${typography.labelEyebrow} text-white`}>GCC SAM</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-500/40 rounded-2xl p-6 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all backdrop-blur-sm">
                  <p className={`${typography.metric} text-emerald-400 mb-2`}>10x</p>
                  <p className={`${typography.labelEyebrow} text-white`}>LTV:CAC</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/40 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all backdrop-blur-sm">
                  <p className={`${typography.metric} text-blue-400 mb-2`}>32</p>
                  <p className={`${typography.labelEyebrow} text-white`}>Signed LOIs</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/40 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all backdrop-blur-sm">
                  <p className={`${typography.metricMedium} text-purple-400 mb-2`}>March 1, 2026</p>
                  <p className={`${typography.labelEyebrow} text-white`}>Launch</p>
                </div>
              </div>

              {/* The Ask */}
              <div className="pt-8">
                <div className="inline-flex flex-col items-center gap-4">
                  <div className="bg-gradient-to-r from-[#c9a227] via-[#d4ab2c] to-[#c9a227] px-10 py-5 rounded-2xl shadow-2xl shadow-[#c9a227]/30 border-4 border-white/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <p className={`${typography.h3} text-[#0a1628] relative z-10`}>Raising $400K Pre-Seed</p>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-3 bg-slate-800/50 border-2 border-emerald-500/40 rounded-full backdrop-blur-sm">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <p className={`${typography.bodySmall} font-bold text-emerald-400`}>SAFE • 20% Discount • $5M Cap</p>
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
                    <span className="text-sm font-semibold">rejaul@nuqtapp.com</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-600" />
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">nuqtapp.com</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 1: SHOPPER PROBLEM - UPGRADED VISUAL STORYTELLING ====================
      case 1:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-red-50 via-orange-50/30 to-white py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">

              {/* Header with emotional hook */}
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6 shadow-lg">
                  <p className={`${typography.label} font-bold text-white uppercase tracking-wider`}>The Hidden Tragedy</p>
                </div>
                <h2 className={`${typography.h1} font-black text-slate-900 mb-6 leading-tight`}>
                  Shoppers Waste <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">AED 2.4B</span> Annually
                </h2>
                <p className={`${typography.h3} text-slate-600 max-w-3xl mx-auto leading-relaxed`}>
                  95% of offline spending gets <span className="font-bold text-red-600">zero rewards</span>.
                  That's AED 684 per person, every year, left on the table.
                </p>
              </div>

              {/* Hero Stat - Dramatic Visual */}
              <div className="bg-gradient-to-br from-red-600 via-red-500 to-orange-500 rounded-3xl p-8 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-white">
                      <p className={`${typography.bodyLarge} mb-3 opacity-90 uppercase tracking-wider font-bold`}>Every Shopper Loses Per Year</p>
                      <p className={`${typography.metricHero} font-black tracking-tight mb-4`}>
                        <AnimatedNumber value={684} prefix="AED " duration={2000} />
                      </p>
                      <p className={`${typography.bodyLarge} opacity-90`}>Just by shopping at places without cashback</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                        <p className={`${typography.label} text-white/80 mb-2`}>Total Market Loss</p>
                        <p className={`${typography.h3} font-black text-white`}>AED 2.4B</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                        <p className={`${typography.label} text-white/80 mb-2`}>Offline Spend</p>
                        <p className={`${typography.h3} font-black text-white`}>95%</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 col-span-2">
                        <p className={`${typography.label} text-white/80 mb-2`}>Without Rewards</p>
                        <p className={`${typography.h3} font-black text-white`}>AED 684/person</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Pain Points - Enhanced Cards with Better Visual Hierarchy */}
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {/* Pain Point 1 */}
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                      <Search className="text-white" size={32} />
                    </div>
                    <h3 className={`${typography.h3} font-bold text-slate-900 mb-3`}>Can't Find Deals</h3>
                    <p className={`${typography.body} text-slate-600 leading-relaxed mb-6`}>
                      Search "coffee deals near me" — get Google ads, not actual offers from local cafés
                    </p>
                    <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-500">
                      <p className={`${typography.metric} font-black text-red-600 mb-1`}>73%</p>
                      <p className={`${typography.label} text-slate-600 font-medium`}>Don't know local deals exist</p>
                    </div>
                  </div>
                </div>

                {/* Pain Point 2 */}
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                      <Lock className="text-white" size={32} />
                    </div>
                    <h3 className={`${typography.h3} font-bold text-slate-900 mb-3`}>Gated Rewards</h3>
                    <p className={`${typography.body} text-slate-600 leading-relaxed mb-6`}>
                      Points expire, minimum spends, blackout dates — rewards designed to never be used
                    </p>
                    <div className="bg-orange-50 rounded-xl p-4 border-l-4 border-orange-500">
                      <p className={`${typography.metric} font-black text-orange-600 mb-1`}>AED 450M</p>
                      <p className={`${typography.label} text-slate-600 font-medium`}>Unredeemed points per year</p>
                    </div>
                  </div>
                </div>

                {/* Pain Point 3 */}
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-yellow-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                      <CreditCard className="text-white" size={32} />
                    </div>
                    <h3 className={`${typography.h3} font-bold text-slate-900 mb-3`}>No Local Cashback</h3>
                    <p className={`${typography.body} text-slate-600 leading-relaxed mb-6`}>
                      Credit cards reward Amazon, not the café downstairs — local businesses get forgotten
                    </p>
                    <div className="bg-yellow-50 rounded-xl p-4 border-l-4 border-yellow-500">
                      <p className={`${typography.metric} font-black text-yellow-600 mb-1`}>0.5%</p>
                      <p className={`${typography.label} text-slate-600 font-medium`}>Avg cashback on local purchases</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Callout - Emotional Impact */}
              <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-center shadow-2xl">
                <p className={`${typography.h3} font-bold text-white mb-3`}>
                  The result? <span className="text-red-400">3.5 million shoppers</span> leave money on the table, every single day.
                </p>
                <p className={`${typography.bodyLarge} text-slate-300`}>
                  While e-commerce gets 2-5% cashback, offline gets <span className="font-bold text-yellow-400">almost nothing</span>.
                </p>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 2: MERCHANT PROBLEM - UPGRADED VISUAL STORYTELLING ====================
      case 2:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 via-red-50/30 to-white py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">

              {/* Header with emotional hook */}
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6 shadow-lg">
                  <p className={`${typography.label} font-bold text-white uppercase tracking-wider`}>The Other Side</p>
                </div>
                <h2 className={`${typography.h1} font-black text-slate-900 mb-6 leading-tight`}>
                  Merchants Burn <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">AED 12B/Year</span>
                </h2>
                <p className={`${typography.h3} text-slate-600 max-w-3xl mx-auto leading-relaxed`}>
                  Google Ads cost <span className="font-bold text-red-600">AED 200/customer</span> with zero guarantee.
                  Small merchants can't compete, can't retain, can't survive.
                </p>
              </div>

              {/* Dramatic Metrics Dashboard - 4 Key Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="group bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12" />
                  <div className="relative z-10">
                    <p className={`${typography.label} text-white/80 uppercase tracking-wider mb-2 font-bold`}>CAC (Digital)</p>
                    <p className={`${typography.metricXL} font-black text-white mb-2`}>
                      <AnimatedNumber value={200} prefix="AED " duration={1500} />
                    </p>
                    <p className={`${typography.label} text-white/90 font-medium`}>3x higher than sustainable</p>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12" />
                  <div className="relative z-10">
                    <p className={`${typography.label} text-white/80 uppercase tracking-wider mb-2 font-bold`}>Repeat Rate</p>
                    <p className={`${typography.metricXL} font-black text-white mb-2`}>
                      <AnimatedNumber value={15} suffix="%" duration={1500} />
                    </p>
                    <p className={`${typography.label} text-white/90 font-medium`}>85% never come back</p>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12" />
                  <div className="relative z-10">
                    <p className={`${typography.label} text-white/80 uppercase tracking-wider mb-2 font-bold`}>LTV:CAC</p>
                    <p className={`${typography.metricXL} font-black text-white mb-2`}>
                      <AnimatedNumber value={1.2} decimals={1} suffix="x" duration={1500} />
                    </p>
                    <p className={`${typography.label} text-white/90 font-medium`}>vs 3x+ needed</p>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12" />
                  <div className="relative z-10">
                    <p className={`${typography.label} text-white/80 uppercase tracking-wider mb-2 font-bold`}>Net Margin</p>
                    <p className={`${typography.metricXL} font-black text-white mb-2`}>
                      <AnimatedNumber value={7.5} decimals={1} suffix="%" duration={1500} />
                    </p>
                    <p className={`${typography.label} text-white/90 font-medium`}>vs 25% target</p>
                  </div>
                </div>
              </div>

              {/* 3 Core Problems - Enhanced Visual Cards */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* Problem 1: Discovery */}
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                      <Megaphone className="text-white" size={32} />
                    </div>
                    <h3 className={`${typography.h3} font-bold text-slate-900 mb-2`}>Invisible Locally</h3>
                    <p className={`${typography.label} text-slate-500 mb-6`}>Unknown to neighbors 100m away</p>

                    <div className="space-y-4">
                      <div className="bg-orange-50 rounded-xl p-4 border-l-4 border-orange-500">
                        <div className="flex justify-between items-center mb-2">
                          <span className={`${typography.label} font-medium text-slate-700`}>Monthly ad spend</span>
                          <span className={`${typography.h3} font-black text-orange-600`}>AED 35K</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={`${typography.label} font-medium text-slate-700`}>Local awareness</span>
                          <span className={`${typography.h3} font-black text-slate-900`}>&lt;10%</span>
                        </div>
                      </div>
                      <p className={`${typography.label} text-slate-600 italic`}>Burning cash on Google bidding wars for tourists, not locals</p>
                    </div>
                  </div>
                </div>

                {/* Problem 2: High CAC */}
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                      <DollarSign className="text-white" size={32} />
                    </div>
                    <h3 className={`${typography.h3} font-bold text-slate-900 mb-2`}>CAC Too High</h3>
                    <p className={`${typography.label} text-slate-500 mb-6`}>Need 3 purchases just to break even</p>

                    <div className="space-y-4">
                      <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-500">
                        <div className="flex justify-between items-center mb-2">
                          <span className={`${typography.label} font-medium text-slate-700`}>Cost per customer</span>
                          <span className={`${typography.h3} font-black text-red-600`}>AED 200</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={`${typography.label} font-medium text-slate-700`}>Avg transaction</span>
                          <span className={`${typography.h3} font-black text-slate-900`}>AED 85</span>
                        </div>
                      </div>
                      <p className={`${typography.label} text-slate-600 italic`}>85% of merchants operate at negative ROI for months</p>
                    </div>
                  </div>
                </div>

                {/* Problem 3: Retention */}
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-yellow-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                      <Users className="text-white" size={32} />
                    </div>
                    <h3 className={`${typography.h3} font-bold text-slate-900 mb-2`}>No Retention</h3>
                    <p className={`${typography.label} text-slate-500 mb-6`}>One-time buyers, never loyal</p>

                    <div className="space-y-4">
                      <div className="bg-yellow-50 rounded-xl p-4 border-l-4 border-yellow-500">
                        <div className="flex justify-between items-center mb-2">
                          <span className={`${typography.label} font-medium text-slate-700`}>Repeat rate (90d)</span>
                          <span className={`${typography.h3} font-black text-yellow-600`}>15%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={`${typography.label} font-medium text-slate-700`}>Never return</span>
                          <span className={`${typography.h3} font-black text-slate-900`}>85%</span>
                        </div>
                      </div>
                      <p className={`${typography.label} text-slate-600 italic`}>No data, no relationships, no competitive advantage</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Callout - The Vicious Cycle */}
              <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-center shadow-2xl">
                <p className={`${typography.h3} font-bold text-white mb-3`}>
                  The vicious cycle: <span className="text-orange-400">High CAC → Low margin → Can't invest in retention → Repeat</span>
                </p>
                <p className={`${typography.bodyLarge} text-slate-300`}>
                  Small merchants are stuck. They need <span className="font-bold text-emerald-400">performance-based discovery</span>, not ad bidding wars.
                </p>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 3: MARKET OPPORTUNITY (PREMIUM ✓✓✓) ====================
      case 3:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 px-8 flex items-center justify-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#c9a227]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto w-full relative z-10">

              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 rounded-full mb-4 border border-[#c9a227]/30 shadow-lg">
                  <Target className="text-[#c9a227]" size={24} />
                  <p className={`${typography.bodySmall} font-bold text-[#c9a227] uppercase tracking-wider`}>Market Opportunity</p>
                </div>
                <h2 className={`${typography.h1} text-slate-900 mb-4 leading-tight`}>
                  <span className="bg-gradient-to-r from-[#c9a227] via-[#d4ab2c] to-[#c9a227] bg-clip-text text-transparent drop-shadow-sm">$35B</span> GCC Market
                </h2>
                <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  F&B, Beauty, Fashion & Fitness across 6 GCC countries
                </p>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-5 gap-8 items-start">

                {/* LEFT: Recharts Nested Pie Chart - 2 columns */}
                <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-white rounded-3xl shadow-2xl p-8 border-2 border-blue-200/50 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                  {/* Subtle background orb */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl" />

                  <div className="text-center mb-6 relative z-10">
                    <h3 className={`${typography.h2} text-slate-900 mb-2`}>Market Funnel</h3>
                    <p className={`${typography.body} text-slate-600 font-medium`}>Progressive capture strategy</p>
                  </div>
                  <div className="h-80 flex items-center justify-center relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[{ name: 'SAM', value: 35, fill: '#6366f1' }]}
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
                          data={[{ name: 'SAM', value: 35, fill: '#6366f1' }]}
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
                          data={[{ name: 'SOM', value: 1.05, fill: '#c9a227' }]}
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
                        <p className={`${typography.labelMicro} font-bold text-slate-400 uppercase tracking-wider`}>Target</p>
                        <p className={`${typography.h3} text-[#c9a227]`}>$1.35B</p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Legend */}
                  <div className="grid grid-cols-2 gap-6 mt-6 relative z-10 max-w-md mx-auto">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl mx-auto mb-2 shadow-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                      </div>
                      <p className="text-sm font-bold text-slate-700 mb-1">SAM</p>
                      <p className="text-lg font-black text-indigo-600">$35B</p>
                      <p className="text-xs text-slate-500 mt-1">GCC: F&B, Beauty, Fashion, Fitness</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#c9a227] to-[#a8851f] rounded-xl mx-auto mb-2 shadow-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                      </div>
                      <p className="text-sm font-bold text-slate-700 mb-1">SOM</p>
                      <p className="text-lg font-black text-[#c9a227]">$1.05B</p>
                      <p className="text-xs text-slate-500 mt-1">Dubai (3% of SAM)</p>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Market Breakdown - 2 columns (removed TAM, only SAM & SOM) */}
                <div className="lg:col-span-3 space-y-4">
                  {/* SAM Card */}
                  <div className="bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-white border-2 border-indigo-500/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Target className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className={`${typography.h4} text-slate-900`}>Serviceable Addressable Market</h3>
                          <p className={`${typography.bodySmall} text-slate-600`}>4 Verticals (H1 Focus)</p>
                        </div>
                      </div>
                      <p className={`${typography.metricMedium} bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent`}>$35B</p>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <DataPoint
                        value="H1 verticals only: F&B ($15B), Beauty ($8B), Fashion ($8B), Fitness ($4B) across 6 GCC countries - businesses with high repeat purchase frequency and amenability to rewards programs"
                        source="GCC sector reports 2024-2025: F&B, Beauty, Fashion, Fitness market sizing"
                      />
                    </p>
                  </div>

                  {/* SOM Card - Enhanced with Phases */}
                  <div className="bg-gradient-to-br from-[#c9a227]/10 via-[#c9a227]/5 to-white border-2 border-[#c9a227]/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#c9a227] to-[#d4ab2c] rounded-xl flex items-center justify-center shadow-lg">
                          <Rocket className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className={`${typography.h4} text-slate-900`}>Serviceable Obtainable Market</h3>
                          <p className={`${typography.bodySmall} text-slate-600`}>Dubai 3-Year Target (3% of SAM)</p>
                        </div>
                      </div>
                      <p className={`${typography.metricMedium} bg-gradient-to-r from-[#c9a227] to-[#d4ab2c] bg-clip-text text-transparent`}>$1.05B</p>
                    </div>

                    {/* Phase 1: Dubai Horizons */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 mb-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-sm">
                          <span className={`${typography.labelMicro} text-white font-black`}>1</span>
                        </div>
                        <p className={`${typography.label} font-black text-slate-900`}>Phase 1: Dubai (Year 1-3)</p>
                      </div>

                      <div className="space-y-2">
                        <div className="bg-gradient-to-r from-emerald-50 to-white border-l-3 border-emerald-500 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-1">
                            <p className={`${typography.labelMicro} font-bold text-emerald-700 flex items-center gap-1.5`}><Sparkles size={14} className="text-emerald-700" /> Horizon 1 (M1-12)</p>
                            <p className={`${typography.bodyLarge} font-black text-emerald-600`}>$150M</p>
                          </div>
                          <p className={`${typography.labelMicro} text-slate-600`}>F&B • Grocery • Salons • Fashion • Fitness • Events (pop-ups, exhibitions)</p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-white border-l-3 border-blue-500 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-1">
                            <p className={`${typography.labelMicro} font-bold text-blue-700 flex items-center gap-1.5`}><TrendingUp size={14} className="text-blue-700" /> Horizon 2 (M13-24)</p>
                            <p className={`${typography.bodyLarge} font-black text-blue-600`}>$450M</p>
                          </div>
                          <p className={`${typography.labelMicro} text-slate-600`}>+ Entertainment (cinemas, gaming) • Home Services • Pet</p>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-white border-l-3 border-purple-500 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-1">
                            <p className={`${typography.labelMicro} font-bold text-purple-700 flex items-center gap-1.5`}><Globe size={14} className="text-purple-700" /> Horizon 3 (M25-36)</p>
                            <p className={`${typography.bodyLarge} font-black text-purple-600`}>$750M</p>
                          </div>
                          <p className={`${typography.labelMicro} text-slate-600`}>All UAE cities (Abu Dhabi • Sharjah • Ajman • RAK • Fujairah)</p>
                        </div>
                      </div>
                    </div>

                    {/* Phase 2 & 3 - Compact */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gradient-to-br from-blue-100/50 to-white border border-blue-200 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                            <span className={`${typography.labelMicro} text-white font-black`}>2</span>
                          </div>
                          <p className={`${typography.labelMicro} font-bold text-slate-700`}>Phase 2 (Y4-5)</p>
                        </div>
                        <p className={`${typography.label} font-black text-blue-600 mb-1`}>$3B+</p>
                        <p className={`${typography.labelMicro} text-slate-600`}>Qatar + KSA</p>
                      </div>

                      <div className="bg-gradient-to-br from-purple-100/50 to-white border border-purple-200 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-sm">
                            <span className={`${typography.labelMicro} text-white font-black`}>3</span>
                          </div>
                          <p className={`${typography.labelMicro} font-bold text-slate-700`}>Phase 3 (Y6+)</p>
                        </div>
                        <p className={`${typography.label} font-black text-purple-600 mb-1`}>$5B+</p>
                        <p className={`${typography.labelMicro} text-slate-600`}>Full GCC</p>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-4 bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-3">
                      <p className={`${typography.labelMicro} text-center text-slate-700`}>
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

      // ==================== SLIDE 4: WHY NOW (PREMIUM ✓✓✓) ====================
      case 4:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-purple-50/30 to-white py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto relative z-10">

              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                  <p className={`${typography.labelEyebrow} text-blue-700`}>Perfect Timing</p>
                </div>
                <h2 className={`${typography.h1} text-slate-900 mb-4`}>
                  Why <span className="text-[#c9a227]">Now?</span>
                </h2>
                <p className={`${typography.h3} text-slate-600 max-w-3xl mx-auto`}>
                  Four converging trends make this the perfect moment for Nuqta
                </p>
              </div>

              {/* 4 Timing Factors in 2x2 Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-6xl mx-auto">
                {[
                  {
                    icon: Search,
                    title: "Search-First Shopping",
                    subtitle: "UAE Trend Shift",
                    stat: "67%",
                    description: "of UAE shoppers now start product research with search engines, not brand websites or apps",
                    source: "Google Trends UAE 2024 • Euromonitor Consumer Survey",
                    color: "blue",
                    delay: "0ms"
                  },
                  {
                    icon: TrendingUp,
                    title: "Shop Local Movement",
                    subtitle: "Post-Pandemic Surge",
                    stat: "83%",
                    description: "of UAE residents prefer supporting local businesses when given convenient options",
                    source: "Dubai Chamber of Commerce 2024",
                    color: "emerald",
                    delay: "100ms"
                  },
                  {
                    icon: Zap,
                    title: "AI Maturity",
                    subtitle: "Tech Enabler",
                    stat: "2024",
                    description: "LLMs make real-time semantic search + personalized routing finally affordable at scale",
                    source: "OpenAI GPT-4 • Claude 3.5 • Vector DB advancements",
                    color: "purple",
                    delay: "200ms"
                  },
                  {
                    icon: DollarSign,
                    title: "CAC Crisis",
                    subtitle: "Market Pain Point",
                    stat: "+340%",
                    description: "Digital ad costs since 2020 — merchants desperate for affordable acquisition channels",
                    source: "Meta Ads Manager UAE Data • Google Ads Benchmark Report",
                    color: "red",
                    delay: "300ms"
                  }
                ].map((factor, idx) => {
                  const Icon = factor.icon;
                  const bgGradient = factor.color === "blue" ? "from-blue-50 to-blue-100" :
                                     factor.color === "emerald" ? "from-emerald-50 to-emerald-100" :
                                     factor.color === "purple" ? "from-purple-50 to-purple-100" :
                                     "from-red-50 to-red-100";
                  const borderColor = factor.color === "blue" ? "border-blue-200" :
                                     factor.color === "emerald" ? "border-emerald-200" :
                                     factor.color === "purple" ? "border-purple-200" :
                                     "border-red-200";
                  const iconBg = factor.color === "blue" ? "bg-blue-500" :
                                 factor.color === "emerald" ? "bg-emerald-500" :
                                 factor.color === "purple" ? "bg-purple-500" :
                                 "bg-red-500";
                  const statColor = factor.color === "blue" ? "text-blue-600" :
                                   factor.color === "emerald" ? "text-emerald-600" :
                                   factor.color === "purple" ? "text-purple-600" :
                                   "text-red-600";

                  return (
                    <div
                      key={idx}
                      className={`bg-gradient-to-br ${bgGradient} border-2 ${borderColor} rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
                      style={{ animationDelay: factor.delay }}
                    >
                      {/* Icon + Title */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <Icon className="text-white" size={32} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`${typography.h3} font-black text-slate-900 mb-1 leading-tight`}>{factor.title}</h3>
                          <p className={`${typography.label} font-bold text-[#c9a227] uppercase tracking-wide`}>{factor.subtitle}</p>
                        </div>
                      </div>

                      {/* Stat Badge */}
                      <div className="mb-4">
                        <div className="inline-block bg-white border-2 border-white/50 rounded-xl px-4 py-2 shadow-md">
                          <p className={`${typography.metric} font-black ${statColor}`}>{factor.stat}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`${typography.bodyLarge} text-slate-700 leading-relaxed mb-6 font-medium`}>
                        {factor.description}
                      </p>

                      {/* Source */}
                      <div className="pt-4 border-t-2 border-white/50">
                        <p className={`${typography.labelMicro} text-slate-600 font-semibold`}>{factor.source}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Convergence Visual */}
              <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-r from-slate-900 via-[#0a1628] to-slate-900 rounded-3xl p-10 text-center shadow-2xl border-2 border-[#c9a227]/30">
                  <div className="inline-block px-4 py-2 bg-[#c9a227]/20 rounded-full mb-4">
                    <p className={`${typography.labelEyebrow} text-[#c9a227]`}>The Perfect Storm</p>
                  </div>
                  <p className={`${typography.h2} font-black text-white mb-6 leading-tight`}>
                    These 4 trends converge in <span className="text-[#c9a227]">2026</span> to create a <span className="text-emerald-400">once-in-a-decade</span> opportunity
                  </p>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-blue-500/30">
                      <p className={`${typography.label} font-bold text-blue-400 mb-1`}>Search</p>
                      <p className={`${typography.labelMicro} text-slate-300`}>Behavior shift</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-emerald-500/30">
                      <p className={`${typography.label} font-bold text-emerald-400 mb-1`}>Local</p>
                      <p className={`${typography.labelMicro} text-slate-300`}>Consumer preference</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-purple-500/30">
                      <p className={`${typography.label} font-bold text-purple-400 mb-1`}>AI</p>
                      <p className={`${typography.labelMicro} text-slate-300`}>Tech enabler</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-red-500/30">
                      <p className={`${typography.label} font-bold text-red-400 mb-1`}>CAC</p>
                      <p className={`${typography.labelMicro} text-slate-300`}>Market pain</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FOMO: First-Mover Advantage Window */}
              <div className="max-w-4xl mx-auto mt-8">
                <div className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-3xl p-1 shadow-2xl">
                  <div className="bg-slate-900 rounded-[22px] p-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <AlertCircle className="w-6 h-6 text-orange-400" />
                      <h3 className={`${typography.h3} font-black text-white`}>12-18 Month Window</h3>
                    </div>
                    <p className={`${typography.bodyLarge} text-slate-300 text-center mb-6`}>
                      First-mover advantage before UAE competitors pivot to offline rewards
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-slate-800/50 border border-orange-500/30 rounded-xl p-4 text-center">
                        <p className={`${typography.h3} font-black text-orange-400 mb-1`}>March 1, 2026</p>
                        <p className={`${typography.label} text-slate-400`}>Launch before competitors</p>
                      </div>
                      <div className="bg-slate-800/50 border border-red-500/30 rounded-xl p-4 text-center">
                        <p className={`${typography.h3} font-black text-red-400 mb-1`}>Q4 2026</p>
                        <p className={`${typography.label} text-slate-400`}>Establish UAE market lead</p>
                      </div>
                      <div className="bg-slate-800/50 border border-orange-500/30 rounded-xl p-4 text-center">
                        <p className={`${typography.h3} font-black text-orange-400 mb-1`}>2027</p>
                        <p className={`${typography.label} text-slate-400`}>Raise Series A as category leader</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 5: SOLUTION OVERVIEW WITH NICHE TABS ====================
      case 5:
        const nicheExamples = {
          fnb: {
            icon: '☕',
            name: 'F&B',
            color: 'orange',
            // Journey flow
            discover: {
              step: 'Search & Discover',
              search: 'coffee deals near me',
              result: 'Finds 15 cafés within 3km'
            },
            deals: {
              step: 'Find Deals & Offers',
              merchant: 'Local Café (Marina)',
              normalPrice: 'AED 20',
              offer: '10% instant cashback',
              socialBonus: '+5% if you share',
              totalCashback: '15% total'
            },
            payment: {
              step: 'Payment Comparison',
              basePrice: 20,
              options: [
                { method: 'Cash', cashback: '0%', final: 'AED 20.00', savings: 'AED 0' },
                { method: 'Credit Card', cashback: '1%', final: 'AED 19.80', savings: 'AED 0.20' },
                { method: 'Nuqta (10% + 5% share)', cashback: '15%', final: 'AED 17.00', savings: 'AED 3.00' }
              ],
              bestSavings: 'Save AED 3 more with Nuqta'
            },
            rewards: {
              step: 'Earn Rewards',
              perVisit: 'AED 3.00',
              frequency: '4x/week',
              monthly: 'AED 48/month',
              yearly: 'AED 576/year'
            },
            // Shopper value prop
            shopper: {
              title: 'For Coffee Lovers',
              description: 'Discover 15 local cafés within 3km with instant cashback',
              target: 'Students & office workers',
              benefits: [
                'Search "coffee near me" → instant results',
                'Compare prices across cafés',
                'Share on Instagram for +5% bonus',
                'Track favorite spots'
              ],
              savings: '15%',
              savingsLabel: 'Avg savings per coffee'
            },
            // Merchant value prop
            merchant: {
              title: 'For Cafés & Restaurants',
              description: 'Fill tables during slow hours (10-11am, 2-4pm)',
              benefits: [
                'AED 25 CAC vs AED 200 Google Ads',
                'Only pay 15% on completed sales',
                'Target nearby customers (500m-5km)',
                'Build loyal customer base'
              ],
              metric: 'AED 25',
              metricLabel: 'CAC vs AED 200 (Google)'
            },
            // Bank value prop
            bank: {
              title: 'For Payment Partners',
              description: 'Drive card transactions at F&B merchants',
              benefits: [
                '10,000+ F&B transactions/month',
                'Avg ticket: AED 100-150',
                'White-label rewards integration',
                'Co-branded merchant offers'
              ],
              metric: '+40%',
              metricLabel: 'Card usage at F&B'
            }
          },
          beauty: {
            icon: '💅',
            name: 'Beauty & Wellness',
            color: 'pink',
            discover: {
              step: 'Search & Discover',
              search: 'nail salon deals JBR',
              result: 'Finds 8 salons within 2km'
            },
            deals: {
              step: 'Find Deals & Offers',
              merchant: 'Sparkle Nails & Spa',
              normalPrice: 'AED 150',
              offer: '10% instant cashback',
              socialBonus: '+5% if you tag location',
              totalCashback: '15% total'
            },
            payment: {
              step: 'Payment Comparison',
              basePrice: 150,
              options: [
                { method: 'Cash', cashback: '0%', final: 'AED 150.00', savings: 'AED 0' },
                { method: 'Credit Card', cashback: '1%', final: 'AED 148.50', savings: 'AED 1.50' },
                { method: 'Nuqta (10% + 5% share)', cashback: '15%', final: 'AED 127.50', savings: 'AED 22.50' }
              ],
              bestSavings: 'Save AED 21 more with Nuqta'
            },
            rewards: {
              step: 'Earn Rewards',
              perVisit: 'AED 22.50',
              frequency: '2x/month',
              monthly: 'AED 30/month',
              yearly: 'AED 360/year'
            },
            shopper: {
              title: 'For Beauty Enthusiasts',
              description: 'Discover verified salons with real reviews and cashback',
              target: 'Women 25-40, regular salon visits',
              benefits: [
                'Filter by service type (nails, hair, spa)',
                'See real customer photos',
                'Book appointments directly',
                'Cashback on every visit'
              ],
              savings: '15%',
              savingsLabel: 'Per salon visit'
            },
            merchant: {
              title: 'For Salons & Spas',
              description: 'Fill empty appointment slots and attract new clients',
              benefits: [
                'AED 30 CAC vs AED 180 Instagram Ads',
                'Target women within 5km radius',
                'Convert walk-ins to regulars',
                'Manage bookings via dashboard'
              ],
              metric: 'AED 30',
              metricLabel: 'CAC vs AED 180 (Instagram)'
            },
            bank: {
              title: 'For Payment Partners',
              description: 'High-value transactions in beauty vertical',
              benefits: [
                '5,000+ salon transactions/month',
                'Avg ticket: AED 200-400',
                'Female card holders engagement',
                'Recurring monthly spend'
              ],
              metric: '+45%',
              metricLabel: 'Female card usage'
            }
          },
          fitness: {
            icon: '💪',
            name: 'Fitness',
            color: 'blue',
            discover: {
              step: 'Search & Discover',
              search: 'gym near me with cashback',
              result: 'Finds 12 gyms within 4km'
            },
            deals: {
              step: 'Find Deals & Offers',
              merchant: 'FitZone Gym (Downtown)',
              normalPrice: 'AED 400/month',
              offer: '10% cashback on membership',
              socialBonus: '+5% if you check-in monthly',
              totalCashback: '15% total'
            },
            payment: {
              step: 'Payment Comparison',
              basePrice: 400,
              options: [
                { method: 'Cash', cashback: '0%', final: 'AED 400.00', savings: 'AED 0' },
                { method: 'Credit Card', cashback: '1%', final: 'AED 396.00', savings: 'AED 4.00' },
                { method: 'Nuqta (10% + 5% check-in)', cashback: '15%', final: 'AED 340.00', savings: 'AED 60.00' }
              ],
              bestSavings: 'Save AED 56 more with Nuqta'
            },
            rewards: {
              step: 'Earn Rewards',
              perVisit: 'AED 60/month',
              frequency: '12 months',
              monthly: 'AED 60/month',
              yearly: 'AED 720/year'
            },
            shopper: {
              title: 'For Fitness Lovers',
              description: 'Compare gym memberships and save on every payment',
              target: 'Fitness enthusiasts 20-45',
              benefits: [
                'Compare all nearby gyms',
                'Check-in via app for +5% bonus',
                'Cashback on monthly membership',
                'Exclusive gym offers'
              ],
              savings: '15%',
              savingsLabel: 'On gym membership'
            },
            merchant: {
              title: 'For Gyms & Studios',
              description: 'Acquire members who actually show up (not just sign up)',
              benefits: [
                'AED 40 CAC vs AED 250 Google Ads',
                'Target residents within 3km',
                'Track check-in frequency',
                'Reduce churn with loyalty rewards'
              ],
              metric: 'AED 40',
              metricLabel: 'CAC vs AED 250 (Google)'
            },
            bank: {
              title: 'For Payment Partners',
              description: 'Recurring high-value subscriptions',
              benefits: [
                '3,000+ gym memberships/month',
                'Avg ticket: AED 300-500',
                'Recurring monthly charges',
                'Low churn rate'
              ],
              metric: '+50%',
              metricLabel: 'Subscription card usage'
            }
          },
          retail: {
            icon: '🛍️',
            name: 'Retail & Fashion',
            color: 'purple',
            discover: {
              step: 'Search & Discover',
              search: 'fashion deals Dubai Mall',
              result: 'Finds 25 stores with offers'
            },
            deals: {
              step: 'Find Deals & Offers',
              merchant: 'Trendy Boutique',
              normalPrice: 'AED 350',
              offer: '10% instant cashback',
              socialBonus: '+5% if you post outfit',
              totalCashback: '15% total'
            },
            payment: {
              step: 'Payment Comparison',
              basePrice: 350,
              options: [
                { method: 'Cash', cashback: '0%', final: 'AED 350.00', savings: 'AED 0' },
                { method: 'Credit Card', cashback: '2%', final: 'AED 343.00', savings: 'AED 7.00' },
                { method: 'Nuqta (10% + 5% share)', cashback: '15%', final: 'AED 297.50', savings: 'AED 52.50' }
              ],
              bestSavings: 'Save AED 45.50 more with Nuqta'
            },
            rewards: {
              step: 'Earn Rewards',
              perVisit: 'AED 52.50',
              frequency: '3x/month',
              monthly: 'AED 157.50/month',
              yearly: 'AED 1,890/year'
            },
            shopper: {
              title: 'For Fashion Shoppers',
              description: 'Discover local boutiques and exclusive mall offers',
              target: 'Fashion-conscious 20-40',
              benefits: [
                'Mall-specific deal aggregation',
                'Share outfit for +5% cashback',
                'Track spending across stores',
                'Exclusive brand partnerships'
              ],
              savings: '15%',
              savingsLabel: 'On retail purchases'
            },
            merchant: {
              title: 'For Boutiques & Stores',
              description: 'Drive foot traffic to physical stores',
              benefits: [
                'AED 35 CAC vs AED 150 Meta Ads',
                'Target shoppers near your mall',
                'Convert browsers to buyers',
                'Compete with online discounts'
              ],
              metric: 'AED 35',
              metricLabel: 'CAC vs AED 150 (Meta)'
            },
            bank: {
              title: 'For Payment Partners',
              description: 'High-ticket retail transactions',
              benefits: [
                '8,000+ retail transactions/month',
                'Avg ticket: AED 250-600',
                'Mall-based card usage',
                'Fashion-focused spending'
              ],
              metric: '+38%',
              metricLabel: 'Retail card usage'
            }
          }
        };

        const activeExample = nicheExamples[activeNiche as keyof typeof nicheExamples];
        const colorClasses = {
          orange: { bg: 'bg-orange-500', light: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600' },
          pink: { bg: 'bg-pink-500', light: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-600' },
          blue: { bg: 'bg-blue-500', light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
          purple: { bg: 'bg-purple-500', light: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600' }
        };
        const activeColor = colorClasses[activeExample.color as keyof typeof colorClasses];

        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-[#c9a227]/10 to-white py-16 px-8">
            <div className="max-w-7xl mx-auto">

              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-block px-3 py-1 bg-emerald-100 rounded-full mb-4">
                  <p className={`${typography.labelEyebrow} text-emerald-700`}>Our Solution</p>
                </div>
                <h2 className={`${typography.h1} text-slate-900 mb-6`}>
                  Search<span className="text-[#c9a227]">→</span>Save<span className="text-[#c9a227]">→</span>Earn
                </h2>
                <p className={`${typography.h3} text-slate-600 max-w-3xl mx-auto`}>
                  A three-sided marketplace connecting shoppers, merchants, and payment partners
                </p>
              </div>

              {/* Interactive Niche Tabs */}
              <div className="mb-12">
                <div className="flex items-center justify-center gap-3 mb-8">
                  {Object.entries(nicheExamples).map(([key, niche]) => (
                    <button
                      key={key}
                      onClick={() => setActiveNiche(key)}
                      className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                        activeNiche === key
                          ? 'bg-gradient-to-r from-[#c9a227] to-[#d4ab2c] text-white shadow-lg scale-105'
                          : 'bg-white text-slate-600 hover:bg-slate-50 border-2 border-slate-200'
                      }`}
                    >
                      <span className="text-xl mr-2">{niche.icon}</span>
                      {niche.name}
                    </button>
                  ))}
                </div>

                {/* Complete User Journey Flow */}
                <div className="space-y-6">

                  {/* Step 1: Search & Discover */}
                  <div className={`${activeColor.light} border-2 ${activeColor.border} rounded-3xl p-8 shadow-xl transition-all duration-300`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-xl">1</div>
                      <h3 className={`${typography.h2} text-slate-900`}>{activeExample.discover.step}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-2xl p-6">
                        <p className="text-sm text-slate-600 mb-2">User searches:</p>
                        <p className="text-xl font-bold text-slate-900 bg-slate-50 rounded-lg p-4">
                          "{activeExample.discover.search}"
                        </p>
                      </div>
                      <div className="bg-white rounded-2xl p-6">
                        <p className="text-sm text-slate-600 mb-2">Nuqta shows:</p>
                        <p className="text-xl font-bold text-emerald-600">
                          {activeExample.discover.result}
                        </p>
                        <p className="text-sm text-slate-500 mt-2">All verified, hyperlocal, with live offers</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Find Deals & Offers */}
                  <div className={`${activeColor.light} border-2 ${activeColor.border} rounded-3xl p-8 shadow-xl transition-all duration-300`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-full ${activeColor.bg} text-white flex items-center justify-center font-black text-xl`}>2</div>
                      <h3 className={`${typography.h2} text-slate-900`}>{activeExample.deals.step}</h3>
                    </div>
                    <div className="bg-white rounded-2xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className={`${typography.h3} text-slate-900 mb-1`}>{activeExample.deals.merchant}</p>
                          <p className="text-lg text-slate-600">Regular price: <span className="line-through">{activeExample.deals.normalPrice}</span></p>
                        </div>
                        <span className={`text-3xl`}>{activeExample.icon}</span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div className={`${activeColor.light} rounded-xl p-4 border-l-4 ${activeColor.border}`}>
                          <p className="text-sm text-slate-600 mb-1">Base Cashback</p>
                          <p className={`text-2xl font-black ${activeColor.text}`}>{activeExample.deals.offer}</p>
                        </div>
                        <div className={`${activeColor.light} rounded-xl p-4 border-l-4 ${activeColor.border}`}>
                          <p className="text-sm text-slate-600 mb-1">Social Bonus</p>
                          <p className={`text-2xl font-black ${activeColor.text}`}>{activeExample.deals.socialBonus}</p>
                        </div>
                        <div className="bg-emerald-50 rounded-xl p-4 border-l-4 border-emerald-500">
                          <p className="text-sm text-slate-600 mb-1">Total Savings</p>
                          <p className={`${typography.h3} text-emerald-600`}>{activeExample.deals.totalCashback}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Payment Comparison */}
                  <div className={`${activeColor.light} border-2 ${activeColor.border} rounded-3xl p-8 shadow-xl transition-all duration-300`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-xl">3</div>
                      <h3 className={`${typography.h2} text-slate-900`}>{activeExample.payment.step}</h3>
                    </div>
                    <div className="bg-white rounded-2xl p-6">
                      <p className="text-lg text-slate-600 mb-6">Which payment method saves you the most?</p>
                      <div className="space-y-4">
                        {activeExample.payment.options.map((option, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center justify-between p-5 rounded-xl border-2 transition-all ${
                              option.method.includes('Nuqta')
                                ? 'border-emerald-500 bg-emerald-50 shadow-lg scale-105'
                                : 'border-slate-200 bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              {option.method.includes('Nuqta') && (
                                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                                  <CheckCircle2 size={20} className="text-white" />
                                </div>
                              )}
                              <div>
                                <p className={`font-bold ${option.method.includes('Nuqta') ? 'text-xl text-slate-900' : 'text-lg text-slate-700'}`}>
                                  {option.method}
                                </p>
                                <p className="text-sm text-slate-600">Cashback: {option.cashback}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className={`font-black ${option.method.includes('Nuqta') ? 'text-2xl text-emerald-600' : 'text-xl text-slate-900'}`}>
                                {option.final}
                              </p>
                              <p className={`text-sm ${option.method.includes('Nuqta') ? 'text-emerald-600 font-semibold' : 'text-slate-500'}`}>
                                {option.savings}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-4 text-white text-center">
                        <p className="text-xl font-black">{activeExample.payment.bestSavings}</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Earn Rewards as Cashback */}
                  <div className={`${activeColor.light} border-2 ${activeColor.border} rounded-3xl p-8 shadow-xl transition-all duration-300`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-xl">4</div>
                      <h3 className={`${typography.h2} text-slate-900`}>{activeExample.rewards.step}</h3>
                    </div>
                    <div className="bg-white rounded-2xl p-6">
                      <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                          <p className="text-sm text-slate-600 mb-2">Per Visit</p>
                          <p className={`${typography.h2} text-green-600`}>{activeExample.rewards.perVisit}</p>
                          <p className="text-xs text-slate-500 mt-1">Instant cashback</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-slate-600 mb-2">Frequency</p>
                          <p className={`${typography.h2} text-slate-900`}>{activeExample.rewards.frequency}</p>
                          <p className="text-xs text-slate-500 mt-1">Your pattern</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-slate-600 mb-2">Monthly</p>
                          <p className={`${typography.h2} text-[#c9a227]`}>{activeExample.rewards.monthly}</p>
                          <p className="text-xs text-slate-500 mt-1">Total savings</p>
                        </div>
                        <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
                          <p className="text-sm text-slate-600 mb-2">Yearly</p>
                          <p className={`${typography.h2} text-green-600`}>{activeExample.rewards.yearly}</p>
                          <p className="text-xs text-green-600 font-semibold mt-1">Annual savings</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* 3 Value Props - Dynamic Based on Active Niche */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">

                {/* FOR SHOPPERS */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-emerald-200 transition-all duration-300">
                  <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                    <Search className="text-white" size={32} />
                  </div>
                  <h3 className={`${typography.h3} text-slate-900 mb-3`}>{activeExample.shopper.title}</h3>
                  <p className="text-lg text-slate-600 mb-2">
                    {activeExample.shopper.description}
                  </p>
                  <p className="text-sm font-semibold text-[#c9a227] mb-6">
                    Target: {activeExample.shopper.target}
                  </p>
                  <div className="space-y-3">
                    {activeExample.shopper.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 size={16} className="text-emerald-600" />
                        </div>
                        <p className="text-sm text-slate-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <p className={`${typography.h2} text-emerald-600`}>{activeExample.shopper.savings}</p>
                    <p className="text-sm text-slate-600">{activeExample.shopper.savingsLabel}</p>
                  </div>
                </div>

                {/* FOR MERCHANTS */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#c9a227]/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#c9a227] rounded-2xl flex items-center justify-center mb-6">
                    <Store className="text-white" size={32} />
                  </div>
                  <h3 className={`${typography.h3} text-slate-900 mb-3`}>{activeExample.merchant.title}</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    {activeExample.merchant.description}
                  </p>
                  <div className="space-y-3">
                    {activeExample.merchant.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 size={16} className="text-[#c9a227]" />
                        </div>
                        <p className="text-sm text-slate-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <p className={`${typography.h2} text-[#c9a227]`}>{activeExample.merchant.metric}</p>
                    <p className="text-sm text-slate-600">{activeExample.merchant.metricLabel}</p>
                  </div>
                </div>

                {/* FOR PAYMENT PARTNERS */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-200 transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <CreditCard className="text-white" size={32} />
                  </div>
                  <h3 className={`${typography.h3} text-slate-900 mb-3`}>{activeExample.bank.title}</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    {activeExample.bank.description}
                  </p>
                  <div className="space-y-3">
                    {activeExample.bank.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 size={16} className="text-blue-600" />
                        </div>
                        <p className="text-sm text-slate-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <p className={`${typography.h2} text-blue-600`}>{activeExample.bank.metric}</p>
                    <p className="text-sm text-slate-600">{activeExample.bank.metricLabel}</p>
                  </div>
                </div>

              </div>

              {/* Bottom CTA */}
              <div className="text-center bg-slate-900 rounded-2xl p-8 text-white">
                <p className={`${typography.h3} mb-2`}>
                  One platform. Three revenue streams. Zero customer acquisition cost.
                </p>
                <p className={typography.body}>Shoppers save → Merchants grow → Banks win</p>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 6: USER JOURNEY - BEFORE (UPGRADED) ====================
      case 6:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-red-50 via-orange-50/30 to-white py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full mb-4 border-2 border-red-200">
                  <p className="text-xs font-black text-red-700 uppercase tracking-wider">Current Experience — Broken</p>
                </div>
                <h2 className={`${typography.h1} text-slate-900 mb-6 leading-tight`}>
                  User Journey{' '}
                  <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Before Nuqta</span>
                </h2>
                <p className={`${typography.h3} text-slate-600 max-w-3xl mx-auto mb-4`}>
                  The painful reality: 27 minutes of friction, zero guarantee
                </p>
              </div>

              {/* Frustration Timeline with Visual Connectors */}
              <div className="relative max-w-5xl mx-auto">
                {/* Timeline vertical line */}
                <div className="absolute left-8 top-16 bottom-24 w-1 bg-gradient-to-b from-red-300 via-orange-300 to-red-400" />

                {/* 5 Steps with staggered animation */}
                <div className="space-y-6">
                  {[
                    { num: 1, title: "Google Search", desc: "Search 'coffee deals near me' → get ads, not local offers", icon: Search, color: "red", time: "~5 min" },
                    { num: 2, title: "App Hopping", desc: "Open 3-4 different apps (Zomato, Groupon, brand apps)", icon: ShoppingBag, color: "orange", time: "~8 min" },
                    { num: 3, title: "Manual Comparison", desc: "Screenshot deals, compare prices, check distances on Google Maps", icon: BarChart3, color: "yellow", time: "~10 min" },
                    { num: 4, title: "Limited Options", desc: "Only big chains show up, miss local gems, deals expired", icon: Store, color: "slate", time: "~3 min" },
                    { num: 5, title: "Give Up", desc: "Too much effort → just pay full price or order online instead", icon: Ban, color: "red", time: "~1 min" }
                  ].map((step, idx) => {
                    const Icon = step.icon;
                    const bgGradient = {
                      red: "from-red-50 to-red-100",
                      orange: "from-orange-50 to-orange-100",
                      yellow: "from-yellow-50 to-yellow-100",
                      slate: "from-slate-50 to-slate-100"
                    }[step.color] || "from-slate-50 to-slate-100";
                    const iconBg = {
                      red: "bg-red-500",
                      orange: "bg-orange-500",
                      yellow: "bg-yellow-500",
                      slate: "bg-slate-500"
                    }[step.color] || "bg-slate-500";
                    const borderColor = {
                      red: "border-red-300",
                      orange: "border-orange-300",
                      yellow: "border-yellow-300",
                      slate: "border-slate-300"
                    }[step.color] || "border-slate-300";

                    return (
                      <div key={idx} className="relative pl-20">
                        {/* Timeline node */}
                        <div className={`absolute left-4 top-8 w-9 h-9 rounded-full ${iconBg} border-4 border-white shadow-lg flex items-center justify-center z-10`}>
                          <span className="text-white text-sm font-black">{step.num}</span>
                        </div>

                        {/* Card */}
                        <div className={`bg-gradient-to-br ${bgGradient} border-2 ${borderColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300`}
                          style={{ animationDelay: `${idx * 100}ms` }}>
                          <div className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                              <div className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center shadow-lg`}>
                                <Icon className="text-white" size={32} />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-3">
                                <h3 className={`${typography.h3} text-slate-900`}>{step.title}</h3>
                                <span className={`${typography.bodySmall} font-bold text-slate-500 bg-white/80 px-3 py-1 rounded-full`}>{step.time}</span>
                              </div>
                              <p className="text-lg text-slate-700 leading-relaxed">{step.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dramatic Bottom Stat with Failure Icons */}
              <div className="mt-12 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <Clock size={48} className="text-white/80" />
                    <p className={`${typography.metricXL} tracking-tight`}>
                      <AnimatedNumber value={27} duration={2000} /> min
                    </p>
                    <Ban size={48} className="text-white/80" />
                  </div>
                  <p className={`${typography.h3} mb-2`}>Average time wasted per search</p>
                  <p className="text-lg text-red-100">Still no guarantee of best deal → 40% give up and pay full price</p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 7: USER JOURNEY - AFTER (UPGRADED) ====================
      case 7:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50 via-green-50/30 to-white py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full mb-4 border-2 border-emerald-300">
                  <p className="text-xs font-black text-emerald-700 uppercase tracking-wider">With Nuqta — Simplified</p>
                </div>
                <h2 className={`${typography.h1} text-slate-900 mb-6 leading-tight`}>
                  User Journey{' '}
                  <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">After Nuqta</span>
                </h2>
                <p className={`${typography.h3} text-slate-600 max-w-3xl mx-auto mb-4`}>
                  The reality: 30 seconds from search to deal → 54x faster
                </p>
              </div>

              {/* Success Path with Visual Flow */}
              <div className="relative max-w-6xl mx-auto mb-12">
                {/* Flow arrows */}
                <div className="hidden md:flex absolute top-1/2 left-0 right-0 justify-between items-center px-32 -translate-y-1/2 z-0">
                  <ArrowRight size={64} className="text-emerald-200" />
                  <ArrowRight size={64} className="text-emerald-200" />
                </div>

                {/* 3 Simple Steps */}
                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                  {[
                    { num: 1, title: "Search Once", desc: "Type 'coffee deals near me' in Nuqta", icon: Search, result: "Instant results from all local merchants", time: "~5 sec", color: "emerald" },
                    { num: 2, title: "Compare & Choose", desc: "See all deals in one view, sorted by distance + savings", icon: CheckCircle2, result: "Save 15-30% instantly", time: "~15 sec", color: "green" },
                    { num: 3, title: "Claim & Earn", desc: "Tap claim, walk in, upload receipt", icon: Gift, result: "Double rewards (deal + cashback)", time: "~10 sec", color: "teal" }
                  ].map((step, idx) => {
                    const Icon = step.icon;
                    const bgGradient = {
                      emerald: "from-emerald-500 to-emerald-600",
                      green: "from-green-500 to-green-600",
                      teal: "from-teal-500 to-teal-600"
                    }[step.color];

                    return (
                      <div key={idx} className="bg-white border-2 border-emerald-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                        {/* Icon Badge */}
                        <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${bgGradient} flex items-center justify-center mb-6 shadow-lg mx-auto`}>
                          <Icon className="text-white" size={40} />
                        </div>

                        {/* Step Number */}
                        <div className="flex items-center justify-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-black">
                            {step.num}
                          </div>
                          <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">{step.time}</span>
                        </div>

                        {/* Title & Description */}
                        <h3 className={`${typography.h3} text-slate-900 mb-3 text-center`}>{step.title}</h3>
                        <p className={`${typography.body} text-slate-600 mb-6 leading-relaxed text-center`}>{step.desc}</p>

                        {/* Result Badge */}
                        <div className="pt-4 border-t-2 border-emerald-100 bg-emerald-50 rounded-xl p-4 -mx-2">
                          <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2 text-center">✓ Result</p>
                          <p className="text-sm font-semibold text-slate-900 text-center">{step.result}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dramatic Bottom Stat with Success Icons */}
              <div className="bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600 rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-6 mb-4">
                    <Zap size={48} className="text-yellow-300" />
                    <div>
                      <p className={`${typography.metricXL} tracking-tight`}>
                        <AnimatedNumber value={30} duration={2000} /> sec
                      </p>
                    </div>
                    <CheckCircle2 size={48} className="text-white/90" />
                  </div>
                  <p className={`${typography.h3} mb-3`}>From search to claimed deal</p>
                  <div className="flex items-center justify-center gap-3 text-lg text-emerald-100">
                    <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">54x faster than traditional search</span>
                    <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">Guaranteed best local deal</span>
                  </div>
                </div>
              </div>

              {/* Before/After Comparison Callout */}
              <div className="mt-8 bg-slate-900 rounded-2xl p-8 text-center text-white">
                <div className="flex items-center justify-center gap-12">
                  <div>
                    <p className={`${typography.metricMedium} text-red-400 mb-1`}>27 min</p>
                    <p className={`${typography.bodySmall} text-slate-400`}>Before (5 apps)</p>
                  </div>
                  <ArrowRight size={40} className="text-[#c9a227]" />
                  <div>
                    <p className={`${typography.metricMedium} text-emerald-400 mb-1`}>30 sec</p>
                    <p className={`${typography.bodySmall} text-slate-400`}>After (1 app)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 8: PLATFORM DIFFERENTIATION (PREMIUM ✓✓✓) ====================
      case 8:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/20 to-white py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4 shadow-md">
                  <p className="text-xs font-bold text-purple-700 uppercase tracking-wider">Core Differentiation</p>
                </div>
                <h2 className={`${typography.h1} text-slate-900 mb-4 leading-tight`}>
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
                    <h3 className={`${typography.h2} text-slate-900 mb-2`}>Deal/Discount Platforms</h3>
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
                    <h3 className={`${typography.h2} text-slate-900 mb-2`}>Nuqta Platform</h3>
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
                  <p className={`${typography.h2} text-white mb-6 leading-tight`}>
                    Discount platforms <span className="text-red-400">destroy merchant margins</span>.<br/>
                    Nuqta <span className="text-emerald-400">builds loyalty</span> at sustainable economics.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    <div className="bg-white/5 rounded-xl p-5 border border-red-500/30">
                      <p className={`${typography.labelMicro} text-red-400 font-bold uppercase mb-2`}>Discount Platforms</p>
                      <p className={`${typography.h2} text-red-400 mb-1`}>-30%</p>
                      <p className={`${typography.bodySmall} text-slate-400 font-medium`}>Merchant margin loss</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-5 border border-emerald-500/30">
                      <p className={`${typography.labelMicro} text-emerald-400 font-bold uppercase mb-2`}>Nuqta Model</p>
                      <p className={`${typography.h2} text-emerald-400 mb-1`}>+40%</p>
                      <p className={`${typography.bodySmall} text-slate-400 font-medium`}>Repeat customer rate</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-5 border border-[#c9a227]/30">
                      <p className={`${typography.labelMicro} text-[#c9a227] font-bold uppercase mb-2`}>The Result</p>
                      <p className={`${typography.h2} text-[#c9a227] mb-1`}>10x+</p>
                      <p className={`${typography.bodySmall} text-slate-400 font-medium`}>LTV:CAC Ratio</p>
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
                  <p className={`${typography.labelEyebrow} text-red-700`}>Competitive Analysis</p>
                </div>
                <h2 className={`${typography.h1} font-black text-slate-900 mb-6`}>
                  Why Can't <span className="text-red-600">Noon/Careem/Smiles</span> Do This?
                </h2>
                <p className={`${typography.bodyLarge} text-slate-500 uppercase tracking-wide font-bold mb-3`}>
                  Technical Breakdown: 8 Structural Barriers
                </p>
                <p className={`${typography.h3} text-slate-600 max-w-4xl mx-auto`}>
                  Head-to-head feature comparison shows why incumbents <span className="text-red-600 font-bold">structurally can't pivot</span> to this model without cannibalizing their revenue.
                </p>
              </div>

              {/* Competitive Matrix */}
              <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xl">
                  <thead>
                    <tr className="bg-gradient-to-r from-slate-900 via-[#0a1628] to-slate-900 text-white">
                      <th className={`${typography.label} px-6 py-4 text-left font-bold uppercase tracking-wider`}>Key Differentiator</th>
                      <th className={`${typography.label} px-6 py-4 text-center font-bold uppercase tracking-wider`}>
                        <div className="flex flex-col items-center gap-2">
                          <span className={`${typography.h3} text-[#c9a227] font-black`}>Nuqta</span>
                          <span className={`${typography.labelMicro} text-[#c9a227]/70 font-normal`}>Us</span>
                        </div>
                      </th>
                      <th className={`${typography.label} px-6 py-4 text-center font-bold uppercase tracking-wider`}>
                        <div className="flex flex-col items-center gap-1">
                          <span>Noon</span>
                          <span className={`${typography.labelMicro} text-slate-400 font-normal`}>E-commerce</span>
                        </div>
                      </th>
                      <th className={`${typography.label} px-6 py-4 text-center font-bold uppercase tracking-wider`}>
                        <div className="flex flex-col items-center gap-1">
                          <span>Careem</span>
                          <span className={`${typography.labelMicro} text-slate-400 font-normal`}>Super App</span>
                        </div>
                      </th>
                      <th className={`${typography.label} px-6 py-4 text-center font-bold uppercase tracking-wider`}>
                        <div className="flex flex-col items-center gap-1">
                          <span>Smiles</span>
                          <span className={`${typography.labelMicro} text-slate-400 font-normal`}>Discounts</span>
                        </div>
                      </th>
                      <th className={`${typography.label} px-6 py-4 text-center font-bold uppercase tracking-wider`}>
                        <div className="flex flex-col items-center gap-1">
                          <span>Cards</span>
                          <span className={`${typography.labelMicro} text-slate-400 font-normal`}>Credit</span>
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
                      },
                      {
                        feature: "Merchant Analytics & CRM",
                        nuqta: true,
                        noon: false,
                        careem: false,
                        smiles: false,
                        cards: false
                      },
                      {
                        feature: "Behavioral Data Intelligence",
                        nuqta: true,
                        noon: false,
                        careem: false,
                        smiles: false,
                        cards: false
                      }
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-gradient-to-r from-slate-50 to-white" : "bg-white"}>
                        <td className={`${typography.bodyLarge} px-6 py-4 font-medium text-slate-900`}>{row.feature}</td>
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
                    <p className={`${typography.label} font-bold text-[#c9a227] uppercase tracking-wider`}>Structural Moat — Explained Simply</p>
                  </div>
                  <h3 className={`${typography.h2} font-black text-slate-900 mb-4`}>Why Can't They Just Copy Us?</h3>
                  <p className={`${typography.bodyLarge} text-slate-600 max-w-3xl mx-auto`}>
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
                        <p className={`${typography.h4} font-black text-slate-900`}>Careem</p>
                        <p className={`${typography.label} text-slate-500 font-medium`}>Logistics → Discovery?</p>
                      </div>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4 border-l-4 border-orange-500 mb-3">
                      <p className={`${typography.bodyLarge} text-slate-800 leading-relaxed font-medium italic`}>
                        "Careem copying Nuqta is like <span className="font-black">Uber launching a Google Maps competitor</span>. Possible, but strategically stupid."
                      </p>
                    </div>
                    <p className={`${typography.body} text-slate-600 leading-relaxed`}>
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
                        <p className={`${typography.h4} font-black text-slate-900`}>Noon</p>
                        <p className={`${typography.label} text-slate-500 font-medium`}>E-commerce → Offline?</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500 mb-3">
                      <p className={`${typography.bodyLarge} text-slate-800 leading-relaxed font-medium italic`}>
                        "Noon adding offline discovery is like <span className="font-black">Amazon telling you to shop at local stores instead</span>. Brand suicide."
                      </p>
                    </div>
                    <p className={`${typography.body} text-slate-600 leading-relaxed`}>
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
                        <p className={`${typography.h4} font-black text-slate-900`}>Tabby / Postpay</p>
                        <p className={`${typography.label} text-slate-500 font-medium`}>BNPL → Cashback?</p>
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-purple-500 mb-3">
                      <p className={`${typography.bodyLarge} text-slate-800 leading-relaxed font-medium italic`}>
                        "BNPL adding 10% cashback is like <span className="font-black">a bank paying you to not use their loans</span>. Economics don't work."
                      </p>
                    </div>
                    <p className={`${typography.body} text-slate-600 leading-relaxed`}>
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
                        <p className={`${typography.h4} font-black text-slate-900`}>Credit Cards</p>
                        <p className={`${typography.label} text-slate-500 font-medium`}>1-2% → 10%?</p>
                      </div>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-4 border-l-4 border-emerald-500 mb-3">
                      <p className={`${typography.bodyLarge} text-slate-800 leading-relaxed font-medium italic`}>
                        "Banks offering 10% cashback is like <span className="font-black">Apple making Android phones</span>. Why kill your cash cow?"
                      </p>
                    </div>
                    <p className={`${typography.body} text-slate-600 leading-relaxed`}>
                      <strong>Why:</strong> Card networks make <span className="font-bold text-emerald-600">2-3% per swipe</span>.
                      Offering 10% cashback <span className="font-bold text-red-600">destroys their entire margin structure</span>. They'd lose money on every transaction.
                    </p>
                  </div>
                </div>

                {/* Bottom Summary */}
                <div className="mt-8 bg-slate-900 rounded-2xl p-6 text-center">
                  <p className={`${typography.h3} font-black text-white mb-3`}>
                    The Pattern: <span className="text-[#c9a227]">Product Cannibalization</span>
                  </p>
                  <p className={`${typography.bodyLarge} text-slate-300 max-w-3xl mx-auto leading-relaxed`}>
                    Every major player would have to <span className="text-red-400 font-bold">destroy their core revenue</span> to compete with us.
                    That's not a timing moat — it's a <span className="text-emerald-400 font-bold">structural impossibility</span>.
                  </p>
                </div>
              </div>

              {/* Deep Dive: Structural Analysis */}
              <div className="text-center mb-8">
                <p className={`${typography.label} text-slate-500 uppercase tracking-wider font-bold mb-2`}>Deep Dive Analysis</p>
                <h3 className={`${typography.h2} font-black text-slate-900`}>Business Model Constraints by Competitor</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Left: Structural Barriers */}
                <div className="bg-gradient-to-br from-red-50 via-red-50/50 to-white border-2 border-red-200 rounded-3xl p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <AlertCircle className="text-red-600" size={28} />
                    </div>
                    <h3 className={`${typography.h3} font-black text-slate-900`}>Structural Barriers (Revenue Cannibalization Risk)</h3>
                  </div>
                  <div className="space-y-5">
                    <div className="bg-white rounded-xl p-5 border-l-4 border-red-500 shadow-sm">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-2xl">🛒</span>
                        <p className={`${typography.h4} font-bold text-slate-900`}>Noon</p>
                      </div>
                      <p className={`${typography.bodyLarge} text-slate-700 leading-relaxed`}>E-commerce marketplace built on <strong>inventory control</strong>. Can't pivot to search-first discovery without cannibalizing their warehouse model. Would destroy unit economics.</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 border-l-4 border-orange-500 shadow-sm">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-2xl">🚗</span>
                        <p className={`${typography.h4} font-bold text-slate-900`}>Careem</p>
                      </div>
                      <p className={`${typography.bodyLarge} text-slate-700 leading-relaxed`}>Super app for <strong>logistics</strong> (rides/food delivery). Local discovery isn't core. Would require complete product pivot + new merchant relationships. Too many priorities.</p>
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
                          <p className="text-sm text-slate-600 leading-relaxed">March 1, 2026 launch. Competitors would need 12-18 months to pivot. We'll have the behavioral moat by then.</p>
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
                    <p className="text-3xl font-black text-blue-400 mb-2">March 1, 2026</p>
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

      // ==================== SLIDE 10: BUSINESS MODEL (PREMIUM ✓✓✓) ====================
      case 10:
        const revenueData = [
          { name: "Merchant Commission", value: 50, amount: "AED 950K", desc: "15% fee on redemptions", color: "#3b82f6" },
          { name: "Promoted Listings", value: 30, amount: "AED 570K", desc: "Priority placement", color: "#a855f7" },
          { name: "Bank Partnerships", value: 20, amount: "AED 380K", desc: "Card/BNPL affiliate fees", color: "#f97316" }
        ];

        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-[#c9a227]/10 via-orange-50/20 to-white py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#c9a227]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-[#c9a227]/20 rounded-full mb-4">
                  <p className={`${typography.labelEyebrow} text-[#c9a227]`}>Revenue Model</p>
                </div>
                <h2 className={`${typography.h1} font-black text-slate-900 mb-4`}>
                  How We <span className="text-[#c9a227]">Make Money</span>
                </h2>
                <p className={`${typography.h3} text-slate-600 max-w-3xl mx-auto`}>
                  Four revenue streams from platform transactions
                </p>
              </div>

              {/* Revenue Chart & Breakdown Grid */}
              <div className="grid lg:grid-cols-2 gap-10 mb-12 max-w-6xl mx-auto">

                {/* Left: Recharts Bar Chart */}
                <div className="bg-white border-2 border-[#c9a227]/20 rounded-3xl p-8 shadow-xl">
                  <h3 className={`${typography.h3} font-bold text-slate-900 mb-6 text-center`}>Revenue Contribution</h3>
                  <ResponsiveContainer width="100%" height={320}>
                    <BarChart data={revenueData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis type="number" stroke="#64748b" style={{ fontSize: '12px' }} />
                      <YAxis dataKey="name" type="category" stroke="#64748b" style={{ fontSize: '13px', fontWeight: 600 }} width={150} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0a1628',
                          border: '2px solid #c9a227',
                          borderRadius: '12px',
                          color: '#fff',
                          fontSize: '14px',
                          fontWeight: 600
                        }}
                        formatter={(value: any, name: any, props: any) => [
                          `${props.payload.amount} (${value}%)`,
                          props.payload.desc
                        ]}
                      />
                      <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                        {revenueData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                  <p className={`${typography.labelMicro} text-slate-500 text-center mt-4`}>Based on conservative Year 1 GMV projections (3-5x monthly transactions)</p>
                </div>

                {/* Right: 4 Revenue Stream Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      title: "Merchant Commission",
                      rate: "5%",
                      desc: "Transaction commission from merchants on completed sales",
                      icon: Store,
                      color: "blue",
                      amount: "45%"
                    },
                    {
                      title: "Promoted Listings",
                      rate: "5%+",
                      desc: "Additional revenue when merchants promote their listings",
                      icon: TrendingUp,
                      color: "purple",
                      amount: "25%"
                    },
                    {
                      title: "Bank Partnerships",
                      rate: "Variable",
                      desc: "Revenue share from bank partnerships and payment partners",
                      icon: Handshake,
                      color: "orange",
                      amount: "20%"
                    },
                    {
                      title: "Float Interest",
                      rate: "2-3%",
                      desc: "Interest earned on wallet deposits (users reload, spend over time)",
                      icon: DollarSign,
                      color: "emerald",
                      amount: "10%"
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
                    const bgGradient = stream.color === "blue" ? "from-blue-50 to-blue-100" :
                                       stream.color === "purple" ? "from-purple-50 to-purple-100" :
                                       stream.color === "emerald" ? "from-emerald-50 to-emerald-100" :
                                       "from-orange-50 to-orange-100";

                    return (
                      <div
                        key={idx}
                        className={`bg-gradient-to-br ${bgGradient} border-2 ${borderColor} rounded-3xl p-5 hover:shadow-xl hover:scale-105 transition-all duration-300`}
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center mb-3 shadow-md`}>
                          <Icon className="text-white" size={24} />
                        </div>
                        <h3 className={`${typography.bodyLarge} font-bold text-slate-900 mb-1`}>{stream.title}</h3>
                        <p className={`${typography.h3} font-black text-[#c9a227] mb-2`}>{stream.rate}</p>
                        <p className={`${typography.labelMicro} text-slate-600 leading-relaxed mb-3`}>{stream.desc}</p>
                        <div className="pt-3 border-t-2 border-white/50">
                          <p className={`${typography.labelEyebrow} text-slate-500`}>Revenue Share</p>
                          <p className={`${typography.h4} font-black text-slate-900`}>{stream.amount}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Example Calculation with Visual Progression */}
              <div className="bg-gradient-to-br from-slate-900 via-[#0a1628] to-slate-900 rounded-3xl p-10 text-white max-w-6xl mx-auto shadow-2xl border-2 border-[#c9a227]/20">
                <h3 className={`${typography.h2} font-bold mb-8 text-center`}>
                  Example: <span className="text-[#c9a227]">AED 1,000</span> Monthly GMV per User
                </h3>
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white/5 rounded-2xl p-6 border border-blue-500/30 text-center hover:bg-white/10 transition-all">
                    <p className={`${typography.labelEyebrow} text-blue-400 mb-2`}>Base Commission (5%)</p>
                    <p className={`${typography.metricXL} font-black text-blue-400`}>AED 50</p>
                    <p className={`${typography.label} text-slate-400 mt-2`}>On transactions</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-purple-500/30 text-center hover:bg-white/10 transition-all">
                    <p className={`${typography.labelEyebrow} text-purple-400 mb-2`}>Promoted Sales (5%)</p>
                    <p className={`${typography.metricXL} font-black text-purple-400`}>AED 25</p>
                    <p className={`${typography.label} text-slate-400 mt-2`}>Priority listings</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-orange-500/30 text-center hover:bg-white/10 transition-all">
                    <p className={`${typography.labelEyebrow} text-orange-400 mb-2`}>Bank Affiliate</p>
                    <p className={`${typography.metricXL} font-black text-orange-400`}>AED 20</p>
                    <p className={`${typography.label} text-slate-400 mt-2`}>Payment partner</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#c9a227] to-[#d4ab2c] rounded-2xl p-6 border-2 border-[#c9a227] text-center shadow-xl">
                    <p className={`${typography.labelEyebrow} text-white mb-2`}>Total Revenue</p>
                    <p className={`${typography.metricXL} font-black text-white`}>AED 95+</p>
                    <p className={`${typography.label} text-white/80 mt-2 font-semibold`}>Per user/month</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 size={20} className="text-emerald-400" />
                      <p className={`${typography.label} font-bold text-emerald-300 uppercase`}>User Model</p>
                    </div>
                    <p className={`${typography.bodyLarge} text-white font-medium`}>
                      FREE for users during Year 1 validation • Focus on transaction volume, not subscriptions
                    </p>
                  </div>
                  <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Gift size={20} className="text-blue-400" />
                      <p className={`${typography.label} font-bold text-blue-300 uppercase`}>User Benefit</p>
                    </div>
                    <p className={`${typography.bodyLarge} text-white font-medium`}>
                      Users get 5-10% cashback in Nuqta Coins • Real savings, not just discounts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 11: PLATFORM ARCHITECTURE (NEW) ====================
      case 11:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4 border-2 border-blue-200 shadow-lg">
                  <p className="text-xs font-black text-blue-700 uppercase tracking-wider">Platform Architecture</p>
                </div>
                <h2 className={`${typography.h1} text-slate-900 mb-6 leading-tight`}>
                  3-Sided <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Marketplace</span>
                </h2>
                <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto">
                  Enterprise-grade platform connecting users, merchants, and payment partners
                </p>
              </div>

              {/* Platform Components Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-6xl mx-auto">

                {/* User App */}
                <div className="bg-white border-2 border-blue-200 rounded-3xl p-6 hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Smartphone size={24} className="text-white" />
                    </div>
                    <h3 className={`${typography.h3} text-slate-900`}>User App</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">▸</span>
                      <span><strong>Search Engine:</strong> Semantic AI, voice, filters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">▸</span>
                      <span><strong>Wallet System:</strong> Dual coins, instant cashback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">▸</span>
                      <span><strong>Social Features:</strong> Referrals, leaderboards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">▸</span>
                      <span><strong>Gamification:</strong> Loyalty tiers, badges</span>
                    </li>
                  </ul>
                </div>

                {/* Merchant Dashboard */}
                <div className="bg-white border-2 border-purple-200 rounded-3xl p-6 hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Store size={24} className="text-white" />
                    </div>
                    <h3 className={`${typography.h3} text-slate-900`}>Merchant Hub</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">▸</span>
                      <span><strong>Analytics Dashboard:</strong> Demographics, peak hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">▸</span>
                      <span><strong>Campaign Manager:</strong> Targeted offers, A/B testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">▸</span>
                      <span><strong>QR Checkout System:</strong> Instant checkout (Year 1) → POS integration (Year 2+)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">▸</span>
                      <span><strong>Multi-Location:</strong> Chain management</span>
                    </li>
                  </ul>
                </div>

                {/* Admin Panel */}
                <div className="bg-white border-2 border-emerald-200 rounded-3xl p-6 hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Shield size={24} className="text-white" />
                    </div>
                    <h3 className={`${typography.h3} text-slate-900`}>Admin Panel</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">▸</span>
                      <span><strong>Fraud Detection:</strong> 8-layer defense system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">▸</span>
                      <span><strong>KYC Automation:</strong> Identity verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">▸</span>
                      <span><strong>Content Moderation:</strong> Reviews, disputes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">▸</span>
                      <span><strong>Financial Reporting:</strong> Revenue, payouts</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Intelligence Layer */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-2 border-[#c9a227] rounded-3xl p-8 mb-8 max-w-6xl mx-auto shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#c9a227] rounded-xl flex items-center justify-center">
                    <Zap size={28} className="text-slate-900" />
                  </div>
                  <div>
                    <h3 className={`${typography.h2} text-white`}>Intelligence Layer</h3>
                    <p className="text-sm text-gray-400">Behavioral data moat & competitive intelligence</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <p className="text-xs text-gray-400 uppercase mb-1">Price Intelligence</p>
                    <p className="text-sm text-white font-medium">Real-time market pricing data</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <p className="text-xs text-gray-400 uppercase mb-1">Behavioral Insights</p>
                    <p className="text-sm text-white font-medium">User shopping patterns</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <p className="text-xs text-gray-400 uppercase mb-1">Predictive Analytics</p>
                    <p className="text-sm text-white font-medium">Demand forecasting</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <p className="text-xs text-gray-400 uppercase mb-1">Merchant ROI</p>
                    <p className="text-sm text-white font-medium">Attribution tracking</p>
                  </div>
                </div>
              </div>

              {/* Partner API - Roadmap */}
              <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <LinkIcon size={20} className="text-orange-600" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900">Partner API</h3>
                  </div>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">Phase 2</span>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  <strong>Bank Integrations:</strong> Direct card linking for seamless cashback • <strong>Fintech Partnerships:</strong> BNPL, digital wallets • <strong>Loyalty Programs:</strong> Airline miles, hotel points
                </p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <p className="text-xs text-orange-800">
                    <strong>Note:</strong> Bank partnership revenue shown in financials represents pilot agreements. Full API rollout planned for Year 2 post-SVF license.
                  </p>
                </div>
              </div>

              {/* Bottom Callout */}
              <div className="mt-10 text-center">
                <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-300 rounded-2xl px-8 py-4 shadow-lg">
                  <p className="text-lg font-bold text-slate-900">
                    <span className="text-blue-600">Not just an app</span> • Built as a full-stack platform from Day 1
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 12: NUQTA COIN VS BRAND COIN (PREMIUM ✓✓✓) ====================
      case 12:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-[#c9a227]/10 via-orange-50/20 to-white py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#c9a227]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-[#c9a227]/20 rounded-full mb-4 shadow-lg">
                  <p className="text-xs font-bold text-[#c9a227] uppercase tracking-wider">Rewards System</p>
                </div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 mb-4 leading-tight">
                  Two <span className="text-[#c9a227]">Reward Currencies</span>
                </h2>
                <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto">
                  Nuqta Coin for freedom, Brand Coin for loyalty
                </p>
              </div>

              {/* 2-Column Comparison */}
              <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">

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
                      <Store className="text-white" size={28} />
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
                      <Rocket className="text-white" size={28} />
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

      // ==================== SLIDE 13: UNIT ECONOMICS ====================
      case 13:
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
                  <p className="text-4xl font-black text-emerald-600 mb-2">AED 30</p>
                  <p className="text-sm text-slate-600">Revenue per user/month</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-2xl p-6 text-center">
                  <p className="text-xs font-semibold text-orange-700 uppercase tracking-wider mb-2">Frequency</p>
                  <p className="text-4xl font-black text-orange-600 mb-2">3-5x</p>
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
                    <AnimatedNumber value={50} prefix="AED " duration={2000} />
                  </p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• Year 1 (QR + Ambassador): AED 40-45</p>
                    <p>• Year 2+ (Digital Mix): AED 50-60</p>
                    <p>• Blended Average: AED 50</p>
                  </div>
                  <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-xs font-semibold text-slate-700 mb-1">Sensitivity Analysis:</p>
                    <p className="text-xs text-slate-600">• Optimistic (organic-heavy): AED 50 → LTV:CAC 9.4x</p>
                    <p className="text-xs text-slate-600">• Base case (blended): AED 70 → LTV:CAC 6.7x</p>
                    <p className="text-xs text-slate-600">• Conservative (digital-primary): AED 90 → LTV:CAC 5.2x</p>
                    <p className="text-xs text-slate-500 mt-1 italic">All scenarios remain above 5x industry threshold</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-3xl p-8 text-center hover:shadow-2xl transition-all">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <TrendingUp size={32} className="text-blue-600" />
                  </div>
                  <p className="text-sm font-semibold text-blue-700 uppercase tracking-wider mb-3">Annual LTV</p>
                  <p className="text-6xl font-black text-blue-600 mb-4">
                    <AnimatedNumber value={500} prefix="AED " duration={2000} />
                  </p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• 4x txn/month avg × AED 100</p>
                    <p>• 12-month retention</p>
                    <p>• 7.5% net take rate</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#c9a227]/10 to-white border-2 border-[#c9a227]/30 rounded-3xl p-8 text-center hover:shadow-2xl transition-all">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c9a227]/20 mb-4">
                    <Trophy size={32} className="text-[#c9a227]" />
                  </div>
                  <p className="text-sm font-semibold text-[#c9a227] uppercase tracking-wider mb-3">LTV:CAC Ratio</p>
                  <p className="text-6xl font-black text-[#c9a227] mb-4">
                    8-10x
                  </p>
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-3 mt-4">
                    <p className="text-xs font-semibold text-emerald-700 uppercase mb-1">Benchmark</p>
                    <p className="text-sm text-slate-700">Base case: 8.6x | Target: 10x+ with optimization | Industry: 3-5x</p>
                  </div>
                </div>
              </div>

              {/* Revenue Breakdown with Waterfall Chart */}
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-8 mb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Revenue Per AED 100 Transaction</h3>

                {/* Waterfall Chart Visualization */}
                <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={[
                        { name: 'Merchant\nFee', value: 15, fill: '#3b82f6', cumulative: 15 },
                        { name: 'User\nCashback', value: -7, fill: '#ef4444', cumulative: 8 },
                        { name: 'Platform\nCosts', value: -0.5, fill: '#f97316', cumulative: 7.5 },
                        { name: 'Net\nMargin', value: 7.5, fill: '#c9a227', cumulative: 7.5 }
                      ]}
                      margin={{ top: 20, right: 30, bottom: 40, left: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis
                        dataKey="name"
                        stroke="#64748b"
                        style={{ fontSize: '12px', fontWeight: 600 }}
                        angle={0}
                        textAnchor="middle"
                      />
                      <YAxis
                        stroke="#64748b"
                        style={{ fontSize: '12px' }}
                        label={{ value: 'AED', angle: -90, position: 'insideLeft', style: { fontSize: '14px', fontWeight: 'bold' } }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0f172a',
                          border: '2px solid #c9a227',
                          borderRadius: '12px',
                          padding: '12px'
                        }}
                        labelStyle={{ color: '#c9a227', fontWeight: 'bold' }}
                        formatter={(value: any) => [`AED ${value}`, value >= 0 ? 'Revenue' : 'Cost']}
                      />
                      <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                        {[
                          { fill: '#3b82f6' },
                          { fill: '#ef4444' },
                          { fill: '#f97316' },
                          { fill: '#c9a227' }
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                  <p className="text-xs text-slate-500 text-center mt-2">
                    Waterfall showing revenue flow from merchant fee to net margin
                  </p>
                </div>

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
                      <p>• Monthly RPU: <span className="font-bold text-emerald-400">AED 30</span></p>
                      <p>• Blended CAC: <span className="font-bold text-orange-400">AED 30</span></p>
                      <p>• Payback: <span className="font-bold text-white">AED 30 ÷ AED 30 = 1 month</span></p>
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

              {/* Retention Sensitivity Analysis (Investor-Grade Transparency) */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-2xl p-8 mt-10">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle size={28} className="text-yellow-400" />
                  <h3 className="text-2xl font-black text-white">Retention Sensitivity: What If We're Wrong?</h3>
                </div>
                <p className="text-sm text-slate-300 mb-6">
                  Our base case assumes <span className="font-bold text-white">12-month average retention</span> (10x LTV:CAC). Here's how economics change if retention is lower:
                </p>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-red-500/20 border-2 border-red-500/40 rounded-xl p-5">
                    <p className="text-xs font-bold text-red-300 uppercase mb-2">Downside Scenario</p>
                    <p className="text-sm text-slate-300 mb-3">6-month avg retention<br/>(50% churn)</p>
                    <p className="text-4xl font-black text-red-400 mb-1">5x</p>
                    <p className="text-xs text-slate-400">LTV:CAC Ratio</p>
                    <p className="text-xs text-slate-300 mt-3">LTV = AED 180<br/>Still above 3x benchmark</p>
                  </div>
                  <div className="bg-orange-500/20 border-2 border-orange-500/40 rounded-xl p-5">
                    <p className="text-xs font-bold text-orange-300 uppercase mb-2">Conservative Scenario</p>
                    <p className="text-sm text-slate-300 mb-3">8-month avg retention<br/>(realistic for H1)</p>
                    <p className="text-4xl font-black text-orange-400 mb-1">6.7x</p>
                    <p className="text-xs text-slate-400">LTV:CAC Ratio</p>
                    <p className="text-xs text-slate-300 mt-3">LTV = AED 240<br/>Excellent by SaaS standards</p>
                  </div>
                  <div className="bg-emerald-500/20 border-2 border-emerald-500/40 rounded-xl p-5">
                    <p className="text-xs font-bold text-emerald-300 uppercase mb-2">Base Case (Projected)</p>
                    <p className="text-sm text-slate-300 mb-3">12-month avg retention<br/>(validated in pilots)</p>
                    <p className="text-4xl font-black text-emerald-400 mb-1">10x</p>
                    <p className="text-xs text-slate-400">LTV:CAC Ratio</p>
                    <p className="text-xs text-slate-300 mt-3">LTV = AED 360<br/>What we model for H1 gate</p>
                  </div>
                  <div className="bg-yellow-500/20 border-2 border-yellow-500/40 rounded-xl p-5">
                    <p className="text-xs font-bold text-yellow-300 uppercase mb-2">With Fraud (3% Loss)</p>
                    <p className="text-sm text-slate-300 mb-3">12-month retention<br/>minus fraud mitigation cost</p>
                    <p className="text-4xl font-black text-yellow-400 mb-1">8.5x</p>
                    <p className="text-xs text-slate-400">LTV:CAC Ratio</p>
                    <p className="text-xs text-slate-300 mt-3">LTV = AED 360 - AED 5 fraud cost<br/>Still excellent</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-sm text-white mb-3 font-bold">Decision Rule:</p>
                  <p className="text-sm text-slate-300">
                    If after H1 (Month 5), we measure D30 retention &lt;20% (implying ~6-month avg lifecycle), we <span className="font-bold text-red-300">do NOT scale to H2</span>. Instead, we iterate on onboarding flow, rewards structure, or merchant selection. The H1 gate exists to prevent premature scaling with weak unit economics.
                  </p>
                </div>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 14: FRAUD CONTROLS (PREMIUM ✓✓✓) ====================
      case 14:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-red-50/30 via-white to-orange-50/20 py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
                  <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Risk Mitigation</p>
                </div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 mb-4">
                  Fraud Prevention <span className="text-red-600">Architecture</span>
                </h2>
                <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                  We don't launch with open-ended rewards. Cashback and social incentives are <span className="font-bold text-red-600">locked, gated, and verified</span> at every step.
                </p>
              </div>

              {/* Core Principle Banner */}
              <div className="max-w-5xl mx-auto mb-12">
                <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 rounded-3xl p-8 text-center shadow-2xl border-2 border-red-700">
                  <p className="text-sm text-red-300 font-bold uppercase tracking-wider mb-3">Core Defense Principle</p>
                  <p className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
                    Fraud thrives on instant liquidity — <span className="text-red-300">Nuqta removes that</span>
                  </p>
                  <div className="bg-white/10 rounded-xl p-5 mt-4">
                    <p className="text-xl text-white font-medium">
                      Target: <span className="text-red-300 font-black">&lt;5% reward leakage</span> by Month 3 (monitored weekly)
                    </p>
                  </div>
                </div>
              </div>

              {/* 8-Layer Defense Pyramid with Visual Diagram */}
              <div className="max-w-6xl mx-auto mb-12">
                <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">8-Layer Defense System</h3>

                {/* Visual Pyramid Diagram */}
                <div className="mb-12 max-w-4xl mx-auto">
                  <div className="relative">
                    {/* Pyramid Layers - Each layer gets narrower */}
                    {[
                      { num: 1, title: "Transaction-First Gating", color: "red", width: "100%" },
                      { num: 2, title: "Tiered Reward Release", color: "orange", width: "90%" },
                      { num: 3, title: "Social Verification", color: "amber", width: "80%" },
                      { num: 4, title: "Merchant KYC", color: "yellow", width: "70%" },
                      { num: 5, title: "Behavioral Detection", color: "lime", width: "60%" },
                      { num: 6, title: "Per-Store Limits", color: "green", width: "50%" },
                      { num: 7, title: "Delayed Redemption", color: "emerald", width: "40%" },
                      { num: 8, title: "Manual Review Queue", color: "teal", width: "30%" }
                    ].map((layer, idx) => {
                      const bgColor = layer.color === "red" ? "bg-red-500" :
                                     layer.color === "orange" ? "bg-orange-500" :
                                     layer.color === "amber" ? "bg-amber-500" :
                                     layer.color === "yellow" ? "bg-yellow-500" :
                                     layer.color === "lime" ? "bg-lime-500" :
                                     layer.color === "green" ? "bg-green-500" :
                                     layer.color === "emerald" ? "bg-emerald-500" :
                                     "bg-teal-500";
                      const textColor = layer.num <= 4 ? "text-white" : "text-slate-900";

                      return (
                        <div
                          key={idx}
                          className="relative mx-auto mb-2 transition-all duration-300 hover:scale-105"
                          style={{ width: layer.width }}
                        >
                          <div className={`${bgColor} rounded-xl p-4 shadow-lg flex items-center justify-between gap-4`}>
                            <div className="flex items-center gap-3 flex-1">
                              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                <span className={`${textColor} font-black text-lg`}>{layer.num}</span>
                              </div>
                              <p className={`${textColor} font-bold text-sm sm:text-base`}>{layer.title}</p>
                            </div>
                            <AlertCircle className={textColor} size={20} />
                          </div>
                        </div>
                      );
                    })}

                    {/* Success Icon at Bottom */}
                    <div className="flex justify-center mt-6">
                      <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full p-4 shadow-2xl">
                        <CheckCircle2 className="text-white" size={32} />
                      </div>
                    </div>
                    <p className="text-center mt-3 text-lg font-bold text-slate-700">
                      Verified Transaction ✓
                    </p>
                  </div>
                </div>

                {/* Detailed 8-Layer Grid */}
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

              {/* Fraud Cost Assumption (Transparent Modeling) */}
              <div className="max-w-5xl mx-auto mt-10 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-orange-300 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle size={28} className="text-orange-600" />
                  <h3 className="text-2xl font-black text-slate-900">Fraud Cost Built Into Unit Economics</h3>
                </div>
                <p className="text-sm text-slate-700 mb-6">
                  We don't model 0% fraud. Here's what we budget for fraud prevention and leakage in our LTV:CAC calculation:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                    <p className="text-xs font-bold text-red-700 uppercase mb-2">Projected Fraud/Leakage Rate</p>
                    <p className="text-5xl font-black text-red-600 mb-2">3%</p>
                    <p className="text-sm text-slate-600">Of total GMV processed (H1 target: &lt;5%, mature state: ~2%)</p>
                    <div className="mt-4 space-y-2 text-sm text-slate-700">
                      <p>• <span className="font-bold">1.5%</span> - Fake social shares (verified but still some slip through)</p>
                      <p>• <span className="font-bold">0.8%</span> - Merchant-user collusion (inflated receipts)</p>
                      <p>• <span className="font-bold">0.5%</span> - Refund abuse (return items after cashback)</p>
                      <p>• <span className="font-bold">0.2%</span> - Account takeover / stolen devices</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                    <p className="text-xs font-bold text-blue-700 uppercase mb-2">Fraud Mitigation Cost per User</p>
                    <p className="text-5xl font-black text-blue-600 mb-2">AED 5</p>
                    <p className="text-sm text-slate-600">Annual cost per user for fraud detection + manual review</p>
                    <div className="mt-4 space-y-2 text-sm text-slate-700">
                      <p>• <span className="font-bold">AED 2</span> - Device fingerprinting API (Seon/Fingerprint.com)</p>
                      <p>• <span className="font-bold">AED 1.5</span> - Manual review queue (first 6 months)</p>
                      <p>• <span className="font-bold">AED 1</span> - Behavioral ML detection (post-5K MAU)</p>
                      <p>• <span className="font-bold">AED 0.5</span> - KYC/identity verification tools</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900 rounded-xl p-6">
                  <p className="text-sm font-bold text-slate-300 uppercase mb-2">Impact on LTV:CAC</p>
                  <p className="text-lg text-white">
                    Base LTV (no fraud): <span className="text-emerald-400 font-black">AED 360</span><br/>
                    Fraud cost per user: <span className="text-red-400 font-black">-AED 5</span><br/>
                    Fraud leakage (3% of AED 1,200 annual GMV): <span className="text-red-400 font-black">-AED 36</span><br/>
                    <span className="text-xs text-slate-400">(AED 1,200 GMV = 12 months × AED 100 avg transaction × 6 trans/month, then 7.5% net take rate = AED 90 margin, 3% fraud = AED 2.7/month × 12 months = ~AED 32, rounded to AED 36 conservatively)</span>
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-2xl font-black text-white">
                      Net LTV (after fraud): <span className="text-yellow-400">AED 319</span> → <span className="text-emerald-400">LTV:CAC = 8.5-10x</span>
                    </p>
                    <p className="text-sm text-slate-300 mt-2">
                      Still excellent economics even with 3% fraud. If we achieve 2% fraud (mature state), LTV:CAC improves to 9-11x.
                    </p>
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

      // ==================== SLIDE 15: GTM STRATEGY ====================
      case 15:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 to-white py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-4 border-2 border-purple-200 shadow-lg">
                  <p className="text-xs font-black text-purple-700 uppercase tracking-wider">Go-to-Market Strategy</p>
                </div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 mb-6">
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

              {/* CAC Funnel Math (Transparent Conversion Rates) */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-300 rounded-2xl p-8 mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingDown size={28} className="text-slate-700" />
                  <h3 className="text-2xl font-black text-slate-900">CAC Funnel Math (Merchant QR Channel)</h3>
                </div>
                <p className="text-sm text-slate-600 mb-6 max-w-3xl">
                  Transparent conversion rates showing how we get to AED 15 blended CAC from merchant QR distribution:
                </p>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-5 border-2 border-blue-200">
                    <p className="text-xs font-bold text-blue-700 uppercase mb-2">Step 1: QR Scan</p>
                    <p className="text-4xl font-black text-blue-600 mb-1">2%</p>
                    <p className="text-xs text-slate-500">50 merchants × 40 diners/day = 2,000 diners<br/>40 scan QR (2% conversion)</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border-2 border-indigo-200">
                    <p className="text-xs font-bold text-indigo-700 uppercase mb-2">Step 2: App Download</p>
                    <p className="text-4xl font-black text-indigo-600 mb-1">20%</p>
                    <p className="text-xs text-slate-500">40 scans → 8 downloads<br/>(20% conversion)</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border-2 border-purple-200">
                    <p className="text-xs font-bold text-purple-700 uppercase mb-2">Step 3: Sign Up</p>
                    <p className="text-4xl font-black text-purple-600 mb-1">80%</p>
                    <p className="text-xs text-slate-500">8 downloads → 6.4 signups<br/>(80% conversion)</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border-2 border-emerald-200">
                    <p className="text-xs font-bold text-emerald-700 uppercase mb-2">Step 4: First Transaction</p>
                    <p className="text-4xl font-black text-emerald-600 mb-1">40%</p>
                    <p className="text-xs text-slate-500">6.4 signups → 2.5 activated users<br/>(40% activation)</p>
                  </div>
                </div>
                <div className="bg-slate-900 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Overall Funnel Efficiency</p>
                      <p className="text-2xl font-black text-white">2% × 20% × 80% × 40% = <span className="text-emerald-400">0.128%</span></p>
                      <p className="text-sm text-slate-300 mt-2">= ~1.3 activated users per 1,000 diners exposed to QR</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Resulting CAC</p>
                      <p className="text-4xl font-black text-emerald-400">AED 15</p>
                      <p className="text-xs text-slate-300 mt-1">Cost: AED 5/merchant × 50 merchants = AED 250/month<br/>= ~17 activated users/month = AED 15 CAC</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    <span className="font-bold text-blue-700">Conservative Assumptions:</span> QR scan rate could be 3-5% in high-traffic merchants. Download-to-signup often 60-80% in rewards apps. Activation 30-50% with strong onboarding. We model at lower end.
                  </p>
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

      // ==================== SLIDE 16: MERCHANT ONBOARDING ====================
      case 16:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 to-white py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-amber-100 rounded-full mb-4 border-2 border-purple-200 shadow-lg">
                  <p className="text-xs font-black text-purple-700 uppercase tracking-wider">Solving Chicken-Egg Problem</p>
                </div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 mb-6">
                  Merchant <span className="text-purple-600">Onboarding</span>
                </h2>
                <p className="text-2xl font-medium text-slate-600 max-w-4xl mx-auto">
                  <span className="font-bold text-purple-600">Merchants ARE our distribution channel.</span> 500 merchants × 100 customers = 50K users. <span className="font-bold text-emerald-600">Zero paid ads.</span>
                </p>
              </div>

              {/* Flywheel Diagram */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 mb-10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Network Effects Flywheel</h3>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <svg width="600" height="300" viewBox="0 0 600 300" className="mx-auto">
                      {/* Arrows forming a cycle */}
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                          <polygon points="0 0, 10 3, 0 6" fill="#c9a227" />
                        </marker>
                      </defs>

                      {/* More Merchants */}
                      <text x="300" y="30" textAnchor="middle" fill="#c9a227" fontSize="18" fontWeight="bold">More Merchants</text>
                      <line x1="300" y1="40" x2="450" y2="100" stroke="#c9a227" strokeWidth="3" markerEnd="url(#arrowhead)" />

                      {/* More QR Codes → More Users */}
                      <text x="500" y="120" textAnchor="middle" fill="#c9a227" fontSize="16" fontWeight="600">More QR Codes</text>
                      <text x="500" y="140" textAnchor="middle" fill="#c9a227" fontSize="16" fontWeight="600">→ More Users</text>
                      <line x1="480" y1="150" x2="400" y2="210" stroke="#c9a227" strokeWidth="3" markerEnd="url(#arrowhead)" />

                      {/* Easier to Sign More Merchants */}
                      <text x="350" y="240" textAnchor="middle" fill="#c9a227" fontSize="16" fontWeight="600">Easier to Sign</text>
                      <text x="350" y="260" textAnchor="middle" fill="#c9a227" fontSize="16" fontWeight="600">More Merchants</text>
                      <line x1="300" y1="260" x2="150" y2="210" stroke="#c9a227" strokeWidth="3" markerEnd="url(#arrowhead)" />

                      {/* Merchants Call Us */}
                      <text x="100" y="120" textAnchor="middle" fill="#c9a227" fontSize="16" fontWeight="600">Merchants</text>
                      <text x="100" y="140" textAnchor="middle" fill="#c9a227" fontSize="16" fontWeight="600">Call Us</text>
                      <line x1="120" y1="100" x2="270" y2="40" stroke="#c9a227" strokeWidth="3" markerEnd="url(#arrowhead)" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 3-Phase Strategy */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {/* Phase 1: Founder Sales */}
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                      👤
                    </div>
                    <div>
                      <p className="text-sm font-bold text-blue-700 uppercase">Phase 1</p>
                      <p className="text-lg font-black text-slate-900">Founder Sales</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 mb-2"><span className="font-semibold">Timeline:</span> Month 1-3</p>
                    <p className="text-sm text-slate-600 mb-2"><span className="font-semibold">Target:</span> 50 Merchants</p>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-slate-700 flex items-center gap-2"><CheckCircle size={16} className="text-emerald-600 flex-shrink-0" /> Walk into high-traffic cafes/salons/gyms</p>
                    <p className="text-sm text-slate-700 flex items-center gap-2"><CheckCircle size={16} className="text-emerald-600 flex-shrink-0" /> 30-second pitch: "Zero cost, bring new customers"</p>
                    <p className="text-sm text-slate-700 flex items-center gap-2"><CheckCircle size={16} className="text-emerald-600 flex-shrink-0" /> Event activation: Global Village (30 merchants in 1 weekend)</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-700 mb-2">Results:</p>
                    <p className="text-sm text-slate-700">• 50 merchants signed</p>
                    <p className="text-sm text-slate-700">• 3,000 users acquired</p>
                    <p className="text-sm text-slate-700">• <span className="font-bold text-blue-600">CAC: AED 7</span></p>
                    <p className="text-sm text-slate-700">• Cost: AED 21,000</p>
                  </div>
                  <div className="mt-4 text-center p-3 bg-slate-900 rounded-lg">
                    <p className="text-xs text-slate-300">1 merchant = 60 users/month</p>
                    <p className="text-xs text-emerald-400 font-bold">Merchants pay AED 0 upfront</p>
                  </div>
                </div>

                {/* Phase 2: Sales Team */}
                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                      👥
                    </div>
                    <div>
                      <p className="text-sm font-bold text-purple-700 uppercase">Phase 2</p>
                      <p className="text-lg font-black text-slate-900">Sales Team</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 mb-2"><span className="font-semibold">Timeline:</span> Month 4-6</p>
                    <p className="text-sm text-slate-600 mb-2"><span className="font-semibold">Target:</span> 150 Merchants</p>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-slate-700 flex items-center gap-2"><CheckCircle size={16} className="text-emerald-600 flex-shrink-0" /> Hire 2 BDMs (ex-Talabat/Careem partnerships)</p>
                    <p className="text-sm text-slate-700 flex items-center gap-2"><CheckCircle size={16} className="text-emerald-600 flex-shrink-0" /> Commission-driven: AED 200/merchant</p>
                    <p className="text-sm text-slate-700 flex items-center gap-2"><CheckCircle size={16} className="text-emerald-600 flex-shrink-0" /> Target: 25 meetings/week, 10 sign-ups/month each</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-purple-700 mb-2">Results:</p>
                    <p className="text-sm text-slate-700">• 150 merchants signed</p>
                    <p className="text-sm text-slate-700">• 15,000 users acquired</p>
                    <p className="text-sm text-slate-700">• <span className="font-bold text-purple-600">CAC: AED 8.4</span></p>
                    <p className="text-sm text-slate-700">• Cost: AED 126,000</p>
                  </div>
                  <div className="mt-4 text-center p-3 bg-slate-900 rounded-lg">
                    <p className="text-xs text-slate-300">Close rate: 40%</p>
                    <p className="text-xs text-emerald-400 font-bold">Merchants compete to join</p>
                  </div>
                </div>

                {/* Phase 3: Self-Serve */}
                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl">
                      🔄
                    </div>
                    <div>
                      <p className="text-sm font-bold text-emerald-700 uppercase">Phase 3</p>
                      <p className="text-lg font-black text-slate-900">Self-Serve</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 mb-2"><span className="font-semibold">Timeline:</span> Month 7-12</p>
                    <p className="text-sm text-slate-600 mb-2"><span className="font-semibold">Target:</span> 300 Merchants</p>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-slate-700 flex items-center gap-2"><CheckCircle size={16} className="text-emerald-600 flex-shrink-0" /> Self-serve platform: nuqtapp.com/merchants</p>
                    <p className="text-sm text-slate-700 flex items-center gap-2"><CheckCircle size={16} className="text-emerald-600 flex-shrink-0" /> Merchant referral program (AED 500 credit)</p>
                    <p className="text-sm text-slate-700 flex items-center gap-2"><CheckCircle size={16} className="text-emerald-600 flex-shrink-0" /> Marketplace effects: "Why doesn't MY cafe have Nuqta?"</p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-emerald-700 mb-2">Results:</p>
                    <p className="text-sm text-slate-700">• 300 merchants signed</p>
                    <p className="text-sm text-slate-700">• 30,000 users acquired</p>
                    <p className="text-sm text-slate-700">• <span className="font-bold text-emerald-600">CAC: AED 5</span></p>
                    <p className="text-sm text-slate-700">• Cost: AED 150,000</p>
                  </div>
                  <div className="mt-4 text-center p-3 bg-slate-900 rounded-lg">
                    <p className="text-xs text-slate-300">40% inbound sign-ups</p>
                    <p className="text-xs text-emerald-400 font-bold">Flywheel activated</p>
                  </div>
                </div>
              </div>

              {/* Bottom Stats Bar */}
              <div className="bg-gradient-to-r from-purple-900 to-slate-900 rounded-2xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-purple-300 uppercase mb-2">Total Merchants Year 1</p>
                    <p className="text-5xl font-black text-purple-400">500</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-amber-300 uppercase mb-2">Total Users Year 1</p>
                    <p className="text-5xl font-black text-amber-400">50,000</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-emerald-300 uppercase mb-2">Blended CAC</p>
                    <p className="text-5xl font-black text-emerald-400">AED 6.8</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-blue-300 uppercase mb-2">Zero Paid Ads</p>
                    <div className="flex justify-center">
                      <CheckCircle size={48} className="text-emerald-400" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-lg text-white">
                    <span className="font-bold text-amber-400">Merchants ARE the marketing budget.</span> 500 merchants × AED 0 paid ads = AED 0.
                  </p>
                  <p className="text-base text-slate-300 mt-2">
                    Equivalent Instagram budget: AED 2.5M • We spend: AED 297K • <span className="font-bold text-emerald-400">Savings: AED 2.2M</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 17: TRACTION ====================
      case 17:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50 to-white py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full mb-4 border-2 border-emerald-200 shadow-lg">
                  <p className="text-xs font-black text-emerald-700 uppercase tracking-wider">Pre-Launch Traction</p>
                </div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 mb-6">
                  Supply-Side <span className="text-emerald-600">Validation</span>
                </h2>
                <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                  32 signed merchant LOIs • $50K self-funded • MVP launching March 1, 2026
                </p>
              </div>

              {/* Stats Grid with Sparklines */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  {
                    label: "Signed Merchants",
                    value: "32",
                    desc: "LOIs with revenue-share terms",
                    icon: Store,
                    color: "blue",
                    trend: [5, 8, 12, 18, 22, 28, 32],
                    trendLabel: "Supply ✓"
                  },
                  {
                    label: "Core Team",
                    value: "8",
                    desc: "Complementary skill sets",
                    icon: Target,
                    color: "purple",
                    trend: [1, 1, 2, 3, 5, 7, 8],
                    trendLabel: "Assembled"
                  },
                  {
                    label: "MVP Launch",
                    value: "Mar 1",
                    desc: "Product ready to go live",
                    icon: Zap,
                    color: "emerald",
                    trend: [0, 20, 40, 60, 75, 90, 100],
                    trendLabel: "95% Done"
                  },
                  {
                    label: "Self-Funded",
                    value: "$50K",
                    desc: "Founder commitment validated",
                    icon: DollarSign,
                    color: "gold",
                    trend: [10, 15, 20, 30, 35, 45, 50],
                    trendLabel: "Invested"
                  }
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  const iconBg = stat.color === "blue" ? "bg-blue-100 text-blue-600" :
                                 stat.color === "purple" ? "bg-purple-100 text-purple-600" :
                                 stat.color === "emerald" ? "bg-emerald-100 text-emerald-600" :
                                 "bg-[#c9a227]/10 text-[#c9a227]";
                  const lineColor = stat.color === "blue" ? "#3b82f6" :
                                   stat.color === "purple" ? "#a855f7" :
                                   stat.color === "emerald" ? "#22c55e" :
                                   "#c9a227";

                  const sparklineData = stat.trend.map((val, i) => ({ x: i, y: val }));

                  return (
                    <div key={idx} className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${iconBg}`}>
                          <Icon size={24} />
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                            {stat.trendLabel}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">{stat.label}</p>
                      <p className="text-4xl font-black text-slate-900 mb-3">{stat.value}</p>

                      {/* Sparkline */}
                      <div className="h-12 mb-2">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={sparklineData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                            <Line
                              type="monotone"
                              dataKey="y"
                              stroke={lineColor}
                              strokeWidth={2}
                              dot={false}
                              animationDuration={1000}
                              animationBegin={idx * 100}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>

                      <p className="text-sm text-slate-600">{stat.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Pre-Launch Validation */}
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 border-2 border-blue-200 rounded-2xl p-8 mb-12">
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={32} className="text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Pre-Launch Readiness: Supply Side Validated</h3>
                    <p className="text-lg text-slate-700 mb-4">
                      <span className="font-bold text-emerald-600">32 signed merchant LOIs</span> with revenue-share agreements across Dubai Marina, Downtown, and JBR (F&B, Beauty, Fashion, Fitness).
                      <span className="font-bold text-blue-600"> 8-person founding team</span> assembled with complementary skills (CEO, CHRO, CMO, CTO, Designer, BDA).
                      <span className="font-bold text-purple-600"> $50K self-funded</span> demonstrates founder commitment.
                      Attacking a <span className="font-bold text-emerald-600">$35B GCC SAM</span> across F&B, Beauty, Fashion, and Fitness.
                    </p>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm font-semibold text-slate-600 uppercase mb-1">Signed LOIs</p>
                        <p className="text-2xl font-black text-blue-600">32</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm font-semibold text-slate-600 uppercase mb-1">Core Team</p>
                        <p className="text-2xl font-black text-purple-600">8</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm font-semibold text-slate-600 uppercase mb-1">Self-Funded</p>
                        <p className="text-2xl font-black text-emerald-600">$50K</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm font-semibold text-slate-600 uppercase mb-1">GCC SAM</p>
                        <p className="text-2xl font-black text-orange-600">$35B</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post-Launch: H1 Timeline (5 Months) */}
              <div className="bg-white border-2 border-emerald-200 rounded-2xl p-10">
                <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">H1 2026: Prove the Loop (~5 Months)</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { milestone: "Month 1-2: Launch", date: "Weeks 1-8", tasks: ["Activate first 10-20 merchants", "Acquire 1,000 MAU", "Process AED 500K GMV", "Track D7 retention ≥30%"] },
                    { milestone: "Month 3-4: Scale", date: "Weeks 9-16", tasks: ["Scale to 5,000 MAU", "100 active merchants", "AED 5M GMV (cumulative to date)", "Measure D30 retention ≥25%"] },
                    { milestone: "Month 5: H1 Exit Gate", date: "Launch: March 1, 2026", tasks: ["Conservative Target: 5K MAU", "250 merchants minimum", "Tranche 2: $200K at milestones", "10x LTV:CAC validated, CAC ≤ AED 50"] }
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

                {/* H1 Dual-Target Framework */}
                <div className="mt-8 mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-xl p-6">
                  <h5 className="text-lg font-bold text-emerald-900 mb-3">💰 Tranched Funding Structure ($400K at $5M Cap)</h5>
                  <div className="grid md:grid-cols-2 gap-6 text-sm text-emerald-900">
                    <div>
                      <p className="font-bold text-blue-600 mb-2">Tranche 1: $200K (Immediately)</p>
                      <p>Launch MVP, acquire first merchants, validate unit economics. Budget: 55% Marketing, 25% Salaries, 20% Tech/Ops.</p>
                    </div>
                    <div>
                      <p className="font-bold text-emerald-600 mb-2">Tranche 2: $200K (At Milestones)</p>
                      <p>Triggers: 10 live merchants, 1,000 MAU, CTO hired. Enables scale to 5K MAU and 250 merchants.</p>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-800 mt-3">
                    📊 Conservative target: 5K MAU • 250 merchants minimum • Launch: March 1, 2026
                  </p>
                </div>

                {/* H1 Gate Criteria */}
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-300 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">H1 Exit Gate Targets (Conservative)</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                      <h5 className="text-sm font-bold text-slate-600 uppercase mb-3">Growth Targets</h5>
                      <div className="space-y-3 text-sm text-slate-700">
                        <div>
                          <p className="text-xs text-slate-500 uppercase mb-1">MAU (Monthly Active Users)</p>
                          <p className="font-bold text-emerald-600">5,000 <span className="text-xs text-slate-500">(conservative target)</span></p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase mb-1">Launch Date</p>
                          <p className="font-bold text-blue-600">March 1, 2026</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase mb-1">Merchants</p>
                          <p className="font-bold text-blue-600">250 minimum</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-2 border-emerald-200">
                      <h5 className="text-sm font-bold text-slate-600 uppercase mb-3">Unit Economics</h5>
                      <div className="space-y-2 text-sm text-slate-700">
                        <p>✓ <span className="font-bold text-emerald-600">10x LTV:CAC ratio</span></p>
                        <p>✓ <span className="font-bold text-emerald-600">CAC ≤ AED 40</span></p>
                        <p>✓ <span className="font-bold text-emerald-600">40%+ activation</span></p>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
                      <h5 className="text-sm font-bold text-slate-600 uppercase mb-3">Retention</h5>
                      <div className="space-y-2 text-sm text-slate-700">
                        <p>✓ <span className="font-bold text-purple-600">D30 ≥ 25%</span></p>
                        <p>✓ <span className="font-bold text-purple-600">4+ trans/month</span></p>
                        <p>✓ <span className="font-bold text-purple-600">Merchant NPS ≥40</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-lg text-slate-700">
                      <span className="font-bold text-emerald-600">Pass all gates</span> → Scale to H2 (75K MAU, 3 categories) in 2.5 months
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 18: TEAM (PREMIUM ✓) ====================
      case 18:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-white py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#c9a227]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-slate-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#c9a227]/20 to-slate-100 rounded-full mb-4 border-2 border-[#c9a227]/30 shadow-lg">
                  <p className="text-xs font-black text-[#c9a227] uppercase tracking-wider">Our Team</p>
                </div>
                <h2 className={`${typography.h1} text-slate-900 mb-4`}>
                  Built by <span className="text-[#c9a227]">Experts</span>
                </h2>
                <p className={`${typography.h3} text-slate-600 max-w-3xl mx-auto`}>
                  Deep experience in cybersecurity, digital marketing, and D2C commerce
                </p>
              </div>

              {/* Founder Card with Photo */}
              <div className="max-w-3xl mx-auto mb-12">
                <div className="bg-white border-2 border-[#c9a227]/30 rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Founder Photo */}
                    <div className="relative flex-shrink-0">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#c9a227] shadow-xl">
                        <Image
                          src="/rejaul.jpg"
                          alt="Rejaul Karim - Founder & CEO"
                          width={160}
                          height={160}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-[#c9a227] to-[#a68420] rounded-full flex items-center justify-center shadow-lg">
                        <Briefcase className="text-white" size={24} />
                      </div>
                    </div>

                    {/* Founder Info */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className={`${typography.h2} text-slate-900 mb-2`}>Rejaul Karim</h3>
                      <p className={`${typography.h3} font-semibold text-[#c9a227] mb-4`}>Founder & CEO</p>
                      <div className="space-y-2 text-base text-slate-700 leading-relaxed mb-6">
                        <div className="flex items-start gap-2 md:justify-start justify-center">
                          <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                          <p>Ex-CTO & Co-Founder of cybersecurity company</p>
                        </div>
                        <div className="flex items-start gap-2 md:justify-start justify-center">
                          <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                          <p>6+ years in digital marketing & growth</p>
                        </div>
                        <div className="flex items-start gap-2 md:justify-start justify-center">
                          <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                          <p>Managed 120+ D2C clients across industries</p>
                        </div>
                        <div className="flex items-start gap-2 md:justify-start justify-center">
                          <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                          <p>2M AED in ad spend managed</p>
                        </div>
                        <div className="flex items-start gap-2 md:justify-start justify-center">
                          <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                          <p>Deep expertise in performance marketing, conversion optimization, and customer acquisition</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 md:justify-start justify-center">
                        {["Cybersecurity", "Digital Marketing", "D2C Commerce", "Growth", "Product Strategy"].map((skill, sidx) => (
                          <span key={sidx} className="px-4 py-2 bg-gradient-to-r from-[#c9a227]/10 to-[#c9a227]/5 text-slate-800 text-sm font-semibold rounded-full border border-[#c9a227]/20">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Team Grid - NEW */}
              <div className="bg-white border-2 border-[#c9a227]/30 rounded-3xl p-8 sm:p-10 shadow-lg mb-8">
                <h3 className={`${typography.h2} text-slate-900 mb-8 text-center`}>Core Team</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "CHRO", desc: "Ex Co-Founder of EdTech company", icon: Users, color: "blue", exp: "HR & Operations" },
                    { title: "CMO", desc: "Ex Co-Founder of e-commerce app", icon: Megaphone, color: "purple", exp: "Marketing & Growth" },
                    { title: "CTO", desc: "4 years engineering experience", icon: Zap, color: "emerald", exp: "Tech & Product" },
                    { title: "Graphic Designer", desc: "Brand & Visual Design Lead", icon: Palette, color: "orange", exp: "UI/UX Design" },
                    { title: "BDA", desc: "Business Development & Partnerships", icon: Handshake, color: "pink", exp: "Merchant Relations" }
                  ].map((member, idx) => {
                    const Icon = member.icon;
                    const iconBg = member.color === "blue" ? "bg-blue-100 text-blue-600" :
                                   member.color === "purple" ? "bg-purple-100 text-purple-600" :
                                   member.color === "emerald" ? "bg-emerald-100 text-emerald-600" :
                                   member.color === "orange" ? "bg-orange-100 text-orange-600" :
                                   "bg-pink-100 text-pink-600";
                    const borderColor = member.color === "blue" ? "border-blue-200" :
                                       member.color === "purple" ? "border-purple-200" :
                                       member.color === "emerald" ? "border-emerald-200" :
                                       member.color === "orange" ? "border-orange-200" :
                                       "border-pink-200";

                    return (
                      <div key={idx} className={`bg-gradient-to-br from-white to-slate-50 border-2 ${borderColor} rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${iconBg} mb-4 shadow-md`}>
                          <Icon size={28} />
                        </div>
                        <h4 className="text-xl font-black text-slate-900 mb-1">{member.title}</h4>
                        <p className="text-sm font-semibold text-[#c9a227] mb-2">{member.exp}</p>
                        <p className="text-sm text-slate-600">{member.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Advisors Grid - Enhanced */}
              <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-10 shadow-lg">
                <h3 className={`${typography.h2} text-slate-900 mb-8 text-center`}>Advisors & Supporters</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Fintech Expert", desc: "Former VP at Emirates NBD", icon: Building2, color: "blue" },
                    { title: "Retail Advisor", desc: "15+ years in UAE F&B", icon: Store, color: "emerald" },
                    { title: "Tech Mentor", desc: "Ex-CTO of MENA startup", icon: Zap, color: "purple" }
                  ].map((advisor, idx) => {
                    const Icon = advisor.icon;
                    const iconBg = advisor.color === "blue" ? "bg-blue-100 text-blue-600" :
                                   advisor.color === "emerald" ? "bg-emerald-100 text-emerald-600" :
                                   "bg-purple-100 text-purple-600";
                    const borderColor = advisor.color === "blue" ? "border-blue-200" :
                                       advisor.color === "emerald" ? "border-emerald-200" :
                                       "border-purple-200";

                    return (
                      <div key={idx} className={`bg-white border-2 ${borderColor} rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${iconBg} mb-4 shadow-md`}>
                          <Icon size={32} />
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

      // ==================== SLIDE 19: THE ASK ====================
      case 19:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-[#c9a227]/10 to-white py-16 px-8 flex items-center justify-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#c9a227]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-5xl mx-auto text-center relative z-10">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#c9a227]/20 to-orange-100 rounded-full mb-8 border-2 border-[#c9a227]/30 shadow-lg">
                <p className="text-xs font-black text-[#c9a227] uppercase tracking-wider">Investment Opportunity</p>
              </div>

              <h2 className="text-7xl sm:text-8xl font-black text-slate-900 mb-8">
                The <span className="text-[#c9a227]">Ask</span>
              </h2>

              {/* Main Ask */}
              <div className="bg-white border-4 border-[#c9a227]/30 rounded-3xl p-12 mb-12 shadow-2xl">
                <p className="text-2xl text-slate-600 mb-6">Raising Pre-Seed Round</p>
                <p className="text-8xl sm:text-9xl font-black text-[#c9a227] mb-6">
                  <AnimatedNumber value={400} prefix="$" suffix="K" duration={2000} />
                </p>
                <p className="text-2xl text-slate-700 max-w-2xl mx-auto mb-8">
                  10-month runway to launch, prove H1 metrics, then raise Series A
                </p>

                {/* SAFE Structure */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8 max-w-3xl mx-auto">
                  <div className="flex items-center gap-3 mb-6 justify-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-black text-slate-900">SAFE Structure</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                      <p className="text-sm font-bold text-blue-600 uppercase mb-2">Structure</p>
                      <p className="text-4xl font-black text-slate-900 mb-2">SAFE</p>
                      <p className="text-sm text-slate-600">Simple Agreement for Future Equity</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500 shadow-sm">
                      <p className="text-sm font-bold text-purple-600 uppercase mb-2">Discount</p>
                      <p className="text-4xl font-black text-slate-900 mb-2">20%</p>
                      <p className="text-sm text-slate-600">On next round conversion</p>
                    </div>
                  </div>

                  <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <p className="text-sm text-emerald-800 text-center">
                      <span className="font-bold">SAFE with $5M Valuation Cap:</span> 20% discount on Series A valuation, capped at $5M. Investor-friendly terms for pre-launch stage with founder-aligned upside protection.
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
                          { name: 'Product & Tech', value: 120, fill: '#3b82f6' },
                          { name: 'Marketing & Growth', value: 105, fill: '#a855f7' },
                          { name: 'Operations', value: 75, fill: '#f97316' },
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
                    { category: "Product & Tech", percent: "40%", amount: "$120K", desc: "3 engineers × 8-10 months", color: "blue" },
                    { category: "Marketing & Growth", percent: "35%", amount: "$105K", desc: "3K users @ AED 35 CAC", color: "purple" },
                    { category: "Operations", percent: "25%", amount: "$75K", desc: "Merchant success, legal, compliance", color: "orange" }
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

      // ==================== SLIDE 20: FINANCIAL PROJECTIONS ====================
      case 20:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-16 px-8 flex items-center justify-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-block bg-emerald-500/20 border border-emerald-400 px-6 py-2 rounded-full mb-4">
                  <p className={`${typography.labelEyebrow} text-emerald-300`}>5-Year Financial Outlook</p>
                </div>
                <h2 className={`${typography.h1} text-white mb-4`}>
                  Financial Projections
                </h2>
                <p className={`${typography.bodyLarge} text-slate-300 max-w-3xl mx-auto`}>
                  Path from $400K pre-seed to $118.5M revenue with 55% EBITDA margin by Year 5
                </p>
              </div>

              {/* Revenue Chart */}
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 mb-8">
                <h3 className={`${typography.h3} text-white mb-6`}>Revenue Growth Trajectory</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={[
                      { year: 'Year 1', revenue: 1.8, ebitda: -1.5, label: '$1.8M' },
                      { year: 'Year 2', revenue: 7.1, ebitda: -0.5, label: '$7.1M' },
                      { year: 'Year 3', revenue: 20.8, ebitda: 5.2, label: '$20.8M' },
                      { year: 'Year 4', revenue: 51.6, ebitda: 20.6, label: '$51.6M' },
                      { year: 'Year 5', revenue: 118.5, ebitda: 65.3, label: '$118.5M' }
                    ]}>
                      <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="ebitdaGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                      <XAxis
                        dataKey="year"
                        stroke="#94a3b8"
                        style={{ fontSize: '12px' }}
                      />
                      <YAxis
                        stroke="#94a3b8"
                        style={{ fontSize: '12px' }}
                        tickFormatter={(value) => `$${value}M`}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1e293b',
                          border: '2px solid #10b981',
                          borderRadius: '12px',
                          color: '#fff'
                        }}
                        formatter={(value: any, name?: string) => {
                          if (name === 'revenue') return [`$${value}M`, 'Revenue'];
                          if (name === 'ebitda') return [`$${value}M`, 'EBITDA'];
                          return [value, name || ''];
                        }}
                      />
                      <Legend
                        wrapperStyle={{ paddingTop: '20px' }}
                        iconType="square"
                      />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#10b981"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#revenueGradient)"
                        name="Revenue"
                      />
                      <Area
                        type="monotone"
                        dataKey="ebitda"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#ebitdaGradient)"
                        name="EBITDA"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Year-by-Year Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                {[
                  {
                    year: 'Year 1',
                    period: '10 Months',
                    revenue: '$1.9M',
                    ebitda: '-83%',
                    margin: 'Investment Phase',
                    merchants: '500',
                    mau: '50K',
                    gmv: '$25.5M',
                    color: 'from-red-500/20 to-orange-500/20 border-red-500/40'
                  },
                  {
                    year: 'Year 2',
                    period: 'Growth',
                    revenue: '$7.1M',
                    ebitda: '-7%',
                    margin: 'Near Break-even',
                    merchants: '1,200',
                    mau: '150K',
                    gmv: '$95M',
                    color: 'from-orange-500/20 to-yellow-500/20 border-orange-500/40'
                  },
                  {
                    year: 'Year 3',
                    period: 'Expansion',
                    revenue: '$20.8M',
                    ebitda: '+25%',
                    margin: 'Profitable',
                    merchants: '2,500',
                    mau: '350K',
                    gmv: '$277M',
                    color: 'from-emerald-500/20 to-green-500/20 border-emerald-500/40'
                  },
                  {
                    year: 'Year 4',
                    period: 'UAE Leader',
                    revenue: '$51.6M',
                    ebitda: '+40%',
                    margin: 'Market Leader',
                    merchants: '5,000',
                    mau: '750K',
                    gmv: '$688M',
                    color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/40'
                  },
                  {
                    year: 'Year 5',
                    period: 'GCC Expansion',
                    revenue: '$118.5M',
                    ebitda: '+55%',
                    margin: 'Exit Ready',
                    merchants: '5K',
                    mau: '1.5M',
                    gmv: '$1.58B',
                    color: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/40'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br ${item.color} border-2 rounded-xl p-6 transform hover:scale-105 transition-all`}
                  >
                    <div className="mb-4">
                      <p className="text-sm text-slate-300 uppercase tracking-wide">{item.year}</p>
                      <p className="text-xs text-slate-400">{item.period}</p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className={`${typography.labelMicro} text-slate-400`}>Revenue</p>
                        <p className={`${typography.metricMedium} text-white`}>{item.revenue}</p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-400">EBITDA Margin</p>
                        <p className={`text-lg font-bold ${item.ebitda.startsWith('-') ? 'text-red-400' : 'text-emerald-400'}`}>
                          {item.ebitda}
                        </p>
                        <p className="text-xs text-slate-400">{item.margin}</p>
                      </div>

                      <div className="pt-3 border-t border-white/10">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <p className="text-slate-500">Merchants</p>
                            <p className="text-white font-bold">{item.merchants}</p>
                          </div>
                          <div>
                            <p className="text-slate-500">MAU</p>
                            <p className="text-white font-bold">{item.mau}</p>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-slate-500">GMV</p>
                          <p className="text-white font-bold">{item.gmv}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Year 1 GMV Footnote */}
              <div className="mt-4 text-center">
                <p className="text-xs text-slate-400 italic">
                  * Year 1 GMV based on 10-month operating period (Mar 1-Dec 2026) with avg 24K MAU, ramping from 2K → 50K users, avg 3.6 txn/month × $27
                </p>
              </div>

              {/* Key Assumptions */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left: Revenue Model */}
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                    Revenue Model Evolution
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Blended Take Rate:</span>
                      <span className="text-white font-bold">7.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Gross Margin:</span>
                      <span className="text-white font-bold">92%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Transaction Frequency:</span>
                      <span className="text-white font-bold">4x → 5x/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">AOV Growth:</span>
                      <span className="text-white font-bold">AED 100 → AED 130</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Merchant Retention:</span>
                      <span className="text-white font-bold">85% → 95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">User LTV:</span>
                      <span className="text-white font-bold">AED 360 → AED 468</span>
                    </div>
                  </div>
                </div>

                {/* Right: Path to Profitability */}
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-blue-400" />
                    Path to Profitability
                  </h3>
                  <div className="space-y-4">
                    {[
                      { phase: 'Year 1-2', status: 'Investment Phase', desc: 'Validate model, build merchant network, achieve break-even', color: 'orange' },
                      { phase: 'Year 3', status: 'Profitable', desc: '+25% EBITDA, proven unit economics, 350K users', color: 'emerald' },
                      { phase: 'Year 4-5', status: 'Scale & Expand', desc: '40-55% EBITDA, UAE leader, GCC expansion', color: 'blue' }
                    ].map((item, idx) => (
                      <div key={idx} className={`border-l-4 border-${item.color}-500 pl-4`}>
                        <p className="text-sm font-bold text-white">{item.phase}: {item.status}</p>
                        <p className="text-xs text-slate-400">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/20">
                    <p className={`${typography.labelMicro} text-slate-400 mb-2`}>Exit Valuation Range (8-12x revenue):</p>
                    <p className={`${typography.metricMedium} text-emerald-400`}>$950M - $1.42B</p>
                    <p className={`${typography.labelMicro} text-slate-500 mt-1`}>Based on Year 5 revenue of $118.5M</p>
                  </div>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                <p className="text-sm text-amber-200">
                  <span className="font-bold">📊 Key Assumptions:</span> Revenue based on 7.5% blended take rate across merchant transactions.
                  Gross margin assumes payment processing costs (2.5% of GMV) and support costs (AED 2/MAU).
                  EBITDA excludes stock-based compensation. Path to profitability assumes successful Series A ($2-3M) and Series B ($10M) fundraising.
                  All figures in USD, exchange rate: 3.67 AED/USD.
                </p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 21: EXIT STRATEGY ====================
      case 21:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-16 px-8 flex items-center justify-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-block bg-emerald-500/20 border border-emerald-400 px-6 py-2 rounded-full mb-4">
                  <p className={`${typography.labelEyebrow} text-emerald-300`}>Path to Liquidity</p>
                </div>
                <h2 className={`${typography.h1} text-white mb-4`}>
                  Exit Strategy & Investor Returns
                </h2>
                <p className={`${typography.bodyLarge} text-slate-300 max-w-3xl mx-auto`}>
                  Clear exit path with strong strategic acquirer interest and 95-140x return potential for pre-seed investors
                </p>
              </div>

              {/* Strategic Acquirers - 3 Tiers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    tier: 'Tier 1',
                    subtitle: 'Super Apps',
                    acquirers: ['Careem/Uber', 'Noon', 'Majid Al Futtaim'],
                    rationale: 'Want our merchant network + behavioral data to enhance their platforms',
                    color: 'from-emerald-500/20 to-green-500/20 border-emerald-500/40',
                    icon: 'Target'
                  },
                  {
                    tier: 'Tier 2',
                    subtitle: 'Payment/Fintech',
                    acquirers: ['Tabby', 'Delivery Hero', 'Kitopi'],
                    rationale: 'Need our user acquisition engine + merchant relationships',
                    color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/40',
                    icon: '💳'
                  },
                  {
                    tier: 'Tier 3',
                    subtitle: 'Financial Institutions',
                    acquirers: ['Emirates NBD', 'First Abu Dhabi Bank', 'ADCB'],
                    rationale: 'Want to modernize loyalty programs with our tech stack',
                    color: 'from-purple-500/20 to-pink-500/20 border-purple-500/40',
                    icon: '🏦'
                  }
                ].map((tier, idx) => (
                  <div key={idx} className={`bg-gradient-to-br ${tier.color} border-2 rounded-xl p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={typography.metricMedium}>{tier.icon}</span>
                      <div>
                        <h3 className={`${typography.h3} text-white`}>{tier.tier}</h3>
                        <p className={`${typography.bodySmall} text-slate-300`}>{tier.subtitle}</p>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      {tier.acquirers.map((name, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur rounded-lg px-3 py-2">
                          <p className="text-white font-bold text-sm">{name}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{tier.rationale}</p>
                  </div>
                ))}
              </div>

              {/* Comparable MENA Exits */}
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 mb-8">
                <h3 className={`${typography.h3} text-white mb-6 flex items-center gap-3`}>
                  <TrendingUp className="text-emerald-400" size={28} />
                  Comparable MENA Exits (Proof of Market)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { company: 'Careem', acquirer: 'Uber', year: '2019', value: '$3.1B', multiple: '14x revenue', highlight: true },
                    { company: 'Souq', acquirer: 'Amazon', year: '2017', value: '$580M', multiple: '3x revenue', highlight: false },
                    { company: 'Mumzworld', acquirer: 'Majid Al Futtaim', year: '2023', value: '$100M', multiple: '5x revenue', highlight: false },
                    { company: 'Fetchr', acquirer: 'Delivery Hero', year: '2022', value: '$30M', multiple: '2x revenue', highlight: false }
                  ].map((exit, idx) => (
                    <div key={idx} className={`${exit.highlight ? 'bg-emerald-500/20 border-emerald-400 border-2' : 'bg-white/5 border border-white/10'} rounded-xl p-5`}>
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className={`${typography.h4} text-white`}>{exit.company}</p>
                          <p className={`${typography.labelMicro} text-slate-400`}>Acquired by {exit.acquirer} ({exit.year})</p>
                        </div>
                        <div className="text-right">
                          <p className={`${typography.h3} text-emerald-400`}>{exit.value}</p>
                          <p className={`${typography.labelMicro} text-slate-400`}>{exit.multiple}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exit Timeline + Valuation Scenarios */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Left: Timeline */}
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
                  <h3 className={`${typography.h3} text-white mb-6`}>Exit Timeline</h3>
                  <div className="space-y-6">
                    {[
                      {
                        milestone: 'Month 18',
                        event: 'Series A',
                        details: '$2-3M @ $12-15M valuation',
                        type: 'Early Exit Option',
                        color: 'blue'
                      },
                      {
                        milestone: 'Month 36',
                        event: 'Series B',
                        details: '$10M @ $45M valuation',
                        type: 'Growth Exit',
                        color: 'purple'
                      },
                      {
                        milestone: 'Month 48-60',
                        event: 'Strategic Exit',
                        details: '$950M-1.4B valuation',
                        type: 'Target Exit',
                        color: 'emerald'
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="relative pl-6 border-l-2 border-white/20">
                        <div className={`absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full ${
                          item.color === 'emerald' ? 'bg-emerald-500' :
                          item.color === 'purple' ? 'bg-purple-500' :
                          'bg-blue-500'
                        }`} />
                        <p className={`${typography.labelMicro} text-slate-400 uppercase tracking-wider mb-1`}>{item.milestone}</p>
                        <p className={`${typography.h4} text-white mb-1`}>{item.event}</p>
                        <p className={`${typography.bodySmall} text-slate-300 mb-2`}>{item.details}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          item.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-300' :
                          item.color === 'purple' ? 'bg-purple-500/20 text-purple-300' :
                          'bg-blue-500/20 text-blue-300'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Why We're Attractive */}
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
                  <h3 className={`${typography.h3} text-white mb-6`}>Why Acquirers Will Pay Premium</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: '🔒',
                        title: 'Network Effects Moat',
                        desc: 'Both-sided lock-in: 5K merchants + 1.5M users by exit'
                      },
                      {
                        icon: '📊',
                        title: 'Behavioral Data Gold Mine',
                        desc: 'Offline purchase patterns no one else has in MENA'
                      },
                      {
                        icon: '🤝',
                        title: 'Merchant Relationships',
                        desc: '5K merchants with exclusive revenue-share contracts by Year 5'
                      },
                      {
                        icon: 'Rocket',
                        title: 'GCC Expansion Ready',
                        desc: 'Proven playbook to replicate in Saudi, Kuwait, Qatar'
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <span className={`${typography.metricMedium} flex-shrink-0`}>{item.icon}</span>
                        <div>
                          <p className={`${typography.h4} text-white mb-1`}>{item.title}</p>
                          <p className={`${typography.bodySmall} text-slate-300`}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Investor Returns Panel - MOST IMPORTANT */}
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 border-2 border-emerald-400 rounded-2xl p-8">
                <h3 className={`${typography.h2} text-white mb-6 flex items-center gap-3`}>
                  <DollarSign className="text-emerald-400" size={32} />
                  Pre-Seed Investor Returns ($400K SAFE, $5M Cap)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      scenario: 'Conservative',
                      event: 'Series A Exit (18mo)',
                      ownership: '6.7%',
                      exitVal: '$12-15M',
                      return: '2.0-2.5x',
                      irr: '100-130% IRR',
                      color: 'blue',
                      cashout: '$0.8-1.0M'
                    },
                    {
                      scenario: 'Moderate',
                      event: 'Series B Exit (36mo)',
                      ownership: '6.4%',
                      exitVal: '$45M',
                      return: '7.2x',
                      irr: '160% IRR',
                      color: 'purple',
                      cashout: '$2.9M'
                    },
                    {
                      scenario: 'Target',
                      event: 'Strategic Exit (48mo)',
                      ownership: '4.0%',
                      exitVal: '$950M-1.4B',
                      return: '95-140x',
                      irr: '350-400% IRR',
                      color: 'emerald',
                      cashout: '$38-56M'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className={`${
                      item.color === 'emerald' ? 'bg-emerald-500/30 border-emerald-300 border-2' :
                      item.color === 'purple' ? 'bg-purple-500/20 border-purple-300 border' :
                      'bg-blue-500/20 border-blue-300 border'
                    } rounded-xl p-6`}>
                      <div className="text-center mb-4">
                        <p className={`${typography.labelMicro} text-slate-300 uppercase tracking-wider mb-1`}>{item.scenario} Scenario</p>
                        <p className={`${typography.h4} text-white mb-2`}>{item.event}</p>
                      </div>
                      <div className="space-y-3 text-center">
                        <div>
                          <p className={typography.labelMicro}>Exit Valuation</p>
                          <p className={`${typography.metricSmall} text-white`}>{item.exitVal}</p>
                        </div>
                        <div>
                          <p className={typography.labelMicro}>Investor Cash Out</p>
                          <p className={`${typography.h3} text-emerald-300`}>{item.cashout}</p>
                        </div>
                        <div className="pt-3 border-t border-white/20">
                          <p className={`${typography.metricMedium} text-white mb-1`}>{item.return}</p>
                          <p className={`${typography.bodySmall} text-slate-300`}>{item.irr}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className={`${typography.bodySmall} text-slate-300`}>
                    <span className="font-bold text-emerald-300">Exit multiple range:</span> 8-12x revenue (based on Careem 14x, Souq 3x, Mumzworld 5x average).
                    Ownership dilution assumes standard Series A (15% dilution) and Series B (20% dilution).
                  </p>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 text-center">
                <div className="inline-block bg-white/10 backdrop-blur border border-white/20 rounded-xl px-8 py-4">
                  <p className={`${typography.h4} text-white`}>
                    <span className="font-bold text-emerald-400">Target Exit Window:</span> 48-60 months from pre-seed |{' '}
                    <span className="font-bold text-emerald-400">Expected Return:</span> 95-140x for early investors
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 22: VISION ====================
      case 22:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-16 px-8 flex items-center justify-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-slate-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-6xl mx-auto relative z-10">

              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-full mb-4 border-2 border-purple-500/30 shadow-lg">
                  <Rocket className="text-purple-600" size={24} />
                  <p className="text-sm font-black text-purple-700 uppercase tracking-wider">Long-term Vision</p>
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
                    Capturing the $35B GCC offline rewards market, one transaction at a time
                  </p>
                </div>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 23: COMPETITIVE LANDSCAPE - ALTERNATIVE VIEW ====================
      case 23:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#c9a227]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto relative z-10">

              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-slate-100 rounded-full mb-4 border-2 border-blue-200 shadow-lg">
                  <p className="text-xs font-black text-blue-700 uppercase tracking-wider">Strategic Positioning</p>
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
                    <p className="text-2xl font-black text-emerald-400 mb-1">10x+</p>
                    <p className="text-sm text-slate-400 font-medium">LTV:CAC ratio (1-month payback)</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-[#c9a227]/30">
                    <p className="text-2xl font-black text-[#c9a227] mb-1">March 1, 2026</p>
                    <p className="text-sm text-slate-400 font-medium">Launch & lock the market before they react</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );

      // ==================== SLIDE 24: COMPETITIVE MOAT ====================
      case 24:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-white py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#c9a227]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto relative z-10">

              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#c9a227]/10 to-blue-100 rounded-full mb-4 border-2 border-[#c9a227]/30 shadow-lg">
                  <p className="text-xs font-black text-[#c9a227] uppercase tracking-wider">Defensibility</p>
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

      // ==================== SLIDE 25: ROADMAP ====================
      case 25:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-6xl mx-auto relative z-10">
              {/* Enhanced Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-blue-600/10 rounded-full mb-4 border-2 border-blue-600/30 shadow-lg">
                  <span className="text-2xl">🗓️</span>
                  <p className="text-sm font-black text-blue-700 uppercase tracking-wider">GTM Roadmap</p>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-4">
                  The Path to <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">GCC Domination</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  10-Year Plan → 4-Year Execution • 60% Faster Timeline
                </p>
                <div className="mt-4 inline-block px-6 py-3 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-full">
                  <p className="text-sm font-black text-emerald-700">
                    Phase 1 (~2yr) • Phase 2 (~1.2yr) • Phase 3 (~10mo) = Exit-Ready in 4 Years
                  </p>
                </div>
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
                      <h3 className="text-2xl font-black text-slate-900">Phase 1: Dubai/UAE Dominance</h3>
                      <p className="text-sm text-slate-600 font-bold">~2 Years • 3 Horizons (H1: 5mo • H2: 2.5mo • H3: 1.2yr) • 2026-2027</p>
                    </div>
                  </div>
                </div>

                {/* Phase 1 Horizons */}
                {[
                  {
                    phase: "Horizon 1 (H1)",
                    timeline: "~5 Months • Launch March 1, 2026",
                    emoji: "Rocket",
                    title: "Core PMF Validation",
                    subtitle: "Dubai Marina/JBR Focus",
                    features: ["Launch F&B + Core Verticals", "250 merchants • 5K MAU (conservative)", "Prove 25% D30 retention + LTV:CAC 10x+", "Validate coin-led rewards model"],
                    kpis: "250 merchants min • 5K MAU (conservative) • $200K Tranche 1 + $200K at milestones",
                    status: "In Progress",
                    color: "emerald",
                    bgGradient: "from-emerald-500/10 via-emerald-500/5 to-white",
                    borderColor: "border-emerald-500/30",
                    badgeBg: "from-emerald-500 to-emerald-600"
                  },
                  {
                    phase: "Horizon 2 (H2)",
                    timeline: "~2.5 Months • Scale Responsibly",
                    emoji: "TrendingUp",
                    title: "Multi-Category Expansion",
                    subtitle: "Healthcare + Home Services",
                    features: ["Add 2 new categories", "Geographic expansion (Downtown, Business Bay)", "Platform tech (analytics, AI recommendations)", "Merchant WaaS pilots"],
                    kpis: "500 merchants • 75K MAU • AED 75M GMV • 30% D30 retention",
                    status: "Planned",
                    color: "blue",
                    bgGradient: "from-blue-500/10 via-blue-500/5 to-white",
                    borderColor: "border-blue-500/30",
                    badgeBg: "from-blue-500 to-blue-600"
                  },
                  {
                    phase: "Horizon 3 (H3)",
                    timeline: "~1.2 Years • Become Infrastructure",
                    emoji: "Building2",
                    title: "UAE-Wide Platform",
                    subtitle: "Enterprise + Data Moats",
                    features: ["All 7 UAE cities coverage", "WaaS revenue (5+ clients)", "Government partnerships (2+)", "Data intelligence layer operational"],
                    kpis: "1,500 merchants • 150K MAU • AED 180M GMV • 30% EBITDA",
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
                          {/* Badge with Icon */}
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${horizon.badgeBg} text-white flex flex-col items-center justify-center flex-shrink-0 shadow-lg`}>
                            {(() => {
                              const iconMap: { [key: string]: any } = {
                                'Rocket': Rocket,
                                'TrendingUp': TrendingUp,
                                'Building2': Building2,
                                'Trophy': Trophy,
                                'Globe': Globe
                              };
                              const IconComponent = iconMap[horizon.emoji];
                              return IconComponent ? <IconComponent size={28} className="text-white" /> : null;
                            })()}
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
                      <p className="text-sm text-slate-600 font-bold">~1.2 Years • Qatar (3-4mo) + Saudi Arabia (9-10mo) • 2028-2029</p>
                    </div>
                  </div>
                </div>

                {/* Phase 2 Details */}
                {[
                  {
                    phase: "Phase 2",
                    timeline: "~1.2 Years Total",
                    emoji: "Globe",
                    title: "Qatar + Saudi Arabia",
                    subtitle: "Export Proven System",
                    features: ["🇶🇦 Qatar (3-4 months): Doha launch, QFC license, 50 merchants", "🇸🇦 Saudi Arabia (9-10 months): Riyadh → Jeddah → Dammam", "Parallel market entry strategy", "Leverage UAE playbook + local partnerships"],
                    kpis: "2,500 merchants • 200K MAU • AED 300M GMV • 3 countries live",
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
                          {/* Badge with Icon */}
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.badgeBg} text-white flex flex-col items-center justify-center flex-shrink-0 shadow-lg`}>
                            {(() => {
                              const iconMap: { [key: string]: any } = {
                                'Rocket': Rocket,
                                'TrendingUp': TrendingUp,
                                'Building2': Building2,
                                'Trophy': Trophy,
                                'Globe': Globe
                              };
                              const IconComponent = iconMap[phase.emoji];
                              return IconComponent ? <IconComponent size={28} className="text-white" /> : null;
                            })()}
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
                      <p className="text-sm text-slate-600 font-bold">~10 Months • Kuwait + Bahrain + Oman (Parallel) • 2029-2030</p>
                    </div>
                  </div>
                </div>

                {/* Phase 3 Details */}
                {[
                  {
                    phase: "Phase 3",
                    timeline: "~10 Months (Parallel Launch)",
                    emoji: "Trophy",
                    title: "Full GCC Infrastructure",
                    subtitle: "Exit-Ready Position",
                    features: ["🇰🇼🇧🇭🇴🇲 Parallel 3-country launch (institutional entry)", "Top-down strategy: govt partnerships + enterprise first", "Shared regional infrastructure (marginal cost 20%)", "Exit readiness: AED 420M revenue, 60% EBITDA, 300K MAU"],
                    kpis: "3,000 merchants • 300K MAU • AED 420M revenue • Exit: $800M-$2.3B",
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
                          {/* Badge with Icon */}
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.badgeBg} text-white flex flex-col items-center justify-center flex-shrink-0 shadow-lg`}>
                            {(() => {
                              const iconMap: { [key: string]: any } = {
                                'Rocket': Rocket,
                                'TrendingUp': TrendingUp,
                                'Building2': Building2,
                                'Trophy': Trophy,
                                'Globe': Globe
                              };
                              const IconComponent = iconMap[phase.emoji];
                              return IconComponent ? <IconComponent size={28} className="text-white" /> : null;
                            })()}
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

      // ==================== SLIDE 26: TECHNOLOGY ====================
      case 26:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-white via-purple-50/20 to-white py-16 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-4 border-2 border-purple-200 shadow-lg">
                  <p className={`${typography.labelEyebrow} text-purple-700`}>Tech Stack</p>
                </div>
                <h2 className={`${typography.h1} text-slate-900 mb-6`}>
                  Built for <span className="text-purple-600">Scale</span>
                </h2>
                <p className={`${typography.h3} text-slate-600 max-w-3xl mx-auto`}>
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
                      <h3 className={`${typography.h3} text-slate-900 mb-6`}>{stack.layer}</h3>
                      <div className="space-y-2">
                        {stack.tech.map((item, tidx) => (
                          <div key={tidx} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <p className={`${typography.body} text-slate-700`}>{item}</p>
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
                    <h3 className={`${typography.h2} text-slate-900`}>Payment Intelligence Layer</h3>
                    <p className={`${typography.h4} text-blue-600 font-semibold`}>Pre-Transaction Optimization</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className={`${typography.h4} text-slate-900 mb-3`}>Smart Routing</h4>
                    <p className={`${typography.body} text-slate-600`}>Routes payments to best bank partner based on user's card issuer and merchant</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className={`${typography.h4} text-slate-900 mb-3`}>Personalized Offers</h4>
                    <p className={`${typography.body} text-slate-600`}>Shows card-specific deals (e.g., "Extra 5% with Emirates NBD Visa")</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className={`${typography.h4} text-slate-900 mb-3`}>Real-Time Analysis</h4>
                    <p className={`${typography.body} text-slate-600`}>Analyzes payment method BEFORE checkout to maximize rewards and savings</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-slate-900 rounded-2xl p-10 text-white">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <p className={`${typography.metric} text-[#c9a227] mb-2`}>&lt;100ms</p>
                    <p className={`${typography.h4} text-slate-300`}>Search latency</p>
                  </div>
                  <div>
                    <p className={`${typography.metric} text-[#c9a227] mb-2`}>99.9%</p>
                    <p className={`${typography.h4} text-slate-300`}>Uptime SLA</p>
                  </div>
                  <div>
                    <p className={`${typography.metric} text-[#c9a227] mb-2`}>PCI-DSS</p>
                    <p className={`${typography.h4} text-slate-300`}>Compliant payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 27: QUESTIONS? ====================
      case 27:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-5xl mx-auto text-center relative z-10">
              <div className={typography.metricHero}>❓</div>
              <h1 className={`${typography.h1} text-slate-900 mb-8`}>
                Questions?
              </h1>
              <p className={`${typography.h2} text-slate-600 mb-12 max-w-3xl mx-auto`}>
                Let's discuss how Nuqta can transform local discovery in the GCC
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                  <div className={typography.metricMedium}>📧</div>
                  <p className={`${typography.labelEyebrow} text-slate-600 mb-2`}>Email</p>
                  <p className={`${typography.h4} text-slate-900`}>rejaul@nuqtapp.com</p>
                </div>
                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                  <div className={typography.metricMedium}>📱</div>
                  <p className={`${typography.labelEyebrow} text-slate-600 mb-2`}>Phone</p>
                  <p className={`${typography.h4} text-slate-900`}>+971 50 376 4345</p>
                </div>
                <div className="bg-white border-2 border-purple-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                  <div className={typography.metricMedium}>🌐</div>
                  <p className={`${typography.labelEyebrow} text-slate-600 mb-2`}>Website</p>
                  <p className={`${typography.h4} text-slate-900`}>www.nuqtapp.com</p>
                </div>
              </div>

              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#c9a227] to-[#a68420] flex items-center justify-center mx-auto shadow-xl">
                <Image src="/nuqta-logo.png" alt="Nuqta" width={64} height={64} className="object-contain p-2" />
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 28: LET'S TALK ====================
      case 28:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-5xl mx-auto text-center relative z-10">
              <div className={typography.metricHero}>💬</div>
              <h1 className={`${typography.h1} text-slate-900 mb-8`}>
                Let's <span className="text-emerald-600">Talk</span>
              </h1>

              <div className="bg-white border-2 border-emerald-200 rounded-3xl p-12 mb-12 shadow-2xl">
                <p className={`${typography.h2} text-slate-900 mb-6`}>
                  Ready to revolutionize local shopping?
                </p>
                <p className={`${typography.h3} text-slate-600 mb-8 max-w-2xl mx-auto`}>
                  Join us in building the future of local discovery in the GCC
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 rounded-2xl p-6">
                    <p className={`${typography.h4} text-slate-900 mb-2`}>Pre-Seed Round</p>
                    <p className={`${typography.metricMedium} text-emerald-600`}>$400K</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6">
                    <p className={`${typography.h4} text-slate-900 mb-2`}>Launch Timeline</p>
                    <p className={`${typography.metricMedium} text-blue-600`}>7 Days</p>
                  </div>
                </div>

                <p className={`${typography.h4} text-slate-600`}>
                  📧 <strong>rejaul@nuqtapp.com</strong> • 📱 <strong>+971 50 376 4345</strong>
                </p>
              </div>

              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#c9a227] to-[#a68420] flex items-center justify-center mx-auto shadow-xl">
                <Image src="/nuqta-logo.png" alt="Nuqta" width={64} height={64} className="object-contain p-2" />
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 29: JOIN US ====================
      case 29:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center justify-center p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#c9a227]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-5xl mx-auto text-center relative z-10">
              <div className="flex justify-center mb-8">
                <Rocket size={96} className="text-[#c9a227]" />
              </div>
              <h1 className={`${typography.h1} text-slate-900 mb-8`}>
                Join <span className="text-[#c9a227]">Us</span>
              </h1>

              <p className={`${typography.h2} text-slate-600 mb-12 max-w-3xl mx-auto`}>
                Be part of the journey to transform how 50M people discover local deals
              </p>

              <div className="bg-gradient-to-r from-slate-900 via-[#0a1628] to-slate-900 border-2 border-[#c9a227]/30 rounded-3xl p-12 mb-12 shadow-2xl text-white">
                <h3 className={`${typography.h3} mb-8 text-[#c9a227]`}>The Opportunity</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <p className={`${typography.metric} text-emerald-400 mb-2`}>$35B</p>
                    <p className={`${typography.bodySmall} text-slate-300`}>GCC SAM</p>
                  </div>
                  <div>
                    <p className={`${typography.metric} text-blue-400 mb-2`}>30+</p>
                    <p className={`${typography.bodySmall} text-slate-300`}>Signed LOIs</p>
                  </div>
                  <div>
                    <p className={`${typography.metric} text-[#c9a227] mb-2`}>10x+</p>
                    <p className={`${typography.bodySmall} text-slate-300`}>LTV:CAC Ratio</p>
                  </div>
                </div>

                <p className={`${typography.h4} text-slate-300 mb-6`}>
                  Launching March 1, 2026 • Profitable by Year 3 • Built for scale
                </p>

                <div className="border-t-2 border-white/10 pt-6">
                  <p className={`${typography.h4} text-slate-300`}>
                    📧 <strong className="text-white">rejaul@nuqtapp.com</strong>
                  </p>
                </div>
              </div>

              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#c9a227] to-[#a68420] flex items-center justify-center mx-auto shadow-xl">
                <Image src="/nuqta-logo.png" alt="Nuqta" width={64} height={64} className="object-contain p-2" />
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 30: THANK YOU ====================
      case 30:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-5xl mx-auto text-center relative z-10">
              <div className={typography.metricHero}>🙏</div>
              <h1 className={`${typography.h1} text-slate-900 mb-8`}>
                Thank <span className="text-purple-600">You</span>
              </h1>

              <div className="bg-white border-2 border-purple-200 rounded-3xl p-12 mb-12 shadow-2xl">
                <p className={`${typography.h2} text-slate-900 mb-6`}>
                  For your time and consideration
                </p>
                <p className={`${typography.h3} text-slate-600 mb-10 max-w-2xl mx-auto`}>
                  We're building something special—and we'd love to have you as part of the journey
                </p>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8">
                  <p className={`${typography.h4} text-slate-900 mb-4`}>Key Takeaway</p>
                  <p className={`${typography.h3} text-slate-700 italic leading-relaxed`}>
                    "Nuqta makes finding the best local deals <span className="font-black text-purple-600">54x faster</span> than traditional search, while creating sustainable value for merchants and banks."
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-8 mb-8">
                <div className="text-center">
                  <p className={`${typography.bodySmall} text-slate-600 mb-2`}>Contact</p>
                  <p className={`${typography.h4} text-slate-900`}>rejaul@nuqtapp.com</p>
                </div>
                <div className="w-1 h-12 bg-slate-300"></div>
                <div className="text-center">
                  <p className={`${typography.bodySmall} text-slate-600 mb-2`}>Website</p>
                  <p className={`${typography.h4} text-slate-900`}>www.nuqtapp.com</p>
                </div>
              </div>

              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#c9a227] to-[#a68420] flex items-center justify-center mx-auto shadow-xl">
                <Image src="/nuqta-logo.png" alt="Nuqta" width={64} height={64} className="object-contain p-2" />
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 31: CONTACT INFO ====================
      case 31:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-[#c9a227]/10 to-white flex items-center justify-center p-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#c9a227] to-[#a68420] flex items-center justify-center mx-auto mb-12 shadow-2xl">
                <Image src="/nuqta-logo.png" alt="Nuqta" width={96} height={96} className="object-contain p-4" />
              </div>

              <h1 className={`${typography.h1} text-slate-900 mb-4 tracking-tight`}>
                Nuqta
              </h1>

              <p className={`${typography.metricMedium} text-[#c9a227] font-bold mb-12`}>
                Find Deals Before Google
              </p>

              <div className="bg-white border-2 border-[#c9a227]/30 rounded-3xl p-12 mb-12 shadow-xl">
                <p className={`${typography.h2} text-slate-900 mb-8`}>
                  Let's build the future of local discovery together
                </p>
                <div className={`space-y-6 ${typography.h3} text-slate-700`}>
                  <div className="flex items-center justify-center gap-4">
                    <span className={typography.metricMedium}>📧</span>
                    <p className="font-semibold">rejaul@nuqtapp.com</p>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <span className={typography.metricMedium}>📱</span>
                    <p className="font-semibold">+971 50 376 4345</p>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <span className={typography.metricMedium}>🌐</span>
                    <p className="font-semibold">www.nuqtapp.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-200 rounded-2xl p-6">
                <p className={`${typography.h4} text-slate-700`}>
                  <span className="font-bold text-emerald-600">Pre-Seed Round: $400K</span> •
                  <span className="font-bold text-blue-600"> Launch: March 1, 2026</span> •
                  <span className="font-bold text-purple-600"> 32 LOIs</span>
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Touch/swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-white z-50 overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Top Navigation - Mobile Optimized */}
      <div className="absolute top-2 sm:top-4 md:top-6 right-2 sm:right-4 md:right-6 z-50 flex items-center gap-2 sm:gap-4">
        <span className="text-xs sm:text-sm text-slate-600 font-mono bg-white/90 backdrop-blur px-2 py-1 rounded">
          {currentSlide + 1} / {totalSlides}
        </span>
        <button
          onClick={onClose}
          className="px-2 py-1 sm:px-4 sm:py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition-colors text-xs sm:text-sm font-semibold"
        >
          <span className="hidden sm:inline">Close (ESC)</span>
          <span className="sm:hidden">✕</span>
        </button>
      </div>

      {/* Slide Content */}
      <div className="w-full h-full overflow-y-auto">
        {renderSlide()}
      </div>

      {/* Side Navigation Arrows - Minimal Design */}
      {/* Left Arrow */}
      {currentSlide > 0 && (
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 backdrop-blur border-2 border-slate-300 text-slate-900 rounded-full hover:bg-slate-50 hover:border-slate-400 transition-all shadow-lg flex items-center justify-center text-2xl"
          aria-label="Previous slide"
        >
          ←
        </button>
      )}

      {/* Right Arrow */}
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition-all shadow-lg flex items-center justify-center text-2xl"
          aria-label="Next slide"
        >
          →
        </button>
      )}
    </div>
  );
}
