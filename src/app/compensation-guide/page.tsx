'use client';

import React, { useState } from 'react';
import {
  DollarSign, TrendingUp, Award, Star, Gift, Heart, Users, Target,
  CheckCircle, ChevronDown, ChevronUp, Copy, Check, Briefcase, Clock,
  BarChart3, Percent, Calendar, Zap, Shield, Crown, Building2, Coins
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function CompensationGuidePage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('salary');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const salaryBands = [
    {
      level: 'C-Level',
      color: 'purple',
      roles: [
        { title: 'CEO', range: '40,000 - 50,000', equity: '40-60%', bonus: '50-100%' },
        { title: 'CTO', range: '30,000 - 40,000', equity: '3-5%', bonus: '30-50%' },
        { title: 'CMO', range: '30,000 - 40,000', equity: '2-4%', bonus: '30-50%' },
        { title: 'COO', range: '35,000 - 45,000', equity: '2-4%', bonus: '30-50%' },
        { title: 'CFO (Fractional)', range: '15,000 - 25,000', equity: '0.5-1%', bonus: '20-30%' }
      ]
    },
    {
      level: 'Director',
      color: 'blue',
      roles: [
        { title: 'Sales Director', range: '25,000 - 35,000', equity: '1-2%', bonus: '30-50%' },
        { title: 'Engineering Director', range: '28,000 - 38,000', equity: '1-2%', bonus: '25-40%' },
        { title: 'Marketing Director', range: '25,000 - 35,000', equity: '1-2%', bonus: '25-40%' }
      ]
    },
    {
      level: 'Senior / Lead',
      color: 'green',
      roles: [
        { title: 'Performance Marketing Lead', range: '18,000 - 25,000', equity: '0.5-1%', bonus: '20-30%' },
        { title: 'Content & Social Lead', range: '15,000 - 22,000', equity: '0.3-0.5%', bonus: '15-25%' },
        { title: 'Merchant Sales Lead', range: '15,000 - 22,000', equity: '0.5-1%', bonus: '25-40%' },
        { title: 'Senior Full-Stack Developer', range: '20,000 - 28,000', equity: '0.5-1%', bonus: '15-25%' },
        { title: 'Senior Mobile Developer', range: '18,000 - 25,000', equity: '0.3-0.5%', bonus: '15-25%' },
        { title: 'Customer Support Lead', range: '12,000 - 18,000', equity: '0.3-0.5%', bonus: '15-25%' },
        { title: 'Operations Manager', range: '15,000 - 22,000', equity: '0.5-1%', bonus: '15-25%' },
        { title: 'Finance Manager', range: '18,000 - 25,000', equity: '0.3-0.5%', bonus: '15-25%' },
        { title: 'HR Manager', range: '15,000 - 22,000', equity: '0.3-0.5%', bonus: '15-25%' },
        { title: 'Product Manager', range: '22,000 - 30,000', equity: '0.5-1%', bonus: '20-30%' }
      ]
    },
    {
      level: 'Mid-Level',
      color: 'yellow',
      roles: [
        { title: 'Backend Developer', range: '15,000 - 20,000', equity: '0.2-0.3%', bonus: '10-20%' },
        { title: 'Influencer Manager', range: '12,000 - 18,000', equity: '0.2-0.3%', bonus: '15-25%' },
        { title: 'Brand Manager', range: '15,000 - 22,000', equity: '0.2-0.3%', bonus: '15-25%' },
        { title: 'Data Analyst', range: '14,000 - 20,000', equity: '0.2-0.3%', bonus: '10-20%' },
        { title: 'Creative Designer', range: '14,000 - 20,000', equity: '0.1-0.2%', bonus: '10-20%' },
        { title: 'DevOps Engineer', range: '18,000 - 24,000', equity: '0.2-0.3%', bonus: '10-20%' },
        { title: 'QA Engineer', range: '12,000 - 16,000', equity: '0.1-0.2%', bonus: '10-15%' },
        { title: 'Sales Representative', range: '10,000 - 15,000', equity: '0.1-0.2%', bonus: '20-40%' },
        { title: 'Community Manager', range: '10,000 - 15,000', equity: '0.1-0.2%', bonus: '10-20%' },
        { title: 'Partnerships Manager', range: '18,000 - 25,000', equity: '0.3-0.5%', bonus: '20-30%' }
      ]
    },
    {
      level: 'Junior / Entry',
      color: 'gray',
      roles: [
        { title: 'Junior Developer', range: '10,000 - 14,000', equity: '0.1%', bonus: '5-15%' },
        { title: 'Marketing Coordinator', range: '8,000 - 12,000', equity: '0.1%', bonus: '10-15%' },
        { title: 'Customer Support Agent', range: '6,000 - 9,000', equity: '0.05%', bonus: '5-15%' },
        { title: 'Operations Associate', range: '7,000 - 10,000', equity: '0.05%', bonus: '5-15%' },
        { title: 'Office Admin', range: '6,000 - 9,000', equity: '0.05%', bonus: '5-10%' },
        { title: 'Accountant', range: '10,000 - 15,000', equity: '0.1%', bonus: '10-15%' }
      ]
    }
  ];

  const esopStructure = {
    totalPool: '15-20%',
    vestingSchedule: [
      { year: 1, vested: '0%', notes: '1-year cliff' },
      { year: 2, vested: '25%', notes: 'First vest after cliff' },
      { year: 3, vested: '50%', notes: 'Monthly vesting' },
      { year: 4, vested: '75%', notes: 'Monthly vesting' },
      { year: 5, vested: '100%', notes: 'Fully vested' }
    ],
    keyTerms: [
      { term: 'Cliff Period', value: '1 year', description: 'No equity vests until 1 year completed' },
      { term: 'Vesting Schedule', value: '4 years', description: 'Monthly vesting after cliff' },
      { term: 'Exercise Period', value: '90 days', description: 'After leaving, time to exercise options' },
      { term: 'Acceleration', value: 'Single trigger', description: 'Full vest on acquisition (key roles)' },
      { term: 'Strike Price', value: 'FMV at grant', description: 'Based on latest valuation' }
    ],
    allocation: [
      { category: 'C-Suite', percentage: '8-12%', notes: 'CEO, CTO, CMO, COO, CFO' },
      { category: 'Directors & Leads', percentage: '3-5%', notes: 'Senior leadership' },
      { category: 'Individual Contributors', percentage: '2-3%', notes: 'Engineers, marketers, etc.' },
      { category: 'Future Hires Reserve', percentage: '2-3%', notes: 'For scaling team' }
    ]
  };

  const bonusStructure = [
    {
      type: 'Performance Bonus',
      frequency: 'Annual',
      range: '10-50% of salary',
      criteria: [
        'Individual KPI achievement (40%)',
        'Team goals achievement (30%)',
        'Company revenue targets (30%)'
      ],
      payout: 'December / January'
    },
    {
      type: 'Sales Commission',
      frequency: 'Monthly/Quarterly',
      range: '20-40% of base',
      criteria: [
        'Merchant signups: AED 500 per merchant',
        'Revenue target achievement',
        'Accelerators for overachievement'
      ],
      payout: 'Following month'
    },
    {
      type: 'Referral Bonus',
      frequency: 'Per hire',
      range: 'AED 5,000',
      criteria: [
        'Referred hire completes 6 months',
        'Paid in 2 installments (start + 6 months)',
        'All roles eligible'
      ],
      payout: 'At hire + 6 months'
    },
    {
      type: 'Spot Bonus',
      frequency: 'Ad-hoc',
      range: 'AED 500 - 5,000',
      criteria: [
        'Exceptional project delivery',
        'Going above and beyond',
        'Manager discretion with HR approval'
      ],
      payout: 'Same month'
    },
    {
      type: 'Retention Bonus',
      frequency: 'Annual',
      range: '1-3 months salary',
      criteria: [
        'Key employees only',
        'Commitment to stay additional year',
        'CEO approval required'
      ],
      payout: 'Start of retention period'
    }
  ];

  const benefitsPackage = [
    {
      category: 'Health & Wellness',
      icon: Heart,
      benefits: [
        { name: 'Medical Insurance', value: 'Employee + Family', provider: 'Daman/Oman Insurance' },
        { name: 'Dental Coverage', value: 'Included', provider: 'As part of medical' },
        { name: 'Annual Health Check', value: 'AED 1,000', provider: 'Annual allowance' },
        { name: 'Mental Health', value: 'Included', provider: 'EAP Program' },
        { name: 'Gym Allowance', value: 'AED 300/month', provider: 'Reimbursement' }
      ]
    },
    {
      category: 'Time Off',
      icon: Calendar,
      benefits: [
        { name: 'Annual Leave', value: '22 days', provider: 'Per UAE law' },
        { name: 'Sick Leave', value: '15 days', provider: 'Per UAE law' },
        { name: 'Maternity Leave', value: '60 days', provider: 'Per UAE law' },
        { name: 'Paternity Leave', value: '5 days', provider: 'Company policy' },
        { name: 'Birthday Off', value: '1 day', provider: 'Company perk' }
      ]
    },
    {
      category: 'Financial',
      icon: DollarSign,
      benefits: [
        { name: 'Gratuity', value: 'Per UAE law', provider: '21 days per year' },
        { name: 'ESOP', value: 'Based on role', provider: 'See ESOP section' },
        { name: 'Performance Bonus', value: '10-50%', provider: 'Annual' },
        { name: 'Referral Bonus', value: 'AED 5,000', provider: 'Per successful hire' },
        { name: 'Salary Advance', value: 'Up to 1 month', provider: 'Emergency' }
      ]
    },
    {
      category: 'Work Setup',
      icon: Building2,
      benefits: [
        { name: 'Laptop', value: 'MacBook Pro', provider: 'Company provided' },
        { name: 'Phone Allowance', value: 'AED 200/month', provider: 'Reimbursement' },
        { name: 'Internet Allowance', value: 'AED 150/month', provider: 'For remote work' },
        { name: 'Remote Work', value: '2 days/week', provider: 'Post-probation' },
        { name: 'Flexible Hours', value: '8-10 AM start', provider: 'Core hours apply' }
      ]
    },
    {
      category: 'Learning',
      icon: Award,
      benefits: [
        { name: 'Learning Budget', value: 'AED 5,000/year', provider: 'Courses, books, etc.' },
        { name: 'Conference Attendance', value: '1 per year', provider: 'Approved events' },
        { name: 'Certifications', value: 'Covered', provider: 'Role-relevant' },
        { name: 'Learning Friday', value: '2 hrs/week', provider: 'Self-development time' },
        { name: 'Mentorship', value: 'Included', provider: 'Internal program' }
      ]
    },
    {
      category: 'Perks',
      icon: Gift,
      benefits: [
        { name: 'Team Lunches', value: 'Weekly', provider: 'Company-sponsored' },
        { name: 'Snacks & Coffee', value: 'Unlimited', provider: 'Office pantry' },
        { name: 'Team Events', value: 'Monthly', provider: 'Social activities' },
        { name: 'Nuqta Credits', value: 'AED 500/month', provider: 'App rewards' },
        { name: 'Annual Retreat', value: 'Included', provider: 'Company offsite' }
      ]
    }
  ];

  const compensationPhilosophy = [
    { principle: 'Market Competitive', description: 'We pay at or above 50th percentile for UAE tech startups' },
    { principle: 'Equity Participation', description: 'Every employee is an owner through ESOP' },
    { principle: 'Pay for Performance', description: 'Top performers earn significantly more through bonuses' },
    { principle: 'Internal Equity', description: 'Fair and consistent pay across similar roles' },
    { principle: 'Transparency', description: 'Clear salary bands and promotion criteria' },
    { principle: 'Total Rewards', description: 'Compensation = Base + Equity + Bonus + Benefits' }
  ];

  const salaryReviewProcess = [
    { step: 'Self Assessment', timing: 'January', description: 'Employee documents achievements' },
    { step: 'Manager Review', timing: 'January', description: 'Manager evaluates performance' },
    { step: 'Calibration', timing: 'February', description: 'Leadership aligns on ratings' },
    { step: 'Budget Allocation', timing: 'February', description: 'Finance confirms budget' },
    { step: 'Compensation Decisions', timing: 'March', description: 'Individual decisions made' },
    { step: 'Communication', timing: 'March', description: 'Managers communicate changes' },
    { step: 'Implementation', timing: 'April', description: 'New salaries take effect' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900">
      {/* Header */}
      <div className="bg-gray-900/80 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-amber-600 rounded-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Compensation & Benefits Guide</h1>
          </div>
          <p className="text-amber-300 ml-14">
            Salary bands, ESOP structure, bonuses & complete benefits package
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800/60 rounded-xl p-4 border border-amber-500/30">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 text-sm">Salary Levels</span>
            </div>
            <p className="text-2xl font-bold text-white">5 Bands</p>
            <p className="text-gray-400 text-xs">Entry to C-Level</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-purple-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Coins className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 text-sm">ESOP Pool</span>
            </div>
            <p className="text-2xl font-bold text-white">15-20%</p>
            <p className="text-gray-400 text-xs">For team</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-green-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-sm">Bonus Types</span>
            </div>
            <p className="text-2xl font-bold text-white">5 Types</p>
            <p className="text-gray-400 text-xs">Performance + more</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-pink-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-pink-400" />
              <span className="text-pink-400 text-sm">Benefits</span>
            </div>
            <p className="text-2xl font-bold text-white">30+ Perks</p>
            <p className="text-gray-400 text-xs">6 categories</p>
          </div>
        </div>

        {/* Compensation Philosophy */}
        <div className="bg-gradient-to-r from-amber-900/50 to-orange-900/50 rounded-2xl border border-amber-500/30 p-6 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">💰 Our Compensation Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {compensationPhilosophy.map((item, idx) => (
              <div key={idx} className="bg-gray-900/50 rounded-lg p-4">
                <h4 className="text-amber-400 font-medium mb-1">{item.principle}</h4>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Salary Bands Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-amber-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'salary' ? null : 'salary')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-600/20 rounded-lg">
                <BarChart3 className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Salary Bands by Level</h2>
                <p className="text-gray-400 text-sm">Monthly salary ranges (AED) with equity and bonus targets</p>
              </div>
            </div>
            {expandedSection === 'salary' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'salary' && (
            <div className="p-6 pt-0 space-y-6">
              {salaryBands.map((band, idx) => (
                <div key={idx} className={`border-l-4 border-${band.color}-500 pl-4`}>
                  <h3 className={`text-${band.color}-400 font-medium mb-3`}>{band.level}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="py-2 px-3 text-gray-400 font-medium text-sm">Role</th>
                          <th className="py-2 px-3 text-gray-400 font-medium text-sm">Salary Range (AED)</th>
                          <th className="py-2 px-3 text-gray-400 font-medium text-sm">Equity</th>
                          <th className="py-2 px-3 text-gray-400 font-medium text-sm">Bonus Target</th>
                        </tr>
                      </thead>
                      <tbody>
                        {band.roles.map((role, ridx) => (
                          <tr key={ridx} className="border-b border-gray-700/50 hover:bg-gray-800/30">
                            <td className="py-2 px-3 text-white text-sm">{role.title}</td>
                            <td className="py-2 px-3 text-green-400 text-sm font-medium">{role.range}</td>
                            <td className="py-2 px-3 text-purple-400 text-sm">{role.equity}</td>
                            <td className="py-2 px-3 text-amber-400 text-sm">{role.bonus}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
              <p className="text-gray-400 text-sm mt-4">
                * All salaries are gross monthly amounts in AED. Actual offers depend on experience, skills, and market conditions.
              </p>
            </div>
          )}
        </div>

        {/* ESOP Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-amber-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'esop' ? null : 'esop')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-600/20 rounded-lg">
                <Coins className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">ESOP (Equity) Structure</h2>
                <p className="text-gray-400 text-sm">Employee Stock Option Plan - become an owner</p>
              </div>
            </div>
            {expandedSection === 'esop' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'esop' && (
            <div className="p-6 pt-0 space-y-6">
              {/* Vesting Schedule */}
              <div>
                <h3 className="text-white font-medium mb-3">Vesting Schedule (4 Years)</h3>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {esopStructure.vestingSchedule.map((year, idx) => (
                    <div key={idx} className="flex-shrink-0 bg-purple-900/30 border border-purple-500/30 rounded-lg p-4 min-w-[120px] text-center">
                      <p className="text-purple-400 font-bold">Year {year.year}</p>
                      <p className="text-2xl font-bold text-white">{year.vested}</p>
                      <p className="text-gray-400 text-xs">{year.notes}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Terms */}
              <div>
                <h3 className="text-white font-medium mb-3">Key Terms</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {esopStructure.keyTerms.map((term, idx) => (
                    <div key={idx} className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-medium text-sm">{term.term}</span>
                        <span className="text-purple-400 text-sm">{term.value}</span>
                      </div>
                      <p className="text-gray-400 text-xs">{term.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Allocation */}
              <div>
                <h3 className="text-white font-medium mb-3">Pool Allocation ({esopStructure.totalPool})</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {esopStructure.allocation.map((alloc, idx) => (
                    <div key={idx} className="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-700">
                      <p className="text-2xl font-bold text-purple-400">{alloc.percentage}</p>
                      <p className="text-white font-medium">{alloc.category}</p>
                      <p className="text-gray-400 text-xs">{alloc.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bonus Structure Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-amber-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'bonus' ? null : 'bonus')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-600/20 rounded-lg">
                <Award className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Bonus Structure</h2>
                <p className="text-gray-400 text-sm">5 types of bonuses - performance, sales, referral & more</p>
              </div>
            </div>
            {expandedSection === 'bonus' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'bonus' && (
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bonusStructure.map((bonus, idx) => (
                  <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-medium">{bonus.type}</h4>
                      <span className="text-green-400 font-bold">{bonus.range}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs mb-3">
                      <span className="text-amber-400">{bonus.frequency}</span>
                      <span className="text-gray-400">Payout: {bonus.payout}</span>
                    </div>
                    <ul className="space-y-1">
                      {bonus.criteria.map((criterion, cidx) => (
                        <li key={cidx} className="flex items-start gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {criterion}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Benefits Package Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-amber-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'benefits' ? null : 'benefits')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-pink-600/20 rounded-lg">
                <Gift className="w-6 h-6 text-pink-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Complete Benefits Package</h2>
                <p className="text-gray-400 text-sm">30+ benefits across 6 categories</p>
              </div>
            </div>
            {expandedSection === 'benefits' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'benefits' && (
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefitsPackage.map((category, idx) => {
                  const Icon = category.icon;
                  return (
                    <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                      <div className="flex items-center gap-2 mb-4">
                        <Icon className="w-5 h-5 text-pink-400" />
                        <h4 className="text-white font-medium">{category.category}</h4>
                      </div>
                      <div className="space-y-2">
                        {category.benefits.map((benefit, bidx) => (
                          <div key={bidx} className="flex items-center justify-between">
                            <span className="text-gray-300 text-sm">{benefit.name}</span>
                            <span className="text-green-400 text-sm font-medium">{benefit.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Salary Review Process */}
        <div className="bg-gray-800/40 rounded-2xl border border-amber-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'review' ? null : 'review')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Annual Salary Review Process</h2>
                <p className="text-gray-400 text-sm">How compensation decisions are made</p>
              </div>
            </div>
            {expandedSection === 'review' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'review' && (
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-4">
                {salaryReviewProcess.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                      <p className="text-white font-medium text-sm">{step.step}</p>
                      <p className="text-blue-400 text-xs">{step.timing}</p>
                      <p className="text-gray-400 text-xs">{step.description}</p>
                    </div>
                    {idx < salaryReviewProcess.length - 1 && (
                      <TrendingUp className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Reference */}
        <div className="bg-gradient-to-r from-amber-900/50 to-orange-900/50 rounded-2xl border border-amber-500/30 p-6">
          <h3 className="text-xl font-bold text-white mb-4">💡 Compensation Quick Reference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-amber-400 font-medium mb-2">Pay Day</h4>
              <p className="text-white text-lg font-bold">28th</p>
              <p className="text-gray-400 text-sm">of each month</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-green-400 font-medium mb-2">Bonus Cycle</h4>
              <p className="text-white text-lg font-bold">December</p>
              <p className="text-gray-400 text-sm">Annual performance</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-medium mb-2">Equity Vesting</h4>
              <p className="text-white text-lg font-bold">4 Years</p>
              <p className="text-gray-400 text-sm">1-year cliff</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-blue-400 font-medium mb-2">Review Cycle</h4>
              <p className="text-white text-lg font-bold">Jan-March</p>
              <p className="text-gray-400 text-sm">Effective April 1</p>
            </div>
          </div>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
