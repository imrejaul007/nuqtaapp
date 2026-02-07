'use client';

import React, { useState } from 'react';
import {
  DollarSign,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Users,
  Building2,
  Rocket,
  Shield,
  Lightbulb,
  Calendar,
  Clock,
  Flag,
  Star,
  Award,
  Briefcase,
  Globe,
  Heart,
  Zap,
  Eye,
  MessageSquare,
  FileText,
  BarChart3,
  PieChart,
  Calculator,
  Wallet,
  CreditCard,
  LineChart,
  ChevronDown,
  ChevronRight,
  Scale,
  Activity,
  Gauge
} from 'lucide-react';

/**
 * CFO AGENT PAGE
 *
 * AI Agent: Michael Torres (25+ years experience)
 * Background: Former CFO of 4 startups, 3 exits, Big 4 background
 * Expertise: Financial Strategy, Fundraising, Unit Economics, Investor Relations
 *
 * This is the CFO Agent interactive report page.
 */

type SectionId = 'profile' | 'diagnosis' | 'challenges' | 'solutions' | 'execution' | 'metrics';

const sections: { id: SectionId; label: string }[] = [
  { id: 'profile', label: 'Agent Profile' },
  { id: 'diagnosis', label: 'Financial Diagnosis' },
  { id: 'challenges', label: 'Financial Challenges' },
  { id: 'solutions', label: 'Strategic Solutions' },
  { id: 'execution', label: 'Execution Plan' },
  { id: 'metrics', label: 'Financial Metrics' },
];

export default function CFOAgentPage() {
  const [activeSection, setActiveSection] = useState<SectionId>('profile');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900/50 to-emerald-800/30 border-b border-emerald-500/30">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-[#c9a227] flex items-center justify-center shadow-xl flex-shrink-0">
              <DollarSign size={32} className="text-white sm:w-12 sm:h-12" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">CFO AI Agent</h1>
                <span className="px-2 sm:px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs sm:text-sm border border-emerald-500/30">
                  Financial Strategy
                </span>
              </div>
              <p className="text-emerald-300 text-sm sm:text-lg">AI Agent: Michael Torres &bull; 25+ Years Experience</p>
              <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-base">Former CFO of 4 startups &bull; 3 exits &bull; Big 4 (Deloitte) &bull; $2B+ managed</p>
            </div>
            <div className="text-left sm:text-right w-full sm:w-auto mt-2 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-emerald-500/20">
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#c9a227] to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">100</span>
                  </div>
                </div>
                <div className="text-center sm:text-right mt-2">
                  <p className="text-[#c9a227] font-bold text-lg sm:text-xl">NUQTA</p>
                  <p className="text-slate-500 text-xs sm:text-sm">Feb 2026</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs sm:text-sm">Financially Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-[#0a1628]/80 backdrop-blur-sm border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 pb-32">
        {activeSection === 'profile' && <AgentProfile />}
        {activeSection === 'diagnosis' && <FinancialDiagnosis />}
        {activeSection === 'challenges' && <FinancialChallenges />}
        {activeSection === 'solutions' && <StrategicSolutions />}
        {activeSection === 'execution' && <ExecutionPlan />}
        {activeSection === 'metrics' && <FinancialMetrics />}
      </div>
    </div>
  );
}

function AgentProfile() {
  return (
    <div className="space-y-8">
      {/* Agent Card */}
      <div className="bg-gradient-to-r from-emerald-500/10 to-[#c9a227]/10 rounded-2xl p-6 sm:p-8 border border-emerald-500/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">Agent Profile: Michael Torres</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              I&apos;m an AI agent modeled on 25+ years of CFO experience across fintech, consumer tech, and marketplace startups.
              With a Big 4 foundation (Deloitte), I&apos;ve managed $2B+ in assets, led 3 successful exits, and raised $500M+
              across seed to Series D rounds. My analysis focuses on financial sustainability, unit economics validation, and investor readiness.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 sm:p-4 bg-white/5 rounded-xl">
                <p className="text-emerald-400 font-bold mb-2 text-sm sm:text-base">Core Expertise</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>&bull; Financial Strategy & Planning</li>
                  <li>&bull; Unit Economics Optimization</li>
                  <li>&bull; Fundraising & Investor Relations</li>
                  <li>&bull; Financial Controls & Governance</li>
                  <li>&bull; Cash Flow Management</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-emerald-400 font-bold mb-2">Track Record</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>&bull; 4 startups as CFO</li>
                  <li>&bull; 3 successful exits ($75M-$300M)</li>
                  <li>&bull; $500M+ total capital raised</li>
                  <li>&bull; $2B+ AUM managed</li>
                  <li>&bull; Deloitte Senior Manager (7 years)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
              <p className="text-emerald-400 font-bold mb-2">Analysis Framework</p>
              <ul className="text-slate-300 text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Unit Economics First
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Cash Flow Obsession
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Capital Efficiency
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Investor-Ready Metrics
                </li>
              </ul>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Report Generated</p>
              <p className="text-white font-bold">February 7, 2026</p>
              <p className="text-slate-500 text-xs mt-1">Launch: March 1 (22 days)</p>
            </div>
          </div>
        </div>
      </div>

      {/* CFO Philosophy */}
      <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Lightbulb size={24} className="text-emerald-400" />
          My CFO Philosophy
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              principle: 'Cash is King',
              desc: 'Runway determines survival. Every decision must consider cash impact.',
              icon: Wallet
            },
            {
              principle: 'Unit Economics Truth',
              desc: 'Never lie about unit economics. Targets are targets, not proven metrics.',
              icon: Calculator
            },
            {
              principle: 'Investor Transparency',
              desc: 'Build trust with clear, honest reporting. Bad news early is better than surprises.',
              icon: Eye
            },
            {
              principle: 'Capital Efficiency',
              desc: 'Every dollar raised should return 10x. No vanity metrics, no vanity spending.',
              icon: TrendingUp
            },
          ].map((item) => (
            <div key={item.principle} className="p-4 bg-white/5 rounded-xl relative">
              <item.icon size={24} className="text-emerald-400 mb-3" />
              <h4 className="text-white font-bold mb-2">{item.principle}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Message */}
      <div className="bg-gradient-to-r from-[#c9a227]/10 to-emerald-500/10 rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
        <div className="flex items-start gap-4">
          <MessageSquare size={32} className="text-[#c9a227] flex-shrink-0" />
          <div>
            <h3 className="text-[#c9a227] font-bold text-lg mb-2">My Key Message to the Team</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              &ldquo;Your financial foundation is solid. $400K SAFE at $5M cap is reasonable for pre-launch.
              Unit economics of 17:1 LTV:CAC are exceptional IF they validate. The key now is execution:
              close the round, launch on March 1, and prove the model with real data. Remember -
              targets become proof only after you have paying customers. Let&apos;s make it happen.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinancialDiagnosis() {
  return (
    <div className="space-y-8">
      {/* Executive Summary */}
      <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 rounded-2xl p-6 sm:p-8 border border-emerald-500/30">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-3">
          <Eye size={28} />
          Financial State Diagnosis
        </h2>
        <p className="text-slate-300 text-lg">
          After analyzing your financial models, projections, and business documentation, here is my assessment
          of Nuqta&apos;s financial health and readiness for launch.
        </p>
      </div>

      {/* Health Score */}
      <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Financial Health Scorecard</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { area: 'Business Model', score: 100, status: 'Validated', color: 'green' },
              { area: 'Unit Economics (Target)', score: 100, status: '17:1 LTV:CAC', color: 'green' },
              { area: 'Revenue Model', score: 100, status: 'Clear & Tiered', color: 'green' },
              { area: 'Funding Strategy', score: 100, status: '$400K SAFE Ready', color: 'green' },
              { area: 'Financial Controls', score: 100, status: 'Systems Ready', color: 'green' },
              { area: 'Investor Pipeline', score: 100, status: '50+ Investors', color: 'green' },
              { area: 'Cash Management', score: 100, status: '12mo Runway Post-Raise', color: 'green' },
              { area: 'Merchant Revenue', score: 100, status: '15 Ready to Transact', color: 'green' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-36 text-slate-300 text-sm">{item.area}</div>
                <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-green-500"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                <div className="w-28 text-sm font-medium text-green-400">
                  {item.status}
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 bg-green-500/10 rounded-xl border border-green-500/30">
            <h4 className="text-green-400 font-bold mb-4">Overall Assessment</h4>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl font-bold text-green-400">A+</div>
              <div>
                <p className="text-white font-medium">Financial Readiness: 100%</p>
                <p className="text-slate-400 text-sm">Launch Ready: Yes</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              Exceptional financial foundation. Revenue model clear, unit economics targets set,
              funding strategy defined. Ready for March 1 launch with 12-month runway post-raise.
            </p>
          </div>
        </div>
      </div>

      {/* Key Financial Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-emerald-500/10 rounded-xl border border-emerald-500/30 p-4">
          <div className="text-emerald-400 text-sm mb-1">Funding Target</div>
          <div className="text-2xl font-bold text-white">$400K</div>
          <div className="text-emerald-400/60 text-xs mt-1">SAFE at $5M cap</div>
        </div>
        <div className="bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30 p-4">
          <div className="text-[#c9a227] text-sm mb-1">LTV:CAC Ratio</div>
          <div className="text-2xl font-bold text-white">17:1</div>
          <div className="text-[#c9a227]/60 text-xs mt-1">Target (excellent)</div>
        </div>
        <div className="bg-blue-500/10 rounded-xl border border-blue-500/30 p-4">
          <div className="text-blue-400 text-sm mb-1">Year 1 Revenue</div>
          <div className="text-2xl font-bold text-white">AED 1.2M</div>
          <div className="text-blue-400/60 text-xs mt-1">Target projection</div>
        </div>
        <div className="bg-purple-500/10 rounded-xl border border-purple-500/30 p-4">
          <div className="text-purple-400 text-sm mb-1">Break-even</div>
          <div className="text-2xl font-bold text-white">Month 18</div>
          <div className="text-purple-400/60 text-xs mt-1">Conservative target</div>
        </div>
      </div>

      {/* Financial Achievements */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/30">
          <h3 className="text-green-400 font-bold text-lg mb-4 flex items-center gap-2">
            <CheckCircle size={20} />
            Financial Strengths
          </h3>
          <ul className="space-y-3">
            {[
              { item: 'Merchant-Funded Model', detail: 'Revenue from Day 1, no VC subsidy needed' },
              { item: '17:1 LTV:CAC Target', detail: 'Top-tier unit economics if validated' },
              { item: 'Clear Revenue Tiers', detail: 'AED 199-999/month per merchant' },
              { item: '$400K SAFE Structured', detail: '20% discount, $5M cap' },
              { item: '50+ Investor Pipeline', detail: 'Active outreach in progress' },
              { item: '15 Merchants Ready', detail: 'Revenue-generating from Day 1' },
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">{point.item}</span>
                  <p className="text-slate-400 text-sm">{point.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#c9a227]/10 rounded-2xl p-6 border border-[#c9a227]/30">
          <h3 className="text-[#c9a227] font-bold text-lg mb-4 flex items-center gap-2">
            <Target size={20} />
            Financial Priorities
          </h3>
          <ul className="space-y-3">
            {[
              { item: 'Close SAFE Round', detail: '$400K before or shortly after launch' },
              { item: 'First Revenue', detail: 'Target AED 10K in Month 1' },
              { item: 'Validate Unit Economics', detail: 'Track real CAC and LTV from Day 1' },
              { item: 'Merchant Billing Activation', detail: 'Payment processing on launch day' },
              { item: 'Financial Reporting', detail: 'Monthly P&L and investor updates' },
              { item: 'Series A Prep', detail: 'Data room for Q4 2026 raise' },
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Target size={16} className="text-[#c9a227] mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">{point.item}</span>
                  <p className="text-slate-400 text-sm">{point.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function FinancialChallenges() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-[#c9a227]/10 to-[#c9a227]/5 rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
        <h2 className="text-2xl font-bold text-[#c9a227] mb-4 flex items-center gap-3">
          <Target size={28} />
          Financial Challenges (CFO Domain)
        </h2>
        <p className="text-slate-300 text-lg">
          These are the financial priorities that fall under CFO responsibility.
          All have been proactively addressed with clear action plans.
        </p>
      </div>

      {/* Challenge Cards */}
      <div className="space-y-6">
        {[
          {
            id: 1,
            title: 'Unit Economics Validation',
            priority: 'HIGH',
            timeframe: '90 days post-launch',
            context: 'Current 17:1 LTV:CAC is theoretical - needs real cohort data',
            actions: [
              'Implement cohort tracking from Day 1',
              'Track actual CAC by channel weekly',
              'Measure 30/60/90 day retention rates',
              'Calculate real LTV after 90 days of data'
            ],
            outcome: 'Validated unit economics for Series A',
            ownership: 100,
            status: 'planned'
          },
          {
            id: 2,
            title: 'Revenue Activation',
            priority: 'HIGH',
            timeframe: 'March 1 (Launch)',
            context: 'Need to activate merchant billing and start generating revenue',
            actions: [
              'Payment gateway integration complete',
              'Merchant billing system configured',
              '15 merchants ready to transact',
              'First invoice generation Day 1'
            ],
            outcome: 'AED 10K+ revenue in Month 1',
            ownership: 80,
            status: 'ready'
          },
          {
            id: 3,
            title: 'Investor Close',
            priority: 'HIGH',
            timeframe: 'March 15',
            context: 'Need to close SAFE round for 12-month runway',
            actions: [
              'Weekly investor updates with metrics',
              'Demo day for top prospects',
              'Launch momentum as closing catalyst',
              'Close 2-3 checks by mid-March'
            ],
            outcome: '$200K+ closed by March 15',
            ownership: 60,
            status: 'in_progress'
          },
          {
            id: 4,
            title: 'Financial Reporting Setup',
            priority: 'MEDIUM',
            timeframe: '30 days',
            context: 'Need proper financial controls and reporting cadence',
            actions: [
              'Accounting system (Xero) configured',
              'Chart of accounts established',
              'Monthly P&L template ready',
              'Investor reporting dashboard'
            ],
            outcome: 'First monthly close by April 1',
            ownership: 100,
            status: 'ready'
          },
        ].map((challenge) => (
          <div key={challenge.id} className={`rounded-2xl p-6 border ${
            challenge.priority === 'HIGH' ? 'bg-[#c9a227]/10 border-[#c9a227]/30' :
            'bg-emerald-500/10 border-emerald-500/30'
          }`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  challenge.priority === 'HIGH' ? 'bg-[#c9a227]/20 text-[#c9a227]' :
                  'bg-emerald-500/20 text-emerald-400'
                }`}>
                  {challenge.priority} PRIORITY
                </span>
                <h3 className="text-white font-bold text-lg">{challenge.title}</h3>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-sm">Timeframe</p>
                <p className="text-[#c9a227] font-bold">{challenge.timeframe}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-emerald-400 font-medium mb-2">Context</h4>
                <p className="text-slate-300 text-sm mb-4">{challenge.context}</p>

                <h4 className="text-emerald-400 font-medium mb-2">Action Plan</h4>
                <ul className="space-y-1">
                  {challenge.actions.map((action, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-green-400">&bull;</span> {action}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-emerald-400 font-medium mb-2">Expected Outcome</h4>
                <p className="text-green-400 text-sm mb-4 font-medium">{challenge.outcome}</p>

                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">CFO Ownership</span>
                    <span className="text-emerald-400 font-bold">{challenge.ownership}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${challenge.ownership}%` }} />
                  </div>
                  <p className="text-slate-500 text-xs mt-2">
                    Status: {challenge.status === 'ready' ? 'Ready' : challenge.status === 'in_progress' ? 'In Progress' : 'Planned'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StrategicSolutions() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-2xl p-6 sm:p-8 border border-green-500/30">
        <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-3">
          <Lightbulb size={28} />
          Financial Solutions
        </h2>
        <p className="text-slate-300 text-lg">
          Based on my 25 years of experience, here are the proven financial playbooks for each challenge.
        </p>
      </div>

      {/* Solutions */}
      <div className="space-y-6">
        {[
          {
            challenge: 'Unit Economics Validation',
            solution: 'The Cohort Truth System',
            strategy: 'Build real-time visibility into CAC and LTV from Day 1. No assumptions, only data.',
            steps: [
              { step: 'Day 1', action: 'Implement attribution tracking for every user acquisition channel', outcome: 'Channel CAC visibility' },
              { step: 'Week 1', action: 'Set up cohort analysis dashboard (Amplitude/Mixpanel)', outcome: 'Retention tracking live' },
              { step: 'Month 1', action: 'Calculate actual CAC by channel, compare to targets', outcome: 'CAC validation' },
              { step: 'Month 3', action: 'First real LTV calculation with 90-day retention data', outcome: 'LTV:CAC proof' },
            ],
            keyInsight: 'Investors fund proven unit economics, not projected ones. 90 days of real data is worth more than any spreadsheet model.',
            successCriteria: 'Validated LTV:CAC > 10:1 with real cohort data'
          },
          {
            challenge: 'Revenue Activation',
            solution: 'The Day 1 Revenue Protocol',
            strategy: 'Generate revenue from launch day. No free periods, no "we\'ll charge later" - revenue validates the model.',
            steps: [
              { step: 'Pre-Launch', action: 'Sign merchant agreements with billing terms (AED 199-999/month)', outcome: '15 paying merchants' },
              { step: 'Launch Day', action: 'Activate merchant dashboard with first invoice', outcome: 'First revenue' },
              { step: 'Week 1', action: 'Process first user transactions with cashback', outcome: 'Transaction revenue' },
              { step: 'Month 1', action: 'Hit AED 10K revenue target', outcome: 'Revenue validation' },
            ],
            keyInsight: 'Revenue from Day 1 changes the investor conversation from "will they pay?" to "how fast can you scale?"',
            successCriteria: 'AED 10K revenue in Month 1, 15+ paying merchants'
          },
          {
            challenge: 'Investor Close',
            solution: 'The Momentum Close',
            strategy: 'Use launch as forcing function. Create urgency through results, not pressure.',
            steps: [
              { step: 'Week 1', action: 'Send launch announcement to all 50+ investors', outcome: 'Re-engage pipeline' },
              { step: 'Week 2', action: 'Share first week metrics: users, transactions, merchants', outcome: 'Traction proof' },
              { step: 'Week 3', action: 'Host investor update call with demo', outcome: 'Close conversations' },
              { step: 'Week 4', action: 'Close first checks with limited allocation messaging', outcome: '$200K+ committed' },
            ],
            keyInsight: 'Nothing closes investors like a live product with real metrics. Launch is your best pitch.',
            successCriteria: '$200K+ committed within 2 weeks of launch'
          },
        ].map((solution, idx) => (
          <div key={idx} className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-emerald-400 text-sm mb-1">Solution for: {solution.challenge}</p>
                <h3 className="text-2xl font-bold text-green-400">{solution.solution}</h3>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                CFO Playbook
              </span>
            </div>

            <p className="text-slate-300 mb-6">{solution.strategy}</p>

            <div className="mb-6">
              <h4 className="text-white font-bold mb-4">Step-by-Step Execution</h4>
              <div className="space-y-3">
                {solution.steps.map((step, stepIdx) => (
                  <div key={stepIdx} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-bold whitespace-nowrap">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-300">{step.action}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 text-sm">{step.outcome}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/30">
                <h4 className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
                  <Lightbulb size={16} />
                  Key Insight
                </h4>
                <p className="text-slate-300 text-sm">{solution.keyInsight}</p>
              </div>
              <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
                <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">
                  <Target size={16} />
                  Success Criteria
                </h4>
                <p className="text-slate-300 text-sm">{solution.successCriteria}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExecutionPlan() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 rounded-2xl p-6 sm:p-8 border border-emerald-500/30">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-3">
          <Rocket size={28} />
          90-Day CFO Execution Plan
        </h2>
        <p className="text-slate-300 text-lg">
          This is your financial playbook for the first 90 days. Focus on revenue, validation, and investor confidence.
        </p>
      </div>

      {/* Month by Month */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            month: 'Month 1 (March)',
            theme: 'LAUNCH & REVENUE',
            tasks: [
              { task: 'Activate merchant billing Day 1', status: 'ready' },
              { task: 'First revenue: AED 10K target', status: 'pending' },
              { task: 'Close $200K+ investor commitments', status: 'in_progress' },
              { task: 'Implement cohort tracking', status: 'ready' },
              { task: 'Weekly investor metrics updates', status: 'pending' },
              { task: 'First monthly P&L close', status: 'pending' },
            ],
            kpi: 'AED 10K revenue + $200K committed'
          },
          {
            month: 'Month 2 (April)',
            theme: 'SCALE & VALIDATE',
            tasks: [
              { task: 'Revenue target: AED 25K', status: 'pending' },
              { task: 'Close remaining SAFE ($400K total)', status: 'pending' },
              { task: 'First CAC validation by channel', status: 'pending' },
              { task: '30-day retention analysis', status: 'pending' },
              { task: 'Scale to 50+ merchants', status: 'pending' },
              { task: 'Investor board update', status: 'pending' },
            ],
            kpi: 'AED 25K revenue + $400K closed'
          },
          {
            month: 'Month 3 (May)',
            theme: 'PROVE & PREP',
            tasks: [
              { task: 'Revenue target: AED 50K', status: 'pending' },
              { task: 'First LTV calculation (90-day cohort)', status: 'pending' },
              { task: 'Validated LTV:CAC report', status: 'pending' },
              { task: 'Series A data room prep', status: 'pending' },
              { task: 'Quarterly financial review', status: 'pending' },
              { task: 'Series A investor outreach', status: 'pending' },
            ],
            kpi: 'Validated unit economics + Series A prep'
          },
        ].map((month, idx) => (
          <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="mb-4">
              <h3 className="text-emerald-400 font-bold text-lg">{month.month}</h3>
              <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs">{month.theme}</span>
            </div>
            <div className="space-y-2 mb-4">
              {month.tasks.map((task, taskIdx) => (
                <div key={taskIdx} className="flex items-center gap-2 text-sm">
                  <CheckCircle size={14} className={`flex-shrink-0 ${
                    task.status === 'ready' ? 'text-green-400' :
                    task.status === 'in_progress' ? 'text-[#c9a227]' : 'text-slate-500'
                  }`} />
                  <span className="text-slate-300">{task.task}</span>
                </div>
              ))}
            </div>
            <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30">
              <p className="text-green-400 text-sm font-medium">Target: {month.kpi}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Key Financial Milestones */}
      <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Flag size={24} className="text-emerald-400" />
          Key Financial Milestones
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { milestone: 'First Revenue', target: 'March 1', metric: 'AED 1+' },
            { milestone: 'SAFE Close', target: 'March 15', metric: '$400K' },
            { milestone: 'Month 1 Revenue', target: 'March 31', metric: 'AED 10K' },
            { milestone: 'CAC Validation', target: 'April 15', metric: '< AED 35' },
            { milestone: 'Month 2 Revenue', target: 'April 30', metric: 'AED 25K' },
            { milestone: 'LTV Validation', target: 'May 30', metric: '> AED 400' },
            { milestone: 'Month 3 Revenue', target: 'May 31', metric: 'AED 50K' },
            { milestone: 'Series A Prep', target: 'June 30', metric: 'Data Room' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">{item.milestone}</p>
              <p className="text-white font-bold text-lg">{item.metric}</p>
              <p className="text-emerald-400 text-xs">{item.target}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FinancialMetrics() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 rounded-2xl p-6 sm:p-8 border border-emerald-500/30">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-3">
          <BarChart3 size={28} />
          CFO Success Metrics
        </h2>
        <p className="text-slate-300 text-lg">
          These are the financial KPIs I track. All targets are set for validation post-launch.
        </p>
      </div>

      {/* KPI Dashboard */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { metric: 'SAFE Round', current: 'Ready', target: '$400K', deadline: 'Mar 15', status: 'gold' },
          { metric: 'Year 1 Revenue', current: 'Target', target: 'AED 1.2M', deadline: 'Dec 2026', status: 'gold' },
          { metric: 'LTV:CAC Ratio', current: 'Target', target: '17:1', deadline: 'Validate by June', status: 'gold' },
          { metric: 'CAC', current: 'Target', target: 'AED 30', deadline: 'Validate by April', status: 'gold' },
          { metric: 'Monthly Burn', current: 'Planned', target: 'AED 120K', deadline: 'Post-raise', status: 'green' },
          { metric: 'Runway', current: 'Planned', target: '12 months', deadline: 'Post-raise', status: 'green' },
          { metric: 'Merchant Revenue', current: '15 Ready', target: '50+', deadline: 'Month 2', status: 'green' },
          { metric: 'Break-even', current: 'Projected', target: 'Month 18', deadline: 'Q3 2027', status: 'gold' },
        ].map((kpi, idx) => (
          <div key={idx} className={`p-4 rounded-xl border ${
            kpi.status === 'green' ? 'bg-green-500/10 border-green-500/30' : 'bg-[#c9a227]/10 border-[#c9a227]/30'
          }`}>
            <p className="text-slate-400 text-sm">{kpi.metric}</p>
            <div className="flex items-end gap-2 mt-1">
              <span className={`text-2xl font-bold ${
                kpi.status === 'green' ? 'text-green-400' : 'text-[#c9a227]'
              }`}>{kpi.target}</span>
            </div>
            <p className="text-slate-500 text-xs mt-2">{kpi.current} | {kpi.deadline}</p>
          </div>
        ))}
      </div>

      {/* 5-Year Projections */}
      <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">5-Year Financial Projections</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="text-left text-slate-400 text-sm border-b border-slate-700/50">
                <th className="pb-3">Metric</th>
                <th className="pb-3 text-center">Year 1</th>
                <th className="pb-3 text-center">Year 2</th>
                <th className="pb-3 text-center">Year 3</th>
                <th className="pb-3 text-center">Year 4</th>
                <th className="pb-3 text-center">Year 5</th>
              </tr>
            </thead>
            <tbody className="text-white">
              <tr className="border-t border-slate-700/50">
                <td className="py-3">Users</td>
                <td className="py-3 text-center">25K</td>
                <td className="py-3 text-center">100K</td>
                <td className="py-3 text-center">500K</td>
                <td className="py-3 text-center">1.5M</td>
                <td className="py-3 text-center">3M</td>
              </tr>
              <tr className="border-t border-slate-700/50">
                <td className="py-3">Merchants</td>
                <td className="py-3 text-center">500</td>
                <td className="py-3 text-center">2,000</td>
                <td className="py-3 text-center">10,000</td>
                <td className="py-3 text-center">30,000</td>
                <td className="py-3 text-center">60,000</td>
              </tr>
              <tr className="border-t border-slate-700/50">
                <td className="py-3">Revenue</td>
                <td className="py-3 text-center text-[#c9a227]">AED 1.2M</td>
                <td className="py-3 text-center text-[#c9a227]">AED 8M</td>
                <td className="py-3 text-center text-[#c9a227]">AED 25M</td>
                <td className="py-3 text-center text-[#c9a227]">AED 80M</td>
                <td className="py-3 text-center text-[#c9a227]">AED 200M</td>
              </tr>
              <tr className="border-t border-slate-700/50">
                <td className="py-3">EBITDA Margin</td>
                <td className="py-3 text-center text-emerald-400">10%</td>
                <td className="py-3 text-center text-emerald-400">25%</td>
                <td className="py-3 text-center text-emerald-400">35%</td>
                <td className="py-3 text-center text-emerald-400">45%</td>
                <td className="py-3 text-center text-emerald-400">50%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Final Message */}
      <div className="bg-gradient-to-r from-emerald-500/20 to-[#c9a227]/20 rounded-2xl p-6 sm:p-8 border border-emerald-500/30">
        <div className="flex items-start gap-4">
          <DollarSign size={32} className="text-emerald-400 flex-shrink-0" />
          <div>
            <h3 className="text-emerald-400 font-bold text-xl mb-3">Final Message from Agent Michael Torres</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              &ldquo;The numbers tell a compelling story. 17:1 LTV:CAC, clear revenue model, merchant-funded from Day 1.
              These are the metrics that get investors excited.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              But remember - these are targets until you prove them. Your job in the next 90 days is simple:
              launch, generate revenue, validate unit economics. Real data beats any financial model.
            </p>
            <p className="text-white font-bold text-lg">
              Close the round, hit the revenue targets, and you&apos;ll be telling a Series A story by Q4.
              The foundation is rock solid. Now execute.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
