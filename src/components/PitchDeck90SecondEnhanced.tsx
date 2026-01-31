'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Zap, Target, Shield, Clock, DollarSign, ArrowRight, Sparkles, Users, Store, Repeat } from 'lucide-react';

/**
 * 90-SECOND INVESTOR PITCH DECK
 *
 * Purpose: Quick, high-impact pitch for initial VC meetings
 * Slides: 7 slides (90 seconds = ~13 seconds per slide)
 * Flow: Problem → Solution → Market Fit → Why Now → Moat → Ask
 */

const PitchDeck90SecondEnhanced = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = 7;

  // Smooth slide transitions
  const changeSlide = (newSlide: number) => {
    if (newSlide >= 0 && newSlide < totalSlides && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(newSlide);
        setIsTransitioning(false);
      }, 300);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        changeSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft') {
        changeSlide(currentSlide - 1);
      } else if (e.key === 'Escape') {
        changeSlide(0);
      } else if (e.key === ' ') {
        e.preventDefault();
        changeSlide(currentSlide + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isTransitioning]);

  const renderSlide = () => {
    const slideClass = `transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`;

    switch (currentSlide) {
      // ==================== SLIDE 0: COVER ====================
      case 0:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8 relative overflow-hidden`}>
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 text-center max-w-4xl">
              {/* Logo/Brand */}
              <div className="mb-8">
                <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-amber-400 to-purple-400 mb-4">
                  NUQTA
                </h1>
                <p className="text-2xl text-slate-300 font-medium">
                  The Everyday Savings Platform for the Middle East
                </p>
              </div>

              {/* Tagline */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8">
                <p className="text-3xl text-white font-bold mb-4">
                  Turning Everyday Spending Into a Habit
                </p>
                <p className="text-xl text-slate-300">
                  Habits Into Defensibility
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-purple-500/20 border border-purple-500/40 rounded-xl p-4">
                  <p className="text-4xl font-black text-purple-400 mb-1">$35B</p>
                  <p className="text-sm text-slate-300">UAE Offline Market</p>
                </div>
                <div className="bg-amber-500/20 border border-amber-500/40 rounded-xl p-4">
                  <p className="text-4xl font-black text-amber-400 mb-1">30+</p>
                  <p className="text-sm text-slate-300">Merchant LOIs Signed</p>
                </div>
                <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-xl p-4">
                  <p className="text-4xl font-black text-emerald-400 mb-1">Feb 28</p>
                  <p className="text-sm text-slate-300">Launch Date 2026</p>
                </div>
              </div>

              {/* Navigation hint */}
              <p className="text-slate-400 text-sm mt-8">
                Press → to begin | 90-second pitch
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 1: THE PROBLEM [0-15s] ====================
      case 1:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-8`}>
            <div className="max-w-6xl w-full">
              {/* Timer */}
              <div className="text-center mb-8">
                <div className="inline-block bg-red-100 border-2 border-red-300 rounded-full px-4 py-2 mb-4">
                  <p className="text-xs font-black text-red-700 uppercase tracking-wider">0-15 Seconds | The Problem</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  Billions Lost. Zero Loyalty.
                </h2>
              </div>

              {/* Two-column problem */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Consumer Pain */}
                <div className="bg-white border-2 border-red-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-red-600 mb-4">🛒 Consumers Lose</h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="text-lg font-semibold text-slate-900">AED 2.4B/Year Wasted</p>
                      <p className="text-sm text-slate-600">Offline spending gets zero rewards</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="text-lg font-semibold text-slate-900">Fragmented Rewards</p>
                      <p className="text-sm text-slate-600">Points trapped in 15 different apps</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="text-lg font-semibold text-slate-900">No Smart Payment</p>
                      <p className="text-sm text-slate-600">Don't know which card/wallet saves most</p>
                    </div>
                  </div>
                </div>

                {/* Merchant Pain */}
                <div className="bg-white border-2 border-orange-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">🏪 Merchants Burn Cash</h3>
                  <div className="space-y-4">
                    <div className="bg-orange-50 rounded-lg p-4">
                      <p className="text-lg font-semibold text-slate-900">AED 5K → 0 Loyalty</p>
                      <p className="text-sm text-slate-600">Instagram ads bring one-time customers</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <p className="text-lg font-semibold text-slate-900">Discounts Decay</p>
                      <p className="text-sm text-slate-600">20% off today, gone tomorrow</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <p className="text-lg font-semibold text-slate-900">No Repeat Visits</p>
                      <p className="text-sm text-slate-600">Can't compete with big brands</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key insight */}
              <div className="bg-gradient-to-r from-slate-900 to-red-900 rounded-2xl p-8 text-center">
                <p className="text-3xl font-bold text-white">
                  "Everyone is spending money. <span className="text-amber-400">Nobody is spending smartly.</span>"
                </p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 2: WHAT NUQTA IS [15-30s] ====================
      case 2:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-8`}>
            <div className="max-w-6xl w-full">
              {/* Timer */}
              <div className="text-center mb-8">
                <div className="inline-block bg-purple-100 border-2 border-purple-300 rounded-full px-4 py-2 mb-4">
                  <p className="text-xs font-black text-purple-700 uppercase tracking-wider">15-30 Seconds | What Nuqta Is</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-4">
                  Neutral Rewards + Payment Intelligence
                </h2>
                <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                  We show users <span className="font-bold text-purple-600">how to pay smartly</span> and reward them for it
                </p>
              </div>

              {/* User Journey */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <p className="text-3xl">🔍</p>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Search</h3>
                  <p className="text-sm text-slate-600">"Where should I eat?"</p>
                  <p className="text-xs text-purple-600 font-semibold mt-2">Discover merchants</p>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <p className="text-3xl">💳</p>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Decide</h3>
                  <p className="text-sm text-slate-600">"Which card saves most?"</p>
                  <p className="text-xs text-blue-600 font-semibold mt-2">Smart payment choice</p>
                </div>

                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <p className="text-3xl">✅</p>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Pay</h3>
                  <p className="text-sm text-slate-600">Use recommended method</p>
                  <p className="text-xs text-emerald-600 font-semibold mt-2">Instant savings</p>
                </div>

                <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <p className="text-3xl">💰</p>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Earn</h3>
                  <p className="text-sm text-slate-600">Get Nuqta Coins instantly</p>
                  <p className="text-xs text-amber-600 font-semibold mt-2">Repeat tomorrow</p>
                </div>
              </div>

              {/* Key differentiators */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-center">
                  <p className="text-4xl mb-2">❌</p>
                  <p className="text-white font-bold">No Coupons</p>
                  <p className="text-purple-100 text-sm mt-2">Real-time intelligence</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-center">
                  <p className="text-4xl mb-2">❌</p>
                  <p className="text-white font-bold">No Subscriptions</p>
                  <p className="text-blue-100 text-sm mt-2">Free for users</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-center">
                  <p className="text-4xl mb-2">✅</p>
                  <p className="text-white font-bold">Real Savings</p>
                  <p className="text-emerald-100 text-sm mt-2">On everyday spending</p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 3: WHY THIS WORKS [30-45s] ====================
      case 3:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-8`}>
            <div className="max-w-6xl w-full">
              {/* Timer */}
              <div className="text-center mb-8">
                <div className="inline-block bg-emerald-100 border-2 border-emerald-300 rounded-full px-4 py-2 mb-4">
                  <p className="text-xs font-black text-emerald-700 uppercase tracking-wider">30-45 Seconds | Why This Works</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  Inside The Transaction Loop
                </h2>
              </div>

              {/* Transaction loop diagram */}
              <div className="bg-white border-2 border-emerald-200 rounded-2xl p-8 mb-8">
                <div className="flex items-center justify-between">
                  {/* Step 1 */}
                  <div className="text-center flex-1">
                    <div className="w-24 h-24 bg-purple-100 border-2 border-purple-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp size={40} className="text-purple-600" />
                    </div>
                    <p className="font-bold text-slate-900">Discover</p>
                    <p className="text-xs text-slate-600">Search merchants</p>
                  </div>

                  <div className="text-3xl text-slate-400 mx-4">→</div>

                  {/* Step 2 */}
                  <div className="text-center flex-1">
                    <div className="w-24 h-24 bg-blue-100 border-2 border-blue-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target size={40} className="text-blue-600" />
                    </div>
                    <p className="font-bold text-slate-900">Decide</p>
                    <p className="text-xs text-slate-600">Best payment</p>
                  </div>

                  <div className="text-3xl text-slate-400 mx-4">→</div>

                  {/* Step 3 */}
                  <div className="text-center flex-1">
                    <div className="w-24 h-24 bg-emerald-100 border-2 border-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <DollarSign size={40} className="text-emerald-600" />
                    </div>
                    <p className="font-bold text-slate-900">Pay</p>
                    <p className="text-xs text-slate-600">Execute</p>
                  </div>

                  <div className="text-3xl text-slate-400 mx-4">→</div>

                  {/* Step 4 */}
                  <div className="text-center flex-1">
                    <div className="w-24 h-24 bg-amber-100 border-2 border-amber-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap size={40} className="text-amber-600" />
                    </div>
                    <p className="font-bold text-slate-900">Earn</p>
                    <p className="text-xs text-slate-600">Get coins</p>
                  </div>

                  <div className="text-3xl text-slate-400 mx-4">↻</div>

                  {/* Loop back */}
                  <div className="text-center flex-1">
                    <div className="w-24 h-24 bg-purple-100 border-2 border-purple-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <p className="text-3xl">🔄</p>
                    </div>
                    <p className="font-bold text-slate-900">Repeat</p>
                    <p className="text-xs text-slate-600">Daily habit</p>
                  </div>
                </div>
              </div>

              {/* Key insights */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">For Users</h3>
                  <p className="text-emerald-100 text-lg">
                    "Check before I pay" becomes <span className="font-bold text-white">automatic</span>
                  </p>
                  <p className="text-emerald-200 text-sm mt-2">
                    Daily saving habit, not one-time deal hunting
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">For Merchants</h3>
                  <p className="text-purple-100 text-lg">
                    Pay only when <span className="font-bold text-white">real sale happens</span>
                  </p>
                  <p className="text-purple-200 text-sm mt-2">
                    Not for ads, not for hope — aligned incentives
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 4: WHY GROUPON FAILED, WHY WE WIN [45-60s] ====================
      case 4:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 flex items-center justify-center p-8`}>
            <div className="max-w-6xl w-full">
              {/* Timer */}
              <div className="text-center mb-8">
                <div className="inline-block bg-purple-100 border-2 border-purple-300 rounded-full px-4 py-2 mb-4">
                  <p className="text-xs font-black text-purple-700 uppercase tracking-wider">45-60 Seconds | Why Groupon Failed, Why We Win</p>
                </div>
                <h2 className="text-6xl font-black text-white mb-6">
                  Discounts Decay. Habits Compound.
                </h2>
              </div>

              {/* Comparison */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Groupon */}
                <div className="bg-red-500/20 border-2 border-red-500/40 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-black text-red-400 mb-2">❌ Groupon</h3>
                    <p className="text-slate-300 text-lg">Sold Discounts</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/30">
                      <p className="text-red-300 font-semibold mb-1">One-Time Spikes</p>
                      <p className="text-slate-400 text-sm">50% off today → gone tomorrow</p>
                    </div>
                    <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/30">
                      <p className="text-red-300 font-semibold mb-1">Merchant Loses Money</p>
                      <p className="text-slate-400 text-sm">Groupon takes 50%, customer never returns</p>
                    </div>
                    <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/30">
                      <p className="text-red-300 font-semibold mb-1">No Retention</p>
                      <p className="text-slate-400 text-sm">Users chase next deal, not loyalty</p>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-red-400 font-bold text-xl">Discounts decay ⤵️</p>
                  </div>
                </div>

                {/* Nuqta */}
                <div className="bg-emerald-500/20 border-2 border-emerald-500/40 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-black text-emerald-400 mb-2">✅ Nuqta</h3>
                    <p className="text-slate-300 text-lg">Builds Habits</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-500/30">
                      <p className="text-emerald-300 font-semibold mb-1">Repeat Visits</p>
                      <p className="text-slate-400 text-sm">Earn coins every visit → compound rewards</p>
                    </div>
                    <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-500/30">
                      <p className="text-emerald-300 font-semibold mb-1">Merchant Wins</p>
                      <p className="text-slate-400 text-sm">Pay only 15% when customer redeems</p>
                    </div>
                    <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-500/30">
                      <p className="text-emerald-300 font-semibold mb-1">30% D30 Retention</p>
                      <p className="text-slate-400 text-sm">Daily habit = users return weekly</p>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-emerald-400 font-bold text-xl">Habits compound ⤴️</p>
                  </div>
                </div>
              </div>

              {/* Key insight */}
              <div className="bg-gradient-to-r from-purple-500 to-emerald-500 rounded-2xl p-8 text-center">
                <p className="text-3xl font-bold text-white">
                  "We reward <span className="text-amber-300">repeat visits</span>, not one-time spikes — which is why merchants stay and users return."
                </p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 5: MOAT & TIMING [60-75s] ====================
      case 5:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8`}>
            <div className="max-w-6xl w-full">
              {/* Timer */}
              <div className="text-center mb-8">
                <div className="inline-block bg-blue-100 border-2 border-blue-300 rounded-full px-4 py-2 mb-4">
                  <p className="text-xs font-black text-blue-700 uppercase tracking-wider">60-75 Seconds | Moat & Timing</p>
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  Structural Moat + 18-Month Window
                </h2>
              </div>

              {/* Three moats */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield size={32} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Neutrality</h3>
                  <p className="text-sm text-slate-600 text-center mb-4">
                    We recommend <span className="font-bold">any card/wallet</span> that saves user most
                  </p>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-xs text-purple-700 font-semibold">Why Careem can't copy:</p>
                    <p className="text-xs text-slate-600">Recommending Tabby cannibalizes Careem Pay Later</p>
                  </div>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Incentive Alignment</h3>
                  <p className="text-sm text-slate-600 text-center mb-4">
                    Merchants pay <span className="font-bold">only on redemptions</span>, not upfront ads
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-xs text-blue-700 font-semibold">Why it matters:</p>
                    <p className="text-xs text-slate-600">We're aligned with merchants, not extracting from them</p>
                  </div>
                </div>

                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp size={32} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Behavioral Data</h3>
                  <p className="text-sm text-slate-600 text-center mb-4">
                    <span className="font-bold">12 months</span> of offline patterns compound with time
                  </p>
                  <div className="bg-emerald-50 rounded-lg p-3">
                    <p className="text-xs text-emerald-700 font-semibold">Why it's defensible:</p>
                    <p className="text-xs text-slate-600">Can't be scraped, bought, or backfilled</p>
                  </div>
                </div>
              </div>

              {/* Timing window */}
              <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-white mb-3">Timing Window</h3>
                    <p className="text-xl text-slate-300 mb-4">
                      <span className="text-amber-400 font-bold">18-24 months</span> before Careem or Noon notice this category
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        <p className="text-slate-300 text-sm">Month 1-6: Too small to register on their radar</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <p className="text-slate-300 text-sm">Month 7-12: Internal debate (3-6 months)</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <p className="text-slate-300 text-sm">Month 13-24: Build or acquire decision</p>
                      </div>
                    </div>
                  </div>

                  <div className="ml-8">
                    <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-amber-400">
                      <div className="text-center">
                        <Clock size={48} className="text-amber-400 mx-auto mb-2" />
                        <p className="text-4xl font-black text-white">18-24</p>
                        <p className="text-slate-300 text-sm">Months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 6: WHY INVEST NOW [75-90s] ====================
      case 6:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 flex items-center justify-center p-8`}>
            <div className="max-w-6xl w-full">
              {/* Timer */}
              <div className="text-center mb-8">
                <div className="inline-block bg-amber-100 border-2 border-amber-300 rounded-full px-4 py-2 mb-4">
                  <p className="text-xs font-black text-amber-700 uppercase tracking-wider">75-90 Seconds | Why Invest Now</p>
                </div>
                <h2 className="text-6xl font-black text-white mb-6">
                  Product Ready. Merchants Lined Up. GTM Disciplined.
                </h2>
              </div>

              {/* Readiness metrics */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-emerald-500/20 border-2 border-emerald-500/40 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-center mb-4">
                    <p className="text-5xl font-black text-emerald-400 mb-2">✅</p>
                    <h3 className="text-2xl font-bold text-white">Product Ready</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                      <p className="text-emerald-200 text-sm">MVP launching Feb 28</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                      <p className="text-emerald-200 text-sm">Dual coin system built</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                      <p className="text-emerald-200 text-sm">8-layer fraud defense</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/20 border-2 border-purple-500/40 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-center mb-4">
                    <p className="text-5xl font-black text-purple-400 mb-2">30+</p>
                    <h3 className="text-2xl font-bold text-white">Merchants Signed</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <p className="text-purple-200 text-sm">LOIs with revenue-share</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <p className="text-purple-200 text-sm">F&B, salons, gyms, retail</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <p className="text-purple-200 text-sm">Supply-side validated</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/20 border-2 border-blue-500/40 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-center mb-4">
                    <p className="text-5xl font-black text-blue-400 mb-2">AED 40</p>
                    <h3 className="text-2xl font-bold text-white">CAC Target</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <p className="text-blue-200 text-sm">Merchant-led distribution</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <p className="text-blue-200 text-sm">QR codes = free billboards</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <p className="text-blue-200 text-sm">9.4x LTV:CAC at scale</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Ask */}
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 mb-8">
                <div className="text-center">
                  <h3 className="text-4xl font-black text-white mb-4">The Ask</h3>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-5xl font-black text-white mb-2">$400K</p>
                      <p className="text-amber-100">SAFE Investment</p>
                    </div>
                    <div>
                      <p className="text-5xl font-black text-white mb-2">$5M</p>
                      <p className="text-amber-100">Valuation Cap</p>
                    </div>
                    <div>
                      <p className="text-5xl font-black text-white mb-2">20%</p>
                      <p className="text-amber-100">Series A Discount</p>
                    </div>
                  </div>
                  <p className="text-xl text-white font-medium">
                    No valuation pressure → Launch, prove retention, scale what works
                  </p>
                </div>
              </div>

              {/* Closing statement */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
                <p className="text-4xl font-bold text-white mb-4">
                  Nuqta turns everyday spending into a habit.
                </p>
                <p className="text-3xl font-bold text-amber-400">
                  Habits into defensibility.
                </p>
                <p className="text-2xl text-slate-300 mt-6">
                  That's why this wins.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative">
      {/* Main slide */}
      {renderSlide()}

      {/* Navigation controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-full px-6 py-3 flex items-center gap-4">
          <button
            onClick={() => changeSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all transform hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={28} className="text-white" />
          </button>

          <div className="flex items-center gap-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-purple-500 to-amber-500 w-12 h-3 shadow-lg'
                    : 'bg-slate-600 hover:bg-slate-500 w-3 h-3'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => changeSlide(currentSlide + 1)}
            disabled={currentSlide === totalSlides - 1}
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all transform hover:scale-110 active:scale-95"
          >
            <ChevronRight size={28} className="text-white" />
          </button>

          <div className="ml-4 text-white text-sm font-medium">
            {currentSlide + 1} / {totalSlides}
          </div>
        </div>
      </div>

      {/* Keyboard hints */}
      <div className="fixed top-8 right-8 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg px-4 py-2 text-xs text-slate-300">
        <p>← → Navigate | ESC Reset</p>
      </div>

      {/* Timer hint */}
      <div className="fixed top-8 left-8 bg-amber-500/90 backdrop-blur-md border border-amber-600 rounded-lg px-4 py-2">
        <p className="text-xs font-bold text-slate-900">
          ⏱️ 90-Second Pitch | ~13sec per slide
        </p>
      </div>
    </div>
  );
};

export default PitchDeck90SecondEnhanced;
