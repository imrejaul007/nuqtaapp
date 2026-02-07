'use client';

import React, { useState } from 'react';
import GlobalFooter from '@/components/GlobalFooter';
import {
  DollarSign,
  PieChart,
  FileText,
  Users,
  CheckCircle,
  AlertTriangle,
  Download,
  Copy,
  Building2,
  TrendingUp,
  Target,
  Calendar,
  Briefcase,
  Shield,
  Award,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Clock,
  Zap,
  BarChart3,
  ArrowRight,
  Star,
  Globe,
  Coffee,
  Scissors,
  ShoppingCart,
  Store
} from 'lucide-react';

/**
 * FUNDING DOCUMENTS CENTER
 *
 * Complete investor-ready documentation:
 * - Cap Table
 * - SAFE Agreement
 * - Use of Funds
 * - LOI Evidence
 * - Term Sheet
 * - Team Bios
 */

export default function FundingDocsPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'captable', label: 'Cap Table', icon: PieChart },
    { id: 'safe', label: 'SAFE Agreement', icon: FileText },
    { id: 'usefunds', label: 'Use of Funds', icon: DollarSign },
    { id: 'loi', label: 'LOI Evidence', icon: CheckCircle },
    { id: 'termsheet', label: 'Term Sheet', icon: Briefcase },
    { id: 'team', label: 'Team Bios', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-[#c9a227]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center flex-shrink-0">
              <DollarSign size={24} className="text-[#0a1628] sm:w-8 sm:h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Funding Documents Center</h1>
              <p className="text-slate-400 text-sm sm:text-base">Investor-Ready Documentation Package</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <span className="px-2 sm:px-3 py-1 bg-[#c9a227]/20 text-[#c9a227] rounded-full">SAFE: $400K</span>
            <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-400 rounded-full">Cap: $5M</span>
            <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">Close: Mar 2026</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-white/10 sticky top-0 bg-[#0a1628]/95 backdrop-blur-xl z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-[#0a1628]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {activeTab === 'overview' && <OverviewSection onNavigate={setActiveTab} />}
        {activeTab === 'captable' && <CapTableSection />}
        {activeTab === 'safe' && <SAFESection />}
        {activeTab === 'usefunds' && <UseFundsSection />}
        {activeTab === 'loi' && <LOISection />}
        {activeTab === 'termsheet' && <TermSheetSection />}
        {activeTab === 'team' && <TeamBiosSection />}
      </div>

      <GlobalFooter />
    </div>
  );
}

// ============================================
// OVERVIEW SECTION
// ============================================
function OverviewSection({ onNavigate }: { onNavigate: (tab: string) => void }) {
  return (
    <div className="space-y-8">
      {/* Funding Summary */}
      <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 rounded-2xl p-8 border border-[#c9a227]/30">
        <h2 className="text-2xl font-bold text-white mb-6">SAFE Round Summary</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          <div className="p-3 sm:p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-xs sm:text-sm">Target Raise</p>
            <p className="text-2xl sm:text-3xl font-bold text-[#c9a227]">$400K</p>
            <p className="text-slate-500 text-xs mt-1">~AED 1.47M</p>
          </div>
          <div className="p-3 sm:p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-xs sm:text-sm">Valuation Cap</p>
            <p className="text-2xl sm:text-3xl font-bold text-white">$5M</p>
            <p className="text-slate-500 text-xs mt-1">~AED 18.4M</p>
          </div>
          <div className="p-3 sm:p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-xs sm:text-sm">Discount</p>
            <p className="text-2xl sm:text-3xl font-bold text-white">20%</p>
            <p className="text-slate-500 text-xs mt-1">On next round</p>
          </div>
          <div className="p-3 sm:p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-xs sm:text-sm">Min Ticket</p>
            <p className="text-2xl sm:text-3xl font-bold text-white">$25K</p>
            <p className="text-slate-500 text-xs mt-1">~AED 92K</p>
          </div>
        </div>
      </div>

      {/* Document Checklist */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <CheckCircle className="text-green-400" />
          Investor Document Checklist
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {[
            { doc: 'Pitch Deck (90-Second)', status: 'complete', link: '/deck-90', isExternal: true },
            { doc: 'Full Investor Deck', status: 'complete', link: '/deck-kang', isExternal: true },
            { doc: 'Investment Memo', status: 'complete', link: '/memo', isExternal: true },
            { doc: 'Financial Projections', status: 'complete', link: '/financialprojection', isExternal: true },
            { doc: 'Financial Models (P&L)', status: 'complete', link: '/financial-models', isExternal: true },
            { doc: 'Data Room', status: 'complete', link: '/data-room', isExternal: true },
            { doc: 'Competitor Analysis', status: 'complete', link: '/competitor-analysis', isExternal: true },
            { doc: 'Investor FAQ', status: 'complete', link: '/investor-faq', isExternal: true },
            { doc: 'Cap Table', status: 'complete', link: 'captable', isExternal: false },
            { doc: 'SAFE Agreement', status: 'complete', link: 'safe', isExternal: false },
            { doc: 'Use of Funds', status: 'complete', link: 'usefunds', isExternal: false },
            { doc: 'LOI Evidence', status: 'complete', link: 'loi', isExternal: false },
            { doc: 'Term Sheet', status: 'complete', link: 'termsheet', isExternal: false },
            { doc: 'Team Bios', status: 'complete', link: 'team', isExternal: false },
            { doc: 'Product Demo Video', status: 'pending', link: null, isExternal: false },
            { doc: 'Customer Testimonials', status: 'pending', link: null, isExternal: false },
          ].map((item, idx) => (
            <div key={idx} className={`flex items-center justify-between p-4 rounded-xl ${
              item.status === 'complete' ? 'bg-green-500/10 border border-green-500/30' : 'bg-yellow-500/10 border border-yellow-500/30'
            }`}>
              <div className="flex items-center gap-3">
                {item.status === 'complete' ? (
                  <CheckCircle size={20} className="text-green-400" />
                ) : (
                  <AlertTriangle size={20} className="text-yellow-400" />
                )}
                <span className="text-white">{item.doc}</span>
              </div>
              {item.link && item.isExternal && (
                <a href={item.link} className="text-[#c9a227] text-sm hover:underline">View</a>
              )}
              {item.link && !item.isExternal && (
                <button onClick={() => onNavigate(item.link)} className="text-[#c9a227] text-sm hover:underline">View</button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-green-500/10 rounded-xl border border-green-500/30">
          <p className="text-green-400 font-bold">Document Readiness: 87% Complete</p>
          <p className="text-slate-400 text-sm mt-1">14 of 16 documents ready. Missing: Product demo video and customer testimonials (need live merchants).</p>
        </div>
      </div>

      {/* Key Investment Highlights */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Key Investment Highlights</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { metric: 'LTV:CAC Ratio', value: '16.8x', benchmark: 'Top 10% of consumer apps', color: 'green' },
            { metric: 'Gross Margin', value: '100%', benchmark: 'No COGS - pure platform', color: 'green' },
            { metric: 'TAM (UAE)', value: 'AED 50B+', benchmark: 'Consumer spending market', color: 'blue' },
            { metric: 'Unit Economics', value: 'AED 504 LTV', benchmark: 'AED 30 CAC', color: 'green' },
            { metric: 'Revenue Model', value: '5-15%', benchmark: 'Merchant commission', color: 'blue' },
            { metric: 'Break-even', value: 'Month 18', benchmark: 'At 50K users', color: 'yellow' },
          ].map((item, idx) => (
            <div key={idx} className={`p-4 rounded-xl border ${
              item.color === 'green' ? 'bg-green-500/10 border-green-500/30' :
              item.color === 'blue' ? 'bg-blue-500/10 border-blue-500/30' :
              'bg-yellow-500/10 border-yellow-500/30'
            }`}>
              <p className="text-slate-400 text-sm">{item.metric}</p>
              <p className={`text-2xl font-bold ${
                item.color === 'green' ? 'text-green-400' :
                item.color === 'blue' ? 'text-blue-400' : 'text-yellow-400'
              }`}>{item.value}</p>
              <p className="text-slate-500 text-xs mt-1">{item.benchmark}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// CAP TABLE SECTION
// ============================================
function CapTableSection() {
  return (
    <div className="space-y-8">
      {/* Current Cap Table */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <PieChart className="text-[#c9a227]" />
          Current Cap Table (Pre-Seed)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-slate-400 font-medium">Shareholder</th>
                <th className="text-left py-4 px-4 text-slate-400 font-medium">Role</th>
                <th className="text-right py-4 px-4 text-slate-400 font-medium">Shares</th>
                <th className="text-right py-4 px-4 text-slate-400 font-medium">Ownership %</th>
                <th className="text-left py-4 px-4 text-slate-400 font-medium">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5">
                <td className="py-4 px-4 text-white font-medium">Founder (CEO)</td>
                <td className="py-4 px-4 text-slate-300">Chief Executive Officer</td>
                <td className="py-4 px-4 text-right text-white">8,500,000</td>
                <td className="py-4 px-4 text-right text-[#c9a227] font-bold">85%</td>
                <td className="py-4 px-4"><span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Common</span></td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="py-4 px-4 text-white font-medium">ESOP Pool</td>
                <td className="py-4 px-4 text-slate-300">Employee Stock Options</td>
                <td className="py-4 px-4 text-right text-white">1,500,000</td>
                <td className="py-4 px-4 text-right text-[#c9a227] font-bold">15%</td>
                <td className="py-4 px-4"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Reserved</span></td>
              </tr>
              <tr className="bg-[#c9a227]/10">
                <td className="py-4 px-4 text-white font-bold">Total</td>
                <td className="py-4 px-4 text-slate-300"></td>
                <td className="py-4 px-4 text-right text-white font-bold">10,000,000</td>
                <td className="py-4 px-4 text-right text-[#c9a227] font-bold">100%</td>
                <td className="py-4 px-4"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
          <p className="text-blue-400 font-bold">ESOP Pool Details</p>
          <p className="text-slate-400 text-sm mt-1">15% reserved for current and future team. 4-year vesting with 1-year cliff. CTO, CHRO, CMO eligible for grants.</p>
        </div>
      </div>

      {/* Post-Seed Cap Table */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <PieChart className="text-green-400" />
          Pro-Forma Cap Table (Post-SAFE Conversion)
        </h2>

        <p className="text-slate-400 mb-6">Assuming $400K SAFE converts at $5M cap (8% ownership at conversion)</p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-slate-400 font-medium">Shareholder</th>
                <th className="text-right py-4 px-4 text-slate-400 font-medium">Pre-Seed %</th>
                <th className="text-right py-4 px-4 text-slate-400 font-medium">Post-Seed Shares</th>
                <th className="text-right py-4 px-4 text-slate-400 font-medium">Post-Seed %</th>
                <th className="text-right py-4 px-4 text-slate-400 font-medium">Value (AED)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5">
                <td className="py-4 px-4 text-white font-medium">Founder (CEO)</td>
                <td className="py-4 px-4 text-right text-slate-400">85%</td>
                <td className="py-4 px-4 text-right text-white">8,500,000</td>
                <td className="py-4 px-4 text-right text-[#c9a227] font-bold">78%</td>
                <td className="py-4 px-4 text-right text-green-400">3,900,000</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="py-4 px-4 text-white font-medium">ESOP Pool</td>
                <td className="py-4 px-4 text-right text-slate-400">15%</td>
                <td className="py-4 px-4 text-right text-white">1,500,000</td>
                <td className="py-4 px-4 text-right text-[#c9a227] font-bold">14%</td>
                <td className="py-4 px-4 text-right text-green-400">700,000</td>
              </tr>
              <tr className="hover:bg-white/5 bg-green-500/5">
                <td className="py-4 px-4 text-green-400 font-medium">SAFE Investors (New)</td>
                <td className="py-4 px-4 text-right text-slate-400">0%</td>
                <td className="py-4 px-4 text-right text-white">800,000</td>
                <td className="py-4 px-4 text-right text-green-400 font-bold">8%</td>
                <td className="py-4 px-4 text-right text-green-400">400,000</td>
              </tr>
              <tr className="bg-[#c9a227]/10">
                <td className="py-4 px-4 text-white font-bold">Total</td>
                <td className="py-4 px-4 text-right text-slate-400">100%</td>
                <td className="py-4 px-4 text-right text-white font-bold">10,800,000</td>
                <td className="py-4 px-4 text-right text-[#c9a227] font-bold">100%</td>
                <td className="py-4 px-4 text-right text-green-400 font-bold">5,400,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Visual Cap Table */}
        <div className="mt-8">
          <h4 className="text-white font-bold mb-4">Ownership Visualization</h4>
          <div className="flex rounded-xl overflow-hidden h-12">
            <div className="bg-purple-500 flex items-center justify-center text-white text-sm font-bold" style={{ width: '78%' }}>
              Founder 78%
            </div>
            <div className="bg-green-500 flex items-center justify-center text-white text-sm font-bold" style={{ width: '14%' }}>
              ESOP 14%
            </div>
            <div className="bg-[#c9a227] flex items-center justify-center text-[#0a1628] text-sm font-bold" style={{ width: '8%' }}>
              SAFE 8%
            </div>
          </div>
        </div>
      </div>

      {/* Dilution Scenarios */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Future Dilution Scenarios</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-slate-400">Round</th>
                <th className="text-right py-3 px-4 text-slate-400">Raise</th>
                <th className="text-right py-3 px-4 text-slate-400">Pre-Money</th>
                <th className="text-right py-3 px-4 text-slate-400">Founder %</th>
                <th className="text-right py-3 px-4 text-slate-400">SAFE %</th>
                <th className="text-right py-3 px-4 text-slate-400">Series A %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-3 px-4 text-white">Current</td>
                <td className="py-3 px-4 text-right text-slate-300">-</td>
                <td className="py-3 px-4 text-right text-slate-300">-</td>
                <td className="py-3 px-4 text-right text-purple-400">85%</td>
                <td className="py-3 px-4 text-right text-slate-500">-</td>
                <td className="py-3 px-4 text-right text-slate-500">-</td>
              </tr>
              <tr className="bg-green-500/5">
                <td className="py-3 px-4 text-green-400">Post-SAFE</td>
                <td className="py-3 px-4 text-right text-slate-300">$400K</td>
                <td className="py-3 px-4 text-right text-slate-300">$5M cap</td>
                <td className="py-3 px-4 text-right text-purple-400">78%</td>
                <td className="py-3 px-4 text-right text-green-400">8%</td>
                <td className="py-3 px-4 text-right text-slate-500">-</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-blue-400">Post-Series A (Est.)</td>
                <td className="py-3 px-4 text-right text-slate-300">$3M</td>
                <td className="py-3 px-4 text-right text-slate-300">$15M</td>
                <td className="py-3 px-4 text-right text-purple-400">62%</td>
                <td className="py-3 px-4 text-right text-green-400">6%</td>
                <td className="py-3 px-4 text-right text-blue-400">20%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SAFE AGREEMENT SECTION
// ============================================
function SAFESection() {
  return (
    <div className="space-y-8">
      {/* SAFE Overview */}
      <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/10 rounded-2xl p-8 border border-blue-500/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <FileText className="text-blue-400" />
          SAFE Agreement (Simple Agreement for Future Equity)
        </h2>
        <p className="text-slate-300">
          We are using the Y Combinator Post-Money SAFE, the most founder-friendly and investor-recognized
          instrument for early-stage investment. This standard agreement has been used in thousands of
          successful startup investments globally.
        </p>
      </div>

      {/* SAFE Terms */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">SAFE Terms Summary</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Valuation Cap</p>
              <p className="text-2xl font-bold text-[#c9a227]">$5M Post-Money</p>
              <p className="text-slate-500 text-xs mt-1">~AED 18.4M</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Discount</p>
              <p className="text-2xl font-bold text-white">20%</p>
              <p className="text-slate-500 text-xs mt-1">On next priced round</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Pro-Rata Rights</p>
              <p className="text-2xl font-bold text-green-400">Yes</p>
              <p className="text-slate-500 text-xs mt-1">For investments &gt; $50K</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Minimum Investment</p>
              <p className="text-2xl font-bold text-white">$25,000</p>
              <p className="text-slate-500 text-xs mt-1">~AED 92K</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">SAFE Type</p>
              <p className="text-2xl font-bold text-white">Post-Money</p>
              <p className="text-slate-500 text-xs mt-1">Y Combinator standard</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">MFN (Most Favored Nation)</p>
              <p className="text-2xl font-bold text-green-400">Yes</p>
              <p className="text-slate-500 text-xs mt-1">Protection for early investors</p>
            </div>
          </div>
        </div>
      </div>

      {/* SAFE Template */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Download className="text-[#c9a227]" />
          SAFE Agreement Template
        </h3>

        <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm overflow-x-auto">
          <pre className="text-slate-300 whitespace-pre-wrap">
{`SIMPLE AGREEMENT FOR FUTURE EQUITY (SAFE)
POST-MONEY VALUATION CAP

THIS CERTIFIES THAT in exchange for the payment by [INVESTOR NAME]
(the "Investor") of AED [INVESTMENT AMOUNT] (the "Purchase Amount")
on or about [DATE], NUQTA TECHNOLOGY L.L.C., a UAE Limited Liability
Company (the "Company"), hereby issues to the Investor the right to
certain shares of the Company's Capital Stock, subject to the terms
set forth below.

1. EVENTS

(a) Equity Financing. If there is an Equity Financing before the
termination of this Safe, on the initial closing of such Equity
Financing, this Safe will automatically convert into the number of
shares of Safe Preferred Stock equal to the Purchase Amount divided
by the Conversion Price.

The "Conversion Price" means:
(i) the Safe Price; or
(ii) the Discount Price (if applicable)

whichever calculation results in a greater number of shares of Safe
Preferred Stock.

The "Safe Price" means the price per share equal to the Post-Money
Valuation Cap divided by the Company Capitalization.

POST-MONEY VALUATION CAP: AED 12,500,000 (Twelve Million Five Hundred
Thousand UAE Dirhams)

(b) Liquidity Event. If there is a Liquidity Event before the
termination of this Safe, the Investor will, at its option, either:
(i) receive a cash payment equal to the Purchase Amount; or
(ii) automatically receive shares of Common Stock equal to the
    Purchase Amount divided by the Liquidity Price.

(c) Dissolution Event. If there is a Dissolution Event before this
Safe terminates, the Company will pay an amount equal to the Purchase
Amount, subject to applicable law.

2. DEFINITIONS

"Company Capitalization" means the sum of: (i) all shares of Capital
Stock issued and outstanding; (ii) all shares of Common Stock
underlying outstanding Convertible Securities; and (iii) all shares
of Common Stock reserved for issuance under the Company's equity
incentive plan (ESOP).

"Equity Financing" means a bona fide transaction in which the Company
issues and sells Preferred Stock at a fixed valuation.

"Liquidity Event" means a Change of Control or an Initial Public
Offering (IPO).

"Pro-Rata Rights Agreement" means a written agreement between the
Company and the Investor granting pro-rata participation rights in
future equity financings (for investments above AED 250,000).

3. COMPANY REPRESENTATIONS
The Company represents and warrants that:
(a) It is duly organized and validly existing under UAE law;
(b) It has the corporate power to execute this Safe;
(c) This Safe constitutes a valid obligation of the Company.

4. INVESTOR REPRESENTATIONS
The Investor represents and warrants that:
(a) The Investor is an "accredited investor";
(b) The Investor understands this is a high-risk investment;
(c) The Investor has conducted its own due diligence.

5. MISCELLANEOUS
(a) Governing Law: This Safe shall be governed by the laws of the
    United Arab Emirates, with disputes subject to DIFC Courts.
(b) Amendment: This Safe may only be amended with written consent.
(c) Notices: All notices shall be in writing.

IN WITNESS WHEREOF, the undersigned have caused this Safe to be
executed as of the date first written above.

COMPANY:
NUQTA TECHNOLOGY L.L.C.
By: ________________________
Name: [CEO Name]
Title: Chief Executive Officer

INVESTOR:
[INVESTOR NAME]
By: ________________________
Name:
Title:`}
          </pre>
        </div>

        <div className="mt-6 flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#d4b03f] transition-colors">
            <Download size={20} />
            Download SAFE (PDF)
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors">
            <Copy size={20} />
            Copy Template
          </button>
        </div>
      </div>

      {/* SAFE FAQs */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">SAFE FAQs for Investors</h3>

        <div className="space-y-4">
          {[
            {
              q: 'When does my SAFE convert to equity?',
              a: 'Your SAFE converts automatically when we raise a priced equity round (Series A), at a liquidity event (acquisition/IPO), or at dissolution. Until then, you hold a right to future equity, not actual shares.'
            },
            {
              q: 'Why Post-Money SAFE instead of Pre-Money?',
              a: 'Post-Money SAFEs are clearer for both parties. You know exactly what percentage you will own (Purchase Amount / Post-Money Cap). With $50K at $5M cap, you get exactly 1%.'
            },
            {
              q: 'What are my pro-rata rights?',
              a: 'For investments above $50K, you have the right to invest in future rounds to maintain your ownership percentage. This protects against dilution.'
            },
            {
              q: 'Is my investment protected?',
              a: 'SAFEs have MFN (Most Favored Nation) clause. If we offer better terms to later SAFE investors, your terms automatically upgrade to match.'
            },
          ].map((faq, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl">
              <p className="text-white font-medium mb-2">{faq.q}</p>
              <p className="text-slate-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// USE OF FUNDS SECTION
// ============================================
function UseFundsSection() {
  return (
    <div className="space-y-8">
      {/* Summary */}
      <div className="bg-gradient-to-r from-green-500/20 to-green-500/10 rounded-2xl p-8 border border-green-500/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <DollarSign className="text-green-400" />
          Use of Funds - $400K SAFE Round
        </h2>
        <p className="text-slate-300">
          12-18 month runway to achieve key milestones: 100,000 users, 2,500 merchants, AED 120M GMV,
          and Series A readiness. Every dollar allocated to growth and sustainability.
        </p>
      </div>

      {/* Allocation Breakdown */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Fund Allocation (12-18 Months)</h3>

        <div className="space-y-4">
          {[
            { category: 'Marketing & User Acquisition', amount: 140000, percentage: 35, color: 'pink', items: ['Digital advertising (Meta, TikTok, Google)', 'Influencer partnerships', 'Referral program rewards', 'Brand campaigns', 'PR & communications'] },
            { category: 'Product & Technology', amount: 100000, percentage: 25, color: 'blue', items: ['Additional engineers (1-2)', 'Infrastructure scaling', 'Security & compliance', 'Feature development', 'Mobile app enhancements'] },
            { category: 'Team Expansion', amount: 80000, percentage: 20, color: 'purple', items: ['Operations support', 'Customer success', 'Merchant acquisition support', 'Recruitment costs'] },
            { category: 'Operations & Support', amount: 60000, percentage: 15, color: 'orange', items: ['Office space', 'Customer support tools', 'Legal & accounting', 'Insurance', 'Travel & events'] },
            { category: 'Reserve / Buffer', amount: 20000, percentage: 5, color: 'slate', items: ['Emergency fund', 'Opportunistic investments', 'Currency fluctuation buffer'] },
          ].map((item, idx) => (
            <div key={idx} className={`p-6 rounded-xl border bg-${item.color}-500/10 border-${item.color}-500/30`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className={`text-${item.color}-400 font-bold text-lg`}>{item.category}</h4>
                  <p className="text-slate-400 text-sm">{item.percentage}% of total raise</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-white">${item.amount.toLocaleString()}</p>
                  <p className="text-slate-500 text-sm">~AED {Math.round(item.amount * 3.67).toLocaleString()}</p>
                </div>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 mb-4">
                <div className={`h-3 rounded-full bg-${item.color}-500`} style={{ width: `${item.percentage}%` }} />
              </div>
              <div className="flex flex-wrap gap-2">
                {item.items.map((subitem, subidx) => (
                  <span key={subidx} className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300">{subitem}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Visual Breakdown */}
        <div className="mt-8">
          <h4 className="text-white font-bold mb-4">Visual Allocation</h4>
          <div className="flex rounded-xl overflow-hidden h-12">
            <div className="bg-pink-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: '35%' }}>Marketing 35%</div>
            <div className="bg-blue-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: '25%' }}>Tech 25%</div>
            <div className="bg-purple-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: '20%' }}>Team 20%</div>
            <div className="bg-orange-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: '15%' }}>Ops 15%</div>
            <div className="bg-slate-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: '5%' }}>5%</div>
          </div>
        </div>
      </div>

      {/* Milestone-Based Release */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Milestone-Based Fund Release</h3>

        <div className="space-y-4">
          {[
            { milestone: 'Tranche 1: Launch', amount: '$200K', trigger: 'At closing', targets: ['Complete team hiring', 'Launch marketing campaign', '25,000 users, 500 merchants'], timeline: 'Month 1-3' },
            { milestone: 'Tranche 2: Traction', amount: '$200K', trigger: '500 live merchants + 25,000 MAU + CTO hired', targets: ['Scale marketing spend', 'Achieve AED 10M GMV/month', 'Prove unit economics'], timeline: 'Month 4-6' },
          ].map((tranche, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] font-bold">{idx + 1}</div>
                  <div>
                    <h4 className="text-white font-bold">{tranche.milestone}</h4>
                    <p className="text-slate-500 text-sm">{tranche.timeline}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#c9a227] font-bold text-lg">{tranche.amount}</p>
                  <p className="text-slate-500 text-xs">Trigger: {tranche.trigger}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {tranche.targets.map((target, tidx) => (
                  <span key={tidx} className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs">{target}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Burn */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Monthly Burn Rate Projection</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
            <p className="text-slate-400 text-sm">Months 1-6</p>
            <p className="text-2xl font-bold text-green-400">AED 120K/mo</p>
            <p className="text-slate-500 text-xs mt-1">Launch phase - lean operations</p>
          </div>
          <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
            <p className="text-slate-400 text-sm">Months 7-12</p>
            <p className="text-2xl font-bold text-yellow-400">AED 150K/mo</p>
            <p className="text-slate-500 text-xs mt-1">Growth phase - scaling team</p>
          </div>
          <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
            <p className="text-slate-400 text-sm">Months 13-18</p>
            <p className="text-2xl font-bold text-blue-400">AED 140K/mo</p>
            <p className="text-slate-500 text-xs mt-1">Optimization - revenue offsetting</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30">
          <p className="text-[#c9a227] font-bold">Runway: 18 Months</p>
          <p className="text-slate-400 text-sm mt-1">With projected revenue growth, actual runway extends to 24+ months. Break-even expected at Month 18 with 50,000 users.</p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// LOI EVIDENCE SECTION
// ============================================
function LOISection() {
  return (
    <div className="space-y-8">
      {/* LOI Summary */}
      <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-2xl p-8 border border-purple-500/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <CheckCircle className="text-purple-400" />
          Letters of Intent (LOI) Evidence
        </h2>
        <p className="text-slate-300">
          32 merchants have signed Letters of Intent to join Nuqta upon launch. These LOIs represent
          committed merchant interest and validate our go-to-market strategy.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mt-6">
          <div className="p-4 bg-white/10 rounded-xl">
            <p className="text-slate-400 text-sm">Total LOIs Signed</p>
            <p className="text-3xl font-bold text-[#c9a227]">32</p>
          </div>
          <div className="p-4 bg-white/10 rounded-xl">
            <p className="text-slate-400 text-sm">Potential GMV/Month</p>
            <p className="text-3xl font-bold text-white">AED 850K</p>
          </div>
          <div className="p-4 bg-white/10 rounded-xl">
            <p className="text-slate-400 text-sm">Industries Covered</p>
            <p className="text-3xl font-bold text-white">6</p>
          </div>
          <div className="p-4 bg-white/10 rounded-xl">
            <p className="text-slate-400 text-sm">Conversion Target</p>
            <p className="text-3xl font-bold text-green-400">10+</p>
          </div>
        </div>
      </div>

      {/* LOI List by Category */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">LOI Merchants by Category</h3>

        <div className="space-y-6">
          {[
            {
              category: 'Cafes & Restaurants',
              icon: Coffee,
              color: 'orange',
              merchants: [
                { name: 'Craft Coffee Co.', location: 'Dubai Marina', avgTicket: 'AED 45', status: 'LOI Signed' },
                { name: 'The Daily Grind', location: 'JBR', avgTicket: 'AED 38', status: 'LOI Signed' },
                { name: 'Brew Lab', location: 'DIFC', avgTicket: 'AED 52', status: 'LOI Signed' },
                { name: 'Cafe Habana', location: 'Downtown', avgTicket: 'AED 65', status: 'LOI Signed' },
                { name: 'Bean There', location: 'Business Bay', avgTicket: 'AED 42', status: 'LOI Signed' },
                { name: 'Morning Ritual', location: 'Marina', avgTicket: 'AED 35', status: 'LOI Signed' },
              ]
            },
            {
              category: 'Salons & Spas',
              icon: Scissors,
              color: 'pink',
              merchants: [
                { name: 'Glamour Studio', location: 'JLT', avgTicket: 'AED 180', status: 'LOI Signed' },
                { name: 'The Nail Bar', location: 'Marina Mall', avgTicket: 'AED 120', status: 'LOI Signed' },
                { name: 'Serenity Spa', location: 'Palm Jumeirah', avgTicket: 'AED 350', status: 'LOI Signed' },
                { name: 'Style Hub', location: 'Barsha', avgTicket: 'AED 95', status: 'LOI Signed' },
                { name: 'Beauty Box', location: 'JBR', avgTicket: 'AED 150', status: 'LOI Signed' },
              ]
            },
            {
              category: 'Retail & Shopping',
              icon: ShoppingCart,
              color: 'blue',
              merchants: [
                { name: 'Fashion Forward', location: 'Mall of Emirates', avgTicket: 'AED 280', status: 'LOI Signed' },
                { name: 'Gadget World', location: 'Dubai Mall', avgTicket: 'AED 450', status: 'LOI Signed' },
                { name: 'Home Essentials', location: 'Ibn Battuta', avgTicket: 'AED 320', status: 'LOI Signed' },
                { name: 'Sports Zone', location: 'City Centre', avgTicket: 'AED 220', status: 'LOI Signed' },
              ]
            },
            {
              category: 'Supermarkets & Grocery',
              icon: Store,
              color: 'green',
              merchants: [
                { name: 'Fresh Mart', location: 'Marina', avgTicket: 'AED 150', status: 'LOI Signed' },
                { name: 'Organic Corner', location: 'JBR', avgTicket: 'AED 120', status: 'LOI Signed' },
                { name: 'Daily Needs', location: 'Downtown', avgTicket: 'AED 85', status: 'LOI Signed' },
                { name: 'Green Basket', location: 'Business Bay', avgTicket: 'AED 95', status: 'LOI Signed' },
              ]
            },
            {
              category: 'Health & Fitness',
              icon: Award,
              color: 'teal',
              merchants: [
                { name: 'FitZone Gym', location: 'Marina', avgTicket: 'AED 200', status: 'LOI Signed' },
                { name: 'Yoga Studio', location: 'JLT', avgTicket: 'AED 150', status: 'LOI Signed' },
                { name: 'CrossFit Hub', location: 'Al Quoz', avgTicket: 'AED 250', status: 'LOI Signed' },
              ]
            },
            {
              category: 'Services',
              icon: Briefcase,
              color: 'purple',
              merchants: [
                { name: 'Quick Laundry', location: 'Marina', avgTicket: 'AED 75', status: 'LOI Signed' },
                { name: 'Pet Paradise', location: 'JBR', avgTicket: 'AED 180', status: 'LOI Signed' },
                { name: 'Auto Shine', location: 'Business Bay', avgTicket: 'AED 120', status: 'LOI Signed' },
                { name: 'Print Express', location: 'DIFC', avgTicket: 'AED 65', status: 'LOI Signed' },
              ]
            },
          ].map((cat, idx) => (
            <div key={idx} className={`p-6 rounded-xl border bg-${cat.color}-500/10 border-${cat.color}-500/30`}>
              <div className="flex items-center gap-3 mb-4">
                <cat.icon className={`text-${cat.color}-400`} size={24} />
                <h4 className={`text-${cat.color}-400 font-bold text-lg`}>{cat.category}</h4>
                <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white">{cat.merchants.length} LOIs</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 px-3 text-slate-400">Merchant</th>
                      <th className="text-left py-2 px-3 text-slate-400">Location</th>
                      <th className="text-right py-2 px-3 text-slate-400">Avg. Ticket</th>
                      <th className="text-right py-2 px-3 text-slate-400">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.merchants.map((m, midx) => (
                      <tr key={midx} className="border-b border-white/5">
                        <td className="py-2 px-3 text-white">{m.name}</td>
                        <td className="py-2 px-3 text-slate-400">{m.location}</td>
                        <td className="py-2 px-3 text-right text-slate-300">{m.avgTicket}</td>
                        <td className="py-2 px-3 text-right">
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">{m.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LOI Document Sample */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">LOI Document Template</h3>

        <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm">
          <pre className="text-slate-300 whitespace-pre-wrap">
{`LETTER OF INTENT
Merchant Partnership Agreement

Date: [DATE]

To: NUQTA TECHNOLOGY L.L.C.
From: [MERCHANT NAME]
Re: Intent to Partner with Nuqta Savings Platform

Dear Nuqta Team,

This Letter of Intent ("LOI") confirms our interest in partnering
with Nuqta as a merchant partner upon the platform's launch.

MERCHANT DETAILS:
Business Name: [MERCHANT NAME]
Trade License: [LICENSE NUMBER]
Location(s): [ADDRESS]
Category: [INDUSTRY]
Average Transaction: AED [AMOUNT]

PARTNERSHIP TERMS (Subject to Final Agreement):
- Cashback Offer: [X]% cashback to Nuqta users
- Commission Rate: [X]% of transaction value
- Payment Terms: [WEEKLY/BI-WEEKLY]
- Exclusivity: [NON-EXCLUSIVE/EXCLUSIVE IN AREA]

We understand that:
1. This LOI is non-binding and subject to final contract
2. Nuqta will provide QR code and merchant dashboard access
3. We will train staff on the Nuqta transaction process
4. Launch is targeted for March 2026

We look forward to partnering with Nuqta to drive customer
loyalty and increase foot traffic to our establishment.

Authorized Signature: ____________________
Name: [NAME]
Title: [TITLE]
Date: [DATE]

Contact: [EMAIL] | [PHONE]`}
          </pre>
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Geographic Distribution</h3>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { area: 'Dubai Marina', count: 8, status: 'Target Area' },
            { area: 'JBR', count: 6, status: 'Target Area' },
            { area: 'Downtown Dubai', count: 5, status: 'Target Area' },
            { area: 'Business Bay', count: 4, status: 'Secondary' },
            { area: 'JLT', count: 3, status: 'Secondary' },
            { area: 'DIFC', count: 2, status: 'Secondary' },
            { area: 'Other Areas', count: 4, status: 'Expansion' },
          ].map((loc, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[#c9a227]" />
                <div>
                  <p className="text-white font-medium">{loc.area}</p>
                  <p className="text-slate-500 text-xs">{loc.status}</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-[#c9a227]">{loc.count}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-green-500/10 rounded-xl border border-green-500/30">
          <p className="text-green-400 font-bold">Geographic Density Strategy</p>
          <p className="text-slate-400 text-sm mt-1">60% of LOIs concentrated in Marina, JBR, and Downtown - ensuring users have 5+ merchants within walking distance at launch.</p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// TERM SHEET SECTION
// ============================================
function TermSheetSection() {
  return (
    <div className="space-y-8">
      {/* Term Sheet Header */}
      <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 rounded-2xl p-8 border border-[#c9a227]/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Briefcase className="text-[#c9a227]" />
          Term Sheet - SAFE Round
        </h2>
        <p className="text-slate-300">
          Non-binding summary of proposed investment terms. Final terms subject to due diligence
          and definitive documentation.
        </p>
      </div>

      {/* Term Sheet Content */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <div className="bg-slate-900 rounded-xl p-6">
          <div className="text-center mb-8 pb-6 border-b border-white/10">
            <h3 className="text-2xl font-bold text-[#c9a227]">NUQTA TECHNOLOGY L.L.C.</h3>
            <p className="text-white text-lg mt-2">TERM SHEET</p>
            <p className="text-slate-400">SAFE Financing</p>
            <p className="text-slate-500 text-sm mt-2">February 2026</p>
          </div>

          <div className="space-y-6">
            {/* Investment Terms */}
            <div>
              <h4 className="text-[#c9a227] font-bold text-lg mb-4 pb-2 border-b border-[#c9a227]/30">INVESTMENT TERMS</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { label: 'Security Type', value: 'SAFE (Simple Agreement for Future Equity)' },
                  { label: 'Total Raise', value: '$400,000 (AED ~1,470,000)' },
                  { label: 'Post-Money Valuation Cap', value: '$5,000,000 (AED ~18,400,000)' },
                  { label: 'Minimum Investment', value: '$25,000 (AED ~92,000)' },
                  { label: 'Maximum Investment', value: '$100,000 per investor' },
                  { label: 'Discount Rate', value: '20% on next priced round' },
                  { label: 'Pro-Rata Rights', value: 'Yes, for investments > $50,000' },
                  { label: 'MFN Clause', value: 'Yes' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-white font-medium text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use of Proceeds */}
            <div>
              <h4 className="text-[#c9a227] font-bold text-lg mb-4 pb-2 border-b border-[#c9a227]/30">USE OF PROCEEDS</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { category: 'Marketing & User Acquisition', percentage: '35%', amount: '$140,000' },
                  { category: 'Product & Technology', percentage: '25%', amount: '$100,000' },
                  { category: 'Team Expansion', percentage: '20%', amount: '$80,000' },
                  { category: 'Operations & Support', percentage: '15%', amount: '$60,000' },
                  { category: 'Reserve / Buffer', percentage: '5%', amount: '$20,000' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-slate-400">{item.category}</span>
                    <span className="text-white font-medium">{item.percentage} ({item.amount})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Milestones */}
            <div>
              <h4 className="text-[#c9a227] font-bold text-lg mb-4 pb-2 border-b border-[#c9a227]/30">KEY MILESTONES (12-18 MONTHS)</h4>
              <div className="space-y-3">
                {[
                  { milestone: 'Month 3', target: '25,000 users, 500 merchants live, first transactions' },
                  { milestone: 'Month 6', target: '50,000 users, 1,500 merchants, AED 25M GMV/month' },
                  { milestone: 'Month 12', target: '100,000 users, 2,500 merchants, AED 10M GMV/month' },
                  { milestone: 'Month 18', target: '200,000 users, 5,000 merchants, AED 50M GMV/month, Series A ready' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                    <span className="text-[#c9a227] font-bold w-24">{item.milestone}</span>
                    <span className="text-slate-300">{item.target}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Investor Rights */}
            <div>
              <h4 className="text-[#c9a227] font-bold text-lg mb-4 pb-2 border-b border-[#c9a227]/30">INVESTOR RIGHTS</h4>
              <div className="space-y-3">
                {[
                  { right: 'Information Rights', detail: 'Quarterly financial reports, annual audited statements' },
                  { right: 'Pro-Rata Rights', detail: 'Right to participate in future rounds (for investments > $50K)' },
                  { right: 'MFN Protection', detail: 'Automatic upgrade if better terms offered to later SAFE investors' },
                  { right: 'Conversion', detail: 'Automatic conversion at next priced equity round or liquidity event' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-white/5 rounded-lg">
                    <p className="text-white font-medium">{item.right}</p>
                    <p className="text-slate-400 text-sm">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Covenants */}
            <div>
              <h4 className="text-[#c9a227] font-bold text-lg mb-4 pb-2 border-b border-[#c9a227]/30">COMPANY COVENANTS</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-400 mt-1" />
                  Maintain proper corporate records and UAE compliance
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-400 mt-1" />
                  Use funds solely for business purposes as outlined
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-400 mt-1" />
                  Maintain D&O insurance upon raising Series A
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-400 mt-1" />
                  Provide quarterly investor updates
                </li>
              </ul>
            </div>

            {/* Signatures */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-slate-400 text-sm mb-6">
                This Term Sheet is non-binding and is intended solely to facilitate discussions.
                No binding agreement shall exist unless and until definitive documentation is executed.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-400 text-sm mb-4">COMPANY</p>
                  <p className="text-white font-bold">NUQTA TECHNOLOGY L.L.C.</p>
                  <div className="mt-4 border-b border-dashed border-white/30 pb-8"></div>
                  <p className="text-slate-400 text-sm mt-2">Name: _________________</p>
                  <p className="text-slate-400 text-sm">Title: CEO</p>
                  <p className="text-slate-400 text-sm">Date: _________________</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-4">INVESTOR</p>
                  <p className="text-white font-bold">[INVESTOR NAME]</p>
                  <div className="mt-4 border-b border-dashed border-white/30 pb-8"></div>
                  <p className="text-slate-400 text-sm mt-2">Name: _________________</p>
                  <p className="text-slate-400 text-sm">Title: _________________</p>
                  <p className="text-slate-400 text-sm">Date: _________________</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#d4b03f] transition-colors">
            <Download size={20} />
            Download Term Sheet (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// TEAM BIOS SECTION
// ============================================
function TeamBiosSection() {
  return (
    <div className="space-y-8">
      {/* Team Header */}
      <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-2xl p-8 border border-purple-500/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Users className="text-purple-400" />
          Leadership Team
        </h2>
        <p className="text-slate-300">
          8-member founding team with deep expertise in technology, consumer apps, and the UAE market.
          Combined 40+ years of experience in building and scaling businesses.
        </p>
      </div>

      {/* C-Suite */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">C-Suite Leadership</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              role: 'Chief Executive Officer',
              name: 'Founder',
              color: 'purple',
              icon: Award,
              highlights: [
                'Visionary behind Nuqta concept',
                'Deep understanding of UAE consumer market',
                'Previous experience in loyalty/fintech',
                'Strong network in UAE business community',
                'Led team from 0 to 8 in 3 months',
              ],
              focus: 'Vision, Fundraising, Partnerships, CFO/COO functions'
            },
            {
              role: 'Chief Technology Officer',
              name: 'Tech Lead',
              color: 'blue',
              icon: Award,
              highlights: [
                '10+ years software engineering',
                'Built scalable consumer apps',
                'Payment systems expertise',
                'Mobile-first development',
                'Team leadership experience',
              ],
              focus: 'Product Development, Architecture, Dev Team Management'
            },
            {
              role: 'Chief Human Resources Officer',
              name: 'People Lead',
              color: 'teal',
              icon: Award,
              highlights: [
                'HR operations background',
                'Startup culture building',
                'Recruitment & retention',
                'Training & development',
                'Support infrastructure setup',
              ],
              focus: 'Team Culture, HR Operations, Customer Support Setup'
            },
            {
              role: 'Chief Marketing Officer',
              name: 'Marketing Lead',
              color: 'pink',
              icon: Award,
              highlights: [
                'Consumer marketing expertise',
                'Influencer marketing success',
                'Brand building experience',
                'Growth hacking skills',
                'Content strategy development',
              ],
              focus: 'Brand Strategy, User Acquisition, Content, PR'
            },
          ].map((exec, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border bg-${exec.color}-500/10 border-${exec.color}-500/30`}>
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-16 h-16 rounded-xl bg-${exec.color}-500/20 flex items-center justify-center`}>
                  <exec.icon className={`text-${exec.color}-400`} size={32} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{exec.name}</h4>
                  <p className={`text-${exec.color}-400 font-medium`}>{exec.role}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 text-sm mb-2">Key Highlights</p>
                  <ul className="space-y-1">
                    {exec.highlights.map((h, hidx) => (
                      <li key={hidx} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle size={12} className={`text-${exec.color}-400`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-slate-400 text-sm">Focus Areas</p>
                  <p className="text-white text-sm mt-1">{exec.focus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supporting Team */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Supporting Team</h3>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { role: 'Senior Developer', reports: 'CTO', focus: 'Backend & APIs', skills: ['Node.js', 'PostgreSQL', 'AWS'] },
            { role: 'Junior Developer', reports: 'CTO', focus: 'Frontend & Mobile', skills: ['React Native', 'TypeScript', 'UI/UX'] },
            { role: 'Business Development Associate', reports: 'CEO', focus: 'Merchant Acquisition', skills: ['Sales', 'Negotiation', 'CRM'] },
            { role: 'Graphic Designer', reports: 'CMO', focus: 'Brand & Content', skills: ['Figma', 'Illustrator', 'Motion'] },
          ].map((member, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl">
              <h4 className="text-white font-bold">{member.role}</h4>
              <p className="text-slate-500 text-xs">Reports to: {member.reports}</p>
              <p className="text-[#c9a227] text-sm mt-2">{member.focus}</p>
              <div className="flex flex-wrap gap-1 mt-3">
                {member.skills.map((skill, sidx) => (
                  <span key={sidx} className="px-2 py-1 bg-white/10 rounded text-xs text-slate-300">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Stats */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Team Statistics</h3>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { stat: 'Team Size', value: '8', label: 'Full-time members' },
            { stat: 'Avg. Experience', value: '8+', label: 'Years in industry' },
            { stat: 'C-Suite', value: '4', label: 'Executive leaders' },
            { stat: 'Technical', value: '3', label: 'Engineers/designers' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30 text-center">
              <p className="text-4xl font-bold text-[#c9a227]">{item.value}</p>
              <p className="text-white font-medium">{item.stat}</p>
              <p className="text-slate-500 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hiring Plan */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Post-Funding Hiring Plan</h3>

        <div className="space-y-4">
          {[
            { role: 'Operations Manager', timeline: 'Month 2', priority: 'High', reason: 'Scale merchant operations' },
            { role: 'Customer Success (x2)', timeline: 'Month 3', priority: 'High', reason: 'User retention & support' },
            { role: 'Sales Representatives (x2)', timeline: 'Month 4', priority: 'Medium', reason: 'Merchant expansion' },
            { role: 'Data Analyst', timeline: 'Month 5', priority: 'Medium', reason: 'Growth optimization' },
            { role: 'Senior Engineer', timeline: 'Month 6', priority: 'Medium', reason: 'Product scaling' },
          ].map((hire, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div className="flex items-center gap-4">
                <Users size={20} className="text-[#c9a227]" />
                <div>
                  <p className="text-white font-medium">{hire.role}</p>
                  <p className="text-slate-500 text-sm">{hire.reason}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-2 py-1 rounded text-xs ${
                  hire.priority === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {hire.priority}
                </span>
                <span className="text-slate-400 text-sm">{hire.timeline}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-green-500/10 rounded-xl border border-green-500/30">
          <p className="text-green-400 font-bold">Post-Funding Team: 15 Members</p>
          <p className="text-slate-400 text-sm mt-1">Current 8 + 7 new hires over 6 months. All positions budgeted in Use of Funds.</p>
        </div>
      </div>
    </div>
  );
}
