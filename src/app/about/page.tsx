'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Target,
  Heart,
  Globe,
  Users,
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  Award,
  MapPin,
  Building2,
  Rocket,
  CheckCircle2
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'User-First',
      description: 'Every decision starts with "How does this help our users save more?"'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'No hidden fees, no tricks. What you see is what you save.'
    },
    {
      icon: Zap,
      title: 'Simplicity',
      description: 'Powerful technology, effortless experience. Saving should be automatic.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We grow together - users, merchants, and partners all win.'
    }
  ];

  const milestones = [
    { year: '2024', event: 'Nuqta founded in Dubai, UAE' },
    { year: '2025', event: 'Platform development & merchant partnerships' },
    { year: '2025', event: 'Beta launch with 16+ premium partners' },
    { year: '2026', event: 'Public launch across UAE' },
  ];

  const team = [
    {
      name: 'Rejaul Karim',
      role: 'Founder & CEO',
      description: 'Visionary entrepreneur building the future of smart savings in the GCC'
    },
    {
      name: 'Leadership Team',
      role: 'C-Suite Executives',
      description: '6 dedicated executives covering CEO, CFO, COO, CMO, CPO, and CHRO functions'
    }
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
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-6">
            <Building2 size={16} className="text-[#c9a227]" />
            <span className="text-[#c9a227] text-sm font-medium">About Nuqta</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
            Building the Future of <span className="text-[#c9a227]">Smart Savings</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Nuqta is transforming how people save money on everyday purchases across the UAE and GCC.
            We&apos;re creating a world where saving is automatic, rewarding, and delightful.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 sm:mb-16">
          <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border border-[#c9a227]/30 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center">
                <Target size={24} className="text-[#c9a227]" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              To make saving money effortless for every resident in the GCC. We believe everyone deserves
              to keep more of what they earn, without clipping coupons or hunting for deals.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Globe size={24} className="text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              To become the default savings layer for offline commerce in the Middle East —
              the first app people open before any purchase, trusted by millions.
            </p>
          </div>
        </div>

        {/* The Problem We Solve */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">The Problem We&apos;re Solving</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-black text-red-400 mb-2">70%</div>
              <p className="text-slate-400">of retail spending is still offline, yet digital savings tools ignore it</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-orange-400 mb-2">AED 50B+</div>
              <p className="text-slate-400">spent annually by UAE residents with no easy way to save</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-400 mb-2">0</div>
              <p className="text-slate-400">apps that make offline saving automatic and universal</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-[#c9a227]/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#c9a227]/20 flex items-center justify-center mb-4">
                  <value.icon size={20} className="text-[#c9a227]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How Nuqta Works */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">How Nuqta Works</h2>
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Search', desc: 'Find deals near you before you shop' },
              { step: '2', title: 'Shop', desc: 'Pay normally at any partner merchant' },
              { step: '3', title: 'Snap', desc: 'Take a photo of your receipt' },
              { step: '4', title: 'Save', desc: 'Earn Nuqta Coins instantly (1 Coin = 1 AED)' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-3">
                  <span className="text-emerald-400 font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 sm:mb-16">
          <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-4 sm:p-6 text-center">
            <div className="text-3xl sm:text-4xl font-black text-[#c9a227]">16+</div>
            <div className="text-slate-400 text-sm">Premium Partners</div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 sm:p-6 text-center">
            <div className="text-3xl sm:text-4xl font-black text-blue-400">500+</div>
            <div className="text-slate-400 text-sm">Merchant Locations</div>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 sm:p-6 text-center">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400">5-25%</div>
            <div className="text-slate-400 text-sm">Cashback Range</div>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 sm:p-6 text-center">
            <div className="text-3xl sm:text-4xl font-black text-purple-400">UAE</div>
            <div className="text-slate-400 text-sm">Launch Market</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 transform sm:-translate-x-1/2"></div>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center gap-4 sm:gap-8 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  <div className="hidden sm:block sm:w-1/2"></div>
                  <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-[#c9a227] rounded-full transform -translate-x-1/2 z-10"></div>
                  <div className="ml-10 sm:ml-0 sm:w-1/2 bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                    <div className="text-[#c9a227] font-bold mb-1">{milestone.year}</div>
                    <p className="text-slate-300">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Leadership</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center mx-auto mb-4">
                  <Users size={28} className="text-black" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#c9a227] text-sm mb-3">{member.role}</p>
                <p className="text-slate-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/team" className="inline-flex items-center gap-2 text-[#c9a227] hover:underline">
              Meet the full team <ArrowLeft size={16} className="rotate-180" />
            </Link>
          </div>
        </div>

        {/* Location */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={24} className="text-[#c9a227]" />
            <h2 className="text-2xl font-bold">Based in Dubai, UAE</h2>
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Nuqta is headquartered in Dubai, at the heart of the GCC&apos;s vibrant consumer economy.
            We&apos;re building for the region, by people who understand it.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#e8c547]/10 border border-[#c9a227]/30 rounded-2xl p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Saving?</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Join thousands of smart shoppers who are already saving on every purchase with Nuqta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/features"
              className="px-6 py-3 bg-[#c9a227] text-black font-bold rounded-lg hover:bg-[#e8c547] transition-colors"
            >
              Explore Features
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-slate-800 border border-slate-700 text-white font-medium rounded-lg hover:border-slate-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
