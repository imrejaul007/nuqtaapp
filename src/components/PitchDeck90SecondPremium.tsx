'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Zap, Target, Shield, DollarSign, ArrowRight, Sparkles, Users, Store, Repeat, MapPin, CreditCard, Coins, Building2, Calendar, Rocket, ShoppingBag, AlertCircle, CheckCircle, Search, Gift, XCircle } from 'lucide-react';

/**
 * 90-SECOND PREMIUM INVESTOR PITCH DECK
 *
 * Premium design with world-class visuals, animations, and polish
 * Brand colors: #c9a227 (gold), #0a1628 (dark blue)
 */

const PitchDeck90SecondPremium = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = 7;

  const changeSlide = (newSlide: number) => {
    if (newSlide >= 0 && newSlide < totalSlides && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(newSlide);
        setIsTransitioning(false);
      }, 400);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') changeSlide(currentSlide + 1);
      else if (e.key === 'ArrowLeft') changeSlide(currentSlide - 1);
      else if (e.key === 'Escape') changeSlide(0);
      else if (e.key === ' ') {
        e.preventDefault();
        changeSlide(currentSlide + 1);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isTransitioning]);

  const renderSlide = () => {
    const slideClass = `transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`;

    switch (currentSlide) {
      // ==================== SLIDE 0: COVER ====================
      case 0:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-12 relative overflow-hidden`}>
            {/* Premium animated background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#c9a227] rounded-full blur-[120px] opacity-30 animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#c9a227] rounded-full blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-600 rounded-full blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

            <div className="relative z-10 text-center max-w-6xl w-full">
              {/* Logo with premium glow */}
              <div className="mb-16 animate-[fadeIn_0.8s_ease-out]">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] via-[#d4b03f] to-[#c9a227] blur-3xl opacity-50" />
                  <h1 className="relative text-[120px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] via-[#d4b03f] to-[#c9a227] leading-none mb-6 tracking-tight">
                    NUQTA
                  </h1>
                </div>
                <p className="text-3xl text-slate-300 font-semibold tracking-wide">
                  The Everyday Savings Platform for the Middle East
                </p>
              </div>

              {/* Premium tagline card */}
              <div className="mb-16 animate-[slideUp_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-12 shadow-2xl">
                    <p className="text-5xl text-white font-black mb-4 leading-tight">
                      Turning Everyday Spending<br />Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4b03f]">Compounding Habit</span>
                    </p>
                    <div className="w-32 h-1 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] mx-auto my-6 rounded-full" />
                    <p className="text-2xl text-[#c9a227] font-bold">
                      Habits Into Defensibility
                    </p>
                  </div>
                </div>
              </div>

              {/* Premium stats cards */}
              <div className="grid grid-cols-3 gap-8 animate-[fadeIn_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { value: '$35B', label: 'UAE Offline Market*', bgGlow: 'bg-[#c9a227]', textColor: 'text-[#c9a227]', Icon: Target },
                  { value: '30+', label: 'Merchant LOIs Signed', bgGlow: 'bg-[#c9a227]', textColor: 'text-[#c9a227]', Icon: Store },
                  { value: 'Feb 28', label: 'Launch Date 2026', bgGlow: 'bg-emerald-600', textColor: 'text-emerald-400', Icon: Rocket }
                ].map((stat, idx) => (
                  <div key={idx} className="relative group" style={{ animationDelay: `${0.6 + idx * 0.1}s` }}>
                    <div className={`absolute inset-0 ${stat.bgGlow} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                    <div className="relative bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-2xl p-8 transform group-hover:scale-105 group-hover:-translate-y-2 transition-all shadow-xl">
                      <stat.Icon size={60} className={stat.textColor} />
                      <p className={`text-6xl font-black ${stat.textColor} mb-3 mt-4`}>{stat.value}</p>
                      <p className="text-slate-300 font-semibold text-lg">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Source citation */}
              <p className="text-slate-500 text-sm mt-8 animate-[fadeIn_0.8s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
                *Source: Euromonitor 2024, McKinsey GCC Retail Report
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 1: THE PROBLEM [0-15s] ====================
      case 1:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-red-50 flex items-center justify-center p-12 relative overflow-hidden`}>
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-300 rounded-full blur-[100px] opacity-20 animate-pulse" />
              <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-orange-300 rounded-full blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-7xl w-full">
              {/* Premium headline */}
              <div className="text-center mb-16 animate-[slideDown_0.8s_ease-out]">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 blur-3xl opacity-30" />
                  <h1 className="relative text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 leading-tight mb-4">
                    Billions Lost. Zero Loyalty
                  </h1>
                </div>
                <p className="text-3xl text-slate-700 font-bold mt-4">The broken commerce equation</p>
              </div>

              {/* Pain cards side-by-side */}
              <div className="grid grid-cols-2 gap-8 mb-12 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {/* Consumer Pain */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative bg-white/70 backdrop-blur-xl border-2 border-red-200 rounded-3xl p-12 shadow-2xl transform group-hover:scale-105 transition-all">
                    <AlertCircle size={64} className="text-red-600 mb-6" />
                    <h3 className="text-4xl font-black text-red-900 mb-8">Consumer Pain</h3>
                    <div className="space-y-6">
                      {[
                        { Icon: DollarSign, text: 'Paying full price everywhere' },
                        { Icon: Target, text: 'Missing hidden deals & promos' },
                        { Icon: XCircle, text: 'Loyalty programs that never pay off' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 animate-[slideUp_0.6s_ease-out] opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: `${0.4 + idx * 0.1}s` }}>
                          <item.Icon size={36} className="text-red-600 flex-shrink-0" />
                          <p className="text-2xl text-slate-800 font-bold leading-tight pt-1">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Merchant Pain */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative bg-white/70 backdrop-blur-xl border-2 border-orange-200 rounded-3xl p-12 shadow-2xl transform group-hover:scale-105 transition-all">
                    <TrendingUp size={64} className="text-orange-600 mb-6 rotate-180" />
                    <h3 className="text-4xl font-black text-orange-900 mb-8">Merchant Pain</h3>
                    <div className="space-y-6">
                      {[
                        { Icon: Coins, text: '$1B+ lost to discount platforms' },
                        { Icon: Users, text: 'One-time buyers vanish forever' },
                        { Icon: TrendingUp, text: 'CAC burning through margins' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 animate-[slideUp_0.6s_ease-out] opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: `${0.5 + idx * 0.1}s` }}>
                          <item.Icon size={36} className="text-orange-600 flex-shrink-0" />
                          <p className="text-2xl text-slate-800 font-bold leading-tight pt-1">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium quote card */}
              <div className="animate-[slideUp_0.8s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 rounded-3xl blur-xl opacity-50" />
                  <div className="relative bg-gradient-to-r from-red-900 to-orange-900 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-12 shadow-2xl text-center">
                    <p className="text-4xl text-white font-black italic leading-relaxed">
                      "Everyone's hunting for value. Nobody's capturing habit."
                    </p>
                    <div className="w-32 h-1 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] mx-auto mt-6 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 2: WHAT NUQTA IS [15-30s] ====================
      case 2:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50 flex items-center justify-center p-12 relative overflow-hidden`}>
            {/* Animated background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-blue-300 rounded-full blur-[120px] opacity-20 animate-pulse" />
              <div className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-slate-300 rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="relative z-10 max-w-7xl w-full">
              {/* Premium headline */}
              <div className="text-center mb-16 animate-[slideDown_0.8s_ease-out]">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#c9a227] blur-3xl opacity-30" />
                  <h1 className="relative text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#c9a227] leading-tight">
                    Neutral Rewards + Payment Intelligence
                  </h1>
                </div>
                <p className="text-3xl text-slate-700 font-bold mt-4">The complete consumer journey in one platform</p>
              </div>

              {/* Journey step cards */}
              <div className="grid grid-cols-4 gap-6 mb-12 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { Icon: Search, title: 'Search', desc: 'Find best deals near you', bgGlow: 'bg-blue-600' },
                  { Icon: Target, title: 'Decide', desc: 'Compare & choose smart', bgGlow: 'bg-[#c9a227]' },
                  { Icon: CreditCard, title: 'Pay', desc: 'Tap with Apple/Google Pay', bgGlow: 'bg-indigo-600' },
                  { Icon: Gift, title: 'Earn', desc: 'Get neutral points every time', bgGlow: 'bg-emerald-600' }
                ].map((step, idx) => (
                  <div key={idx} className="relative group animate-[slideUp_0.6s_ease-out] opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
                    <div className={`absolute inset-0 ${step.bgGlow} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                    <div className="relative bg-white/70 backdrop-blur-xl border-2 border-white/40 rounded-3xl p-8 shadow-xl transform group-hover:scale-105 group-hover:-translate-y-2 transition-all">
                      <step.Icon size={60} className="text-slate-900 mb-4" />
                      <h3 className="text-3xl font-black text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-lg text-slate-700 font-semibold leading-tight">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Differentiator cards */}
              <div className="grid grid-cols-3 gap-8 animate-[slideUp_0.8s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    Icon: Zap,
                    title: 'Neutral Points',
                    desc: 'No expiry, no merchant lock-in. Your points, your choice.',
                    gradient: 'from-[#c9a227] to-[#d4b03f]',
                    border: 'border-[#c9a227]/30'
                  },
                  {
                    Icon: Shield,
                    title: 'Payment Intel',
                    desc: 'See hidden fees, better cards, smarter payment routing.',
                    gradient: 'from-blue-500 to-blue-600',
                    border: 'border-blue-200'
                  },
                  {
                    Icon: Repeat,
                    title: 'Habit Loop',
                    desc: 'Every transaction builds your savings & our moat.',
                    gradient: 'from-emerald-500 to-teal-500',
                    border: 'border-emerald-200'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
                    <div className={`relative bg-white/70 backdrop-blur-xl border-2 ${item.border} rounded-3xl p-10 shadow-2xl transform group-hover:scale-105 transition-all`}>
                      <item.Icon size={60} className="text-slate-900 mb-6" />
                      <h3 className="text-3xl font-black text-slate-900 mb-4">{item.title}</h3>
                      <p className="text-xl text-slate-700 font-semibold leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 3: WHY THIS WORKS [30-45s] ====================
      case 3:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-50 flex items-center justify-center p-12 relative overflow-hidden`}>
            {/* Animated background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-300 rounded-full blur-[100px] opacity-20 animate-pulse" />
              <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-teal-300 rounded-full blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-7xl w-full">
              {/* Premium headline */}
              <div className="text-center mb-16 animate-[slideDown_0.8s_ease-out]">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 blur-3xl opacity-30" />
                  <h1 className="relative text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 leading-tight">
                    Inside The Transaction Loop
                  </h1>
                </div>
                <p className="text-3xl text-slate-700 font-bold mt-4">Why we sit at the point of maximum leverage</p>
              </div>

              {/* Transaction flow diagram */}
              <div className="mb-12 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative">
                  {/* Flow cards in a circle */}
                  <div className="grid grid-cols-5 gap-6 items-center">
                    {[
                      { Icon: Users, label: 'User Searches', bgGlow: 'bg-blue-600' },
                      { isArrow: true },
                      { Icon: Store, label: 'Nuqta Routes', bgGlow: 'bg-emerald-600' },
                      { isArrow: true },
                      { Icon: CreditCard, label: 'Payment Clears', bgGlow: 'bg-blue-600' }
                    ].map((step, idx) => (
                      step.isArrow ? (
                        <div key={idx} className="flex justify-center animate-[fadeIn_0.6s_ease-out] opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
                          <ArrowRight size={60} className="text-slate-400" />
                        </div>
                      ) : (
                        <div key={idx} className="relative group animate-[slideUp_0.6s_ease-out] opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
                          <div className={`absolute inset-0 ${step.bgGlow} rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
                          <div className="relative bg-white/70 backdrop-blur-xl border-2 border-white/40 rounded-full w-32 h-32 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all mx-auto">
                            <div className="text-center">
                              {step.Icon && <step.Icon size={48} className="text-slate-900" />}
                            </div>
                          </div>
                          <p className="text-center text-xl font-black text-slate-900 mt-4">{step.label}</p>
                        </div>
                      )
                    ))}
                  </div>

                  {/* Second row */}
                  <div className="grid grid-cols-5 gap-6 items-center mt-6">
                    {[
                      { isArrow: true },
                      { Icon: Gift, label: 'Points Earned', bgGlow: 'bg-[#c9a227]' },
                      { isArrow: true },
                      { Icon: Coins, label: 'We Get Paid', bgGlow: 'bg-[#c9a227]' },
                      { empty: true }
                    ].map((step, idx) => (
                      step.isArrow ? (
                        <div key={idx} className="flex justify-center animate-[fadeIn_0.6s_ease-out] opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: `${0.5 + idx * 0.1}s` }}>
                          <ArrowRight size={60} className="text-slate-400 rotate-180" />
                        </div>
                      ) : step.Icon ? (
                        <div key={idx} className="relative group animate-[slideUp_0.6s_ease-out] opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: `${0.5 + idx * 0.1}s` }}>
                          <div className={`absolute inset-0 ${step.bgGlow} rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
                          <div className="relative bg-white/70 backdrop-blur-xl border-2 border-white/40 rounded-full w-32 h-32 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all mx-auto">
                            <div className="text-center">
                              <step.Icon size={48} className="text-slate-900" />
                            </div>
                          </div>
                          <p className="text-center text-xl font-black text-slate-900 mt-4">{step.label}</p>
                        </div>
                      ) : <div key={idx} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Benefit cards */}
              <div className="grid grid-cols-2 gap-8 animate-[slideUp_0.8s_ease-out_0.8s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative bg-white/70 backdrop-blur-xl border-2 border-blue-200 rounded-3xl p-12 shadow-2xl transform group-hover:scale-105 transition-all">
                    <Users size={64} className="text-blue-600 mb-6" />
                    <h3 className="text-4xl font-black text-blue-900 mb-6">For Users</h3>
                    <p className="text-2xl text-slate-800 font-bold leading-relaxed">
                      Save on every transaction. Build wealth through everyday spending. Zero effort required.
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative bg-white/70 backdrop-blur-xl border-2 border-emerald-200 rounded-3xl p-12 shadow-2xl transform group-hover:scale-105 transition-all">
                    <Store size={64} className="text-emerald-600 mb-6" />
                    <h3 className="text-4xl font-black text-emerald-900 mb-6">For Merchants</h3>
                    <p className="text-2xl text-slate-800 font-bold leading-relaxed">
                      Loyal customers, not one-time bargain hunters. Predictable revenue, not margin erosion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 4: GROUPON COMPARISON [45-60s] ====================
      case 4:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-12 relative overflow-hidden`}>
            {/* Animated background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#c9a227] rounded-full blur-[120px] opacity-20 animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-red-600 rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-7xl w-full">
              {/* Premium headline */}
              <div className="text-center mb-16 animate-[slideDown_0.8s_ease-out]">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-emerald-400 blur-3xl opacity-40" />
                  <h1 className="relative text-8xl font-black text-white leading-tight">
                    Discounts Decay. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-emerald-400">Habits Compound.</span>
                  </h1>
                </div>
                <p className="text-3xl text-slate-300 font-bold mt-4">Why we're not another Groupon</p>
              </div>

              {/* Comparison cards */}
              <div className="grid grid-cols-2 gap-8 mb-12 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {/* Groupon */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl blur-xl opacity-40" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-red-500/30 rounded-3xl p-12 shadow-2xl">
                    <TrendingUp size={64} className="text-red-400 mb-6 rotate-180" />
                    <h3 className="text-5xl font-black text-red-400 mb-8">Groupon Model</h3>
                    <div className="space-y-6">
                      {[
                        { Icon: XCircle, text: '50-70% discounts burn merchant margins', color: 'red' },
                        { Icon: XCircle, text: 'One-time users never return', color: 'red' },
                        { Icon: XCircle, text: 'Merchants lose money on every deal', color: 'red' },
                        { Icon: XCircle, text: 'Value extraction, not creation', color: 'red' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 animate-[slideUp_0.6s_ease-out] opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
                          <item.Icon size={32} className="text-red-400 flex-shrink-0" />
                          <p className="text-2xl text-slate-300 font-bold leading-tight pt-1">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Nuqta */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl blur-xl opacity-50" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-emerald-500/30 rounded-3xl p-12 shadow-2xl">
                    <Rocket size={64} className="text-emerald-400 mb-6" />
                    <h3 className="text-5xl font-black text-emerald-400 mb-8">Nuqta Model</h3>
                    <div className="space-y-6">
                      {[
                        { Icon: CheckCircle, text: '5-15% cashback from transaction fees', color: 'emerald' },
                        { Icon: CheckCircle, text: 'Repeat customers build habits', color: 'emerald' },
                        { Icon: CheckCircle, text: 'Merchants pay only on actual sales', color: 'emerald' },
                        { Icon: CheckCircle, text: 'Win-win ecosystem that compounds', color: 'emerald' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 animate-[slideUp_0.6s_ease-out] opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: `${0.4 + idx * 0.1}s` }}>
                          <item.Icon size={32} className="text-emerald-400 flex-shrink-0" />
                          <p className="text-2xl text-slate-300 font-bold leading-tight pt-1">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium insight card */}
              <div className="animate-[slideUp_0.8s_ease-out_0.8s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] via-[#d4b03f] to-[#c9a227] rounded-3xl blur-xl opacity-50" />
                  <div className="relative bg-gradient-to-r from-[#0a1628] to-[#1a2638] backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-3xl p-12 shadow-2xl text-center">
                    <Sparkles size={64} className="text-[#c9a227] mx-auto mb-6" />
                    <p className="text-4xl text-white font-black leading-relaxed">
                      "We capture <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4b03f]">transaction fees</span>, not merchant margins.<br />
                      That's the difference between a flash sale and a lasting business."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 5: MOAT & TIMING [60-75s] ====================
      case 5:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50 flex items-center justify-center p-12 relative overflow-hidden`}>
            {/* Animated background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-blue-300 rounded-full blur-[100px] opacity-20 animate-pulse" />
              <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-[#c9a227] rounded-full blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="relative z-10 max-w-7xl w-full">
              {/* Premium headline */}
              <div className="text-center mb-16 animate-[slideDown_0.8s_ease-out]">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#c9a227] blur-3xl opacity-30" />
                  <h1 className="relative text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#c9a227] leading-tight">
                    Structural Moat + 18-Month Window
                  </h1>
                </div>
                <p className="text-3xl text-slate-700 font-bold mt-4">Why now, and why us</p>
              </div>

              {/* Moat cards */}
              <div className="grid grid-cols-3 gap-8 mb-12 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    icon: Shield,
                    title: 'Network Effects',
                    points: [
                      'More users → More merchant demand',
                      'More merchants → More user value',
                      'Virtuous cycle compounds daily'
                    ],
                    gradient: 'from-blue-500 to-blue-600',
                    border: 'border-blue-200'
                  },
                  {
                    icon: DollarSign,
                    title: 'Transaction Data',
                    points: [
                      'Payment routing intelligence',
                      'Hidden fee detection',
                      'Card optimization engine'
                    ],
                    gradient: 'from-[#c9a227] to-[#d4b03f]',
                    border: 'border-[#c9a227]/30'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Habit Formation',
                    points: [
                      'Users check before every purchase',
                      'Behavioral lock-in > switching costs',
                      'Daily usage = daily compounding'
                    ],
                    gradient: 'from-emerald-500 to-emerald-600',
                    border: 'border-emerald-200'
                  }
                ].map((moat, idx) => (
                  <div key={idx} className="relative group animate-[slideUp_0.6s_ease-out] opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${moat.gradient} rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
                    <div className={`relative bg-white/70 backdrop-blur-xl border-2 ${moat.border} rounded-3xl p-10 shadow-2xl transform group-hover:scale-105 transition-all h-full`}>
                      <moat.icon size={64} className="text-slate-900 mb-6" />
                      <h3 className="text-3xl font-black text-slate-900 mb-6">{moat.title}</h3>
                      <div className="space-y-3">
                        {moat.points.map((point, pidx) => (
                          <div key={pidx} className="flex items-start gap-3">
                            <ArrowRight size={24} className="text-slate-600 flex-shrink-0" />
                            <p className="text-lg text-slate-800 font-semibold leading-tight pt-0.5">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timing window card */}
              <div className="animate-[slideUp_0.8s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 rounded-3xl blur-xl opacity-50" />
                  <div className="relative bg-gradient-to-r from-red-900 to-orange-900 backdrop-blur-xl border-2 border-orange-400/30 rounded-3xl p-12 shadow-2xl">
                    <div className="grid grid-cols-2 gap-12 items-center">
                      {/* Clock visualization */}
                      <div className="text-center">
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-[#c9a227] rounded-full blur-2xl opacity-40 animate-pulse" />
                          <Calendar size={160} className="relative text-[#c9a227] animate-pulse" />
                        </div>
                        <p className="text-6xl font-black text-[#c9a227] mt-6">18 Months</p>
                        <p className="text-2xl text-slate-300 font-bold mt-2">Before competitors catch up</p>
                      </div>

                      {/* Timing points */}
                      <div className="space-y-6">
                        {[
                          { Icon: CheckCircle, text: 'Digital payments hitting critical mass in UAE' },
                          { Icon: CheckCircle, text: 'Merchants desperate for customer retention tools' },
                          { Icon: CheckCircle, text: 'Consumers trained on rewards programs' },
                          { Icon: Zap, text: 'First mover captures the habit-formation window' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <item.Icon size={36} className="text-[#c9a227] flex-shrink-0" />
                            <p className="text-2xl text-white font-bold leading-tight pt-1">{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 6: THE ASK [75-90s] ====================
      case 6:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-12 relative overflow-hidden`}>
            {/* Premium animated background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#c9a227] rounded-full blur-[120px] opacity-30 animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#c9a227] rounded-full blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-7xl w-full">
              {/* Premium headline */}
              <div className="text-center mb-16 animate-[slideDown_0.8s_ease-out]">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] blur-3xl opacity-40" />
                  <h1 className="relative text-8xl font-black text-white leading-tight">
                    Product Ready. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4b03f]">Merchants Lined Up.</span>
                  </h1>
                </div>
                <p className="text-3xl text-slate-300 font-bold mt-4">We just need fuel for the rocket</p>
              </div>

              {/* Readiness metrics */}
              <div className="grid grid-cols-3 gap-8 mb-12 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { Icon: CheckCircle, metric: '90%', label: 'Product Complete', desc: 'MVP ready for launch', bgGlow: 'bg-emerald-600', textColor: 'text-emerald-400' },
                  { Icon: Store, metric: '30+', label: 'Merchants Signed', desc: 'LOIs in hand', bgGlow: 'bg-[#c9a227]', textColor: 'text-[#c9a227]' },
                  { Icon: DollarSign, metric: 'AED 40', label: 'Target CAC', desc: 'Validated & achievable', bgGlow: 'bg-blue-600', textColor: 'text-blue-400' }
                ].map((item, idx) => (
                  <div key={idx} className="relative group animate-[slideUp_0.6s_ease-out] opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
                    <div className={`absolute inset-0 ${item.bgGlow} rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
                    <div className="relative bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-10 shadow-2xl transform group-hover:scale-105 group-hover:-translate-y-2 transition-all text-center">
                      <item.Icon size={60} className={item.textColor} />
                      <p className={`text-6xl font-black ${item.textColor} mb-3 mt-4`}>{item.metric}</p>
                      <p className="text-2xl text-white font-black mb-2">{item.label}</p>
                      <p className="text-lg text-slate-400 font-semibold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* The Ask card */}
              <div className="mb-12 animate-[slideUp_0.8s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] via-[#d4b03f] to-[#c9a227] rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="relative bg-gradient-to-r from-[#c9a227] to-[#d4b03f] backdrop-blur-xl border-2 border-[#c9a227]/50 rounded-3xl p-16 shadow-2xl text-center">
                    <Sparkles size={80} className="text-white mx-auto mb-8 animate-pulse" />
                    <h2 className="text-6xl font-black text-white mb-8">The Ask</h2>
                    <div className="grid grid-cols-3 gap-12 max-w-5xl mx-auto">
                      <div>
                        <p className="text-2xl text-[#0a1628] font-bold mb-3">Raising</p>
                        <p className="text-7xl font-black text-white mb-2">$400K</p>
                        <p className="text-xl text-[#0a1628] font-semibold">SAFE</p>
                      </div>
                      <div>
                        <p className="text-2xl text-[#0a1628] font-bold mb-3">Valuation Cap</p>
                        <p className="text-7xl font-black text-white mb-2">$5M</p>
                        <p className="text-xl text-[#0a1628] font-semibold">USD</p>
                      </div>
                      <div>
                        <p className="text-2xl text-[#0a1628] font-bold mb-3">Discount</p>
                        <p className="text-7xl font-black text-white mb-2">20%</p>
                        <p className="text-xl text-[#0a1628] font-semibold">on next round</p>
                      </div>
                    </div>
                    <div className="w-64 h-1 bg-white/50 mx-auto my-8 rounded-full" />
                    <p className="text-3xl text-white font-bold">
                      To fund launch, acquire first 10,000 users, and prove unit economics
                    </p>
                  </div>
                </div>
              </div>

              {/* Closing statement */}
              <div className="animate-[slideUp_0.8s_ease-out_0.8s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] rounded-3xl blur-xl opacity-40" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-12 shadow-2xl text-center">
                    <p className="text-4xl text-white font-black italic leading-relaxed mb-6">
                      "The next unicorn won't come from building a better discount site.<br />
                      It'll come from owning the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4b03f]">daily habit</span> of saving money."
                    </p>
                    <div className="flex items-center justify-center gap-8 mt-8">
                      <Target size={48} className="text-blue-400" />
                      <Repeat size={48} className="text-[#c9a227]" />
                      <TrendingUp size={48} className="text-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== FALLBACK ====================
      default:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-[#0a1628] to-[#1a2638] flex items-center justify-center">
            <div className="text-center">
              <p className="text-white text-6xl font-black mb-4">Slide {currentSlide + 1}</p>
              <p className="text-slate-400 text-2xl">Slide not found</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative">
      {renderSlide()}

      {/* Premium navigation bar */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] rounded-full blur-xl opacity-50" />
          <div className="relative bg-[#0a1628]/95 backdrop-blur-2xl border-2 border-white/10 rounded-full px-10 py-5 flex items-center gap-6 shadow-2xl">
            <button
              onClick={() => changeSlide(currentSlide - 1)}
              disabled={currentSlide === 0}
              className="p-4 rounded-full bg-gradient-to-r from-[#c9a227] to-[#d4b03f] hover:from-[#d4b03f] hover:to-[#c9a227] disabled:opacity-30 disabled:cursor-not-allowed transition-all transform hover:scale-110 active:scale-95 shadow-lg disabled:shadow-none"
            >
              <ChevronLeft size={32} className="text-white" />
            </button>

            <div className="flex items-center gap-4">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`transition-all rounded-full ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-[#c9a227] via-[#d4b03f] to-[#c9a227] w-16 h-4 shadow-lg shadow-[#c9a227]/50'
                      : 'bg-white/20 hover:bg-white/30 w-4 h-4'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => changeSlide(currentSlide + 1)}
              disabled={currentSlide === totalSlides - 1}
              className="p-4 rounded-full bg-gradient-to-r from-[#c9a227] to-[#d4b03f] hover:from-[#d4b03f] hover:to-[#c9a227] disabled:opacity-30 disabled:cursor-not-allowed transition-all transform hover:scale-110 active:scale-95 shadow-lg disabled:shadow-none"
            >
              <ChevronRight size={32} className="text-white" />
            </button>

            <div className="ml-6 px-6 py-3 bg-white/10 rounded-full">
              <p className="text-white text-lg font-bold">
                {currentSlide + 1} <span className="text-white/50">/</span> {totalSlides}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PitchDeck90SecondPremium;
