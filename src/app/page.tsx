"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Building2, Zap, Target, DollarSign, Clock, Shield, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

// DataPoint Tooltip Component for statistics with sources
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
      className={`relative cursor-help inline-flex items-start gap-0.5 ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onTouchStart={() => setShowTooltip(true)}
      onTouchEnd={() => setTimeout(() => setShowTooltip(false), 3000)}
    >
      <span>{value}</span>
      <span className="text-[0.5em] text-[#c9a227]/70 hover:text-[#c9a227] transition-colors">ⓘ</span>
      {showTooltip && (
        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-950 border border-[#c9a227]/50 rounded-lg text-xs sm:text-sm text-gray-300 whitespace-normal max-w-[200px] sm:max-w-[280px] text-center shadow-xl font-normal">
          <span className="text-[#c9a227] font-medium">Source:</span> {source}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#c9a227]/50" />
        </span>
      )}
    </span>
  );
}

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

// FAQ Component
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left group gap-3"
      >
        <span className="text-lg font-semibold text-slate-200 group-hover:text-[#c9a227] transition-colors">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-[#c9a227] transition-colors flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-slate-400 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-4 bg-gradient-to-r from-[#c9a227] via-yellow-400 to-[#c9a227] bg-clip-text text-transparent">
              Nuqta
            </h1>
          </div>

          {/* Main Positioning */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-300 mb-6">
            Rewards-Led Commerce Intelligence
          </h2>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto">
            Save 5-10% on everyday offline spending — cafes, salons, gyms — with instant cashback
          </p>

          {/* Key Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-500/40 rounded-xl p-6">
              <div className="text-4xl md:text-5xl font-black text-emerald-400 mb-2">30+</div>
              <div className="text-sm text-slate-300">Signed Merchant LOIs</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/40 rounded-xl p-6">
              <div className="text-3xl md:text-4xl font-black text-blue-400 mb-2">$34B</div>
              <div className="text-sm text-slate-300">UAE Market (SAM)</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/40 rounded-xl p-6">
              <div className="text-4xl md:text-5xl font-black text-purple-400 mb-2">16.8x</div>
              <div className="text-sm text-slate-300">LTV:CAC Ratio</div>
            </div>
            <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-500/40 rounded-xl p-6">
              <div className="text-4xl md:text-5xl font-black text-red-400 mb-2">7 Days</div>
              <div className="text-sm text-slate-300">To Launch</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/deck-kang"
              className="px-8 py-4 bg-[#c9a227] hover:bg-[#d4ae3a] text-white font-bold rounded-xl transition-all transform hover:scale-105 flex items-center gap-2 text-lg"
            >
              View Pitch Deck
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/data-room"
              className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-all transform hover:scale-105 flex items-center gap-2 text-lg"
            >
              Investor Data Room
              <Shield className="w-5 h-5" />
            </Link>
          </div>

          {/* Launch Date Callout */}
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-500/40 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-red-400" />
              <p className="text-2xl font-bold text-red-300">Launching January 28, 2026</p>
            </div>
            <p className="text-slate-300">MVP goes live in 7 days. 5 merchants Week 1, scale to 30 by Month 2.</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </div>
      </section>

      {/* Problem Section - User Pain */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-[#c9a227] font-bold mb-3">The Problem</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Users Leave <span className="text-red-500">AED 2.4B</span> on the Table
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              95% of offline spending in Dubai gets ZERO cashback. Google Maps shows you cafes — but doesn't save you money.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pain Point 1 */}
            <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-500/40 rounded-2xl p-8">
              <div className="text-5xl mb-4">😫</div>
              <h3 className="text-2xl font-bold mb-3 text-red-300">Generic Discovery</h3>
              <p className="text-slate-300 mb-4">
                Google Maps shows you cafes, but doesn't save you money. No built-in loyalty or cashback.
              </p>
              <div className="bg-red-900/30 rounded-lg p-4">
                <p className="text-sm text-red-200">
                  <strong>Lost Value:</strong> AED 150-200/month per user in unclaimed cashback
                </p>
              </div>
            </div>

            {/* Pain Point 2 */}
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 border-2 border-orange-500/40 rounded-2xl p-8">
              <div className="text-5xl mb-4">🎫</div>
              <h3 className="text-2xl font-bold mb-3 text-orange-300">Fragmented Loyalty</h3>
              <p className="text-slate-300 mb-4">
                15 different apps for cafes, salons, gyms. Users forget to check before spending.
              </p>
              <div className="bg-orange-900/30 rounded-lg p-4">
                <p className="text-sm text-orange-200">
                  <strong>Reality:</strong> 70% of loyalty points expire unused
                </p>
              </div>
            </div>

            {/* Pain Point 3 */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border-2 border-yellow-500/40 rounded-2xl p-8">
              <div className="text-5xl mb-4">💸</div>
              <h3 className="text-2xl font-bold mb-3 text-yellow-300">Credit Cards Don't Work</h3>
              <p className="text-slate-300 mb-4">
                Most cafes/salons are cash-based. Credit card rewards don't apply to offline spending.
              </p>
              <div className="bg-yellow-900/30 rounded-lg p-4">
                <p className="text-sm text-yellow-200">
                  <strong>Gap:</strong> 60% of Dubai's retail is cash-only
                </p>
              </div>
            </div>
          </div>

          {/* Market Opportunity */}
          <div className="mt-12 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-500/40 rounded-2xl p-8 text-center">
            <p className="text-lg text-slate-300 mb-2">
              UAE market: <span className="text-3xl font-black text-emerald-400"><DataPoint value="$34B/year" source="UAE Foodservice Market ($23.21B, Mordor Intelligence 2025), Salon Services ($10.05B, Deep Market Insights 2024), Fitness Market ($0.6B, SPER Research 2025)" className="text-emerald-400" /></span> across F&B, salons, and gyms.
            </p>
            <p className="text-slate-400">
              GCC total market (TAM): <strong className="text-emerald-300">$78B</strong>. Targeting 1% penetration = <strong className="text-emerald-300">$340M opportunity</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section - Merchant Pain */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-[#c9a227] font-bold mb-3">The Other Side</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Merchants Burn <span className="text-red-500">AED 200+</span> Per Customer
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Small merchants can't compete with Google Ads. They need foot traffic, not clicks.
            </p>
          </div>

          {/* Merchant P&L Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Current State (Red) */}
            <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-500/40 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">❌</div>
                <h3 className="text-2xl font-bold text-red-300">Current: Google Ads</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-red-500/30 pb-3">
                  <span className="text-slate-300">Customer Acquisition Cost</span>
                  <span className="text-xl font-bold text-red-400">AED 200-300</span>
                </div>
                <div className="flex justify-between items-center border-b border-red-500/30 pb-3">
                  <span className="text-slate-300">Conversion Rate</span>
                  <span className="text-xl font-bold text-red-400">2-3%</span>
                </div>
                <div className="flex justify-between items-center border-b border-red-500/30 pb-3">
                  <span className="text-slate-300">Customer Lifetime Value</span>
                  <span className="text-xl font-bold text-red-400">AED 150-200</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-slate-300 font-bold">ROI</span>
                  <span className="text-2xl font-black text-red-500">-50% Loss</span>
                </div>
              </div>

              <div className="mt-6 bg-red-900/30 rounded-lg p-4">
                <p className="text-sm text-red-200">
                  <strong>Why It Fails:</strong> Small merchants can't outbid Noon/Careem on Google. Negative ROI = unsustainable.
                </p>
              </div>
            </div>

            {/* With Nuqta (Green) */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-500/40 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">✅</div>
                <h3 className="text-2xl font-bold text-emerald-300">With Nuqta</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-emerald-500/30 pb-3">
                  <span className="text-slate-300">Customer Acquisition Cost</span>
                  <span className="text-xl font-bold text-emerald-400">AED 10-15</span>
                </div>
                <div className="flex justify-between items-center border-b border-emerald-500/30 pb-3">
                  <span className="text-slate-300">Conversion Rate</span>
                  <span className="text-xl font-bold text-emerald-400">15-20%</span>
                </div>
                <div className="flex justify-between items-center border-b border-emerald-500/30 pb-3">
                  <span className="text-slate-300">Customer Lifetime Value</span>
                  <span className="text-xl font-bold text-emerald-400">AED 400-500</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-slate-300 font-bold">ROI</span>
                  <span className="text-2xl font-black text-emerald-400">+3,000%</span>
                </div>
              </div>

              <div className="mt-6 bg-emerald-900/30 rounded-lg p-4">
                <p className="text-sm text-emerald-200">
                  <strong>Why It Works:</strong> QR-based distribution = AED 10-15 CAC. Cashback drives repeat visits. Merchant pays 15% only on completed sales.
                </p>
              </div>
            </div>
          </div>

          {/* Merchant Value Prop */}
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/40 rounded-2xl p-8 text-center">
            <p className="text-2xl font-bold text-blue-300 mb-3">
              "Pay only when you make money"
            </p>
            <p className="text-lg text-slate-300">
              15% commission on completed sales. Zero upfront fees. No Google Ads bidding wars.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-[#c9a227] font-bold mb-3">How Nuqta Works</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Search → Save → Earn
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The only platform where discovery drives savings, not just clicks.
            </p>
          </div>

          {/* User Journey Steps */}
          <div className="space-y-6 mb-12">
            {/* Step 1 */}
            <div className="flex items-start gap-6 bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/40 rounded-2xl p-8">
              <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-2xl font-black">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-purple-300">Search "Best cafes near me"</h3>
                <p className="text-slate-300 mb-4">
                  Users type what they want. Nuqta shows top-rated places WITH instant cashback offers.
                </p>
                <div className="bg-purple-900/30 rounded-lg p-4">
                  <p className="text-sm text-purple-200">
                    <strong>Example:</strong> "Coffee Downtown Dubai" → 12 cafes, sorted by 5-10% cashback + ratings
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6 bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/40 rounded-2xl p-8">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-black">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-blue-300">Visit & Scan QR</h3>
                <p className="text-slate-300 mb-4">
                  Walk in, scan merchant QR code at checkout. Pay with cash/card (any method).
                </p>
                <div className="bg-blue-900/30 rounded-lg p-4">
                  <p className="text-sm text-blue-200">
                    <strong>Frictionless:</strong> No special payment method required. Works with cash, card, Apple Pay, etc.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-500/40 rounded-2xl p-8">
              <div className="flex-shrink-0 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-2xl font-black">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-emerald-300">Earn Instant Cashback</h3>
                <p className="text-slate-300 mb-4">
                  Coins hit your wallet instantly. Redeem for cash or use at other Nuqta merchants.
                </p>
                <div className="bg-emerald-900/30 rounded-lg p-4">
                  <p className="text-sm text-emerald-200">
                    <strong>5-10% back:</strong> Spend AED 100 → Earn 5-10 coins → Redeem as AED 5-10 cash
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Differentiator */}
          <div className="bg-gradient-to-br from-[#c9a227]/20 to-yellow-600/5 border-2 border-[#c9a227]/40 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-[#c9a227]" />
              <h3 className="text-3xl font-black text-[#c9a227]">Search-First = Habit-Forming</h3>
            </div>
            <p className="text-xl text-slate-300 mb-4">
              Users don't "hunt for deals." They search where to eat, and Nuqta shows the best value.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-3xl font-black text-emerald-400 mb-2">6x/month</p>
                <p className="text-sm text-slate-400">Transaction frequency (vs 2-3x for competitors)</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-3xl font-black text-blue-400 mb-2">67%</p>
                <p className="text-sm text-slate-400">D30 retention target</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-3xl font-black text-purple-400 mb-2">AED 504</p>
                <p className="text-sm text-slate-400">12-month LTV per user</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Economics Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-[#c9a227] font-bold mb-3">The Numbers</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Profitable from <span className="text-emerald-400">Day One</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              16.8x LTV:CAC ratio. Payback period &lt;1 month. No VC subsidy burns.
            </p>
          </div>

          {/* 3-Column Metrics */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* CAC */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/40 rounded-2xl p-8">
              <div className="text-center mb-6">
                <p className="text-sm uppercase tracking-wider text-blue-400 font-bold mb-2">Customer Acquisition Cost</p>
                <p className="text-6xl font-black text-blue-400 mb-2">AED 30</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-blue-500/30 pb-2">
                  <span className="text-slate-300">Merchant QR</span>
                  <span className="font-bold text-blue-300">AED 10-15</span>
                </div>
                <div className="flex justify-between items-center border-b border-blue-500/30 pb-2">
                  <span className="text-slate-300">Student Ambassadors</span>
                  <span className="font-bold text-blue-300">AED 25-30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Digital (gated)</span>
                  <span className="font-bold text-blue-300">AED 60-80</span>
                </div>
              </div>
              <div className="mt-6 bg-blue-900/30 rounded-lg p-4">
                <p className="text-sm text-blue-200">
                  <strong>Blended CAC:</strong> 70% merchant QR + 30% ambassadors = AED 30 average
                </p>
              </div>
            </div>

            {/* LTV */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/40 rounded-2xl p-8">
              <div className="text-center mb-6">
                <p className="text-sm uppercase tracking-wider text-purple-400 font-bold mb-2">Lifetime Value</p>
                <p className="text-6xl font-black text-purple-400 mb-2">AED 504</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-purple-500/30 pb-2">
                  <span className="text-slate-300">Monthly RPU</span>
                  <span className="font-bold text-purple-300">AED 42</span>
                </div>
                <div className="flex justify-between items-center border-b border-purple-500/30 pb-2">
                  <span className="text-slate-300">Retention Period</span>
                  <span className="font-bold text-purple-300">12 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Transactions/Month</span>
                  <span className="font-bold text-purple-300">6x</span>
                </div>
              </div>
              <div className="mt-6 bg-purple-900/30 rounded-lg p-4">
                <p className="text-sm text-purple-200">
                  <strong>Formula:</strong> AED 42/month × 12 months = AED 504 LTV
                </p>
              </div>
            </div>

            {/* Ratio (Highlighted) */}
            <div className="bg-gradient-to-br from-emerald-500/30 to-emerald-500/10 border-4 border-emerald-500/60 rounded-2xl p-8 shadow-2xl shadow-emerald-500/20">
              <div className="text-center mb-6">
                <p className="text-sm uppercase tracking-wider text-emerald-400 font-bold mb-2">LTV:CAC Ratio</p>
                <p className="text-7xl font-black text-emerald-400 mb-2">16.8x</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-emerald-500/30 pb-2">
                  <span className="text-slate-300">Payback Period</span>
                  <span className="font-bold text-emerald-300">&lt;1 month</span>
                </div>
                <div className="flex justify-between items-center border-b border-emerald-500/30 pb-2">
                  <span className="text-slate-300">Industry Benchmark</span>
                  <span className="font-bold text-emerald-300">3-5x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Nuqta Performance</span>
                  <span className="font-bold text-emerald-300">3-5x BETTER</span>
                </div>
              </div>
              <div className="mt-6 bg-emerald-900/40 rounded-lg p-4">
                <p className="text-sm text-emerald-200 font-bold text-center">
                  🏆 Top 1% of consumer startups
                </p>
              </div>
            </div>
          </div>

          {/* Why Defensible */}
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-2 border-slate-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Why These Economics Are Defensible</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-200 font-semibold mb-1">Cashback is merchant-funded</p>
                  <p className="text-sm text-slate-400">No VC subsidy burns. Sustainable from transaction 1.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-200 font-semibold mb-1">Merchant QR = AED 10-15 CAC</p>
                  <p className="text-sm text-slate-400">10x cheaper than Google Ads (AED 200+).</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-200 font-semibold mb-1">Habit loops drive 6 transactions/month</p>
                  <p className="text-sm text-slate-400">vs 2-3 for competitors. Search intent = repeat usage.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-200 font-semibold mb-1">Operational float improves cash flow</p>
                  <p className="text-sm text-slate-400">30-45 day redemption lag = working capital buffer.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-200 font-semibold mb-1">No inventory risk</p>
                  <p className="text-sm text-slate-400">Pure platform play. Asset-light model.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-200 font-semibold mb-1">Future float revenue upside</p>
                  <p className="text-sm text-slate-400">Post-SVF license: AED 100-125K/year at 100K users.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-[#c9a227] font-bold mb-3">Traction</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              30+ Signed LOIs. <span className="text-emerald-400">30 More in Pipeline.</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              60+ merchant network across Dubai Marina, Downtown, and JBR. Attacking a $34B UAE market.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-500/40 rounded-2xl p-6 text-center">
              <TrendingUp className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <p className="text-5xl font-black text-emerald-400 mb-2">30+</p>
              <p className="text-sm text-slate-300">Signed Merchant LOIs</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/40 rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-3" />
              <p className="text-4xl font-black text-blue-400 mb-2">30</p>
              <p className="text-sm text-slate-300">Merchants in Pipeline</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/40 rounded-2xl p-6 text-center">
              <DollarSign className="w-12 h-12 text-purple-400 mx-auto mb-3" />
              <p className="text-4xl font-black text-purple-400 mb-2">$34B</p>
              <p className="text-sm text-slate-300">UAE Market (SAM)</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 border-2 border-orange-500/40 rounded-2xl p-6 text-center">
              <Target className="w-12 h-12 text-orange-400 mx-auto mb-3" />
              <p className="text-5xl font-black text-orange-400 mb-2">15%</p>
              <p className="text-sm text-slate-300">Commission Rate</p>
            </div>
          </div>

          {/* Why This Matters */}
          <div className="bg-gradient-to-br from-[#c9a227]/20 to-yellow-600/5 border-2 border-[#c9a227]/40 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-[#c9a227]">Why 60+ Merchant Network Matters</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <p className="text-3xl mb-3">✅</p>
                <p className="font-bold text-slate-200 mb-2">Market Validation</p>
                <p className="text-sm text-slate-400">
                  30+ signed LOIs = merchants believe in ROI. Signed commitment to list deals and pay 15% commission on sales.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <p className="text-3xl mb-3">💰</p>
                <p className="font-bold text-slate-200 mb-2">De-Risked Supply Side</p>
                <p className="text-sm text-slate-400">
                  We have merchant supply locked in. Now we validate user demand. Biggest unknown already solved.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <p className="text-3xl mb-3">🚀</p>
                <p className="font-bold text-slate-200 mb-2">Massive Market</p>
                <p className="text-sm text-slate-400">
                  $34B UAE market (SAM). $78B GCC total (TAM). Attacking 1% = $340M opportunity.
                </p>
              </div>
            </div>
          </div>

          {/* Launch Milestones */}
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-2 border-slate-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Execution Milestones</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-red-500/10 border-l-4 border-red-500 rounded-lg p-4">
                <Clock className="w-8 h-8 text-red-400 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-bold text-red-300">7-Day Launch (January 28, 2026)</p>
                  <p className="text-sm text-slate-400">MVP goes live with 5 merchants, 100 users, AED 5-10K GMV target</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-4">
                <Zap className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-bold text-blue-300">Week 1 Target</p>
                  <p className="text-sm text-slate-400">5 merchants live, 100 users, AED 5-10K GMV</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-lg p-4">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-bold text-emerald-300">90-Day Validation</p>
                  <p className="text-sm text-slate-400">500 users, 30 merchants, AED 30K GMV, D30 retention ≥20%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-[#c9a227] font-bold mb-3">Competition</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Why Can't <span className="text-red-500">Noon/Careem</span> Do This?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Structural barriers prevent incumbents from pivoting. We own the category.
            </p>
          </div>

          {/* Competitive Matrix */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse bg-slate-800/50 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-slate-700">
                  <th className="text-left p-4 text-slate-300 font-bold">Feature</th>
                  <th className="text-center p-4 text-emerald-400 font-bold">Nuqta</th>
                  <th className="text-center p-4 text-slate-400">Noon</th>
                  <th className="text-center p-4 text-slate-400">Careem</th>
                  <th className="text-center p-4 text-slate-400">Entertainer</th>
                  <th className="text-center p-4 text-slate-400">Google Maps</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-700">
                  <td className="p-4 text-slate-300">Search-First Discovery</td>
                  <td className="text-center p-4 text-emerald-400 text-2xl">✓</td>
                  <td className="text-center p-4 text-red-400 text-2xl">✗</td>
                  <td className="text-center p-4 text-red-400 text-2xl">✗</td>
                  <td className="text-center p-4 text-red-400 text-2xl">✗</td>
                  <td className="text-center p-4 text-yellow-400 text-2xl">~</td>
                </tr>
                <tr className="border-t border-slate-700 bg-slate-800/30">
                  <td className="p-4 text-slate-300">Instant Cashback</td>
                  <td className="text-center p-4 text-emerald-400 text-2xl">✓</td>
                  <td className="text-center p-4 text-red-400 text-2xl">✗</td>
                  <td className="text-center p-4 text-yellow-400 text-2xl">~</td>
                  <td className="text-center p-4 text-yellow-400 text-2xl">~</td>
                  <td className="text-center p-4 text-red-400 text-2xl">✗</td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="p-4 text-slate-300">Hyper-Local (Cafes/Salons/Gyms)</td>
                  <td className="text-center p-4 text-emerald-400 text-2xl">✓</td>
                  <td className="text-center p-4 text-red-400 text-2xl">✗</td>
                  <td className="text-center p-4 text-yellow-400 text-2xl">~</td>
                  <td className="text-center p-4 text-emerald-400 text-2xl">✓</td>
                  <td className="text-center p-4 text-red-400 text-2xl">✗</td>
                </tr>
                <tr className="border-t border-slate-700 bg-slate-800/30">
                  <td className="p-4 text-slate-300">Payment Method Agnostic</td>
                  <td className="text-center p-4 text-emerald-400 text-2xl">✓</td>
                  <td className="text-center p-4 text-red-400 text-2xl">✗</td>
                  <td className="text-center p-4 text-red-400 text-2xl">✗</td>
                  <td className="text-center p-4 text-emerald-400 text-2xl">✓</td>
                  <td className="text-center p-4 text-emerald-400 text-2xl">✓</td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="p-4 text-slate-300">Merchant-Funded (Sustainable)</td>
                  <td className="text-center p-4 text-emerald-400 text-2xl">✓</td>
                  <td className="text-center p-4 text-red-400 text-2xl">✗</td>
                  <td className="text-center p-4 text-red-400 text-2xl">✗</td>
                  <td className="text-center p-4 text-emerald-400 text-2xl">✓</td>
                  <td className="text-center p-4 text-red-400 text-2xl">✗</td>
                </tr>
                <tr className="border-t border-slate-700 bg-slate-800/30">
                  <td className="p-4 text-slate-300">No Subscription Fee</td>
                  <td className="text-center p-4 text-emerald-400 text-2xl">✓</td>
                  <td className="text-center p-4 text-emerald-400 text-2xl">✓</td>
                  <td className="text-center p-4 text-emerald-400 text-2xl">✓</td>
                  <td className="text-center p-4 text-red-400 text-2xl">✗</td>
                  <td className="text-center p-4 text-emerald-400 text-2xl">✓</td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="p-4 text-slate-300">Habit-Forming (6x/month)</td>
                  <td className="text-center p-4 text-emerald-400 text-2xl">✓</td>
                  <td className="text-center p-4 text-red-400 text-2xl">✗</td>
                  <td className="text-center p-4 text-red-400 text-2xl">✗</td>
                  <td className="text-center p-4 text-red-400 text-2xl">✗</td>
                  <td className="text-center p-4 text-yellow-400 text-2xl">~</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Why They Won't Compete */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-red-300">Noon: Can't Pivot</h3>
              <p className="text-slate-300 text-sm">
                E-commerce marketplace model. Adding search-first discovery would cannibalize their core business. Would confuse brand positioning.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 border-2 border-orange-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-orange-300">Careem: Wrong Focus</h3>
              <p className="text-slate-300 text-sm">
                Super app for logistics (rides, delivery). Local discovery isn't their moat. No search infrastructure.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border-2 border-yellow-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-300">Entertainer: Subscription Lock-In</h3>
              <p className="text-slate-300 text-sm">
                AED 200-400 annual subscription. Can't offer free cashback without cannibalizing subscription revenue. Wrong business model.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-300">Google Maps: No Monetization</h3>
              <p className="text-slate-300 text-sm">
                Discovery tool, not commerce platform. No payment integration. Would require 3-5 year product rebuild.
              </p>
            </div>
          </div>

          {/* Our Unfair Advantages */}
          <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-500/40 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-emerald-300">Our Unfair Advantages</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <p className="font-bold text-slate-200 mb-2">100% Focus</p>
                <p className="text-sm text-slate-400">
                  We only do search-first local discovery + cashback. Incumbents are distracted by 10+ business lines.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💰</div>
                <p className="font-bold text-slate-200 mb-2">Merchant-Funded</p>
                <p className="text-sm text-slate-400">
                  Sustainable from Day 1. No VC subsidy required. Can outlast deep-pocketed competitors.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <p className="font-bold text-slate-200 mb-2">Speed</p>
                <p className="text-sm text-slate-400">
                  7-day launch. Incumbents need 12-18 months to pivot. We own the category before they react.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            Join the <span className="bg-gradient-to-r from-[#c9a227] via-yellow-400 to-[#c9a227] bg-clip-text text-transparent">Next Chapter</span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto">
            We're raising $500K to validate 30 signed merchants and hit 500 users in 90 days.
          </p>

          {/* Investment Snapshot */}
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-2 border-slate-600 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-left">
                <p className="text-sm text-slate-400 mb-1">Raise Amount</p>
                <p className="text-3xl font-black text-white">$500K</p>
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-400 mb-1">Valuation Cap</p>
                <p className="text-3xl font-black text-white">$5M</p>
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-400 mb-1">Instrument</p>
                <p className="text-3xl font-black text-white">SAFE</p>
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-400 mb-1">Discount</p>
                <p className="text-3xl font-black text-white">20%</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/terms"
              className="px-10 py-5 bg-[#c9a227] hover:bg-[#d4ae3a] text-white font-bold rounded-xl transition-all transform hover:scale-105 flex items-center gap-2 text-xl"
            >
              View Investment Terms
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              href="/data-room"
              className="px-10 py-5 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-all transform hover:scale-105 flex items-center gap-2 text-xl"
            >
              Access Data Room
              <Shield className="w-6 h-6" />
            </Link>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap gap-6 justify-center text-slate-400">
            <Link href="/memo" className="hover:text-[#c9a227] transition-colors">
              Read Full Memo
            </Link>
            <Link href="/commitment" className="hover:text-[#c9a227] transition-colors">
              Founder Commitments
            </Link>
            <Link href="/deck-kang" className="hover:text-[#c9a227] transition-colors">
              Pitch Deck (27 Slides)
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-[#c9a227] font-bold mb-3">The Founder</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Building in Public
            </h2>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-2 border-slate-700 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Founder Photo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#c9a227]/40 overflow-hidden bg-gradient-to-br from-[#c9a227]/20 to-slate-800">
                  <Image
                    src="/founder.jpg"
                    alt="Rejaul Karim - Founder of Nuqta"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Founder Bio */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Rejaul Karim</h3>
                <p className="text-[#c9a227] font-semibold mb-4">Founder & CEO</p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Building Nuqta to solve a problem I've experienced firsthand: leaving money on the table with every offline purchase.
                  With 30 signed merchant LOIs and launching in 7 days, we're proving that rewards-led commerce intelligence isn't just
                  a vision—it's execution.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <a
                    href="https://www.linkedin.com/in/rejaul-karim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    Connect on LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/rejaulkarim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    Follow on Twitter
                  </a>
                </div>
              </div>
            </div>

            {/* Commitment Highlight */}
            <div className="mt-8 pt-8 border-t border-slate-700">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <p className="text-3xl font-black text-emerald-400 mb-1"><AnimatedCounter end={7} /></p>
                  <p className="text-sm text-slate-400">Days to Launch</p>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <p className="text-3xl font-black text-purple-400 mb-1"><AnimatedCounter end={30} /></p>
                  <p className="text-sm text-slate-400">Signed Merchant LOIs</p>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <p className="text-3xl font-black text-blue-400 mb-1"><AnimatedCounter end={90} /></p>
                  <p className="text-sm text-slate-400">Day Validation Period</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-[#c9a227] font-bold mb-3">FAQ</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-slate-400">
              Everything you need to know about Nuqta
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-2 border-slate-700 rounded-2xl p-6 md:p-8">
            <FAQItem
              question="How is Nuqta different from other cashback apps?"
              answer="Nuqta is search-first. You don't hunt for deals—you search for what you need (coffee, haircut, gym), and we show you the best options with instant cashback. Plus, our merchant-funded model means we're sustainable from day 1, not burning VC money."
              index={0}
            />
            <FAQItem
              question="How do merchants benefit from Nuqta?"
              answer="Merchants only pay 15% commission on completed sales. No upfront fees, no Google Ads bidding wars. Customer acquisition costs AED 10-15 vs AED 200+ on Google Ads. It's performance-based marketing with guaranteed ROI."
              index={1}
            />
            <FAQItem
              question="What's the 30+ signed LOIs mean for investors?"
              answer="These aren't verbal commitments—they're signed agreements from merchants across Dubai Marina, Downtown, and JBR. With 30 more in pipeline, we're building a 60+ merchant network. This de-risks the supply side before we even launch, giving us immediate access to a $34B UAE market."
              index={2}
            />
            <FAQItem
              question="Why is the LTV:CAC ratio so high (16.8x)?"
              answer="Three reasons: (1) Merchant QR distribution = AED 10-15 CAC, (2) Search-first drives habit formation (6 transactions/month vs 2-3 for competitors), (3) Cashback is merchant-funded, so we don't burn money to acquire users."
              index={3}
            />
            <FAQItem
              question="What happens if you don't hit 90-day milestones?"
              answer="Founder commitment: If we miss 90-day targets (500 users, AED 30K GMV, D30 ≥20%) by >30%, we either pivot or return unspent capital. Accountability is built into our execution plan."
              index={4}
            />
            <FAQItem
              question="How does the operational float work?"
              answer="Users earn coins but redeem them over 30-45 days on average. This creates a cash flow buffer (operational float) that smooths merchant payouts. Post-SVF license, this float can generate interest revenue, but that's Year 2+ upside."
              index={5}
            />
            <FAQItem
              question="Can I invest in Nuqta?"
              answer="We're raising $500K on a $5M cap SAFE with 20% discount. If you're an accredited investor interested in our pre-seed round, check out our investment terms page or reach out via the data room."
              index={6}
            />
            <FAQItem
              question="When does Nuqta launch?"
              answer="January 28, 2026—in 7 days. Week 1 target: 5 merchants live, 100 users, AED 5-10K GMV. We're building in public and moving fast."
              index={7}
            />
          </div>

          {/* Still Have Questions CTA */}
          <div className="mt-8 text-center">
            <p className="text-slate-400 mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/data-room"
                className="px-6 py-3 bg-[#c9a227] hover:bg-[#d4ae3a] text-white font-bold rounded-xl transition-all transform hover:scale-105"
              >
                Access Data Room
              </Link>
              <Link
                href="/memo"
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-all transform hover:scale-105"
              >
                Read Full Memo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Version Navigation */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Version Navigation */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-300 mb-4 text-center">All Versions</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/landing-v1"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors text-sm"
              >
                Landing Page v1 (Previous)
              </Link>
              <Link
                href="/deck"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors text-sm"
              >
                Pitch Deck v1
              </Link>
              <Link
                href="/deck-new"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors text-sm"
              >
                Pitch Deck v2
              </Link>
              <Link
                href="/deck-final"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors text-sm"
              >
                Pitch Deck v3
              </Link>
              <Link
                href="/deck-kang"
                className="px-4 py-2 bg-[#c9a227] hover:bg-[#d4ae3a] text-white rounded-lg transition-colors text-sm font-bold"
              >
                Pitch Deck v4 (Current)
              </Link>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center text-slate-500 text-sm">
            <p className="mb-2">© 2026 Nuqta. All rights reserved.</p>
            <p>Rewards-Led Commerce Intelligence Platform</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
