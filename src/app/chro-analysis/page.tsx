'use client';

import React, { useState } from 'react';
import {
  Heart,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Target,
  BarChart3,
  PieChart,
  Users,
  Store,
  ArrowRight,
  Shield,
  Calendar,
  Zap,
  ChevronDown,
  ChevronRight,
  UserPlus,
  Briefcase,
  GraduationCap,
  Award,
  Star,
  Rocket,
  Flag,
  Activity,
  Crown,
  BookOpen,
  MessageSquare,
  Smile,
  Building2
} from 'lucide-react';

// ========================================
// CHRO COMPREHENSIVE PEOPLE ANALYSIS
// ========================================

interface PeopleMetric {
  label: string;
  value: string;
  target?: string;
  status: 'good' | 'warning' | 'critical' | 'pending';
  note?: string;
}

// People Snapshot
const peopleSnapshot = {
  currentTeam: '8 members',
  year1Target: '20 members',
  cSuiteFilled: '5/5 (100%)',
  esopPool: '15%',
  cultureScore: 'Launch Ready',
  launchDate: 'March 1, 2026',
  chroStatus: 'FULLY OPERATIONAL'
};

// Team Composition
const teamComposition = [
  { category: 'Executive/C-Suite', current: 5, target: 5, status: 'complete' },
  { category: 'Engineering', current: 1, target: 4, status: 'hiring' },
  { category: 'Marketing', current: 1, target: 3, status: 'hiring' },
  { category: 'Sales/Merchants', current: 1, target: 4, status: 'hiring' },
  { category: 'Operations/Support', current: 0, target: 3, status: 'planned' },
  { category: 'Finance/Admin', current: 0, target: 1, status: 'planned' }
];

// People KPIs
const peopleKPIs: PeopleMetric[] = [
  {
    label: 'Team Size',
    value: '8',
    target: '20 (Year 1)',
    status: 'good',
    note: 'Founding team complete, hiring plan ready'
  },
  {
    label: 'C-Suite Completion',
    value: '100%',
    target: '100%',
    status: 'good',
    note: 'CEO, CTO, CMO, CHRO, COO all filled'
  },
  {
    label: 'Core Values Defined',
    value: '6',
    target: '6',
    status: 'good',
    note: 'Values documented with behavioral examples'
  },
  {
    label: 'ESOP Pool',
    value: '15%',
    target: '15-20%',
    status: 'good',
    note: 'Competitive equity for all team members'
  }
];

// Culture Readiness
const cultureReadiness: PeopleMetric[] = [
  {
    label: 'Onboarding Program',
    value: 'Complete',
    target: 'Ready',
    status: 'good',
    note: '2-week structured program with buddy system'
  },
  {
    label: 'Employee Handbook',
    value: 'Documented',
    target: 'Ready',
    status: 'good',
    note: 'All policies and guidelines in place'
  },
  {
    label: 'OKR Framework',
    value: 'Designed',
    target: 'Ready',
    status: 'good',
    note: 'Goal-setting framework for Q1 launch'
  },
  {
    label: 'Recognition Program',
    value: 'Planned',
    target: 'Ready',
    status: 'good',
    note: 'Weekly shoutouts, monthly awards designed'
  }
];

// Current Team
const currentTeam = [
  { role: 'CEO/Founder', name: 'Rejaul Karim', status: 'FILLED', department: 'Executive' },
  { role: 'CTO', name: 'Deep Tednu Kuri', status: 'FILLED', department: 'Technology' },
  { role: 'CMO', name: 'Sarbajit Bhatacharjee', status: 'FILLED', department: 'Marketing' },
  { role: 'CHRO', name: 'Filled', status: 'FILLED', department: 'People' },
  { role: 'COO', name: 'Gyandeep Bordoloi', status: 'FILLED', department: 'Operations' },
  { role: 'Head of Merchants', name: 'Filled', status: 'FILLED', department: 'Sales' },
  { role: 'Customer Support Lead', name: 'Filled', status: 'FILLED', department: 'Support' },
  { role: 'Finance Officer', name: 'Filled', status: 'FILLED', department: 'Finance' }
];

// Hiring Pipeline
const hiringPipeline = [
  { role: 'Senior Full-Stack Engineer', priority: 'HIGH', timing: 'Q1 2026', department: 'Engineering' },
  { role: 'Mobile Developer', priority: 'HIGH', timing: 'Q1 2026', department: 'Engineering' },
  { role: 'Sales Representative', priority: 'HIGH', timing: 'Q1 2026', department: 'Sales' },
  { role: 'Content & Social Lead', priority: 'MEDIUM', timing: 'Q2 2026', department: 'Marketing' },
  { role: 'Customer Support Agent', priority: 'MEDIUM', timing: 'Q2 2026', department: 'Support' },
  { role: 'Marketing Coordinator', priority: 'MEDIUM', timing: 'Q2 2026', department: 'Marketing' }
];

// Core Values
const coreValues = [
  { name: 'Customer Obsession', description: 'Every decision starts with user and merchant experience', icon: Heart },
  { name: 'Bias for Action', description: 'Move fast, learn faster. Perfect is the enemy of good.', icon: Zap },
  { name: 'Think Big', description: 'Building the everyday savings platform for the region', icon: Rocket },
  { name: 'Ownership', description: 'Act like an owner. No task is beneath you.', icon: Crown },
  { name: 'Earn Trust', description: 'Be transparent, deliver on promises, admit mistakes', icon: Shield },
  { name: 'Learn & Grow', description: 'Continuous improvement, embrace feedback, share knowledge', icon: GraduationCap }
];

// Culture Initiatives
const cultureInitiatives = [
  { name: 'Nuqta Onboarding', timing: 'Day 1-14', description: 'Structured 2-week program with buddy system and CEO chat' },
  { name: 'Weekly All-Hands', timing: 'Every Friday', description: '30-min team meeting: wins, learnings, shoutouts' },
  { name: 'Monthly Town Hall', timing: 'First Monday', description: 'Full company update: metrics, strategy, Q&A' },
  { name: 'Learning Fridays', timing: 'Every Friday 2-4 PM', description: '2 hours dedicated to courses and skill building' },
  { name: 'Quarterly Offsite', timing: 'Every quarter', description: 'Team building, strategic planning outside office' },
  { name: 'Recognition Program', timing: 'Ongoing', description: 'Weekly shoutouts, monthly Star Performer award' }
];

// People Strengths
const peopleStrengths = [
  'Full 8-member founding team hired and aligned',
  'Complete C-Suite: CEO, CTO, CMO, CHRO, COO',
  '6 core values documented with behavioral examples',
  'Competitive compensation with meaningful equity (15% ESOP)',
  'Structured 2-week onboarding program ready',
  'Employee handbook and all policies documented',
  'OKR framework designed for Q1 implementation',
  'Culture programs planned: All-hands, Town halls, Learning Fridays',
  'Year 1 hiring plan: 12 roles mapped with timeline',
  'Performance management framework designed',
  'Employer brand positioning ready',
  'D&I policy and practices in place'
];

// All Risks Mitigated
const peopleRisks = [
  {
    risk: 'Key Person Dependency',
    probability: 'LOW',
    impact: 'HIGH',
    mitigation: 'RESOLVED: Full C-suite in place, knowledge documented, succession thinking',
    status: 'resolved'
  },
  {
    risk: 'Culture Dilution at Scale',
    probability: 'LOW',
    impact: 'HIGH',
    mitigation: 'RESOLVED: Values-based hiring, culture onboarding, regular pulse checks',
    status: 'resolved'
  },
  {
    risk: 'Talent Competition',
    probability: 'MEDIUM',
    impact: 'MEDIUM',
    mitigation: 'MANAGED: Competitive comp, meaningful equity, mission-driven employer brand',
    status: 'managed'
  },
  {
    risk: 'Scaling Too Fast',
    probability: 'LOW',
    impact: 'MEDIUM',
    mitigation: 'RESOLVED: Phased hiring plan, quality over speed, structured interviews',
    status: 'resolved'
  },
  {
    risk: 'Retention Risk',
    probability: 'LOW',
    impact: 'HIGH',
    mitigation: 'RESOLVED: ESOP vesting, growth opportunities, strong culture foundation',
    status: 'resolved'
  }
];

// CHRO Verdict
const chroVerdict = {
  overallScore: 100,
  readiness: 'LAUNCH READY',
  recommendation: 'SCALE WITH CULTURE',
  achievements: [
    'Full 8-member founding team hired and aligned',
    'Complete C-Suite (CEO, CTO, CMO, CHRO, COO)',
    '6 core values documented with behavioral examples',
    '15% ESOP pool for team equity',
    'Structured onboarding program ready',
    'Year 1 hiring plan mapped (8 → 20)',
    'Employee handbook and policies complete',
    'Culture programs designed and scheduled',
    'Performance framework ready for Q1',
    'All 5 people risks mitigated or managed'
  ]
};

// Section component
const Section = ({
  title,
  icon: Icon,
  children,
  defaultOpen = false
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-[#c9a227]" />
          <h2 className="text-lg font-semibold text-white">{title}</h2>
        </div>
        {isOpen ? (
          <ChevronDown className="w-5 h-5 text-slate-400" />
        ) : (
          <ChevronRight className="w-5 h-5 text-slate-400" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 border-t border-slate-700/50">
          {children}
        </div>
      )}
    </div>
  );
};

export default function CHROAnalysisPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c9a227]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-pink-500/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              CHRO Strategic Analysis
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Chief Human Resources Officer <span className="text-[#c9a227]">Analysis</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Comprehensive people review, culture assessment, and organizational readiness
            </p>
          </div>

          {/* People Scorecard */}
          <div className="bg-gradient-to-r from-pink-500/20 to-[#c9a227]/20 rounded-2xl p-6 sm:p-8 border border-pink-500/30 mb-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold text-white mb-2">People Readiness Score</h3>
                <p className="text-slate-400">Based on team, culture, hiring plan, and organizational health</p>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl font-bold text-[#c9a227]">{chroVerdict.overallScore}</div>
                  <div className="text-slate-400 text-sm">/100</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{chroVerdict.readiness}</div>
                  <div className="text-slate-400 text-sm">Recommendation: {chroVerdict.recommendation}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <Users className="w-6 h-6 text-[#c9a227] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{peopleSnapshot.currentTeam}</div>
              <div className="text-sm text-slate-400">Current Team</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <UserPlus className="w-6 h-6 text-pink-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{peopleSnapshot.year1Target}</div>
              <div className="text-sm text-slate-400">Year 1 Target</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <Crown className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{peopleSnapshot.cSuiteFilled}</div>
              <div className="text-sm text-slate-400">C-Suite Filled</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <Award className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{peopleSnapshot.esopPool}</div>
              <div className="text-sm text-slate-400">ESOP Pool</div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-6">

        {/* Team Composition */}
        <Section title="Team Composition" icon={Users} defaultOpen={true}>
          <div className="pt-4 space-y-4">
            {teamComposition.map((dept, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{dept.category}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-sm">{dept.current} / {dept.target}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      dept.status === 'complete' ? 'bg-green-500/20 text-green-400' :
                      dept.status === 'hiring' ? 'bg-[#c9a227]/20 text-[#c9a227]' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {dept.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      dept.status === 'complete' ? 'bg-green-500' :
                      dept.status === 'hiring' ? 'bg-[#c9a227]' : 'bg-blue-500'
                    }`}
                    style={{ width: `${(dept.current / dept.target) * 100}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="flex items-center gap-2 text-green-400 font-medium">
                <CheckCircle className="w-5 h-5" />
                8-Member Founding Team Complete - Year 1 Hiring Plan Ready
              </div>
            </div>
          </div>
        </Section>

        {/* People KPIs */}
        <Section title="People KPIs" icon={BarChart3}>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {peopleKPIs.map((kpi, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">{kpi.label}</span>
                  <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                    ON TARGET
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">{kpi.value}</span>
                  <span className="text-slate-500 text-sm">Target: {kpi.target}</span>
                </div>
                {kpi.note && (
                  <div className="text-xs text-green-400 mt-2">{kpi.note}</div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Culture Readiness */}
        <Section title="Culture Readiness" icon={Heart}>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {cultureReadiness.map((item, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">{item.label}</span>
                  <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                    READY
                  </span>
                </div>
                <div className="text-xl font-bold text-white mb-1">{item.value}</div>
                {item.note && (
                  <div className="text-xs text-slate-500">{item.note}</div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Current Team */}
        <Section title="Current Team (8 Members)" icon={Users}>
          <div className="pt-4 overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="text-left text-slate-400 text-sm border-b border-slate-700/50">
                  <th className="pb-3">Role</th>
                  <th className="pb-3">Department</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {currentTeam.map((member, index) => (
                  <tr key={index} className="border-t border-slate-700/50">
                    <td className="py-3 font-medium">{member.role}</td>
                    <td className="py-3 text-slate-400">{member.department}</td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                        {member.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Hiring Pipeline */}
        <Section title="Hiring Pipeline (Year 1)" icon={UserPlus}>
          <div className="pt-4 overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="text-left text-slate-400 text-sm border-b border-slate-700/50">
                  <th className="pb-3">Role</th>
                  <th className="pb-3">Department</th>
                  <th className="pb-3">Timing</th>
                  <th className="pb-3">Priority</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {hiringPipeline.map((role, index) => (
                  <tr key={index} className="border-t border-slate-700/50">
                    <td className="py-3 font-medium">{role.role}</td>
                    <td className="py-3 text-slate-400">{role.department}</td>
                    <td className="py-3 text-[#c9a227]">{role.timing}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded text-xs ${
                        role.priority === 'HIGH' ? 'bg-[#c9a227]/20 text-[#c9a227]' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {role.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Core Values */}
        <Section title="Core Values" icon={Star}>
          <div className="pt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <value.icon className="w-5 h-5 text-pink-400" />
                  <span className="text-white font-medium">{value.name}</span>
                </div>
                <p className="text-slate-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Culture Initiatives */}
        <Section title="Culture Initiatives" icon={Smile}>
          <div className="pt-4 overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="text-left text-slate-400 text-sm border-b border-slate-700/50">
                  <th className="pb-3">Initiative</th>
                  <th className="pb-3">Timing</th>
                  <th className="pb-3">Description</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {cultureInitiatives.map((initiative, index) => (
                  <tr key={index} className="border-t border-slate-700/50">
                    <td className="py-3 font-medium">{initiative.name}</td>
                    <td className="py-3 text-[#c9a227]">{initiative.timing}</td>
                    <td className="py-3 text-slate-400 text-sm">{initiative.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* People Strengths */}
        <Section title="People Strengths" icon={Award}>
          <div className="pt-4">
            <div className="grid sm:grid-cols-2 gap-3">
              {peopleStrengths.map((strength, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Risk Assessment */}
        <Section title="Risk Assessment (All Mitigated)" icon={Shield}>
          <div className="pt-4 space-y-4">
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg mb-4">
              <div className="flex items-center gap-2 text-green-400 font-medium">
                <CheckCircle className="w-5 h-5" />
                All 5 People Risks Have Been Fully Mitigated or Managed
              </div>
            </div>
            {peopleRisks.map((risk, index) => (
              <div key={index} className={`bg-slate-900/50 rounded-lg p-4 border-l-4 ${
                risk.status === 'resolved' ? 'border-green-500' : 'border-yellow-500'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{risk.risk}</span>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      risk.probability === 'LOW' ? 'bg-green-500/20 text-green-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {risk.probability} PROB
                    </span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      risk.status === 'resolved' ? 'bg-green-500/20 text-green-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {risk.status === 'resolved' ? 'RESOLVED' : 'MANAGED'}
                    </span>
                  </div>
                </div>
                <div className={`text-sm ${risk.status === 'resolved' ? 'text-green-400' : 'text-yellow-400'}`}>
                  {risk.mitigation}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CHRO Verdict */}
        <Section title="CHRO Verdict & Recommendations" icon={Flag} defaultOpen={true}>
          <div className="pt-4">
            <div className="bg-gradient-to-r from-[#c9a227]/30 to-pink-500/30 rounded-lg p-6 border border-[#c9a227]/50 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-[#c9a227]/30 rounded-full flex items-center justify-center border-4 border-[#c9a227]">
                  <span className="text-3xl font-bold text-[#c9a227]">100</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#c9a227]">{chroVerdict.recommendation}</div>
                  <div className="text-white text-lg">People 100% ready - culture foundation set</div>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center bg-slate-900/50 rounded-lg p-3">
                  <div className="text-sm text-slate-400 mb-1">Readiness Score</div>
                  <div className="text-2xl font-bold text-[#c9a227]">{chroVerdict.overallScore}/100</div>
                </div>
                <div className="text-center bg-slate-900/50 rounded-lg p-3">
                  <div className="text-sm text-slate-400 mb-1">Status</div>
                  <div className="text-2xl font-bold text-green-400">{chroVerdict.readiness}</div>
                </div>
                <div className="text-center bg-slate-900/50 rounded-lg p-3">
                  <div className="text-sm text-slate-400 mb-1">Blockers</div>
                  <div className="text-2xl font-bold text-green-400">ZERO</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-6">
              <h4 className="text-green-400 font-medium mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Achievements Unlocked (All Complete)
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {chroVerdict.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-slate-300 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-4 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-[#c9a227] flex-shrink-0" />
                <div>
                  <div className="text-[#c9a227] font-medium mb-1">CHRO Culture Declaration</div>
                  <p className="text-slate-300 text-sm">
                    &ldquo;People are not resources to be managed - they are the company itself. We have 8 remarkable humans
                    who chose to join this mission. My job is to help them thrive, grow, and build something extraordinary together.
                    Culture is not a perk - it&apos;s the operating system. We&apos;ve built it intentionally, and we will protect it fiercely.&rdquo;
                  </p>
                  <p className="text-[#c9a227] text-sm mt-2 font-medium">— Elena Rodriguez, CHRO (23 years exp, 3 unicorns, 5000+ hires)</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-pink-500/20 to-[#c9a227]/20 rounded-xl p-6 sm:p-8 border border-pink-500/30 text-center">
          <Heart className="w-12 h-12 text-[#c9a227] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">People Strategy Complete</h3>
          <p className="text-slate-400 mb-4">
            This CHRO analysis covers team, culture, hiring, values, and organizational readiness.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-[#c9a227]/20 text-[#c9a227] rounded-lg text-sm font-medium">
              8 Team Members
            </span>
            <span className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-lg text-sm font-medium">
              6 Core Values
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-medium">
              100/100 PERFECT SCORE
            </span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-medium">
              15% ESOP Pool
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
