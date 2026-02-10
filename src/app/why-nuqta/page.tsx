'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Zap,
  Target,
  Shield,
  Coins,
  Users,
  Store,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Clock,
  CreditCard,
  Smartphone,
  Search,
  Gift,
  Crown,
  Heart,
  Wallet,
  MapPin,
  DollarSign,
  BarChart3,
  Repeat,
  Lock,
  Coffee,
  Scissors,
  Dumbbell,
  ShoppingBag,
  Camera,
  Globe,
  Building2,
  Sparkles,
  Receipt
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function WhyNuqtaPage() {
  // What is Nuqta - Quick facts
  const quickFacts = [
    { label: 'Founded', value: '2024', subtext: 'Dubai, UAE' },
    { label: 'Cashback', value: '5-25%', subtext: 'On every purchase' },
    { label: 'Partners', value: '500+', subtext: 'Local merchants' },
    { label: 'Cost', value: 'Free', subtext: 'No subscription needed' },
  ];

  // How it works - 4 steps
  const howItWorks = [
    { step: '1', icon: Search, title: 'Search', desc: 'Find deals near you' },
    { step: '2', icon: Store, title: 'Shop', desc: 'Pay at partner merchant' },
    { step: '3', icon: Camera, title: 'Snap', desc: 'Upload your receipt' },
    { step: '4', icon: Coins, title: 'Save', desc: 'Earn Nuqta Coins' },
  ];

  // Merchant categories
  const merchantCategories = [
    { icon: Coffee, name: 'Cafes & Restaurants', count: '150+' },
    { icon: Scissors, name: 'Salons & Spas', count: '80+' },
    { icon: Dumbbell, name: 'Gyms & Fitness', count: '50+' },
    { icon: ShoppingBag, name: 'Fashion & Retail', count: '100+' },
    { icon: Store, name: 'Supermarkets', count: '60+' },
    { icon: Sparkles, name: 'Beauty & Wellness', count: '60+' },
  ];

  // Problems
  const problems = [
    {
      stat: '70%',
      problem: 'of retail spending is offline',
      detail: 'Yet digital savings tools completely ignore it'
    },
    {
      stat: 'AED 2.4B',
      problem: 'lost annually by UAE residents',
      detail: '95% of offline spending gets ZERO cashback'
    },
    {
      stat: '1-2%',
      problem: 'is all credit cards offer',
      detail: 'And only at select merchants with complex tiers'
    },
    {
      stat: 'AED 200+',
      problem: 'cost to acquire one customer',
      detail: 'Small merchants can\'t compete with big players'
    }
  ];

  // Solutions
  const solutions = [
    {
      icon: Search,
      title: 'Search-First Discovery',
      problem: 'Other apps: Hunt for deals after deciding where to shop',
      solution: 'Nuqta: Find the best cashback BEFORE you choose where to go',
      benefit: 'Saves time and maximizes every purchase'
    },
    {
      icon: Wallet,
      title: 'Payment Agnostic',
      problem: 'Other apps: Requires linking cards or specific payment methods',
      solution: 'Nuqta: Works with cash, card, Apple Pay, or any payment',
      benefit: '60% of Dubai retail is cash-only — we include everyone'
    },
    {
      icon: Coins,
      title: 'Universal Coins',
      problem: 'Other apps: Points locked to one merchant or complex conversion',
      solution: 'Nuqta: 1 Coin = 1 AED, usable at ANY partner merchant',
      benefit: 'True flexibility — spend your savings where you want'
    },
    {
      icon: Repeat,
      title: 'Habit-Forming Rewards',
      problem: 'Other apps: One-time discounts that don\'t build loyalty',
      solution: 'Nuqta: Streak rewards and challenges that grow over time',
      benefit: '6x monthly transactions vs 2-3x for competitors'
    },
    {
      icon: Store,
      title: 'Merchant-Friendly Model',
      problem: 'Other apps: High upfront fees, complex contracts, low ROI',
      solution: 'Nuqta: Pay only when you make money, free POS included',
      benefit: 'AED 15 CAC vs AED 200+ on traditional ads'
    },
    {
      icon: Shield,
      title: 'No Subscription Required',
      problem: 'Other apps: Annual fees (Entertainer AED 495/year)',
      solution: 'Nuqta: Free forever, with optional Nuqta+ for power users',
      benefit: 'Start saving immediately, upgrade when ready'
    }
  ];

  // Nuqta+ features
  const nuqtaPlusFeatures = [
    { icon: Crown, text: '16+ premium partners (Careem, Talabat, Noon, etc.)' },
    { icon: TrendingUp, text: 'Up to 25% cashback (vs 10% standard)' },
    { icon: Zap, text: 'Priority receipt processing' },
    { icon: Users, text: 'Dedicated customer support' },
    { icon: Gift, text: 'Member-only promotions' },
    { icon: BarChart3, text: 'Advanced savings analytics' },
  ];

  // Comparison features
  const comparisonFeatures = [
    { feature: 'Search-first discovery', nuqta: true, cards: false, entertainer: false, apps: false },
    { feature: 'Works with cash payments', nuqta: true, cards: false, entertainer: true, apps: false },
    { feature: 'Instant cashback (not points)', nuqta: true, cards: false, entertainer: false, apps: true },
    { feature: 'Local merchant focus', nuqta: true, cards: false, entertainer: false, apps: false },
    { feature: 'No subscription required', nuqta: true, cards: false, entertainer: false, apps: true },
    { feature: 'Works on repeat visits', nuqta: true, cards: true, entertainer: false, apps: true },
    { feature: 'Streak & challenge rewards', nuqta: true, cards: false, entertainer: false, apps: false },
    { feature: 'Universal redemption', nuqta: true, cards: false, entertainer: false, apps: false },
    { feature: '5%+ cashback rates', nuqta: true, cards: false, entertainer: true, apps: true },
    { feature: 'No card linking required', nuqta: true, cards: false, entertainer: true, apps: false },
  ];

  // User benefits
  const userBenefits = [
    {
      icon: DollarSign,
      title: '5-25% Cashback',
      description: '5x better than credit card rewards on everyday purchases'
    },
    {
      icon: MapPin,
      title: 'Local Discovery',
      description: 'Find the best deals near you before you shop'
    },
    {
      icon: Coins,
      title: '1 Coin = 1 AED',
      description: 'Real money, not confusing points or miles'
    },
    {
      icon: Gift,
      title: 'Streak Rewards',
      description: 'Visit 4 times this month, get 5% extra cashback'
    },
    {
      icon: Smartphone,
      title: 'Works Everywhere',
      description: 'Cash, card, Apple Pay — any payment method works'
    },
    {
      icon: Heart,
      title: 'Free Forever',
      description: 'No subscription needed to start saving'
    }
  ];

  // Merchant benefits
  const merchantBenefits = [
    {
      icon: TrendingUp,
      title: 'AED 15 CAC',
      description: 'vs AED 200+ on Google Ads — 10x more efficient'
    },
    {
      icon: Users,
      title: 'New Customers',
      description: 'Get discovered by thousands of Nuqta users near you'
    },
    {
      icon: BarChart3,
      title: 'Free POS Software',
      description: 'Modern point-of-sale with analytics included'
    },
    {
      icon: Repeat,
      title: 'Build Loyalty',
      description: 'Streak rewards drive repeat visits without discounting'
    },
    {
      icon: DollarSign,
      title: 'Pay for Results',
      description: 'Only pay when customers actually buy'
    },
    {
      icon: Shield,
      title: 'No Upfront Fees',
      description: 'Start free, scale when you see results'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: 'Finally, a rewards app that works at my neighborhood cafe, not just big chains.',
      author: 'Sarah K.',
      role: 'Dubai Marina resident'
    },
    {
      quote: 'The streak rewards got me hooked. I\'ve saved AED 500+ this month alone.',
      author: 'Ahmed M.',
      role: 'Nuqta+ member'
    },
    {
      quote: 'Our foot traffic increased 40% in the first month. Best marketing investment ever.',
      author: 'Fresh Bites Cafe',
      role: 'Partner merchant'
    }
  ];

  // FAQ
  const faqs = [
    {
      q: 'What is Nuqta?',
      a: 'Nuqta is a smart savings app that gives you 5-25% cashback on everyday purchases at local merchants across the UAE. Shop, snap your receipt, earn Nuqta Coins (1 Coin = 1 AED).'
    },
    {
      q: 'How do I earn cashback?',
      a: 'Search for deals → Shop at partner merchants → Upload your receipt → Coins credited in minutes. Works with any payment method.'
    },
    {
      q: 'Is Nuqta free?',
      a: 'Yes! The basic app is 100% free. Nuqta+ (AED 99/month) offers enhanced rates up to 25% and exclusive partner access.'
    },
    {
      q: 'Where can I use Nuqta?',
      a: 'Currently available across UAE (Dubai, Abu Dhabi, Sharjah, and more) with 500+ partner merchants in cafes, salons, gyms, retail, and more.'
    },
    {
      q: 'How is Nuqta different from Entertainer?',
      a: 'Entertainer: AED 495/year, buy-1-get-1, one-time use, chains only. Nuqta: Free, 5-25% cashback, works on every visit, local merchants.'
    },
    {
      q: 'Do my coins expire?',
      a: 'No! Nuqta Coins remain valid as long as your account is active. Use them anytime at any partner merchant.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-[#0a1628]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm">Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
              <span className="text-black font-bold text-sm">N</span>
            </div>
            <span className="font-bold text-lg">Nuqta</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero - What is Nuqta */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-6">
            <Zap size={16} className="text-[#c9a227]" />
            <span className="text-[#c9a227] text-sm font-medium">Everything About Nuqta</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
            The Smart Way to <span className="text-[#c9a227]">Save Money</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-6">
            <strong>Nuqta</strong> is a rewards app that gives you <span className="text-[#c9a227] font-bold">5-25% cashback</span> on
            everyday purchases at local merchants across the UAE. Search for deals, shop anywhere,
            snap your receipt, and earn Nuqta Coins. <span className="text-emerald-400 font-bold">1 Coin = 1 AED</span>.
          </p>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-8">
            {quickFacts.map((fact, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-3 text-center">
                <div className="text-xl font-black text-[#c9a227]">{fact.value}</div>
                <div className="text-xs text-slate-400">{fact.label}</div>
                <div className="text-xs text-slate-500">{fact.subtext}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/features"
              className="px-6 py-3 bg-[#c9a227] text-black font-bold rounded-lg hover:bg-[#e8c547] transition-colors"
            >
              Explore Features
            </Link>
            <Link
              href="/faq"
              className="px-6 py-3 bg-slate-800 border border-slate-700 text-white font-medium rounded-lg hover:border-slate-600 transition-colors"
            >
              Read Full FAQ
            </Link>
          </div>
        </div>

        {/* How It Works - Quick Version */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">How Nuqta Works</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-3">
                  <item.icon size={24} className="text-emerald-400" />
                </div>
                <div className="text-xs text-emerald-400 font-bold mb-1">STEP {item.step}</div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/how-it-works" className="text-emerald-400 hover:underline text-sm font-medium inline-flex items-center gap-1">
              See detailed guide <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Where to Use - Merchant Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Where Can You Use Nuqta?</h2>
          <p className="text-slate-400 text-center mb-6 max-w-2xl mx-auto">
            Available across the <span className="text-white font-medium">UAE</span> — Dubai, Abu Dhabi, Sharjah, and more.
            500+ partner merchants in these categories:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {merchantCategories.map((cat, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center hover:border-[#c9a227]/50 transition-colors">
                <cat.icon size={24} className="text-[#c9a227] mx-auto mb-2" />
                <p className="font-medium text-sm mb-1">{cat.name}</p>
                <p className="text-xs text-slate-500">{cat.count} merchants</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Problem */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">The Problem Today</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {problems.map((item, index) => (
              <div key={index} className="bg-red-500/10 border border-red-500/30 rounded-xl p-5 text-center">
                <div className="text-3xl font-black text-red-400 mb-2">{item.stat}</div>
                <p className="font-medium text-white mb-1">{item.problem}</p>
                <p className="text-slate-400 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Nuqta Solution */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">How Nuqta Solves This</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We built Nuqta from the ground up to fix what&apos;s broken about offline rewards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-[#c9a227]" />
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <XCircle size={16} className="text-red-400 flex-shrink-0 mt-1" />
                    <p className="text-slate-400 text-sm">{item.problem}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-1" />
                    <p className="text-slate-300 text-sm">{item.solution}</p>
                  </div>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
                  <p className="text-emerald-400 text-sm font-medium">{item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nuqta+ Section */}
        <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown size={28} className="text-purple-400" />
            <h2 className="text-2xl font-bold">What is Nuqta+?</h2>
          </div>
          <p className="text-center text-slate-300 max-w-2xl mx-auto mb-6">
            Our premium membership for power savers. <span className="text-purple-400 font-bold">AED 99/month</span> — worth over AED 1,600 in partner discounts.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {nuqtaPlusFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-3">
                <feature.icon size={18} className="text-purple-400 flex-shrink-0" />
                <span className="text-sm text-slate-300">{feature.text}</span>
              </div>
            ))}
          </div>
          <div className="text-center space-y-2">
            <p className="text-slate-400 text-sm">
              <span className="text-white font-medium">For Corporates:</span> AED 1/employee/month •
              <span className="text-white font-medium"> For Universities:</span> FREE for students
            </p>
            <Link href="/nuqta-plus" className="inline-flex items-center gap-1 text-purple-400 hover:underline text-sm font-medium">
              Learn more about Nuqta+ <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Nuqta vs The Competition</h2>
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-4 sm:p-6 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-3 text-slate-400 font-medium">Feature</th>
                  <th className="text-center py-3 px-3">
                    <span className="text-[#c9a227] font-bold">Nuqta</span>
                  </th>
                  <th className="text-center py-3 px-3 text-slate-400">Credit Cards</th>
                  <th className="text-center py-3 px-3 text-slate-400">Entertainer</th>
                  <th className="text-center py-3 px-3 text-slate-400">Other Apps</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="border-b border-slate-700/50">
                    <td className="py-3 px-3 text-slate-300 text-sm">{row.feature}</td>
                    <td className="py-3 px-3 text-center">
                      {row.nuqta ? (
                        <CheckCircle2 size={20} className="text-emerald-400 mx-auto" />
                      ) : (
                        <XCircle size={20} className="text-slate-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-3 text-center">
                      {row.cards ? (
                        <CheckCircle2 size={20} className="text-slate-500 mx-auto" />
                      ) : (
                        <XCircle size={20} className="text-slate-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-3 text-center">
                      {row.entertainer ? (
                        <CheckCircle2 size={20} className="text-slate-500 mx-auto" />
                      ) : (
                        <XCircle size={20} className="text-slate-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-3 text-center">
                      {row.apps ? (
                        <CheckCircle2 size={20} className="text-slate-500 mx-auto" />
                      ) : (
                        <XCircle size={20} className="text-slate-600 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <p className="text-slate-400 text-sm">
              Nuqta: <span className="text-emerald-400 font-bold">10/10</span> features •
              Credit Cards: <span className="text-slate-400">1/10</span> •
              Entertainer: <span className="text-slate-400">2/10</span> •
              Other Apps: <span className="text-slate-400">3/10</span>
            </p>
          </div>
        </div>

        {/* Benefits for Users */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">For Smart Shoppers</h2>
            <p className="text-slate-400">Why thousands choose Nuqta for their everyday purchases</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {userBenefits.map((benefit, index) => (
              <div key={index} className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <benefit.icon size={20} className="text-emerald-400" />
                  <h3 className="font-bold">{benefit.title}</h3>
                </div>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits for Merchants */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">For Merchants</h2>
            <p className="text-slate-400">Why 500+ local businesses trust Nuqta</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {merchantBenefits.map((benefit, index) => (
              <div key={index} className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <benefit.icon size={20} className="text-blue-400" />
                  <h3 className="font-bold">{benefit.title}</h3>
                </div>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/merchant-playbook" className="text-blue-400 hover:underline text-sm font-medium inline-flex items-center gap-1">
              See full merchant benefits <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Quick Answers</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                <h3 className="font-bold text-[#c9a227] mb-2">{faq.q}</h3>
                <p className="text-slate-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/faq" className="text-[#c9a227] hover:underline text-sm font-medium inline-flex items-center gap-1">
              See all FAQs <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* The Numbers */}
        <div className="bg-gradient-to-br from-[#c9a227]/10 to-transparent border border-[#c9a227]/30 rounded-2xl p-6 sm:p-10 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">The Numbers Don&apos;t Lie</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-black text-[#c9a227] mb-2">5-25%</div>
              <p className="text-slate-300">Cashback on every purchase</p>
              <p className="text-slate-500 text-sm">vs 1-2% credit cards</p>
            </div>
            <div>
              <div className="text-4xl font-black text-[#c9a227] mb-2">6x</div>
              <p className="text-slate-300">Monthly transactions</p>
              <p className="text-slate-500 text-sm">vs 2-3x for competitors</p>
            </div>
            <div>
              <div className="text-4xl font-black text-[#c9a227] mb-2">AED 15</div>
              <p className="text-slate-300">Customer acquisition cost</p>
              <p className="text-slate-500 text-sm">vs AED 200+ traditional</p>
            </div>
            <div>
              <div className="text-4xl font-black text-[#c9a227] mb-2">500+</div>
              <p className="text-slate-300">Local merchants</p>
              <p className="text-slate-500 text-sm">and growing daily</p>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Building2 size={24} className="text-slate-400" />
            <h2 className="text-xl font-bold">About the Company</h2>
          </div>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-slate-400 mb-4">
              Founded in <span className="text-white font-medium">2024</span> in Dubai, UAE by
              <span className="text-white font-medium"> Rejaul Karim</span>. Nuqta is building the future of
              smart savings in the GCC with a team of 6 dedicated C-Suite executives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="text-[#c9a227] hover:underline text-sm font-medium inline-flex items-center gap-1">
                Read our story <ArrowRight size={14} />
              </Link>
              <Link href="/team" className="text-slate-400 hover:text-white text-sm font-medium inline-flex items-center gap-1">
                Meet the team <ArrowRight size={14} />
              </Link>
              <Link href="/careers" className="text-slate-400 hover:text-white text-sm font-medium inline-flex items-center gap-1">
                Join us <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-500/5 border border-emerald-500/30 rounded-2xl p-6 sm:p-10 text-center">
          <Zap size={40} className="text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Stop Missing Out?
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Every purchase without Nuqta is money left on the table.
            Join thousands already saving 5-25% on every offline purchase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/features"
              className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors text-lg"
            >
              Start Saving Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-slate-800 border border-slate-700 text-white font-medium rounded-lg hover:border-slate-600 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
          <p className="text-slate-500 text-sm mt-4">
            Free to use. No credit card required. Start in 2 minutes.
          </p>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
