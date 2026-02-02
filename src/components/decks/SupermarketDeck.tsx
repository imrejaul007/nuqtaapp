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
  BarChart3,
  Smartphone,
  Award,
  Play,
  Handshake,
  Target,
  Repeat,
  Percent,
  Phone,
  Mail,
  ShoppingCart,
  Wallet,
  Share2,
  Instagram,
  MessageCircle,
  Send,
  Settings,
  Bell,
  Download,
  Lock,
  FileText,
  Gift
} from 'lucide-react';

/**
 * SUPERMARKET & GROCERY MERCHANT PITCH DECK
 * Niche-specific version of Engine B for supermarkets, grocery stores, and retail chains
 *
 * Key customizations:
 * - Low-margin specific language (2-8% margins)
 * - Grocery/retail imagery and icons
 * - Supermarket-specific objections (can't discount, price-competitive)
 * - Compete with big chains messaging
 *
 * Engine B: 5% fixed cashback, ~7% total commission
 * Brand colors: #c9a227 (gold), #0a1628 (dark blue)
 */

const SupermarketDeck = () => {
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
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-5xl w-full text-center px-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#c9a227]/20 to-emerald-500/20 border border-[#c9a227]/30 rounded-full mb-6 animate-[fadeIn_1s_ease-out]">
                <ShoppingCart className="w-4 h-4 text-[#c9a227]" />
                <span className="text-[#c9a227] font-semibold text-sm">For Supermarkets & Grocery</span>
              </div>

              {/* Main title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-[slideDown_0.8s_ease-out]">
                Compete with Big Chains<br />
                <span className="bg-gradient-to-r from-[#c9a227] to-emerald-400 bg-clip-text text-transparent">Without Cutting Prices</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto animate-[fadeIn_1s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
                Build customer loyalty at 7% cost. Designed for low-margin businesses.
              </p>

              {/* Key stats */}
              <div className="flex flex-wrap justify-center gap-4 mb-10 animate-[fadeIn_1s_ease-out_0.5s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { value: 'AED 0', label: 'Upfront Cost' },
                  { value: '5%', label: 'Fixed Cashback' },
                  { value: '2.5x', label: 'More Repeat Visits' }
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
                  className="px-8 py-4 bg-gradient-to-r from-[#c9a227] to-emerald-500 text-[#0a1628] font-bold rounded-full text-lg flex items-center gap-2 hover:shadow-[0_0_30px_rgba(201,162,39,0.4)] transition-all"
                >
                  <Play size={20} />
                  See How It Works
                </button>
              </div>

              {/* Perfect for */}
              <div className="mt-10 animate-[fadeIn_1s_ease-out_0.9s] opacity-0 [animation-fill-mode:forwards]">
                <p className="text-slate-500 text-sm mb-3">Built for thin margins</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Supermarkets', 'Grocery Stores', 'Mini Marts', 'Organic Shops', 'Pharmacies'].map((type, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nuqta branding */}
              <div className="mt-8 animate-[fadeIn_1s_ease-out_1.1s] opacity-0 [animation-fill-mode:forwards]">
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
                  <Store className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm">The Grocery Challenge</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Thin Margins, <span className="text-red-400">Can&apos;t Discount</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    stat: '3-8%',
                    label: 'Your Margin',
                    desc: 'Grocery runs on razor-thin margins. You can\'t compete on discounts like Carrefour or LuLu.',
                    icon: DollarSign
                  },
                  {
                    stat: '0',
                    label: 'Customer Loyalty',
                    desc: 'Shoppers go wherever is closest or cheapest. No reason to choose you over the chain store.',
                    icon: Users
                  },
                  {
                    stat: '15-20%',
                    label: 'Other Apps Want',
                    desc: 'Most loyalty apps demand 15-20% cashback. That wipes out your profit entirely.',
                    icon: Percent
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
                    You need a loyalty solution that <span className="text-red-400 font-bold">works with your margins</span>, not against them.
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
                  <span className="text-[#c9a227]">Fixed 5% Cashback</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mt-4">Simple, predictable, margin-friendly</p>
              </div>

              {/* How it works */}
              <div className="relative mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227]/10 to-emerald-500/10 rounded-3xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-3xl p-6 sm:p-8">
                  <h3 className="text-[#c9a227] font-bold text-center mb-6 text-xl">Customer Journey</h3>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                    <div className="px-5 py-4 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[200px]">
                      <ShoppingCart className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                      <p className="text-white font-bold">Customer Shops</p>
                      <p className="text-slate-400 text-sm">AED 200 groceries</p>
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
                      <p className="text-white font-bold">Gets AED 10 Coins</p>
                      <p className="text-slate-400 text-sm">5% fixed rate</p>
                    </div>
                    <ArrowRight className="text-[#c9a227] hidden md:block" size={24} />
                    <span className="text-[#c9a227] md:hidden text-xl">↓</span>
                    <div className="px-5 py-4 bg-[#c9a227]/20 rounded-xl border-2 border-[#c9a227] flex-1 max-w-[200px]">
                      <Repeat className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                      <p className="text-[#c9a227] font-bold">Comes Back!</p>
                      <p className="text-slate-400 text-sm">2.5x more often</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { icon: Wallet, title: 'Margin Protected', desc: '~7% total cost works with 8%+ margins' },
                  { icon: Target, title: '2.5x Repeat Visits', desc: 'Customers choose you over chains' },
                  { icon: Shield, title: 'No POS Changes', desc: 'Keep your existing systems' }
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

      // ==================== SLIDE 3: MARGIN MATH ====================
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
                  <span className="text-emerald-400 font-semibold text-sm">The Math That Works</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Your <span className="text-emerald-400">Margin Math</span>
                </h1>
              </div>

              {/* Margin psychology visual */}
              <div className="mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-emerald-500/10 to-[#c9a227]/10 border-2 border-emerald-500/30 rounded-2xl p-6">
                  <p className="text-emerald-400 font-bold text-center mb-4">Example: 8% Margin Business</p>
                  <div className="grid grid-cols-4 gap-3 text-center">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <p className="text-slate-400 text-xs">Sale</p>
                      <p className="text-white font-bold text-xl">AED 100</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <p className="text-slate-400 text-xs">Your Margin</p>
                      <p className="text-emerald-400 font-bold text-xl">AED 8</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <p className="text-slate-400 text-xs">Nuqta Cost</p>
                      <p className="text-[#c9a227] font-bold text-xl">AED 7</p>
                    </div>
                    <div className="p-3 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                      <p className="text-slate-400 text-xs">You Keep</p>
                      <p className="text-emerald-400 font-bold text-xl">AED 1 + Loyalty</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm text-center mt-4">That AED 1 net + 2.5x repeat visits = more profit than one-time shoppers</p>
                </div>
              </div>

              {/* Monthly example */}
              <div className="relative animate-[fadeIn_0.8s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-[#c9a227]/10 rounded-3xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border-2 border-emerald-500/30 rounded-3xl p-6">
                  <p className="text-[#c9a227] font-bold text-center mb-4">Monthly Results (200 Nuqta customers, AED 150 avg)</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-white/5 rounded-xl">
                      <p className="text-slate-400 text-sm mb-1">Revenue from Nuqta</p>
                      <p className="text-2xl font-black text-emerald-400">AED 75,000</p>
                      <p className="text-slate-500 text-xs">200 × AED 150 × 2.5 visits</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <p className="text-slate-400 text-sm mb-1">Your Total Cost</p>
                      <p className="text-2xl font-black text-white">AED 5,250</p>
                      <p className="text-slate-500 text-xs">~7% (5% cashback + 2% fee)</p>
                    </div>
                    <div className="p-4 bg-[#c9a227]/20 rounded-xl border border-[#c9a227]/30">
                      <p className="text-slate-400 text-sm mb-1">Net Gain</p>
                      <p className="text-2xl font-black text-[#c9a227]">AED 750+ loyal customers</p>
                      <p className="text-slate-500 text-xs">Profit + repeat value</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-2xl p-4 text-center">
                  <p className="text-white font-semibold">
                    <span className="text-emerald-400 font-black">AED 75K repeat revenue</span> from customers who would have gone to Carrefour instead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 4: VS BIG CHAINS ====================
      case 4:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-2">
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Target className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">Your Edge</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Beat Carrefour & LuLu on <span className="text-[#c9a227]">Value</span>
                </h1>
              </div>

              {/* Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                  <p className="text-red-400 font-bold text-xl mb-4">Big Chains</p>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span>Massive buying power you can&apos;t match</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span>Can afford to run loss-leader discounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span>Own loyalty programs (Share, Smiles)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span>Customers default to them for convenience</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6">
                  <p className="text-emerald-400 font-bold text-xl mb-4">You + Nuqta</p>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>5% cashback customers can use anywhere in UAE</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Better service + personal touch chains lack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Nuqta coins work at 500+ stores - more valuable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Customers choose you for rewards + relationship</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-2xl p-5 text-center">
                  <p className="text-white text-lg">
                    <span className="text-[#c9a227] font-bold">You can&apos;t out-discount Carrefour.</span> But you CAN offer <span className="text-emerald-400 font-bold">rewards + better service</span>. That&apos;s your winning combo.
                  </p>
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
                <p className="text-lg text-slate-400 mt-4">WhatsApp groups, family recommendations - word spreads fast</p>
              </div>

              {/* Social flow */}
              <div className="relative mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-white/5 backdrop-blur-xl border-2 border-pink-500/30 rounded-3xl p-6">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                    <div className="px-4 py-3 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[160px]">
                      <ShoppingCart className="w-6 h-6 text-[#c9a227] mx-auto mb-2" />
                      <p className="text-white font-bold text-sm">Customer Shops</p>
                      <p className="text-slate-400 text-xs">Earns 5% coins</p>
                    </div>
                    <ArrowRight className="text-pink-400 hidden md:block" size={20} />
                    <span className="text-pink-400 md:hidden">↓</span>
                    <div className="px-4 py-3 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[160px]">
                      <MessageCircle className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                      <p className="text-white font-bold text-sm">Tells Family</p>
                      <p className="text-slate-400 text-xs">&ldquo;This store gives cashback!&rdquo;</p>
                    </div>
                    <ArrowRight className="text-pink-400 hidden md:block" size={20} />
                    <span className="text-pink-400 md:hidden">↓</span>
                    <div className="px-4 py-3 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[160px]">
                      <Send className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <p className="text-white font-bold text-sm">WhatsApp Groups</p>
                      <p className="text-slate-400 text-xs">&ldquo;Better than Carrefour!&rdquo;</p>
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
                  <p className="text-3xl font-black text-pink-400">30%</p>
                  <p className="text-slate-400 text-xs">New customers from referrals</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center border border-purple-500/20">
                  <p className="text-3xl font-black text-purple-400">AED 0</p>
                  <p className="text-slate-400 text-xs">Marketing cost</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center border border-emerald-500/20">
                  <p className="text-3xl font-black text-emerald-400">3.8x</p>
                  <p className="text-slate-400 text-xs">Higher lifetime value</p>
                </div>
              </div>

              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-pink-500/10 border border-pink-500/30 rounded-2xl p-5 text-center">
                  <p className="text-white">
                    <span className="text-pink-400 font-bold">Grocery shopping is social.</span> When one family discovers you give rewards, their entire building finds out.
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
                <div className="bg-gradient-to-r from-[#c9a227]/20 to-emerald-500/20 border-2 border-[#c9a227]/50 rounded-2xl p-5">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#c9a227]/30 flex items-center justify-center flex-shrink-0">
                      <Coins className="w-8 h-8 text-[#c9a227]" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-[#c9a227] font-black text-xl mb-1">Your Branded Coins</h3>
                      <p className="text-white">Customers earn <span className="text-[#c9a227] font-bold">&ldquo;[Your Store] Coins&rdquo;</span> - not generic points. They see YOUR brand every time they check their balance, building loyalty to YOU over big chains.</p>
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
                  { icon: Users, title: 'Customer Database', desc: 'Full CRM with shopping habits', color: 'cyan' },
                  { icon: Bell, title: 'Campaign Manager', desc: 'Send offers to your customers', color: 'pink' },
                  { icon: Target, title: 'Location Targeting', desc: 'Reach customers within 3km', color: 'emerald' },
                  { icon: Gift, title: 'Offer Creator', desc: 'Weekly specials, flash sales', color: 'purple' },
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
                    { type: 'Weekly Deal', msg: '"This week: 2x coins on produce!"' },
                    { type: 'Win-Back', msg: '"Miss you! Bonus coins today"' },
                    { type: 'New Stock', msg: '"Fresh arrivals - earn coins!"' },
                    { type: 'Nearby', msg: '"You\'re close! Pop in for rewards"' }
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
                    q: '"7% cost on 8% margin? I barely break even!"',
                    a: "True for ONE transaction. But Nuqta customers visit 2.5x more often. On 3 visits: You earn AED 24 (8%×3), pay AED 21 (7%×3), keep AED 3 profit PLUS a loyal customer. Without Nuqta, that customer visits once = AED 8 total.",
                    icon: DollarSign
                  },
                  {
                    q: '"Can\'t I just compete on price instead?"',
                    a: "Big retailers have buying power you can't match. You can't out-discount them. But you CAN offer rewards + better service. Nuqta lets you compete on value, not price.",
                    icon: Target
                  },
                  {
                    q: '"My products are price-transparent"',
                    a: "Perfect! You can't discount, but Nuqta adds value without cutting your price. Customer pays full price to you, gets coins as a bonus. Your margin stays intact, they feel rewarded.",
                    icon: Smartphone
                  },
                  {
                    q: '"We already have a loyalty card"',
                    a: "Most house programs give discounts YOU fund 100%. Nuqta's coins can be spent at 500+ stores, making them more valuable to customers. You pay 7% vs their 10-15% discount, and customers are more motivated.",
                    icon: Users
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
                  Grocers <span className="text-[#c9a227]">Already Winning</span>
                </h1>
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-3 gap-4 mb-8 animate-[fadeIn_0.8s_ease-out_0.1s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { value: '2.5x', label: 'More Repeat Visits' },
                  { value: '+23%', label: 'Basket Size Increase' },
                  { value: '85%', label: 'Coin Redemption Rate' }
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
                    quote: "Same customers who used to visit once a month now come 2-3 times. They want to earn and spend their coins. It's brilliant.",
                    name: "Mini Mart Owner",
                    business: "Al Barsha, Dubai",
                    stat: "+150% visits",
                    verified: true
                  },
                  {
                    quote: "With 6% margins, I can't discount. Nuqta lets me compete with big chains without cutting prices. The ~7% total cost is worth it for the loyalty.",
                    name: "Grocery Store",
                    business: "Abu Dhabi",
                    stat: "Margin-safe",
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
                    <span className="text-red-400">Limited spots:</span> Only onboarding 10 grocers per area this month
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
                  Before Your <span className="text-[#c9a227]">Competitors</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    title: 'Area Exclusivity',
                    desc: 'We limit grocers per area. First to join gets priority over competitors.',
                    icon: Target
                  },
                  {
                    title: 'Founder Rates Locked',
                    desc: 'Current 7% commission is promotional. Rates increase next quarter for new signups.',
                    icon: Percent
                  },
                  {
                    title: '500K+ Users Ready',
                    desc: 'Nuqta users need groceries too. They\'ll choose you to earn coins.',
                    icon: Users
                  },
                  {
                    title: 'Zero Risk Trial',
                    desc: 'No upfront fees. No monthly charges. If it doesn\'t work in 30 days, walk away.',
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

      // ==================== SLIDE 10: PRICING ====================
      case 10:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-2">
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Percent className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">Simple Pricing</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Pay <span className="text-[#c9a227]">Only On Success</span>
                </h1>
              </div>

              {/* Pricing breakdown */}
              <div className="mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p className="text-[#c9a227] font-bold text-center mb-6">Total Cost: ~7% per Nuqta Sale</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center mb-4">
                    <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                      <p className="text-emerald-400 font-bold text-2xl">5%</p>
                      <p className="text-slate-400 text-sm">Cashback to Customer</p>
                      <p className="text-slate-500 text-xs">(Fixed rate - simple & predictable)</p>
                    </div>
                    <div className="p-4 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/20">
                      <p className="text-[#c9a227] font-bold text-2xl">~2%</p>
                      <p className="text-slate-400 text-sm">Nuqta Platform Fee</p>
                      <p className="text-slate-500 text-xs">(Includes PG fees)</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-center text-sm">No customers through Nuqta = AED 0 cost. Zero risk.</p>
                </div>
              </div>

              {/* What's included */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { icon: Store, label: 'App Listing' },
                  { icon: BarChart3, label: 'Dashboard' },
                  { icon: Users, label: 'Customer Insights' },
                  { icon: Zap, label: '24hr Support' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <item.icon className="w-6 h-6 text-[#c9a227] mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">{item.label}</p>
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
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-4xl w-full text-center px-2">
              <div className="animate-[slideDown_0.8s_ease-out]">
                <ShoppingCart className="w-16 h-16 text-[#c9a227] mx-auto mb-4" />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                  Ready to Win Against<br />
                  <span className="bg-gradient-to-r from-[#c9a227] to-emerald-400 bg-clip-text text-transparent">Big Chains</span>?
                </h1>
              </div>

              <div className="relative mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227]/20 to-emerald-500/20 rounded-3xl blur-xl" />
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
                      { day: 'Week 1', action: 'First Regulars!', icon: '🛒' }
                    ].map((step, idx) => (
                      <div key={idx} className="p-2 bg-white/5 rounded-lg">
                        <p className="text-2xl mb-1">{step.icon}</p>
                        <p className="text-[#c9a227] text-xs font-bold">{step.day}</p>
                        <p className="text-slate-400 text-xs">{step.action}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                    <a href="mailto:merchants@nuqtapp.com?subject=Supermarket Partnership - Schedule Setup Call" className="flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-full font-bold hover:bg-[#d4b03f] transition-colors">
                      <Mail size={20} />
                      Schedule Setup Call
                    </a>
                    <a href="tel:+971503764345" className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
                      <Phone size={20} />
                      +971 50 376 4345
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center">
                    {['Zero upfront cost', 'Built for thin margins', '2.5x repeat visits'].map((item, idx) => (
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

export default SupermarketDeck;
