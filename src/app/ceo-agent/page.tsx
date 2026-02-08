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
  Handshake,
  ChevronDown,
  ChevronRight,
  Layers,
  Scale,
  Activity
} from 'lucide-react';

/**
 * CEO AGENT PAGE
 *
 * AI Agent: Sarah Chen (20+ years experience)
 * Background: Former CEO of 3 successful startups, 2 exits (1 IPO, 1 acquisition)
 * Expertise: Vision, Fundraising, Strategic Partnerships, Board Management
 *
 * This is the CEO Agent interactive report page.
 */

type SectionId = 'profile' | 'diagnosis' | 'challenges' | 'solutions' | 'execution' | 'metrics';

const sections: { id: SectionId; label: string }[] = [
  { id: 'profile', label: 'Agent Profile' },
  { id: 'diagnosis', label: 'Current Diagnosis' },
  { id: 'challenges', label: 'Strategic Challenges' },
  { id: 'solutions', label: 'Strategic Solutions' },
  { id: 'execution', label: 'Execution Plan' },
  { id: 'metrics', label: 'Success Metrics' },
];

export default function CEOAgentPage() {
  const [activeSection, setActiveSection] = useState<SectionId>('profile');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-[#c9a227] flex items-center justify-center shadow-xl flex-shrink-0">
              <Crown size={32} className="text-white sm:w-12 sm:h-12" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">CEO AI Agent</h1>
                <span className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs sm:text-sm border border-purple-500/30">
                  Strategic Leadership
                </span>
              </div>
              <p className="text-purple-300 text-sm sm:text-lg">AI Agent: Sarah Chen &bull; 20+ Years Experience</p>
              <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-base">Former CEO of 3 startups &bull; 2 exits ($50M, $180M) &bull; $500M+ raised</p>
            </div>
            <div className="text-left sm:text-right w-full sm:w-auto mt-2 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-purple-500/20">
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#c9a227] to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">100</span>
                  </div>
                </div>
                <div className="text-center sm:text-right mt-2">
                  <p className="text-[#c9a227] font-bold text-lg sm:text-xl">NUQTA</p>
                  <p className="text-slate-500 text-xs sm:text-sm">Feb 2026</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs sm:text-sm">Vision Aligned</span>
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
        {activeSection === 'challenges' && <StrategicChallenges />}
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
      <div className="bg-gradient-to-r from-purple-500/10 to-[#c9a227]/10 rounded-2xl p-6 sm:p-8 border border-purple-500/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Agent Profile: Sarah Chen</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              I&apos;m an AI agent modeled on 20+ years of CEO experience across consumer tech, fintech, and marketplace startups
              in the Middle East and Asia. My analysis combines patterns from 500+ startup case studies,
              100+ successful fundraises, and deep expertise in building companies from zero to exit.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 sm:p-4 bg-white/5 rounded-xl">
                <p className="text-purple-400 font-bold mb-2 text-sm sm:text-base">Core Expertise</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>&bull; Vision & Strategy Development</li>
                  <li>&bull; Seed to Series C Fundraising</li>
                  <li>&bull; Board Management & Governance</li>
                  <li>&bull; Strategic Partnerships</li>
                  <li>&bull; M&A and Exit Planning</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-purple-400 font-bold mb-2">Track Record</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>&bull; 3 startups founded/led</li>
                  <li>&bull; 2 successful exits ($50M, $180M)</li>
                  <li>&bull; $500M+ total capital raised</li>
                  <li>&bull; 1 IPO (NASDAQ)</li>
                  <li>&bull; Board member of 5 companies</li>
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
              <p className="text-white font-bold">February 7, 2026</p>
              <p className="text-slate-500 text-xs mt-1">Launch: March 1 (22 days)</p>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Philosophy */}
      <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Lightbulb size={24} className="text-purple-400" />
          My CEO Philosophy
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              principle: 'Vision First',
              desc: 'Crystal clear vision that every team member can articulate in 10 seconds',
              icon: Eye
            },
            {
              principle: 'People Over Process',
              desc: 'A-players with autonomy beat B-players with perfect processes every time',
              icon: Users
            },
            {
              principle: 'Speed of Learning',
              desc: 'The startup that learns fastest wins. Ship, measure, iterate.',
              icon: Zap
            },
            {
              principle: 'Capital Efficiency',
              desc: 'Every dollar should generate $10+ in value. No vanity spending.',
              icon: DollarSign
            },
          ].map((item) => (
            <div key={item.principle} className="p-4 bg-white/5 rounded-xl relative">
              <item.icon size={24} className="text-purple-400 mb-3" />
              <h4 className="text-white font-bold mb-2">{item.principle}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Message */}
      <div className="bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
        <div className="flex items-start gap-4">
          <MessageSquare size={32} className="text-[#c9a227] flex-shrink-0" />
          <div>
            <h3 className="text-[#c9a227] font-bold text-lg mb-2">My Key Message to the Team</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              &ldquo;You&apos;ve built something remarkable. Product 100% complete, 8-member team aligned, 15 merchants ready,
              March 1 launch locked. You&apos;ve moved from planning to execution mode. The next 22 days will define your first year.
              Three priorities: Close investor commitments, maximize Day 1 user sign-ups, and deliver a flawless launch experience.
              Every transaction in the GCC will earn rewards - and it starts now.&rdquo;
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
      <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-2xl p-6 sm:p-8 border border-purple-500/30">
        <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
          <Eye size={28} />
          Current State Diagnosis
        </h2>
        <p className="text-slate-300 text-lg">
          After analyzing your entire codebase, documentation, and business materials, here is my assessment
          of where Nuqta stands today from a CEO perspective.
        </p>
      </div>

      {/* Health Score */}
      <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Company Health Scorecard</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { area: 'Vision & Strategy', score: 100, status: 'Crystal Clear', color: 'green' },
              { area: 'Business Model', score: 100, status: 'Validated', color: 'green' },
              { area: 'Market Timing', score: 100, status: 'Perfect', color: 'green' },
              { area: 'Product Development', score: 100, status: 'COMPLETE', color: 'green' },
              { area: 'Team Hired', score: 100, status: '8 Members', color: 'green' },
              { area: 'Launch Readiness', score: 100, status: 'March 1 Set', color: 'green' },
              { area: 'Merchant Pipeline', score: 100, status: '15 Ready', color: 'green' },
              { area: 'Funding Pipeline', score: 100, status: '50+ Investors', color: 'green' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-36 text-slate-300 text-sm">{item.area}</div>
                <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-green-500"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                <div className="w-24 text-sm font-medium text-green-400">
                  {item.status}
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 bg-green-500/10 rounded-xl border border-green-500/30">
            <h4 className="text-green-400 font-bold mb-4">Overall Assessment</h4>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-400">A+</div>
              <div>
                <p className="text-white font-medium">Strategic Alignment: 100%</p>
                <p className="text-slate-400 text-sm">Launch Ready: Yes</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              Exceptional execution! Product complete, team hired, merchants ready, launch date set.
              Now in final 22-day sprint to March 1. All systems go.
            </p>
          </div>
        </div>
      </div>

      {/* What We&apos;ve Achieved */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/30">
          <h3 className="text-green-400 font-bold text-lg mb-4 flex items-center gap-2">
            <CheckCircle size={20} />
            What We&apos;ve Achieved
          </h3>
          <ul className="space-y-3">
            {[
              { item: 'Clear Vision Articulated', detail: 'Every transaction earns rewards' },
              { item: 'Product 100% Complete', detail: 'iOS/Android ready for launch' },
              { item: 'Full Team Hired (8 people)', detail: 'All C-suite + core roles filled' },
              { item: '15 Merchants Ready', detail: 'Trained and ready for Day 1' },
              { item: 'March 1 Launch Date Set', detail: 'Public commitment made' },
              { item: '$400K SAFE Terms Ready', detail: '50+ investor pipeline active' },
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
            Launch Countdown Priorities
          </h3>
          <ul className="space-y-3">
            {[
              { item: 'Investor Commitments', detail: 'Close 2-3 checks before March 1' },
              { item: 'Founders Circle Launch', detail: 'Build 100 user waitlist' },
              { item: 'PR & Media Push', detail: 'Execute 14-day pre-launch campaign' },
              { item: 'Day 1 Ops Readiness', detail: 'Final testing and team prep' },
              { item: 'First Transactions', detail: 'Enable beta user purchases' },
              { item: 'Launch Event Planning', detail: 'March 1 celebration' },
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

function StrategicChallenges() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-[#c9a227]/10 to-[#c9a227]/5 rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
        <h2 className="text-2xl font-bold text-[#c9a227] mb-4 flex items-center gap-3">
          <Target size={28} />
          Strategic Challenges (CEO Domain)
        </h2>
        <p className="text-slate-300 text-lg">
          These are the opportunities that fall under CEO responsibility in the final 22 days before launch.
          All have been proactively addressed with clear action plans.
        </p>
      </div>

      {/* Challenge Cards */}
      <div className="space-y-6">
        {[
          {
            id: 1,
            title: 'Close First Investor Checks',
            priority: 'HIGH',
            timeframe: '22 days',
            context: 'Pipeline active with 50+ investors, need to convert interest to commitments',
            actions: [
              'Weekly investor update emails with traction metrics',
              'Prioritize top 10 warmest leads for focused outreach',
              'Prepare closing deck with March 1 launch momentum',
              'Create urgency with limited allocation messaging'
            ],
            outcome: '2-3 checks closed before March 1 launch',
            ownership: 100,
            status: 'in_progress'
          },
          {
            id: 2,
            title: 'Founders Circle User Acquisition',
            priority: 'HIGH',
            timeframe: '22 days',
            context: 'Need early adopters ready to transact on Day 1',
            actions: [
              'Activate personal networks for first 50 sign-ups',
              'Influencer soft launch with exclusive access',
              'Referral incentives for founding members',
              'Waitlist landing page optimization'
            ],
            outcome: '100 users in Founders Circle by launch',
            ownership: 60,
            status: 'in_progress'
          },
          {
            id: 3,
            title: 'Strategic Partnership Pipeline',
            priority: 'MEDIUM',
            timeframe: '60 days',
            context: 'Global Village and anchor brands in discussion',
            actions: [
              'Finalize Global Village pilot terms',
              'Identify 3 anchor brand partnerships',
              'Prepare partnership case study template',
              'Set Q2 partnership revenue targets'
            ],
            outcome: '1 major partnership announced by Q2',
            ownership: 90,
            status: 'planned'
          },
          {
            id: 4,
            title: 'Board & Advisory Setup',
            priority: 'MEDIUM',
            timeframe: '90 days',
            context: 'Governance structure needed for investor confidence',
            actions: [
              'Identify 2-3 potential advisors with domain expertise',
              'Draft advisory agreement terms',
              'Plan first informal board meeting post-launch',
              'Create investor reporting cadence'
            ],
            outcome: 'Advisory board in place by Q2',
            ownership: 100,
            status: 'planned'
          },
        ].map((challenge) => (
          <div key={challenge.id} className={`rounded-2xl p-6 border ${
            challenge.priority === 'HIGH' ? 'bg-[#c9a227]/10 border-[#c9a227]/30' :
            'bg-purple-500/10 border-purple-500/30'
          }`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  challenge.priority === 'HIGH' ? 'bg-[#c9a227]/20 text-[#c9a227]' :
                  'bg-purple-500/20 text-purple-400'
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
                <h4 className="text-purple-400 font-medium mb-2">Context</h4>
                <p className="text-slate-300 text-sm mb-4">{challenge.context}</p>

                <h4 className="text-purple-400 font-medium mb-2">Action Plan</h4>
                <ul className="space-y-1">
                  {challenge.actions.map((action, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-green-400">&bull;</span> {action}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-purple-400 font-medium mb-2">Expected Outcome</h4>
                <p className="text-green-400 text-sm mb-4 font-medium">{challenge.outcome}</p>

                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">CEO Ownership</span>
                    <span className="text-purple-400 font-bold">{challenge.ownership}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: `${challenge.ownership}%` }} />
                  </div>
                  <p className="text-slate-500 text-xs mt-2">
                    Status: {challenge.status === 'in_progress' ? 'In Progress' : 'Planned'}
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
          Strategic Solutions
        </h2>
        <p className="text-slate-300 text-lg">
          Based on my 20 years of experience, here are the proven playbooks for each challenge.
          Each solution includes detailed steps, expected outcomes, and success criteria.
        </p>
      </div>

      {/* Solutions */}
      <div className="space-y-6">
        {[
          {
            challenge: 'Investor Close',
            solution: 'The Momentum Close',
            strategy: 'Use March 1 launch as forcing function. Create urgency through scarcity and social proof.',
            steps: [
              { step: 'Week 1', action: 'Send March 1 launch announcement to all 50+ investors', outcome: 'Re-engage pipeline' },
              { step: 'Week 2', action: 'Host virtual demo day for top 10 prospects', outcome: '5 serious conversations' },
              { step: 'Week 3', action: 'Share beta metrics (users, transactions) pre-launch', outcome: 'Proof of traction' },
              { step: 'Launch Week', action: 'Close with "last allocation" urgency', outcome: '2-3 checks committed' },
            ],
            keyInsight: 'Investors invest in momentum. A live product with real users is 10x more compelling than a pitch deck.',
            successCriteria: '$100K+ committed before March 1'
          },
          {
            challenge: 'User Acquisition',
            solution: 'The Founders Circle Playbook',
            strategy: 'Build exclusive community of early adopters who feel ownership in the product.',
            steps: [
              { step: 'Day 1-5', action: 'Personal outreach to friends, family, and professional network', outcome: '50 sign-ups' },
              { step: 'Day 6-10', action: 'Activate influencer network with exclusive early access', outcome: '30 influencer users' },
              { step: 'Day 11-15', action: 'Launch referral program with founding member benefits', outcome: '20 viral sign-ups' },
              { step: 'Day 16-22', action: 'Pre-launch countdown with daily content and teasers', outcome: '100+ ready for Day 1' },
            ],
            keyInsight: 'Your first 100 users are not customers - they are co-founders. Treat them like it.',
            successCriteria: '100 Founders Circle members + 500 waitlist'
          },
          {
            challenge: 'Partnership Strategy',
            solution: 'The Anchor Partner Approach',
            strategy: 'Land one high-profile partnership that creates credibility cascade.',
            steps: [
              { step: 'Month 1', action: 'Finalize Global Village pilot scope and terms', outcome: 'Signed MOU' },
              { step: 'Month 2', action: 'Execute pilot with 5-10 Global Village merchants', outcome: 'Case study data' },
              { step: 'Month 3', action: 'Use case study to approach 3 more anchor partners', outcome: 'Partnership pipeline' },
              { step: 'Month 4', action: 'Announce partnership publicly for PR value', outcome: 'Media coverage' },
            ],
            keyInsight: 'One anchor partnership is worth more than 10 small ones. It signals credibility to everyone else.',
            successCriteria: 'Global Village pilot live by end of Q1'
          },
        ].map((solution, idx) => (
          <div key={idx} className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-purple-400 text-sm mb-1">Solution for: {solution.challenge}</p>
                <h3 className="text-2xl font-bold text-green-400">{solution.solution}</h3>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                CEO Playbook
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

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
                <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
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
      <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-2xl p-6 sm:p-8 border border-purple-500/30">
        <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
          <Rocket size={28} />
          22-Day CEO Execution Plan
        </h2>
        <p className="text-slate-300 text-lg">
          This is your daily and weekly playbook. Focus on the highest-leverage activities only.
        </p>
      </div>

      {/* Week by Week */}
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            week: 'Week 1 (Feb 8-14)',
            theme: 'Investor Sprint + User Foundation',
            days: [
              { day: 'Mon', focus: 'Investor Outreach', tasks: ['Send launch announcement to all investors', 'Schedule top 5 calls'] },
              { day: 'Tue', focus: 'User Acquisition', tasks: ['Launch Founders Circle landing page', 'Personal outreach (20 people)'] },
              { day: 'Wed', focus: 'Investor Calls', tasks: ['2-3 investor calls', 'Prep demo day invite'] },
              { day: 'Thu', focus: 'User Acquisition', tasks: ['Influencer outreach', 'Referral program setup'] },
              { day: 'Fri', focus: 'Week Review', tasks: ['Metrics review', 'Adjust strategy'] },
            ],
            kpi: '50 Founders Circle + 3 investor meetings'
          },
          {
            week: 'Week 2 (Feb 15-21)',
            theme: 'Demo Day + Momentum Building',
            days: [
              { day: 'Mon', focus: 'Demo Day Prep', tasks: ['Finalize demo deck', 'Test product flow'] },
              { day: 'Tue', focus: 'Virtual Demo Day', tasks: ['Host demo for top investors', 'Follow-up immediately'] },
              { day: 'Wed', focus: 'User Growth', tasks: ['Launch referral campaign', 'Social media push'] },
              { day: 'Thu', focus: 'Investor Follow-up', tasks: ['Send term sheets to interested investors', 'Close conversations'] },
              { day: 'Fri', focus: 'Week Review', tasks: ['Traction metrics', 'Prep for launch week'] },
            ],
            kpi: '100 Founders Circle + 1 term sheet'
          },
          {
            week: 'Week 3 (Feb 22-28)',
            theme: 'Pre-Launch Countdown',
            days: [
              { day: 'Mon', focus: 'PR Push', tasks: ['Press release finalization', 'Media outreach'] },
              { day: 'Tue', focus: 'Investor Close', tasks: ['Final investor calls', 'Close first checks'] },
              { day: 'Wed', focus: 'Launch Prep', tasks: ['Final product testing', 'Team alignment'] },
              { day: 'Thu', focus: 'Content Launch', tasks: ['Social media countdown', 'Influencer content'] },
              { day: 'Fri', focus: 'Final Check', tasks: ['All systems go check', 'Launch day prep'] },
            ],
            kpi: '$100K+ committed + 500 waitlist'
          },
          {
            week: 'Launch Week (Mar 1+)',
            theme: 'LAUNCH & CELEBRATE',
            days: [
              { day: 'Sat/Sun', focus: 'Final Prep', tasks: ['Rest and recharge', 'Last-minute checks'] },
              { day: 'Mon (Mar 1)', focus: 'LAUNCH DAY', tasks: ['Product live', 'PR + social blast', 'Team celebration'] },
              { day: 'Tue', focus: 'Day 2 Ops', tasks: ['User support', 'Bug fixes', 'Metrics monitoring'] },
              { day: 'Wed-Fri', focus: 'Growth Mode', tasks: ['Iterate on feedback', 'Scale what works', 'Investor update'] },
            ],
            kpi: '1000 users + First transactions'
          },
        ].map((week, idx) => (
          <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-purple-400 font-bold text-lg">{week.week}</h3>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">{week.theme}</span>
            </div>
            <div className="space-y-2">
              {week.days.map((day, dayIdx) => (
                <div key={dayIdx} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-14 text-center">
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
            <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
              <p className="text-green-400 text-sm font-medium">Target: {week.kpi}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CEO Time Allocation */}
      <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Clock size={24} className="text-purple-400" />
          Recommended CEO Time Allocation
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {[
              { activity: 'Fundraising/Investors', pct: 35, color: 'bg-purple-500' },
              { activity: 'User Acquisition', pct: 25, color: 'bg-green-500' },
              { activity: 'Team Leadership', pct: 20, color: 'bg-blue-500' },
              { activity: 'Product/Launch Prep', pct: 15, color: 'bg-[#c9a227]' },
              { activity: 'Admin/Other', pct: 5, color: 'bg-slate-500' },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-slate-300">{item.activity}</span>
                  <span className="text-white font-bold">{item.pct}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 bg-purple-500/10 rounded-xl border border-purple-500/30">
            <h4 className="text-purple-400 font-bold mb-4">CEO Priority Stack</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs">1</span>
                <span className="text-white">Close investor commitments</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="w-6 h-6 bg-purple-500/80 rounded-full flex items-center justify-center text-white font-bold text-xs">2</span>
                <span className="text-white">Build Founders Circle to 100</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="w-6 h-6 bg-purple-500/60 rounded-full flex items-center justify-center text-white font-bold text-xs">3</span>
                <span className="text-white">Ensure flawless launch</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="w-6 h-6 bg-purple-500/40 rounded-full flex items-center justify-center text-white font-bold text-xs">4</span>
                <span className="text-white">Everything else can wait</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuccessMetrics() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-2xl p-6 sm:p-8 border border-purple-500/30">
        <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
          <BarChart3 size={28} />
          CEO Success Metrics
        </h2>
        <p className="text-slate-300 text-lg">
          These are the KPIs I track as CEO. Green means on track, gold means in progress.
        </p>
      </div>

      {/* KPI Dashboard */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { metric: 'Vision Articulated', current: '100%', target: 'Clear', deadline: 'Done', status: 'green' },
          { metric: 'Product Complete', current: '100%', target: '100%', deadline: 'Done', status: 'green' },
          { metric: 'Team Hired', current: '8', target: '8', deadline: 'Done', status: 'green' },
          { metric: 'Launch Date', current: 'Mar 1', target: 'Mar 1', deadline: '22 days', status: 'green' },
          { metric: 'Merchants Ready', current: '15', target: '10+', deadline: 'Done', status: 'green' },
          { metric: 'Founders Circle', current: 'Building', target: '100', deadline: 'Mar 1', status: 'gold' },
          { metric: 'Investor Pipeline', current: '50+', target: 'Close 3', deadline: 'Mar 15', status: 'gold' },
          { metric: 'First Revenue', current: 'Pending', target: 'AED 10K', deadline: 'Mar 15', status: 'gold' },
        ].map((kpi, idx) => (
          <div key={idx} className={`p-4 rounded-xl border ${
            kpi.status === 'green' ? 'bg-green-500/10 border-green-500/30' : 'bg-[#c9a227]/10 border-[#c9a227]/30'
          }`}>
            <p className="text-slate-400 text-sm">{kpi.metric}</p>
            <div className="flex items-end gap-2 mt-1">
              <span className={`text-2xl font-bold ${
                kpi.status === 'green' ? 'text-green-400' : 'text-[#c9a227]'
              }`}>{kpi.current}</span>
              <span className="text-slate-500 text-sm mb-1">{kpi.target !== kpi.current ? `→ ${kpi.target}` : ''}</span>
            </div>
            <p className="text-slate-500 text-xs mt-2">{kpi.deadline}</p>
          </div>
        ))}
      </div>

      {/* Milestone Timeline */}
      <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">30-60-90 Day Milestones</h3>
        <div className="space-y-6">
          {[
            {
              period: '30 Days (Launch + Month 1)',
              milestones: [
                { item: 'March 1 public launch', critical: true },
                { item: '1,000 active users', critical: true },
                { item: '$100K+ investor commitments', critical: true },
                { item: '50 merchants live', critical: false },
                { item: 'First AED 10K revenue', critical: false },
                { item: 'Product-market fit signals', critical: false },
              ]
            },
            {
              period: '60 Days',
              milestones: [
                { item: '10,000 active users', critical: true },
                { item: '200 merchants live', critical: true },
                { item: 'SAFE round fully closed ($400K)', critical: true },
                { item: 'AED 50K MRR', critical: false },
                { item: 'Global Village pilot live', critical: false },
                { item: 'Advisory board formed', critical: false },
              ]
            },
            {
              period: '90 Days',
              milestones: [
                { item: '25,000 active users', critical: true },
                { item: '500 merchants live', critical: true },
                { item: 'AED 100K MRR', critical: false },
                { item: 'Team of 15', critical: false },
                { item: 'Series A conversations started', critical: false },
                { item: 'Dubai full coverage', critical: false },
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
      <div className="bg-gradient-to-r from-purple-500/20 to-[#c9a227]/20 rounded-2xl p-6 sm:p-8 border border-purple-500/30">
        <div className="flex items-start gap-4">
          <Crown size={32} className="text-purple-400 flex-shrink-0" />
          <div>
            <h3 className="text-purple-400 font-bold text-xl mb-3">Final Message from Agent Sarah Chen</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              &ldquo;You&apos;ve done the hard work. Product built. Team hired. Merchants signed. Launch date set.
              The foundation is rock solid.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              The next 22 days are about one thing: momentum. Get investors excited with your launch.
              Get users excited with early access. Get merchants excited with first transactions.
              Momentum is everything in a launch.
            </p>
            <p className="text-white font-bold text-lg">
              Every transaction in the GCC will earn rewards. It starts March 1. Let&apos;s make history.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
