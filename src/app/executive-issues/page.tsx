'use client';

import React, { useState } from 'react';
import {
  Crown,
  Settings,
  Megaphone,
  Users,
  Calculator,
  AlertTriangle,
  CheckCircle,
  Target,
  TrendingUp,
  ArrowRight,
  Zap,
  Shield,
  DollarSign,
  Clock,
  AlertCircle,
  Lightbulb,
  BarChart3,
  UserPlus,
  Building2,
  Rocket,
  XCircle,
  RefreshCw,
  Eye,
  Heart,
  Award,
  Flag,
  MapPin,
  Phone,
  Mail,
  Calendar,
  FileText,
  PieChart,
  TrendingDown,
  Flame,
  Star,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Briefcase
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

/**
 * EXECUTIVE ISSUES & STRATEGY ANALYSIS
 *
 * Deep analysis from 20-year experienced C-Suite executives
 * Identifying current issues, solutions, and strategic actions
 *
 * Brand colors: #c9a227 (gold), #0a1628 (dark blue)
 */

type TabId = 'overview' | 'ceo' | 'coo' | 'cmo' | 'chro' | 'cfo';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ElementType;
  color: string;
}

const tabs: Tab[] = [
  { id: 'overview', label: 'Critical Overview', icon: AlertTriangle, color: 'text-red-400' },
  { id: 'ceo', label: 'CEO Analysis', icon: Crown, color: 'text-purple-400' },
  { id: 'coo', label: 'COO Analysis', icon: Settings, color: 'text-blue-400' },
  { id: 'cmo', label: 'CMO Analysis', icon: Megaphone, color: 'text-pink-400' },
  { id: 'chro', label: 'CHRO Analysis', icon: Users, color: 'text-green-400' },
  { id: 'cfo', label: 'CFO Analysis', icon: Calculator, color: 'text-orange-400' },
];

const tabBorderColors: Record<TabId, string> = {
  overview: 'border-red-400',
  ceo: 'border-purple-400',
  coo: 'border-blue-400',
  cmo: 'border-pink-400',
  chro: 'border-green-400',
  cfo: 'border-orange-400',
};

const tabBgColors: Record<TabId, string> = {
  overview: 'bg-red-400/10',
  ceo: 'bg-purple-400/10',
  coo: 'bg-blue-400/10',
  cmo: 'bg-pink-400/10',
  chro: 'bg-green-400/10',
  cfo: 'bg-orange-400/10',
};

export default function ExecutiveIssuesPage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628]">
      {/* Header */}
      <div className="bg-[#0a1628]/80 backdrop-blur-sm border-b border-[#c9a227]/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-red-500 to-red-600">
                  <AlertTriangle className="text-white" size={24} />
                </div>
                Executive Issues & Strategy Analysis
              </h1>
              <p className="text-slate-400 text-sm mt-1">20-Year C-Suite Experience Assessment</p>
            </div>
            <div className="text-right">
              <p className="text-[#c9a227] font-bold">NUQTA</p>
              <p className="text-slate-500 text-xs">Critical Analysis - Feb 2026</p>
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
        {activeTab === 'overview' && <CriticalOverview />}
        {activeTab === 'ceo' && <CEOAnalysis />}
        {activeTab === 'coo' && <COOAnalysis />}
        {activeTab === 'cmo' && <CMOAnalysis />}
        {activeTab === 'chro' && <CHROAnalysis />}
        {activeTab === 'cfo' && <CFOAnalysis />}
      </div>

      <GlobalFooter />
    </div>
  );
}

// ==================== CRITICAL OVERVIEW ====================
function CriticalOverview() {
  return (
    <div className="space-y-8">
      {/* Executive Summary Banner */}
      <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30">
        <div className="flex items-start gap-4">
          <div className="p-4 rounded-2xl bg-red-500/20">
            <AlertTriangle size={40} className="text-red-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-red-400">Critical Assessment: Nuqta Current State</h2>
            <p className="text-slate-300 mt-2">
              As a collective C-Suite with 100+ combined years of experience, we&apos;ve identified
              <span className="text-red-400 font-bold"> 12 critical issues</span> that must be addressed
              before and during launch. Below is our unified assessment and action plan.
            </p>
          </div>
        </div>
      </div>

      {/* Severity Matrix */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/30">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle size={24} className="text-green-400" />
            <h3 className="text-green-400 font-bold text-lg">COMPLETED</h3>
          </div>
          <ul className="space-y-3">
            {[
              { issue: '✓ CTO Hired', owner: 'CEO/CHRO' },
              { issue: '✓ Product 100% Complete', owner: 'CTO' },
              { issue: '✓ Full Team (8 members)', owner: 'CHRO' },
              { issue: '✓ Payment Integration Done', owner: 'CTO' },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">{item.issue}</span>
                  <span className="text-slate-500 text-xs block">Owner: {item.owner}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-yellow-500/10 rounded-2xl p-6 border border-yellow-500/30">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={24} className="text-yellow-400" />
            <h3 className="text-yellow-400 font-bold text-lg">IN PROGRESS (Launch Phase)</h3>
          </div>
          <ul className="space-y-3">
            {[
              { issue: 'Convert LOIs to live merchants', owner: 'BDA/COO' },
              { issue: 'Deploy marketing campaigns', owner: 'CMO' },
              { issue: 'Close funding round', owner: 'CEO/CFO' },
              { issue: 'Beta testing & launch', owner: 'CTO/Full Team' },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                <AlertTriangle size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">{item.issue}</span>
                  <span className="text-slate-500 text-xs block">Owner: {item.owner}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-500/30">
          <div className="flex items-center gap-2 mb-4">
            <Eye size={24} className="text-blue-400" />
            <h3 className="text-blue-400 font-bold text-lg">MEDIUM (Monitor)</h3>
          </div>
          <ul className="space-y-3">
            {[
              { issue: 'Competitor response unknown', owner: 'CEO/CMO' },
              { issue: 'Unit economics unproven', owner: 'CFO' },
              { issue: 'Regulatory clarity needed', owner: 'CEO/Legal' },
              { issue: 'Brand awareness = 0', owner: 'CMO' },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                <Eye size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">{item.issue}</span>
                  <span className="text-slate-500 text-xs block">Owner: {item.owner}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* The Hard Truth */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <MessageSquare size={24} className="text-[#c9a227]" />
          The Hard Truth (20 Years Experience Speaking)
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-red-400 font-bold flex items-center gap-2">
              <ThumbsDown size={18} />
              What&apos;s NOT Working
            </h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <XCircle size={14} className="text-red-400 mt-0.5" />
                <span><strong>No product in market</strong> - All planning, no execution</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle size={14} className="text-red-400 mt-0.5" />
                <span><strong>No technical leadership</strong> - Can&apos;t build without CTO</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle size={14} className="text-red-400 mt-0.5" />
                <span><strong>Over-planning syndrome</strong> - 200+ docs, 0 users</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle size={14} className="text-red-400 mt-0.5" />
                <span><strong>LOIs ≠ Revenue</strong> - Letters don&apos;t pay bills</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle size={14} className="text-red-400 mt-0.5" />
                <span><strong>Fundraising stalled</strong> - No closed round = no runway</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle size={14} className="text-red-400 mt-0.5" />
                <span><strong>Team too small</strong> - 4 people can&apos;t do 12 people&apos;s work</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-green-400 font-bold flex items-center gap-2">
              <ThumbsUp size={18} />
              What IS Working
            </h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span><strong>Clear business model</strong> - Merchant-funded is smart</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span><strong>Strong unit economics</strong> - 16.8x LTV:CAC on paper</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span><strong>Market timing</strong> - UAE rewards market is ripe</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span><strong>Strategic clarity</strong> - Vision is well-defined</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span><strong>Merchant interest</strong> - 30+ LOIs shows demand</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5" />
                <span><strong>Comprehensive planning</strong> - Ready to execute</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 30-Day War Room Plan */}
      <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl p-8 border border-[#c9a227]/30">
        <h2 className="text-xl font-bold text-[#c9a227] mb-6 flex items-center gap-3">
          <Flame size={24} />
          30-Day War Room: From Zero to Launch
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              week: 'Week 1',
              title: 'Emergency Hiring',
              tasks: ['Hire CTO (contract if needed)', 'Bring in 2 freelance devs', 'Close at least 1 investor'],
              owner: 'CEO + CHRO',
              kpi: 'CTO signed'
            },
            {
              week: 'Week 2',
              title: 'Product Sprint',
              tasks: ['App store submission', '10 merchants LIVE (not LOI)', 'Payment integration complete'],
              owner: 'CTO + COO',
              kpi: 'App approved'
            },
            {
              week: 'Week 3',
              title: 'Launch Prep',
              tasks: ['100 beta users onboarded', 'Marketing campaigns live', 'Press release ready'],
              owner: 'CMO + COO',
              kpi: '100 users'
            },
            {
              week: 'Week 4',
              title: 'Public Launch',
              tasks: ['Full public launch', 'Influencer campaign', 'First revenue transaction'],
              owner: 'ALL',
              kpi: 'First AED earned'
            },
          ].map((week, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#c9a227] font-bold">{week.week}</span>
                <span className="text-xs px-2 py-1 bg-[#c9a227]/20 text-[#c9a227] rounded">{week.owner}</span>
              </div>
              <p className="text-white font-bold text-sm mb-3">{week.title}</p>
              <ul className="space-y-1 mb-3">
                {week.tasks.map((task, tIdx) => (
                  <li key={tIdx} className="text-slate-400 text-xs flex items-start gap-1">
                    <ArrowRight size={12} className="text-[#c9a227] mt-0.5 flex-shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-white/10">
                <p className="text-xs text-slate-500">Success KPI:</p>
                <p className="text-[#c9a227] text-sm font-bold">{week.kpi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cross-Functional Dependencies */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <RefreshCw size={20} className="text-[#c9a227]" />
          Critical Dependencies (Blocking Each Other)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-3 text-[#c9a227]">Blocked Item</th>
                <th className="text-left p-3 text-[#c9a227]">Blocked By</th>
                <th className="text-left p-3 text-[#c9a227]">Impact</th>
                <th className="text-left p-3 text-[#c9a227]">Resolution</th>
              </tr>
            </thead>
            <tbody className="text-slate-300 text-sm">
              {[
                { blocked: 'App Development', by: 'No CTO', impact: 'Cannot launch', resolution: 'Hire CTO or contract agency' },
                { blocked: 'Hiring Team', by: 'No Funding', impact: 'Cannot scale', resolution: 'Close seed round ASAP' },
                { blocked: 'Marketing Spend', by: 'No Budget', impact: 'No user acquisition', resolution: 'Bootstrap + seed funding' },
                { blocked: 'Merchant Go-Live', by: 'No App', impact: 'LOIs expire', resolution: 'Ship MVP in 2 weeks' },
                { blocked: 'Revenue', by: 'No Users', impact: 'No proof of concept', resolution: 'Launch beta immediately' },
                { blocked: 'Series A', by: 'No Traction', impact: 'No growth capital', resolution: 'Prove unit economics' },
              ].map((item, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-3 text-white font-medium">{item.blocked}</td>
                  <td className="p-3 text-red-400">{item.by}</td>
                  <td className="p-3 text-yellow-400">{item.impact}</td>
                  <td className="p-3 text-green-400">{item.resolution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Executive Accountability */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <Award size={20} className="text-[#c9a227]" />
          Executive Accountability Matrix (Next 30 Days)
        </h3>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { role: 'CEO', color: 'purple', commitments: ['Close AED 1M+ funding', 'Hire CTO', 'Sign GV partnership'], metric: 'Capital raised' },
            { role: 'COO', color: 'blue', commitments: ['10 merchants LIVE', 'Operations playbook', 'Support system up'], metric: 'Live merchants' },
            { role: 'CMO', color: 'pink', commitments: ['1,000 app installs', 'Brand launch', '5 influencers signed'], metric: 'App installs' },
            { role: 'CHRO', color: 'green', commitments: ['8 hires completed', 'Onboarding ready', 'Culture doc live'], metric: 'Headcount' },
            { role: 'CFO', color: 'orange', commitments: ['Financial model updated', 'Investor reporting', 'Burn < AED 100K'], metric: 'Runway months' },
          ].map((exec, idx) => (
            <div key={idx} className={`p-4 rounded-xl border bg-${exec.color}-500/10 border-${exec.color}-500/30`}
                 style={{ background: `rgba(var(--${exec.color}-500), 0.1)` }}>
              <p className={`font-bold mb-3 text-${exec.color}-400`}
                 style={{ color: exec.color === 'purple' ? '#a78bfa' : exec.color === 'blue' ? '#60a5fa' : exec.color === 'pink' ? '#f472b6' : exec.color === 'green' ? '#4ade80' : '#fb923c' }}>
                {exec.role}
              </p>
              <ul className="space-y-1 mb-3">
                {exec.commitments.map((c, cIdx) => (
                  <li key={cIdx} className="text-slate-300 text-xs flex items-start gap-1">
                    <CheckCircle size={12} className="mt-0.5 flex-shrink-0" style={{ color: exec.color === 'purple' ? '#a78bfa' : exec.color === 'blue' ? '#60a5fa' : exec.color === 'pink' ? '#f472b6' : exec.color === 'green' ? '#4ade80' : '#fb923c' }} />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-white/10">
                <p className="text-slate-500 text-xs">Key Metric:</p>
                <p className="text-white text-sm font-medium">{exec.metric}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== CEO ANALYSIS ====================
function CEOAnalysis() {
  return (
    <div className="space-y-8">
      {/* CEO Header */}
      <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-2xl p-8 border border-purple-500/30">
        <div className="flex items-start gap-4">
          <div className="p-4 rounded-2xl bg-purple-500/20">
            <Crown size={40} className="text-purple-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-purple-400">CEO Critical Analysis</h2>
            <p className="text-slate-300 mt-2 italic">
              &ldquo;After 20 years leading startups from seed to IPO, here&apos;s my honest assessment...&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* CEO Issues */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <AlertTriangle size={20} className="text-red-400" />
          Critical Issues I See
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              issue: 'Fundraising Not Closed',
              severity: 'CRITICAL',
              diagnosis: 'You have a beautiful pitch deck and investor materials, but no money in the bank. Investors can smell desperation. The longer you wait, the weaker your position.',
              impact: 'Cannot hire, cannot market, cannot execute. Every week of delay costs you market timing.',
              myExperience: 'I\'ve seen 100+ startups die not because of bad ideas, but because they ran out of runway while "perfecting" their pitch.'
            },
            {
              issue: 'No Technical Co-founder/CTO',
              severity: 'CRITICAL',
              diagnosis: 'You\'re building a tech company without a tech leader. This is like opening a restaurant without a chef.',
              impact: 'Product development is paralyzed. You cannot iterate. You cannot respond to user feedback.',
              myExperience: 'Every successful startup I\'ve led had technical leadership from Day 1. Outsourcing core tech is a recipe for disaster.'
            },
            {
              issue: 'Over-Documentation Syndrome',
              severity: 'HIGH',
              diagnosis: 'You have 200+ strategy documents but zero users. This is "productive procrastination" - feels like work, but doesn\'t move the needle.',
              impact: 'Analysis paralysis. Your competitors are shipping while you\'re writing.',
              myExperience: 'The best CEOs I know spend 80% executing, 20% planning. You seem inverted.'
            },
            {
              issue: 'No Board/Advisory Structure',
              severity: 'MEDIUM',
              diagnosis: 'You\'re making all decisions alone. No external accountability, no experienced guidance.',
              impact: 'Blind spots multiply. Investor confidence decreases without governance.',
              myExperience: 'Even pre-seed, having 2-3 advisors with skin in the game changes everything.'
            },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-bold">{item.issue}</h4>
                <span className={`px-2 py-1 rounded text-xs ${
                  item.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400' :
                  item.severity === 'HIGH' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {item.severity}
                </span>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-purple-400 font-medium">Diagnosis:</p>
                  <p className="text-slate-300">{item.diagnosis}</p>
                </div>
                <div>
                  <p className="text-red-400 font-medium">Business Impact:</p>
                  <p className="text-slate-300">{item.impact}</p>
                </div>
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <p className="text-purple-400 font-medium text-xs">From 20 Years Experience:</p>
                  <p className="text-slate-300 italic">&ldquo;{item.myExperience}&rdquo;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CEO Solutions */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <Lightbulb size={20} className="text-green-400" />
          My Recommended Solutions
        </h3>
        <div className="space-y-4">
          {[
            {
              solution: 'Close Funding in 14 Days - Here\'s How',
              steps: [
                'Pick your TOP 3 investors (not 15). Quality over quantity.',
                'Offer better terms to close fast: 25% discount instead of 20%, or lower valuation.',
                'Create FOMO: "We\'re closing in 2 weeks with or without you"',
                'Get one anchor investor first (even smaller check), others follow.',
                'If VCs are slow, go to angels. Speed beats perfect terms.',
              ],
              timeline: '14 days',
              cost: 'May sacrifice 5-10% more equity. Worth it for speed.'
            },
            {
              solution: 'Hire CTO in 7 Days - Emergency Protocol',
              steps: [
                'Day 1-2: Post on LinkedIn, AngelList, reach out to your network',
                'Day 3-4: Interview 5+ candidates (video calls, rapid fire)',
                'Day 5: Make offer to top candidate with significant equity (3-5%)',
                'Day 6-7: If no CTO, sign a dev agency for 3-month contract',
                'Parallel track: Hire 2 senior devs as insurance',
              ],
              timeline: '7 days',
              cost: '3-5% equity for CTO, or AED 50-80K/month for agency'
            },
            {
              solution: 'Stop Planning, Start Shipping',
              steps: [
                'Freeze all new documentation immediately',
                'Take your MVP and ship it TODAY (even if imperfect)',
                'Get 10 real users this week, not next month',
                'Every meeting must have a "ship something" outcome',
                'Delete 50% of your roadmap - focus only on Day 1 features',
              ],
              timeline: 'Immediate',
              cost: 'Free - requires mindset shift only'
            },
          ].map((item, idx) => (
            <div key={idx} className="p-5 bg-green-500/5 rounded-xl border border-green-500/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-green-400 font-bold text-lg">{item.solution}</h4>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                  {item.timeline}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-white font-medium mb-2">Action Steps:</p>
                  <ol className="space-y-2">
                    {item.steps.map((step, sIdx) => (
                      <li key={sIdx} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs flex-shrink-0">
                          {sIdx + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="text-slate-400 text-sm mb-2">Cost/Trade-off:</p>
                  <p className="text-white">{item.cost}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CEO Strategy */}
      <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/30">
        <h3 className="text-purple-400 font-bold text-lg mb-4 flex items-center gap-2">
          <Target size={20} />
          My Strategic Recommendations
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-bold mb-3">Change Your Investor Approach</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="text-purple-400 mt-0.5" />
                <span>Stop sending decks. Start showing product demos.</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="text-purple-400 mt-0.5" />
                <span>Bring a merchant to investor meetings (social proof).</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="text-purple-400 mt-0.5" />
                <span>Show traction, not projections. Even 10 users beats 10 slides.</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="text-purple-400 mt-0.5" />
                <span>Create urgency: &ldquo;We launch in 2 weeks regardless.&rdquo;</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Restructure Your Time</h4>
            <div className="space-y-2">
              {[
                { activity: 'Fundraising & Closing', current: 20, recommended: 50 },
                { activity: 'Hiring (especially CTO)', current: 10, recommended: 25 },
                { activity: 'Product/Shipping', current: 20, recommended: 15 },
                { activity: 'Strategy/Planning', current: 40, recommended: 5 },
                { activity: 'External (PR/Network)', current: 10, recommended: 5 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <span className="text-slate-400 w-36">{item.activity}</span>
                  <span className="text-red-400 w-12">{item.current}%</span>
                  <ArrowRight size={14} className="text-purple-400" />
                  <span className="text-green-400 w-12">{item.recommended}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== COO ANALYSIS ====================
function COOAnalysis() {
  return (
    <div className="space-y-8">
      {/* COO Header */}
      <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/5 rounded-2xl p-8 border border-blue-500/30">
        <div className="flex items-start gap-4">
          <div className="p-4 rounded-2xl bg-blue-500/20">
            <Settings size={40} className="text-blue-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-blue-400">COO Critical Analysis</h2>
            <p className="text-slate-300 mt-2 italic">
              &ldquo;I&apos;ve scaled operations from 0 to 10,000+ merchants. Here&apos;s the reality check...&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* COO Issues */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <AlertTriangle size={20} className="text-red-400" />
          Operational Red Flags
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              issue: 'LOIs Are Not Merchants',
              severity: 'CRITICAL',
              reality: 'You have 30+ LOIs but ZERO live merchants. An LOI is a piece of paper. A live merchant is revenue.',
              gap: 'LOI → Signed Contract → Integration → Training → Go-Live. You haven\'t completed this journey ONCE.',
              risk: 'LOIs expire. Merchant enthusiasm fades. Competitors can steal them while you\'re "preparing".'
            },
            {
              issue: 'No Operations Infrastructure',
              severity: 'HIGH',
              reality: 'You have detailed playbooks but no: Support system, Merchant portal, Issue tracking, SLA monitoring.',
              gap: 'Documentation without systems is useless. You need tools, not just processes.',
              risk: 'First merchant complaint will expose you. Bad reviews spread fast in UAE business community.'
            },
            {
              issue: 'Payment Integration Missing',
              severity: 'CRITICAL',
              reality: 'No payment gateway integrated. This is the CORE of your business - cashback requires payment tracking.',
              gap: 'Need: Payment processor, POS integration, Bank reconciliation, Fraud detection.',
              risk: 'Cannot launch without this. It\'s not optional - it\'s the product.'
            },
            {
              issue: 'No Supply-Demand Matching',
              severity: 'HIGH',
              reality: 'You\'re planning to acquire users before you have merchants live. Users without deals = churn.',
              gap: 'Classic chicken-and-egg. Must solve with geographic focus + merchant-first launch.',
              risk: 'Early users have bad experience, leave bad reviews, never come back.'
            },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-bold">{item.issue}</h4>
                <span className={`px-2 py-1 rounded text-xs ${
                  item.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {item.severity}
                </span>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-blue-400 font-medium">Reality Check:</p>
                  <p className="text-slate-300">{item.reality}</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-medium">The Gap:</p>
                  <p className="text-slate-300">{item.gap}</p>
                </div>
                <div>
                  <p className="text-red-400 font-medium">Risk If Not Fixed:</p>
                  <p className="text-slate-300">{item.risk}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COO Solutions */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <Lightbulb size={20} className="text-green-400" />
          Operational Turnaround Plan
        </h3>
        <div className="space-y-6">
          <div className="p-5 bg-blue-500/5 rounded-xl border border-blue-500/20">
            <h4 className="text-blue-400 font-bold text-lg mb-4">Week 1: Convert 10 LOIs to LIVE Merchants</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-white font-medium mb-2">Day 1-2: Prioritize</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Rank LOIs by: ease of integration, foot traffic, brand value</li>
                  <li>• Pick top 15 (target 10, assume 30% dropout)</li>
                  <li>• Call each one personally - TODAY</li>
                </ul>
              </div>
              <div>
                <p className="text-white font-medium mb-2">Day 3-4: Contract & Integrate</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Send simplified 2-page contracts</li>
                  <li>• Set up their merchant profiles manually</li>
                  <li>• Create QR codes and marketing materials</li>
                </ul>
              </div>
              <div>
                <p className="text-white font-medium mb-2">Day 5-7: Go Live</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• On-site training (1 hour per merchant)</li>
                  <li>• Test transaction with each</li>
                  <li>• Launch announcement on social</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-5 bg-green-500/5 rounded-xl border border-green-500/20">
            <h4 className="text-green-400 font-bold text-lg mb-4">Geographic Focus Strategy</h4>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { area: 'Dubai Marina', merchants: 5, reason: 'High foot traffic, expat-friendly', priority: 1 },
                { area: 'JBR', merchants: 3, reason: 'Tourist + resident mix', priority: 2 },
                { area: 'Downtown', merchants: 2, reason: 'Premium positioning', priority: 3 },
                { area: 'Others', merchants: 0, reason: 'Expand after proving model', priority: 4 },
              ].map((area, idx) => (
                <div key={idx} className="p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold">{area.area}</span>
                    <span className="text-green-400 text-sm">P{area.priority}</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-400">{area.merchants}</p>
                  <p className="text-slate-500 text-xs mt-1">{area.reason}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-sm mt-4 italic">
              &ldquo;Don&apos;t boil the ocean. Own 3 blocks completely before expanding. Density beats breadth.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* COO KPIs */}
      <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-500/30">
        <h3 className="text-blue-400 font-bold text-lg mb-4 flex items-center gap-2">
          <BarChart3 size={20} />
          Operations KPIs I Would Track
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { metric: 'Live Merchants', current: '0', target: '10', deadline: 'Week 1' },
            { metric: 'LOI Conversion', current: '0%', target: '33%', deadline: 'Week 2' },
            { metric: 'Merchant NPS', current: 'N/A', target: '> 50', deadline: 'Month 1' },
            { metric: 'Onboard Time', current: 'N/A', target: '< 48hrs', deadline: 'Week 2' },
            { metric: 'Support Response', current: 'N/A', target: '< 1hr', deadline: 'Week 1' },
            { metric: 'First Transaction', current: '0', target: '100', deadline: 'Week 2' },
            { metric: 'System Uptime', current: 'N/A', target: '99.5%', deadline: 'Launch' },
            { metric: 'Integration Errors', current: 'N/A', target: '< 1%', deadline: 'Week 3' },
          ].map((kpi, idx) => (
            <div key={idx} className="p-3 bg-white/5 rounded-lg">
              <p className="text-slate-400 text-xs">{kpi.metric}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-red-400 text-lg">{kpi.current}</span>
                <ArrowRight size={14} className="text-blue-400" />
                <span className="text-green-400 text-lg font-bold">{kpi.target}</span>
              </div>
              <p className="text-blue-400 text-xs mt-1">By: {kpi.deadline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== CMO ANALYSIS ====================
function CMOAnalysis() {
  return (
    <div className="space-y-8">
      {/* CMO Header */}
      <div className="bg-gradient-to-r from-pink-500/20 to-pink-500/5 rounded-2xl p-8 border border-pink-500/30">
        <div className="flex items-start gap-4">
          <div className="p-4 rounded-2xl bg-pink-500/20">
            <Megaphone size={40} className="text-pink-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-pink-400">CMO Critical Analysis</h2>
            <p className="text-slate-300 mt-2 italic">
              &ldquo;I&apos;ve launched 50+ consumer brands. Your marketing is putting the cart before the horse...&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* CMO Issues */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <AlertTriangle size={20} className="text-red-400" />
          Marketing Reality Check
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              issue: 'Zero Brand Awareness',
              severity: 'HIGH',
              reality: 'Nobody knows Nuqta exists. Zero social presence, zero PR, zero word-of-mouth.',
              problem: 'You have a marketing PLAN but no marketing EXECUTION. Plans don\'t create awareness.',
              truth: 'In UAE, brand building takes 6-12 months. You\'re starting from absolute zero.'
            },
            {
              issue: 'No Marketing Spend Deployed',
              severity: 'CRITICAL',
              reality: 'You\'ve allocated AED 225K for Q1 marketing but spent AED 0. Budget without execution = nothing.',
              problem: 'Waiting for "perfect timing" or "more merchants". Perfect timing doesn\'t exist.',
              truth: 'Even AED 10K/week on Instagram would give you learnings. Silence teaches nothing.'
            },
            {
              issue: 'Influencer Strategy = Zero Execution',
              severity: 'HIGH',
              reality: 'You have influencer templates but zero signed influencers, zero content, zero reach.',
              problem: 'UAE influencer space is competitive. Good ones are booked months ahead.',
              truth: 'You should have started influencer outreach 2 months ago. Now you\'re behind.'
            },
            {
              issue: 'Messaging Not Tested',
              severity: 'MEDIUM',
              reality: 'Your positioning ("Every Purchase is a Win") is theoretical. Never tested with real users.',
              problem: 'What resonates in a boardroom may flop in the market. You don\'t know yet.',
              truth: 'Need 1,000+ impressions and A/B tests to know what messaging works.'
            },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-bold">{item.issue}</h4>
                <span className={`px-2 py-1 rounded text-xs ${
                  item.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400' :
                  item.severity === 'HIGH' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {item.severity}
                </span>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-pink-400 font-medium">Current Reality:</p>
                  <p className="text-slate-300">{item.reality}</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-medium">The Problem:</p>
                  <p className="text-slate-300">{item.problem}</p>
                </div>
                <div className="p-3 bg-pink-500/10 rounded-lg">
                  <p className="text-pink-400 font-medium text-xs">Hard Truth:</p>
                  <p className="text-slate-300 italic">&ldquo;{item.truth}&rdquo;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CMO Action Plan */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <Rocket size={20} className="text-green-400" />
          7-Day Marketing Blitz
        </h3>
        <div className="grid md:grid-cols-7 gap-2">
          {[
            { day: 'Day 1', action: 'Launch Instagram + TikTok accounts', budget: 'AED 0', outcome: 'Social presence live' },
            { day: 'Day 2', action: 'Post 3x content (app preview, team, vision)', budget: 'AED 500', outcome: '5 posts scheduled' },
            { day: 'Day 3', action: 'Start Instagram ads (awareness)', budget: 'AED 2,000', outcome: '10K impressions' },
            { day: 'Day 4', action: 'DM 20 micro-influencers', budget: 'AED 0', outcome: '5 responses' },
            { day: 'Day 5', action: 'Sign first 2 influencers', budget: 'AED 5,000', outcome: 'Content scheduled' },
            { day: 'Day 6', action: 'Launch referral waitlist', budget: 'AED 1,000', outcome: '500 signups' },
            { day: 'Day 7', action: 'First PR outreach', budget: 'AED 0', outcome: '3 journalist contacts' },
          ].map((day, idx) => (
            <div key={idx} className="p-3 bg-pink-500/5 rounded-lg border border-pink-500/20">
              <p className="text-pink-400 font-bold text-xs">{day.day}</p>
              <p className="text-white text-xs mt-2 leading-tight">{day.action}</p>
              <div className="mt-2 pt-2 border-t border-white/10">
                <p className="text-slate-500 text-xs">{day.budget}</p>
                <p className="text-green-400 text-xs">{day.outcome}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-slate-400 text-sm mt-4">
          <strong>Total 7-Day Budget: AED 8,500</strong> — Stop waiting. Start spending. Learn from real data.
        </p>
      </div>

      {/* Channel Prioritization */}
      <div className="bg-pink-500/10 rounded-2xl p-6 border border-pink-500/30">
        <h3 className="text-pink-400 font-bold text-lg mb-4 flex items-center gap-2">
          <PieChart size={20} />
          Channel Prioritization (My Recommendation)
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
            <h4 className="text-green-400 font-bold mb-3">DO NOW (Week 1)</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-400" />
                Instagram organic + ads
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-400" />
                TikTok organic content
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-400" />
                Referral program launch
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-400" />
                Micro-influencers (5-10K followers)
              </li>
            </ul>
          </div>
          <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
            <h4 className="text-yellow-400 font-bold mb-3">DO NEXT (Week 2-4)</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-yellow-400" />
                Google Ads (search)
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-yellow-400" />
                Mid-tier influencers
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-yellow-400" />
                PR/Media outreach
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-yellow-400" />
                Community building
              </li>
            </ul>
          </div>
          <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/30">
            <h4 className="text-red-400 font-bold mb-3">NOT NOW (Waste of Money)</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <XCircle size={14} className="text-red-400" />
                TV/Radio advertising
              </li>
              <li className="flex items-center gap-2">
                <XCircle size={14} className="text-red-400" />
                Billboard campaigns
              </li>
              <li className="flex items-center gap-2">
                <XCircle size={14} className="text-red-400" />
                Celebrity influencers
              </li>
              <li className="flex items-center gap-2">
                <XCircle size={14} className="text-red-400" />
                Brand awareness without CTA
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== CHRO ANALYSIS ====================
function CHROAnalysis() {
  return (
    <div className="space-y-8">
      {/* CHRO Header */}
      <div className="bg-gradient-to-r from-green-500/20 to-green-500/5 rounded-2xl p-8 border border-green-500/30">
        <div className="flex items-start gap-4">
          <div className="p-4 rounded-2xl bg-green-500/20">
            <Users size={40} className="text-green-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-green-400">CHRO Critical Analysis</h2>
            <p className="text-slate-300 mt-2 italic">
              &ldquo;I&apos;ve built teams from 5 to 500. Your people problem is your business problem...&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* CHRO Issues */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <AlertTriangle size={20} className="text-red-400" />
          People & Culture Red Flags
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              issue: 'Team of 4 Trying to Do Work of 12',
              severity: 'CRITICAL',
              reality: 'You have CEO doing marketing, operations, and fundraising. This is unsustainable.',
              impact: 'Burnout, mistakes, slow execution. Key person risk is extreme.',
              solution: 'Emergency hiring or contractors. Cannot launch with 4 people.'
            },
            {
              issue: 'No CTO = No Product',
              severity: 'CRITICAL',
              reality: 'Tech company without tech leader. You\'re outsourcing your core competency.',
              impact: 'Cannot iterate, cannot fix bugs quickly, cannot build competitive moat.',
              solution: 'Hire CTO with equity, or sign dev agency contract TODAY.'
            },
            {
              issue: 'No Formal HR Structure',
              severity: 'HIGH',
              reality: 'No HRIS, no onboarding process, no performance framework, no comp bands.',
              impact: 'As you hire, chaos will multiply. Each hire makes it worse without structure.',
              solution: 'Set up basic HR infrastructure before scaling team.'
            },
            {
              issue: 'Founder Doing Everything',
              severity: 'HIGH',
              reality: 'CEO is likely working 80+ hours doing tasks that should be delegated.',
              impact: 'Strategic thinking suffers. Quality drops. Decision fatigue sets in.',
              solution: 'Hire COO or operations lead to take execution off CEO plate.'
            },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-bold">{item.issue}</h4>
                <span className={`px-2 py-1 rounded text-xs ${
                  item.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {item.severity}
                </span>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-green-400 font-medium">Reality:</p>
                  <p className="text-slate-300">{item.reality}</p>
                </div>
                <div>
                  <p className="text-red-400 font-medium">Impact:</p>
                  <p className="text-slate-300">{item.impact}</p>
                </div>
                <div>
                  <p className="text-blue-400 font-medium">Solution:</p>
                  <p className="text-slate-300">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Hiring Plan */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <UserPlus size={20} className="text-green-400" />
          14-Day Emergency Hiring Blitz
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-3 text-green-400">Role</th>
                <th className="text-left p-3 text-green-400">Type</th>
                <th className="text-left p-3 text-green-400">Timeline</th>
                <th className="text-left p-3 text-green-400">Cost</th>
                <th className="text-left p-3 text-green-400">Why Critical</th>
              </tr>
            </thead>
            <tbody className="text-slate-300 text-sm">
              {[
                { role: 'CTO', type: 'Full-time w/ Equity', timeline: 'Day 1-7', cost: 'AED 40-60K + 3-5%', why: 'Cannot build product without' },
                { role: 'Senior Dev x2', type: 'Contract/Full-time', timeline: 'Day 1-10', cost: 'AED 25-35K each', why: 'CTO needs a team' },
                { role: 'Head of Sales', type: 'Full-time + Comm', timeline: 'Day 7-14', cost: 'AED 25-35K + 10%', why: 'Convert LOIs to merchants' },
                { role: 'Marketing Lead', type: 'Full-time', timeline: 'Day 7-14', cost: 'AED 18-25K', why: 'Execute marketing plan' },
                { role: 'Operations Manager', type: 'Full-time', timeline: 'Day 10-14', cost: 'AED 15-22K', why: 'Run merchant ops' },
                { role: 'Customer Success', type: 'Full-time', timeline: 'Day 14', cost: 'AED 12-18K', why: 'Support first users' },
              ].map((role, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-3 font-medium text-white">{role.role}</td>
                  <td className="p-3">{role.type}</td>
                  <td className="p-3 text-green-400">{role.timeline}</td>
                  <td className="p-3">{role.cost}</td>
                  <td className="p-3 text-slate-400">{role.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-green-500/10 rounded-xl border border-green-500/30">
          <p className="text-green-400 font-bold">Total Hiring Cost (Month 1): AED 175-235K + Equity</p>
          <p className="text-slate-400 text-sm mt-1">This is non-negotiable. You cannot launch without this team.</p>
        </div>
      </div>

      {/* Alternative: Contractor Strategy */}
      <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/30">
        <h3 className="text-green-400 font-bold text-lg mb-4 flex items-center gap-2">
          <Briefcase size={20} />
          Plan B: If You Can&apos;t Hire Fast Enough
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-bold mb-3">Dev Agency Option</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="text-green-400 mt-0.5" />
                <span><strong>Toptal/Turing:</strong> AED 60-80K/month for 2 senior devs</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="text-green-400 mt-0.5" />
                <span><strong>UAE Agency:</strong> AED 40-60K/month (local, easier comms)</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="text-green-400 mt-0.5" />
                <span><strong>Fractional CTO:</strong> AED 20-30K/month for 20 hrs/week</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Freelancer Network</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="text-green-400 mt-0.5" />
                <span><strong>Marketing:</strong> Freelance social media manager (AED 8-12K)</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="text-green-400 mt-0.5" />
                <span><strong>Design:</strong> Contract designer for assets (AED 5-10K)</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="text-green-400 mt-0.5" />
                <span><strong>Sales:</strong> Commission-only BDRs to test (0 base)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== CFO ANALYSIS ====================
function CFOAnalysis() {
  return (
    <div className="space-y-8">
      {/* CFO Header */}
      <div className="bg-gradient-to-r from-orange-500/20 to-orange-500/5 rounded-2xl p-8 border border-orange-500/30">
        <div className="flex items-start gap-4">
          <div className="p-4 rounded-2xl bg-orange-500/20">
            <Calculator size={40} className="text-orange-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-orange-400">CFO Critical Analysis</h2>
            <p className="text-slate-300 mt-2 italic">
              &ldquo;I&apos;ve managed finances from seed to IPO. Your numbers don&apos;t lie...&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Financial Reality Check */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <AlertTriangle size={20} className="text-red-400" />
          Financial Reality Check
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              issue: 'Zero Revenue, Zero Runway',
              severity: 'CRITICAL',
              numbers: 'Current cash: Unknown (likely < AED 100K). Monthly burn: AED 50-80K. Runway: 1-2 months.',
              risk: 'You will run out of money before proving the model. Every day without funding is existential risk.',
              action: 'Close funding immediately or cut burn to near-zero.'
            },
            {
              issue: 'Unit Economics Unproven',
              severity: 'HIGH',
              numbers: 'Projected LTV: AED 504. Projected CAC: AED 30. LTV:CAC 16.8x. ACTUAL: All zeros.',
              risk: 'Investors see projections, not proof. Without real data, valuations are fantasy.',
              action: 'Need 100+ users to validate CAC. Need 3-month cohort to validate LTV.'
            },
            {
              issue: 'Fundraising Delay = Dilution',
              severity: 'HIGH',
              numbers: 'Target: AED 2.5M at AED 10M pre. Each month delay: likely 10-15% more dilution.',
              risk: 'Desperate founders accept worse terms. You lose leverage daily.',
              action: 'Close in 14 days at current terms, or accept lower valuation for speed.'
            },
            {
              issue: 'Hidden Costs Not Budgeted',
              severity: 'MEDIUM',
              numbers: 'Payment processing: 2-3%. Server costs: AED 5-15K/mo. Legal/Compliance: AED 20-50K.',
              risk: 'Your financial model may underestimate true costs by 20-30%.',
              action: 'Add 30% buffer to all projections. Plan for worst case.'
            },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-bold">{item.issue}</h4>
                <span className={`px-2 py-1 rounded text-xs ${
                  item.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400' :
                  item.severity === 'HIGH' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {item.severity}
                </span>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-orange-400 font-medium">The Numbers:</p>
                  <p className="text-slate-300">{item.numbers}</p>
                </div>
                <div>
                  <p className="text-red-400 font-medium">The Risk:</p>
                  <p className="text-slate-300">{item.risk}</p>
                </div>
                <div>
                  <p className="text-green-400 font-medium">My Recommendation:</p>
                  <p className="text-slate-300">{item.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Survival Budget */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <Shield size={20} className="text-orange-400" />
          Survival Budget (If Funding Delayed)
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-orange-400 font-bold mb-3">Cut to Survive (AED 50K/month)</h4>
            <div className="space-y-2">
              {[
                { item: 'Founder salary (reduced)', amount: 15000 },
                { item: 'Contract dev (part-time)', amount: 15000 },
                { item: 'Essential tools/infra', amount: 5000 },
                { item: 'Marketing (minimal)', amount: 10000 },
                { item: 'Legal/Compliance', amount: 3000 },
                { item: 'Miscellaneous', amount: 2000 },
              ].map((cost, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-white/5 rounded">
                  <span className="text-slate-300 text-sm">{cost.item}</span>
                  <span className="text-orange-400">AED {cost.amount.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex items-center justify-between p-2 bg-orange-500/20 rounded border border-orange-500/30">
                <span className="text-white font-bold">Total Monthly</span>
                <span className="text-orange-400 font-bold">AED 50,000</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-green-400 font-bold mb-3">Growth Budget (Post-Funding: AED 180K/month)</h4>
            <div className="space-y-2">
              {[
                { item: 'Salaries (8 team)', amount: 100000 },
                { item: 'Marketing & UA', amount: 40000 },
                { item: 'Technology/Infra', amount: 15000 },
                { item: 'Office & Operations', amount: 10000 },
                { item: 'Legal/Professional', amount: 10000 },
                { item: 'Contingency (5%)', amount: 5000 },
              ].map((cost, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-white/5 rounded">
                  <span className="text-slate-300 text-sm">{cost.item}</span>
                  <span className="text-green-400">AED {cost.amount.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex items-center justify-between p-2 bg-green-500/20 rounded border border-green-500/30">
                <span className="text-white font-bold">Total Monthly</span>
                <span className="text-green-400 font-bold">AED 180,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Funding Scenarios */}
      <div className="bg-orange-500/10 rounded-2xl p-6 border border-orange-500/30">
        <h3 className="text-orange-400 font-bold text-lg mb-4 flex items-center gap-2">
          <TrendingUp size={20} />
          Funding Scenarios & Trade-offs
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
            <h4 className="text-green-400 font-bold mb-3">Scenario A: Close Fast</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><strong>Raise:</strong> AED 1.5M (smaller)</li>
              <li><strong>Valuation:</strong> AED 6M pre</li>
              <li><strong>Timeline:</strong> 14 days</li>
              <li><strong>Dilution:</strong> 20%</li>
              <li><strong>Runway:</strong> 10 months</li>
              <li className="pt-2 border-t border-white/10 text-green-400">
                <strong>My Take:</strong> Best option. Speed is worth dilution.
              </li>
            </ul>
          </div>
          <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
            <h4 className="text-yellow-400 font-bold mb-3">Scenario B: Hold for Terms</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><strong>Raise:</strong> AED 2.5M</li>
              <li><strong>Valuation:</strong> AED 10M pre</li>
              <li><strong>Timeline:</strong> 30-60 days</li>
              <li><strong>Dilution:</strong> 20%</li>
              <li><strong>Runway:</strong> 14 months</li>
              <li className="pt-2 border-t border-white/10 text-yellow-400">
                <strong>Risk:</strong> May run out of cash waiting.
              </li>
            </ul>
          </div>
          <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/30">
            <h4 className="text-red-400 font-bold mb-3">Scenario C: Bootstrap</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><strong>Raise:</strong> AED 0</li>
              <li><strong>Source:</strong> Revenue + Personal</li>
              <li><strong>Timeline:</strong> Indefinite</li>
              <li><strong>Dilution:</strong> 0%</li>
              <li><strong>Runway:</strong> 2-3 months</li>
              <li className="pt-2 border-t border-white/10 text-red-400">
                <strong>Reality:</strong> Very hard. Requires immediate revenue.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CFO Dashboard */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <BarChart3 size={20} className="text-orange-400" />
          CFO War Room Dashboard
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { metric: 'Cash in Bank', value: '???', alert: true, action: 'Know this number DAILY' },
            { metric: 'Monthly Burn', value: 'AED 50-80K', alert: true, action: 'Cut or fund NOW' },
            { metric: 'Runway', value: '1-2 months', alert: true, action: 'CRITICAL' },
            { metric: 'Revenue', value: 'AED 0', alert: true, action: 'First AED = validation' },
            { metric: 'Funding Raised', value: 'AED 0', alert: true, action: 'Close in 14 days' },
            { metric: 'MRR Target', value: 'AED 50K', alert: false, action: 'Month 3 goal' },
            { metric: 'CAC (Actual)', value: 'Unknown', alert: true, action: 'Need 100 users to know' },
            { metric: 'LTV (Actual)', value: 'Unknown', alert: true, action: 'Need 3-month cohort' },
          ].map((item, idx) => (
            <div key={idx} className={`p-3 rounded-lg border ${item.alert ? 'bg-red-500/10 border-red-500/30' : 'bg-white/5 border-white/10'}`}>
              <p className="text-slate-400 text-xs">{item.metric}</p>
              <p className={`text-xl font-bold ${item.alert ? 'text-red-400' : 'text-white'}`}>{item.value}</p>
              <p className={`text-xs mt-1 ${item.alert ? 'text-red-400' : 'text-slate-500'}`}>{item.action}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
