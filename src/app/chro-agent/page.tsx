'use client';

import React, { useState } from 'react';
import {
  Heart,
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
  Zap,
  Eye,
  MessageSquare,
  FileText,
  BarChart3,
  UserPlus,
  GraduationCap,
  Crown,
  ChevronDown,
  ChevronRight,
  BookOpen,
  Coffee,
  Handshake,
  Smile
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

/**
 * CHRO AGENT PAGE
 *
 * AI Agent: Elena Rodriguez (23+ years experience)
 * Background: Former CHRO at 3 unicorns, VP People at Uber MENA
 * Expertise: Talent Acquisition, Culture Building, Org Design, Leadership Development
 *
 * This is the CHRO Agent interactive report page.
 */

type SectionId = 'profile' | 'diagnosis' | 'challenges' | 'solutions' | 'execution' | 'metrics';

const sections: { id: SectionId; label: string }[] = [
  { id: 'profile', label: 'Agent Profile' },
  { id: 'diagnosis', label: 'People Diagnosis' },
  { id: 'challenges', label: 'HR Challenges' },
  { id: 'solutions', label: 'People Solutions' },
  { id: 'execution', label: 'Execution Plan' },
  { id: 'metrics', label: 'People Metrics' },
];

export default function CHROAgentPage() {
  const [activeSection, setActiveSection] = useState<SectionId>('profile');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-900/50 to-pink-800/30 border-b border-pink-500/30">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-500 to-[#c9a227] flex items-center justify-center shadow-xl flex-shrink-0">
              <Heart size={32} className="text-white sm:w-12 sm:h-12" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">CHRO AI Agent</h1>
                <span className="px-2 sm:px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-xs sm:text-sm border border-pink-500/30">
                  People & Culture
                </span>
              </div>
              <p className="text-pink-300 text-sm sm:text-lg">AI Agent: Elena Rodriguez &bull; 23+ Years Experience</p>
              <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-base">Former CHRO at 3 unicorns &bull; VP People Uber MENA &bull; 5000+ hires</p>
            </div>
            <div className="text-left sm:text-right w-full sm:w-auto mt-2 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-pink-500/20">
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#c9a227] to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">100</span>
                  </div>
                </div>
                <div className="text-center sm:text-right mt-2">
                  <p className="text-[#c9a227] font-bold text-lg sm:text-xl">NUQTA</p>
                  <p className="text-slate-500 text-xs sm:text-sm">Feb 2026</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs sm:text-sm">Team Ready</span>
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
                    ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
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
        {activeSection === 'diagnosis' && <PeopleDiagnosis />}
        {activeSection === 'challenges' && <HRChallenges />}
        {activeSection === 'solutions' && <PeopleSolutions />}
        {activeSection === 'execution' && <ExecutionPlan />}
        {activeSection === 'metrics' && <PeopleMetrics />}
      </div>
    </div>
  );
}

function AgentProfile() {
  return (
    <div className="space-y-8">
      {/* Agent Card */}
      <div className="bg-gradient-to-r from-pink-500/10 to-[#c9a227]/10 rounded-2xl p-6 sm:p-8 border border-pink-500/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">Agent Profile: Elena Rodriguez</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              I&apos;m an AI agent modeled on 23+ years of HR leadership across hypergrowth startups and global enterprises.
              As former CHRO at 3 unicorns and VP People at Uber MENA, I&apos;ve built teams from 10 to 5,000+ employees.
              My expertise spans talent acquisition, culture architecture, and organizational design for high-growth environments.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 sm:p-4 bg-white/5 rounded-xl">
                <p className="text-pink-400 font-bold mb-2 text-sm sm:text-base">Core Expertise</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>&bull; Talent Acquisition & Employer Brand</li>
                  <li>&bull; Culture Architecture & Values</li>
                  <li>&bull; Organizational Design</li>
                  <li>&bull; Leadership Development</li>
                  <li>&bull; Compensation & Equity</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-pink-400 font-bold mb-2">Track Record</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>&bull; CHRO at 3 unicorns</li>
                  <li>&bull; VP People Uber MENA</li>
                  <li>&bull; 5,000+ career hires</li>
                  <li>&bull; 10 to 5,000 scale experience</li>
                  <li>&bull; SHRM Senior Certified</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-pink-500/20 rounded-xl border border-pink-500/30">
              <p className="text-pink-400 font-bold mb-2">Analysis Framework</p>
              <ul className="text-slate-300 text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-pink-400" />
                  People-First Culture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-pink-400" />
                  Values-Driven Hiring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-pink-400" />
                  Growth Mindset
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-pink-400" />
                  Retention Through Purpose
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

      {/* CHRO Philosophy */}
      <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Lightbulb size={24} className="text-pink-400" />
          My People Philosophy
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              principle: 'Hire for Values',
              desc: 'Skills can be taught, values cannot. Hire people who believe what you believe.',
              icon: Heart
            },
            {
              principle: 'Culture is Strategy',
              desc: 'Culture eats strategy for breakfast. Build it intentionally or it builds itself.',
              icon: Star
            },
            {
              principle: 'Growth Through People',
              desc: 'Companies don\'t scale, people do. Invest in development from Day 1.',
              icon: GraduationCap
            },
            {
              principle: 'Transparency Builds Trust',
              desc: 'Share the good and the bad. People deserve to know where they stand.',
              icon: Eye
            },
          ].map((item) => (
            <div key={item.principle} className="p-4 bg-white/5 rounded-xl relative">
              <item.icon size={24} className="text-pink-400 mb-3" />
              <h4 className="text-white font-bold mb-2">{item.principle}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Message */}
      <div className="bg-gradient-to-r from-[#c9a227]/10 to-pink-500/10 rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
        <div className="flex items-start gap-4">
          <MessageSquare size={32} className="text-[#c9a227] flex-shrink-0" />
          <div>
            <h3 className="text-[#c9a227] font-bold text-lg mb-2">My Key Message to the Team</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              &ldquo;You&apos;ve built something special - a founding team of 8 people who believe in the mission.
              That&apos;s the hardest part. Now protect this culture fiercely as you grow. Every hire should raise the bar.
              Every process should reinforce your values. The team you build in Year 1 will define the company for a decade.
              Choose wisely, invest deeply, and never compromise on culture fit.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PeopleDiagnosis() {
  return (
    <div className="space-y-8">
      {/* Executive Summary */}
      <div className="bg-gradient-to-r from-pink-500/10 to-pink-500/5 rounded-2xl p-6 sm:p-8 border border-pink-500/30">
        <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center gap-3">
          <Eye size={28} />
          People & Culture Diagnosis
        </h2>
        <p className="text-slate-300 text-lg">
          After analyzing your team structure, hiring plans, and culture documentation, here is my assessment
          of Nuqta&apos;s people readiness for launch and scale.
        </p>
      </div>

      {/* Health Score */}
      <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">People Health Scorecard</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { area: 'Founding Team', score: 100, status: '8 Members', color: 'green' },
              { area: 'C-Suite Complete', score: 100, status: 'All Filled', color: 'green' },
              { area: 'Culture Values', score: 100, status: '6 Core Values', color: 'green' },
              { area: 'Hiring Pipeline', score: 100, status: 'Year 1 Planned', color: 'green' },
              { area: 'Compensation', score: 100, status: 'Market Aligned', color: 'green' },
              { area: 'ESOP Structure', score: 100, status: '15% Pool', color: 'green' },
              { area: 'Onboarding', score: 100, status: 'Program Ready', color: 'green' },
              { area: 'HR Policies', score: 100, status: 'Documented', color: 'green' },
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
                <p className="text-white font-medium">People Readiness: 100%</p>
                <p className="text-slate-400 text-sm">Team Ready: Yes</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              Exceptional team foundation. Full C-suite, culture defined, hiring plan ready.
              8-member founding team aligned on mission. Ready to scale post-launch.
            </p>
          </div>
        </div>
      </div>

      {/* Team Structure */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-pink-500/10 rounded-xl border border-pink-500/30 p-4">
          <div className="text-pink-400 text-sm mb-1">Current Team</div>
          <div className="text-2xl font-bold text-white">8</div>
          <div className="text-pink-400/60 text-xs mt-1">Founding members</div>
        </div>
        <div className="bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30 p-4">
          <div className="text-[#c9a227] text-sm mb-1">Year 1 Target</div>
          <div className="text-2xl font-bold text-white">20</div>
          <div className="text-[#c9a227]/60 text-xs mt-1">By Dec 2026</div>
        </div>
        <div className="bg-blue-500/10 rounded-xl border border-blue-500/30 p-4">
          <div className="text-blue-400 text-sm mb-1">C-Suite Roles</div>
          <div className="text-2xl font-bold text-white">5/5</div>
          <div className="text-blue-400/60 text-xs mt-1">All filled</div>
        </div>
        <div className="bg-purple-500/10 rounded-xl border border-purple-500/30 p-4">
          <div className="text-purple-400 text-sm mb-1">ESOP Pool</div>
          <div className="text-2xl font-bold text-white">15%</div>
          <div className="text-purple-400/60 text-xs mt-1">Reserved for team</div>
        </div>
      </div>

      {/* People Achievements */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/30">
          <h3 className="text-green-400 font-bold text-lg mb-4 flex items-center gap-2">
            <CheckCircle size={20} />
            People Strengths
          </h3>
          <ul className="space-y-3">
            {[
              { item: '8-Member Founding Team', detail: 'All roles filled, aligned on mission' },
              { item: 'Full C-Suite', detail: 'CEO, CTO, CMO, CHRO, COO in place' },
              { item: '6 Core Values Defined', detail: 'Customer Obsession, Bias for Action, Think Big' },
              { item: 'Hiring Pipeline Ready', detail: '12 roles mapped for Year 1' },
              { item: 'Competitive Comp', detail: 'Market-rate salaries + meaningful equity' },
              { item: 'Culture Programs', detail: 'Onboarding, learning, recognition planned' },
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
            People Priorities
          </h3>
          <ul className="space-y-3">
            {[
              { item: 'Execute Hiring Plan', detail: '12 hires in Year 1 as planned' },
              { item: 'Onboard New Hires', detail: '2-week structured program' },
              { item: 'Build Employer Brand', detail: 'Position as top UAE startup' },
              { item: 'Performance Culture', detail: 'OKRs, feedback, recognition' },
              { item: 'Leadership Development', detail: 'Grow managers from within' },
              { item: 'Scale Culture', detail: 'Maintain values as team grows' },
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

function HRChallenges() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-[#c9a227]/10 to-[#c9a227]/5 rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
        <h2 className="text-2xl font-bold text-[#c9a227] mb-4 flex items-center gap-3">
          <Target size={28} />
          People Challenges (CHRO Domain)
        </h2>
        <p className="text-slate-300 text-lg">
          These are the people priorities that fall under CHRO responsibility as the team scales.
          All have been proactively addressed with clear action plans.
        </p>
      </div>

      {/* Challenge Cards */}
      <div className="space-y-6">
        {[
          {
            id: 1,
            title: 'Year 1 Hiring Execution',
            priority: 'HIGH',
            timeframe: '12 months',
            context: 'Need to scale from 8 to 20 people while maintaining quality',
            actions: [
              'Prioritize 4 Q1 hires: 2 engineers, 1 sales, 1 support',
              'Build employer brand with content and presence',
              'Structured interview process for consistency',
              'Competitive offers with equity component'
            ],
            outcome: '20 team members by end of Year 1',
            ownership: 100,
            status: 'planned'
          },
          {
            id: 2,
            title: 'Culture Preservation at Scale',
            priority: 'HIGH',
            timeframe: 'Ongoing',
            context: 'Protect founding culture as team doubles in size',
            actions: [
              'Values-based hiring scorecard',
              'Culture onboarding module for all new hires',
              'Weekly all-hands to reinforce values',
              'Monthly culture pulse surveys'
            ],
            outcome: 'Culture health score >90%',
            ownership: 80,
            status: 'ready'
          },
          {
            id: 3,
            title: 'Onboarding Excellence',
            priority: 'MEDIUM',
            timeframe: '30 days',
            context: 'First impression matters - set new hires up for success',
            actions: [
              '2-week structured onboarding program',
              'Buddy system for every new hire',
              'CEO coffee chat in Week 1',
              '30-60-90 day check-ins'
            ],
            outcome: 'New hire productivity in <30 days',
            ownership: 100,
            status: 'ready'
          },
          {
            id: 4,
            title: 'Performance Management',
            priority: 'MEDIUM',
            timeframe: 'Q2 2026',
            context: 'Need clear expectations and feedback culture',
            actions: [
              'OKR framework implementation',
              'Quarterly performance conversations',
              'Real-time feedback tools',
              'Recognition and rewards program'
            ],
            outcome: 'Clear goals and continuous feedback',
            ownership: 100,
            status: 'planned'
          },
        ].map((challenge) => (
          <div key={challenge.id} className={`rounded-2xl p-6 border ${
            challenge.priority === 'HIGH' ? 'bg-[#c9a227]/10 border-[#c9a227]/30' :
            'bg-pink-500/10 border-pink-500/30'
          }`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  challenge.priority === 'HIGH' ? 'bg-[#c9a227]/20 text-[#c9a227]' :
                  'bg-pink-500/20 text-pink-400'
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
                <h4 className="text-pink-400 font-medium mb-2">Context</h4>
                <p className="text-slate-300 text-sm mb-4">{challenge.context}</p>

                <h4 className="text-pink-400 font-medium mb-2">Action Plan</h4>
                <ul className="space-y-1">
                  {challenge.actions.map((action, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-green-400">&bull;</span> {action}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-pink-400 font-medium mb-2">Expected Outcome</h4>
                <p className="text-green-400 text-sm mb-4 font-medium">{challenge.outcome}</p>

                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">CHRO Ownership</span>
                    <span className="text-pink-400 font-bold">{challenge.ownership}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-pink-500 rounded-full" style={{ width: `${challenge.ownership}%` }} />
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

function PeopleSolutions() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-2xl p-6 sm:p-8 border border-green-500/30">
        <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-3">
          <Lightbulb size={28} />
          People Solutions
        </h2>
        <p className="text-slate-300 text-lg">
          Based on my 23 years of experience, here are the proven people playbooks for scaling culture.
        </p>
      </div>

      {/* Solutions */}
      <div className="space-y-6">
        {[
          {
            challenge: 'Quality Hiring at Scale',
            solution: 'The A-Player Pipeline',
            strategy: 'Build a systematic hiring machine that attracts, evaluates, and closes top talent consistently.',
            steps: [
              { step: 'Week 1', action: 'Create compelling job descriptions focused on mission and impact', outcome: 'Attraction engine' },
              { step: 'Week 2', action: 'Implement structured interview scorecards with values alignment', outcome: 'Consistent evaluation' },
              { step: 'Week 3', action: 'Build employer brand content (day-in-life, culture stories)', outcome: 'Talent magnet' },
              { step: 'Ongoing', action: 'Track hiring funnel metrics and continuously optimize', outcome: 'Quality at scale' },
            ],
            keyInsight: 'The best hiring is proactive, not reactive. Build your pipeline before you need it.',
            successCriteria: '90% offer acceptance rate, <30 day time-to-hire'
          },
          {
            challenge: 'Culture at Scale',
            solution: 'The Culture Operating System',
            strategy: 'Make culture explicit, measurable, and reinforced at every touchpoint.',
            steps: [
              { step: 'Foundation', action: 'Document 6 core values with behavioral examples', outcome: 'Clear expectations' },
              { step: 'Hiring', action: 'Values-based interview questions for every role', outcome: 'Culture fit filter' },
              { step: 'Onboarding', action: 'Culture immersion in first 2 weeks', outcome: 'Fast assimilation' },
              { step: 'Daily', action: 'Recognize values-aligned behaviors publicly', outcome: 'Reinforcement' },
            ],
            keyInsight: 'Culture is not what you say, it\'s what you tolerate. Set the bar high and hold everyone to it.',
            successCriteria: 'Culture health score >90%, voluntary attrition <10%'
          },
          {
            challenge: 'High-Performance Culture',
            solution: 'The Ownership Model',
            strategy: 'Give people ownership, clear goals, and continuous feedback.',
            steps: [
              { step: 'Q1', action: 'Implement OKR framework for all team members', outcome: 'Goal clarity' },
              { step: 'Bi-weekly', action: 'Manager 1:1s with feedback and coaching', outcome: 'Growth focus' },
              { step: 'Monthly', action: 'Team wins celebration and learnings share', outcome: 'Recognition' },
              { step: 'Quarterly', action: 'Performance conversations with development plans', outcome: 'Career growth' },
            ],
            keyInsight: 'High performers want feedback, not praise. Give them both, but prioritize growth.',
            successCriteria: 'eNPS >50, performance goal achievement >85%'
          },
        ].map((solution, idx) => (
          <div key={idx} className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-pink-400 text-sm mb-1">Solution for: {solution.challenge}</p>
                <h3 className="text-2xl font-bold text-green-400">{solution.solution}</h3>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                CHRO Playbook
              </span>
            </div>

            <p className="text-slate-300 mb-6">{solution.strategy}</p>

            <div className="mb-6">
              <h4 className="text-white font-bold mb-4">Step-by-Step Execution</h4>
              <div className="space-y-3">
                {solution.steps.map((step, stepIdx) => (
                  <div key={stepIdx} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-lg text-sm font-bold whitespace-nowrap">
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
              <div className="p-4 bg-pink-500/10 rounded-xl border border-pink-500/30">
                <h4 className="text-pink-400 font-bold mb-2 flex items-center gap-2">
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
      <div className="bg-gradient-to-r from-pink-500/10 to-pink-500/5 rounded-2xl p-6 sm:p-8 border border-pink-500/30">
        <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center gap-3">
          <Rocket size={28} />
          Year 1 CHRO Execution Plan
        </h2>
        <p className="text-slate-300 text-lg">
          This is your people playbook for Year 1. Build the foundation that will support 100+ employees.
        </p>
      </div>

      {/* Quarter by Quarter */}
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            quarter: 'Q1 2026 (Jan-Mar)',
            theme: 'FOUNDATION & LAUNCH',
            tasks: [
              { task: 'Complete founding team (8 members)', status: 'complete' },
              { task: 'Finalize all HR policies', status: 'complete' },
              { task: 'Launch onboarding program', status: 'ready' },
              { task: 'Hire 2-3 key roles post-launch', status: 'planned' },
              { task: 'Implement OKR framework', status: 'ready' },
              { task: 'Set up HRIS/payroll systems', status: 'complete' },
            ],
            kpi: '8 team members, culture foundation set'
          },
          {
            quarter: 'Q2 2026 (Apr-Jun)',
            theme: 'SCALE & CULTURE',
            tasks: [
              { task: 'Hire 4-5 new team members', status: 'planned' },
              { task: 'First performance conversations', status: 'planned' },
              { task: 'Launch Learning Fridays program', status: 'planned' },
              { task: 'Build employer brand content', status: 'planned' },
              { task: 'First culture pulse survey', status: 'planned' },
              { task: 'Recognition program launch', status: 'planned' },
            ],
            kpi: '12-13 team members, culture score >85%'
          },
          {
            quarter: 'Q3 2026 (Jul-Sep)',
            theme: 'DEVELOP & RETAIN',
            tasks: [
              { task: 'Hire 3-4 new team members', status: 'planned' },
              { task: 'Mid-year performance reviews', status: 'planned' },
              { task: 'Manager training program', status: 'planned' },
              { task: 'First team offsite', status: 'planned' },
              { task: 'Career pathing framework', status: 'planned' },
              { task: 'Compensation benchmarking', status: 'planned' },
            ],
            kpi: '16-17 team members, eNPS >40'
          },
          {
            quarter: 'Q4 2026 (Oct-Dec)',
            theme: 'OPTIMIZE & PLAN',
            tasks: [
              { task: 'Complete Year 1 hiring (20 people)', status: 'planned' },
              { task: 'Annual performance reviews', status: 'planned' },
              { task: 'Year 2 org design and hiring plan', status: 'planned' },
              { task: 'Salary adjustments and promotions', status: 'planned' },
              { task: 'Culture health assessment', status: 'planned' },
              { task: 'Leadership development program', status: 'planned' },
            ],
            kpi: '20 team members, retention >90%'
          },
        ].map((quarter, idx) => (
          <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="mb-4">
              <h3 className="text-pink-400 font-bold text-lg">{quarter.quarter}</h3>
              <span className="px-2 py-1 bg-pink-500/20 text-pink-400 rounded text-xs">{quarter.theme}</span>
            </div>
            <div className="space-y-2 mb-4">
              {quarter.tasks.map((task, taskIdx) => (
                <div key={taskIdx} className="flex items-center gap-2 text-sm">
                  <CheckCircle size={14} className={`flex-shrink-0 ${
                    task.status === 'complete' ? 'text-green-400' :
                    task.status === 'ready' ? 'text-[#c9a227]' : 'text-slate-500'
                  }`} />
                  <span className="text-slate-300">{task.task}</span>
                </div>
              ))}
            </div>
            <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30">
              <p className="text-green-400 text-sm font-medium">Target: {quarter.kpi}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Hiring Roadmap */}
      <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <UserPlus size={24} className="text-pink-400" />
          Year 1 Hiring Roadmap (8 → 20)
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { role: 'Engineers (2)', timing: 'Q1-Q2', priority: 'HIGH' },
            { role: 'Sales Rep (1)', timing: 'Q1', priority: 'HIGH' },
            { role: 'Support Lead (1)', timing: 'Q2', priority: 'HIGH' },
            { role: 'Marketing (2)', timing: 'Q2', priority: 'MEDIUM' },
            { role: 'Sales Expansion (2)', timing: 'Q2-Q3', priority: 'MEDIUM' },
            { role: 'Support Agents (2)', timing: 'Q3', priority: 'MEDIUM' },
            { role: 'Designer (1)', timing: 'Q3', priority: 'MEDIUM' },
            { role: 'Data Analyst (1)', timing: 'Q4', priority: 'LOW' },
          ].map((hire, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl">
              <p className="text-white font-medium">{hire.role}</p>
              <p className="text-slate-400 text-sm">{hire.timing}</p>
              <span className={`inline-block mt-2 px-2 py-0.5 rounded text-xs ${
                hire.priority === 'HIGH' ? 'bg-[#c9a227]/20 text-[#c9a227]' :
                hire.priority === 'MEDIUM' ? 'bg-blue-500/20 text-blue-400' :
                'bg-slate-500/20 text-slate-400'
              }`}>
                {hire.priority}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PeopleMetrics() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-pink-500/10 to-pink-500/5 rounded-2xl p-6 sm:p-8 border border-pink-500/30">
        <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center gap-3">
          <BarChart3 size={28} />
          CHRO Success Metrics
        </h2>
        <p className="text-slate-300 text-lg">
          These are the people KPIs I track. Culture and team health are as important as revenue.
        </p>
      </div>

      {/* KPI Dashboard */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { metric: 'Team Size', current: '8', target: '20', deadline: 'Dec 2026', status: 'green' },
          { metric: 'C-Suite Filled', current: '5/5', target: '100%', deadline: 'Complete', status: 'green' },
          { metric: 'Offer Acceptance', current: 'Target', target: '>90%', deadline: 'Ongoing', status: 'gold' },
          { metric: 'Time-to-Hire', current: 'Target', target: '<30 days', deadline: 'Ongoing', status: 'gold' },
          { metric: 'eNPS Score', current: 'Target', target: '>50', deadline: 'Q2 2026', status: 'gold' },
          { metric: 'Culture Health', current: 'Target', target: '>90%', deadline: 'Quarterly', status: 'gold' },
          { metric: 'Retention Rate', current: 'Target', target: '>90%', deadline: 'Year 1', status: 'gold' },
          { metric: 'Onboarding NPS', current: 'Target', target: '>70', deadline: 'Per hire', status: 'gold' },
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

      {/* Core Values */}
      <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Nuqta Core Values</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { value: 'Customer Obsession', desc: 'Every decision starts with user and merchant experience', icon: Heart },
            { value: 'Bias for Action', desc: 'Move fast, learn faster. Perfect is the enemy of good.', icon: Zap },
            { value: 'Think Big', desc: 'Building the everyday savings platform for the region', icon: Rocket },
            { value: 'Ownership', desc: 'Act like an owner. No task is beneath you.', icon: Crown },
            { value: 'Earn Trust', desc: 'Be transparent, deliver on promises, admit mistakes', icon: Shield },
            { value: 'Learn & Grow', desc: 'Continuous improvement, embrace feedback, share knowledge', icon: GraduationCap },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl">
              <item.icon size={24} className="text-pink-400 mb-2" />
              <p className="text-white font-bold">{item.value}</p>
              <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Message */}
      <div className="bg-gradient-to-r from-pink-500/20 to-[#c9a227]/20 rounded-2xl p-6 sm:p-8 border border-pink-500/30">
        <div className="flex items-start gap-4">
          <Heart size={32} className="text-pink-400 flex-shrink-0" />
          <div>
            <h3 className="text-pink-400 font-bold text-xl mb-3">Final Message from Agent Elena Rodriguez</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              &ldquo;You have something rare - a founding team of 8 people who truly believe in the mission.
              That&apos;s not luck, that&apos;s intention. Protect it.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              As you grow from 8 to 20 to 50, every hire is a culture decision. Never compromise on values fit.
              The wrong hire doesn&apos;t just underperform - they infect the team. Hire slowly, fire quickly if needed.
            </p>
            <p className="text-white font-bold text-lg">
              The team you build in Year 1 will define Nuqta for a decade.
              Make every hire count. Make every person feel like an owner. That&apos;s how you build something lasting.&rdquo;
            </p>
          </div>
        </div>
      </div>
    <GlobalFooter />
    </div>
  );
}
