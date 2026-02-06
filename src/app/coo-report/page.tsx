'use client';

import React, { useState } from 'react';
import {
  Settings,
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
  Store,
  Package,
  Truck,
  Phone,
  Mail,
  MapPin,
  Zap,
  BarChart3,
  ClipboardCheck,
  Workflow,
  Gauge,
  Cog,
  Eye,
  MessageSquare,
  FileText,
  Database,
  RefreshCw
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

/**
 * COO AGENT REPORT
 *
 * AI Agent: Marcus Thompson (22 years experience)
 * Background: Former COO at Careem, scaled ops from 0 to 10,000+ driver-partners
 * Expertise: Operations, Merchant Success, Process Excellence, Scaling
 */

type SectionId = 'profile' | 'diagnosis' | 'problems' | 'solutions' | 'execution' | 'metrics';

const sections: { id: SectionId; label: string }[] = [
  { id: 'profile', label: 'Agent Profile' },
  { id: 'diagnosis', label: 'Operations Diagnosis' },
  { id: 'problems', label: 'Problems Identified' },
  { id: 'solutions', label: 'Operational Solutions' },
  { id: 'execution', label: 'Execution Playbook' },
  { id: 'metrics', label: 'Operations Metrics' },
];

export default function COOReportPage() {
  const [activeSection, setActiveSection] = useState<SectionId>('profile');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/30 border-b border-blue-500/30">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-xl">
              <Settings size={48} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-white">COO Operations Report</h1>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                  Agent Report
                </span>
              </div>
              <p className="text-blue-300 text-lg">AI Agent: Marcus Thompson • 22 Years Operations Experience</p>
              <p className="text-slate-400 mt-2">Former COO at Careem • Scaled 0 to 10,000+ partners • Expert in marketplace ops</p>
            </div>
            <div className="text-right">
              <p className="text-blue-400 font-bold text-xl">NUQTA</p>
              <p className="text-slate-500 text-sm">Analysis Date: Feb 2026</p>
              <div className="mt-2 flex items-center gap-2 justify-end">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm">Report Complete</span>
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
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
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
        {activeSection === 'diagnosis' && <OperationsDiagnosis />}
        {activeSection === 'problems' && <ProblemsIdentified />}
        {activeSection === 'solutions' && <OperationalSolutions />}
        {activeSection === 'execution' && <ExecutionPlaybook />}
        {activeSection === 'metrics' && <OperationsMetrics />}
      </div>

      <GlobalFooter />
    </div>
  );
}

function AgentProfile() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-2xl p-8 border border-blue-500/30">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Agent Profile: Marcus Thompson</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              I&apos;m an AI agent modeled on 22 years of operations leadership in high-growth marketplaces and consumer platforms.
              My experience includes scaling Careem&apos;s operations across MENA, building merchant networks from scratch,
              and creating operational excellence frameworks used by 50+ startups.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-blue-400 font-bold mb-2">Core Expertise</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Merchant/Partner Operations</li>
                  <li>• Process Design & Optimization</li>
                  <li>• Quality Assurance Systems</li>
                  <li>• Scaling Operations 0→1000+</li>
                  <li>• Supply-Demand Balancing</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-blue-400 font-bold mb-2">Track Record</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Careem: 0 to 10,000+ partners</li>
                  <li>• 5 marketplace startups scaled</li>
                  <li>• 99.5%+ operational uptime</li>
                  <li>• 50%+ cost reduction achieved</li>
                  <li>• Built teams of 200+</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-blue-500/20 rounded-xl border border-blue-500/30">
              <p className="text-blue-400 font-bold mb-2">Operations Philosophy</p>
              <ul className="text-slate-300 text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-blue-400" />
                  Process before people
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-blue-400" />
                  Measure everything
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-blue-400" />
                  Automate the repeatable
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-blue-400" />
                  Density beats breadth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Message */}
      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-500/30">
        <div className="flex items-start gap-4">
          <MessageSquare size={32} className="text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-2">My Assessment Summary</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              &ldquo;Product is 100% complete, team of 8 is hired, March 1 launch is set. You have 32 LOIs ready to convert.
              The next 23 days are critical for operations. Your #1 priority: Convert 10+ LOIs to live merchants before launch.
              Your BDA is actively working on this. Support infrastructure and merchant success processes must be ready by Day 1.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OperationsDiagnosis() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-2xl p-8 border border-blue-500/30">
        <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
          <Eye size={28} />
          Operations State Diagnosis
        </h2>
        <p className="text-slate-300 text-lg">
          A detailed assessment of your current operational capabilities, gaps, and readiness for scale.
        </p>
      </div>

      {/* Operations Scorecard */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Operations Readiness Scorecard</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { area: 'Product Complete', score: 100, status: '100% ready' },
              { area: 'Team Capacity', score: 100, status: '8 members hired' },
              { area: 'Merchant Onboarding Process', score: 80, status: 'Documented, BDA executing' },
              { area: 'LOI Conversion', score: 30, status: 'In progress (32 LOIs)' },
              { area: 'Payment Integration', score: 85, status: 'Integrated in product' },
              { area: 'Support Infrastructure', score: 50, status: 'CHRO setting up' },
              { area: 'Operational Playbooks', score: 90, status: 'Comprehensive' },
              { area: 'Launch Readiness', score: 85, status: 'March 1 on track' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-48 text-slate-300 text-sm">{item.area}</div>
                <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      item.score >= 70 ? 'bg-green-500' :
                      item.score >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                <div className="w-32 text-slate-500 text-xs">{item.status}</div>
              </div>
            ))}
          </div>
          <div className="p-6 bg-green-500/10 rounded-xl border border-green-500/30">
            <h4 className="text-green-400 font-bold mb-4">Overall Operations Grade</h4>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl font-bold text-green-400">A-</div>
              <div>
                <p className="text-white font-medium">Readiness: A</p>
                <p className="text-slate-400 text-sm">Execution: 23 Days to Launch</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              Full team (8), product complete, BDA converting merchants. Focus: 10+ live merchants + support infrastructure by March 1.
            </p>
          </div>
        </div>
      </div>

      {/* Merchant Funnel Analysis */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Store size={24} className="text-blue-400" />
          Merchant Funnel Analysis
        </h3>
        <div className="space-y-4">
          {[
            { stage: 'LOIs Signed', count: 32, pct: 100, issue: 'Ready to convert' },
            { stage: 'Contracts Sent', count: 10, pct: 33, issue: 'BDA actively sending' },
            { stage: 'Contracts Signed', count: 5, pct: 17, issue: 'In progress' },
            { stage: 'Integration Complete', count: 0, pct: 0, issue: 'Product ready, starting integration' },
            { stage: 'Training Done', count: 0, pct: 0, issue: 'Starting post-integration' },
            { stage: 'Live & Transacting', count: 0, pct: 0, issue: 'CRITICAL: Zero revenue' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
              <div className="w-40 text-slate-300 font-medium">{item.stage}</div>
              <div className="flex-1 h-8 bg-white/10 rounded-lg overflow-hidden relative">
                <div
                  className={`h-full ${item.count > 0 ? 'bg-blue-500' : 'bg-red-500/50'}`}
                  style={{ width: `${Math.max(item.pct, 5)}%` }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  {item.count}
                </span>
              </div>
              <div className={`w-64 text-sm ${item.count === 0 ? 'text-red-400' : 'text-slate-400'}`}>
                {item.issue}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-red-500/10 rounded-xl border border-red-500/30">
          <p className="text-red-400 font-bold">Conversion Rate: 0%</p>
          <p className="text-slate-300 text-sm mt-1">
            32 LOIs with 0 conversions = complete operational failure. Target: 33% conversion (10 live merchants)
          </p>
        </div>
      </div>

      {/* Infrastructure Gaps */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: 'Payment System',
            status: 'Missing',
            icon: Truck,
            gaps: ['No payment gateway', 'No POS integration', 'No reconciliation system', 'No fraud detection'],
            impact: 'Cannot process transactions = no revenue'
          },
          {
            title: 'Support System',
            status: 'Missing',
            icon: Phone,
            gaps: ['No ticketing system', 'No knowledge base', 'No SLA tracking', 'No escalation process'],
            impact: 'First issue will expose you publicly'
          },
          {
            title: 'Merchant Portal',
            status: 'Missing',
            icon: Database,
            gaps: ['No self-service portal', 'No reporting dashboard', 'No payout tracking', 'No offer management'],
            impact: 'Every task becomes manual = unscalable'
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-red-500/10 rounded-2xl p-6 border border-red-500/30">
            <div className="flex items-center gap-3 mb-4">
              <item.icon size={24} className="text-red-400" />
              <h4 className="text-white font-bold">{item.title}</h4>
              <span className="ml-auto px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">{item.status}</span>
            </div>
            <ul className="space-y-2 mb-4">
              {item.gaps.map((gap, gIdx) => (
                <li key={gIdx} className="text-slate-300 text-sm flex items-center gap-2">
                  <XCircle size={14} className="text-red-400" />
                  {gap}
                </li>
              ))}
            </ul>
            <p className="text-red-400 text-sm font-medium">{item.impact}</p>
          </div>
        ))}
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
          Operations Problems (COO Domain)
        </h2>
      </div>

      <div className="space-y-6">
        {[
          {
            title: 'HIGH: Convert LOIs to Live Merchants',
            severity: 'HIGH',
            rootCause: 'Product now complete, BDA actively converting, need 10+ by March 1',
            symptoms: [
              '32 LOIs ready to convert',
              'BDA actively sending contracts',
              'Need merchant training & integration',
              'Must hit 10+ live by launch'
            ],
            impact: 'Launch without merchants = poor user experience. Critical for Day 1 success.',
            solution: 'BDA executing 7-day activation sprint. Target: 10+ live by Feb 28.',
            ownership: 100
          },
          {
            title: 'HIGH: Support Infrastructure Needed',
            severity: 'HIGH',
            rootCause: 'CHRO setting up, needs to be ready before March 1 launch',
            symptoms: [
              'Ticketing system needed',
              'FAQ/knowledge base in progress',
              'WhatsApp Business to set up',
              'SLA targets to define'
            ],
            impact: 'First user/merchant issues on launch day need immediate response.',
            solution: 'CHRO completing setup by Feb 25. Freshdesk + WhatsApp Business + FAQ.',
            ownership: 80
          },
          {
            title: 'MEDIUM: Merchant Training Program',
            severity: 'MEDIUM',
            rootCause: 'Staff at merchant locations need to know how Nuqta works',
            symptoms: [
              'Training materials needed',
              'QR code placement guides',
              'Quick reference cards',
              'Staff onboarding checklist'
            ],
            impact: 'Untrained staff = failed transactions = bad user experience.',
            solution: 'Create training kit. 30-min per merchant. Complete before go-live.',
            ownership: 90
          },
          {
            title: 'MEDIUM: Geographic Density Strategy',
            severity: 'MEDIUM',
            rootCause: 'Need concentration in 3 key areas for user value',
            symptoms: [
              'LOIs spread across Dubai',
              'Need density for user value',
              'Focus: Marina, JBR, Downtown',
              'Prioritize high-traffic locations'
            ],
            impact: 'Users need 5+ nearby merchants to see value.',
            solution: 'Prioritize Marina (5), JBR (3), Downtown (2) for first 10 merchants.',
            ownership: 90
          },
          {
            title: 'MEDIUM: Day 1 Operations Readiness',
            severity: 'MEDIUM',
            rootCause: 'Launch day operations checklist needs to be ready',
            symptoms: [
              'On-call support schedule',
              'Escalation procedures',
              'Real-time monitoring',
              'Emergency contacts'
            ],
            impact: 'Launch day issues need immediate response capability.',
            solution: 'Operations runbook complete by Feb 28. Full team on-call March 1.',
            ownership: 100
          },
        ].map((problem, idx) => (
          <div key={idx} className={`rounded-2xl p-6 border ${
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
                }`}>{problem.severity}</span>
                <h3 className="text-white font-bold text-lg">{problem.title}</h3>
              </div>
              <span className="text-blue-400 text-sm">COO Ownership: {problem.ownership}%</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-blue-400 font-medium mb-2">Root Cause</h4>
                <p className="text-slate-300 text-sm mb-4">{problem.rootCause}</p>
                <h4 className="text-blue-400 font-medium mb-2">Symptoms</h4>
                <ul className="space-y-1">
                  {problem.symptoms.map((s, sIdx) => (
                    <li key={sIdx} className="text-slate-300 text-sm flex items-start gap-2">
                      <XCircle size={14} className="text-red-400 mt-0.5" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-red-400 font-medium mb-2">Business Impact</h4>
                <p className="text-slate-300 text-sm mb-4">{problem.impact}</p>
                <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
                  <h4 className="text-green-400 font-medium mb-2">Recommended Solution</h4>
                  <p className="text-slate-300 text-sm">{problem.solution}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OperationalSolutions() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-2xl p-8 border border-green-500/30">
        <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-3">
          <Lightbulb size={28} />
          Operational Solutions & Playbooks
        </h2>
      </div>

      {/* Solution 1: 7-Day Merchant Activation */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-green-400 mb-6">Solution 1: 7-Day Merchant Activation Sprint</h3>
        <p className="text-slate-300 mb-6">Convert 10 LOIs to live, transacting merchants in 7 days using this exact playbook.</p>

        <div className="space-y-4">
          {[
            {
              day: 'Day 1',
              title: 'Prioritize & Contact',
              tasks: [
                'Rank all 32 LOIs by: ease of integration, foot traffic, brand value',
                'Select top 15 (target 10, assume 30% dropout)',
                'Call each personally - TODAY. Not email, call.',
                'Schedule in-person visits for Day 2-3'
              ],
              output: '15 merchants confirmed for activation'
            },
            {
              day: 'Day 2-3',
              title: 'Contract & Setup',
              tasks: [
                'Visit each merchant in person with simplified 2-page contract',
                'Get signature on the spot (bring iPad with DocuSign)',
                'Take photos of their location for app listing',
                'Collect menu/pricing for offer setup'
              ],
              output: '12+ contracts signed'
            },
            {
              day: 'Day 4',
              title: 'Technical Integration',
              tasks: [
                'Create merchant profiles in system (even if manual)',
                'Generate QR codes for each merchant',
                'Set up their offers (5-10% cashback)',
                'Print and deliver QR table tents'
              ],
              output: 'All merchants have QR codes'
            },
            {
              day: 'Day 5',
              title: 'Training',
              tasks: [
                'Visit each merchant for 30-min training',
                'Train staff on how app works for customers',
                'Do test transaction at each location',
                'Leave quick-reference guide'
              ],
              output: 'All staff trained'
            },
            {
              day: 'Day 6',
              title: 'Go-Live',
              tasks: [
                'Officially activate all merchants',
                'Monitor for any issues',
                'Be on-call for support',
                'Post on social media: "Now live at..."'
              ],
              output: '10+ merchants live'
            },
            {
              day: 'Day 7',
              title: 'First Transactions',
              tasks: [
                'Drive first users to merchants (friends, family, team)',
                'Complete at least 1 transaction per merchant',
                'Collect feedback from merchants',
                'Document any issues'
              ],
              output: '10+ first transactions'
            },
          ].map((day, idx) => (
            <div key={idx} className="flex gap-4 p-4 bg-white/5 rounded-xl">
              <div className="w-20 flex-shrink-0">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-bold">{day.day}</span>
              </div>
              <div className="flex-1">
                <h4 className="text-white font-bold mb-2">{day.title}</h4>
                <ul className="space-y-1">
                  {day.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="text-slate-300 text-sm flex items-start gap-2">
                      <CheckCircle size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-green-400 text-sm font-medium">{day.output}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solution 2: Geographic Focus */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-green-400 mb-6">Solution 2: Geographic Density Strategy</h3>
        <p className="text-slate-300 mb-6">Focus on 3 areas. Own them completely before expanding.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              area: 'Dubai Marina',
              priority: 1,
              merchants: 5,
              reason: 'High foot traffic, expat-heavy, dining/cafe dense',
              streets: ['Marina Walk', 'JBR Beach Road', 'The Walk'],
              targetTypes: ['Cafes', 'Restaurants', 'Salons']
            },
            {
              area: 'JBR',
              priority: 2,
              merchants: 3,
              reason: 'Tourist + resident mix, premium positioning',
              streets: ['The Beach', 'Bahar', 'Murjan'],
              targetTypes: ['Restaurants', 'Ice Cream', 'Beach Clubs']
            },
            {
              area: 'Downtown',
              priority: 3,
              merchants: 2,
              reason: 'Business crowd, high-value transactions',
              streets: ['Dubai Mall', 'DIFC', 'Business Bay'],
              targetTypes: ['Fine Dining', 'Coffee Shops']
            },
          ].map((area, idx) => (
            <div key={idx} className="p-6 bg-blue-500/10 rounded-xl border border-blue-500/30">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-blue-400 font-bold text-lg">{area.area}</h4>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">P{area.priority}</span>
              </div>
              <p className="text-3xl font-bold text-white mb-2">{area.merchants} merchants</p>
              <p className="text-slate-400 text-sm mb-4">{area.reason}</p>
              <div className="space-y-2">
                <p className="text-slate-300 text-sm font-medium">Target Streets:</p>
                <div className="flex flex-wrap gap-1">
                  {area.streets.map((s, sIdx) => (
                    <span key={sIdx} className="px-2 py-0.5 bg-white/10 text-slate-300 rounded text-xs">{s}</span>
                  ))}
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-slate-300 text-sm font-medium">Types:</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {area.targetTypes.map((t, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-slate-400 text-sm mt-4 italic">
          &ldquo;Don&apos;t boil the ocean. A user in Marina should see 5+ merchants within walking distance. That&apos;s density. That&apos;s value.&rdquo;
        </p>
      </div>

      {/* Solution 3: Support Setup */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-green-400 mb-6">Solution 3: 48-Hour Support Infrastructure</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-blue-400 font-bold mb-4">Minimum Viable Support (Setup in 48 hours)</h4>
            <ul className="space-y-3">
              {[
                { tool: 'Freshdesk Free', purpose: 'Ticketing system', time: '2 hours' },
                { tool: 'WhatsApp Business', purpose: 'Merchant support line', time: '30 min' },
                { tool: 'Google Docs', purpose: 'FAQ knowledge base', time: '4 hours' },
                { tool: 'Notion', purpose: 'Internal runbooks', time: '2 hours' },
                { tool: 'Calendly', purpose: 'Merchant call booking', time: '30 min' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                  <CheckCircle size={16} className="text-green-400" />
                  <div className="flex-1">
                    <span className="text-white font-medium">{item.tool}</span>
                    <span className="text-slate-400 text-sm ml-2">- {item.purpose}</span>
                  </div>
                  <span className="text-blue-400 text-sm">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-blue-400 font-bold mb-4">SLA Targets</h4>
            <div className="space-y-3">
              {[
                { type: 'Merchant Issues', response: '< 1 hour', resolution: '< 4 hours' },
                { type: 'User Issues', response: '< 2 hours', resolution: '< 24 hours' },
                { type: 'Payment Issues', response: '< 30 min', resolution: '< 2 hours' },
                { type: 'Technical Bugs', response: '< 1 hour', resolution: '< 8 hours' },
              ].map((sla, idx) => (
                <div key={idx} className="p-3 bg-white/5 rounded-lg flex items-center justify-between">
                  <span className="text-slate-300">{sla.type}</span>
                  <div className="text-right">
                    <span className="text-green-400 text-sm">Response: {sla.response}</span>
                    <span className="text-slate-500 mx-2">|</span>
                    <span className="text-blue-400 text-sm">Resolve: {sla.resolution}</span>
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

function ExecutionPlaybook() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-2xl p-8 border border-blue-500/30">
        <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
          <Workflow size={28} />
          30-Day COO Execution Playbook
        </h2>
      </div>

      {/* Weekly Breakdown */}
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            week: 'Week 1',
            theme: 'Merchant Activation Blitz',
            focus: '10 Merchants Live',
            tasks: [
              { task: 'Call all 32 LOI merchants', status: 'critical' },
              { task: 'Sign 12+ contracts', status: 'critical' },
              { task: 'Set up QR codes & listings', status: 'critical' },
              { task: 'Train merchant staff', status: 'critical' },
              { task: 'Complete first transactions', status: 'critical' },
              { task: 'Set up Freshdesk + WhatsApp', status: 'high' },
            ],
            kpi: '10 merchants live & transacting'
          },
          {
            week: 'Week 2',
            theme: 'Operations Foundation',
            focus: 'Systems & Process',
            tasks: [
              { task: 'Document all processes used in Week 1', status: 'high' },
              { task: 'Create merchant FAQ', status: 'high' },
              { task: 'Set up payment reconciliation', status: 'critical' },
              { task: 'Hire 1 merchant success manager', status: 'high' },
              { task: 'Create daily operations dashboard', status: 'medium' },
              { task: 'Onboard 10 more merchants', status: 'high' },
            ],
            kpi: '20 merchants live + support ready'
          },
          {
            week: 'Week 3',
            theme: 'Scale & Optimize',
            focus: 'Process Improvement',
            tasks: [
              { task: 'Reduce onboarding time to 48 hours', status: 'high' },
              { task: 'Automate merchant communications', status: 'medium' },
              { task: 'Hire 1 customer support agent', status: 'high' },
              { task: 'Create merchant health dashboard', status: 'medium' },
              { task: 'Onboard 15 more merchants', status: 'high' },
              { task: 'First merchant NPS survey', status: 'medium' },
            ],
            kpi: '35 merchants + NPS > 40'
          },
          {
            week: 'Week 4',
            theme: 'Operational Excellence',
            focus: 'Quality & Scale',
            tasks: [
              { task: 'Achieve < 1 hour merchant response time', status: 'high' },
              { task: 'Process 500+ transactions', status: 'critical' },
              { task: 'Zero payment errors', status: 'critical' },
              { task: 'Onboard 15 more merchants', status: 'high' },
              { task: 'Create ops playbook v1', status: 'medium' },
              { task: 'Plan Month 2 expansion', status: 'medium' },
            ],
            kpi: '50 merchants + 99% uptime'
          },
        ].map((week, idx) => (
          <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-blue-400 font-bold text-lg">{week.week}: {week.theme}</h3>
                <p className="text-slate-400 text-sm">Focus: {week.focus}</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              {week.tasks.map((task, tIdx) => (
                <div key={tIdx} className={`flex items-center gap-3 p-2 rounded-lg ${
                  task.status === 'critical' ? 'bg-red-500/10' :
                  task.status === 'high' ? 'bg-yellow-500/10' : 'bg-white/5'
                }`}>
                  <CheckCircle size={14} className={
                    task.status === 'critical' ? 'text-red-400' :
                    task.status === 'high' ? 'text-yellow-400' : 'text-slate-400'
                  } />
                  <span className="text-slate-300 text-sm">{task.task}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-slate-400 text-xs">Success KPI:</p>
              <p className="text-green-400 font-bold">{week.kpi}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Rhythm */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Clock size={24} className="text-blue-400" />
          COO Daily Operating Rhythm
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            {[
              { time: '7:00 AM', task: 'Review overnight metrics & issues', type: 'critical' },
              { time: '8:00 AM', task: 'Ops team standup (15 min)', type: 'meeting' },
              { time: '8:30 AM', task: 'Merchant support queue review', type: 'critical' },
              { time: '9:00 AM', task: 'Merchant calls/visits', type: 'work' },
              { time: '12:00 PM', task: 'Lunch + merchant outreach', type: 'work' },
              { time: '1:00 PM', task: 'Process improvement work', type: 'work' },
              { time: '3:00 PM', task: 'Cross-functional sync (CEO, CMO)', type: 'meeting' },
              { time: '4:00 PM', task: 'More merchant visits', type: 'work' },
              { time: '6:00 PM', task: 'Day wrap-up, update dashboard', type: 'critical' },
            ].map((slot, idx) => (
              <div key={idx} className={`flex items-center gap-3 p-2 rounded-lg ${
                slot.type === 'critical' ? 'bg-blue-500/10 border border-blue-500/30' :
                slot.type === 'meeting' ? 'bg-purple-500/10' : 'bg-white/5'
              }`}>
                <span className="text-slate-400 text-sm w-20">{slot.time}</span>
                <span className="text-slate-300 text-sm">{slot.task}</span>
              </div>
            ))}
          </div>
          <div className="p-6 bg-blue-500/10 rounded-xl border border-blue-500/30">
            <h4 className="text-blue-400 font-bold mb-4">COO Weekly Cadence</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold">Mon:</span>
                <span className="text-slate-300 text-sm">Week planning + merchant pipeline review</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold">Tue-Thu:</span>
                <span className="text-slate-300 text-sm">Field operations + merchant activation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold">Fri:</span>
                <span className="text-slate-300 text-sm">Week review + process documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold">Sat:</span>
                <span className="text-slate-300 text-sm">Light monitoring + planning next week</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function OperationsMetrics() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-2xl p-8 border border-blue-500/30">
        <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
          <BarChart3 size={28} />
          Operations KPIs & Dashboards
        </h2>
      </div>

      {/* KPI Dashboard */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { metric: 'Live Merchants', current: 0, target: 50, deadline: '30 days' },
          { metric: 'LOI Conversion', current: '0%', target: '33%', deadline: '14 days' },
          { metric: 'Onboard Time', current: 'N/A', target: '< 48hrs', deadline: '21 days' },
          { metric: 'Merchant NPS', current: 'N/A', target: '> 50', deadline: '30 days' },
          { metric: 'Support Response', current: 'N/A', target: '< 1hr', deadline: '14 days' },
          { metric: 'Transaction Success', current: 'N/A', target: '> 99%', deadline: '14 days' },
          { metric: 'Merchant Churn', current: 'N/A', target: '< 5%', deadline: '60 days' },
          { metric: 'Ops Team Size', current: 1, target: 5, deadline: '30 days' },
        ].map((kpi, idx) => (
          <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-slate-400 text-sm">{kpi.metric}</p>
            <div className="flex items-end gap-2 mt-1">
              <span className="text-2xl font-bold text-red-400">{kpi.current}</span>
              <ArrowRight size={16} className="text-slate-500 mb-1" />
              <span className="text-green-400 font-bold">{kpi.target}</span>
            </div>
            <p className="text-slate-500 text-xs mt-2">By: {kpi.deadline}</p>
          </div>
        ))}
      </div>

      {/* Final Message */}
      <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/10 rounded-2xl p-8 border border-blue-500/30">
        <div className="flex items-start gap-4">
          <Settings size={32} className="text-blue-400 flex-shrink-0" />
          <div>
            <h3 className="text-blue-400 font-bold text-xl mb-3">Final Message from Agent Marcus Thompson</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              &ldquo;You&apos;ve made exceptional progress. Product complete, team hired, launch date set.
              Now it&apos;s about operational execution. The next 23 days will define your launch success.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Three things matter: 1) 10+ live merchants by Feb 28, 2) Support infrastructure ready by Feb 25,
              3) Operations team on full alert for March 1. Your BDA is already converting LOIs. Keep the pressure on.
            </p>
            <p className="text-white font-bold text-lg">
              March 1 is the moment of truth. Execute flawlessly. Every merchant live is a win.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
