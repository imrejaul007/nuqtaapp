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
  Play,
  Handshake,
  Target,
  Repeat,
  Clock,
  Percent,
  Phone,
  Mail,
  Coffee,
  UtensilsCrossed,
  Share2,
  Instagram,
  MessageCircle,
  Send,
  Settings,
  Bell,
  Download,
  Lock,
  FileText
} from 'lucide-react';

/**
 * CAFE & RESTAURANT MERCHANT PITCH DECK
 * Niche-specific version of Engine A for cafes, restaurants, and F&B businesses
 *
 * Key customizations:
 * - F&B specific language and examples
 * - Coffee/food imagery and icons
 * - Restaurant-specific objections and benefits
 * - Typical cafe/restaurant metrics
 *
 * Brand colors: #c9a227 (gold), #0a1628 (dark blue)
 */

const CafeRestaurantDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = 12; // Added: Social Viral (slide 5), Merchant OS (slide 6)

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
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c9a227] rounded-full blur-[150px] opacity-20 animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-5xl w-full text-center px-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#c9a227]/20 to-orange-500/20 border border-[#c9a227]/30 rounded-full mb-6 animate-[fadeIn_1s_ease-out]">
                <Coffee className="w-4 h-4 text-[#c9a227]" />
                <span className="text-[#c9a227] font-semibold text-sm">For Cafes & Restaurants</span>
              </div>

              {/* Main title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-[slideDown_0.8s_ease-out]">
                Turn One-Time Diners Into<br />
                <span className="bg-gradient-to-r from-[#c9a227] to-orange-400 bg-clip-text text-transparent">Loyal Regulars</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto animate-[fadeIn_1s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
                Get customers coming back 2.5x more often. Pay only when they visit.
              </p>

              {/* Key stats */}
              <div className="flex flex-wrap justify-center gap-4 mb-10 animate-[fadeIn_1s_ease-out_0.5s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { value: 'AED 0', label: 'Upfront Cost' },
                  { value: '2.5x', label: 'More Return Visits' },
                  { value: '500K+', label: 'Hungry Users' }
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
                  className="px-8 py-4 bg-gradient-to-r from-[#c9a227] to-orange-500 text-[#0a1628] font-bold rounded-full text-lg flex items-center gap-2 hover:shadow-[0_0_30px_rgba(201,162,39,0.4)] transition-all"
                >
                  <Play size={20} />
                  See How It Works
                </button>
              </div>

              {/* Nuqta branding */}
              <div className="mt-10 animate-[fadeIn_1s_ease-out_1.1s] opacity-0 [animation-fill-mode:forwards]">
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
              <div className="text-center mb-8 sm:mb-10 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-4">
                  <UtensilsCrossed className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm">The F&B Challenge</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Great Food, <span className="text-red-400">No Repeat Visits</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    stat: '68%',
                    label: 'Never Come Back',
                    desc: 'Most customers visit once and forget about you. Even if they loved the food.',
                    icon: Users
                  },
                  {
                    stat: 'AED 50K+',
                    label: 'Marketing Waste',
                    desc: 'Instagram ads, influencers, discounts - they bring footfall but not loyalty.',
                    icon: DollarSign
                  },
                  {
                    stat: '0',
                    label: 'Customer Data',
                    desc: 'Cash and card payments tell you nothing. Who are your best customers?',
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

              <div className="mt-8 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6 text-center">
                  <p className="text-white text-lg font-semibold">
                    You need a way to <span className="text-red-400 font-bold">turn every customer into a repeat customer</span> - automatically.
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
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Sparkles className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">The Solution</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  <span className="text-[#c9a227]">Automatic Loyalty</span> That Works
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mt-4">Every bill becomes a reason to come back</p>
              </div>

              {/* How it works */}
              <div className="relative mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227]/10 to-orange-500/10 rounded-3xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-3xl p-6 sm:p-8">
                  <h3 className="text-[#c9a227] font-bold text-center mb-6 text-xl">Customer Journey</h3>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                    <div className="px-5 py-4 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[200px]">
                      <Coffee className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                      <p className="text-white font-bold">Customer Pays Bill</p>
                      <p className="text-slate-400 text-sm">AED 80 lunch</p>
                    </div>
                    <ArrowRight className="text-[#c9a227] hidden md:block" size={24} />
                    <span className="text-[#c9a227] md:hidden text-xl">↓</span>
                    <div className="px-5 py-4 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[200px]">
                      <Smartphone className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                      <p className="text-white font-bold">Logs in Nuqta</p>
                      <p className="text-slate-400 text-sm">10 seconds</p>
                    </div>
                    <ArrowRight className="text-[#c9a227] hidden md:block" size={24} />
                    <span className="text-[#c9a227] md:hidden text-xl">↓</span>
                    <div className="px-5 py-4 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[200px]">
                      <Coins className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                      <p className="text-white font-bold">Gets AED 8 Coins</p>
                      <p className="text-slate-400 text-sm">10% cashback</p>
                    </div>
                    <ArrowRight className="text-[#c9a227] hidden md:block" size={24} />
                    <span className="text-[#c9a227] md:hidden text-xl">↓</span>
                    <div className="px-5 py-4 bg-[#c9a227]/20 rounded-xl border-2 border-[#c9a227] flex-1 max-w-[200px]">
                      <Repeat className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                      <p className="text-[#c9a227] font-bold">Comes Back!</p>
                      <p className="text-slate-400 text-sm">To use coins</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { icon: Target, title: '2.5x More Visits', desc: 'Customers come back to spend their coins' },
                  { icon: BarChart3, title: 'Know Your Customers', desc: 'See who visits, when, and how much they spend' },
                  { icon: Shield, title: 'No Tech Needed', desc: 'Keep your existing POS. Zero changes.' }
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

      // ==================== SLIDE 3: THE MATH ====================
      case 3:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-4">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold text-sm">Real Numbers</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Example: <span className="text-emerald-400">Your Cafe</span>
                </h1>
              </div>

              {/* Math breakdown */}
              <div className="relative mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-[#c9a227]/10 rounded-3xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border-2 border-emerald-500/30 rounded-3xl p-6">
                  {/* Scenario */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      { label: 'Avg Bill', value: 'AED 75' },
                      { label: 'Nuqta Customers/Month', value: '150' },
                      { label: 'Repeat Rate', value: '2.5x' },
                      { label: 'Your Margin', value: '60%' }
                    ].map((item, idx) => (
                      <div key={idx} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <p className="text-slate-400 text-xs mb-1">{item.label}</p>
                        <p className="text-2xl font-black text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="bg-black/30 rounded-2xl p-5">
                    <p className="text-[#c9a227] font-bold text-center mb-4">Your Monthly Results</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-white/5 rounded-xl">
                        <p className="text-slate-400 text-sm mb-1">Extra Revenue</p>
                        <p className="text-2xl font-black text-emerald-400">AED 28,125</p>
                        <p className="text-slate-500 text-xs">150 × AED 75 × 2.5 visits</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl">
                        <p className="text-slate-400 text-sm mb-1">Your Nuqta Cost</p>
                        <p className="text-2xl font-black text-white">AED 4,500</p>
                        <p className="text-slate-500 text-xs">~16% (10% cashback + 6% fee)</p>
                      </div>
                      <div className="p-4 bg-[#c9a227]/20 rounded-xl border border-[#c9a227]/30">
                        <p className="text-slate-400 text-sm mb-1">Extra Profit</p>
                        <p className="text-2xl font-black text-[#c9a227]">AED 12,375</p>
                        <p className="text-slate-500 text-xs">60% margin - 16% cost = 44% net</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-2xl p-4 text-center">
                  <p className="text-white font-semibold">
                    <span className="text-emerald-400 font-black">AED 12,375 extra profit/month</span> from customers who would have visited once and never returned.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 4: COST BREAKDOWN ====================
      case 4:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-2">
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Percent className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">Transparent Pricing</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Your <span className="text-[#c9a227]">Total Cost</span>
                </h1>
              </div>

              {/* Clear cost breakdown */}
              <div className="mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p className="text-[#c9a227] font-bold text-center mb-6">Per AED 100 Sale</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-4">
                    <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                      <p className="text-emerald-400 font-bold text-2xl">AED 5-10</p>
                      <p className="text-slate-400 text-sm">Cashback to Customer</p>
                      <p className="text-slate-500 text-xs">(You choose the rate)</p>
                    </div>
                    <div className="p-4 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/20">
                      <p className="text-[#c9a227] font-bold text-2xl">AED 5-6</p>
                      <p className="text-slate-400 text-sm">Nuqta Platform Fee</p>
                    </div>
                    <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                      <p className="text-white font-bold text-2xl">AED 10-16</p>
                      <p className="text-slate-400 text-sm">Total Cost</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-center text-sm">With 60%+ cafe margins, you still make 44%+ profit on every Nuqta sale</p>
                </div>
              </div>

              {/* Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5">
                  <p className="text-red-400 font-bold mb-3">Without Nuqta</p>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>• Customer visits once, pays AED 100</li>
                    <li>• You make AED 60 profit</li>
                    <li>• They forget and never return</li>
                    <li>• <span className="text-red-400 font-bold">Total: AED 60</span></li>
                  </ul>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5">
                  <p className="text-emerald-400 font-bold mb-3">With Nuqta</p>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>• Customer visits 2.5x, pays AED 250 total</li>
                    <li>• You pay AED 40 total cost (16%)</li>
                    <li>• They become a regular</li>
                    <li>• <span className="text-emerald-400 font-bold">Total: AED 110 profit</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 5: SOCIAL VIRAL ====================
      case 5:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-pink-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full mb-4">
                  <Share2 className="w-5 h-5 text-pink-400" />
                  <span className="text-pink-400 font-semibold text-sm">Free Marketing</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Customers <span className="text-pink-400">Promote You</span> for Free
                </h1>
                <p className="text-lg text-slate-400 mt-4">Instagram stories, WhatsApp shares - word spreads fast</p>
              </div>

              {/* Social flow */}
              <div className="relative mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-white/5 backdrop-blur-xl border-2 border-pink-500/30 rounded-3xl p-6">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                    <div className="px-4 py-3 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[160px]">
                      <Coffee className="w-6 h-6 text-[#c9a227] mx-auto mb-2" />
                      <p className="text-white font-bold text-sm">Customer Visits</p>
                      <p className="text-slate-400 text-xs">Earns coins</p>
                    </div>
                    <ArrowRight className="text-pink-400 hidden md:block" size={20} />
                    <span className="text-pink-400 md:hidden">↓</span>
                    <div className="px-4 py-3 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[160px]">
                      <Instagram className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                      <p className="text-white font-bold text-sm">Posts Story</p>
                      <p className="text-slate-400 text-xs">&ldquo;Great coffee + rewards!&rdquo;</p>
                    </div>
                    <ArrowRight className="text-pink-400 hidden md:block" size={20} />
                    <span className="text-pink-400 md:hidden">↓</span>
                    <div className="px-4 py-3 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[160px]">
                      <MessageCircle className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                      <p className="text-white font-bold text-sm">Friends Ask</p>
                      <p className="text-slate-400 text-xs">&ldquo;Where&apos;s that?&rdquo;</p>
                    </div>
                    <ArrowRight className="text-pink-400 hidden md:block" size={20} />
                    <span className="text-pink-400 md:hidden">↓</span>
                    <div className="px-4 py-3 bg-pink-500/20 rounded-xl border-2 border-pink-500 flex-1 max-w-[160px]">
                      <Users className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                      <p className="text-pink-400 font-bold text-sm">New Customers!</p>
                      <p className="text-slate-400 text-xs">Zero ad spend</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 animate-[fadeIn_0.8s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-white/5 rounded-xl p-4 text-center border border-pink-500/20">
                  <p className="text-3xl font-black text-pink-400">23%</p>
                  <p className="text-slate-400 text-xs">New customers from referrals</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center border border-purple-500/20">
                  <p className="text-3xl font-black text-purple-400">AED 0</p>
                  <p className="text-slate-400 text-xs">Marketing cost</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center border border-emerald-500/20">
                  <p className="text-3xl font-black text-emerald-400">4.2x</p>
                  <p className="text-slate-400 text-xs">Higher lifetime value</p>
                </div>
              </div>

              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-pink-500/10 border border-pink-500/30 rounded-2xl p-5 text-center">
                  <p className="text-white">
                    <span className="text-pink-400 font-bold">Every latte photo is free advertising.</span> When customers share their rewards, their entire feed sees YOUR cafe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 6: MERCHANT OS ====================
      case 6:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full mb-4">
                  <Settings className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold text-sm">Free Merchant OS</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Your <span className="text-cyan-400">Complete Business</span> Toolkit
                </h1>
              </div>

              {/* Branded Coins Highlight */}
              <div className="mb-6 animate-[fadeIn_0.8s_ease-out_0.15s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-[#c9a227]/20 to-orange-500/20 border-2 border-[#c9a227]/50 rounded-2xl p-5">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#c9a227]/30 flex items-center justify-center flex-shrink-0">
                      <Coins className="w-8 h-8 text-[#c9a227]" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-[#c9a227] font-black text-xl mb-1">Your Branded Coins</h3>
                      <p className="text-white">Customers earn <span className="text-[#c9a227] font-bold">&ldquo;[Your Cafe] Coins&rdquo;</span> - not generic points. They see YOUR brand every time they check their balance, building loyalty to YOU.</p>
                    </div>
                    <div className="text-center flex-shrink-0">
                      <p className="text-3xl font-black text-emerald-400">+40%</p>
                      <p className="text-slate-400 text-xs">Higher repeat rate</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { icon: Users, title: 'Customer Database', desc: 'Full CRM with profiles & preferences', color: 'cyan' },
                  { icon: Bell, title: 'Campaign Manager', desc: 'Send offers to your customers', color: 'pink' },
                  { icon: Target, title: 'Location Targeting', desc: 'Reach customers within 3km', color: 'emerald' },
                  { icon: Gift, title: 'Offer Creator', desc: 'Happy hours, birthday deals', color: 'purple' },
                  { icon: BarChart3, title: 'Analytics', desc: 'Track sales, peak hours', color: 'blue' },
                  { icon: FileText, title: 'Digital Receipts', desc: 'Auto digital records', color: 'orange' },
                  { icon: Download, title: 'Data Export', desc: 'Your data, anytime', color: 'gold' },
                  { icon: Lock, title: 'Data Ownership', desc: 'Never shared with competitors', color: 'red' }
                ].map((item, idx) => (
                  <div key={idx} className={`bg-white/5 border rounded-xl p-3 ${
                    item.color === 'cyan' ? 'border-cyan-500/30' :
                    item.color === 'pink' ? 'border-pink-500/30' :
                    item.color === 'emerald' ? 'border-emerald-500/30' :
                    item.color === 'purple' ? 'border-purple-500/30' :
                    item.color === 'blue' ? 'border-blue-500/30' :
                    item.color === 'orange' ? 'border-orange-500/30' :
                    item.color === 'gold' ? 'border-[#c9a227]/30' :
                    'border-red-500/30'
                  }`}>
                    <item.icon className={`w-6 h-6 mb-2 ${
                      item.color === 'cyan' ? 'text-cyan-400' :
                      item.color === 'pink' ? 'text-pink-400' :
                      item.color === 'emerald' ? 'text-emerald-400' :
                      item.color === 'purple' ? 'text-purple-400' :
                      item.color === 'blue' ? 'text-blue-400' :
                      item.color === 'orange' ? 'text-orange-400' :
                      item.color === 'gold' ? 'text-[#c9a227]' :
                      'text-red-400'
                    }`} />
                    <h4 className="text-white font-bold text-xs mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Campaign examples */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 animate-[fadeIn_0.8s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
                <p className="text-[#c9a227] font-bold text-center text-sm mb-3">Campaigns You Can Send</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  {[
                    { type: 'Happy Hour', msg: '"3-5pm: Double coins on coffee!"' },
                    { type: 'Win-Back', msg: '"Miss you! Bonus coins today"' },
                    { type: 'Birthday', msg: '"Happy Birthday! Free dessert"' },
                    { type: 'Slow Day', msg: '"Tuesday special: 3x coins"' }
                  ].map((c, idx) => (
                    <div key={idx} className="p-2 bg-white/5 rounded-lg">
                      <p className="text-[#c9a227] font-bold text-xs">{c.type}</p>
                      <p className="text-slate-400 text-xs italic">{c.msg}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-cyan-500/10 border-2 border-cyan-500/30 rounded-2xl p-5 text-center">
                  <div className="flex flex-wrap justify-center gap-6 mb-3">
                    <div className="text-center">
                      <p className="text-2xl font-black text-cyan-400">AED 0</p>
                      <p className="text-slate-400 text-xs">Cost</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-black text-emerald-400">100%</p>
                      <p className="text-slate-400 text-xs">Data ownership</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-black text-[#c9a227]">Unlimited</p>
                      <p className="text-slate-400 text-xs">Campaigns</p>
                    </div>
                  </div>
                  <p className="text-white text-sm">
                    <span className="text-cyan-400 font-bold">Similar tools cost AED 500-2000/month.</span> Free with Nuqta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 7: OBJECTIONS ====================
      case 7:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-2">
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-4">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold text-sm">Honest Answers</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  &ldquo;What&apos;s the <span className="text-emerald-400">Catch</span>?&rdquo;
                </h1>
              </div>

              <div className="space-y-4 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    q: '"We already have regulars"',
                    a: "Great! Your existing regulars aren't affected - they don't need Nuqta. This is about converting the 68% who visit once and never return. They're the growth opportunity.",
                    icon: Users
                  },
                  {
                    q: '"15% is too much for a cafe"',
                    a: "Compare to what? Instagram ads cost AED 50+ per new customer with no guarantee of return. Nuqta costs AED 12-15 per visit AND they come back 2.5x more. The math works.",
                    icon: DollarSign
                  },
                  {
                    q: '"My customers pay cash, not apps"',
                    a: "Nuqta works alongside cash. Customer pays you normally, then logs the receipt in the app. Your operations don't change at all.",
                    icon: Smartphone
                  },
                  {
                    q: '"We tried loyalty cards before"',
                    a: "Paper cards get lost. Nuqta coins are digital, can be spent at 500+ UAE stores, and customers get notified when they have coins to spend. It's not comparable.",
                    icon: Gift
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-white font-bold mb-2">{item.q}</p>
                        <p className="text-slate-400 text-sm">{item.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 8: SUCCESS STORIES ====================
      case 8:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Award className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">Real Results</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Cafes <span className="text-[#c9a227]">Already Winning</span>
                </h1>
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-3 gap-4 mb-8 animate-[fadeIn_0.8s_ease-out_0.1s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { value: '2.5x', label: 'More Return Visits' },
                  { value: '+35%', label: 'Average Bill Increase' },
                  { value: '89%', label: 'Coin Redemption Rate' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-2xl sm:text-3xl font-black text-[#c9a227]">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Testimonials */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    quote: "We went from seeing customers once to 3-4 times a month. They come back specifically because they have coins to spend.",
                    name: "Specialty Coffee Shop",
                    business: "JLT, Dubai",
                    stat: "+180% visits",
                    verified: true
                  },
                  {
                    quote: "The dashboard shows us exactly who our best customers are. We never had this data before - now we can actually build relationships.",
                    name: "Brunch Restaurant",
                    business: "Business Bay",
                    stat: "+42% revenue",
                    verified: true
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[1,2,3,4,5].map((star) => (
                          <span key={star} className="text-[#c9a227] text-lg">★</span>
                        ))}
                      </div>
                      {item.verified && (
                        <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full flex items-center gap-1">
                          <CheckCircle size={12} /> Verified
                        </span>
                      )}
                    </div>
                    <p className="text-white mb-4">&ldquo;{item.quote}&rdquo;</p>
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
            </div>
          </div>
        );

      // ==================== SLIDE 9: WHY NOW ====================
      case 9:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-2">
              {/* Urgency Banner */}
              <div className="mb-6 animate-[fadeIn_0.8s_ease-out_0.1s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-500/30 rounded-2xl p-4 text-center">
                  <p className="text-white font-bold">
                    <span className="text-red-400">Only 5 cafe spots left</span> in your area this month
                  </p>
                  <p className="text-slate-400 text-xs mt-1">We limit partners to protect exclusivity</p>
                </div>
              </div>

              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Rocket className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">Why Now?</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Don&apos;t Wait for <span className="text-[#c9a227]">Competitors</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    title: 'Area Exclusivity',
                    desc: 'We limit cafes per area. First to join gets priority over competitors.',
                    icon: Target
                  },
                  {
                    title: 'Founder Rates',
                    desc: 'Current rates are promotional. Early partners keep these rates forever.',
                    icon: Percent
                  },
                  {
                    title: '500K+ Users Ready',
                    desc: 'Nuqta users are actively looking for new places to earn coins.',
                    icon: Users
                  },
                  {
                    title: 'Zero Risk',
                    desc: 'No upfront cost. If it doesn\'t work in 30 days, walk away.',
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
            </div>
          </div>
        );

      // ==================== SLIDE 10: DATA PRIVACY ====================
      case 10:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-2">
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-4">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm">Your Data, Protected</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Trust & <span className="text-blue-400">Security</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    title: 'Your Customer Data Stays Yours',
                    desc: 'We never share your customer list with competitors. Your data is your competitive advantage.',
                    icon: Shield
                  },
                  {
                    title: 'UAE Data Compliance',
                    desc: 'All data stored in UAE-based servers. Fully compliant with UAE data protection laws.',
                    icon: CheckCircle
                  },
                  {
                    title: 'Transparent Reporting',
                    desc: 'See exactly which customers came through Nuqta. No hidden fees, no surprises.',
                    icon: BarChart3
                  },
                  {
                    title: 'Cancel Anytime',
                    desc: 'No lock-in contracts. If you\'re not happy, you can leave. We keep you by results, not contracts.',
                    icon: Zap
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 11: CONTACT ====================
      case 11:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c9a227] rounded-full blur-[150px] opacity-20 animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-4xl w-full text-center px-2">
              <div className="animate-[slideDown_0.8s_ease-out]">
                <Coffee className="w-16 h-16 text-[#c9a227] mx-auto mb-4" />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                  Ready to Fill More Tables<br />
                  <span className="bg-gradient-to-r from-[#c9a227] to-orange-400 bg-clip-text text-transparent">Every Day</span>?
                </h1>
              </div>

              <div className="relative mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227]/20 to-orange-500/20 rounded-3xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-3xl p-8 sm:p-10">
                  <div className="w-20 h-20 rounded-full bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-6">
                    <Handshake className="w-10 h-10 text-[#c9a227]" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Schedule Your Setup Call</h2>
                  <p className="text-slate-400 mb-4">15-minute call → Live in 48 hours</p>

                  {/* Onboarding Timeline */}
                  <div className="grid grid-cols-4 gap-2 mb-6 text-center">
                    {[
                      { day: 'Today', action: 'Quick Call', icon: '📞' },
                      { day: 'Day 1', action: 'Setup', icon: '⚙️' },
                      { day: 'Day 2', action: 'Go Live', icon: '🚀' },
                      { day: 'Day 7', action: 'First Regulars!', icon: '☕' }
                    ].map((step, idx) => (
                      <div key={idx} className="p-2 bg-white/5 rounded-lg">
                        <p className="text-2xl mb-1">{step.icon}</p>
                        <p className="text-[#c9a227] text-xs font-bold">{step.day}</p>
                        <p className="text-slate-400 text-xs">{step.action}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                    <a href="mailto:merchants@nuqtapp.com?subject=Cafe Partnership - Schedule Setup Call" className="flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-full font-bold hover:bg-[#d4b03f] transition-colors">
                      <Mail size={20} />
                      Schedule Setup Call
                    </a>
                    <a href="tel:+971503764345" className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
                      <Phone size={20} />
                      +971 50 376 4345
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center">
                    {['Zero upfront cost', '2.5x more visits', 'Cancel anytime'].map((item, idx) => (
                      <span key={idx} className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-semibold">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

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
      {renderSlide()}

      {/* Navigation dots */}
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

      {/* Bottom Navigation */}
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

      {/* Keyboard hint */}
      <div className="fixed bottom-4 right-4 z-[60] hidden lg:block">
        <div className="flex items-center gap-2 text-slate-500 text-xs">
          <span className="px-2 py-1 bg-white/10 rounded">←</span>
          <span className="px-2 py-1 bg-white/10 rounded">→</span>
          <span>or</span>
          <span className="px-2 py-1 bg-white/10 rounded">Space</span>
        </div>
      </div>

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

export default CafeRestaurantDeck;
