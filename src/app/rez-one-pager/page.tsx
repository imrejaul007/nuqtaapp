'use client';

import React from 'react';
import Link from 'next/link';
import {
  Target, TrendingUp, Users, DollarSign, Store, MapPin,
  ArrowRight, ArrowLeft, Zap, CheckCircle, Coins, Globe,
  Rocket, Smartphone, Shield, BarChart3, Star
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ============================================
// ReZ ONE-PAGER — Print-friendly, single page summary
// Designed to be screenshot-able or saved as PDF
// ============================================

export default function ReZOnePagerPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Print-only styles */}
      <style>{`
        @media print {
          body { background: white !important; }
          .no-print { display: none !important; }
          .print-page { background: white !important; color: black !important; padding: 20px !important; }
          .print-page * { color: black !important; border-color: #ddd !important; }
          .print-page .text-orange-400 { color: #ea580c !important; }
          .print-page .text-green-400 { color: #16a34a !important; }
        }
      `}</style>

      {/* Header (no-print) */}
      <div className="no-print bg-gradient-to-r from-orange-900/40 via-red-900/30 to-orange-900/40 border-b border-orange-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/rez-financials/investors" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm">
            <ArrowLeft size={16} /> Back to Investor Strategy
          </Link>
          <button onClick={() => window.print()} className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-lg border border-orange-500/30 hover:bg-orange-500/30 text-sm font-medium">
            Print / Save as PDF
          </button>
        </div>
      </div>

      {/* One-Pager Content */}
      <div className="print-page max-w-4xl mx-auto px-4 sm:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-700/50 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <Coins size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white">ReZ</h1>
              <p className="text-sm text-orange-400">India&apos;s Cashback Ecosystem for Local Commerce</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-orange-400">$500K SAFE</p>
            <p className="text-xs text-slate-400">$5M cap &bull; 20% discount</p>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-5">
            {/* Problem */}
            <div>
              <h2 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Target size={14} /> The Problem
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Indian consumers spend <strong className="text-white">₹42 Lakh Crore</strong> at local shops annually but earn <strong className="text-red-400">zero rewards</strong>. Meanwhile, merchants pay 25-30% commission to Swiggy/Zomato with no affordable alternative for customer acquisition.
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-sm font-bold text-green-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Zap size={14} /> The Solution
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                ReZ is a <strong className="text-white">closed-loop cashback ecosystem</strong> for hyperlocal commerce. Merchants pay <strong className="text-green-400">5% commission</strong> (vs 30% on Swiggy). Consumers earn <strong className="text-green-400">ReZ Coins</strong> on every purchase, spendable at any merchant on the platform.
              </p>
            </div>

            {/* Business Model */}
            <div>
              <h2 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <DollarSign size={14} /> Revenue Model
              </h2>
              <div className="space-y-1 text-sm">
                {[
                  ['Transaction Commission', '5% of GMV (₹162.50/user/mo)'],
                  ['Promoted Listings', '5% promoted sales (₹32.50/user/mo)'],
                  ['Business Subscriptions', '₹1,500/mo per merchant'],
                  ['Affiliate Revenue', '₹10/user/mo brand partnerships'],
                  ['User Sub (ReZ+)', '₹49/mo premium (Year 2)'],
                  ['B2B Supply Chain', '₹500/merchant/mo (Year 2)'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-xs">
                    <span className="text-slate-400">{k}</span>
                    <span className="text-white font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Traction */}
            <div>
              <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Rocket size={14} /> Launch Plan
              </h2>
              <p className="text-sm text-slate-300">
                Bangalore-first across <strong className="text-white">4 zones</strong> (BTM, HSR, Koramangala, Jayanagar). <strong className="text-emerald-400">500+ merchants mapped</strong>. 12 acquisition channels. 10 college fests in M1. Campus ambassador program across 20 colleges.
              </p>
            </div>

            {/* Team */}
            <div>
              <h2 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users size={14} /> Team
              </h2>
              <p className="text-sm text-slate-300">
                <strong className="text-white">Rejaul Karim</strong> — Founder & CEO. Built comprehensive financial models, acquisition playbooks, and merchant onboarding systems. Team scales 4 → 8 → 15 → 35 → 50+ across 3 years.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {/* Key Metrics */}
            <div>
              <h2 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BarChart3 size={14} /> Key Metrics
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'AOV', value: '₹650' },
                  { label: 'ARPU', value: '₹195/mo' },
                  { label: 'LTV', value: '₹3,900' },
                  { label: 'CAC', value: '₹76' },
                  { label: 'LTV:CAC', value: '51.3x' },
                  { label: 'Payback', value: '<1 month' },
                ].map(m => (
                  <div key={m.label} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-2 text-center">
                    <p className="text-xs text-slate-400">{m.label}</p>
                    <p className="text-lg font-bold text-white">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Projections */}
            <div>
              <h2 className="text-sm font-bold text-green-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <TrendingUp size={14} /> 3-Year Projections
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-slate-700/50">
                      <th className="text-left py-1.5 text-slate-400">Metric</th>
                      <th className="text-right py-1.5 text-slate-400">Y1</th>
                      <th className="text-right py-1.5 text-slate-400">Y2</th>
                      <th className="text-right py-1.5 text-slate-400">Y3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Users', '35K', '1.5M', '5M'],
                      ['Merchants', '500+', '12K', '40K'],
                      ['Cities', '32', '120', '300'],
                      ['Revenue', '₹10 Cr', '₹153 Cr', '₹601 Cr'],
                      ['Net Margin', '6%', '-48%', '34.5%'],
                      ['Valuation', '$24M', '$185M', '$725M'],
                    ].map(([m, y1, y2, y3]) => (
                      <tr key={m} className="border-b border-slate-700/30">
                        <td className="py-1.5 text-white font-medium">{m}</td>
                        <td className="py-1.5 text-right text-slate-300">{y1}</td>
                        <td className="py-1.5 text-right text-slate-300">{y2}</td>
                        <td className="py-1.5 text-right text-green-400 font-medium">{y3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Competition */}
            <div>
              <h2 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Shield size={14} /> vs Competition
              </h2>
              <div className="space-y-1 text-xs">
                {[
                  ['Swiggy/Zomato', '25-30% commission', 'ReZ: 5%'],
                  ['CRED', 'Credit cards only', 'ReZ: All payments'],
                  ['MagicPin', 'Coupon-based', 'ReZ: Closed-loop coins'],
                  ['Paytm', 'No discovery/rewards', 'ReZ: Full ecosystem'],
                ].map(([comp, weakness, edge]) => (
                  <div key={comp} className="flex items-center justify-between">
                    <span className="text-white font-medium">{comp}</span>
                    <span className="text-red-400">{weakness}</span>
                    <span className="text-green-400 font-medium">{edge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Ask */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-4">
              <h2 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Star size={14} /> The Ask
              </h2>
              <div className="space-y-1 text-sm">
                {[
                  ['Instrument', 'SAFE (iSAFE)'],
                  ['Amount', '$500K (₹4.15 Cr)'],
                  ['Valuation Cap', '$5M'],
                  ['Discount', '20%'],
                  ['Min Check', '₹20L ($25K)'],
                  ['Pro-Rata', 'Yes'],
                  ['Target Close', 'Q2 2026'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-xs">
                    <span className="text-slate-400">{k}</span>
                    <span className="text-orange-400 font-bold">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="text-center bg-slate-800/30 rounded-xl p-3">
              <p className="text-sm text-white font-bold">Rejaul Karim — Founder & CEO</p>
              <p className="text-xs text-orange-400">rejaul@nuqtaapp.com</p>
              <p className="text-xs text-slate-400 mt-1">nuqtaapp.com/rez-financials &bull; nuqtaapp.com/rez-deck</p>
            </div>
          </div>
        </div>
      </div>

      <div className="no-print">
        <GlobalFooter />
      </div>
    </div>
  );
}
