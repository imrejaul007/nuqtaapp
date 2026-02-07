'use client';

import React, { useState } from 'react';
import {
  DollarSign, FileText, Users, Clock, CheckCircle, AlertTriangle,
  Calendar, TrendingUp, Target, Briefcase, Mail, Phone, MessageSquare,
  BarChart3, PieChart, ArrowRight, ChevronDown, ChevronUp, Copy, Check,
  Shield, Zap, Eye, Settings, Bell, Layers, GitBranch, ClipboardList
} from 'lucide-react';

export default function CMOOperationsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('budget');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const budgetAllocation = {
    totalMonthly: 150000,
    categories: [
      { name: 'Digital Advertising', percentage: 35, amount: 52500, approver: 'CMO', threshold: 10000 },
      { name: 'Influencer Marketing', percentage: 20, amount: 30000, approver: 'CMO', threshold: 5000 },
      { name: 'Events & Activations', percentage: 15, amount: 22500, approver: 'CEO', threshold: 15000 },
      { name: 'Content Production', percentage: 12, amount: 18000, approver: 'CMO', threshold: 5000 },
      { name: 'PR & Communications', percentage: 8, amount: 12000, approver: 'CMO', threshold: 5000 },
      { name: 'Tools & Software', percentage: 5, amount: 7500, approver: 'CMO', threshold: 2500 },
      { name: 'Contingency', percentage: 5, amount: 7500, approver: 'CEO', threshold: 0 }
    ]
  };

  const approvalMatrix = [
    { type: 'Campaign Launch', under5k: 'Marketing Manager', under25k: 'CMO', over25k: 'CEO + CMO', timeline: '2-5 days' },
    { type: 'Vendor Contract', under5k: 'CMO', under25k: 'CMO + Finance', over25k: 'CEO + Legal', timeline: '3-7 days' },
    { type: 'Content Publish', under5k: 'Content Lead', under25k: 'CMO', over25k: 'CMO + Legal', timeline: '1-2 days' },
    { type: 'Partnership Deal', under5k: 'CMO', under25k: 'CEO + CMO', over25k: 'Board', timeline: '5-14 days' },
    { type: 'Hiring Request', under5k: 'CMO', under25k: 'CEO + HR', over25k: 'CEO + Board', timeline: '7-21 days' },
    { type: 'Emergency Spend', under5k: 'CMO (notify CEO)', under25k: 'CEO verbal', over25k: 'CEO + CFO', timeline: '1-2 hours' }
  ];

  const weeklySchedule = [
    { day: 'Sunday', activities: ['Team standup (9 AM)', 'Review weekly KPIs', 'Content calendar review', 'Vendor check-ins'], focus: 'Planning & Alignment' },
    { day: 'Monday', activities: ['Campaign performance review', 'Social media analytics', 'Influencer coordination', 'Content approvals'], focus: 'Performance Review' },
    { day: 'Tuesday', activities: ['Creative review sessions', 'Partnership meetings', 'Budget tracking update', 'Team 1:1s'], focus: 'Creative & Partnerships' },
    { day: 'Wednesday', activities: ['CEO/Leadership sync', 'Strategy deep-dive', 'Competitor analysis', 'Cross-team alignment'], focus: 'Leadership & Strategy' },
    { day: 'Thursday', activities: ['Campaign optimization', 'New initiative planning', 'Vendor negotiations', 'Training sessions'], focus: 'Optimization & Growth' },
    { day: 'Friday', activities: ['Week in review', 'Next week prep', 'Report compilation', 'Team celebration/feedback'], focus: 'Review & Prep' }
  ];

  const monthlyReporting = [
    { report: 'Executive Dashboard', audience: 'CEO, Board', frequency: 'Monthly (1st week)', owner: 'CMO', format: 'Slides + Numbers' },
    { report: 'Campaign Performance', audience: 'Leadership', frequency: 'Bi-weekly', owner: 'Performance Lead', format: 'Dashboard + Commentary' },
    { report: 'Budget Utilization', audience: 'CEO, CFO', frequency: 'Weekly', owner: 'CMO', format: 'Spreadsheet' },
    { report: 'Social Media Metrics', audience: 'Marketing Team', frequency: 'Daily/Weekly', owner: 'Social Lead', format: 'Dashboard' },
    { report: 'Influencer ROI', audience: 'CMO, CEO', frequency: 'Monthly', owner: 'Influencer Lead', format: 'Report + ROI calc' },
    { report: 'Brand Health Tracker', audience: 'Leadership', frequency: 'Quarterly', owner: 'Brand Lead', format: 'Survey + Analysis' }
  ];

  const escalationPaths = [
    { issue: 'Campaign underperforming (>20% below target)', severity: 'Medium', escalateTo: 'CMO within 24hrs', action: 'Pause, analyze, pivot strategy' },
    { issue: 'Negative viral content/PR crisis', severity: 'Critical', escalateTo: 'CEO + CMO immediately', action: 'Activate crisis protocol' },
    { issue: 'Budget overspend risk (>10%)', severity: 'High', escalateTo: 'CMO + CFO within 4hrs', action: 'Freeze non-essential spend' },
    { issue: 'Vendor non-delivery', severity: 'Medium', escalateTo: 'CMO within 48hrs', action: 'Activate backup, document breach' },
    { issue: 'Team conflict/HR issue', severity: 'High', escalateTo: 'CMO + HR within 24hrs', action: 'Mediate, document, resolve' },
    { issue: 'Legal/compliance concern', severity: 'Critical', escalateTo: 'Legal + CEO immediately', action: 'Pause activity, get legal review' }
  ];

  const spendingPacing = [
    { week: 'Week 1', target: '20%', cumulative: '20%', focus: 'Campaign launches, initial testing' },
    { week: 'Week 2', target: '25%', cumulative: '45%', focus: 'Scale winning campaigns, optimize' },
    { week: 'Week 3', target: '30%', cumulative: '75%', focus: 'Peak performance push' },
    { week: 'Week 4', target: '25%', cumulative: '100%', focus: 'Sustain, prepare next month' }
  ];

  const decisionFramework = [
    { decision: 'New campaign idea', criteria: ['Aligns with quarterly goals', 'Budget available', 'Team capacity exists', 'Clear success metrics'], timeframe: '3-5 days' },
    { decision: 'Partnership opportunity', criteria: ['Brand alignment score >7', 'ROI projection >2x', 'Legal review passed', 'Capacity confirmed'], timeframe: '1-2 weeks' },
    { decision: 'Hiring new role', criteria: ['Gap analysis complete', 'Budget approved', 'JD finalized', 'Timing optimal'], timeframe: '2-4 weeks' },
    { decision: 'Tool/software purchase', criteria: ['Solves real problem', 'Team buy-in', 'Integration possible', 'ROI justifiable'], timeframe: '1-2 weeks' },
    { decision: 'Content pivot', criteria: ['Data supports change', 'Resources available', 'Risk assessment done', 'Rollback plan exists'], timeframe: '2-3 days' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <div className="bg-gray-900/80 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-600 rounded-lg">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">CMO Operations Manual</h1>
          </div>
          <p className="text-purple-300 ml-14">
            Budget workflows, approval processes, reporting cadence & operational excellence
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800/60 rounded-xl p-4 border border-green-500/30">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-sm">Monthly Budget</span>
            </div>
            <p className="text-2xl font-bold text-white">AED 150K</p>
            <p className="text-gray-400 text-xs">7 categories</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-blue-500/30">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 text-sm">Approval Levels</span>
            </div>
            <p className="text-2xl font-bold text-white">3 Tiers</p>
            <p className="text-gray-400 text-xs">&lt;5K, &lt;25K, &gt;25K</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-purple-500/30">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 text-sm">Reports</span>
            </div>
            <p className="text-2xl font-bold text-white">6 Types</p>
            <p className="text-gray-400 text-xs">Daily to Quarterly</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-orange-500/30">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 text-sm">Escalation Paths</span>
            </div>
            <p className="text-2xl font-bold text-white">6 Defined</p>
            <p className="text-gray-400 text-xs">Clear ownership</p>
          </div>
        </div>

        {/* Budget Allocation Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-purple-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'budget' ? null : 'budget')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-600/20 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Budget Allocation & Spending Pacing</h2>
                <p className="text-gray-400 text-sm">Monthly budget breakdown and weekly pacing targets</p>
              </div>
            </div>
            {expandedSection === 'budget' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'budget' && (
            <div className="p-6 pt-0 space-y-6">
              {/* Budget Categories */}
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Monthly Budget: AED {budgetAllocation.totalMonthly.toLocaleString()}</h3>
                <div className="space-y-3">
                  {budgetAllocation.categories.map((cat, idx) => (
                    <div key={idx} className="bg-gray-900/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">{cat.name}</span>
                        <span className="text-green-400 font-bold">AED {cat.amount.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex-1 bg-gray-700 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${cat.percentage}%` }}></div>
                        </div>
                        <span className="text-gray-400 w-12">{cat.percentage}%</span>
                        <span className="text-purple-400">Approval: {cat.approver}</span>
                        <span className="text-yellow-400">Threshold: AED {cat.threshold.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spending Pacing */}
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Weekly Spending Pacing</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {spendingPacing.map((week, idx) => (
                    <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-green-500">
                      <h4 className="text-white font-medium mb-2">{week.week}</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-green-400">{week.target}</span>
                        <span className="text-gray-400 text-sm">of monthly</span>
                      </div>
                      <div className="text-sm text-gray-400 mb-2">Cumulative: {week.cumulative}</div>
                      <p className="text-xs text-purple-300">{week.focus}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Budget Rules */}
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                <h4 className="text-yellow-400 font-medium mb-2">⚠️ Critical Budget Rules</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Never exceed 110% of monthly budget without CEO approval</li>
                  <li>• Reallocation between categories requires CMO sign-off if &gt;10%</li>
                  <li>• Contingency fund only for genuine emergencies, not overruns</li>
                  <li>• All vendor payments require PO number and 3 quotes for &gt;AED 10K</li>
                  <li>• Monthly budget review on 1st of each month - mandatory</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Approval Matrix Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-purple-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'approvals' ? null : 'approvals')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Approval Matrix & Workflows</h2>
                <p className="text-gray-400 text-sm">Who approves what at different spend levels</p>
              </div>
            </div>
            {expandedSection === 'approvals' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'approvals' && (
            <div className="p-6 pt-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-3 px-4 text-gray-400 font-medium">Decision Type</th>
                      <th className="py-3 px-4 text-gray-400 font-medium">&lt; AED 5K</th>
                      <th className="py-3 px-4 text-gray-400 font-medium">&lt; AED 25K</th>
                      <th className="py-3 px-4 text-gray-400 font-medium">&gt; AED 25K</th>
                      <th className="py-3 px-4 text-gray-400 font-medium">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {approvalMatrix.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-700/50 hover:bg-gray-800/30">
                        <td className="py-3 px-4 text-white font-medium">{row.type}</td>
                        <td className="py-3 px-4 text-green-400">{row.under5k}</td>
                        <td className="py-3 px-4 text-yellow-400">{row.under25k}</td>
                        <td className="py-3 px-4 text-red-400">{row.over25k}</td>
                        <td className="py-3 px-4 text-gray-400">{row.timeline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-400 font-medium mb-2">Fast Track (&lt;5K)</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Same-day approval possible</li>
                    <li>• Slack/email approval acceptable</li>
                    <li>• Document in shared tracker</li>
                  </ul>
                </div>
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <h4 className="text-yellow-400 font-medium mb-2">Standard (5K-25K)</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Formal request required</li>
                    <li>• ROI projection needed</li>
                    <li>• Written approval stored</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-400 font-medium mb-2">Executive (&gt;25K)</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Full business case required</li>
                    <li>• Board visibility for &gt;100K</li>
                    <li>• Legal review for contracts</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Weekly Schedule Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-purple-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'schedule' ? null : 'schedule')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-600/20 rounded-lg">
                <Calendar className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Weekly Operating Rhythm</h2>
                <p className="text-gray-400 text-sm">Standard weekly schedule and meeting cadence</p>
              </div>
            </div>
            {expandedSection === 'schedule' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'schedule' && (
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {weeklySchedule.map((day, idx) => (
                  <div key={idx} className="bg-gray-900/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-medium">{day.day}</h4>
                      <span className="text-xs bg-purple-600/30 text-purple-300 px-2 py-1 rounded">{day.focus}</span>
                    </div>
                    <ul className="space-y-2">
                      {day.activities.map((activity, aidx) => (
                        <li key={aidx} className="flex items-center gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h4 className="text-purple-400 font-medium mb-2">📅 Key Recurring Meetings</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-white">Team Standup</p>
                    <p className="text-gray-400">Daily 9 AM • 15 min • All marketing</p>
                  </div>
                  <div>
                    <p className="text-white">CEO Sync</p>
                    <p className="text-gray-400">Wednesday 2 PM • 30 min • CMO + CEO</p>
                  </div>
                  <div>
                    <p className="text-white">Creative Review</p>
                    <p className="text-gray-400">Tuesday 11 AM • 1 hr • Creative team</p>
                  </div>
                  <div>
                    <p className="text-white">All Hands Marketing</p>
                    <p className="text-gray-400">Friday 4 PM • 30 min • Full team</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Reporting Cadence Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-purple-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'reporting' ? null : 'reporting')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-600/20 rounded-lg">
                <BarChart3 className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Reporting Cadence & Templates</h2>
                <p className="text-gray-400 text-sm">What to report, when, and to whom</p>
              </div>
            </div>
            {expandedSection === 'reporting' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'reporting' && (
            <div className="p-6 pt-0">
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-3 px-4 text-gray-400 font-medium">Report</th>
                      <th className="py-3 px-4 text-gray-400 font-medium">Audience</th>
                      <th className="py-3 px-4 text-gray-400 font-medium">Frequency</th>
                      <th className="py-3 px-4 text-gray-400 font-medium">Owner</th>
                      <th className="py-3 px-4 text-gray-400 font-medium">Format</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyReporting.map((report, idx) => (
                      <tr key={idx} className="border-b border-gray-700/50 hover:bg-gray-800/30">
                        <td className="py-3 px-4 text-white font-medium">{report.report}</td>
                        <td className="py-3 px-4 text-gray-300">{report.audience}</td>
                        <td className="py-3 px-4 text-purple-400">{report.frequency}</td>
                        <td className="py-3 px-4 text-gray-300">{report.owner}</td>
                        <td className="py-3 px-4 text-gray-400">{report.format}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Report Templates */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Weekly Report Template</h3>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Executive Summary Template</span>
                    <button
                      onClick={() => copyToClipboard(`WEEKLY MARKETING REPORT - Week of [DATE]

HIGHLIGHTS:
• [Top achievement 1]
• [Top achievement 2]
• [Top achievement 3]

KEY METRICS:
• App Downloads: [X] (Target: [Y], [+/-Z%])
• New Merchants: [X] (Target: [Y])
• Campaign ROAS: [X]x
• Social Engagement: [X%] growth

BUDGET STATUS:
• Spent: AED [X] of AED [Y] ([Z%])
• Pacing: [On track / Behind / Ahead]

NEXT WEEK PRIORITIES:
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

BLOCKERS / NEEDS:
• [Any blockers or requests]`, 'weekly-template')}
                      className="flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm"
                    >
                      {copiedItem === 'weekly-template' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copiedItem === 'weekly-template' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="text-gray-400 text-xs overflow-x-auto whitespace-pre-wrap">
{`WEEKLY MARKETING REPORT - Week of [DATE]

HIGHLIGHTS:
• [Top achievement 1]
• [Top achievement 2]

KEY METRICS:
• App Downloads: [X] (Target: [Y])
• Campaign ROAS: [X]x
• Budget: AED [X] of [Y]`}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Escalation Paths Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-purple-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'escalation' ? null : 'escalation')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-600/20 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Escalation Paths & Crisis Response</h2>
                <p className="text-gray-400 text-sm">When and how to escalate issues</p>
              </div>
            </div>
            {expandedSection === 'escalation' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'escalation' && (
            <div className="p-6 pt-0">
              <div className="space-y-3">
                {escalationPaths.map((path, idx) => (
                  <div key={idx} className={`rounded-lg p-4 border ${
                    path.severity === 'Critical' ? 'bg-red-900/20 border-red-500/30' :
                    path.severity === 'High' ? 'bg-orange-900/20 border-orange-500/30' :
                    'bg-yellow-900/20 border-yellow-500/30'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-white font-medium">{path.issue}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        path.severity === 'Critical' ? 'bg-red-600 text-white' :
                        path.severity === 'High' ? 'bg-orange-600 text-white' :
                        'bg-yellow-600 text-black'
                      }`}>{path.severity}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-400">Escalate to:</span>
                        <span className="text-purple-400 ml-2">{path.escalateTo}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Action:</span>
                        <span className="text-gray-300 ml-2">{path.action}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gray-900/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-3">Emergency Contacts</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">CEO: [Phone]</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Legal: [Phone]</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">PR Agency: [Phone]</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Decision Framework Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-purple-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'decisions' ? null : 'decisions')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-600/20 rounded-lg">
                <GitBranch className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Decision-Making Framework</h2>
                <p className="text-gray-400 text-sm">Criteria and process for key decisions</p>
              </div>
            </div>
            {expandedSection === 'decisions' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'decisions' && (
            <div className="p-6 pt-0">
              <div className="space-y-4">
                {decisionFramework.map((item, idx) => (
                  <div key={idx} className="bg-gray-900/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-medium">{item.decision}</h4>
                      <span className="text-cyan-400 text-sm">{item.timeframe}</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {item.criteria.map((criterion, cidx) => (
                        <div key={cidx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{criterion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Reference Card */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl border border-purple-500/30 p-6">
          <h3 className="text-xl font-bold text-white mb-4">🎯 CMO Quick Reference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-medium mb-2">Daily Must-Dos</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>✓ Check campaign metrics</li>
                <li>✓ Review social mentions</li>
                <li>✓ Team standup</li>
                <li>✓ Approve pending items</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-blue-400 font-medium mb-2">Weekly Must-Dos</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>✓ CEO sync meeting</li>
                <li>✓ Budget review</li>
                <li>✓ Team 1:1s</li>
                <li>✓ Weekly report</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-green-400 font-medium mb-2">Monthly Must-Dos</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>✓ Executive dashboard</li>
                <li>✓ Budget reconciliation</li>
                <li>✓ Strategy review</li>
                <li>✓ Team all-hands</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-orange-400 font-medium mb-2">Key Contacts</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>CEO: [Name]</li>
                <li>CFO: [Name]</li>
                <li>Legal: [Name]</li>
                <li>HR: [Name]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
