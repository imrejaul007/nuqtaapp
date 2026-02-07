'use client';

import React, { useState } from 'react';
import {
  Users, FileText, Calendar, Clock, Heart, Shield, DollarSign, Gift,
  CheckCircle, AlertTriangle, BookOpen, Home, Plane, Baby, Briefcase,
  ChevronDown, ChevronUp, Copy, Check, Zap, Star, Target, Settings,
  GraduationCap, Coffee, Award, Bell, MessageSquare, Globe, Building2
} from 'lucide-react';

export default function HROperationsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('onboarding');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const onboardingProgram = {
    preboarding: [
      { task: 'Send welcome email with start date details', owner: 'HR', when: '1 week before' },
      { task: 'Share onboarding schedule and first week agenda', owner: 'HR', when: '3 days before' },
      { task: 'Set up workstation, laptop, accounts', owner: 'IT/Ops', when: '2 days before' },
      { task: 'Assign buddy and notify hiring manager', owner: 'HR', when: '2 days before' },
      { task: 'Prepare welcome kit (swag, materials)', owner: 'Ops', when: '1 day before' }
    ],
    week1: [
      { day: 'Day 1', activities: ['Welcome session with CEO (30 min)', 'HR paperwork and policies review', 'Office tour and introductions', 'Buddy lunch', 'IT setup and tool access'] },
      { day: 'Day 2', activities: ['Company overview: mission, vision, values', 'Product demo and walkthrough', 'Department overview presentations', 'Meet direct team members'] },
      { day: 'Day 3', activities: ['Role-specific training begins', 'Meet cross-functional stakeholders', 'Start on first small task', 'Buddy check-in'] },
      { day: 'Day 4', activities: ['Continue role training', 'Shadowing sessions', 'First 1:1 with manager', 'Q&A session'] },
      { day: 'Day 5', activities: ['Week 1 wrap-up with HR', 'Feedback collection', 'Week 2 planning', 'Team social/welcome'] }
    ],
    week2: [
      { focus: 'Deep Dive', activities: ['Role-specific deep training', 'Start on real projects', 'Cross-team collaboration', 'Process and tools mastery'] }
    ],
    checkpoints: [
      { time: 'Day 1', focus: 'Welcome & Admin', owner: 'HR' },
      { time: 'Day 3', focus: 'Buddy Check-in', owner: 'Buddy' },
      { time: 'Day 5', focus: 'Week 1 Feedback', owner: 'HR' },
      { time: 'Day 14', focus: 'Manager Review', owner: 'Manager' },
      { time: 'Day 30', focus: 'First Month Review', owner: 'Manager + HR' },
      { time: 'Day 60', focus: 'Progress Check', owner: 'Manager' },
      { time: 'Day 90', focus: 'Probation Review', owner: 'Manager + HR' }
    ]
  };

  const policies = [
    {
      name: 'Working Hours',
      category: 'Time & Attendance',
      details: [
        'Standard hours: Sunday-Thursday, 9 AM - 6 PM (45 hrs/week)',
        'Core hours: 10 AM - 4 PM (must be available)',
        'Flexible start: 8-10 AM based on manager approval',
        'Friday: Half day on request (based on workload)',
        'Remote work: 2 days/week after probation'
      ]
    },
    {
      name: 'Annual Leave',
      category: 'Leave',
      details: [
        '22 working days per year (UAE standard)',
        'Accrual: 1.83 days per month',
        'Carryover: Max 5 days to next year',
        'Advance booking: Min 2 weeks for 5+ days',
        'Manager approval required'
      ]
    },
    {
      name: 'Sick Leave',
      category: 'Leave',
      details: [
        '15 days per year (UAE law)',
        'First 2 days: Full salary',
        'Days 3-45: Half salary (with medical certificate)',
        'Medical certificate required after 2 consecutive days',
        'Notify manager ASAP, HR by 10 AM'
      ]
    },
    {
      name: 'Maternity Leave',
      category: 'Leave',
      details: [
        '60 days maternity leave (UAE law)',
        '45 days full pay, 15 days half pay',
        'Extended unpaid leave available (up to 100 days)',
        'Reduced hours (1 hr/day) for 6 months after return',
        '5 days paternity leave (full pay)'
      ]
    },
    {
      name: 'Public Holidays',
      category: 'Leave',
      details: [
        'All UAE public holidays observed',
        'New Year (1 day), Eid Al Fitr (3-4 days)',
        'Eid Al Adha (3-4 days), National Day (2 days)',
        'Islamic New Year (1 day), Prophet Birthday (1 day)',
        'Approx. 10-12 days per year'
      ]
    },
    {
      name: 'Remote Work',
      category: 'Work Arrangements',
      details: [
        'Available after 3-month probation',
        'Up to 2 days per week',
        'Manager approval required',
        'Core hours must be maintained',
        'Reliable internet and workspace required'
      ]
    },
    {
      name: 'Dress Code',
      category: 'Workplace',
      details: [
        'Business casual (Mon-Thu)',
        'Casual Friday',
        'Smart dress for client/investor meetings',
        'Nuqta branded wear encouraged',
        'Cultural sensitivity required'
      ]
    },
    {
      name: 'Expense Policy',
      category: 'Finance',
      details: [
        'All business expenses require pre-approval',
        'Submit receipts within 5 working days',
        'Travel: Economy class, 3-star+ hotels',
        'Meals: AED 150 max per day (travel)',
        'Reimbursement within 10 working days'
      ]
    },
    {
      name: 'Probation',
      category: 'Employment',
      details: [
        '3-month probation period (6 months for senior)',
        'Performance review at 45 and 90 days',
        'Either party can terminate with 14 days notice',
        'No annual leave during first month',
        'Full benefits after confirmation'
      ]
    },
    {
      name: 'Notice Period',
      category: 'Employment',
      details: [
        'During probation: 14 days',
        'After probation: 30 days',
        'Senior roles: 60-90 days',
        'Garden leave may apply',
        'Handover document required'
      ]
    },
    {
      name: 'Confidentiality',
      category: 'Legal',
      details: [
        'All company information is confidential',
        'NDA signed at onboarding',
        'No sharing of financials, strategy, code',
        'Social media guidelines apply',
        'Breach may result in termination'
      ]
    },
    {
      name: 'Code of Conduct',
      category: 'Workplace',
      details: [
        'Professional behavior always',
        'Respect for all colleagues',
        'No harassment or discrimination',
        'Report concerns to HR',
        'Ethics violations: zero tolerance'
      ]
    }
  ];

  const benefits = [
    { category: 'Health', items: ['Medical insurance (employee + family)', 'Dental coverage', 'Annual health checkup', 'Mental health support'], icon: Heart },
    { category: 'Financial', items: ['Competitive salary', 'ESOP (equity options)', 'Performance bonus', 'Referral bonus (AED 5K)'], icon: DollarSign },
    { category: 'Time Off', items: ['22 days annual leave', '15 days sick leave', 'Maternity/Paternity leave', 'Compassionate leave'], icon: Calendar },
    { category: 'Learning', items: ['Learning budget (AED 5K/year)', 'Conference attendance', 'Course subscriptions', 'Friday learning time'], icon: GraduationCap },
    { category: 'Workplace', items: ['Remote work (2 days/week)', 'Flexible hours', 'Modern office space', 'Free snacks & coffee'], icon: Coffee },
    { category: 'Perks', items: ['Phone allowance', 'Laptop provided', 'Team events', 'Birthday off'], icon: Gift }
  ];

  const hrProcesses = [
    {
      process: 'Hiring',
      steps: [
        'Hiring manager submits req to HR',
        'HR reviews and posts job',
        'Screen resumes (2-3 days)',
        'Phone screen (30 min)',
        'Skills assessment (1-2 hrs)',
        'Interview rounds (2-3)',
        'Reference check',
        'Offer and negotiation',
        'Onboarding prep'
      ],
      sla: '30 days avg'
    },
    {
      process: 'Offboarding',
      steps: [
        'Resignation acceptance',
        'Exit interview scheduled',
        'Knowledge transfer plan',
        'Asset return checklist',
        'Access revocation',
        'Final settlement calc',
        'Exit interview',
        'Farewell and handover',
        'Final payment'
      ],
      sla: 'Notice period'
    },
    {
      process: 'Performance Review',
      steps: [
        'Self-assessment (employee)',
        'Manager evaluation',
        'Peer feedback (optional)',
        '1:1 review meeting',
        'Development plan created',
        'Compensation review',
        'Promotion discussion',
        'Goals for next period'
      ],
      sla: 'Bi-annual'
    },
    {
      process: 'Grievance',
      steps: [
        'Employee raises concern',
        'HR acknowledges (24 hrs)',
        'Investigation begins',
        'Stakeholder interviews',
        'Findings documented',
        'Resolution proposed',
        'Employee informed',
        'Appeal process (if needed)'
      ],
      sla: '14 days max'
    }
  ];

  const hrCalendar = [
    { month: 'January', activities: ['Annual goal setting', 'Compensation review', 'New year kickoff'] },
    { month: 'February', activities: ['Learning plan finalization', 'Team building event'] },
    { month: 'March', activities: ['Q1 performance check-in', 'Pulse survey'] },
    { month: 'April', activities: ['Mid-year planning', 'Training programs'] },
    { month: 'May', activities: ['Employee engagement survey', 'Summer internship program'] },
    { month: 'June', activities: ['Mid-year reviews', 'Promotion cycle'] },
    { month: 'July', activities: ['H2 goal setting', 'Team offsites'] },
    { month: 'August', activities: ['Talent review', 'Succession planning'] },
    { month: 'September', activities: ['Q3 check-in', 'Benefits review'] },
    { month: 'October', activities: ['Annual review prep', 'Engagement action plans'] },
    { month: 'November', activities: ['Year-end reviews begin', 'Budget planning'] },
    { month: 'December', activities: ['Year-end celebrations', 'Bonus payouts', 'Next year planning'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900">
      {/* Header */}
      <div className="bg-gray-900/80 border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-emerald-600 rounded-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">HR Operations Manual</h1>
          </div>
          <p className="text-emerald-300 ml-14">
            Policies, benefits, onboarding & HR processes for the team
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800/60 rounded-xl p-4 border border-emerald-500/30">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 text-sm">Policies</span>
            </div>
            <p className="text-2xl font-bold text-white">12 Policies</p>
            <p className="text-gray-400 text-xs">UAE compliant</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-pink-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-pink-400" />
              <span className="text-pink-400 text-sm">Benefits</span>
            </div>
            <p className="text-2xl font-bold text-white">24+ Perks</p>
            <p className="text-gray-400 text-xs">6 categories</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-blue-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 text-sm">Annual Leave</span>
            </div>
            <p className="text-2xl font-bold text-white">22 Days</p>
            <p className="text-gray-400 text-xs">+ public holidays</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-purple-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 text-sm">Probation</span>
            </div>
            <p className="text-2xl font-bold text-white">3 Months</p>
            <p className="text-gray-400 text-xs">With reviews</p>
          </div>
        </div>

        {/* Onboarding Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-emerald-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'onboarding' ? null : 'onboarding')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-600/20 rounded-lg">
                <Users className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Onboarding Program</h2>
                <p className="text-gray-400 text-sm">2-week structured onboarding with 7 checkpoints</p>
              </div>
            </div>
            {expandedSection === 'onboarding' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'onboarding' && (
            <div className="p-6 pt-0 space-y-6">
              {/* Pre-boarding */}
              <div>
                <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  Pre-boarding (Before Day 1)
                </h3>
                <div className="space-y-2">
                  {onboardingProgram.preboarding.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-900/50 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{item.task}</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-emerald-400">{item.owner}</span>
                        <span className="text-gray-500">{item.when}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Week 1 */}
              <div>
                <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  Week 1: Foundation
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  {onboardingProgram.week1.map((day, idx) => (
                    <div key={idx} className="bg-gray-900/50 rounded-lg p-3">
                      <h4 className="text-blue-400 font-medium text-sm mb-2">{day.day}</h4>
                      <ul className="space-y-1">
                        {day.activities.map((activity, aidx) => (
                          <li key={aidx} className="text-gray-400 text-xs flex items-start gap-1">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Checkpoints */}
              <div>
                <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-purple-400" />
                  Onboarding Checkpoints
                </h3>
                <div className="flex flex-wrap gap-3">
                  {onboardingProgram.checkpoints.map((checkpoint, idx) => (
                    <div key={idx} className="bg-purple-900/30 border border-purple-500/30 rounded-lg px-4 py-2">
                      <span className="text-purple-400 font-medium text-sm">{checkpoint.time}</span>
                      <p className="text-gray-300 text-xs">{checkpoint.focus}</p>
                      <p className="text-gray-500 text-xs">{checkpoint.owner}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Policies Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-emerald-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'policies' ? null : 'policies')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">HR Policies</h2>
                <p className="text-gray-400 text-sm">12 key policies - UAE labor law compliant</p>
              </div>
            </div>
            {expandedSection === 'policies' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'policies' && (
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {policies.map((policy, idx) => (
                  <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{policy.name}</h4>
                      <span className="text-xs bg-blue-600/20 text-blue-300 px-2 py-0.5 rounded">{policy.category}</span>
                    </div>
                    <ul className="space-y-1">
                      {policy.details.map((detail, didx) => (
                        <li key={didx} className="text-gray-400 text-xs flex items-start gap-1">
                          <div className="w-1 h-1 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-emerald-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'benefits' ? null : 'benefits')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-pink-600/20 rounded-lg">
                <Gift className="w-6 h-6 text-pink-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Benefits & Perks</h2>
                <p className="text-gray-400 text-sm">Comprehensive benefits package across 6 categories</p>
              </div>
            </div>
            {expandedSection === 'benefits' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'benefits' && (
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-5 h-5 text-pink-400" />
                        <h4 className="text-white font-medium">{benefit.category}</h4>
                      </div>
                      <ul className="space-y-2">
                        {benefit.items.map((item, iidx) => (
                          <li key={iidx} className="flex items-center gap-2 text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* HR Processes Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-emerald-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'processes' ? null : 'processes')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-600/20 rounded-lg">
                <Settings className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">HR Processes & Workflows</h2>
                <p className="text-gray-400 text-sm">Standard processes with SLAs</p>
              </div>
            </div>
            {expandedSection === 'processes' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'processes' && (
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hrProcesses.map((proc, idx) => (
                  <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-white font-medium text-lg">{proc.process}</h4>
                      <span className="text-xs bg-orange-600/20 text-orange-300 px-2 py-1 rounded">SLA: {proc.sla}</span>
                    </div>
                    <div className="space-y-2">
                      {proc.steps.map((step, sidx) => (
                        <div key={sidx} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-orange-600/20 rounded-full flex items-center justify-center text-orange-400 text-xs font-bold">
                            {sidx + 1}
                          </div>
                          <span className="text-gray-300 text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* HR Calendar Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-emerald-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'calendar' ? null : 'calendar')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-600/20 rounded-lg">
                <Calendar className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">HR Annual Calendar</h2>
                <p className="text-gray-400 text-sm">Month-by-month HR activities</p>
              </div>
            </div>
            {expandedSection === 'calendar' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'calendar' && (
            <div className="p-6 pt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {hrCalendar.map((month, idx) => (
                  <div key={idx} className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                    <h4 className="text-purple-400 font-medium text-sm mb-2">{month.month}</h4>
                    <ul className="space-y-1">
                      {month.activities.map((activity, aidx) => (
                        <li key={aidx} className="text-gray-400 text-xs flex items-start gap-1">
                          <div className="w-1 h-1 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
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
        <div className="bg-gradient-to-r from-emerald-900/50 to-blue-900/50 rounded-2xl border border-emerald-500/30 p-6">
          <h3 className="text-xl font-bold text-white mb-4">📋 HR Quick Reference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-emerald-400 font-medium mb-2">Key Contacts</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>HR Manager: [Name]</li>
                <li>Payroll: [Name]</li>
                <li>IT Support: [Name]</li>
                <li>Office Admin: [Name]</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-blue-400 font-medium mb-2">Important Dates</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>Salary: 28th of month</li>
                <li>Reviews: Jan & July</li>
                <li>Bonus: December</li>
                <li>Benefits renewal: Jan</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-medium mb-2">Leave Request</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>Submit via HRIS</li>
                <li>Manager approval needed</li>
                <li>2 weeks notice (5+ days)</li>
                <li>Emergency: call HR</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-orange-400 font-medium mb-2">Raise Concerns</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>Talk to manager first</li>
                <li>Escalate to HR</li>
                <li>Anonymous: [email]</li>
                <li>CEO open door policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
