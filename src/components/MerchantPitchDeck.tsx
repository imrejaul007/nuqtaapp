'use client';

import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Zap,
  Shield,
  DollarSign,
  ArrowRight,
  Sparkles,
  Users,
  Store,
  Coins,
  Rocket,
  CheckCircle,
  Gift,
  BarChart3,
  Smartphone,
  Award,
  Eye,
  Play,
  Handshake,
  Target,
  Repeat,
  Heart,
  Clock,
  MapPin,
  Percent,
  CreditCard,
  Phone,
  Mail
} from 'lucide-react';

/**
 * MERCHANT PITCH DECK (Engine A)
 *
 * For everyday merchants - restaurants, cafes, retail, services
 * Why they should join Nuqta:
 * - Get loyal customers who come back
 * - Pay only on results (5-8% commission)
 * - No upfront cost, no tech changes
 *
 * Brand colors: #c9a227 (gold), #0a1628 (dark blue)
 */

const MerchantPitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = 10;

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

  const slideClass = `transition-all duration-400 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`;

  const renderSlide = () => {
    switch (currentSlide) {
      // ==================== SLIDE 0: TITLE ====================
      case 0:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Background effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c9a227] rounded-full blur-[150px] opacity-20 animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-5xl w-full text-center px-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#c9a227]/20 to-emerald-500/20 border border-[#c9a227]/30 rounded-full mb-6 animate-[fadeIn_1s_ease-out]">
                <Store className="w-4 h-4 text-[#c9a227]" />
                <span className="text-[#c9a227] font-semibold text-sm">For Merchants</span>
              </div>

              {/* Main title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-[slideDown_0.8s_ease-out]">
                Stop Losing Customers<br />
                <span className="bg-gradient-to-r from-[#c9a227] to-[#d4b03f] bg-clip-text text-transparent">Start Building Loyalty</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto animate-[fadeIn_1s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
                Get customers who come back again and again. Pay only when they do.
              </p>

              {/* Key stats */}
              <div className="flex flex-wrap justify-center gap-4 mb-10 animate-[fadeIn_1s_ease-out_0.5s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { value: 'AED 0', label: 'Upfront Cost' },
                  { value: '5-8%', label: 'Only On Results' },
                  { value: '3x', label: 'More Repeat Visits' }
                ].map((stat, idx) => (
                  <div key={idx} className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-center">
                    <p className="text-[#c9a227] text-xl sm:text-2xl font-black">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[slideUp_0.8s_ease-out_0.7s] opacity-0 [animation-fill-mode:forwards]">
                <button
                  onClick={() => changeSlide(1)}
                  className="px-8 py-4 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] text-[#0a1628] font-bold rounded-full text-lg flex items-center gap-2 hover:shadow-[0_0_30px_rgba(201,162,39,0.4)] transition-all"
                >
                  <Play size={20} />
                  See How It Works
                </button>
              </div>

              {/* Nuqta branding */}
              <div className="mt-12 animate-[fadeIn_1s_ease-out_0.9s] opacity-0 [animation-fill-mode:forwards]">
                <p className="text-slate-500 text-sm mb-2">Powered by</p>
                <p className="text-[#c9a227] text-2xl font-black tracking-wider">NUQTA</p>
                <p className="text-slate-400 text-xs">UAE&apos;s Everyday Savings Platform</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 1: THE PROBLEM ====================
      case 1:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-red-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-10 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-4">
                  <Eye className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm">The Problem</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Customers <span className="text-red-400">Never Come Back</span>
                </h1>
              </div>

              {/* Problems grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    stat: '80%',
                    label: 'One-Time Visitors',
                    desc: 'Most customers visit once and never return - you lose them forever',
                    icon: Users
                  },
                  {
                    stat: '5x',
                    label: 'Cheaper to Retain',
                    desc: 'Acquiring new customers costs 5x more than keeping existing ones',
                    icon: DollarSign
                  },
                  {
                    stat: '0',
                    label: 'Customer Data',
                    desc: 'No way to reach customers after they leave or know their preferences',
                    icon: BarChart3
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute inset-0 bg-red-500/10 rounded-2xl blur-xl" />
                    <div className="relative bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6 sm:p-8 text-center h-full">
                      <item.icon className="w-10 h-10 text-red-400 mx-auto mb-4" />
                      <p className="text-4xl sm:text-5xl font-black text-red-400 mb-2">{item.stat}</p>
                      <p className="text-white font-bold text-lg mb-2">{item.label}</p>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key insight */}
              <div className="mt-8 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6 text-center">
                  <p className="text-white text-lg font-semibold">
                    Without a loyalty system, you&apos;re stuck in an <span className="text-red-400 font-bold">endless cycle of acquiring new customers</span> instead of building a base of regulars who love your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 2: THE SOLUTION ====================
      case 2:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Sparkles className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">The Solution</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Nuqta = <span className="text-[#c9a227]">Loyalty Made Simple</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mt-4">Customers earn coins at your store. They come back to spend them.</p>
              </div>

              {/* The Loop */}
              <div className="relative mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227]/10 to-emerald-500/10 rounded-3xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-3xl p-6 sm:p-8">
                  <h3 className="text-[#c9a227] font-bold text-center mb-6 text-xl">The Loyalty Loop</h3>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                    <div className="px-5 py-4 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[200px]">
                      <Store className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                      <p className="text-white font-bold">Customer Visits</p>
                      <p className="text-slate-400 text-sm">Shops at your store</p>
                    </div>
                    <ArrowRight className="text-[#c9a227] hidden md:block" size={24} />
                    <span className="text-[#c9a227] md:hidden text-xl">↓</span>
                    <div className="px-5 py-4 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[200px]">
                      <Coins className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                      <p className="text-white font-bold">Earns Nuqta Coins</p>
                      <p className="text-slate-400 text-sm">5-10% back in coins</p>
                    </div>
                    <ArrowRight className="text-[#c9a227] hidden md:block" size={24} />
                    <span className="text-[#c9a227] md:hidden text-xl">↓</span>
                    <div className="px-5 py-4 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[200px]">
                      <Gift className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                      <p className="text-white font-bold">Spends Coins</p>
                      <p className="text-slate-400 text-sm">Uses coins for discounts</p>
                    </div>
                    <ArrowRight className="text-[#c9a227] hidden md:block" size={24} />
                    <span className="text-[#c9a227] md:hidden text-xl">↓</span>
                    <div className="px-5 py-4 bg-[#c9a227]/20 rounded-xl border-2 border-[#c9a227] flex-1 max-w-[200px]">
                      <Repeat className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                      <p className="text-[#c9a227] font-bold">Comes Back!</p>
                      <p className="text-slate-400 text-sm">Now a loyal customer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { icon: Repeat, title: '3x More Visits', desc: 'Customers with coins come back 3x more often' },
                  { icon: TrendingUp, title: 'Higher Spend', desc: 'Coin users spend 40% more per visit' },
                  { icon: Heart, title: 'True Loyalty', desc: 'Build relationships, not just transactions' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                    <item.icon className="w-8 h-8 text-[#c9a227] mx-auto mb-3" />
                    <p className="text-white font-bold mb-1">{item.title}</p>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 3: HOW IT WORKS ====================
      case 3:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-4">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm">How It Works</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Simple <span className="text-blue-400">3-Step</span> Process
                </h1>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    step: '1',
                    title: 'Customer Pays You',
                    desc: 'Customer makes a purchase at your store as normal. No changes to your checkout.',
                    icon: CreditCard,
                    color: 'blue'
                  },
                  {
                    step: '2',
                    title: 'They Log in Nuqta',
                    desc: 'Customer opens Nuqta app and logs their purchase. Takes 10 seconds.',
                    icon: Smartphone,
                    color: 'purple'
                  },
                  {
                    step: '3',
                    title: 'You Verify & Done',
                    desc: 'You approve via merchant dashboard. Customer earns coins. They come back!',
                    icon: CheckCircle,
                    color: 'green'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    {idx < 2 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <ArrowRight className="text-white/20" size={24} />
                      </div>
                    )}
                    <div className={`bg-white/5 backdrop-blur-xl border ${
                      item.color === 'green' ? 'border-emerald-500/30' :
                      item.color === 'purple' ? 'border-purple-500/30' :
                      'border-blue-500/30'
                    } rounded-2xl p-6 h-full`}>
                      <div className={`w-14 h-14 rounded-xl ${
                        item.color === 'green' ? 'bg-emerald-500/20' :
                        item.color === 'purple' ? 'bg-purple-500/20' :
                        'bg-blue-500/20'
                      } flex items-center justify-center mb-4`}>
                        <item.icon className={`w-7 h-7 ${
                          item.color === 'green' ? 'text-emerald-400' :
                          item.color === 'purple' ? 'text-purple-400' :
                          'text-blue-400'
                        }`} />
                      </div>
                      <div className="text-xs font-bold text-slate-500 mb-1">STEP {item.step}</div>
                      <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-bold">No POS Changes</p>
                      <p className="text-slate-400 text-sm">Keep using your existing system. Zero IT headaches.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-5">
                  <div className="flex items-center gap-3">
                    <Clock className="w-8 h-8 text-[#c9a227] flex-shrink-0" />
                    <div>
                      <p className="text-white font-bold">Go Live in 24 Hours</p>
                      <p className="text-slate-400 text-sm">Sign up today, start getting loyal customers tomorrow.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 4: YOUR DASHBOARD ====================
      case 4:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-4">
                  <BarChart3 className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-semibold text-sm">Your Dashboard</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Know Your <span className="text-purple-400">Customers</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mt-4">Real-time insights you&apos;ve never had before</p>
              </div>

              {/* Dashboard features */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { icon: Users, title: 'Customer Profiles', desc: 'See who shops with you, how often, and what they spend', color: 'purple' },
                  { icon: TrendingUp, title: 'Sales Analytics', desc: 'Track Nuqta-driven revenue vs regular sales', color: 'blue' },
                  { icon: Repeat, title: 'Retention Metrics', desc: 'D7, D30, D90 retention rates for your customers', color: 'emerald' },
                  { icon: Target, title: 'Campaign Tools', desc: 'Send targeted offers to bring customers back', color: 'gold' }
                ].map((item, idx) => (
                  <div key={idx} className={`bg-white/5 backdrop-blur-xl border rounded-2xl p-5 ${
                    item.color === 'gold' ? 'border-[#c9a227]/30' :
                    item.color === 'emerald' ? 'border-emerald-500/30' :
                    item.color === 'blue' ? 'border-blue-500/30' :
                    'border-purple-500/30'
                  }`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      item.color === 'gold' ? 'bg-[#c9a227]/20' :
                      item.color === 'emerald' ? 'bg-emerald-500/20' :
                      item.color === 'blue' ? 'bg-blue-500/20' :
                      'bg-purple-500/20'
                    }`}>
                      <item.icon className={`w-6 h-6 ${
                        item.color === 'gold' ? 'text-[#c9a227]' :
                        item.color === 'emerald' ? 'text-emerald-400' :
                        item.color === 'blue' ? 'text-blue-400' :
                        'text-purple-400'
                      }`} />
                    </div>
                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Data insight */}
              <div className="mt-8 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl p-6 text-center">
                  <p className="text-white text-lg">
                    <span className="text-purple-400 font-bold">Finally know your customers.</span> See patterns, send targeted offers, and build real relationships - not just transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 5: PRICING ====================
      case 5:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Percent className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">Simple Pricing</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Pay <span className="text-[#c9a227]">Only On Results</span>
                </h1>
                <p className="text-slate-400 text-lg mt-3">No upfront fees. No monthly subscription. No risk.</p>
              </div>

              {/* Pricing tiers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Standard</h3>
                  <p className="text-4xl font-black text-white mb-1">5%</p>
                  <p className="text-slate-400 text-sm mb-4">commission on Nuqta sales</p>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400" /> App listing</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400" /> Merchant dashboard</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400" /> Basic analytics</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400" /> Email support</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-b from-[#c9a227]/20 to-transparent rounded-2xl border-2 border-[#c9a227] p-6 relative">
                  <div className="absolute top-0 right-0 bg-[#c9a227] text-[#0a1628] px-3 py-1 text-xs font-bold rounded-bl-xl">POPULAR</div>
                  <h3 className="text-[#c9a227] font-bold text-xl mb-2">Premium</h3>
                  <p className="text-4xl font-black text-white mb-1">6%</p>
                  <p className="text-slate-400 text-sm mb-4">commission on Nuqta sales</p>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#c9a227]" /> Everything in Standard</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#c9a227]" /> Featured placement</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#c9a227]" /> Priority in search</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#c9a227]" /> Custom campaigns</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#c9a227]" /> Dedicated support</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Enterprise</h3>
                  <p className="text-4xl font-black text-white mb-1">Custom</p>
                  <p className="text-slate-400 text-sm mb-4">for multi-location businesses</p>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400" /> Volume discounts</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400" /> API access</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400" /> White-label options</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400" /> Account manager</li>
                  </ul>
                </div>
              </div>

              {/* Key point */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5 text-center">
                  <p className="text-white text-lg">
                    <span className="text-emerald-400 font-bold">Zero risk.</span> If customers don&apos;t come through Nuqta, you pay nothing. We only win when you win.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 6: THE MATH ====================
      case 6:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-4">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold text-sm">The Math</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Example: <span className="text-emerald-400">Coffee Shop</span>
                </h1>
              </div>

              {/* Math breakdown */}
              <div className="relative mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-[#c9a227]/10 rounded-3xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border-2 border-emerald-500/30 rounded-3xl p-6">
                  {/* Scenario */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      { label: 'Avg Order', value: 'AED 45' },
                      { label: 'Monthly Nuqta Customers', value: '200' },
                      { label: 'Commission Rate', value: '6%' },
                      { label: 'Repeat Rate', value: '3x' }
                    ].map((item, idx) => (
                      <div key={idx} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <p className="text-slate-400 text-xs mb-1">{item.label}</p>
                        <p className="text-2xl font-black text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="bg-black/30 rounded-2xl p-5">
                    <p className="text-[#c9a227] font-bold text-center mb-4">Your Results</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-white/5 rounded-xl">
                        <p className="text-slate-400 text-sm mb-1">Nuqta Revenue</p>
                        <p className="text-2xl font-black text-emerald-400">AED 27,000</p>
                        <p className="text-slate-500 text-xs">200 × AED 45 × 3 visits</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl">
                        <p className="text-slate-400 text-sm mb-1">Commission Paid</p>
                        <p className="text-2xl font-black text-white">AED 1,620</p>
                        <p className="text-slate-500 text-xs">6% of revenue</p>
                      </div>
                      <div className="p-4 bg-[#c9a227]/20 rounded-xl border border-[#c9a227]/30">
                        <p className="text-slate-400 text-sm mb-1">Net New Revenue</p>
                        <p className="text-2xl font-black text-[#c9a227]">AED 25,380</p>
                        <p className="text-slate-500 text-xs">Revenue you wouldn&apos;t have</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key insight */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-2xl p-4 text-center">
                  <p className="text-white font-semibold">
                    Pay <span className="text-[#c9a227]">AED 1,620</span> to get <span className="text-emerald-400">AED 27,000</span> in loyal customer revenue. That&apos;s a <span className="text-[#c9a227] font-black">17x return</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 7: SUCCESS STORIES ====================
      case 7:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Award className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">Merchants Love Us</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Join <span className="text-[#c9a227]">Winning</span> Businesses
                </h1>
              </div>

              {/* Testimonials */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    quote: "We went from 20% repeat customers to 65% in just 3 months. Nuqta changed our business.",
                    name: "Ahmed K.",
                    business: "Marina Cafe",
                    stat: "+45% retention"
                  },
                  {
                    quote: "Finally I know who my customers are. The dashboard insights helped us create offers that actually work.",
                    name: "Sarah M.",
                    business: "Downtown Salon",
                    stat: "2x bookings"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[1,2,3,4,5].map((star) => (
                        <span key={star} className="text-[#c9a227] text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-white text-lg mb-4">&ldquo;{item.quote}&rdquo;</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold">{item.name}</p>
                        <p className="text-slate-400 text-sm">{item.business}</p>
                      </div>
                      <div className="px-3 py-1 bg-emerald-500/20 rounded-full">
                        <p className="text-emerald-400 text-sm font-bold">{item.stat}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Categories */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <p className="text-slate-400 text-center mb-4">Merchants across all categories</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Restaurants', 'Cafes', 'Salons', 'Retail', 'Gyms', 'Services', 'Entertainment'].map((cat, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 8: WHY NOW ====================
      case 8:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Rocket className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">Join Now</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Why <span className="text-[#c9a227]">Join Now</span>?
                </h1>
              </div>

              {/* Reasons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    title: 'Early Mover Advantage',
                    desc: 'Be the go-to option in your area before competitors join. First merchants get the most loyal customers.',
                    icon: Rocket
                  },
                  {
                    title: 'Growing User Base',
                    desc: '500K+ users and growing. More users = more potential customers walking into your store.',
                    icon: Users
                  },
                  {
                    title: 'Lock In Best Rates',
                    desc: 'Early merchants get preferred commission rates locked in. Later joiners pay more.',
                    icon: Percent
                  },
                  {
                    title: 'Zero Risk Trial',
                    desc: 'Try it for 3 months. If you don\'t see results, walk away. No contracts, no penalties.',
                    icon: Shield
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-[#c9a227]" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Urgency */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-[#c9a227]/20 to-emerald-500/20 border-2 border-[#c9a227]/30 rounded-2xl p-6 text-center">
                  <p className="text-[#c9a227] font-bold mb-2">LIMITED EARLY MERCHANT SPOTS</p>
                  <p className="text-white text-lg">We&apos;re only onboarding 50 merchants per area to maintain quality. Join before your competitors do.</p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 9: CONTACT ====================
      case 9:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c9a227] rounded-full blur-[150px] opacity-20 animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-4xl w-full text-center px-2">
              {/* Headline */}
              <div className="animate-[slideDown_0.8s_ease-out]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                  Ready to Build<br />
                  <span className="bg-gradient-to-r from-[#c9a227] to-[#d4b03f] bg-clip-text text-transparent">Customer Loyalty</span>?
                </h1>
              </div>

              {/* Contact card */}
              <div className="relative mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227]/20 to-emerald-500/20 rounded-3xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-3xl p-8 sm:p-10">
                  <div className="w-20 h-20 rounded-full bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-6">
                    <Handshake className="w-10 h-10 text-[#c9a227]" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Join Nuqta Today</h2>
                  <p className="text-slate-400 mb-6">Start getting loyal customers in 24 hours</p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                    <a href="mailto:merchants@nuqtapp.com" className="flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-full font-bold hover:bg-[#d4b03f] transition-colors">
                      <Mail size={20} />
                      merchants@nuqtapp.com
                    </a>
                    <a href="tel:+971503764345" className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
                      <Phone size={20} />
                      +971 50 376 4345
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center">
                    {['Zero upfront cost', 'Go live in 24 hours', 'Cancel anytime'].map((item, idx) => (
                      <span key={idx} className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-semibold">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Nuqta branding */}
              <div className="animate-[fadeIn_1s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <p className="text-[#c9a227] text-3xl font-black tracking-wider mb-2">NUQTA</p>
                <p className="text-slate-400">UAE&apos;s Everyday Savings Platform</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative bg-[#0a1628] overflow-hidden">
      {/* Main slide content */}
      {renderSlide()}

      {/* Minimal Navigation - Right side dots */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[60] hidden md:flex flex-col items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => changeSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === idx
                ? 'bg-[#c9a227] scale-150'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            title={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Bottom Navigation - Compact */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60]">
        <div className="flex items-center gap-3 bg-black/60 backdrop-blur-xl rounded-full px-4 py-2 border border-white/10">
          <button
            onClick={() => changeSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={18} className="text-white" />
          </button>

          <span className="text-white text-sm font-medium min-w-[60px] text-center">
            {currentSlide + 1} / {totalSlides}
          </span>

          <button
            onClick={() => changeSlide(currentSlide + 1)}
            disabled={currentSlide === totalSlides - 1}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={18} className="text-white" />
          </button>
        </div>
      </div>

      {/* Mobile swipe hint */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[60] md:hidden">
        <p className="text-slate-500 text-xs">Use arrows or swipe to navigate</p>
      </div>

      {/* Keyboard hint - Desktop */}
      <div className="fixed bottom-4 right-4 z-[60] hidden lg:block">
        <div className="flex items-center gap-2 text-slate-500 text-xs">
          <span className="px-2 py-1 bg-white/10 rounded">←</span>
          <span className="px-2 py-1 bg-white/10 rounded">→</span>
          <span>or</span>
          <span className="px-2 py-1 bg-white/10 rounded">Space</span>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default MerchantPitchDeck;
