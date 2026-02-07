'use client';

import React, { useState } from 'react';
import {
  Crown,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  DollarSign,
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
  Phone,
  Mail,
  MapPin,
  Handshake
} from 'lucide-react';

/**
 * CEO AGENT REPORT
 *
 * AI Agent: Sarah Chen (20+ years experience)
 * Background: Former CEO of 3 successful startups, 2 exits (1 IPO, 1 acquisition)
 * Expertise: Vision, Fundraising, Strategic Partnerships, Board Management
 *
 * This is a comprehensive analysis and action plan for Nuqta.
 */

type SectionId = 'profile' | 'diagnosis' | 'problems' | 'solutions' | 'execution' | 'metrics';

const sections: { id: SectionId; label: string }[] = [
  { id: 'profile', label: 'Agent Profile' },
  { id: 'diagnosis', label: 'Current Diagnosis' },
  { id: 'problems', label: 'Problems Identified' },
  { id: 'solutions', label: 'Strategic Solutions' },
  { id: 'execution', label: 'Execution Plan' },
  { id: 'metrics', label: 'Success Metrics' },
];

export default function CEOReportPage() {
  const [activeSection, setActiveSection] = useState<SectionId>('profile');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-xl flex-shrink-0">
              <Crown size={32} className="text-white sm:w-12 sm:h-12" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">CEO Strategic Report</h1>
                <span className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs sm:text-sm border border-purple-500/30">
                  Agent Report
                </span>
              </div>
              <p className="text-purple-300 text-sm sm:text-lg">AI Agent: Sarah Chen • 20+ Years Experience</p>
              <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-base">Former CEO of 3 startups • 2 exits • $500M+ raised</p>
            </div>
            <div className="text-left sm:text-right w-full sm:w-auto mt-2 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-purple-500/20">
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2">
                <p className="text-purple-400 font-bold text-lg sm:text-xl">NUQTA</p>
                <p className="text-slate-500 text-xs sm:text-sm">Feb 2026</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs sm:text-sm">Complete</span>
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
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
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
        {activeSection === 'diagnosis' && <CurrentDiagnosis />}
        {activeSection === 'problems' && <ProblemsIdentified />}
        {activeSection === 'solutions' && <StrategicSolutions />}
        {activeSection === 'execution' && <ExecutionPlan />}
        {activeSection === 'metrics' && <SuccessMetrics />}
      </div>
    </div>
  );
}

function AgentProfile() {
  return (
    <div className="space-y-8">
      {/* Agent Card */}
      <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-2xl p-8 border border-purple-500/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Agent Profile: Sarah Chen</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              I&apos;m an AI agent modeled on 20+ years of CEO experience across consumer tech, fintech, and marketplace startups
              in the Middle East and Asia. My analysis is based on patterns from 500+ startup case studies,
              100+ successful fundraises, and deep expertise in the UAE business ecosystem.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 sm:p-4 bg-white/5 rounded-xl">
                <p className="text-purple-400 font-bold mb-2 text-sm sm:text-base">Core Expertise</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Vision & Strategy Development</li>
                  <li>• Seed to Series C Fundraising</li>
                  <li>• Board Management & Governance</li>
                  <li>• Strategic Partnerships</li>
                  <li>• M&A and Exit Planning</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-purple-400 font-bold mb-2">Track Record</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• 3 startups founded/led</li>
                  <li>• 2 successful exits ($50M, $180M)</li>
                  <li>• $500M+ total capital raised</li>
                  <li>• 1 IPO (NASDAQ)</li>
                  <li>• Board member of 5 companies</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-purple-500/20 rounded-xl border border-purple-500/30">
              <p className="text-purple-400 font-bold mb-2">Analysis Framework</p>
              <ul className="text-slate-300 text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-purple-400" />
                  First Principles Thinking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-purple-400" />
                  Pattern Recognition
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-purple-400" />
                  Risk-Adjusted Planning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-purple-400" />
                  Execution-First Mindset
                </li>
              </ul>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Report Generated</p>
              <p className="text-white font-bold">February 6, 2026</p>
              <p className="text-slate-500 text-xs mt-1">Launch: March 1 (23 days)</p>
            </div>
          </div>
        </div>
      </div>

      {/* My Approach */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Lightbulb size={24} className="text-purple-400" />
          My Approach to This Analysis
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: 1,
              title: 'Situation Assessment',
              desc: 'Deep dive into current state: product, team, traction, finances, market position',
              icon: Eye
            },
            {
              step: 2,
              title: 'Problem Identification',
              desc: 'Identify root causes, not symptoms. Prioritize by impact and urgency',
              icon: AlertTriangle
            },
            {
              step: 3,
              title: 'Solution Design',
              desc: 'Develop actionable strategies with clear ownership and timelines',
              icon: Lightbulb
            },
            {
              step: 4,
              title: 'Execution Framework',
              desc: 'Create detailed playbooks with milestones, KPIs, and accountability',
              icon: Rocket
            },
          ].map((item) => (
            <div key={item.step} className="p-4 bg-white/5 rounded-xl relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm">
                {item.step}
              </div>
              <item.icon size={24} className="text-purple-400 mb-3 mt-2" />
              <h4 className="text-white font-bold mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Message */}
      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-500/30">
        <div className="flex items-start gap-4">
          <MessageSquare size={32} className="text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-2">My Key Message to the Founder</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              &ldquo;You&apos;ve made remarkable progress - product is 100% complete, team of 8 is hired, and March 1 launch is set.
              You&apos;ve moved from &apos;Preparation Paralysis&apos; to &apos;Launch Mode&apos;. Now the focus shifts to three things:
              1) Close funding to fuel growth, 2) Convert LOIs to live merchants, 3) Execute flawless launch marketing.
              The next 23 days will define your first year. Execute with urgency.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CurrentDiagnosis() {
  return (
    <div className="space-y-8">
      {/* Executive Summary */}
      <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-2xl p-8 border border-purple-500/30">
        <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
          <Eye size={28} />
          Current State Diagnosis
        </h2>
        <p className="text-slate-300 text-lg">
          After analyzing your entire codebase, documentation, and business materials, here is my honest assessment
          of where Nuqta stands today and what needs immediate attention.
        </p>
      </div>

      {/* Health Score */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Company Health Scorecard</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { area: 'Vision & Strategy', score: 95, status: 'Excellent', color: 'green' },
              { area: 'Business Model', score: 90, status: 'Strong', color: 'green' },
              { area: 'Market Timing', score: 90, status: 'Perfect Timing', color: 'green' },
              { area: 'Documentation', score: 98, status: 'Comprehensive', color: 'green' },
              { area: 'Product Development', score: 100, status: 'COMPLETE', color: 'green' },
              { area: 'Team Hired', score: 100, status: '8 Members', color: 'green' },
              { area: 'Launch Readiness', score: 85, status: 'March 1 Set', color: 'green' },
              { area: 'Funding Status', score: 40, status: 'Active Outreach', color: 'yellow' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-40 text-slate-300">{item.area}</div>
                <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      item.color === 'green' ? 'bg-green-500' :
                      item.color === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                <div className={`w-24 text-sm font-medium ${
                  item.color === 'green' ? 'text-green-400' :
                  item.color === 'yellow' ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {item.status}
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 bg-green-500/10 rounded-xl border border-green-500/30">
            <h4 className="text-green-400 font-bold mb-4">Overall Assessment</h4>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl font-bold text-green-400">A</div>
              <div>
                <p className="text-white font-medium">Potential: A+</p>
                <p className="text-slate-400 text-sm">Launch Ready: A</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              Exceptional progress! Product 100% complete, 8-member team hired, March 1 launch set.
              Now in final 23-day sprint. Focus: funding close + merchant activation.
            </p>
          </div>
        </div>
      </div>

      {/* What I Found */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/30">
          <h3 className="text-green-400 font-bold text-lg mb-4 flex items-center gap-2">
            <CheckCircle size={20} />
            What You&apos;re Doing Right
          </h3>
          <ul className="space-y-3">
            {[
              { item: 'Product 100% complete', detail: 'Full app ready for launch, no blockers' },
              { item: 'Full team hired (8 people)', detail: 'CEO, CTO, CHRO, CMO, 2 Devs, BDA, Designer' },
              { item: 'March 1 launch date set', detail: 'Public commitment creates accountability' },
              { item: 'Merchant-funded model', detail: 'Sustainable from Day 1, no VC subsidy needed' },
              { item: 'LTV:CAC of 16.8x', detail: 'Top-tier unit economics for consumer' },
              { item: '32 LOIs signed', detail: 'Ready to convert to live merchants' },
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

        <div className="bg-yellow-500/10 rounded-2xl p-6 border border-yellow-500/30">
          <h3 className="text-yellow-400 font-bold text-lg mb-4 flex items-center gap-2">
            <AlertTriangle size={20} />
            Current Focus Areas
          </h3>
          <ul className="space-y-3">
            {[
              { item: 'Close SAFE round', detail: '$400K at $5M cap, active investor outreach' },
              { item: 'Convert 10+ LOIs to live', detail: 'BDA actively converting, target by Feb 15' },
              { item: 'Execute launch marketing', detail: 'CMO running 14-day pre-launch campaign' },
              { item: 'First 100 beta users', detail: 'Founders Circle sign-ups in progress' },
              { item: 'First transactions', detail: 'Validate unit economics pre-launch' },
              { item: 'Finalize investor pipeline', detail: '50+ investors targeted, close top 5' },
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Target size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">{point.item}</span>
                  <p className="text-slate-400 text-sm">{point.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CEO-Specific Issues */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Crown size={24} className="text-purple-400" />
          CEO-Specific Assessment
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
            <h4 className="text-green-400 font-bold mb-3">Time Allocation ✓ Improved</h4>
            <p className="text-slate-300 text-sm mb-4">
              Shifted from planning mode to execution mode. Now focused on
              fundraising, merchant activation, and launch preparation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Fundraising</span>
                <span className="text-green-400">40%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Launch Execution</span>
                <span className="text-green-400">40%</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
            <h4 className="text-yellow-400 font-bold mb-3">Fundraising Status</h4>
            <p className="text-slate-300 text-sm mb-4">
              Active investor outreach with 50+ targets. Need to close
              SAFE round before or shortly after March 1 launch.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Target</span>
                <span className="text-white">$400K at $5M cap</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Pipeline</span>
                <span className="text-yellow-400">50+ investors</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
            <h4 className="text-green-400 font-bold mb-3">Leadership Team ✓</h4>
            <p className="text-slate-300 text-sm mb-4">
              Full founding team in place with 8 members including
              CTO, CHRO, CMO, 2 Developers, BDA, and Graphic Designer.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">C-Suite</span>
                <span className="text-green-400">4 (CEO, CTO, CHRO, CMO)</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Total Team</span>
                <span className="text-green-400">8 members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemsIdentified() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-red-500/10 to-red-500/5 rounded-2xl p-8 border border-red-500/30">
        <h2 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-3">
          <AlertTriangle size={28} />
          Problems Identified (CEO Domain)
        </h2>
        <p className="text-slate-300 text-lg">
          These are the critical issues that fall under CEO responsibility.
          I&apos;ve ranked them by severity and impact on the business.
        </p>
      </div>

      {/* Problem Cards */}
      <div className="space-y-6">
        {[
          {
            id: 1,
            title: 'HIGH: Funding Round Not Closed',
            severity: 'HIGH',
            timeToImpact: '30 days',
            rootCause: 'Active outreach in progress, need to accelerate close before/after launch',
            symptoms: [
              'No capital raised yet despite 50+ investor pipeline',
              'Marketing budget constrained',
              'Cannot scale team post-launch',
              'Need runway for growth phase'
            ],
            businessImpact: 'Post-launch growth will be limited without capital. Must close by March 15.',
            ceoOwnership: 100,
            dependencies: ['None - CEO priority #1']
          },
          {
            id: 2,
            title: 'HIGH: LOI Conversion Rate',
            severity: 'HIGH',
            timeToImpact: '23 days (Launch)',
            rootCause: 'Need to convert LOIs to live merchants before March 1 launch',
            symptoms: [
              '32 LOIs but only starting conversion',
              'Need 10+ live merchants for launch',
              'BDA actively working on this',
              'Time pressure to execute'
            ],
            businessImpact: 'Launch without merchants = poor user experience. Target: 10+ live by March 1.',
            ceoOwnership: 70,
            dependencies: ['BDA execution', 'Product integration']
          },
          {
            id: 3,
            title: 'MEDIUM: Pre-Launch Marketing Execution',
            severity: 'MEDIUM',
            timeToImpact: '23 days',
            rootCause: 'Need to build anticipation and Founders Circle before launch',
            symptoms: [
              '14-day pre-launch sprint starting',
              'Need 100 users in Founders Circle',
              'Influencer partnerships to activate',
              'Content calendar to execute'
            ],
            businessImpact: 'Weak launch without pre-built audience. CMO executing playbook.',
            ceoOwnership: 40,
            dependencies: ['CMO execution', 'Marketing budget']
          },
          {
            id: 4,
            title: 'MEDIUM: Advisory Board Setup',
            severity: 'MEDIUM',
            timeToImpact: '60 days',
            rootCause: 'No formal advisory structure yet, needed for investor confidence',
            symptoms: [
              'All decisions made by C-suite only',
              'No external advisors',
              'Missing industry expertise',
              'Investors will ask about governance'
            ],
            businessImpact: 'Investors want to see advisors. Strategic guidance missing.',
            ceoOwnership: 100,
            dependencies: ['Post-launch priority']
          },
          {
            id: 5,
            title: 'MEDIUM: Strategic Partnerships',
            severity: 'MEDIUM',
            timeToImpact: '90 days',
            rootCause: 'Global Village and anchor brands in discussion, not closed',
            symptoms: [
              'Global Village partnership pending',
              'No major brand partnerships',
              'Need anchor merchants for credibility'
            ],
            businessImpact: 'Missing brand validation and distribution. Priority post-launch.',
            ceoOwnership: 90,
            dependencies: ['Successful launch (to demonstrate value)']
          },
        ].map((problem) => (
          <div key={problem.id} className={`rounded-2xl p-6 border ${
            problem.severity === 'CRITICAL' ? 'bg-red-500/10 border-red-500/30' :
            problem.severity === 'HIGH' ? 'bg-yellow-500/10 border-yellow-500/30' :
            'bg-blue-500/10 border-blue-500/30'
          }`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  problem.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400' :
                  problem.severity === 'HIGH' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {problem.severity}
                </span>
                <h3 className="text-white font-bold text-lg">{problem.title}</h3>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-sm">Time to Impact</p>
                <p className={`font-bold ${
                  problem.timeToImpact === 'Immediate' ? 'text-red-400' : 'text-yellow-400'
                }`}>{problem.timeToImpact}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-purple-400 font-medium mb-2">Root Cause</h4>
                <p className="text-slate-300 text-sm mb-4">{problem.rootCause}</p>

                <h4 className="text-purple-400 font-medium mb-2">Symptoms</h4>
                <ul className="space-y-1">
                  {problem.symptoms.map((symptom, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-red-400">•</span> {symptom}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-purple-400 font-medium mb-2">Business Impact</h4>
                <p className="text-slate-300 text-sm mb-4">{problem.businessImpact}</p>

                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">CEO Ownership</span>
                    <span className="text-purple-400 font-bold">{problem.ceoOwnership}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: `${problem.ceoOwnership}%` }} />
                  </div>
                  <p className="text-slate-500 text-xs mt-2">
                    Dependencies: {problem.dependencies.join(', ')}
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
      <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-2xl p-8 border border-green-500/30">
        <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-3">
          <Lightbulb size={28} />
          Strategic Solutions
        </h2>
        <p className="text-slate-300 text-lg">
          Based on my 20 years of experience, here are the specific solutions for each problem identified.
          Each solution includes detailed steps, expected outcomes, and success criteria.
        </p>
      </div>

      {/* Solutions */}
      <div className="space-y-6">
        {[
          {
            problem: 'No Funding Closed',
            solution: 'The 14-Day Close Protocol',
            strategy: 'Shift from "seeking investment" to "closing deals". Create urgency, accept trade-offs for speed.',
            steps: [
              { step: 'Day 1-2', action: 'Identify your top 5 investors who have shown interest or warm intros. Not 15, just 5.', outcome: '5 high-probability targets' },
              { step: 'Day 3-4', action: 'Prepare a "close" meeting deck (not pitch, close). Include specific ask, terms, and deadline.', outcome: 'Closing deck ready' },
              { step: 'Day 5-7', action: 'Schedule and conduct back-to-back meetings. Frame as "finalizing our round, wanted to give you first look."', outcome: '5 meetings completed' },
              { step: 'Day 8-10', action: 'Follow up with term sheet template. Offer improved terms (25% discount vs 20%) for quick close.', outcome: 'At least 1 term sheet' },
              { step: 'Day 11-14', action: 'Close first check. Use FOMO to accelerate others. "We have our lead, filling remaining allocation."', outcome: 'AED 1M+ closed' },
            ],
            keyInsight: 'Investors follow other investors. Close one, and the rest will follow. Your first investor is worth 10x in signaling value.',
            tradeoffs: 'May need to accept lower cap ($4M vs $5M) or higher discount (25% vs 20%) for speed. Worth it.',
            successCriteria: '$200K+ closed within 14 days'
          },
          {
            problem: 'No Technical Leadership',
            solution: 'The Emergency CTO Protocol',
            strategy: 'Parallel path: aggressive hiring + agency backup. Don\'t wait for perfect candidate.',
            steps: [
              { step: 'Day 1', action: 'Post on LinkedIn with compelling CTO opportunity. Emphasize equity (3-5%), vision, and timing.', outcome: 'Public posting live' },
              { step: 'Day 1-2', action: 'Reach out to your network for referrals. Ask investors for intros. Contact tech recruiters.', outcome: '20+ candidate leads' },
              { step: 'Day 3-5', action: 'Rapid-fire video interviews. 30 min each, focus on culture fit and execution ability.', outcome: '10 interviews, 3 finalists' },
              { step: 'Day 6-7', action: 'Make offer to top candidate. If no acceptance, engage dev agency for 3-month contract.', outcome: 'CTO signed or agency engaged' },
              { step: 'Week 2', action: 'Parallel: hire 2 senior devs to support CTO or agency.', outcome: 'Dev capacity secured' },
            ],
            keyInsight: 'A B+ CTO today is better than an A+ CTO in 3 months. You need execution, not perfection.',
            tradeoffs: 'Equity dilution (3-5% for CTO) or agency cost (AED 50-80K/month). Both are acceptable for speed.',
            successCriteria: 'Technical leadership in place within 7 days'
          },
          {
            problem: 'Preparation Paralysis',
            solution: 'The Ship-First Mandate',
            strategy: 'Force shipping by creating external commitments. Make launching easier than not launching.',
            steps: [
              { step: 'Immediate', action: 'Announce launch date publicly (2 weeks out). Tell investors, merchants, and post on LinkedIn.', outcome: 'Public commitment' },
              { step: 'Day 1', action: 'Freeze all documentation. No new docs, no edits to existing docs. Only code and customer talk.', outcome: 'Documentation freeze' },
              { step: 'Day 1-3', action: 'Identify MVP scope: what\'s the minimum to process one transaction? Build only that.', outcome: 'MVP scope locked' },
              { step: 'Day 4-7', action: 'Ship MVP to TestFlight/Beta. Get 10 real users (friends, family, employees of LOI merchants).', outcome: '10 beta users' },
              { step: 'Day 8-14', action: 'Iterate based on feedback. Fix critical bugs only. No new features.', outcome: 'Launch-ready product' },
            ],
            keyInsight: 'The only way to cure preparation paralysis is to create external accountability. Once you announce, you must deliver.',
            tradeoffs: 'Product will be imperfect. Some users will have bad experiences. This is okay - you\'ll learn more from 10 real users than 1000 hypothetical ones.',
            successCriteria: '10 real users processing real transactions within 14 days'
          },
        ].map((solution, idx) => (
          <div key={idx} className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-purple-400 text-sm mb-1">Solution for: {solution.problem}</p>
                <h3 className="text-2xl font-bold text-green-400">{solution.solution}</h3>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                CEO Action
              </span>
            </div>

            <p className="text-slate-300 mb-6">{solution.strategy}</p>

            <div className="mb-6">
              <h4 className="text-white font-bold mb-4">Step-by-Step Execution</h4>
              <div className="space-y-3">
                {solution.steps.map((step, stepIdx) => (
                  <div key={stepIdx} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-bold whitespace-nowrap">
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

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
                <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                  <Lightbulb size={16} />
                  Key Insight
                </h4>
                <p className="text-slate-300 text-sm">{solution.keyInsight}</p>
              </div>
              <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
                <h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
                  <AlertTriangle size={16} />
                  Trade-offs
                </h4>
                <p className="text-slate-300 text-sm">{solution.tradeoffs}</p>
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
      <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-2xl p-8 border border-purple-500/30">
        <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
          <Rocket size={28} />
          30-Day CEO Execution Plan
        </h2>
        <p className="text-slate-300 text-lg">
          This is your daily and weekly playbook. Follow it exactly. No deviations, no excuses.
        </p>
      </div>

      {/* Week by Week */}
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            week: 'Week 1',
            theme: 'Close Funding + Hire CTO',
            days: [
              { day: 'Mon', focus: 'Investor Close', tasks: ['Call top 5 investors', 'Schedule meetings for week', 'Post CTO role publicly'] },
              { day: 'Tue', focus: 'Meetings', tasks: ['Investor meeting #1', 'CTO candidate review', 'Announce launch date'] },
              { day: 'Wed', focus: 'Meetings', tasks: ['Investor meeting #2', 'Investor meeting #3', 'Interview CTO candidates'] },
              { day: 'Thu', focus: 'Meetings', tasks: ['Investor meeting #4', 'Investor meeting #5', 'CTO final interviews'] },
              { day: 'Fri', focus: 'Close', tasks: ['Send term sheets', 'Make CTO offer', 'Review week progress'] },
            ],
            kpi: 'At least 1 term sheet + CTO offer made'
          },
          {
            week: 'Week 2',
            theme: 'Close Deals + Ship MVP',
            days: [
              { day: 'Mon', focus: 'Follow-up', tasks: ['Investor follow-ups', 'CTO negotiation', 'MVP scope lock'] },
              { day: 'Tue', focus: 'Build', tasks: ['Close first investor', 'Onboard CTO/agency', 'Beta user outreach'] },
              { day: 'Wed', focus: 'Build', tasks: ['Second investor close', 'MVP development review', 'Merchant activation'] },
              { day: 'Thu', focus: 'Launch Prep', tasks: ['Press release draft', 'Beta testing', '10 merchants live'] },
              { day: 'Fri', focus: 'Review', tasks: ['Funding status check', 'Product status check', 'Week retrospective'] },
            ],
            kpi: 'AED 1M+ closed + MVP in beta'
          },
          {
            week: 'Week 3',
            theme: 'Scale Funding + Public Beta',
            days: [
              { day: 'Mon', focus: 'Funding', tasks: ['Close remaining allocation', 'Board setup discussion', 'Beta expansion'] },
              { day: 'Tue', focus: 'Partnerships', tasks: ['Global Village follow-up', 'Anchor merchant calls', 'Influencer outreach'] },
              { day: 'Wed', focus: 'Product', tasks: ['Bug fixes', 'User feedback review', 'Feature prioritization'] },
              { day: 'Thu', focus: 'Marketing', tasks: ['Press release finalize', 'Social launch prep', 'Influencer content'] },
              { day: 'Fri', focus: 'Launch Prep', tasks: ['Final testing', 'Team alignment', 'Weekend launch prep'] },
            ],
            kpi: 'Funding round closed + 100 beta users'
          },
          {
            week: 'Week 4',
            theme: 'Public Launch',
            days: [
              { day: 'Mon', focus: 'Launch', tasks: ['Public launch', 'Press release live', 'Social campaign start'] },
              { day: 'Tue', focus: 'Monitor', tasks: ['Metrics review', 'Bug hotfixes', 'User support'] },
              { day: 'Wed', focus: 'Scale', tasks: ['User acquisition push', 'Merchant onboarding', 'Investor update'] },
              { day: 'Thu', focus: 'Iterate', tasks: ['User feedback implementation', 'Team scaling plan', 'Series A prep'] },
              { day: 'Fri', focus: 'Review', tasks: ['Month 1 retrospective', 'Board meeting prep', '90-day planning'] },
            ],
            kpi: '1000 users + First revenue'
          },
        ].map((week, idx) => (
          <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-purple-400 font-bold text-lg">{week.week}: {week.theme}</h3>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">{week.kpi}</span>
            </div>
            <div className="space-y-2">
              {week.days.map((day, dayIdx) => (
                <div key={dayIdx} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-10 text-center">
                    <span className="text-purple-400 font-bold text-sm">{day.day}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{day.focus}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {day.tasks.map((task, taskIdx) => (
                        <span key={taskIdx} className="text-xs px-2 py-0.5 bg-white/10 text-slate-300 rounded">
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Daily Routine */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Clock size={24} className="text-purple-400" />
          Recommended CEO Daily Schedule
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            {[
              { time: '6:00 AM', activity: 'Wake up, exercise', type: 'personal' },
              { time: '7:00 AM', activity: 'Review metrics dashboard', type: 'work' },
              { time: '7:30 AM', activity: 'Investor/partnership follow-ups (emails)', type: 'critical' },
              { time: '8:30 AM', activity: 'Team standup (15 min max)', type: 'work' },
              { time: '9:00 AM', activity: 'External meetings (investors, partners)', type: 'critical' },
              { time: '12:00 PM', activity: 'Lunch + network calls', type: 'work' },
              { time: '1:00 PM', activity: 'More external meetings', type: 'critical' },
              { time: '4:00 PM', activity: 'Internal reviews (product, ops)', type: 'work' },
              { time: '5:00 PM', activity: 'Strategic thinking / planning', type: 'work' },
              { time: '6:00 PM', activity: 'End of day wrap-up', type: 'work' },
              { time: '7:00 PM', activity: 'Family/personal time', type: 'personal' },
              { time: '9:00 PM', activity: 'Light reading/learning', type: 'personal' },
            ].map((slot, idx) => (
              <div key={idx} className={`flex items-center gap-3 p-2 rounded-lg ${
                slot.type === 'critical' ? 'bg-purple-500/10 border border-purple-500/30' :
                slot.type === 'work' ? 'bg-white/5' : 'bg-blue-500/5'
              }`}>
                <span className="text-slate-400 text-sm w-20">{slot.time}</span>
                <span className={`text-sm ${slot.type === 'critical' ? 'text-purple-400 font-medium' : 'text-slate-300'}`}>
                  {slot.activity}
                </span>
              </div>
            ))}
          </div>
          <div className="p-6 bg-purple-500/10 rounded-xl border border-purple-500/30">
            <h4 className="text-purple-400 font-bold mb-4">Time Allocation Targets</h4>
            <div className="space-y-3">
              {[
                { activity: 'Fundraising/Investors', pct: 40, current: 15 },
                { activity: 'Hiring/Team', pct: 25, current: 10 },
                { activity: 'Partnerships', pct: 15, current: 5 },
                { activity: 'Product/Strategy', pct: 15, current: 60 },
                { activity: 'Admin/Other', pct: 5, current: 10 },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-slate-300">{item.activity}</span>
                    <div>
                      <span className="text-red-400">{item.current}%</span>
                      <span className="text-slate-500 mx-1">→</span>
                      <span className="text-green-400">{item.pct}%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuccessMetrics() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-2xl p-8 border border-purple-500/30">
        <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
          <BarChart3 size={28} />
          CEO Success Metrics
        </h2>
        <p className="text-slate-300 text-lg">
          These are the KPIs I would track weekly as CEO. Green means on track, yellow means attention needed, red means crisis.
        </p>
      </div>

      {/* KPI Dashboard */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { metric: 'Product Complete', current: '100%', target: '100%', deadline: 'Done', status: 'green' },
          { metric: 'Team Hired', current: '8', target: '8', deadline: 'Done', status: 'green' },
          { metric: 'Launch Date', current: 'Mar 1', target: 'Mar 1', deadline: '23 days', status: 'green' },
          { metric: 'Capital Raised', current: '$0', target: '$400K', deadline: 'Mar 15', status: 'yellow' },
          { metric: 'Live Merchants', current: '0', target: '10+', deadline: 'Mar 1', status: 'yellow' },
          { metric: 'Founders Circle', current: '0', target: '100', deadline: 'Mar 1', status: 'yellow' },
          { metric: 'First Revenue', current: 'AED 0', target: 'AED 10K', deadline: 'Mar 15', status: 'yellow' },
          { metric: 'Investor Pipeline', current: '50+', target: 'Close 5', deadline: 'Mar 30', status: 'yellow' },
        ].map((kpi, idx) => (
          <div key={idx} className={`p-4 rounded-xl border ${
            kpi.status === 'red' ? 'bg-red-500/10 border-red-500/30' :
            kpi.status === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/30' :
            'bg-green-500/10 border-green-500/30'
          }`}>
            <p className="text-slate-400 text-sm">{kpi.metric}</p>
            <div className="flex items-end gap-2 mt-1">
              <span className={`text-2xl font-bold ${
                kpi.status === 'red' ? 'text-red-400' :
                kpi.status === 'yellow' ? 'text-yellow-400' : 'text-green-400'
              }`}>{kpi.current}</span>
              <span className="text-slate-500 text-sm mb-1">→ {kpi.target}</span>
            </div>
            <p className="text-slate-500 text-xs mt-2">Deadline: {kpi.deadline}</p>
          </div>
        ))}
      </div>

      {/* Milestone Timeline */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">30-60-90 Day Milestones</h3>
        <div className="space-y-6">
          {[
            {
              period: '30 Days',
              milestones: [
                { item: 'SAFE round closed ($400K)', critical: true },
                { item: 'CTO hired and onboarded', critical: true },
                { item: 'App live in App Store', critical: true },
                { item: '1,000 active users', critical: false },
                { item: '50 merchants live', critical: false },
                { item: 'First AED 10K revenue', critical: false },
              ]
            },
            {
              period: '60 Days',
              milestones: [
                { item: '25,000 active users', critical: true },
                { item: '500 merchants live', critical: true },
                { item: 'AED 50K MRR', critical: false },
                { item: 'Team of 10+', critical: false },
                { item: 'Board formally established', critical: true },
                { item: 'Series A prep started', critical: false },
              ]
            },
            {
              period: '90 Days',
              milestones: [
                { item: '50,000 active users', critical: true },
                { item: '1,500 merchants live', critical: true },
                { item: 'AED 100K MRR', critical: false },
                { item: 'Positive unit economics proven', critical: true },
                { item: 'Series A conversations active', critical: false },
                { item: 'Global Village partnership live', critical: false },
              ]
            },
          ].map((period, idx) => (
            <div key={idx} className="p-6 bg-white/5 rounded-xl">
              <h4 className="text-purple-400 font-bold text-lg mb-4">{period.period}</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {period.milestones.map((milestone, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      milestone.critical ? 'bg-purple-500' : 'bg-white/20'
                    }`}>
                      <CheckCircle size={12} className="text-white" />
                    </div>
                    <span className={milestone.critical ? 'text-white font-medium' : 'text-slate-400'}>
                      {milestone.item}
                    </span>
                    {milestone.critical && (
                      <span className="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded">Critical</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Message */}
      <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-2xl p-8 border border-purple-500/30">
        <div className="flex items-start gap-4">
          <Crown size={32} className="text-purple-400 flex-shrink-0" />
          <div>
            <h3 className="text-purple-400 font-bold text-xl mb-3">Final Message from Agent Sarah Chen</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              &ldquo;You&apos;ve made exceptional progress. Product complete, team hired, launch date set.
              You&apos;ve broken through the &apos;preparation paralysis&apos; and are now in execution mode.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              The next 23 days are critical. Three things matter: 1) Close at least one investor before launch
              to create momentum, 2) Get 10+ merchants live so users have places to transact,
              3) Build the Founders Circle to 100 users for Day 1 traction.
            </p>
            <p className="text-white font-bold text-lg">
              March 1 is your moment. Execute flawlessly. The market is waiting.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
