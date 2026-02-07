'use client';

import React, { useState } from 'react';
import {
  Crown,
  Settings,
  Megaphone,
  Users,
  Calculator,
  Target,
  TrendingUp,
  Calendar,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Rocket,
  Shield,
  Zap,
  ArrowRight,
  Building2,
  Globe,
  Heart,
  Award,
  BarChart3,
  PieChart,
  Clock,
  Flag,
  Star,
  Lightbulb,
  Briefcase,
  UserPlus,
  Coins,
  LineChart,
  MapPin
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

/**
 * C-SUITE STRATEGIC ANALYSIS
 *
 * Complete analysis and execution plan from the perspective of:
 * CEO, COO, CMO, CHRO, and CFO
 *
 * Brand colors: #c9a227 (gold), #0a1628 (dark blue)
 */

type TabId = 'ceo' | 'coo' | 'cmo' | 'chro' | 'cfo' | 'unified';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ElementType;
  color: string;
}

const tabs: Tab[] = [
  { id: 'unified', label: 'Unified Strategy', icon: Target, color: 'text-[#c9a227]' },
  { id: 'ceo', label: 'CEO', icon: Crown, color: 'text-purple-400' },
  { id: 'coo', label: 'COO', icon: Settings, color: 'text-blue-400' },
  { id: 'cmo', label: 'CMO', icon: Megaphone, color: 'text-pink-400' },
  { id: 'chro', label: 'CHRO', icon: Users, color: 'text-green-400' },
  { id: 'cfo', label: 'CFO', icon: Calculator, color: 'text-orange-400' },
];

// Tab color mapping for Tailwind
const tabBorderColors: Record<TabId, string> = {
  unified: 'border-[#c9a227]',
  ceo: 'border-purple-400',
  coo: 'border-blue-400',
  cmo: 'border-pink-400',
  chro: 'border-green-400',
  cfo: 'border-orange-400',
};

const tabBgColors: Record<TabId, string> = {
  unified: 'bg-[#c9a227]/10',
  ceo: 'bg-purple-400/10',
  coo: 'bg-blue-400/10',
  cmo: 'bg-pink-400/10',
  chro: 'bg-green-400/10',
  cfo: 'bg-orange-400/10',
};

export default function CSuiteStrategyPage() {
  const [activeTab, setActiveTab] = useState<TabId>('unified');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628]">
      {/* Header */}
      <div className="bg-[#0a1628]/80 backdrop-blur-sm border-b border-[#c9a227]/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#c9a227] to-[#d4b03f]">
                  <Target className="text-white" size={24} />
                </div>
                C-Suite Strategic Analysis
              </h1>
              <p className="text-slate-400 text-sm mt-1">Complete business analysis and execution plan</p>
            </div>
            <div className="text-right">
              <p className="text-[#c9a227] font-bold">NUQTA</p>
              <p className="text-slate-500 text-xs">Executive Planning 2026-2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? `${tabBgColors[tab.id]} ${tabBorderColors[tab.id]} border-2 ${tab.color}`
                  : 'bg-white/5 border-2 border-transparent text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <tab.icon size={18} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 pb-32">
        {activeTab === 'unified' && <UnifiedStrategy />}
        {activeTab === 'ceo' && <CEOSection />}
        {activeTab === 'coo' && <COOSection />}
        {activeTab === 'cmo' && <CMOSection />}
        {activeTab === 'chro' && <CHROSection />}
        {activeTab === 'cfo' && <CFOSection />}
      </div>

      <GlobalFooter />
    </div>
  );
}

// ==================== UNIFIED STRATEGY ====================
function UnifiedStrategy() {
  return (
    <div className="space-y-8">
      {/* Executive Summary */}
      <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl p-8 border border-[#c9a227]/30">
        <h2 className="text-2xl font-bold text-[#c9a227] mb-4 flex items-center gap-3">
          <Target size={28} />
          Executive Summary: The Nuqta Master Plan
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-white font-bold mb-3">Mission Statement</h3>
            <p className="text-slate-300 leading-relaxed">
              Transform everyday spending into meaningful savings for UAE residents while creating
              a sustainable, high-margin business that benefits merchants, users, and investors alike.
            </p>
            <div className="mt-4 p-4 bg-white/5 rounded-xl">
              <p className="text-[#c9a227] font-bold text-lg">&ldquo;Every Purchase Should Feel Like a Win&rdquo;</p>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">2026-2026 North Star Metrics</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span className="text-slate-300">Active Users (Year 1)</span>
                <span className="text-[#c9a227] font-bold">100,000 MAU</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span className="text-slate-300">Merchant Partners (Year 1)</span>
                <span className="text-[#c9a227] font-bold">2,500 merchants</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span className="text-slate-300">Monthly GMV</span>
                <span className="text-[#c9a227] font-bold">AED 10M by Dec 2026</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span className="text-slate-300">Revenue Run Rate</span>
                <span className="text-[#c9a227] font-bold">AED 5M ARR by Dec 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 90-Day Sprint Overview */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Rocket size={24} className="text-[#c9a227]" />
          90-Day Launch Sprint (Q1 2026)
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Flag size={20} className="text-purple-400" />
              </div>
              <h3 className="text-purple-400 font-bold">Days 1-30: Foundation</h3>
            </div>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <span>Complete SAFE fundraising ($400K at $5M cap)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <span>Hire CTO + 2 senior engineers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <span>Sign 50 pilot merchants</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <span>MVP app development kickoff</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <span>Set up legal & compliance</span>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Settings size={20} className="text-blue-400" />
              </div>
              <h3 className="text-blue-400 font-bold">Days 31-60: Build</h3>
            </div>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Complete MVP development</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Onboard 500 merchants</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Beta test with 5,000 users</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Launch marketing campaigns</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Establish operations playbook</span>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-green-500/20">
                <Rocket size={20} className="text-green-400" />
              </div>
              <h3 className="text-green-400 font-bold">Days 61-90: Launch</h3>
            </div>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>Public app launch</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>Acquire 50,000 users</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>1,500 merchants live</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>First revenue milestone</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>Series A preparation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* C-Suite Alignment Matrix */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Users size={24} className="text-[#c9a227]" />
          C-Suite Alignment Matrix
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 text-[#c9a227]">Role</th>
                <th className="text-left p-4 text-[#c9a227]">Primary Focus</th>
                <th className="text-left p-4 text-[#c9a227]">Key Metric</th>
                <th className="text-left p-4 text-[#c9a227]">Q1 Target</th>
                <th className="text-left p-4 text-[#c9a227]">Dependencies</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Crown size={16} className="text-purple-400" />
                    <span className="font-bold text-purple-400">CEO</span>
                  </div>
                </td>
                <td className="p-4">Fundraising & Vision</td>
                <td className="p-4">Capital Raised</td>
                <td className="p-4 text-white font-medium">$400K SAFE</td>
                <td className="p-4 text-sm">CFO (financials), CMO (traction)</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Settings size={16} className="text-blue-400" />
                    <span className="font-bold text-blue-400">COO</span>
                  </div>
                </td>
                <td className="p-4">Operations & Merchants</td>
                <td className="p-4">Merchant Onboarding</td>
                <td className="p-4 text-white font-medium">200 Merchants</td>
                <td className="p-4 text-sm">CEO (partnerships), CHRO (team)</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Megaphone size={16} className="text-pink-400" />
                    <span className="font-bold text-pink-400">CMO</span>
                  </div>
                </td>
                <td className="p-4">User Acquisition</td>
                <td className="p-4">Active Users</td>
                <td className="p-4 text-white font-medium">10,000 Users</td>
                <td className="p-4 text-sm">COO (merchants), CFO (budget)</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-green-400" />
                    <span className="font-bold text-green-400">CHRO</span>
                  </div>
                </td>
                <td className="p-4">Team Building</td>
                <td className="p-4">Key Hires</td>
                <td className="p-4 text-white font-medium">8 Core Team</td>
                <td className="p-4 text-sm">CEO (approval), CFO (comp)</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Calculator size={16} className="text-orange-400" />
                    <span className="font-bold text-orange-400">CFO</span>
                  </div>
                </td>
                <td className="p-4">Financial Health</td>
                <td className="p-4">Runway & Burn</td>
                <td className="p-4 text-white font-medium">18-Month Runway</td>
                <td className="p-4 text-sm">CEO (fundraise), All (spending)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Critical Success Factors */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/30">
          <h3 className="text-green-400 font-bold text-lg mb-4 flex items-center gap-2">
            <CheckCircle size={20} />
            Critical Success Factors
          </h3>
          <ul className="space-y-3">
            {[
              'Secure seed funding within 30 days',
              'Hire world-class CTO with UAE experience',
              'Sign 3 anchor merchants (major brands)',
              'Achieve product-market fit by Month 3',
              'Maintain burn rate under AED 150K/month',
              'Build defensible data moat early',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300">
                <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/30">
          <h3 className="text-red-400 font-bold text-lg mb-4 flex items-center gap-2">
            <AlertTriangle size={20} />
            Key Risks & Mitigations
          </h3>
          <ul className="space-y-3">
            {[
              { risk: 'Funding delay', mitigation: 'Bootstrap + angel backup' },
              { risk: 'CTO hiring miss', mitigation: 'Agency partner standby' },
              { risk: 'Slow merchant adoption', mitigation: 'Free tier + incentives' },
              { risk: 'User acquisition cost', mitigation: 'Organic + referral focus' },
              { risk: 'Competitor response', mitigation: 'Speed + local advantage' },
              { risk: 'Regulatory changes', mitigation: 'Legal counsel on retainer' },
            ].map((item, idx) => (
              <li key={idx} className="text-slate-300 text-sm">
                <span className="text-red-400 font-medium">{item.risk}:</span>{' '}
                <span>{item.mitigation}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Weekly Cadence */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Calendar size={24} className="text-[#c9a227]" />
          Weekly Executive Cadence
        </h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { day: 'Monday', time: '9:00 AM', meeting: 'All-Hands Standup', attendees: 'Full Team', duration: '30 min' },
            { day: 'Tuesday', time: '10:00 AM', meeting: 'Product Review', attendees: 'CEO, CTO, COO', duration: '60 min' },
            { day: 'Wednesday', time: '2:00 PM', meeting: 'Sales & Partnerships', attendees: 'CEO, COO, CMO', duration: '60 min' },
            { day: 'Thursday', time: '11:00 AM', meeting: 'Finance & Ops', attendees: 'CEO, CFO, COO', duration: '45 min' },
            { day: 'Friday', time: '4:00 PM', meeting: 'Week Retrospective', attendees: 'C-Suite', duration: '60 min' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-[#c9a227] font-bold">{item.day}</p>
              <p className="text-white text-sm mt-1">{item.meeting}</p>
              <p className="text-slate-400 text-xs mt-2">{item.time} • {item.duration}</p>
              <p className="text-slate-500 text-xs mt-1">{item.attendees}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== CEO SECTION ====================
function CEOSection() {
  return (
    <div className="space-y-8">
      {/* CEO Header */}
      <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-2xl p-8 border border-purple-500/30">
        <div className="flex items-start gap-4">
          <div className="p-4 rounded-2xl bg-purple-500/20">
            <Crown size={40} className="text-purple-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-purple-400">CEO Strategic Analysis</h2>
            <p className="text-slate-300 mt-2">Vision, Fundraising, Investor Relations & Strategic Partnerships</p>
          </div>
        </div>
      </div>

      {/* CEO Priorities */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <Target size={20} className="text-purple-400" />
            Q1 2026 CEO Priorities
          </h3>
          <div className="space-y-4">
            {[
              { priority: 'Close SAFE Round', target: '$400K at $5M cap', status: 'active', progress: 40 },
              { priority: 'Sign Anchor Partners', target: '3 Major Brands', status: 'active', progress: 20 },
              { priority: 'Hire CTO', target: 'World-class', status: 'active', progress: 30 },
              { priority: 'Board Formation', target: '3 Members', status: 'pending', progress: 0 },
              { priority: 'Media & PR Launch', target: '5 Articles', status: 'pending', progress: 0 },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-white/5 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{item.priority}</span>
                  <span className="text-purple-400 text-sm">{item.target}</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <DollarSign size={20} className="text-purple-400" />
            Fundraising Strategy
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
              <p className="text-purple-400 font-bold mb-2">SAFE Round Target</p>
              <p className="text-3xl font-bold text-white">$400K</p>
              <p className="text-slate-400 text-sm mt-1">Valuation Cap: $5M</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-slate-400 text-xs">Target Investors</p>
                <p className="text-white font-bold">15</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-slate-400 text-xs">Meetings Scheduled</p>
                <p className="text-white font-bold">8</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-slate-400 text-xs">Term Sheets</p>
                <p className="text-white font-bold">0</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-slate-400 text-xs">Target Close</p>
                <p className="text-white font-bold">30 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investor Pipeline */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <Briefcase size={20} className="text-purple-400" />
          Investor Pipeline & Next Steps
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-3 text-purple-400">Investor</th>
                <th className="text-left p-3 text-purple-400">Stage</th>
                <th className="text-left p-3 text-purple-400">Check Size</th>
                <th className="text-left p-3 text-purple-400">Next Action</th>
                <th className="text-left p-3 text-purple-400">Timeline</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {[
                { name: 'BECO Capital', stage: 'Partner Meeting', size: 'AED 1-2M', action: 'Send data room access', timeline: 'This week' },
                { name: 'Wamda Capital', stage: 'Initial Call Done', size: 'AED 500K-1M', action: 'Follow-up with metrics', timeline: 'Next week' },
                { name: 'Shorooq Partners', stage: 'Deck Sent', size: 'AED 500K', action: 'Schedule intro call', timeline: '3 days' },
                { name: 'Global Ventures', stage: 'Research', size: 'AED 1M+', action: 'Warm intro needed', timeline: '2 weeks' },
                { name: 'Mubadala Ventures', stage: 'Target List', size: 'AED 2M+', action: 'Build relationship', timeline: '1 month' },
              ].map((investor, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-3 font-medium text-white">{investor.name}</td>
                  <td className="p-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
                      {investor.stage}
                    </span>
                  </td>
                  <td className="p-3">{investor.size}</td>
                  <td className="p-3 text-sm">{investor.action}</td>
                  <td className="p-3 text-sm text-purple-400">{investor.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Strategic Partnerships */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <Building2 size={20} className="text-purple-400" />
          Strategic Partnership Targets (CEO-Level)
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              name: 'Global Village',
              type: 'Event Partner',
              value: 'AED 500K+ Deal',
              status: 'In Discussion',
              contact: 'CEO to CEO',
              next: 'Final proposal presentation'
            },
            {
              name: 'Careem',
              type: 'Strategic Partner',
              value: 'Distribution + Data',
              status: 'Warm Intro',
              contact: 'Via investor network',
              next: 'Schedule intro meeting'
            },
            {
              name: 'Emirates NBD',
              type: 'Banking Partner',
              value: 'Card-Linked Offers',
              status: 'Research',
              contact: 'Innovation team',
              next: 'Identify right contact'
            },
          ].map((partner, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <p className="text-white font-bold">{partner.name}</p>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
                  {partner.status}
                </span>
              </div>
              <p className="text-purple-400 text-sm mb-2">{partner.type}</p>
              <p className="text-slate-400 text-sm mb-3">Value: {partner.value}</p>
              <div className="pt-3 border-t border-white/10">
                <p className="text-slate-500 text-xs">Contact: {partner.contact}</p>
                <p className="text-white text-sm mt-1 flex items-center gap-1">
                  <ArrowRight size={14} className="text-purple-400" />
                  {partner.next}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CEO Decision Framework */}
      <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/30">
        <h3 className="text-purple-400 font-bold text-lg mb-4 flex items-center gap-2">
          <Lightbulb size={20} />
          CEO Decision Framework
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-white font-bold mb-3">Decisions Only CEO Makes:</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-purple-400" />
                Company strategy & major pivots
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-purple-400" />
                Fundraising terms & investor selection
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-purple-400" />
                C-suite hiring & firing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-purple-400" />
                Partnerships over AED 500K
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-purple-400" />
                Board matters & governance
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-bold mb-3">Weekly CEO Time Allocation:</p>
            <div className="space-y-2">
              {[
                { activity: 'Fundraising & Investors', pct: 40 },
                { activity: 'Strategic Partnerships', pct: 25 },
                { activity: 'Team Leadership', pct: 20 },
                { activity: 'Product & Vision', pct: 10 },
                { activity: 'External (PR, Events)', pct: 5 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-purple-400 h-2 rounded-full"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                  <span className="text-slate-400 text-xs w-40">{item.activity}</span>
                  <span className="text-purple-400 text-xs font-bold w-10">{item.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== COO SECTION ====================
function COOSection() {
  return (
    <div className="space-y-8">
      {/* COO Header */}
      <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/5 rounded-2xl p-8 border border-blue-500/30">
        <div className="flex items-start gap-4">
          <div className="p-4 rounded-2xl bg-blue-500/20">
            <Settings size={40} className="text-blue-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-blue-400">COO Operational Analysis</h2>
            <p className="text-slate-300 mt-2">Operations, Merchant Success, Process Excellence & Execution</p>
          </div>
        </div>
      </div>

      {/* Operational KPIs */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Merchants Onboarded', value: '47', target: '200', color: 'blue' },
          { label: 'Avg Onboarding Time', value: '3 days', target: '< 2 days', color: 'blue' },
          { label: 'Merchant Churn', value: '2%', target: '< 5%', color: 'green' },
          { label: 'Support Response', value: '4 hrs', target: '< 2 hrs', color: 'yellow' },
        ].map((kpi, idx) => (
          <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-slate-400 text-sm">{kpi.label}</p>
            <p className="text-2xl font-bold text-white mt-1">{kpi.value}</p>
            <p className="text-blue-400 text-xs mt-2">Target: {kpi.target}</p>
          </div>
        ))}
      </div>

      {/* Merchant Acquisition Funnel */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <TrendingUp size={20} className="text-blue-400" />
          Merchant Acquisition Funnel
        </h3>
        <div className="space-y-4">
          {[
            { stage: 'Leads Generated', count: 500, conversion: '100%' },
            { stage: 'Initial Contact', count: 350, conversion: '70%' },
            { stage: 'Demo Scheduled', count: 200, conversion: '57%' },
            { stage: 'Proposal Sent', count: 120, conversion: '60%' },
            { stage: 'Contract Signed', count: 80, conversion: '67%' },
            { stage: 'Live & Active', count: 47, conversion: '59%' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-32 text-slate-400 text-sm">{item.stage}</div>
              <div className="flex-1 h-8 bg-white/10 rounded-lg overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-end px-3"
                  style={{ width: `${(item.count / 500) * 100}%` }}
                >
                  <span className="text-white text-sm font-bold">{item.count}</span>
                </div>
              </div>
              <div className="w-16 text-blue-400 text-sm text-right">{item.conversion}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Operational Processes */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <Zap size={20} className="text-blue-400" />
            Merchant Onboarding SOP
          </h3>
          <div className="space-y-3">
            {[
              { step: 1, task: 'Initial call & qualification', time: '30 min', owner: 'Sales' },
              { step: 2, task: 'Send contract & pricing', time: '1 day', owner: 'Sales' },
              { step: 3, task: 'Contract signing', time: '1-2 days', owner: 'Legal' },
              { step: 4, task: 'Technical integration', time: '2-4 hrs', owner: 'Tech' },
              { step: 5, task: 'Staff training', time: '1 hr', owner: 'Success' },
              { step: 6, task: 'Go-live & monitoring', time: '1 day', owner: 'Success' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">
                  {item.step}
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm">{item.task}</p>
                  <p className="text-slate-500 text-xs">{item.owner} • {item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <Shield size={20} className="text-blue-400" />
            Quality Assurance Checklist
          </h3>
          <div className="space-y-3">
            {[
              { check: 'Merchant profile complete & verified', critical: true },
              { check: 'POS/integration tested successfully', critical: true },
              { check: 'Staff trained on app usage', critical: true },
              { check: 'Marketing materials delivered', critical: false },
              { check: 'First transaction completed', critical: true },
              { check: '7-day health check scheduled', critical: false },
              { check: 'Feedback survey sent', critical: false },
              { check: 'Success manager assigned', critical: true },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                <CheckCircle size={16} className={item.critical ? 'text-red-400' : 'text-blue-400'} />
                <span className="text-slate-300 text-sm">{item.check}</span>
                {item.critical && (
                  <span className="ml-auto px-2 py-0.5 bg-red-500/20 text-red-400 rounded text-xs">Critical</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Operations Dashboard */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <BarChart3 size={20} className="text-blue-400" />
          Weekly Operations Dashboard
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
            <p className="text-green-400 font-bold mb-3">On Track</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>✓ Merchant onboarding velocity</li>
              <li>✓ Support ticket resolution</li>
              <li>✓ System uptime (99.9%)</li>
              <li>✓ Integration success rate</li>
            </ul>
          </div>
          <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
            <p className="text-yellow-400 font-bold mb-3">Needs Attention</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>⚠ Sales team capacity</li>
              <li>⚠ Documentation updates</li>
              <li>⚠ Training materials</li>
            </ul>
          </div>
          <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/30">
            <p className="text-red-400 font-bold mb-3">Blockers</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>✗ CTO hire (pending CEO)</li>
              <li>✗ POS integration partner</li>
            </ul>
          </div>
        </div>
      </div>

      {/* COO Weekly Schedule */}
      <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-500/30">
        <h3 className="text-blue-400 font-bold text-lg mb-4 flex items-center gap-2">
          <Calendar size={20} />
          COO Time Allocation
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-white font-bold mb-3">Weekly Focus Areas:</p>
            <div className="space-y-2">
              {[
                { activity: 'Merchant Operations', pct: 35 },
                { activity: 'Process Improvement', pct: 20 },
                { activity: 'Team Management', pct: 20 },
                { activity: 'Cross-functional Sync', pct: 15 },
                { activity: 'Vendor Management', pct: 10 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-blue-400 h-2 rounded-full"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                  <span className="text-slate-400 text-xs w-40">{item.activity}</span>
                  <span className="text-blue-400 text-xs font-bold w-10">{item.pct}%</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white font-bold mb-3">Key Meetings:</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-blue-400" />
                Daily: 15-min merchant ops standup
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-blue-400" />
                Mon/Thu: Sales pipeline review
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-blue-400" />
                Tue: Product sync with CTO
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-blue-400" />
                Wed: Finance review with CFO
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-blue-400" />
                Fri: Week retrospective
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== CMO SECTION ====================
function CMOSection() {
  return (
    <div className="space-y-8">
      {/* CMO Header */}
      <div className="bg-gradient-to-r from-pink-500/20 to-pink-500/5 rounded-2xl p-8 border border-pink-500/30">
        <div className="flex items-start gap-4">
          <div className="p-4 rounded-2xl bg-pink-500/20">
            <Megaphone size={40} className="text-pink-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-pink-400">CMO Marketing Analysis</h2>
            <p className="text-slate-300 mt-2">Brand Strategy, User Acquisition, Growth & Engagement</p>
          </div>
        </div>
      </div>

      {/* Marketing KPIs */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Monthly Active Users', value: '0', target: '10,000', trend: 'Pre-launch' },
          { label: 'CAC', value: 'AED 30', target: '< AED 35', trend: '-12%' },
          { label: 'Viral Coefficient', value: '1.2', target: '> 1.5', trend: '+0.1' },
          { label: 'App Store Rating', value: '4.6', target: '> 4.5', trend: 'Stable' },
        ].map((kpi, idx) => (
          <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-slate-400 text-sm">{kpi.label}</p>
            <p className="text-2xl font-bold text-white mt-1">{kpi.value}</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-pink-400 text-xs">Target: {kpi.target}</p>
              <span className="text-green-400 text-xs">{kpi.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Marketing Channels */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <TrendingUp size={20} className="text-pink-400" />
          Channel Performance & Strategy
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-3 text-pink-400">Channel</th>
                <th className="text-left p-3 text-pink-400">Users</th>
                <th className="text-left p-3 text-pink-400">CAC</th>
                <th className="text-left p-3 text-pink-400">LTV</th>
                <th className="text-left p-3 text-pink-400">ROI</th>
                <th className="text-left p-3 text-pink-400">Strategy</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {[
                { channel: 'Referrals', users: '1,200', cac: 'AED 10', ltv: 'AED 504', roi: '50x', strategy: 'Double down - best channel' },
                { channel: 'Instagram Ads', users: '650', cac: 'AED 35', ltv: 'AED 504', roi: '14x', strategy: 'Optimize creatives' },
                { channel: 'Influencers', users: '420', cac: 'AED 40', ltv: 'AED 504', roi: '12x', strategy: 'Micro-influencer focus' },
                { channel: 'Google Ads', users: '310', cac: 'AED 80', ltv: 'AED 504', roi: '6x', strategy: 'Reduce spend, test keywords' },
                { channel: 'TikTok', users: '180', cac: 'AED 25', ltv: 'AED 504', roi: '20x', strategy: 'Scale aggressively' },
                { channel: 'Organic/SEO', users: '87', cac: 'AED 0', ltv: 'AED 504', roi: '∞', strategy: 'Long-term content play' },
              ].map((item, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-3 font-medium text-white">{item.channel}</td>
                  <td className="p-3">{item.users}</td>
                  <td className="p-3">{item.cac}</td>
                  <td className="p-3">{item.ltv}</td>
                  <td className="p-3 text-green-400 font-medium">{item.roi}</td>
                  <td className="p-3 text-sm">{item.strategy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Brand Strategy */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <Heart size={20} className="text-pink-400" />
            Brand Positioning
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-pink-500/10 rounded-xl border border-pink-500/30">
              <p className="text-pink-400 font-bold mb-2">Core Message</p>
              <p className="text-white text-lg">&ldquo;Every Purchase is a Win&rdquo;</p>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-slate-400 text-xs">Target Audience</p>
                <p className="text-white">UAE residents 25-45, AED 10K+ monthly income</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-slate-400 text-xs">Key Differentiator</p>
                <p className="text-white">Local-first, instant rewards, no subscription</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-slate-400 text-xs">Emotional Hook</p>
                <p className="text-white">Smart savings without lifestyle compromise</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <Rocket size={20} className="text-pink-400" />
            Q1 Campaign Calendar
          </h3>
          <div className="space-y-3">
            {[
              { week: 'Week 1-2', campaign: 'Launch Awareness', budget: 'AED 50K', goal: '5K app installs' },
              { week: 'Week 3-4', campaign: 'Referral Blitz', budget: 'AED 30K', goal: '2K referral signups' },
              { week: 'Week 5-6', campaign: 'Merchant Spotlight', budget: 'AED 20K', goal: 'Brand awareness' },
              { week: 'Week 7-8', campaign: 'Influencer Wave 1', budget: 'AED 40K', goal: '3K signups' },
              { week: 'Week 9-10', campaign: 'Ramadan Prep', budget: 'AED 60K', goal: 'Position for Ramadan' },
              { week: 'Week 11-12', campaign: 'Community Building', budget: 'AED 25K', goal: 'Engagement focus' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-white/5 rounded-lg flex items-center justify-between">
                <div>
                  <p className="text-white font-medium text-sm">{item.campaign}</p>
                  <p className="text-slate-500 text-xs">{item.week}</p>
                </div>
                <div className="text-right">
                  <p className="text-pink-400 text-sm">{item.budget}</p>
                  <p className="text-slate-400 text-xs">{item.goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Journey & Engagement */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <MapPin size={20} className="text-pink-400" />
          User Journey Optimization
        </h3>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { stage: 'Awareness', metric: 'Impressions', value: '500K/mo', focus: 'Social + Influencers' },
            { stage: 'Interest', metric: 'Landing Views', value: '50K/mo', focus: 'Ad creative testing' },
            { stage: 'Download', metric: 'Installs', value: '8K/mo', focus: 'ASO optimization' },
            { stage: 'Activation', metric: '1st Transaction', value: '4K/mo', focus: 'Onboarding UX' },
            { stage: 'Retention', metric: 'D30 Active', value: '2K/mo', focus: 'Push + offers' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl text-center relative">
              {idx < 4 && (
                <ArrowRight size={20} className="text-pink-400/50 absolute -right-3 top-1/2 -translate-y-1/2 hidden md:block" />
              )}
              <p className="text-pink-400 font-bold">{item.stage}</p>
              <p className="text-2xl font-bold text-white mt-2">{item.value}</p>
              <p className="text-slate-400 text-xs mt-1">{item.metric}</p>
              <p className="text-slate-500 text-xs mt-2 pt-2 border-t border-white/10">{item.focus}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CMO Budget & Time */}
      <div className="bg-pink-500/10 rounded-2xl p-6 border border-pink-500/30">
        <h3 className="text-pink-400 font-bold text-lg mb-4 flex items-center gap-2">
          <PieChart size={20} />
          Marketing Budget Allocation (Q1: AED 225K)
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="space-y-2">
              {[
                { category: 'Paid Social (Meta, TikTok)', pct: 35, amount: 'AED 79K' },
                { category: 'Influencer Marketing', pct: 25, amount: 'AED 56K' },
                { category: 'Referral Program', pct: 20, amount: 'AED 45K' },
                { category: 'Content & Creative', pct: 10, amount: 'AED 23K' },
                { category: 'Events & PR', pct: 10, amount: 'AED 22K' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-pink-500 to-pink-400 h-3 rounded-full"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                  <span className="text-slate-400 text-xs w-44">{item.category}</span>
                  <span className="text-pink-400 text-xs font-bold w-20">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white font-bold mb-3">CMO Weekly Focus:</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-pink-400" />
                Campaign performance review (daily)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-pink-400" />
                Creative approval & direction
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-pink-400" />
                Influencer relationship building
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-pink-400" />
                Brand consistency oversight
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-pink-400" />
                Cross-functional alignment (Product, Sales)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== CHRO SECTION ====================
function CHROSection() {
  return (
    <div className="space-y-8">
      {/* CHRO Header */}
      <div className="bg-gradient-to-r from-green-500/20 to-green-500/5 rounded-2xl p-8 border border-green-500/30">
        <div className="flex items-start gap-4">
          <div className="p-4 rounded-2xl bg-green-500/20">
            <Users size={40} className="text-green-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-green-400">CHRO People Analysis</h2>
            <p className="text-slate-300 mt-2">Team Building, Culture, Hiring & Employee Experience</p>
          </div>
        </div>
      </div>

      {/* Team Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Current Team Size', value: '8', target: '15 by Q2' },
          { label: 'Open Positions', value: '0', target: 'Scaling post-traction' },
          { label: 'Offer Acceptance', value: '100%', target: '> 85%' },
          { label: 'eNPS Score', value: 'Tracking', target: '> 50' },
        ].map((kpi, idx) => (
          <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-slate-400 text-sm">{kpi.label}</p>
            <p className="text-2xl font-bold text-white mt-1">{kpi.value}</p>
            <p className="text-green-400 text-xs mt-2">Target: {kpi.target}</p>
          </div>
        ))}
      </div>

      {/* Hiring Plan */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <UserPlus size={20} className="text-green-400" />
          Q1 Hiring Roadmap
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-3 text-green-400">Role</th>
                <th className="text-left p-3 text-green-400">Priority</th>
                <th className="text-left p-3 text-green-400">Salary Range</th>
                <th className="text-left p-3 text-green-400">Target Date</th>
                <th className="text-left p-3 text-green-400">Status</th>
                <th className="text-left p-3 text-green-400">Pipeline</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {[
                { role: 'CTO', priority: 'Critical', salary: 'AED 50-70K + ESOP', date: 'Week 2', status: 'Interviewing', pipeline: '3 finalists' },
                { role: 'Senior Full-Stack Dev', priority: 'Critical', salary: 'AED 25-35K', date: 'Week 3', status: 'Sourcing', pipeline: '8 candidates' },
                { role: 'Senior Full-Stack Dev', priority: 'Critical', salary: 'AED 25-35K', date: 'Week 4', status: 'Sourcing', pipeline: '8 candidates' },
                { role: 'Head of Sales', priority: 'High', salary: 'AED 30-40K + Comm', date: 'Week 4', status: 'JD Ready', pipeline: '0' },
                { role: 'Sales Executive (x2)', priority: 'High', salary: 'AED 12-18K + Comm', date: 'Week 6', status: 'Pending', pipeline: '0' },
                { role: 'Customer Success Lead', priority: 'Medium', salary: 'AED 15-22K', date: 'Week 8', status: 'Pending', pipeline: '0' },
                { role: 'Marketing Manager', priority: 'Medium', salary: 'AED 18-25K', date: 'Week 8', status: 'Pending', pipeline: '0' },
                { role: 'Finance Manager', priority: 'Medium', salary: 'AED 18-25K', date: 'Week 10', status: 'Pending', pipeline: '0' },
              ].map((item, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-3 font-medium text-white">{item.role}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.priority === 'Critical' ? 'bg-red-500/20 text-red-400' :
                      item.priority === 'High' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="p-3">{item.salary}</td>
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.status === 'Interviewing' ? 'bg-green-500/20 text-green-400' :
                      item.status === 'Sourcing' ? 'bg-yellow-500/20 text-yellow-400' :
                      item.status === 'JD Ready' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 text-sm">{item.pipeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Culture & Values */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <Heart size={20} className="text-green-400" />
            Core Values & Culture
          </h3>
          <div className="space-y-4">
            {[
              { value: 'User Obsession', desc: 'Every decision starts with user impact' },
              { value: 'Move Fast', desc: 'Speed beats perfection in early stage' },
              { value: 'Own It', desc: 'Take responsibility, don\'t pass the buck' },
              { value: 'Data-Driven', desc: 'Opinions backed by metrics' },
              { value: 'Team First', desc: 'Collaboration over individual glory' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-white/5 rounded-lg">
                <p className="text-green-400 font-bold">{item.value}</p>
                <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <Award size={20} className="text-green-400" />
            Compensation Philosophy
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
              <p className="text-green-400 font-bold mb-2">Total Comp = Base + ESOP + Performance</p>
              <p className="text-slate-300 text-sm">Competitive base (75th percentile) + meaningful equity for early joiners</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-slate-400 text-xs">ESOP Pool</p>
                <p className="text-white font-bold">15% Reserved</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-slate-400 text-xs">Vesting</p>
                <p className="text-white font-bold">4 yrs, 1 yr cliff</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-slate-400 text-xs">Performance Bonus</p>
                <p className="text-white font-bold">Up to 20%</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-slate-400 text-xs">Benefits</p>
                <p className="text-white font-bold">Health + Flex</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Org Structure */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <Building2 size={20} className="text-green-400" />
          Target Org Structure (End of Q1)
        </h3>
        <div className="flex flex-col items-center">
          {/* CEO */}
          <div className="p-4 bg-purple-500/20 rounded-xl border border-purple-500/30 text-center mb-4">
            <p className="text-purple-400 font-bold">CEO</p>
            <p className="text-slate-400 text-xs">Founder</p>
          </div>

          {/* C-Suite Row */}
          <div className="w-px h-8 bg-white/20" />
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30 text-center">
              <p className="text-blue-400 font-bold text-sm">CTO</p>
              <p className="text-slate-400 text-xs">Hiring</p>
            </div>
            <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30 text-center">
              <p className="text-blue-400 font-bold text-sm">COO</p>
              <p className="text-slate-400 text-xs">Co-founder?</p>
            </div>
            <div className="p-3 bg-pink-500/20 rounded-xl border border-pink-500/30 text-center">
              <p className="text-pink-400 font-bold text-sm">CMO</p>
              <p className="text-slate-400 text-xs">Month 2</p>
            </div>
          </div>

          {/* Team Row */}
          <div className="w-full border-t border-white/10 pt-4">
            <div className="flex flex-wrap justify-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg text-center">
                <p className="text-slate-300 text-xs">2x Sr. Devs</p>
              </div>
              <div className="p-2 bg-white/5 rounded-lg text-center">
                <p className="text-slate-300 text-xs">Head of Sales</p>
              </div>
              <div className="p-2 bg-white/5 rounded-lg text-center">
                <p className="text-slate-300 text-xs">2x Sales Execs</p>
              </div>
              <div className="p-2 bg-white/5 rounded-lg text-center">
                <p className="text-slate-300 text-xs">CS Lead</p>
              </div>
              <div className="p-2 bg-white/5 rounded-lg text-center">
                <p className="text-slate-300 text-xs">Marketing Mgr</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHRO Priorities */}
      <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/30">
        <h3 className="text-green-400 font-bold text-lg mb-4 flex items-center gap-2">
          <Target size={20} />
          CHRO 90-Day Priorities
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-white font-bold mb-3">Week 1-4: Foundation</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span>CTO hire (top priority)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span>Set up HRIS system</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span>Define comp bands</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span>Draft all JDs</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-white font-bold mb-3">Week 5-8: Build</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span>Hire 2 senior devs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span>Hire Head of Sales</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span>Onboarding playbook</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span>Performance framework</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-white font-bold mb-3">Week 9-12: Scale</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span>Complete team of 12</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span>Culture rituals in place</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span>First eNPS survey</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span>Training programs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== CFO SECTION ====================
function CFOSection() {
  return (
    <div className="space-y-8">
      {/* CFO Header */}
      <div className="bg-gradient-to-r from-orange-500/20 to-orange-500/5 rounded-2xl p-8 border border-orange-500/30">
        <div className="flex items-start gap-4">
          <div className="p-4 rounded-2xl bg-orange-500/20">
            <Calculator size={40} className="text-orange-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-orange-400">CFO Financial Analysis</h2>
            <p className="text-slate-300 mt-2">Financial Strategy, Unit Economics, Runway & Investor Reporting</p>
          </div>
        </div>
      </div>

      {/* Key Financial Metrics */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Monthly Burn Rate', value: 'AED 85K', target: '< AED 150K', status: 'healthy' },
          { label: 'Runway (Post-Seed)', value: '18 months', target: '> 18 months', status: 'healthy' },
          { label: 'MRR', value: 'AED 12K', target: 'AED 200K by Q4', status: 'growing' },
          { label: 'Gross Margin', value: '75%', target: '> 70%', status: 'healthy' },
        ].map((kpi, idx) => (
          <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-slate-400 text-sm">{kpi.label}</p>
            <p className="text-2xl font-bold text-white mt-1">{kpi.value}</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-orange-400 text-xs">Target: {kpi.target}</p>
              <span className={`px-2 py-0.5 rounded text-xs ${
                kpi.status === 'healthy' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {kpi.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Financial Projections */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <LineChart size={20} className="text-orange-400" />
          12-Month Financial Projections
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-3 text-orange-400">Metric</th>
                <th className="text-right p-3 text-orange-400">Q1</th>
                <th className="text-right p-3 text-orange-400">Q2</th>
                <th className="text-right p-3 text-orange-400">Q3</th>
                <th className="text-right p-3 text-orange-400">Q4</th>
                <th className="text-right p-3 text-orange-400">Year 1</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="p-3 font-medium text-white">Revenue</td>
                <td className="p-3 text-right">AED 75K</td>
                <td className="p-3 text-right">AED 250K</td>
                <td className="p-3 text-right">AED 600K</td>
                <td className="p-3 text-right">AED 1.2M</td>
                <td className="p-3 text-right text-green-400 font-bold">AED 2.1M</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-3 font-medium text-white">COGS</td>
                <td className="p-3 text-right">AED 19K</td>
                <td className="p-3 text-right">AED 63K</td>
                <td className="p-3 text-right">AED 150K</td>
                <td className="p-3 text-right">AED 300K</td>
                <td className="p-3 text-right">AED 532K</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-3 font-medium text-white">Gross Profit</td>
                <td className="p-3 text-right">AED 56K</td>
                <td className="p-3 text-right">AED 187K</td>
                <td className="p-3 text-right">AED 450K</td>
                <td className="p-3 text-right">AED 900K</td>
                <td className="p-3 text-right text-green-400 font-bold">AED 1.6M</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-3 font-medium text-white">Operating Expenses</td>
                <td className="p-3 text-right">AED 450K</td>
                <td className="p-3 text-right">AED 550K</td>
                <td className="p-3 text-right">AED 650K</td>
                <td className="p-3 text-right">AED 750K</td>
                <td className="p-3 text-right">AED 2.4M</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-3 font-medium text-white">Net Income</td>
                <td className="p-3 text-right text-red-400">-AED 394K</td>
                <td className="p-3 text-right text-red-400">-AED 363K</td>
                <td className="p-3 text-right text-red-400">-AED 200K</td>
                <td className="p-3 text-right text-green-400">AED 150K</td>
                <td className="p-3 text-right text-red-400">-AED 807K</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white">Cash Balance</td>
                <td className="p-3 text-right">AED 2.1M</td>
                <td className="p-3 text-right">AED 1.7M</td>
                <td className="p-3 text-right">AED 1.5M</td>
                <td className="p-3 text-right">AED 1.65M</td>
                <td className="p-3 text-right text-orange-400 font-bold">AED 1.65M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Unit Economics */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <Coins size={20} className="text-orange-400" />
            Unit Economics (Per User)
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-orange-500/10 rounded-xl border border-orange-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400">LTV : CAC Ratio</span>
                <span className="text-3xl font-bold text-green-400">16.8:1</span>
              </div>
              <p className="text-slate-500 text-xs">Target: &gt; 3:1 | Industry avg: 3-5:1</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-slate-400 text-xs">Customer Acquisition Cost</p>
                <p className="text-white font-bold text-xl">AED 30</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-slate-400 text-xs">Lifetime Value</p>
                <p className="text-white font-bold text-xl">AED 504</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-slate-400 text-xs">Avg Revenue/User/Mo</p>
                <p className="text-white font-bold text-xl">AED 42</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-slate-400 text-xs">Avg User Lifespan</p>
                <p className="text-white font-bold text-xl">22.5 mo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <DollarSign size={20} className="text-orange-400" />
            Revenue Streams
          </h3>
          <div className="space-y-3">
            {[
              { stream: 'Merchant Commission', pct: 60, amount: 'AED 1.26M', model: '5-8% of GMV' },
              { stream: 'Subscription (Premium)', pct: 20, amount: 'AED 420K', model: 'AED 29/mo' },
              { stream: 'Advertising/Promoted', pct: 15, amount: 'AED 315K', model: 'CPC/CPM' },
              { stream: 'Data & Insights', pct: 5, amount: 'AED 105K', model: 'Reports to merchants' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-white/5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{item.stream}</span>
                  <span className="text-orange-400 font-bold">{item.pct}%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">{item.model}</span>
                  <span className="text-slate-400">{item.amount}/yr</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full mt-2">
                  <div
                    className="h-1 bg-orange-400 rounded-full"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Budget Allocation */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <PieChart size={20} className="text-orange-400" />
          Q1 Budget Allocation (Post-SAFE: $400K)
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="space-y-3">
              {[
                { category: 'Marketing & UA', pct: 35, amount: '$140K', detail: 'Growth campaigns' },
                { category: 'Technology & Infra', pct: 25, amount: '$100K', detail: 'AWS, tools, dev' },
                { category: 'Team & HR', pct: 20, amount: '$80K', detail: 'Key hires' },
                { category: 'Operations', pct: 15, amount: '$60K', detail: 'Office, legal, admin' },
                { category: 'Contingency', pct: 5, amount: '$20K', detail: 'Buffer for unknowns' },
              ].map((item, idx) => (
                <div key={idx} className="p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white">{item.category}</span>
                    <span className="text-orange-400 font-bold">{item.amount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-white/10 rounded-full">
                      <div
                        className="h-2 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                    <span className="text-slate-400 text-xs w-20">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="p-4 bg-orange-500/10 rounded-xl border border-orange-500/30 mb-4">
              <p className="text-orange-400 font-bold mb-2">SAFE Round Usage</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Tranche 1 (Closing)</span>
                  <span className="text-white font-medium">$200K</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Tranche 2 (Milestones)</span>
                  <span className="text-white font-medium">$200K</span>
                </div>
                <div className="flex justify-between text-sm border-t border-white/10 pt-2">
                  <span className="text-orange-400 font-bold">Total SAFE</span>
                  <span className="text-orange-400 font-bold">$400K</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
              <p className="text-green-400 font-bold mb-2">Series A Triggers</p>
              <ul className="space-y-1 text-slate-300 text-sm">
                <li>• 100K active users</li>
                <li>• AED 200K MRR</li>
                <li>• 500 merchant partners</li>
                <li>• Positive unit economics proven</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CFO Dashboard */}
      <div className="bg-orange-500/10 rounded-2xl p-6 border border-orange-500/30">
        <h3 className="text-orange-400 font-bold text-lg mb-4 flex items-center gap-2">
          <BarChart3 size={20} />
          CFO Weekly Dashboard & Priorities
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-white font-bold mb-3">Daily Monitoring:</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-orange-400" />
                Cash position & burn rate
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-orange-400" />
                Revenue & transaction volume
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-orange-400" />
                Accounts receivable aging
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-bold mb-3">Weekly Reviews:</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-orange-400" />
                Budget vs actual variance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-orange-400" />
                Unit economics update
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-orange-400" />
                Payroll & expense approval
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-bold mb-3">Monthly Deliverables:</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-orange-400" />
                Investor update report
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-orange-400" />
                Financial statements
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-orange-400" />
                Board financial pack
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-orange-400" />
                13-week cash forecast
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
