'use client';

import React, { useState } from 'react';
import GlobalFooter from '@/components/GlobalFooter';
import {
  Crown,
  Code,
  Users,
  Megaphone,
  Calculator,
  Settings,
  Calendar,
  Clock,
  Target,
  CheckCircle,
  AlertTriangle,
  MessageSquare,
  FileText,
  TrendingUp,
  DollarSign,
  Briefcase,
  Phone,
  Mail,
  Video,
  BarChart3,
  Zap,
  Flag,
  ArrowRight,
  ChevronRight,
  Star,
  Shield,
  Rocket,
  Building2,
  Heart,
  Award
} from 'lucide-react';

/**
 * C-SUITE OPERATIONS CENTER
 *
 * Complete operating manuals for all C-Suite executives
 * Individual analyses, meeting structure, and task assignments
 */

export default function CSuiteOperationsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeCXO, setActiveCXO] = useState('ceo');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'ceo', label: 'CEO Manual', icon: Crown },
    { id: 'cto', label: 'CTO Manual', icon: Code },
    { id: 'chro', label: 'CHRO Manual', icon: Users },
    { id: 'cmo', label: 'CMO Manual', icon: Megaphone },
    { id: 'meeting', label: 'C-Suite Meeting', icon: Video },
    { id: 'mom', label: 'Meeting MoM', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-[#c9a227]/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
              <Settings size={32} className="text-[#0a1628]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">C-Suite Operations Center</h1>
              <p className="text-slate-400">Operating Manuals • Meeting Structure • Task Management</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="px-3 py-1 bg-[#c9a227]/20 text-[#c9a227] rounded-full">Launch: March 1, 2026</span>
            <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full">23 Days Remaining</span>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">Team: 8 Members</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-white/10 sticky top-0 bg-[#0a1628]/95 backdrop-blur-xl z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
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
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        {/* Overview Tab */}
        {activeTab === 'overview' && <OverviewSection />}

        {/* CEO Manual */}
        {activeTab === 'ceo' && <CEOManual />}

        {/* CTO Manual */}
        {activeTab === 'cto' && <CTOManual />}

        {/* CHRO Manual */}
        {activeTab === 'chro' && <CHROManual />}

        {/* CMO Manual */}
        {activeTab === 'cmo' && <CMOManual />}

        {/* C-Suite Meeting */}
        {activeTab === 'meeting' && <CSuiteMeeting />}

        {/* Meeting MoM */}
        {activeTab === 'mom' && <MeetingMoM />}

      </div>

      <GlobalFooter />
    </div>
  );
}

// ============================================
// OVERVIEW SECTION
// ============================================
function OverviewSection() {
  return (
    <div className="space-y-8">
      {/* Organization Structure */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Building2 className="text-[#c9a227]" />
          Nuqta Leadership Structure
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { role: 'CEO', name: 'Founder', icon: Crown, color: 'purple', responsibilities: ['Vision & Strategy', 'Fundraising', 'Key Partnerships', 'CFO & COO Functions'] },
            { role: 'CTO', name: 'Tech Lead', icon: Code, color: 'blue', responsibilities: ['Product Development', 'Tech Architecture', 'Dev Team (2)', 'System Reliability'] },
            { role: 'CHRO', name: 'People Lead', icon: Users, color: 'teal', responsibilities: ['Team Culture', 'HR Operations', 'Support Setup', 'Training Programs'] },
            { role: 'CMO', name: 'Marketing Lead', icon: Megaphone, color: 'pink', responsibilities: ['Brand & Marketing', 'User Acquisition', 'Content Strategy', 'PR & Communications'] },
          ].map((exec) => (
            <div key={exec.role} className={`p-6 rounded-xl border bg-${exec.color}-500/10 border-${exec.color}-500/30`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-${exec.color}-500/20 flex items-center justify-center`}>
                  <exec.icon className={`text-${exec.color}-400`} size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold">{exec.role}</h3>
                  <p className="text-slate-400 text-sm">{exec.name}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exec.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                    <ChevronRight size={12} className={`text-${exec.color}-400`} />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Supporting Team */}
        <div className="mt-6 p-4 bg-white/5 rounded-xl">
          <h4 className="text-[#c9a227] font-bold mb-3">Supporting Team (4 Members)</h4>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { role: 'Senior Developer', reports: 'CTO', focus: 'Backend & APIs' },
              { role: 'Junior Developer', reports: 'CTO', focus: 'Frontend & Mobile' },
              { role: 'BDA', reports: 'CEO', focus: 'Merchant Acquisition' },
              { role: 'Graphic Designer', reports: 'CMO', focus: 'Brand & Content' },
            ].map((member, idx) => (
              <div key={idx} className="p-3 bg-white/5 rounded-lg">
                <p className="text-white font-medium">{member.role}</p>
                <p className="text-slate-500 text-xs">Reports to: {member.reports}</p>
                <p className="text-slate-400 text-sm mt-1">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Operating Rhythm */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Clock className="text-[#c9a227]" />
          Weekly Operating Rhythm
        </h2>

        <div className="grid md:grid-cols-7 gap-2">
          {[
            { day: 'Sunday', meetings: ['Team Standup (10am)', 'C-Suite Sync (6pm)'], color: 'purple' },
            { day: 'Monday', meetings: ['Sprint Planning', 'Marketing Review'], color: 'blue' },
            { day: 'Tuesday', meetings: ['Investor Calls', 'Tech Sync'], color: 'green' },
            { day: 'Wednesday', meetings: ['Merchant Activation', 'Content Review'], color: 'yellow' },
            { day: 'Thursday', meetings: ['1:1s', 'Partnership Calls'], color: 'orange' },
            { day: 'Friday', meetings: ['Week Review', 'All Hands (Optional)'], color: 'red' },
            { day: 'Saturday', meetings: ['Strategic Planning', 'Personal Time'], color: 'slate' },
          ].map((d) => (
            <div key={d.day} className={`p-4 rounded-xl bg-${d.color}-500/10 border border-${d.color}-500/20`}>
              <p className={`text-${d.color}-400 font-bold text-sm mb-2`}>{d.day}</p>
              <ul className="space-y-1">
                {d.meetings.map((m, idx) => (
                  <li key={idx} className="text-xs text-slate-300">{m}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Communication Channels */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <MessageSquare className="text-[#c9a227]" />
          Communication Channels
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
            <h4 className="text-green-400 font-bold mb-3">WhatsApp Groups</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• <strong>Nuqta C-Suite</strong> - Leadership only</li>
              <li>• <strong>Nuqta Team</strong> - All 8 members</li>
              <li>• <strong>Nuqta Dev</strong> - CTO + Developers</li>
              <li>• <strong>Nuqta Marketing</strong> - CMO + Designer</li>
              <li>• <strong>Nuqta Merchants</strong> - BDA + Partners</li>
            </ul>
          </div>

          <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
            <h4 className="text-blue-400 font-bold mb-3">Tools & Platforms</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• <strong>Slack</strong> - Daily async communication</li>
              <li>• <strong>Notion</strong> - Documentation & wikis</li>
              <li>• <strong>Linear/Jira</strong> - Task management</li>
              <li>• <strong>Google Meet</strong> - Video calls</li>
              <li>• <strong>GitHub</strong> - Code repository</li>
            </ul>
          </div>

          <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
            <h4 className="text-purple-400 font-bold mb-3">Reporting Cadence</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• <strong>Daily</strong> - Standup updates (async)</li>
              <li>• <strong>Weekly</strong> - C-Suite meeting + KPI review</li>
              <li>• <strong>Bi-weekly</strong> - Sprint retrospective</li>
              <li>• <strong>Monthly</strong> - Investor update</li>
              <li>• <strong>Quarterly</strong> - Board meeting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Current Priorities */}
      <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-8 border border-red-500/30">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Zap className="text-red-400" />
          Launch Sprint Priorities (23 Days)
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { owner: 'CEO', priority: 'Close First Investor', deadline: 'Feb 20', status: 'In Progress' },
            { owner: 'CEO/BDA', priority: '10+ Live Merchants', deadline: 'Feb 28', status: 'Critical' },
            { owner: 'CTO', priority: 'Beta Testing (50 users)', deadline: 'Feb 20', status: 'Starting' },
            { owner: 'CHRO', priority: 'Support Infrastructure', deadline: 'Feb 25', status: 'In Progress' },
            { owner: 'CMO', priority: 'Founders Circle (100)', deadline: 'Mar 1', status: 'Building' },
            { owner: 'CMO', priority: 'Influencer Partnerships', deadline: 'Feb 20', status: 'In Progress' },
            { owner: 'CTO', priority: 'Payment Gateway Final', deadline: 'Feb 15', status: 'Testing' },
            { owner: 'ALL', priority: 'Launch Day Ready', deadline: 'Mar 1', status: 'On Track' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#c9a227] text-xs font-bold">{item.owner}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.status === 'Critical' ? 'bg-red-500/20 text-red-400' :
                  item.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                  item.status === 'Starting' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  {item.status}
                </span>
              </div>
              <p className="text-white font-medium text-sm">{item.priority}</p>
              <p className="text-slate-500 text-xs mt-1">Due: {item.deadline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// CEO MANUAL
// ============================================
function CEOManual() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-2xl p-8 border border-purple-500/30">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center">
            <Crown size={32} className="text-purple-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">CEO Operating Manual</h2>
            <p className="text-slate-400">Chief Executive Officer + CFO + COO Functions</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Primary Focus</p>
            <p className="text-white font-bold">Vision, Funding, Partnerships</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Direct Reports</p>
            <p className="text-white font-bold">CTO, CHRO, CMO, BDA</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Time Allocation</p>
            <p className="text-white font-bold">40% Funding, 40% Execution</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Key Metric</p>
            <p className="text-white font-bold">AED 2-3M Raised</p>
          </div>
        </div>
      </div>

      {/* Daily Schedule */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Clock className="text-purple-400" />
          CEO Daily Schedule Template
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="text-purple-400 font-bold">Morning Block (8am - 12pm)</h4>
            {[
              { time: '8:00 - 8:30', activity: 'Review overnight messages, prioritize day', type: 'prep' },
              { time: '8:30 - 9:00', activity: 'Check KPI dashboard, team updates', type: 'review' },
              { time: '9:00 - 10:00', activity: 'Deep work: Investor deck/emails', type: 'focus' },
              { time: '10:00 - 10:30', activity: 'Team standup (async or quick call)', type: 'meeting' },
              { time: '10:30 - 12:00', activity: 'Investor calls / Partnership meetings', type: 'external' },
            ].map((item, idx) => (
              <div key={idx} className={`flex items-center gap-4 p-3 rounded-lg ${
                item.type === 'focus' ? 'bg-purple-500/10' :
                item.type === 'meeting' ? 'bg-blue-500/10' :
                item.type === 'external' ? 'bg-green-500/10' : 'bg-white/5'
              }`}>
                <span className="text-slate-500 text-sm w-28">{item.time}</span>
                <span className="text-white text-sm">{item.activity}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h4 className="text-purple-400 font-bold">Afternoon Block (1pm - 6pm)</h4>
            {[
              { time: '1:00 - 2:00', activity: 'Lunch + Industry reading/learning', type: 'break' },
              { time: '2:00 - 3:30', activity: 'Internal meetings: 1:1s with C-Suite', type: 'meeting' },
              { time: '3:30 - 5:00', activity: 'Strategic work: Partnerships, decisions', type: 'focus' },
              { time: '5:00 - 5:30', activity: 'BDA sync: Merchant activation progress', type: 'meeting' },
              { time: '5:30 - 6:00', activity: 'End of day review, next day prep', type: 'review' },
            ].map((item, idx) => (
              <div key={idx} className={`flex items-center gap-4 p-3 rounded-lg ${
                item.type === 'focus' ? 'bg-purple-500/10' :
                item.type === 'meeting' ? 'bg-blue-500/10' :
                item.type === 'break' ? 'bg-slate-500/10' : 'bg-white/5'
              }`}>
                <span className="text-slate-500 text-sm w-28">{item.time}</span>
                <span className="text-white text-sm">{item.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly Responsibilities */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Calendar className="text-purple-400" />
          CEO Weekly Responsibilities
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
            <h4 className="text-purple-400 font-bold mb-3">Fundraising (40%)</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-purple-400 mt-1" />
                5+ investor meetings per week
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-purple-400 mt-1" />
                Update investor deck weekly
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-purple-400 mt-1" />
                Follow up on warm leads (24h)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-purple-400 mt-1" />
                Data room updates
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-purple-400 mt-1" />
                Term sheet negotiations
              </li>
            </ul>
          </div>

          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
            <h4 className="text-green-400 font-bold mb-3">Execution (40%)</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-1" />
                Daily BDA check-in on merchants
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-1" />
                Weekly C-Suite alignment meeting
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-1" />
                Review KPIs every morning
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-1" />
                Unblock team issues same-day
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-1" />
                Strategic partnership calls
              </li>
            </ul>
          </div>

          <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
            <h4 className="text-blue-400 font-bold mb-3">Leadership (20%)</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-blue-400 mt-1" />
                1:1 with each C-Suite weekly
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-blue-400 mt-1" />
                Team morale check
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-blue-400 mt-1" />
                Vision reinforcement
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-blue-400 mt-1" />
                Decision making (escalations)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-blue-400 mt-1" />
                External communications (PR)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CFO & COO Functions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-emerald-500/10 rounded-2xl p-6 border border-emerald-500/30">
          <h3 className="text-emerald-400 font-bold text-lg mb-4 flex items-center gap-2">
            <Calculator size={20} />
            CFO Functions (CEO Handles)
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              'Weekly cash flow monitoring',
              'Expense approvals (>AED 1,000)',
              'Financial model updates monthly',
              'Investor financial reporting',
              'Budget allocation decisions',
              'Burn rate tracking',
              'Revenue forecasting',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-slate-300">
                <DollarSign size={14} className="text-emerald-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-orange-500/10 rounded-2xl p-6 border border-orange-500/30">
          <h3 className="text-orange-400 font-bold text-lg mb-4 flex items-center gap-2">
            <Settings size={20} />
            COO Functions (CEO Handles)
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              'Operations oversight',
              'Process improvement decisions',
              'Vendor management (key contracts)',
              'Launch day operations planning',
              'Cross-functional coordination',
              'Resource allocation',
              'Escalation point for operations',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-slate-300">
                <Settings size={14} className="text-orange-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CEO KPIs */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <BarChart3 className="text-purple-400" />
          CEO Key Performance Indicators
        </h3>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { metric: 'Capital Raised', current: 'AED 0', target: 'AED 2.5M', deadline: 'Mar 15', status: 'yellow' },
            { metric: 'Investor Meetings/Week', current: '0', target: '5+', deadline: 'Weekly', status: 'yellow' },
            { metric: 'Live Merchants', current: '0', target: '10+', deadline: 'Mar 1', status: 'red' },
            { metric: 'Team Alignment Score', current: '85%', target: '90%+', deadline: 'Ongoing', status: 'green' },
            { metric: 'Strategic Partnerships', current: '0', target: '2', deadline: 'Mar 30', status: 'yellow' },
            { metric: 'C-Suite 1:1s/Week', current: '3', target: '3', deadline: 'Weekly', status: 'green' },
            { metric: 'Decision Turnaround', current: '24h', target: '<24h', deadline: 'Always', status: 'green' },
            { metric: 'Launch Readiness', current: '83%', target: '100%', deadline: 'Mar 1', status: 'green' },
          ].map((kpi, idx) => (
            <div key={idx} className={`p-4 rounded-xl border ${
              kpi.status === 'red' ? 'bg-red-500/10 border-red-500/30' :
              kpi.status === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/30' :
              'bg-green-500/10 border-green-500/30'
            }`}>
              <p className="text-slate-400 text-xs">{kpi.metric}</p>
              <div className="flex items-end gap-2 mt-1">
                <span className="text-2xl font-bold text-white">{kpi.current}</span>
                <span className="text-slate-500 text-sm mb-1">/ {kpi.target}</span>
              </div>
              <p className="text-slate-500 text-xs mt-1">Due: {kpi.deadline}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CEO This Week */}
      <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-2xl p-8 border border-purple-500/30">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Target className="text-purple-400" />
          CEO Tasks This Week (Feb 6-12)
        </h3>

        <div className="space-y-3">
          {[
            { task: 'Send personalized emails to top 10 investors from pipeline', priority: 'P0', status: 'todo', owner: 'CEO' },
            { task: 'Schedule 5 investor meetings for next week', priority: 'P0', status: 'todo', owner: 'CEO' },
            { task: 'Daily BDA sync - push for 3 merchant contracts this week', priority: 'P0', status: 'in_progress', owner: 'CEO + BDA' },
            { task: 'Review and approve marketing launch plan with CMO', priority: 'P1', status: 'todo', owner: 'CEO + CMO' },
            { task: 'C-Suite alignment meeting Sunday 6pm', priority: 'P1', status: 'scheduled', owner: 'ALL' },
            { task: 'Update data room with latest financials', priority: 'P1', status: 'todo', owner: 'CEO' },
            { task: '1:1 with CTO on beta testing plan', priority: 'P1', status: 'todo', owner: 'CEO + CTO' },
            { task: '1:1 with CHRO on support infrastructure', priority: 'P1', status: 'todo', owner: 'CEO + CHRO' },
          ].map((task, idx) => (
            <div key={idx} className={`flex items-center justify-between p-4 rounded-xl ${
              task.status === 'in_progress' ? 'bg-yellow-500/10 border border-yellow-500/30' :
              task.status === 'scheduled' ? 'bg-blue-500/10 border border-blue-500/30' :
              'bg-white/5 border border-white/10'
            }`}>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2 py-1 rounded ${
                  task.priority === 'P0' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {task.priority}
                </span>
                <span className="text-white">{task.task}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-500 text-sm">{task.owner}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  task.status === 'in_progress' ? 'bg-yellow-500/20 text-yellow-400' :
                  task.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-slate-500/20 text-slate-400'
                }`}>
                  {task.status.replace('_', ' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// CTO MANUAL
// ============================================
function CTOManual() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/10 rounded-2xl p-8 border border-blue-500/30">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center">
            <Code size={32} className="text-blue-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">CTO Operating Manual</h2>
            <p className="text-slate-400">Chief Technology Officer</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Primary Focus</p>
            <p className="text-white font-bold">Product, Tech, Dev Team</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Direct Reports</p>
            <p className="text-white font-bold">2 Developers</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Reports To</p>
            <p className="text-white font-bold">CEO</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Key Metric</p>
            <p className="text-white font-bold">99.9% Uptime</p>
          </div>
        </div>
      </div>

      {/* Daily Schedule */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Clock className="text-blue-400" />
          CTO Daily Schedule Template
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="text-blue-400 font-bold">Morning Block (9am - 1pm)</h4>
            {[
              { time: '9:00 - 9:30', activity: 'Check system health, overnight issues', type: 'review' },
              { time: '9:30 - 10:00', activity: 'Review PRs, code reviews', type: 'review' },
              { time: '10:00 - 10:30', activity: 'Dev team standup', type: 'meeting' },
              { time: '10:30 - 1:00', activity: 'Deep coding / Architecture work', type: 'focus' },
            ].map((item, idx) => (
              <div key={idx} className={`flex items-center gap-4 p-3 rounded-lg ${
                item.type === 'focus' ? 'bg-blue-500/10' :
                item.type === 'meeting' ? 'bg-purple-500/10' : 'bg-white/5'
              }`}>
                <span className="text-slate-500 text-sm w-28">{item.time}</span>
                <span className="text-white text-sm">{item.activity}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h4 className="text-blue-400 font-bold">Afternoon Block (2pm - 6pm)</h4>
            {[
              { time: '2:00 - 3:00', activity: 'Sprint planning / Technical decisions', type: 'meeting' },
              { time: '3:00 - 5:00', activity: 'Development / Bug fixes / Testing', type: 'focus' },
              { time: '5:00 - 5:30', activity: 'Deployment review, staging testing', type: 'review' },
              { time: '5:30 - 6:00', activity: 'Documentation, next day prep', type: 'prep' },
            ].map((item, idx) => (
              <div key={idx} className={`flex items-center gap-4 p-3 rounded-lg ${
                item.type === 'focus' ? 'bg-blue-500/10' :
                item.type === 'meeting' ? 'bg-purple-500/10' : 'bg-white/5'
              }`}>
                <span className="text-slate-500 text-sm w-28">{item.time}</span>
                <span className="text-white text-sm">{item.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Target className="text-blue-400" />
          CTO Core Responsibilities
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
            <h4 className="text-blue-400 font-bold mb-3">Product & Development</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Product roadmap execution</li>
              <li>• Sprint planning & delivery</li>
              <li>• Code quality & reviews</li>
              <li>• Bug prioritization & fixes</li>
              <li>• Feature releases</li>
            </ul>
          </div>

          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
            <h4 className="text-green-400 font-bold mb-3">Infrastructure</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• System reliability (99.9%)</li>
              <li>• Security & compliance</li>
              <li>• Database management</li>
              <li>• CI/CD pipelines</li>
              <li>• Monitoring & alerts</li>
            </ul>
          </div>

          <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
            <h4 className="text-purple-400 font-bold mb-3">Team Leadership</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Dev team management (2)</li>
              <li>• Technical mentorship</li>
              <li>• Architecture decisions</li>
              <li>• Hiring technical roles</li>
              <li>• Cross-team coordination</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTO KPIs */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <BarChart3 className="text-blue-400" />
          CTO Key Performance Indicators
        </h3>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { metric: 'System Uptime', current: '99.9%', target: '99.9%', status: 'green' },
            { metric: 'Beta Users', current: '0', target: '50', deadline: 'Feb 20', status: 'yellow' },
            { metric: 'Critical Bugs', current: '0', target: '0', status: 'green' },
            { metric: 'Sprint Velocity', current: '85%', target: '90%', status: 'green' },
            { metric: 'Payment Gateway', current: 'Testing', target: 'Live', deadline: 'Feb 15', status: 'yellow' },
            { metric: 'Code Coverage', current: '75%', target: '80%', status: 'green' },
            { metric: 'Deploy Frequency', current: 'Daily', target: 'Daily', status: 'green' },
            { metric: 'Tech Debt', current: 'Low', target: 'Low', status: 'green' },
          ].map((kpi, idx) => (
            <div key={idx} className={`p-4 rounded-xl border ${
              kpi.status === 'red' ? 'bg-red-500/10 border-red-500/30' :
              kpi.status === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/30' :
              'bg-green-500/10 border-green-500/30'
            }`}>
              <p className="text-slate-400 text-xs">{kpi.metric}</p>
              <p className="text-2xl font-bold text-white mt-1">{kpi.current}</p>
              <p className="text-slate-500 text-xs mt-1">Target: {kpi.target}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTO This Week */}
      <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/10 rounded-2xl p-8 border border-blue-500/30">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Target className="text-blue-400" />
          CTO Tasks This Week (Feb 6-12)
        </h3>

        <div className="space-y-3">
          {[
            { task: 'Complete payment gateway integration testing', priority: 'P0', status: 'in_progress', owner: 'CTO' },
            { task: 'Set up beta testing environment with 50 user capacity', priority: 'P0', status: 'todo', owner: 'CTO + Senior Dev' },
            { task: 'Finalize merchant QR code generation system', priority: 'P0', status: 'in_progress', owner: 'Senior Dev' },
            { task: 'Review and merge pending PRs (5 items)', priority: 'P1', status: 'todo', owner: 'CTO' },
            { task: 'Set up monitoring dashboard for launch', priority: 'P1', status: 'todo', owner: 'Junior Dev' },
            { task: 'Load testing: 1000 concurrent users', priority: 'P1', status: 'todo', owner: 'CTO' },
            { task: '1:1 with CEO - Product update', priority: 'P1', status: 'scheduled', owner: 'CTO + CEO' },
            { task: 'Document API endpoints for merchant integration', priority: 'P2', status: 'todo', owner: 'Senior Dev' },
          ].map((task, idx) => (
            <div key={idx} className={`flex items-center justify-between p-4 rounded-xl ${
              task.status === 'in_progress' ? 'bg-yellow-500/10 border border-yellow-500/30' :
              task.status === 'scheduled' ? 'bg-blue-500/10 border border-blue-500/30' :
              'bg-white/5 border border-white/10'
            }`}>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2 py-1 rounded ${
                  task.priority === 'P0' ? 'bg-red-500/20 text-red-400' :
                  task.priority === 'P1' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {task.priority}
                </span>
                <span className="text-white">{task.task}</span>
              </div>
              <span className="text-slate-500 text-sm">{task.owner}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// CHRO MANUAL
// ============================================
function CHROManual() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500/20 to-teal-500/10 rounded-2xl p-8 border border-teal-500/30">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center">
            <Users size={32} className="text-teal-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">CHRO Operating Manual</h2>
            <p className="text-slate-400">Chief Human Resources Officer</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Primary Focus</p>
            <p className="text-white font-bold">People, Culture, Support</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Team Size</p>
            <p className="text-white font-bold">8 Members Total</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Reports To</p>
            <p className="text-white font-bold">CEO</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Key Metric</p>
            <p className="text-white font-bold">Team Satisfaction 90%+</p>
          </div>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Target className="text-teal-400" />
          CHRO Core Responsibilities
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-teal-500/10 rounded-xl border border-teal-500/30">
            <h4 className="text-teal-400 font-bold mb-3">People & Culture</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Team culture building</li>
              <li>• Onboarding new hires</li>
              <li>• Performance management</li>
              <li>• Team engagement</li>
              <li>• Conflict resolution</li>
            </ul>
          </div>

          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
            <h4 className="text-green-400 font-bold mb-3">HR Operations</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Policies & handbook</li>
              <li>• Payroll coordination</li>
              <li>• Leave management</li>
              <li>• ESOP administration</li>
              <li>• Compliance (labor laws)</li>
            </ul>
          </div>

          <div className="p-4 bg-orange-500/10 rounded-xl border border-orange-500/30">
            <h4 className="text-orange-400 font-bold mb-3">Support Setup (Critical)</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Freshdesk ticketing system</li>
              <li>• WhatsApp Business setup</li>
              <li>• FAQ/Knowledge base</li>
              <li>• SLA definitions</li>
              <li>• Support team training</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CHRO KPIs */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <BarChart3 className="text-teal-400" />
          CHRO Key Performance Indicators
        </h3>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { metric: 'Team Satisfaction', current: '85%', target: '90%', status: 'green' },
            { metric: 'Support System', current: 'Building', target: 'Live', deadline: 'Feb 25', status: 'yellow' },
            { metric: 'FAQ Articles', current: '10', target: '30', status: 'yellow' },
            { metric: 'Onboarding Docs', current: '80%', target: '100%', status: 'green' },
            { metric: 'Policies Complete', current: '90%', target: '100%', status: 'green' },
            { metric: 'Team Burnout Risk', current: 'Medium', target: 'Low', status: 'yellow' },
            { metric: '1:1 Completion', current: '100%', target: '100%', status: 'green' },
            { metric: 'Training Programs', current: '2', target: '3', status: 'green' },
          ].map((kpi, idx) => (
            <div key={idx} className={`p-4 rounded-xl border ${
              kpi.status === 'red' ? 'bg-red-500/10 border-red-500/30' :
              kpi.status === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/30' :
              'bg-green-500/10 border-green-500/30'
            }`}>
              <p className="text-slate-400 text-xs">{kpi.metric}</p>
              <p className="text-2xl font-bold text-white mt-1">{kpi.current}</p>
              <p className="text-slate-500 text-xs mt-1">Target: {kpi.target}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CHRO This Week */}
      <div className="bg-gradient-to-r from-teal-500/20 to-teal-500/10 rounded-2xl p-8 border border-teal-500/30">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Target className="text-teal-400" />
          CHRO Tasks This Week (Feb 6-12)
        </h3>

        <div className="space-y-3">
          {[
            { task: 'Set up Freshdesk account and configure workflows', priority: 'P0', status: 'in_progress', owner: 'CHRO' },
            { task: 'Create WhatsApp Business account for support', priority: 'P0', status: 'todo', owner: 'CHRO' },
            { task: 'Write 15 FAQ articles for common user questions', priority: 'P0', status: 'in_progress', owner: 'CHRO' },
            { task: 'Define SLA targets (response times, resolution)', priority: 'P1', status: 'todo', owner: 'CHRO' },
            { task: 'Team pulse check - burnout assessment', priority: 'P1', status: 'todo', owner: 'CHRO' },
            { task: 'Create merchant training materials with BDA', priority: 'P1', status: 'todo', owner: 'CHRO + BDA' },
            { task: '1:1 with CEO - HR update', priority: 'P1', status: 'scheduled', owner: 'CHRO + CEO' },
            { task: 'Finalize employee handbook updates', priority: 'P2', status: 'todo', owner: 'CHRO' },
          ].map((task, idx) => (
            <div key={idx} className={`flex items-center justify-between p-4 rounded-xl ${
              task.status === 'in_progress' ? 'bg-yellow-500/10 border border-yellow-500/30' :
              task.status === 'scheduled' ? 'bg-blue-500/10 border border-blue-500/30' :
              'bg-white/5 border border-white/10'
            }`}>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2 py-1 rounded ${
                  task.priority === 'P0' ? 'bg-red-500/20 text-red-400' :
                  task.priority === 'P1' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {task.priority}
                </span>
                <span className="text-white">{task.task}</span>
              </div>
              <span className="text-slate-500 text-sm">{task.owner}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// CMO MANUAL
// ============================================
function CMOManual() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500/20 to-pink-500/10 rounded-2xl p-8 border border-pink-500/30">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-pink-500/20 flex items-center justify-center">
            <Megaphone size={32} className="text-pink-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">CMO Operating Manual</h2>
            <p className="text-slate-400">Chief Marketing Officer</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Primary Focus</p>
            <p className="text-white font-bold">Brand, Users, Content</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Direct Reports</p>
            <p className="text-white font-bold">Graphic Designer</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Reports To</p>
            <p className="text-white font-bold">CEO</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Key Metric</p>
            <p className="text-white font-bold">100 Founders Circle</p>
          </div>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Target className="text-pink-400" />
          CMO Core Responsibilities
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-pink-500/10 rounded-xl border border-pink-500/30">
            <h4 className="text-pink-400 font-bold mb-3">Brand & Content</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Brand strategy & voice</li>
              <li>• Content calendar execution</li>
              <li>• Social media management</li>
              <li>• Design direction</li>
              <li>• PR & communications</li>
            </ul>
          </div>

          <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
            <h4 className="text-purple-400 font-bold mb-3">User Acquisition</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Founders Circle campaign</li>
              <li>• Influencer partnerships</li>
              <li>• Referral program</li>
              <li>• Launch marketing</li>
              <li>• Community building</li>
            </ul>
          </div>

          <div className="p-4 bg-orange-500/10 rounded-xl border border-orange-500/30">
            <h4 className="text-orange-400 font-bold mb-3">Launch Sprint (14 Days)</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Countdown content series</li>
              <li>• Influencer content drops</li>
              <li>• Press release prep</li>
              <li>• Launch day viral moments</li>
              <li>• Community activation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CMO KPIs */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <BarChart3 className="text-pink-400" />
          CMO Key Performance Indicators
        </h3>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { metric: 'Founders Circle', current: '0', target: '100', deadline: 'Mar 1', status: 'red' },
            { metric: 'Social Followers', current: '500', target: '2,000', status: 'yellow' },
            { metric: 'Influencer Deals', current: '2', target: '5', status: 'yellow' },
            { metric: 'Content Published', current: '10', target: '50', status: 'yellow' },
            { metric: 'Email List', current: '200', target: '1,000', status: 'yellow' },
            { metric: 'WhatsApp Group', current: '50', target: '200', status: 'yellow' },
            { metric: 'Launch PR Ready', current: '50%', target: '100%', status: 'yellow' },
            { metric: 'Brand Awareness', current: 'Low', target: 'Medium', status: 'yellow' },
          ].map((kpi, idx) => (
            <div key={idx} className={`p-4 rounded-xl border ${
              kpi.status === 'red' ? 'bg-red-500/10 border-red-500/30' :
              kpi.status === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/30' :
              'bg-green-500/10 border-green-500/30'
            }`}>
              <p className="text-slate-400 text-xs">{kpi.metric}</p>
              <p className="text-2xl font-bold text-white mt-1">{kpi.current}</p>
              <p className="text-slate-500 text-xs mt-1">Target: {kpi.target}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CMO This Week */}
      <div className="bg-gradient-to-r from-pink-500/20 to-pink-500/10 rounded-2xl p-8 border border-pink-500/30">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Target className="text-pink-400" />
          CMO Tasks This Week (Feb 6-12)
        </h3>

        <div className="space-y-3">
          {[
            { task: 'Launch Founders Circle signup landing page', priority: 'P0', status: 'in_progress', owner: 'CMO + Designer' },
            { task: 'Finalize 3 influencer partnership deals', priority: 'P0', status: 'in_progress', owner: 'CMO' },
            { task: 'Create 14-day countdown content calendar', priority: 'P0', status: 'todo', owner: 'CMO' },
            { task: 'Design 10 social media posts for launch', priority: 'P1', status: 'todo', owner: 'Designer' },
            { task: 'Write press release draft', priority: 'P1', status: 'todo', owner: 'CMO' },
            { task: 'Set up Instagram/TikTok ad accounts', priority: 'P1', status: 'todo', owner: 'CMO' },
            { task: 'Create referral program launch materials', priority: 'P1', status: 'todo', owner: 'CMO + Designer' },
            { task: '1:1 with CEO - Marketing review', priority: 'P1', status: 'scheduled', owner: 'CMO + CEO' },
          ].map((task, idx) => (
            <div key={idx} className={`flex items-center justify-between p-4 rounded-xl ${
              task.status === 'in_progress' ? 'bg-yellow-500/10 border border-yellow-500/30' :
              task.status === 'scheduled' ? 'bg-blue-500/10 border border-blue-500/30' :
              'bg-white/5 border border-white/10'
            }`}>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2 py-1 rounded ${
                  task.priority === 'P0' ? 'bg-red-500/20 text-red-400' :
                  task.priority === 'P1' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {task.priority}
                </span>
                <span className="text-white">{task.task}</span>
              </div>
              <span className="text-slate-500 text-sm">{task.owner}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// C-SUITE MEETING STRUCTURE
// ============================================
function CSuiteMeeting() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 rounded-2xl p-8 border border-[#c9a227]/30">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-[#c9a227]/20 flex items-center justify-center">
            <Video size={32} className="text-[#c9a227]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Weekly C-Suite Meeting</h2>
            <p className="text-slate-400">Every Sunday at 6:00 PM (1 hour)</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Attendees</p>
            <p className="text-white font-bold">CEO, CTO, CHRO, CMO</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Duration</p>
            <p className="text-white font-bold">60 Minutes Max</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Format</p>
            <p className="text-white font-bold">Video Call</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Chair</p>
            <p className="text-white font-bold">CEO (Rotating)</p>
          </div>
        </div>
      </div>

      {/* Meeting Agenda */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <FileText className="text-[#c9a227]" />
          Standard Meeting Agenda
        </h3>

        <div className="space-y-4">
          {[
            { time: '0-5 min', topic: 'Check-in & Energy Level', description: 'Quick round - How is everyone feeling? Any personal updates?', owner: 'All' },
            { time: '5-10 min', topic: 'KPI Dashboard Review', description: 'Review key metrics vs targets. Flag any red/yellow items.', owner: 'CEO' },
            { time: '10-20 min', topic: 'CEO Update', description: 'Fundraising progress, partnerships, strategic decisions, blockers', owner: 'CEO' },
            { time: '20-30 min', topic: 'CTO Update', description: 'Product status, tech issues, sprint progress, launch readiness', owner: 'CTO' },
            { time: '30-40 min', topic: 'CHRO Update', description: 'Team health, support setup, HR items, culture initiatives', owner: 'CHRO' },
            { time: '40-50 min', topic: 'CMO Update', description: 'Marketing metrics, content progress, user acquisition, launch campaign', owner: 'CMO' },
            { time: '50-55 min', topic: 'Cross-Functional Issues', description: 'Items that need multiple teams to resolve', owner: 'All' },
            { time: '55-60 min', topic: 'Action Items & Close', description: 'Summarize decisions, assign tasks, set next meeting', owner: 'CEO' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
              <div className="w-24 text-[#c9a227] font-bold text-sm flex-shrink-0">{item.time}</div>
              <div className="flex-1">
                <h4 className="text-white font-bold">{item.topic}</h4>
                <p className="text-slate-400 text-sm mt-1">{item.description}</p>
              </div>
              <div className="text-slate-500 text-sm">{item.owner}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Meeting Rules */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/30">
          <h3 className="text-green-400 font-bold text-lg mb-4 flex items-center gap-2">
            <CheckCircle size={20} />
            Meeting Best Practices
          </h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle size={14} className="text-green-400 mt-1" />
              Start and end on time - respect everyone's time
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={14} className="text-green-400 mt-1" />
              Come prepared with updates (async pre-read if needed)
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={14} className="text-green-400 mt-1" />
              Raise blockers early - don't wait until it's critical
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={14} className="text-green-400 mt-1" />
              Decisions made in meeting are final (unless new info)
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={14} className="text-green-400 mt-1" />
              Action items must have owner and deadline
            </li>
          </ul>
        </div>

        <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/30">
          <h3 className="text-red-400 font-bold text-lg mb-4 flex items-center gap-2">
            <AlertTriangle size={20} />
            Meeting Anti-Patterns
          </h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <AlertTriangle size={14} className="text-red-400 mt-1" />
              No phones/distractions - full attention required
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle size={14} className="text-red-400 mt-1" />
              Don't rehash decisions already made
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle size={14} className="text-red-400 mt-1" />
              Don't go over time - park items for async
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle size={14} className="text-red-400 mt-1" />
              Don't surprise with major issues - flag ahead
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle size={14} className="text-red-400 mt-1" />
              Don't leave without clear action items
            </li>
          </ul>
        </div>
      </div>

      {/* Pre-Meeting Template */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <FileText className="text-[#c9a227]" />
          Pre-Meeting Update Template (Submit by Saturday 6pm)
        </h3>

        <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm">
          <pre className="text-slate-300 whitespace-pre-wrap">
{`## [Role] Weekly Update - [Date]

### Top 3 Wins This Week
1.
2.
3.

### Progress vs KPIs
| Metric | Target | Current | Status |
|--------|--------|---------|--------|
|        |        |         | 🟢/🟡/🔴 |

### Blockers & Help Needed
- [Blocker 1]: Need [help from X]
- [Blocker 2]: Need [decision on Y]

### Next Week's Top 3 Priorities
1.
2.
3.

### Cross-Functional Dependencies
- [Dependency on X team]`}
          </pre>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MEETING MINUTES (MoM)
// ============================================
function MeetingMoM() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500/20 to-amber-500/10 rounded-2xl p-8 border border-amber-500/30">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center">
            <FileText size={32} className="text-amber-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">C-Suite Meeting Minutes</h2>
            <p className="text-slate-400">February 6, 2026 - Launch Sprint Kickoff</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Date & Time</p>
            <p className="text-white font-bold">Feb 6, 2026 | 6:00 PM</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Attendees</p>
            <p className="text-white font-bold">CEO, CTO, CHRO, CMO</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Duration</p>
            <p className="text-white font-bold">75 Minutes</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">Chair</p>
            <p className="text-white font-bold">CEO</p>
          </div>
        </div>
      </div>

      {/* Meeting Summary */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <MessageSquare className="text-amber-400" />
          Meeting Summary
        </h3>

        <div className="p-6 bg-amber-500/10 rounded-xl border border-amber-500/30 mb-6">
          <p className="text-slate-300 leading-relaxed">
            This was the official kickoff of our 23-day launch sprint. All C-Suite members aligned on priorities,
            identified blockers, and committed to specific deliverables. The team acknowledged the urgency -
            we have a fixed launch date of March 1, 2026, and cannot move it. Key focus areas: funding close,
            merchant activation, support infrastructure, and Founders Circle campaign.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
            <h4 className="text-green-400 font-bold mb-3">Key Decisions Made</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>✓ March 1 launch date is NON-NEGOTIABLE</li>
              <li>✓ Minimum 10 merchants live by Feb 28</li>
              <li>✓ Founders Circle target: 100 users by launch</li>
              <li>✓ Support infrastructure deadline: Feb 25</li>
              <li>✓ All hands on deck - no vacations until March 15</li>
            </ul>
          </div>

          <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/30">
            <h4 className="text-red-400 font-bold mb-3">Critical Blockers Identified</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>⚠️ No funding closed yet - CEO priority #1</li>
              <li>⚠️ Zero live merchants - BDA accelerating</li>
              <li>⚠️ Support system not set up - CHRO on it</li>
              <li>⚠️ Founders Circle at 0 - CMO launching campaign</li>
              <li>⚠️ Beta testing not started - CTO scheduling</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Individual Updates */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-3">
          <Users className="text-amber-400" />
          Individual Updates
        </h3>

        {/* CEO Update */}
        <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/30">
          <div className="flex items-center gap-3 mb-4">
            <Crown className="text-purple-400" size={24} />
            <h4 className="text-purple-400 font-bold text-lg">CEO Update</h4>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-slate-400 text-sm mb-2">Progress:</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Investor pipeline at 50+ (identified from database)</li>
                <li>• Data room 90% complete</li>
                <li>• BDA hired and actively converting LOIs</li>
                <li>• Team of 8 fully onboarded</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Blockers:</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• No investor meetings scheduled yet this week</li>
                <li>• Need to balance fundraising with execution oversight</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Commitments:</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Schedule 5 investor meetings by Feb 12</li>
                <li>• Daily BDA check-ins until merchant target hit</li>
                <li>• Weekly 1:1s with all C-Suite</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTO Update */}
        <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-500/30">
          <div className="flex items-center gap-3 mb-4">
            <Code className="text-blue-400" size={24} />
            <h4 className="text-blue-400 font-bold text-lg">CTO Update</h4>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-slate-400 text-sm mb-2">Progress:</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Product 100% feature complete</li>
                <li>• Payment gateway integrated, in testing</li>
                <li>• QR code system ready</li>
                <li>• Dev team velocity at 85%</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Blockers:</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Need merchants to test full payment flow</li>
                <li>• Beta users not yet recruited</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Commitments:</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Complete payment gateway testing by Feb 15</li>
                <li>• Set up beta environment for 50 users by Feb 20</li>
                <li>• Load test for 1000 concurrent users by Feb 25</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CHRO Update */}
        <div className="bg-teal-500/10 rounded-2xl p-6 border border-teal-500/30">
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-teal-400" size={24} />
            <h4 className="text-teal-400 font-bold text-lg">CHRO Update</h4>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-slate-400 text-sm mb-2">Progress:</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Team of 8 fully onboarded</li>
                <li>• Policies and handbook 90% complete</li>
                <li>• Team morale good but workload high</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Blockers:</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Support infrastructure not started</li>
                <li>• No FAQ or knowledge base yet</li>
                <li>• Burnout risk is MEDIUM across team</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Commitments:</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Freshdesk live by Feb 15</li>
                <li>• WhatsApp Business set up by Feb 12</li>
                <li>• 30 FAQ articles written by Feb 20</li>
                <li>• Support infrastructure 100% by Feb 25</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CMO Update */}
        <div className="bg-pink-500/10 rounded-2xl p-6 border border-pink-500/30">
          <div className="flex items-center gap-3 mb-4">
            <Megaphone className="text-pink-400" size={24} />
            <h4 className="text-pink-400 font-bold text-lg">CMO Update</h4>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-slate-400 text-sm mb-2">Progress:</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Marketing Bible complete (21 sections)</li>
                <li>• Social accounts active</li>
                <li>• 2 influencer deals in negotiation</li>
                <li>• Designer producing content</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Blockers:</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Founders Circle campaign not launched</li>
                <li>• Limited marketing budget until funding</li>
                <li>• Need merchant stories for content</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Commitments:</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Launch Founders Circle landing page by Feb 10</li>
                <li>• Close 5 influencer deals by Feb 20</li>
                <li>• 100 Founders Circle signups by Mar 1</li>
                <li>• Press release ready by Feb 25</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <CheckCircle className="text-green-400" />
          Action Items & Assignments
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-slate-400">ID</th>
                <th className="text-left py-3 px-4 text-slate-400">Action Item</th>
                <th className="text-left py-3 px-4 text-slate-400">Owner</th>
                <th className="text-left py-3 px-4 text-slate-400">Deadline</th>
                <th className="text-left py-3 px-4 text-slate-400">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { id: 'AI-001', action: 'Schedule 5 investor meetings', owner: 'CEO', deadline: 'Feb 12', priority: 'P0' },
                { id: 'AI-002', action: 'Daily BDA sync on merchant conversion', owner: 'CEO + BDA', deadline: 'Daily', priority: 'P0' },
                { id: 'AI-003', action: 'Complete payment gateway testing', owner: 'CTO', deadline: 'Feb 15', priority: 'P0' },
                { id: 'AI-004', action: 'Set up beta testing environment', owner: 'CTO', deadline: 'Feb 20', priority: 'P0' },
                { id: 'AI-005', action: 'Set up Freshdesk ticketing', owner: 'CHRO', deadline: 'Feb 15', priority: 'P0' },
                { id: 'AI-006', action: 'Set up WhatsApp Business', owner: 'CHRO', deadline: 'Feb 12', priority: 'P0' },
                { id: 'AI-007', action: 'Launch Founders Circle page', owner: 'CMO', deadline: 'Feb 10', priority: 'P0' },
                { id: 'AI-008', action: 'Close 5 influencer deals', owner: 'CMO', deadline: 'Feb 20', priority: 'P1' },
                { id: 'AI-009', action: 'Write 30 FAQ articles', owner: 'CHRO', deadline: 'Feb 20', priority: 'P1' },
                { id: 'AI-010', action: 'Update data room financials', owner: 'CEO', deadline: 'Feb 12', priority: 'P1' },
                { id: 'AI-011', action: 'Load testing (1000 users)', owner: 'CTO', deadline: 'Feb 25', priority: 'P1' },
                { id: 'AI-012', action: 'Prepare press release', owner: 'CMO', deadline: 'Feb 25', priority: 'P1' },
              ].map((item) => (
                <tr key={item.id} className="hover:bg-white/5">
                  <td className="py-3 px-4 text-slate-500 font-mono">{item.id}</td>
                  <td className="py-3 px-4 text-white">{item.action}</td>
                  <td className="py-3 px-4 text-[#c9a227]">{item.owner}</td>
                  <td className="py-3 px-4 text-slate-300">{item.deadline}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2 py-1 rounded ${
                      item.priority === 'P0' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {item.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reporting Structure */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <TrendingUp className="text-amber-400" />
          Reporting & Accountability Structure
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-[#c9a227] font-bold">Daily Reporting</h4>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-white font-medium mb-2">Morning Standup (Async - WhatsApp)</p>
              <p className="text-slate-400 text-sm">By 10am: Each person posts 3 priorities for the day</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-white font-medium mb-2">EOD Update (Async - WhatsApp)</p>
              <p className="text-slate-400 text-sm">By 6pm: Quick update on progress and blockers</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[#c9a227] font-bold">Weekly Reporting</h4>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-white font-medium mb-2">Saturday Pre-Read</p>
              <p className="text-slate-400 text-sm">Submit update template by 6pm for Sunday meeting</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-white font-medium mb-2">Sunday C-Suite Meeting</p>
              <p className="text-slate-400 text-sm">6pm: Full leadership alignment (60 min)</p>
            </div>
          </div>
        </div>

        {/* 1:1 Schedule */}
        <div className="mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
          <h4 className="text-purple-400 font-bold mb-3">CEO 1:1 Schedule</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-3 bg-white/5 rounded-lg">
              <p className="text-white font-medium">CEO ↔ CTO</p>
              <p className="text-slate-400 text-sm">Tuesday 3pm (30 min)</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg">
              <p className="text-white font-medium">CEO ↔ CHRO</p>
              <p className="text-slate-400 text-sm">Wednesday 3pm (30 min)</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg">
              <p className="text-white font-medium">CEO ↔ CMO</p>
              <p className="text-slate-400 text-sm">Thursday 3pm (30 min)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Meeting */}
      <div className="bg-gradient-to-r from-amber-500/20 to-amber-500/10 rounded-2xl p-8 border border-amber-500/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
          <Calendar className="text-amber-400" />
          Next C-Suite Meeting
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 bg-white/10 rounded-xl">
            <p className="text-slate-400 text-sm">Date</p>
            <p className="text-white font-bold">Sunday, Feb 13, 2026</p>
          </div>
          <div className="p-4 bg-white/10 rounded-xl">
            <p className="text-slate-400 text-sm">Time</p>
            <p className="text-white font-bold">6:00 PM GST</p>
          </div>
          <div className="p-4 bg-white/10 rounded-xl">
            <p className="text-slate-400 text-sm">Pre-Read Due</p>
            <p className="text-white font-bold">Saturday 6pm</p>
          </div>
          <div className="p-4 bg-white/10 rounded-xl">
            <p className="text-slate-400 text-sm">Focus</p>
            <p className="text-white font-bold">Week 1 Progress Review</p>
          </div>
        </div>
      </div>

      {/* Signatures */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Meeting Acknowledgment</h3>
        <p className="text-slate-400 mb-6">By acknowledging these minutes, all C-Suite members confirm understanding of their commitments and deadlines.</p>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { role: 'CEO', status: 'Acknowledged', color: 'purple' },
            { role: 'CTO', status: 'Acknowledged', color: 'blue' },
            { role: 'CHRO', status: 'Acknowledged', color: 'teal' },
            { role: 'CMO', status: 'Acknowledged', color: 'pink' },
          ].map((item) => (
            <div key={item.role} className={`p-4 bg-${item.color}-500/10 rounded-xl border border-${item.color}-500/30`}>
              <p className={`text-${item.color}-400 font-bold`}>{item.role}</p>
              <p className="text-green-400 text-sm mt-1 flex items-center gap-1">
                <CheckCircle size={14} />
                {item.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
