'use client';

import React, { useState } from 'react';
import {
  Users, Target, Heart, Award, Calendar, TrendingUp, Building2,
  CheckCircle, Clock, DollarSign, BookOpen, Shield, Zap, Star,
  ChevronDown, ChevronUp, Copy, Check, UserPlus, Briefcase,
  GraduationCap, MessageSquare, BarChart3, Globe, Rocket, Crown
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function CHROMasterPlanPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('vision');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const hrVision = {
    mission: "Build a world-class team that embodies innovation, customer obsession, and UAE-first values while creating an employer brand that attracts top talent across MENA.",
    values: [
      { name: 'Customer Obsession', description: 'Every decision starts with the user and merchant experience', icon: Heart },
      { name: 'Bias for Action', description: 'Move fast, learn faster. Perfect is the enemy of good.', icon: Zap },
      { name: 'Think Big', description: 'We are building the everyday savings platform for the region', icon: Rocket },
      { name: 'Ownership', description: 'Act like an owner. No task is beneath you.', icon: Crown },
      { name: 'Earn Trust', description: 'Be transparent, deliver on promises, admit mistakes', icon: Shield },
      { name: 'Learn & Grow', description: 'Continuous improvement, embrace feedback, share knowledge', icon: GraduationCap }
    ]
  };

  const hiringTimeline = [
    {
      phase: 'Pre-Launch (Month 1-2)',
      headcount: '8-10',
      priority: 'Critical',
      roles: [
        { title: 'CEO/Founder', status: 'Filled', department: 'Executive' },
        { title: 'CTO/Tech Lead', status: 'Hiring', department: 'Technology' },
        { title: 'CMO', status: 'Hiring', department: 'Marketing' },
        { title: 'Performance Marketing Lead', status: 'Hiring', department: 'Marketing' },
        { title: 'Content & Social Lead', status: 'Hiring', department: 'Marketing' },
        { title: 'Full-Stack Developer', status: 'Hiring', department: 'Technology' },
        { title: 'Mobile Developer', status: 'Hiring', department: 'Technology' },
        { title: 'Operations Manager', status: 'Hiring', department: 'Operations' },
        { title: 'Merchant Sales Lead', status: 'Hiring', department: 'Sales' }
      ]
    },
    {
      phase: 'Launch (Month 3-4)',
      headcount: '15-18',
      priority: 'High',
      roles: [
        { title: 'Influencer Manager', status: 'Planned', department: 'Marketing' },
        { title: 'Marketing Coordinator', status: 'Planned', department: 'Marketing' },
        { title: 'Sales Representatives (2)', status: 'Planned', department: 'Sales' },
        { title: 'Customer Support Lead', status: 'Planned', department: 'Support' },
        { title: 'Customer Support Agent (2)', status: 'Planned', department: 'Support' },
        { title: 'Backend Developer', status: 'Planned', department: 'Technology' },
        { title: 'QA Engineer', status: 'Planned', department: 'Technology' }
      ]
    },
    {
      phase: 'Growth (Month 5-8)',
      headcount: '25-30',
      priority: 'Medium',
      roles: [
        { title: 'Brand Manager', status: 'Planned', department: 'Marketing' },
        { title: 'Community Manager', status: 'Planned', department: 'Marketing' },
        { title: 'Data Analyst', status: 'Planned', department: 'Analytics' },
        { title: 'Creative Designer', status: 'Planned', department: 'Marketing' },
        { title: 'Finance Manager', status: 'Planned', department: 'Finance' },
        { title: 'HR Manager', status: 'Planned', department: 'HR' },
        { title: 'Sales Team Expansion (+3)', status: 'Planned', department: 'Sales' },
        { title: 'Support Team Expansion (+2)', status: 'Planned', department: 'Support' },
        { title: 'DevOps Engineer', status: 'Planned', department: 'Technology' }
      ]
    },
    {
      phase: 'Scale (Month 9-12)',
      headcount: '40-50',
      priority: 'Medium',
      roles: [
        { title: 'COO', status: 'Planned', department: 'Executive' },
        { title: 'CFO (Part-time/Fractional)', status: 'Planned', department: 'Executive' },
        { title: 'Product Manager', status: 'Planned', department: 'Product' },
        { title: 'UX Designer', status: 'Planned', department: 'Product' },
        { title: 'PR Manager', status: 'Planned', department: 'Marketing' },
        { title: 'Partnerships Manager', status: 'Planned', department: 'Business Dev' },
        { title: 'Legal Counsel (Part-time)', status: 'Planned', department: 'Legal' },
        { title: 'Additional Engineers (+3)', status: 'Planned', department: 'Technology' },
        { title: 'Regional Sales Managers (+2)', status: 'Planned', department: 'Sales' }
      ]
    }
  ];

  const departmentStructure = [
    {
      name: 'Executive',
      head: 'CEO',
      headcount: { current: 1, target: 3 },
      color: 'purple',
      roles: ['CEO', 'COO (M9)', 'CFO Fractional (M9)']
    },
    {
      name: 'Technology',
      head: 'CTO',
      headcount: { current: 0, target: 10 },
      color: 'blue',
      roles: ['CTO', 'Full-Stack Dev (2)', 'Mobile Dev (2)', 'Backend Dev (2)', 'QA Engineer', 'DevOps', 'UX Designer']
    },
    {
      name: 'Marketing',
      head: 'CMO',
      headcount: { current: 0, target: 10 },
      color: 'pink',
      roles: ['CMO', 'Performance Lead', 'Content Lead', 'Influencer Manager', 'Brand Manager', 'Community Manager', 'Creative Designer (2)', 'PR Manager', 'Marketing Coordinator']
    },
    {
      name: 'Sales',
      head: 'Sales Director',
      headcount: { current: 0, target: 8 },
      color: 'green',
      roles: ['Sales Director', 'Merchant Sales Lead', 'Sales Reps (4)', 'Regional Managers (2)']
    },
    {
      name: 'Operations',
      head: 'Operations Manager',
      headcount: { current: 0, target: 4 },
      color: 'orange',
      roles: ['Operations Manager', 'Operations Associates (2)', 'Logistics Coordinator']
    },
    {
      name: 'Customer Support',
      head: 'Support Lead',
      headcount: { current: 0, target: 6 },
      color: 'cyan',
      roles: ['Support Lead', 'Support Agents (4)', 'Support Quality Analyst']
    },
    {
      name: 'Finance & HR',
      head: 'Finance Manager',
      headcount: { current: 0, target: 4 },
      color: 'yellow',
      roles: ['Finance Manager', 'Accountant', 'HR Manager', 'Office Admin']
    },
    {
      name: 'Analytics & Product',
      head: 'Product Manager',
      headcount: { current: 0, target: 3 },
      color: 'indigo',
      roles: ['Product Manager', 'Data Analyst', 'Business Analyst']
    }
  ];

  const cultureInitiatives = [
    {
      name: 'Nuqta Onboarding Program',
      description: 'Structured 2-week onboarding with buddy system, department rotations, and CEO coffee chat',
      timeline: 'Day 1-14',
      owner: 'HR + Hiring Manager'
    },
    {
      name: 'Weekly All-Hands',
      description: 'Friday 30-min team meeting: wins, learnings, upcoming priorities, shoutouts',
      timeline: 'Every Friday',
      owner: 'CEO'
    },
    {
      name: 'Monthly Town Hall',
      description: 'Full company update: metrics, strategy, Q&A, new hires introduction',
      timeline: 'First Monday monthly',
      owner: 'CEO + Leadership'
    },
    {
      name: 'Quarterly Offsites',
      description: 'Team building, strategic planning, skill workshops outside office',
      timeline: 'Every quarter',
      owner: 'HR + CEO'
    },
    {
      name: 'Learning Fridays',
      description: '2 hours dedicated to learning: courses, workshops, knowledge sharing',
      timeline: 'Every Friday 2-4 PM',
      owner: 'HR'
    },
    {
      name: 'Recognition Program',
      description: 'Weekly shoutouts, monthly Star Performer award, quarterly bonuses',
      timeline: 'Ongoing',
      owner: 'HR + Managers'
    },
    {
      name: 'Feedback Culture',
      description: '360-degree reviews, anonymous pulse surveys, open-door policy',
      timeline: 'Quarterly reviews',
      owner: 'HR'
    },
    {
      name: 'Wellness Program',
      description: 'Mental health support, gym allowance, flexible work options',
      timeline: 'Ongoing',
      owner: 'HR'
    }
  ];

  const hrKPIs = [
    { metric: 'Time to Hire', target: '< 30 days', current: '-', category: 'Recruitment' },
    { metric: 'Offer Acceptance Rate', target: '> 85%', current: '-', category: 'Recruitment' },
    { metric: 'Cost Per Hire', target: '< AED 8,000', current: '-', category: 'Recruitment' },
    { metric: '90-Day Retention', target: '> 90%', current: '-', category: 'Retention' },
    { metric: '12-Month Retention', target: '> 80%', current: '-', category: 'Retention' },
    { metric: 'Employee NPS (eNPS)', target: '> 40', current: '-', category: 'Engagement' },
    { metric: 'Training Hours/Employee', target: '> 40 hrs/year', current: '-', category: 'Development' },
    { metric: 'Internal Promotion Rate', target: '> 30%', current: '-', category: 'Development' },
    { metric: 'Diversity Ratio', target: '> 40% female', current: '-', category: 'Diversity' },
    { metric: 'Manager Effectiveness', target: '> 4.0/5.0', current: '-', category: 'Leadership' }
  ];

  const yearOneRoadmap = [
    { month: 1, focus: 'Foundation', activities: ['Set up HR systems', 'Define org structure', 'Start critical hires', 'Create job descriptions'] },
    { month: 2, focus: 'Core Team', activities: ['Hire CTO, CMO', 'Hire tech leads', 'Set up onboarding', 'Define comp bands'] },
    { month: 3, focus: 'Launch Ready', activities: ['Complete marketing team', 'Hire support lead', 'Launch training program', 'Finalize policies'] },
    { month: 4, focus: 'Stabilize', activities: ['Scale support team', 'First performance pulse', 'Team building event', 'Refine processes'] },
    { month: 5, focus: 'Growth Prep', activities: ['Hire analytics role', 'Leadership training', 'Succession planning', 'Benefits review'] },
    { month: 6, focus: 'Mid-Year Review', activities: ['Full performance reviews', 'Compensation adjustments', 'Engagement survey', 'Promotions'] },
    { month: 7, focus: 'Expansion', activities: ['Regional hiring starts', 'Manager training', 'Culture audit', 'ESOP rollout'] },
    { month: 8, focus: 'Scale Systems', activities: ['HRIS implementation', 'Automated workflows', 'Learning platform', 'Wellness program'] },
    { month: 9, focus: 'Leadership', activities: ['Hire COO', 'Fractional CFO', 'Executive coaching', 'Board prep'] },
    { month: 10, focus: 'Optimization', activities: ['Process improvements', 'Cost optimization', 'Talent mapping', 'Employer branding'] },
    { month: 11, focus: 'Year-End Prep', activities: ['Annual review prep', 'Bonus calculations', 'Next year planning', 'Budget proposals'] },
    { month: 12, focus: 'Year-End', activities: ['Annual reviews', 'Bonus payouts', 'Promotions', 'Celebration event'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-rose-900 to-gray-900">
      {/* Header */}
      <div className="bg-gray-900/80 border-b border-rose-500/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-rose-600 rounded-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">CHRO Master Plan</h1>
          </div>
          <p className="text-rose-300 ml-14">
            People strategy, organizational design & team building for Year 1
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800/60 rounded-xl p-4 border border-rose-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-rose-400" />
              <span className="text-rose-400 text-sm">Year 1 Target</span>
            </div>
            <p className="text-2xl font-bold text-white">50 People</p>
            <p className="text-gray-400 text-xs">8 departments</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-green-500/30">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-sm">Annual Payroll</span>
            </div>
            <p className="text-2xl font-bold text-white">AED 6.5M</p>
            <p className="text-gray-400 text-xs">At full scale</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-blue-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 text-sm">Hiring Phases</span>
            </div>
            <p className="text-2xl font-bold text-white">4 Phases</p>
            <p className="text-gray-400 text-xs">12-month plan</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-purple-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 text-sm">Core Values</span>
            </div>
            <p className="text-2xl font-bold text-white">6 Values</p>
            <p className="text-gray-400 text-xs">Culture foundation</p>
          </div>
        </div>

        {/* HR Vision & Values */}
        <div className="bg-gray-800/40 rounded-2xl border border-rose-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'vision' ? null : 'vision')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-rose-600/20 rounded-lg">
                <Heart className="w-6 h-6 text-rose-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Vision, Mission & Values</h2>
                <p className="text-gray-400 text-sm">Cultural foundation for Nuqta</p>
              </div>
            </div>
            {expandedSection === 'vision' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'vision' && (
            <div className="p-6 pt-0 space-y-6">
              {/* Mission */}
              <div className="bg-gradient-to-r from-rose-900/50 to-purple-900/50 rounded-xl p-6 border border-rose-500/30">
                <h3 className="text-rose-400 font-medium mb-2">People Mission</h3>
                <p className="text-white text-lg">{hrVision.mission}</p>
              </div>

              {/* Values */}
              <div>
                <h3 className="text-white font-medium mb-4">Core Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {hrVision.values.map((value, idx) => {
                    const Icon = value.icon;
                    return (
                      <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-5 h-5 text-rose-400" />
                          <h4 className="text-white font-medium">{value.name}</h4>
                        </div>
                        <p className="text-gray-400 text-sm">{value.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Hiring Timeline */}
        <div className="bg-gray-800/40 rounded-2xl border border-rose-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'hiring' ? null : 'hiring')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <UserPlus className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">12-Month Hiring Timeline</h2>
                <p className="text-gray-400 text-sm">Phased team building from 1 to 50</p>
              </div>
            </div>
            {expandedSection === 'hiring' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'hiring' && (
            <div className="p-6 pt-0 space-y-6">
              {hiringTimeline.map((phase, idx) => (
                <div key={idx} className={`rounded-xl border-l-4 ${
                  phase.priority === 'Critical' ? 'bg-red-900/20 border-red-500' :
                  phase.priority === 'High' ? 'bg-orange-900/20 border-orange-500' :
                  'bg-blue-900/20 border-blue-500'
                } p-4`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-white font-medium">{phase.phase}</h3>
                      <p className="text-gray-400 text-sm">Target: {phase.headcount} people</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      phase.priority === 'Critical' ? 'bg-red-600 text-white' :
                      phase.priority === 'High' ? 'bg-orange-600 text-white' :
                      'bg-blue-600 text-white'
                    }`}>{phase.priority}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {phase.roles.map((role, ridx) => (
                      <div key={ridx} className="flex items-center justify-between bg-gray-900/50 rounded-lg p-3">
                        <div>
                          <p className="text-white text-sm">{role.title}</p>
                          <p className="text-gray-500 text-xs">{role.department}</p>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          role.status === 'Filled' ? 'bg-green-600 text-white' :
                          role.status === 'Hiring' ? 'bg-yellow-600 text-black' :
                          'bg-gray-600 text-gray-200'
                        }`}>{role.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Department Structure */}
        <div className="bg-gray-800/40 rounded-2xl border border-rose-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'departments' ? null : 'departments')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-600/20 rounded-lg">
                <Building2 className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Organizational Structure</h2>
                <p className="text-gray-400 text-sm">8 departments, 50 roles</p>
              </div>
            </div>
            {expandedSection === 'departments' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'departments' && (
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {departmentStructure.map((dept, idx) => (
                  <div key={idx} className={`bg-gray-900/50 rounded-xl p-4 border border-${dept.color}-500/30`}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-medium">{dept.name}</h4>
                      <span className="text-gray-400 text-xs">{dept.headcount.current}/{dept.headcount.target}</span>
                    </div>
                    <p className="text-rose-400 text-sm mb-3">Head: {dept.head}</p>
                    <ul className="space-y-1">
                      {dept.roles.map((role, ridx) => (
                        <li key={ridx} className="text-gray-400 text-xs flex items-center gap-1">
                          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Culture Initiatives */}
        <div className="bg-gray-800/40 rounded-2xl border border-rose-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'culture' ? null : 'culture')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-600/20 rounded-lg">
                <Star className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Culture & Engagement Initiatives</h2>
                <p className="text-gray-400 text-sm">Programs to build world-class culture</p>
              </div>
            </div>
            {expandedSection === 'culture' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'culture' && (
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cultureInitiatives.map((initiative, idx) => (
                  <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{initiative.name}</h4>
                      <span className="text-green-400 text-xs">{initiative.timeline}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{initiative.description}</p>
                    <p className="text-gray-500 text-xs">Owner: {initiative.owner}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* HR KPIs */}
        <div className="bg-gray-800/40 rounded-2xl border border-rose-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'kpis' ? null : 'kpis')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-600/20 rounded-lg">
                <BarChart3 className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">HR KPIs & Metrics</h2>
                <p className="text-gray-400 text-sm">Measuring people success</p>
              </div>
            </div>
            {expandedSection === 'kpis' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'kpis' && (
            <div className="p-6 pt-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-3 px-4 text-gray-400 font-medium">Metric</th>
                      <th className="py-3 px-4 text-gray-400 font-medium">Target</th>
                      <th className="py-3 px-4 text-gray-400 font-medium">Current</th>
                      <th className="py-3 px-4 text-gray-400 font-medium">Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hrKPIs.map((kpi, idx) => (
                      <tr key={idx} className="border-b border-gray-700/50 hover:bg-gray-800/30">
                        <td className="py-3 px-4 text-white">{kpi.metric}</td>
                        <td className="py-3 px-4 text-green-400">{kpi.target}</td>
                        <td className="py-3 px-4 text-gray-400">{kpi.current}</td>
                        <td className="py-3 px-4">
                          <span className="text-xs bg-rose-600/20 text-rose-300 px-2 py-1 rounded">{kpi.category}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Year 1 Roadmap */}
        <div className="bg-gray-800/40 rounded-2xl border border-rose-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'roadmap' ? null : 'roadmap')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-600/20 rounded-lg">
                <Calendar className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Year 1 HR Roadmap</h2>
                <p className="text-gray-400 text-sm">Month-by-month people priorities</p>
              </div>
            </div>
            {expandedSection === 'roadmap' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'roadmap' && (
            <div className="p-6 pt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {yearOneRoadmap.map((month, idx) => (
                  <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cyan-400 font-bold">Month {month.month}</span>
                      <span className="text-white text-xs">{month.focus}</span>
                    </div>
                    <ul className="space-y-1">
                      {month.activities.map((activity, aidx) => (
                        <li key={aidx} className="text-gray-400 text-xs flex items-start gap-1">
                          <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Reference */}
        <div className="bg-gradient-to-r from-rose-900/50 to-purple-900/50 rounded-2xl border border-rose-500/30 p-6">
          <h3 className="text-xl font-bold text-white mb-4">🎯 CHRO Quick Reference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-rose-400 font-medium mb-2">Week 1 Priorities</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>✓ Finalize org chart</li>
                <li>✓ Post critical roles</li>
                <li>✓ Set up ATS system</li>
                <li>✓ Create JD templates</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-blue-400 font-medium mb-2">Month 1 Goals</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>✓ 8-10 people hired</li>
                <li>✓ Core team in place</li>
                <li>✓ Policies documented</li>
                <li>✓ Onboarding ready</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-green-400 font-medium mb-2">Quarter 1 Goals</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>✓ 18 people on board</li>
                <li>✓ All leads hired</li>
                <li>✓ Culture established</li>
                <li>✓ First reviews done</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-medium mb-2">Key Contacts</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>CEO: [Name]</li>
                <li>Legal: [Name]</li>
                <li>Recruiter: [Name]</li>
                <li>Payroll: [Name]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
